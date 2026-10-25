"""개정 응용 은행에서 중복 없는 최종 45문항 3세트를 편성한다."""
import hashlib
import json
import random
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]

def category(q):
 parts=q['id'].split('-');group='-'.join(parts[:2]);index=int(parts[2])
 if q['domain']=='concept':
  if group=='D1-A' and index>=5 or group=='M-C' and 8<=index<=12:return 'responsible'
  if group=='D2-A' or group=='M-C' and (3<=index<=7 or index==17):return 'models'
  return 'workloads'
 if group=='D1-B' or group=='M-I' and index<=5:return 'setup'
 if group=='D3-B':return 'language' if index<=5 else 'speech'
 if group=='D4-B':return 'vision' if index<=6 else 'extraction'
 if group=='M-I':
  if index<=12:return 'generative'
  if index<=15:return 'language'
  if index<=18:return 'speech'
  if index<=21:return 'vision'
  return 'extraction'
 return 'generative'

QUOTAS=[dict(responsible=5,models=5,workloads=9,setup=4,generative=9,language=3,speech=3,vision=4,extraction=3),dict(responsible=5,models=5,workloads=9,setup=4,generative=9,language=3,speech=3,vision=4,extraction=3),dict(responsible=6,models=5,workloads=8,setup=4,generative=10,language=3,speech=3,vision=4,extraction=2)]

def build(bank,sets):
 candidates=[q for q in bank if q['difficulty']=='응용']
 for seed in range(20261025,20262025):
  rng=random.Random(seed);pools={k:[] for k in QUOTAS[0]}
  for q in candidates:pools[category(q)].append(q)
  for pool in pools.values():rng.shuffle(pool)
  papers=[[] for _ in range(3)];targets=[set() for _ in range(3)];ok=True
  for cat in sorted(pools,key=lambda k:len(pools[k])-sum(x[k] for x in QUOTAS)):
   need=[x[cat] for x in QUOTAS]
   while any(need):
    for i in sorted(range(3),key=lambda i:-need[i]):
     if not need[i]:continue
     q=next((q for q in pools[cat] if q['id'].rsplit('-',1)[0] not in targets[i]),None)
     if q is None:ok=False;break
     pools[cat].remove(q);papers[i].append(q);targets[i].add(q['id'].rsplit('-',1)[0]);need[i]-=1
    if not ok:break
   if not ok:break
  if ok and all(sum(bool(q.get('code')) for q in p)>=4 and sum(q['type']=='multiple' for q in p)>=2 for p in papers):break
 else:raise ValueError('최종 모의고사 편성 조건을 만족하지 못했습니다.')
 selected=[]
 for i,paper in enumerate(papers,1):
  rng.shuffle(paper);ids=[q['id'] for q in paper];assert len(ids)==45
  selected.extend(ids)
  sets.append({'id':f'MOCK-FINAL-{i}','title':f'최종 모의고사 {i} · 45문항','day':4,'minutes':50,'kind':'mock','phase':'final','expectedCount':45,'conceptCount':19,'questionIds':ids})
 assert len(set(selected))==135
 return papers

if __name__=='__main__':
 bank=json.loads((ROOT/'content/questions.json').read_text());sets=json.loads((ROOT/'content/sets.json').read_text());sets=[s for s in sets if s.get('phase')!='final']
 papers=build(bank,sets)
 sets.sort(key=lambda s:s.get('phase')=='official')
 (ROOT/'content/sets.json').write_text(json.dumps(sets,ensure_ascii=False,indent=2)+'\n')
 lines=['# 최종 모의고사 3회 · 편성표','','개정된 응용 문항을 재구성한 45문항 × 3회입니다. 새로운 135문항을 별도 집필한 것은 아닙니다. 기존 수업·종합 문제와 중복되지만 최종 3회 사이에는 동일 문항 ID가 겹치지 않습니다. 같은 주제의 다른 상황은 포함될 수 있습니다.','','각 50분(강사 개방 시 변경 가능), 개념 19 / 구현 26. 실제 시험의 문항 수·시간·난이도와 동일하다는 뜻은 아닙니다. 사이트는 응시자마다 문제·보기 순서를 다시 섞습니다.','','| 회차 | 문항 | 개념 | 구현 | 코드 | 복수 선택 |','|---|---:|---:|---:|---:|---:|']
 for i,paper in enumerate(papers,1):lines.append(f"| 최종 {i} | 45 | 19 | 26 | {sum(bool(q.get('code')) for q in paper)} | {sum(q['type']=='multiple' for q in paper)} |")
 for i,paper in enumerate(papers,1):
  lines+=['',f'## 최종 모의고사 {i}','','| 편성 번호 | 문항 ID | 범위 | 주제 |','|---|---|---|---|']
  lines += [f"| {j} | {q['id']} | {'개념' if q['domain']=='concept' else '구현'} | {q['topic']} |" for j,q in enumerate(paper,1)]
 (ROOT/'docs/FINAL_EXAMS.md').write_text('\n'.join(lines)+'\n')
 print('최종 45문항 × 3회 편성 완료: 세트 간 중복 0')
 out=ROOT/'docs/final-exams';out.mkdir(exist_ok=True)
 for i,paper in enumerate(papers,1):
  questions=[f'# 최종 모의고사 {i} · 45문항','','권장 시간 50분. 복수 선택은 정답을 모두 골라야 득점합니다. 자체 제작 문제를 재구성한 연습 평가이며 공식 시험 원문이 아닙니다.','']
  answers=[f'# 최종 모의고사 {i} · 정답과 해설','']
  for j,q in enumerate(paper,1):
   opts=q['options'][:];random.Random(f'final-{i}-{q["id"]}').shuffle(opts)
   questions += [f'## {j}. {q["prompt"]}','']
   if q.get('code'):questions += ['```python',q['code'],'```','']
   questions += [f'{chr(65+k)}. {o["text"]}' for k,o in enumerate(opts)]+['','내 답: __________','']
   letters=', '.join(chr(65+k) for k,o in enumerate(opts) if o['id'] in q['correct'])
   answers += [f'## {j}. 정답: {letters}',f'문항 ID: {q["id"]}','',q['explanation'],'']+[f'- {chr(65+k)}: {o["reason"]}' for k,o in enumerate(opts)]+['',f'[공식 근거]({q["source"]})','']
  (out/f'final-{i}-questions.md').write_text('\n'.join(questions))
  (out/f'final-{i}-answers.md').write_text('\n'.join(answers))
