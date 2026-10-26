import { createHash, createHmac, randomUUID } from 'node:crypto';
import { Conflict, update } from './store.js';
export class HttpError extends Error {constructor(status,message){super(message);this.status=status;}}
export const fail=(status,message)=>{throw new HttpError(status,message)};
export const normalizeName=n=>String(n??'').normalize('NFKC').trim().replace(/\s+/g,' ');
export const studentId=n=>createHash('sha256').update(normalizeName(n)).digest('hex').slice(0,32);
export function grade(questions,answers,invalid=[]) {
  const scored=questions.filter(q=>!invalid.includes(q.id));let correct=0;
  const details=questions.map(q=>{const chosen=answers[q.id]??[];const ok=JSON.stringify([...chosen].sort())===JSON.stringify([...q.correct].sort());if(ok&&!invalid.includes(q.id))correct++;return {questionId:q.id,chosen,correct:ok,voided:invalid.includes(q.id)};});
  return {correct,total:scored.length,percent:scored.length?Math.round(correct/scored.length*10000)/100:0,details};
}
export const shuffle=(list,seed)=>[...list].sort((a,b)=>createHmac('sha256',seed).update(String(a.id??a)).digest('hex').localeCompare(createHmac('sha256',seed).update(String(b.id??b)).digest('hex')));
export class Classroom {
  constructor(store,bank,sets,clock=()=>Date.now()){this.store=store;this.bank=bank;this.sets=sets;this.clock=clock;this.byId=new Map(bank.map(q=>[q.id,q]));this.questionCache=new Map();}
  async init(){
    await this.store.init();
    if(!await this.store.get('catalog','course:ai901'))try{await this.createCourse({id:'ai901',name:'AI-901 · 4일 집중 과정'});}catch(e){if(!(e instanceof Conflict))throw e;}
  }
  async createCourse({id,name}){
    if(!/^[a-z0-9-]{2,40}$/.test(id))fail(400,'기수 ID는 영문 소문자·숫자·하이픈 2~40자로 입력하세요.');
    if(!name?.trim()||name.length>80)fail(400,'기수 이름을 확인하세요.');
    await this.store.put('catalog','course:'+id,{id,name:name.trim(),createdAt:this.clock()});return {id,name};
  }
  async courses(){return (await this.store.list('catalog','course:')).map(x=>x.data);}
  async enter(course,name){
    if(!await this.store.get('catalog','course:'+course))fail(404,'기수를 찾을 수 없습니다.');
    name=normalizeName(name);if(name.length<2||name.length>24||/[\p{Cc}\p{Cf}]/u.test(name))fail(400,'이름을 2~24자로 입력하세요.');
    const id=studentId(name);await update(this.store,course,'student:'+id,old=>old??{id,name,createdAt:this.clock()});return {course,student:id,name};
  }
  async sessions(course){return (await this.store.list(course,'session:')).map(r=>r.data).sort((a,b)=>a.createdAt-b.createdAt);}
  async open(course,{setId,minutes,reveal='immediate'}){
    if(!this.sets.some(s=>s.id===setId))fail(400,'평가 세트를 확인하세요.');
    if(!await this.store.get('catalog','course:'+course))fail(404,'기수가 없습니다.');
    if(!Number.isInteger(minutes)||minutes<1||minutes>180)fail(400,'제한 시간은 1~180분입니다.');
    if(!['immediate','closed'].includes(reveal))fail(400,'해설 공개 정책을 확인하세요.');
    const id=randomUUID(),s={id,setId,minutes,reveal,status:'open',createdAt:this.clock(),voided:[]};
    await this.store.put(course,'session:'+id,s);return s;
  }
  async changeSession(course,id,change){
    return update(this.store,course,'session:'+id,s=>{if(!s)fail(404,'평가가 없습니다.');return {...s,...change};});
  }
  async start(user,sessionId,practice=false){
    const sr=await this.store.get(user.course,'session:'+sessionId);if(!sr)fail(404,'평가가 없습니다.');const s=sr.data;
    if(!practice&&s.status!=='open')fail(409,'평가가 마감되었습니다.');
    const officialKey=`attempt:${sessionId}:${user.student}:official`;
    const prev=await this.store.get(user.course,officialKey);
    if(practice&&(!prev||!await this.canReveal(s,prev.data)))fail(403,'공식 제출과 해설 공개 후 복습할 수 있습니다.');
    const id=practice?randomUUID():'official',rk=`attempt:${sessionId}:${user.student}:${id}`;
    const existing=await this.store.get(user.course,rk);if(existing)return this.view(user,existing.data);
    const set=this.sets.find(x=>x.id===s.setId);const qs=set.questionIds.map(id=>this.byId.get(id));
    const a={id:rk,student:user.student,name:user.name,sessionId,setId:s.setId,practice,startedAt:this.clock(),deadline:this.clock()+s.minutes*60000,submittedAt:null,answers:{},revision:0,seed:randomUUID(),questions:qs};
    // 문항별 불변 스냅샷으로 저장해 Azure 문자열 속성 크기 제한을 지킨다.
    const refs=[];
    for(const q of qs){
      const version=createHash('sha256').update(JSON.stringify(q)).digest('hex');refs.push(version);
      if(!await this.store.get('versions','question:'+version))try{await this.store.put('versions','question:'+version,q);}catch(e){if(!(e instanceof Conflict))throw e;}
    }
    delete a.questions;a.questionVersions=refs;
    try{await this.store.put(user.course,rk,a);}catch(e){if(!(e instanceof Conflict))throw e;}
    return this.view(user,(await this.store.get(user.course,rk)).data);
  }
  async questions(a){
    return Promise.all(a.questionVersions.map(async v=>{if(this.questionCache.has(v))return this.questionCache.get(v);const row=await this.store.get('versions','question:'+v);if(!row)throw new Error('Question version missing');if(this.questionCache.size>4000)this.questionCache.clear();this.questionCache.set(v,row.data);return row.data;}));
  }
  async canReveal(s,a){return a.submittedAt!==null&&(s.reveal==='immediate'||s.status==='closed');}
  validateAnswers(qs,answers){
    if(!answers||typeof answers!=='object'||Array.isArray(answers))fail(400,'답안 형식을 확인하세요.');
    const map=new Map(qs.map(q=>[q.id,q]));
    for(const [id,choices]of Object.entries(answers)){const q=map.get(id);if(!q||!Array.isArray(choices)||choices.length>q.options.length||new Set(choices).size!==choices.length||choices.some(c=>!q.options.some(o=>o.id===c))||q.type==='single'&&choices.length>1)fail(400,'허용되지 않은 답안입니다.');}
  }
  async save(user,id,answers,revision,submit=false){
    const row=await this.store.get(user.course,id);if(!row||row.data.student!==user.student)fail(404,'답안이 없습니다.');
    const qs=await this.questions(row.data);this.validateAnswers(qs,answers);
    if(!Number.isInteger(revision)||revision<0)fail(400,'답안 버전을 확인하세요.');
    const a=await update(this.store,user.course,id,async old=>{
      if(!old||old.student!==user.student)fail(404,'답안이 없습니다.');
      if(old.submittedAt!==null)return old;
      const sr=await this.store.get(user.course,'session:'+old.sessionId);const s=sr.data;
      const expired=this.clock()>=old.deadline||!old.practice&&s.status==='closed';
      if(!expired&&revision!==old.revision)fail(409,'다른 창에서 답안이 변경됐습니다. 새로고침 후 확인하세요.');
      const next={...old,answers:expired?old.answers:answers,revision:old.revision+1};
      if(submit||expired)next.submittedAt=this.clock();return next;
    });return this.view(user,a);
  }
  async finalize(course,a){
    if(a.submittedAt!==null)return a;
    const sr=await this.store.get(course,'session:'+a.sessionId);
    if(this.clock()<a.deadline&&(a.practice||sr?.data.status!=='closed'))return a;
    return update(this.store,course,a.id,old=>old.submittedAt!==null?old:{...old,submittedAt:this.clock(),revision:old.revision+1});
  }
  async view(user,a){
    if(a.student!==user.student)fail(403,'본인 답안만 열 수 있습니다.');a=await this.finalize(user.course,a);
    const s=(await this.store.get(user.course,'session:'+a.sessionId)).data;const qs=await this.questions(a);const result=a.submittedAt!==null?grade(qs,a.answers,s.voided):null;
    const reveal=await this.canReveal(s,a);
    const publicQs=(qs.some(q=>q.reference)?qs:shuffle(qs,a.seed)).map(q=>({id:q.id,type:q.type,topic:q.topic,prompt:q.prompt,code:q.code,...(q.reference?{reference:q.reference}:{}),options:(q.reference&&!q.reference.presentation?q.options:shuffle(q.options,a.seed+q.id)).map(o=>({id:o.id,text:o.text})),...(reveal?{correct:q.correct,explanation:q.explanation,optionExplanations:q.options.map(o=>({id:o.id,reason:o.reason})),source:q.source,moduleAssessment:q.moduleAssessment,lecture:q.lecture,lab:q.lab}: {})}));
    // 해설 비공개 중에는 문항별 정오답도 숨긴다.
    return {id:a.id,setId:a.setId,sessionId:a.sessionId,practice:a.practice,deadline:a.deadline,startedAt:a.startedAt,submittedAt:a.submittedAt,revision:a.revision,answers:a.answers,officialKoreanMigration:a.officialKoreanMigration,questions:publicQs,reveal,result:result?{correct:result.correct,total:result.total,percent:result.percent,...(reveal?{details:result.details}: {})}:null,serverTime:this.clock()};
  }
  async attempts(course){const rows=await this.store.list(course,'attempt:');return Promise.all(rows.map(r=>this.finalize(course,r.data)));}
  async home(user){
    const ss=await this.sessions(user.course),aa=(await this.attempts(user.course)).filter(a=>a.student===user.student);
    const attempts=await Promise.all(aa.map(async a=>{const s=ss.find(s=>s.id===a.sessionId);const result=a.submittedAt!==null?grade(await this.questions(a),a.answers,s.voided):null;return {id:a.id,setId:a.setId,sessionId:a.sessionId,practice:a.practice,submittedAt:a.submittedAt,startedAt:a.startedAt,result:result?{percent:result.percent,correct:result.correct,total:result.total}:null};}));
    attempts.sort((a,b)=>a.startedAt-b.startedAt);
    return {user,sets:this.sets.map(({questionIds,...s})=>({...s,count:questionIds.length})),sessions:ss,attempts};
  }
  async leaderboard(course,sessionId){
    const ss=await this.sessions(course),aa=(await this.attempts(course)).filter(a=>a.submittedAt!==null&&!a.practice);
    const students=(await this.store.list(course,'student:')).map(r=>r.data);const scores=[];
    for(const a of aa){const s=ss.find(x=>x.id===a.sessionId);const g=grade(await this.questions(a),a.answers,s.voided);scores.push({...a,percent:g.percent});}
    const rows=students.map(st=>{
      const own=scores.filter(a=>a.student===st.id);
      const selected=sessionId?own.filter(a=>a.sessionId===sessionId):own.filter(a=>!a.setId.startsWith('MOCK')&&this.sets.find(s=>s.id===a.setId)?.includeInCumulative!==false);
      const bySet=new Map();for(const a of selected)if(!bySet.has(a.setId)||a.startedAt<bySet.get(a.setId).startedAt)bySet.set(a.setId,a);
      return {name:st.name,student:st.id,score:Math.round([...bySet.values()].reduce((s,a)=>s+a.percent,0)*100)/100,completed:bySet.size};
    }).sort((a,b)=>b.score-a.score||a.name.localeCompare(b.name,'ko'));
    let rank=0,last=null;return rows.map((r,i)=>{if(r.score!==last){rank=i+1;last=r.score;}return {...r,rank};});
  }
  async dashboard(course){
    const sessions=await this.sessions(course),attempts=await this.attempts(course),students=(await this.store.list(course,'student:')).map(r=>r.data);const stats={};
    const graded=[];
    for(const a of attempts){if(a.submittedAt===null||a.practice)continue;const s=sessions.find(s=>s.id===a.sessionId);const qs=await this.questions(a);const g=grade(qs,a.answers,s.voided);graded.push({...a,questions:undefined,result:g});
      for(const d of g.details){if(d.voided)continue;const q=qs.find(q=>q.id===d.questionId);const key=s.id+':'+q.id;const stat=stats[key]??={sessionId:s.id,questionId:q.id,prompt:q.prompt,topic:q.topic,wrong:0,total:0,options:{}};stat.total++;if(!d.correct)stat.wrong++;for(const c of d.chosen)stat.options[c]=(stat.options[c]??0)+1;}
    }
    return {sessions,students,attempts:attempts.map(({answers,seed,...a})=>a),results:graded,stats:Object.values(stats).sort((a,b)=>b.wrong/b.total-a.wrong/a.total)};
  }
}
