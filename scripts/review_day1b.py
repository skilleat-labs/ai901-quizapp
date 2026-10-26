"""Day 1 second-set editorial fixes. Preserve question/option IDs and answer keys."""
def apply(bank):
 byid={q['id']:q for q in bank}
 for suffix in ('1','2'):
  q=byid['D1-B-01-'+suffix]
  labels=['구독(Subscription)','리소스 그룹(Resource Group)','Foundry 프로젝트(Foundry Project)','모델 배포 엔드포인트(Model Deployment Endpoint)']
  for o,label in zip(q['options'],labels):o['text']=label
  q['explanation']='구독(Subscription)은 Azure 리소스의 청구와 사용 한도를 관리하는 범위입니다. 리소스 그룹(Resource Group)은 구독 안에서 관련 리소스를 묶어 관리하는 컨테이너입니다.'
 q=byid['D1-B-02-2']
 q['prompt']='수업에서 만든 관련 Azure 리소스를 같은 수명 주기로 묶어 관리하기 위해 리소스 그룹(Resource Group)을 사용하려고 합니다.\n\n리소스 그룹의 역할을 올바르게 설명한 것은 무엇입니까?'
 q=byid['D1-B-03-1']
 texts=[
 '프로젝트(Project)는 개발 자산과 연결을 구성하는 작업 공간이며, 모델 배포(Model Deployment)는 사용할 모델을 호출할 수 있도록 구성한 대상이다',
 '프로젝트(Project)는 응답 텍스트 한 조각이며, 모델 배포(Model Deployment)는 대화 기록이다',
 '프로젝트(Project)는 서비스 인증용 액세스 토큰이며, 모델 배포(Model Deployment)는 리소스 그룹이다',
 '프로젝트(Project)와 모델 배포(Model Deployment)는 같은 대상이므로 이름을 항상 서로 바꿔 사용할 수 있다']
 reasons=[
 '프로젝트는 개발 작업을 구성하고, 모델 배포는 모델 추론 요청의 대상을 구성합니다.',
 '응답 텍스트와 대화 기록은 프로젝트나 모델 배포의 정의가 아닙니다.',
 '액세스 토큰은 인증 수단이며 리소스 그룹은 Azure 리소스 관리 컨테이너입니다.',
 '프로젝트와 모델 배포는 역할이 다르며 식별자를 임의로 바꿔 사용할 수 없습니다.']
 for o,t,r in zip(q['options'],texts,reasons):o['text']=t;o['reason']=r
 q['explanation']=reasons[0]
 q=byid['D1-B-03-2'];q['options'][0]['text']='Foundry 프로젝트(Foundry Project): AI 개발 자산과 연결을 구성하는 작업 공간'
 q=byid['D1-B-08-1']
 q['explanation']='Azure OpenAI 요청의 model에는 실제로 생성한 모델 배포 이름(Model Deployment Name)을 지정합니다. 기반 모델 이름과 배포 이름이 같을 때도 있지만, 서로 다르면 배포 이름을 사용해야 합니다.'
 q['options'][0]['reason']=q['explanation']
 for q in bank:
  if q['id'] in {'D1-B-01-1','D1-B-01-2','D1-B-02-2','D1-B-03-1','D1-B-03-2','D1-B-08-1'}:
   q['version']=4;q['languageReviewedAt']='2026-10-26'

if __name__=='__main__':
 import json
 from pathlib import Path
 p=Path(__file__).resolve().parents[1]/'content/questions.json'
 bank=json.loads(p.read_text());apply(bank);p.write_text(json.dumps(bank,ensure_ascii=False,indent=2)+'\n')
