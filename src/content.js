import { createHash } from 'node:crypto';
import { HttpError } from './domain.js';
import { Conflict, update } from './store.js';
export function validateBank(bank,sets){
 const errors=[];
 if(!Array.isArray(bank))return ['문제은행은 배열이어야 합니다.'];
 const ids=new Set(),prompts=new Set();
 for(const q of bank){
  if(!q||typeof q!=='object'){errors.push('문항 형식 오류');continue;}
  if(!/^[A-Z0-9-]{3,50}$/.test(q.id??'')||ids.has(q.id))errors.push('문항 ID 중복/오류: '+q.id);ids.add(q.id);
  if(typeof q.prompt!=='string'||q.prompt.length<10||q.prompt.length>1200||prompts.has(q.prompt))errors.push('질문 중복/길이 오류: '+q.id);prompts.add(q.prompt);
  if(!['single','multiple'].includes(q.type))errors.push('유형 오류: '+q.id);
  if(!Number.isInteger(q.version)||q.version<1)errors.push('버전 오류: '+q.id);
  if(!Array.isArray(q.options)||q.options.length<3||q.options.length>6){errors.push('선택지 오류: '+q.id);continue;}
  const oi=new Set(),ot=new Set();for(const o of q.options){if(!o||!/^[a-z]$/.test(o.id??'')||oi.has(o.id)||typeof o.text!=='string'||!o.text.trim()||ot.has(o.text)||typeof o.reason!=='string'||o.reason.length<5)errors.push('선택지/해설 오류: '+q.id);oi.add(o?.id);ot.add(o?.text);}
  if(!Array.isArray(q.correct)||!q.correct.length||new Set(q.correct).size!==q.correct.length||q.correct.some(id=>!oi.has(id))||q.type==='single'&&q.correct.length!==1||q.type==='multiple'&&q.correct.length<2)errors.push('정답 오류: '+q.id);
  for(const k of ['explanation','topic','lecture','lab','authorship'])if(typeof q[k]!=='string'||!q[k].trim())errors.push('필수 설명 누락 '+k+': '+q.id);
  if(!/^https:\/\/learn\.microsoft\.com\//.test(q.source??''))errors.push('공식 근거 URL 오류: '+q.id);
  if(q.moduleAssessment!==undefined&&!/^https:\/\/learn\.microsoft\.com\/en-us\/training\/modules\/.+\/\d+-knowledge-check$/.test(q.moduleAssessment))errors.push('공식 지식 점검 URL 오류: '+q.id);
  if(q.type==='multiple'&&!q.prompt.includes('모두 고르시오'))errors.push('복수 선택 지시 누락: '+q.id);
  if(q.reference&&(!/^https:\/\/learn\.microsoft\.com\/en-us\/training\/modules\/.+\/\d+-knowledge-check$/.test(q.reference.url)||!Number.isInteger(q.reference.questionNumber)||q.reference.questionNumber<1||q.reference.questionNumber>20))errors.push('공식 원문 참조 오류: '+q.id);
  if(q.code!==undefined&&(typeof q.code!=='string'||q.code.length>5000))errors.push('코드 형식 오류: '+q.id);
  if(Buffer.byteLength(JSON.stringify(q),'utf16le')>50000)errors.push('문항 저장 크기 초과: '+q.id);
 }
 for(const s of sets){if(!Array.isArray(s.questionIds)||new Set(s.questionIds).size!==s.questionIds.length||s.questionIds.some(id=>!ids.has(id)))errors.push('세트 매핑 오류: '+s.id);}
 const expected=new Set(sets.flatMap(s=>s.questionIds));if(bank.length!==expected.size||bank.some(q=>!expected.has(q.id)))errors.push('기존 문항 ID/세트 범위를 유지해야 합니다.');
 return errors;
}
export async function publishBank(store,bank,sets){
 const errors=validateBank(bank,sets);if(errors.length)throw new HttpError(400,errors.slice(0,8).join('\n'));
 const refs=[];
 for(const q of bank){const v=createHash('sha256').update(JSON.stringify(q)).digest('hex');refs.push(v);if(!await store.get('versions','question:'+v))try{await store.put('versions','question:'+v,q);}catch(e){if(!(e instanceof Conflict))throw e;}}
 const revision=createHash('sha256').update(JSON.stringify(refs)).digest('hex');
 await update(store,'catalog','bank-current',()=>({revision,refs,publishedAt:Date.now()}));return revision;
}
