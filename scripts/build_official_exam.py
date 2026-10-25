"""공식 문제를 복제하지 않고 원문 번호·링크와 검토용 답안만 구성한다."""
import json
from official_korean import load_korean
from polish_language import bilingual
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
def add_official(bank,sets):
 korean=load_korean()
 modules=json.loads((ROOT/'content/official-references.json').read_text());ids=[]
 for module in modules:
  for item in module['questions']:
   qid=f"MS-{module['id']}-{item['number']:02}";ids.append(qid);correct=chr(96+item['reviewedCorrectChoice'])
   bank.append({'id':qid,'version':1,'domain':'concept' if module['id'].startswith('C') else 'implementation','topic':module['title'],'type':'single','prompt':f"Microsoft Learn · {module['title']}\n\n공식 원문의 {item['number']}번 문제를 열어 풀고, 원문에서 선택한 보기의 번호를 기록하세요.",'options':[{'id':chr(96+n),'text':f'원문의 {n}번째 보기','reason':('사이트의 검토 답안과 일치합니다. ' if n==item['reviewedCorrectChoice'] else '사이트의 검토 답안과 다릅니다. ')+item['reviewReason']} for n in (1,2,3)],'correct':[correct],'explanation':'[사이트 검토 해설 · Microsoft 공식 채점 피드백 아님] '+item['reviewReason'],'source':module['url'],'moduleAssessment':module['url'],'lecture':'공식 Learn 모듈 평가','lab':'원문 문제 번호 기준','authorship':'Microsoft Learn 공개 모듈 평가 원문 연결 · 정답 및 해설은 사이트 검토 기준','difficulty':'공식 모듈 점검','reference':{'moduleId':module['id'],'moduleTitle':module['title'],'questionNumber':item['number'],'url':module['url'],'checkedAt':module['checkedAt']}})
 for q in bank:
  if q['id'] not in ids:continue
  key=q['id'][3:];item=korean[key]
  q['version']=2;q['prompt']=bilingual(item['prompt']);q['correct']=['a']
  q['options']=[{'id':chr(97+i),'text':bilingual(o['text']),'reason':bilingual(o['reason'])} for i,o in enumerate(item['options'])]
  q['explanation']='[사이트 검토 해설 · 공식 번역/채점 피드백 아님] '+q['options'][0]['reason']
  q['reference']['presentation']='korean-summary'
  q['authorship']='Microsoft Learn 문항 학습 요지의 한국어 재서술 · 보기는 자체 구성 · 공식 번역본 아님'
 assert len(ids)==43
 sets.append({'id':'MOCK-FINAL-4','title':'최종 모의고사 4 · MS Learn 한국어 의역','day':4,'minutes':60,'kind':'mock','phase':'official','mode':'official-korean','expectedCount':43,'conceptCount':21,'questionIds':ids})
