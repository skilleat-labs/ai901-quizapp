import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
import {LocalStore,update} from '../src/store.js';

// 번호만 입력하던 미제출 4회차에만 적용한다. 과거 답안/스냅샷은 별도 행에 보존한다.
export async function migrateOfficialAttempts(store,bank,clock=()=>Date.now()){
 const current=new Map(bank.map(q=>[q.id,q]));let migrated=0;
 for(const course of await store.list('catalog','course:')){
  for(const row of await store.list(course.data.id,'attempt:')){
   const a=row.data;if(a.setId!=='MOCK-FINAL-4'||a.submittedAt!==null)continue;
   const oldQuestions=await Promise.all(a.questionVersions.map(async v=>(await store.get('versions','question:'+v))?.data));
   if(!oldQuestions.length||!oldQuestions.every(q=>q?.reference&&!q.reference.presentation))continue;
   const fresh=oldQuestions.map(q=>current.get(q.id));if(fresh.some(q=>q?.reference?.presentation!=='korean-summary'))throw new Error('한국어 개정 문항 누락');
   const refs=[];
   for(const q of fresh){const v=createHash('sha256').update(JSON.stringify(q)).digest('hex');refs.push(v);if(!await store.get('versions','question:'+v))await store.put('versions','question:'+v,q);}
   const backupKey='migration-backup:official-korean:'+a.id;
   if(!await store.get(course.data.id,backupKey))await store.put(course.data.id,backupKey,{attempt:a,reason:'번호 입력형에서 한국어 직접 풀이형으로 변경',createdAt:clock()});
   const session=(await store.get(course.data.id,'session:'+a.sessionId)).data;
   await update(store,course.data.id,a.id,old=>{
    if(old.submittedAt!==null||old.revision!==a.revision)throw new Error('응시 상태 변경: 서버 정지 후 다시 실행하세요.');
    return {...old,answers:{},questionVersions:refs,revision:old.revision+1,deadline:clock()+session.minutes*60000,officialKoreanMigration:{at:clock(),previousAnswered:Object.values(old.answers).filter(x=>x.length).length}};
   });migrated++;
  }
 }
 return migrated;
}
if(process.argv[1]&&fileURLToPath(import.meta.url)===path.resolve(process.argv[1])){
 const bank=JSON.parse(fs.readFileSync(new URL('../content/questions.json',import.meta.url)));
 const store=new LocalStore(process.env.DATA_DIR??'.data');await store.init();
 console.log(`이전 형식 미제출 4회차 ${await migrateOfficialAttempts(store,bank)}개를 한국어 직접 풀이로 전환했습니다. 기존 답안은 별도 보관했습니다.`);
}
