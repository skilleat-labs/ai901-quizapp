import fs from 'node:fs';
import { execFileSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root=fileURLToPath(new URL('../',import.meta.url));
for(const folder of ['src','public','scripts'])for(const f of fs.readdirSync(path.join(root,folder)))if(f.endsWith('.js'))execFileSync(process.execPath,['--check',path.join(root,folder,f)],{stdio:'inherit'});
import { validateBank } from '../src/content.js';
const bank=JSON.parse(fs.readFileSync(new URL('../content/questions.json',import.meta.url)));
const sets=JSON.parse(fs.readFileSync(new URL('../content/sets.json',import.meta.url)));
const errors=validateBank(bank,sets);
for(const s of sets){if(s.questionIds.length!==(s.expectedCount??(s.kind==='mock'?40:20)))errors.push('문항 수: '+s.id);if(s.kind==='mock'){const qs=s.questionIds.map(id=>bank.find(q=>q.id===id));if(qs.filter(q=>q.domain==='concept').length!==(s.conceptCount??17))errors.push('모의고사 개념 비율: '+s.id);}}
const official=sets.find(s=>s.mode==='official-korean');if(!official||official.questionIds.length!==43||official.questionIds.some(id=>!bank.find(q=>q.id===id)?.reference))errors.push('공식 원문 43문항 참조 검사 실패');
const finals=sets.filter(s=>s.phase==='final');if(finals.length!==3||new Set(finals.flatMap(s=>s.questionIds)).size!==135)errors.push('최종 모의고사 3회/135문항 중복 검사 실패');
if(errors.length){console.error(errors.join('\n'));process.exitCode=1;}else console.log(`${bank.length}문항 / ${sets.length}세트 · ID, 선택지, 정답, 해설, 출처, 세트 비율 검증 통과`);
