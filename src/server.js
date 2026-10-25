import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHmac, timingSafeEqual, randomBytes } from 'node:crypto';
import { Classroom, HttpError, fail } from './domain.js';
import { LocalStore, AzureStore, Conflict } from './store.js';
import { validateBank, publishBank } from './content.js';
const root=fileURLToPath(new URL('../',import.meta.url));
export function createApp({store,bank,sets,secret,adminPassword,production=false,clock}={}) {
  if(!secret||secret.length<32)throw new Error('SESSION_SECRET must contain at least 32 characters');
  if(!adminPassword||adminPassword.length<12)throw new Error('ADMIN_PASSWORD must contain at least 12 characters');
  const validation=validateBank(bank,sets);if(validation.length)throw new Error(validation.join('; '));
  let bankRevision=null,lastBankCheck=0;
  const classroom=new Classroom(store,bank,sets,clock),limits=new Map();
  const digest=x=>createHmac('sha256',secret).update(x).digest();
  const same=(a,b)=>{const x=digest(String(a)),y=digest(String(b));return timingSafeEqual(x,y);};
  const adminVersion=digest(adminPassword).toString('hex');
  async function refreshBank(force=false){
    if(!force&&Date.now()-lastBankCheck<2000)return;lastBankCheck=Date.now();
    const row=await store.get('catalog','bank-current');if(row&&row.data.revision!==bankRevision){
      const fresh=await Promise.all(row.data.refs.map(async v=>{const r=await store.get('versions','question:'+v);if(!r)throw new Error('Published bank incomplete');return r.data;}));
      const errors=validateBank(fresh,sets);if(errors.length)throw new Error('Stored question bank invalid');
      bank=fresh;classroom.bank=fresh;classroom.byId=new Map(fresh.map(q=>[q.id,q]));bankRevision=row.data.revision;
    }
  }
  function token(data){const text=Buffer.from(JSON.stringify({...data,exp:Date.now()+12*3600000})).toString('base64url');return text+'.'+digest(text).toString('base64url');}
  function identity(req,admin=false){
    const name=admin?'quiz_admin':'quiz_student';const raw=(req.headers.cookie??'').split(';').map(s=>s.trim()).find(s=>s.startsWith(name+'='))?.slice(name.length+1);if(!raw)return null;
    try{const [txt,sig]=raw.split('.');if(!same(sig,digest(txt).toString('base64url')))return null;const j=JSON.parse(Buffer.from(txt,'base64url'));if(j.exp<Date.now()||admin&&j.adminVersion!==adminVersion)return null;return j;}catch{return null;}
  }
  function cookie(res,name,data){res.setHeader('Set-Cookie',`${name}=${data?token(data):''}; HttpOnly; SameSite=Strict; Path=/; Max-Age=${data?43200:0}${production?'; Secure':''}`);}
  function limit(req,type,max){const key=type+':'+req.socket.remoteAddress;const now=Date.now(),a=limits.get(key)??{n:0,until:now+60000};if(a.until<now){a.n=0;a.until=now+60000;}if(++a.n>max)fail(429,'요청이 많습니다. 잠시 후 다시 시도하세요.');limits.set(key,a);if(limits.size>10000)for(const[k,v]of limits)if(v.until<now)limits.delete(k);}
  const json=(res,data,status=200)=>{res.writeHead(status,{'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store'});res.end(JSON.stringify(data));};
  async function body(req){let n=0,buf='';for await(const chunk of req){n+=chunk.length;if(n>1000000)fail(413,'요청 크기가 너무 큽니다.');buf+=chunk;}try{return JSON.parse(buf||'{}');}catch{fail(400,'JSON 형식을 확인하세요.');}}
  async function handler(req,res){
    res.setHeader('X-Content-Type-Options','nosniff');res.setHeader('Referrer-Policy','same-origin');res.setHeader('X-Frame-Options','DENY');
    res.setHeader('Content-Security-Policy',"default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; connect-src 'self'; frame-ancestors 'none'; base-uri 'none'; form-action 'self'");
    if(production)res.setHeader('Strict-Transport-Security','max-age=31536000');
    try{
      const u=new URL(req.url,'http://local');const p=u.pathname;
      if(p==='/health'){await store.get('catalog','course:ai901');return json(res,{status:'ok'});}
      if(p.startsWith('/api/')){
        limit(req,'api',600);await refreshBank();
        let b={};
        if(req.method==='POST'){
          if(req.headers['x-quiz-request']!=='1'||!req.headers['content-type']?.startsWith('application/json'))fail(403,'요청 출처를 확인하세요.');
          if(req.headers.origin&&new URL(req.headers.origin).host!==req.headers.host)fail(403,'허용되지 않은 출처입니다.');b=await body(req);
        }else if(req.method!=='GET')fail(405,'지원하지 않는 요청입니다.');
        if(p==='/api/courses'&&req.method==='GET')return json(res,await classroom.courses());
        if(p==='/api/enter'&&req.method==='POST'){limit(req,'enter',90);const user=await classroom.enter(b.course,b.name);cookie(res,'quiz_student',user);return json(res,{user});}
        if(p==='/api/logout'&&req.method==='POST'){cookie(res,'quiz_student',null);return json(res,{ok:true});}
        if(p==='/api/admin/login'&&req.method==='POST'){limit(req,'admin',12);if(!same(b.password,adminPassword))fail(401,'강사 암호가 맞지 않습니다.');cookie(res,'quiz_admin',{role:'admin',adminVersion});return json(res,{ok:true});}
        if(p==='/api/admin/logout'&&req.method==='POST'){cookie(res,'quiz_admin',null);return json(res,{ok:true});}
        if(p.startsWith('/api/admin/')){
          if(!identity(req,true))fail(401,'강사 로그인이 필요합니다.');
          const course=u.searchParams.get('course')??b.course??'ai901';
          if(p==='/api/admin/dashboard'&&req.method==='GET')return json(res,{...await classroom.dashboard(course),sets:sets.map(({questionIds,...s})=>({...s,count:questionIds.length})),courses:await classroom.courses()});
          if(p==='/api/admin/course'&&req.method==='POST')return json(res,await classroom.createCourse(b));
          if(p==='/api/admin/open'&&req.method==='POST')return json(res,await classroom.open(course,b));
          if(p==='/api/admin/session'&&req.method==='POST'){
            const change={};if(b.status!==undefined){if(!['open','closed'].includes(b.status))fail(400,'상태를 확인하세요.');change.status=b.status;}
            if(b.reveal!==undefined){if(!['immediate','closed'].includes(b.reveal))fail(400,'공개 설정을 확인하세요.');change.reveal=b.reveal;}
            if(b.voided!==undefined){if(!Array.isArray(b.voided))fail(400,'무효 문항을 확인하세요.');const sr=await store.get(course,'session:'+b.id);if(!sr)fail(404,'평가가 없습니다.');const set=sets.find(s=>s.id===sr.data.setId);if(b.voided.some(id=>!set.questionIds.includes(id)))fail(400,'다른 세트의 문항입니다.');change.voided=[...new Set(b.voided)];}
            return json(res,await classroom.changeSession(course,b.id,change));
          }
          if(p==='/api/admin/import'&&req.method==='POST'){await publishBank(store,b.bank,sets);await refreshBank(true);return json(res,{ok:true,count:bank.length});}
          if(p==='/api/admin/questions'&&req.method==='GET')return json(res,{bank,sets});
          fail(404,'관리 기능을 찾을 수 없습니다.');
        }
        const user=identity(req);if(!user)fail(401,'이름을 입력하고 입장하세요.');
        if(p==='/api/home'&&req.method==='GET')return json(res,await classroom.home(user));
        if(p==='/api/leaderboard'&&req.method==='GET')return json(res,await classroom.leaderboard(user.course,u.searchParams.get('session')));
        if(p==='/api/start'&&req.method==='POST')return json(res,await classroom.start(user,b.sessionId,b.practice===true));
        if(p==='/api/attempt'&&req.method==='GET'){const a=await store.get(user.course,u.searchParams.get('id')??'');if(!a)fail(404,'응시 기록이 없습니다.');return json(res,await classroom.view(user,a.data));}
        if(p==='/api/answer'&&req.method==='POST')return json(res,await classroom.save(user,b.id,b.answers,b.revision,false));
        if(p==='/api/submit'&&req.method==='POST')return json(res,await classroom.save(user,b.id,b.answers,b.revision,true));
        fail(404,'요청한 기능이 없습니다.');
      }
      const files={'/':'index.html','/admin':'admin.html','/app.js':'app.js','/admin.js':'admin.js','/common.js':'common.js','/style.css':'style.css'};
      const file=files[p];if(!file){res.writeHead(404);return res.end('Not found');}
      if(req.method!=='GET'&&req.method!=='HEAD')fail(405,'지원하지 않는 요청입니다.');
      res.setHeader('Content-Type',file.endsWith('.js')?'text/javascript; charset=utf-8':file.endsWith('.css')?'text/css; charset=utf-8':'text/html; charset=utf-8');res.setHeader('Cache-Control','no-cache');res.end(req.method==='HEAD'?undefined:fs.readFileSync(path.join(root,'public',file)));
    }catch(e){if(res.headersSent)return res.end();const status=e instanceof HttpError?e.status:e instanceof Conflict?409:503;if(status===503)console.error('Request failed:',e.name);json(res,{error:status===503?'저장소 연결을 확인한 뒤 다시 시도하세요.':e.message},status);}
  }
  return {classroom,handler,init:()=>classroom.init()};
}
if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url)){
  const production=process.env.NODE_ENV==='production',driver=process.env.STORAGE_DRIVER??'local';
  if(production&&driver!=='azure')throw new Error('Production requires STORAGE_DRIVER=azure');
  const dir=path.resolve(process.env.DATA_DIR??path.join(root,'.data'));fs.mkdirSync(dir,{recursive:true});
  let secret=process.env.SESSION_SECRET;
  if(!secret&&!production){const f=path.join(dir,'session-secret');if(!fs.existsSync(f))fs.writeFileSync(f,randomBytes(48).toString('hex'),{mode:0o600});secret=fs.readFileSync(f,'utf8');}
  const store=driver==='azure'?new AzureStore(process.env.TABLE_ENDPOINT,process.env.TABLE_NAME):new LocalStore(dir);
  const bank=JSON.parse(fs.readFileSync(path.join(root,'content/questions.json')));const sets=JSON.parse(fs.readFileSync(path.join(root,'content/sets.json')));
  const app=createApp({store,bank,sets,secret,adminPassword:process.env.ADMIN_PASSWORD,production});await app.init();
  const port=Number(process.env.PORT??3100),host=process.env.HOST??(production?'0.0.0.0':'127.0.0.1');
  const server=http.createServer(app.handler);server.listen(port,host,()=>console.log(`AI-901 Classroom: http://${host}:${server.address().port}`));
  const sweep=setInterval(()=>{app.classroom.courses().then(cs=>Promise.all(cs.map(c=>app.classroom.attempts(c.id)))).catch(()=>console.error('Deadline sweep failed'));},15000);sweep.unref();
  process.on('SIGTERM',()=>{clearInterval(sweep);server.close();});
}
