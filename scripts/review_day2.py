"""Editorial repairs for Day 2. Keep IDs and correct answers stable."""
import json
from pathlib import Path

def apply(bank):
 byid={q['id']:q for q in bank}
 def choices(id,texts):
  for o,text in zip(byid[id]['options'],texts):o['text']=text
 choices('D2-A-01-2',[
  '토큰화(Tokenization)','임베딩(Embedding)','콘텐츠 필터링(Content Filtering)','어텐션(Attention)'])
 choices('D2-A-03-2',[
  '어텐션(Attention)','콘텐츠 필터링(Content Filtering)','토큰화(Tokenization)','검색 인덱스 갱신(Search Index Update)'])
 q=byid['D2-A-01-2'];q['explanation']='토큰화(Tokenization)는 텍스트를 모델이 처리할 토큰 단위로 나누는 단계입니다. 임베딩은 벡터 표현, 어텐션은 토큰 간 관련성을 반영하는 단계로 구분합니다.';q['options'][0]['reason']=q['explanation']
 q=byid['D2-A-03-2'];q['explanation']='어텐션(Attention)은 토큰 사이의 관련성을 반영해 문맥을 처리하는 기법입니다. 텍스트를 처리 단위로 나누는 토큰화(Tokenization)와 구분됩니다.';q['options'][0]['reason']=q['explanation']
 q=byid['D2-A-09-1'];q['options'][0]['text']='TPM 제한은 요청 시의 추정 처리량을 기준으로 판단할 수 있고, 실제 사용량과 청구용 토큰 수는 처리 완료 후 산정되므로 두 값은 다를 수 있다'
 q['explanation']='요청 시 제한 판단에 쓰이는 추정 토큰 수와 완료 후 실제 사용 토큰 수는 같다고 가정하면 안 됩니다. 출력 상한 등을 반영한 추정량이 크면 실제 응답이 짧더라도 제한에 더 빨리 도달할 수 있습니다.';q['options'][0]['reason']=q['explanation']
 choices('D2-B-01-2',[
  '시스템 지침(System Instructions)',
  '개별 사용자 메시지(User Message)에 이번 질문만 넣는 위치',
  'model 매개변수의 모델 배포 이름(Model Deployment Name)',
  '최대 출력 토큰(Maximum Output Tokens) 설정'])
 q=byid['D2-B-01-2'];q['explanation']='역할·말투·허용 업무 같은 공통 동작 지침은 시스템 지침(System Instructions)으로 지정합니다. 개별 사용자 요청, 모델 배포 식별자, 출력 길이 설정과 구분해야 합니다.';q['options'][0]['reason']=q['explanation']
 q=byid['D2-B-05-1'];q['options'][0]['text']='관련된 이전 발언을 참고해 후속 질문의 의미와 요청 대상을 이해하도록 하기 위해'
 q['explanation']='이전 대화 맥락을 제공하면 모델이 생략된 대상이나 앞선 요청을 참고할 수 있습니다. 앱은 필요한 메시지 이력이나 API가 지원하는 대화 상태를 전달해야 하며, 같은 API 키나 배포 이름만으로 이력이 자동 제공되는 것은 아닙니다.';q['options'][0]['reason']=q['explanation']
 q=byid['D2-B-06-1'];q['options'][0]['text']='모델이 앞서 제시한 답변을 참고해 사용자가 수정하거나 선택하려는 대상을 이해하도록 하기 위해'
 q['explanation']='사용자의 “두 번째 안을 수정해줘” 같은 요청을 해석하려면 이전 모델 답변도 필요합니다. 이전 답변은 assistant 역할로 유지하며, 사용자 발언으로 바꾸거나 토큰 수만 전달하는 것으로 대체하지 않습니다.';q['options'][0]['reason']=q['explanation']
 q=byid['D2-B-04-2'];q['prompt']='보고서 전문이 문자열 변수 report에 준비되어 있습니다. 다음 요청의 응답이 출력 토큰 상한에 도달해 문장 중간에서 끊겼습니다.\n\n완료된 요약을 얻기 위한 가장 적절한 개선 방향은 무엇입니까?'
 q['code']='# report: 미리 읽어 둔 보고서 전문 문자열\nr = client.responses.create(\n    model=deployment,\n    input="다음 보고서를 세 문장으로 요약해줘:\\n" + report,\n    max_output_tokens=60)'
 q['explanation']='보고서 내용과 원하는 요약 형식을 함께 전달하되, 출력 상한이 너무 작으면 응답이 중간에 끝날 수 있습니다. 응답의 완료 상태와 중단 원인을 확인하고, 필요한 출력 상한이나 요약 분량을 조정합니다.';q['options'][0]['reason']=q['explanation']
 changed=['D2-A-01-2','D2-A-03-2','D2-A-09-1','D2-B-01-2','D2-B-05-1','D2-B-06-1','D2-B-04-2']
 for id in changed:byid[id]['version']=4;byid[id]['languageReviewedAt']='2026-10-26'

if __name__=='__main__':
 p=Path(__file__).resolve().parents[1]/'content/questions.json';bank=json.loads(p.read_text());apply(bank);p.write_text(json.dumps(bank,ensure_ascii=False,indent=2)+'\n')
