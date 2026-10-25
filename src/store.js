import fs from 'node:fs';
import path from 'node:path';
import { randomUUID } from 'node:crypto';

export class Conflict extends Error {}
export class LocalStore {
  constructor(dir) {
    this.file = path.join(dir, 'records.json');
    fs.mkdirSync(dir, {recursive:true});
    // 단일 프로세스 개발용. 멀티 인스턴스 운영에서는 AzureStore를 사용한다.
    this.rows = fs.existsSync(this.file) ? JSON.parse(fs.readFileSync(this.file, 'utf8')) : {};
  }
  async init() {}
  key(pk,rk) { return JSON.stringify([pk,rk]); }
  async get(pk,rk) { return structuredClone(this.rows[this.key(pk,rk)] ?? null); }
  async list(pk,prefix='') {
    return Object.entries(this.rows).filter(([k])=>{const [p,r]=JSON.parse(k);return p===pk&&r.startsWith(prefix)}).map(([,v])=>structuredClone(v));
  }
  async put(pk,rk,data,expected=null) {
    const k=this.key(pk,rk), old=this.rows[k];
    if (expected===null && old || expected!==null && old?.etag!==expected) throw new Conflict('Concurrent change');
    const row={data:structuredClone(data),etag:randomUUID()};
    const next={...this.rows,[k]:row};
    const tmp=this.file+'.tmp'; fs.writeFileSync(tmp,JSON.stringify(next)); fs.renameSync(tmp,this.file);
    this.rows=next; return structuredClone(row);
  }
}
export class AzureStore {
  constructor(endpoint,table='QuizData') {
    if(!/^https:\/\/[a-z0-9]+\.table\.core\.windows\.net\/?$/.test(endpoint??'')) throw new Error('Invalid TABLE_ENDPOINT');
    if(!/^[A-Za-z][A-Za-z0-9]{2,62}$/.test(table)) throw new Error('Invalid TABLE_NAME');
    this.endpoint=endpoint.replace(/\/$/,'');this.table=table;this.token=null;
  }
  async accessToken() {
    if(this.token && this.token.expires> Date.now()+60000) return this.token.value;
    if(!process.env.IDENTITY_ENDPOINT||!process.env.IDENTITY_HEADER) throw new Error('App Service managed identity is required');
    const u=new URL(process.env.IDENTITY_ENDPOINT);u.searchParams.set('resource','https://storage.azure.com/');u.searchParams.set('api-version','2019-08-01');
    const r=await fetch(u,{headers:{'X-IDENTITY-HEADER':process.env.IDENTITY_HEADER},signal:AbortSignal.timeout(10000)});
    if(!r.ok) throw new Error('Managed identity token unavailable');
    const j=await r.json();this.token={value:j.access_token,expires:Number(j.expires_on)*1000};return this.token.value;
  }
  async request(route,method='GET',body,extra={}) {
    const r=await fetch(this.endpoint+'/'+route,{method,headers:{Authorization:'Bearer '+await this.accessToken(),'x-ms-version':'2019-02-02','x-ms-date':new Date().toUTCString(),Accept:'application/json;odata=nometadata','Content-Type':'application/json',...extra},body:body===undefined?undefined:JSON.stringify(body),signal:AbortSignal.timeout(15000)});
    return r;
  }
  async init() {const r=await this.request('Tables','POST',{TableName:this.table});if(!r.ok&&r.status!==409)throw new Error('Cannot initialize Azure table: '+r.status);}
  entity(pk,rk){return `${this.table}(PartitionKey='${encodeURIComponent(pk.replaceAll("'","''"))}',RowKey='${encodeURIComponent(rk.replaceAll("'","''"))}')`;}
  decode(j,etag){return {data:JSON.parse(j.Payload),etag:etag??j['odata.etag']};}
  async get(pk,rk){const r=await this.request(this.entity(pk,rk));if(r.status===404)return null;if(!r.ok)throw new Error('Table read failed: '+r.status);return this.decode(await r.json(),r.headers.get('etag'));}
  async list(pk,prefix='') {
    const rows=[];let nextP,nextR;
    do {
      const u=new URL(this.endpoint+'/'+this.table+'()');u.searchParams.set('$filter',`PartitionKey eq '${pk.replaceAll("'","''")}' and RowKey ge '${prefix}' and RowKey lt '${prefix+'\uffff'}'`);
      if(nextP)u.searchParams.set('NextPartitionKey',nextP);if(nextR)u.searchParams.set('NextRowKey',nextR);
      const r=await this.request(u.href.slice(this.endpoint.length+1));if(!r.ok)throw new Error('Table query failed: '+r.status);
      rows.push(...(await r.json()).value.map(j=>this.decode(j)));nextP=r.headers.get('x-ms-continuation-NextPartitionKey');nextR=r.headers.get('x-ms-continuation-NextRowKey');
    }while(nextP||nextR);
    return rows;
  }
  async put(pk,rk,data,expected=null){
    const payload=JSON.stringify(data);if(Buffer.byteLength(payload,'utf16le')>60000)throw new Error('Entity payload too large');
    const body={PartitionKey:pk,RowKey:rk,Payload:payload};
    const r=await this.request(expected===null?this.table:this.entity(pk,rk),expected===null?'POST':'PUT',body,expected===null?{Prefer:'return-content'}:{'If-Match':expected});
    if(r.status===409||r.status===412)throw new Conflict('Concurrent change');if(!r.ok)throw new Error('Table write failed: '+r.status);
    return {data:structuredClone(data),etag:r.headers.get('etag')};
  }
}
export async function update(store,pk,rk,fn) {
  for(let i=0;i<8;i++) {const row=await store.get(pk,rk);const data=await fn(row?.data??null);try{return (await store.put(pk,rk,data,row?.etag??null)).data;}catch(e){if(!(e instanceof Conflict))throw e;}}
  throw new Conflict('Retry the operation');
}
