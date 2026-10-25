# 최종 모의고사 1 · 45문항

권장 시간 50분. 복수 선택은 정답을 모두 골라야 득점합니다. 자체 제작 문제를 재구성한 연습 평가이며 공식 시험 원문이 아닙니다.

## 1. 안내 모델이 익숙하지 않은 입력에 위험한 답변을 제공할 수 있습니다.

출시 전 우선 수행할 검증은 무엇입니까?

A. AI 사용 사실을 고지하는 작업만 수행
B. 담당자를 지정하고 동작 검증은 생략
C. 접근성 화면만 검토
D. 실패 상황 시험(Failure-case Testing)과 안전한 대체 응답 설계

내 답: __________

## 2. 업무에 필요하지 않은 고객 전화번호가 로그에 남고 모든 직원이 이를 읽을 수 있습니다.

이 위험을 줄이는 조치를 모두 고르시오.

A. 불필요한 개인정보 수집·보관을 줄인다
B. 출력 토큰 상한(Output Token Limit)을 낮추면 저장된 개인정보가 보호된다
C. 필요한 담당자만 접근하도록 제한한다
D. 이름만 지우면 나머지 개인정보의 접근 통제는 생략한다
E. 시스템 프롬프트(System Prompt)에 비밀이라고 쓰고 저장소를 공개한다

내 답: __________

## 3. 개발자는 CLI에 로그인했고 토큰(Token)도 발급됐지만 프로젝트 호출이 403이다.

가장 적절한 다음 확인은 무엇입니까?

A. 유효 토큰(Token)이 있으므로 접근 권한(Permission)도 있다고 판단
B. 프로젝트 이름을 모델 배포 이름(Model Deployment Name)으로 교체
C. 요청 temperature를 낮춰 재시도
D. 실제 호출 신원에 해당 작업의 데이터 접근 역할이 부여됐는지 확인

내 답: __________

## 4. 개발팀이 이미지 생성(Image Generation) API 예제와 Responses의 이미지 생성 도구 예제를 섞었습니다.

수정 전 우선 확인해야 할 것은 무엇입니까?

A. 어떤 이미지 모델이든 텍스트 전용 호출과 완전히 같다
B. 배포 이름(Deployment Name)만 맞으면 다른 SDK 인수도 모두 호환된다
C. 이미지 생성(Image Generation)은 모든 모델에서 동일 메서드와 응답 필드만 쓴다
D. 사용 모델이 지원하는 생성 경로·요청·응답 형식을 한 방식에 맞춘다

내 답: __________

## 5. OCR(Optical Character Recognition)로 계약서의 두 날짜를 읽었지만 시작일과 종료일이 구분되지 않았습니다.

추가로 필요한 처리는 무엇입니까?

A. 문서의 파일 크기로 시작일을 선택한다
B. 주변 문맥과 레이블을 이용해 업무 필드로 해석한다
C. 날짜 문자열을 음성으로 읽으면 필드가 구분된다
D. 두 날짜가 읽혔으므로 순서와 의미 검증은 생략한다

내 답: __________

## 6. 인증(Authentication)과 클라이언트 초기화가 성공했지만 모델 사용량이 늘지 않았다.

아직 어떤 단계가 실행되지 않았을 수 있는가?

```python
project = AIProjectClient(endpoint=project_endpoint, credential=credential)
client = project.get_openai_client()
# 아직 사용자 질문을 보내는 메서드는 호출하지 않음
```

A. 인증(Authentication) 객체만 다시 생성하면 프롬프트(Prompt)가 전송된다
B. Responses 생성 메서드를 호출하고 응답 텍스트를 읽는다
C. 클라이언트 객체(Client Object)를 print하면 모델 답변이 생성된다
D. 환경 변수(Environment Variable)를 읽으면 모델이 자동으로 응답한다

내 답: __________

## 7. 영상 생성 작업이 진행 중이다.

즉시 반환된 응답을 최종 MP4로 저장하는 대신 어떤 흐름이 필요한가?

A. 첫 응답에 URL이 없으므로 매번 새 작업을 제출한다
B. 해당 API의 작업 상태(Job Status)를 확인하고 완료 후 결과를 가져온다
C. 작업 ID를 영상 바이트로 저장한다
D. 같은 모델을 이미지 분류(Image Classification) API로 호출한다

내 답: __________

## 8. 안내 문장을 음성으로 출력하려는데 SpeechRecognizer를 만들고 recognize_once_async를 호출했다.

수정 방향은 무엇입니까?

A. AudioConfig 입력 파일을 텍스트 파일로 교체한다
B. SpeechRecognizer의 인식 언어만 바꾼다
C. SpeechSynthesizer로 텍스트 합성을 요청한다
D. Language 감정 분석(Sentiment Analysis) 결과를 음성 파일로 간주한다

내 답: __________

## 9. 실습 앱은 수업 시간에만 간헐적으로 모델을 호출합니다.

상시 대용량을 확보하기 전에 우선 비교할 배포 방식은 무엇입니까?

A. 어떤 Standard 배포든 데이터 처리는 반드시 단일 국가에 한정
B. 사용량 기반 Standard 계열과 필요한 처리량 한도
C. 출력 토큰 상한(Output Token Limit)을 늘리면 확보 처리량도 자동 증가
D. 사용 여부와 관계없이 최대 Provisioned 용량부터 확보

내 답: __________

## 10. 광고 담당자가 제품 특징을 입력하고 새로운 소개 문장의 초안을 작성하려고 합니다.

이 요구에 가장 적합한 AI 기능은 무엇입니까?

A. 새로운 콘텐츠 생성(Content Generation)
B. 기존 문서의 핵심 구만 추출
C. 미리 정한 문서 범주를 예측
D. 문서에서 사람·장소를 식별

내 답: __________

## 11. 에이전트(Agent)가 실제로 어떤 API를 어떤 인수로 호출했고 결과가 어땠는지 조사해야 합니다.

어떤 기록을 남겨야 합니까?

A. 도구명·인자·결과의 적절한 추적 기록
B. 같은 입력의 재실행은 항상 안전하다고 가정
C. 완료했다는 답변 문장만 실행 증거로 사용
D. 문서 인용 수만으로 업무 실행 여부 판단

내 답: __________

## 12. 지원 모델에서 주문 정보를 JSON으로 받습니다.

형식 오류와 잘못된 값에 대응하기 위한 조치를 모두 고르시오.

A. 지원되는 스키마(Schema) 기반 출력 기능을 사용한다
B. JSON으로 반환되면 금액과 날짜도 사실이라고 가정한다
C. 괄호가 있으면 파싱 오류는 무시한다
D. 앱에서 형식·필수값·업무 조건을 검증하고 실패를 처리한다
E. temperature를 낮추면 모든 업무 검증을 생략할 수 있다

내 답: __________

## 13. 지원 모델에 max_output_tokens=40을 설정한 뒤 긴 설명이 중간에서 끊겼다.

가장 적절한 판단은 무엇입니까?

```python
r = client.responses.create(
    model=deployment, input="아래 내용을 자세히 설명해줘",
    max_output_tokens=40)
```

A. temperature를 바꾸면 상한을 초과해 끝까지 출력된다
B. 상한을 입력 토큰(Token) 수로 해석해 입력만 삭제한다
C. 완료 상태와 사용량을 확인하고 요약 지시·출력 상한(Output Limit)을 함께 조정한다
D. 낮은 상한이면 항상 자연스러운 요약이 되므로 정상으로 처리한다

내 답: __________

## 14. 에이전트(Agent)가 문서 질문에는 답하지만 주문 조회 요청에는 도구를 호출하지 않습니다.

우선 점검할 구성은 무엇입니까?

A. 응답 글자 수를 늘리면 업무 API가 자동 실행된다
B. 기본 모델 배포(Model Deployment)를 지우고 다시 만든다
C. 문서 검색(Document Search) 결과를 늘리면 모든 API 권한(Permission)이 생긴다
D. 도구 연결·설명·호출 권한(Permission)과 실제 도구 실행(Tool Execution) 기록

내 답: __________

## 15. 평균 정확도는 높지만 비슷한 자격의 지원자 중 특정 집단에서 오류가 집중됩니다.

이 비교가 직접 평가하는 원칙은 무엇입니까?

A. 투명성(Transparency)
B. 포용성(Inclusiveness)
C. 공정성(Fairness)
D. 책임성(Accountability)

내 답: __________

## 16. 앱에서도 포털 에이전트(Agent)의 지침과 연결 도구를 사용해야 합니다.

같은 기반 모델(Foundation Model)에 질문만 보내는 대신 어떤 호출 방식이 필요합니까?

A. 사용하는 SDK·API 버전에 맞춰 해당 에이전트(Agent)를 참조해 호출한다
B. 에이전트(Agent) 이름을 API 키(API Key) 인수에 지정
C. model에 프로젝트 표시명만 지정
D. 플레이그라운드(Playground) temperature만 그대로 복사

내 답: __________

## 17. 고객 후기 처리에서 자유 형식 설명보다 정형 분석 결과가 필요합니다.

우선 선택할 구현 방식은 무엇입니까?

A. 범용 모델에 설명만 요청하고 문장 길이를 점수로 사용
B. Azure Language SDK의 해당 텍스트 분석(Text Analysis) 기능
C. Speech 합성의 음성 이름을 감정 값으로 저장
D. 이미지 생성(Image Generation) API의 프롬프트(Prompt)로 후기를 전송

내 답: __________

## 18. AIProjectClient를 Entra ID로 인증(Authentication)하려고 합니다.

credential 인수에 넣을 객체로 적합한 것은 무엇입니까?

```python
project = AIProjectClient(
    endpoint=project_endpoint, credential=____)
```

A. 응답의 output_text 문자열
B. 프로젝트 엔드포인트(Project Endpoint) 문자열 자체
C. 모델 배포 이름(Model Deployment Name)을 담은 문자열
D. DefaultAzureCredential 같은 토큰(Token) 자격 증명(Credential) 객체

내 답: __________

## 19. 규정 답변은 성공했지만 업무 API에 장애가 발생해도 에이전트(Agent)가 완료했다고 말합니다.

어떤 테스트를 추가해야 합니까?

A. 응답 문장이 길수록 도구도 정상 실행됐다고 판단한다
B. 정상 질문 하나가 성공하면 모든 도구 테스트를 종료한다
C. 검색 인용이 있으면 외부 API 상태 확인을 생략한다
D. 정상 질문·근거 부족·도구 실패의 결과와 응답을 함께 확인한다

내 답: __________

## 20. 한 장의 창고 사진에서 여러 상자의 범주와 각각의 위치가 필요합니다.

가장 직접적인 작업은 무엇입니까?

A. OCR(Optical Character Recognition)
B. 이미지 생성(Image Generation)
C. 개체 감지(Object Detection)
D. 이미지 분류(Image Classification)

내 답: __________

## 21. 서비스 키·지역 설정과 마이크·파일 입력 설정을 각각 구성하려고 합니다.

두 설정 객체의 역할을 올바르게 설명한 것은 무엇입니까?

A. 입력 마이크 설정과 문서 추출 스키마(Schema)
B. 서비스 인증(Authentication) 설정과 모델 출력 토큰 상한(Output Token Limit)
C. 모델 배포(Model Deployment) 식별자와 검색 인덱스 주소
D. 서비스 설정과 오디오 입출력 설정

내 답: __________

## 22. 상담 시작 전에 AI가 응답하며 답변이 틀릴 수 있음을 안내합니다.

가장 직접적인 원칙은 무엇입니까?

A. 책임성(Accountability)
B. 투명성(Transparency)
C. 개인정보 및 보안(Privacy and Security)
D. 포용성(Inclusiveness)

내 답: __________

## 23. 영수증 OCR(Optical Character Recognition) 결과에 여러 금액이 있습니다.

합계와 세금을 구분해 업무 필드에 넣으려면 추가로 필요한 것은 무엇입니까?

A. 인식한 문장을 음성으로 합성
B. 문맥과 필드 스키마(Field Schema)를 이용한 의미 기반 추출
C. 문서 전체를 이미지 범주 하나로 분류
D. OCR(Optical Character Recognition) 문자열을 순서대로 연결해 하나의 값으로 저장

내 답: __________

## 24. 서버가 접근할 수 없는 개발 PC의 절대 경로를 image_url로 보냈다.

입력을 전달하는 방법으로 적절한 것은 무엇입니까?

```python
image_url = "/Users/learner/photo.png"
# 이 경로는 서비스가 아닌 개발 PC에만 존재함
```

A. 지원되는 접근 가능 URL 또는 MIME 형식에 맞는 base64 data URI로 제공한다
B. 텍스트 전용 배포에 같은 경로를 다시 보낸다
C. 로컬 경로를 model 인수에 옮긴다
D. 이미지 파일명을 시스템 지침(System Instructions)으로만 전달한다

내 답: __________

## 25. 스캔 이미지에 OCR(Optical Character Recognition)을 적용했습니다.

이 작업으로 직접 얻는 기본 결과는 무엇입니까?

A. 광학 문자 인식(Optical Character Recognition, OCR) 텍스트
B. 이미지에 새로 그려진 글자
C. 문서 전체의 긍정·부정 점수
D. 문서의 업무 필드 의미가 항상 확정된 값

내 답: __________

## 26. 회사 양식에서 추출할 항목과 반환할 구조를 정하려고 합니다.

Content Understanding에서 무엇을 구성해야 합니까?

A. 콘텐츠 처리와 출력 필드 정의
B. 모델 배포(Model Deployment)의 인증(Authentication) 키만 보관
C. 입력 파일의 확장자만 바꾸는 작업
D. 처리 결과를 볼 웹페이지의 화면만 정의

내 답: __________

## 27. 보고서 요약의 독자와 원하는 분량이 매번 달라집니다.

모델이 요구를 파악하도록 프롬프트(Prompt)를 어떻게 개선해야 합니까?

A. 관련 없는 사례를 많이 넣어 요구를 대신
B. 대상과 분량을 생략하고 알아서라고만 요청
C. 대상·목적·형식을 구체적으로 제시
D. 원하는 형식 대신 출력 상한(Output Limit)만 설정

내 답: __________

## 28. 모델에 전달할 문장을 더 작은 처리 단위로 나누려고 합니다.

이 과정에 해당하는 단계는 무엇입니까?

A. 텍스트를 처리 단위로 분리
B. 출력에 부적절한 내용이 있는지 검사
C. 토큰(Token) 간 문맥 관계를 계산
D. 의미 유사도를 벡터(Vector)로 표현

내 답: __________

## 29. 박물관은 작품 설명과 관람객 연령을 입력받아 새로운 해설 대본을 작성합니다.

이 단계의 주된 AI 워크로드는 무엇입니까?

A. 생성형 AI(Generative AI)
B. 개체명 인식(Named Entity Recognition, NER)
C. 텍스트 분류(Text Classification)
D. 핵심 구 추출(Key Phrase Extraction)

내 답: __________

## 30. 화면을 시각적으로 확인하기 어려운 사용자에게 음성 안내와 읽기 가능한 결과 텍스트를 제공합니다.

이 조치에 가장 가까운 원칙은 무엇입니까?

A. 공정성(Fairness)
B. 책임성(Accountability)
C. 포용성(Inclusiveness)
D. 신뢰성과 안전성(Reliability and Safety)

내 답: __________

## 31. 개발자의 브라우저에서는 로그인 후에만 보이는 사진 URL을 원격 모델에 전달했습니다.

우선 점검할 접근 조건은 무엇입니까?

A. 서비스가 URL에 접근할 수 있는지
B. 파일 이름을 짧게 하면 모든 접근 오류가 해결
C. 로컬 브라우저에서 열리면 서비스도 반드시 접근 가능
D. URL이 https이면 접근 권한(Permission) 검사는 불필요

내 답: __________

## 32. 영수증 총액을 계산에 사용할 수 있도록 숫자형 필드로 추출하려고 합니다.

사용자 지정 분석기(Analyzer) 스키마(Schema)에 정의해야 할 내용을 모두 고르시오.

A. 분석 완료 전에 빈 필드를 정답으로 저장한다
B. 각 필드가 뜻하는 값과 추출 요구를 설명한다
C. endpoint 문자열 끝에 원하는 필드를 나열한다
D. 파일 확장자만 JSON으로 변경한다
E. 업무 필드의 이름과 적절한 자료형(Data Type)을 정의한다

내 답: __________

## 33. 기사에서 인물·장소·조직을 구분해 색인을 만들려 합니다.

요약문 생성과 구분되는 기능은 무엇입니까?

A. 핵심 구 추출(Key Phrase Extraction)
B. 요약
C. 감정 분석(Sentiment Analysis)
D. 개체명 인식(Named Entity Recognition, NER)

내 답: __________

## 34. 영수증에서 사업자명과 숫자형 총액을 추출하려고 합니다.

분석기(Analyzer)에 필요한 필드 정의는 무엇입니까?

A. 필드 이름·자료형(Data Type)·필드 의미를 설명하는 스키마(Schema)
B. 분석기(Analyzer) 이름에 total을 넣으면 모든 필드가 자동 정의된다
C. 파일 확장자를 JSON으로 바꾸면 추출 스키마(Schema)가 된다
D. endpoint에 영수증 내용을 모두 이어 붙인다

내 답: __________

## 35. 서비스가 문서를 긍정으로 분류하면서 신뢰도 점수(Confidence Score) 0.9를 반환했습니다.

이 값의 의미를 올바르게 설명한 것은 무엇입니까?

A. 해당 문서 내용이 사실일 확률
B. 실제 사용자가 만족했을 비율의 확정값
C. 모델의 해당 분류에 대한 확신 지표
D. 어떤 입력에서도 동일한 정확도를 보장하는 수치

내 답: __________

## 36. 외부 연결이 제한된 단말에서 짧은 요청을 분류하려고 합니다.

모델 크기를 정할 때 가장 적절한 판단은 무엇입니까?

A. 작은 모델 후보를 실제 작업에서 평가하고 품질·자원 제약을 함께 비교한다
B. 가장 큰 모델이면 단말 제약과 무관하게 적합하다
C. 컨텍스트 창(Context Window)이 가장 긴 모델이면 분류 정확도도 가장 높다
D. 가장 작은 모델이면 평가 없이 요구 정확도를 충족한다

내 답: __________

## 37. 동일 모델을 직접 호출하면 포털 에이전트(Agent)의 도구 실행(Tool Execution)이 재현되지 않습니다.

가장 적절한 수정 방향은 무엇입니까?

A. model에 프로젝트 표시명만 넣는다
B. temperature를 포털 값과 맞추면 도구도 자동 연결된다
C. 에이전트(Agent) 이름을 API 키(API Key) 대신 사용한다
D. 사용 중인 SDK의 에이전트(Agent) 참조 호출로 해당 에이전트를 지정한다

내 답: __________

## 38. 출장 도우미가 요청을 해석하고 승인된 예약 API를 호출한 뒤 결과를 설명해야 합니다.

답변 생성만 하는 모델에 추가해야 할 구성은 무엇입니까?

A. 출력 형식을 JSON으로 지정하고 실행 완료로 간주
B. 과거 처리 사례를 검색하고 실행 결과로 간주
C. 모델 판단과 허가된 외부 도구 실행(Tool Execution)을 결합한 에이전트(Agent)
D. 시스템 프롬프트(System Prompt)에 실행을 요청하고 도구 연결을 생략

내 답: __________

## 39. 사용자의 음성을 텍스트로 읽고, 준비된 텍스트 답변을 소리로 들려주려고 합니다.

필요한 기능의 조합은 무엇입니까?

A. STT(Speech to Text)는 글자에서 소리, TTS(Text to Speech)는 소리에서 글자
B. STT(Speech to Text)와 TTS(Text to Speech)는 모두 음성을 다른 언어로 번역
C. STT(Speech to Text)는 소리에서 글자, TTS(Text to Speech)는 글자에서 소리
D. STT(Speech to Text)는 감정 분석(Sentiment Analysis), TTS(Text to Speech)는 핵심 구 추출(Key Phrase Extraction)

내 답: __________

## 40. 다음 코드에서 얻은 문서별 감정 분석(Sentiment Analysis) 결과를 저장하려고 합니다.

개별 문서가 실패할 수 있다는 점을 고려한 처리로 적절한 것은 무엇입니까?

```python
client = TextAnalyticsClient(endpoint=language_endpoint, credential=credential)
result = client.analyze_sentiment(documents=[review])[0]
```

A. 결과 객체를 배포 이름(Deployment Name)으로 사용해 다시 호출
B. 문서별 오류 여부를 확인한 뒤 감정 등 결과 필드를 읽는다
C. 배치 첫 문서의 감정을 모든 문서에 복사
D. 클라이언트 생성 성공만으로 감정 분석(Sentiment Analysis)도 성공했다고 판단

내 답: __________

## 41. 카탈로그 모델 이름은 gpt-4o-mini이고 실제 배포 이름(Deployment Name)은 helpdesk-small이다.

Azure OpenAI v1 요청의 빈칸에는 무엇을 넣는가?

```python
# Azure OpenAI v1; base model: gpt-4o-mini
# deployment name: helpdesk-small
r = client.responses.create(model=____, input="도움말")
```

A. Azure 구독(Subscription) ID
B. 기반 모델(Foundation Model)의 카탈로그 ID만 사용
C. Foundry 프로젝트 표시 이름
D. 해당 리소스의 실제 배포 이름(Deployment Name)

내 답: __________

## 42. 질문에 '유급휴가'라고 쓰지 않고 '급여를 받으며 쉬는 기간'이라고 써도 관련 규정을 찾아야 합니다.

어떤 표현이 의미 유사도 검색에 적합한가?

A. 문자 수가 같은 문장끼리 연결
B. 텍스트 의미를 수치 벡터(Vector)로 나타낸 임베딩(Embedding) 비교
C. 토큰(Token) ID가 완전히 같은 문장만 연결
D. 감정 점수가 같은 문장끼리 연결

내 답: __________

## 43. 같은 단어도 주변 문장에 따라 의미가 달라집니다.

모델이 토큰(Token) 간 문맥 관계를 반영할 때 사용하는 기법은 무엇입니까?

A. 정책에 따라 유해 출력을 차단
B. 문장을 토큰(Token) ID로 분할하는 작업만 수행
C. 검색 인덱스를 직접 최신 자료로 갱신
D. 토큰(Token) 사이의 관련성 반영

내 답: __________

## 44. 모델 학습 이후에 발행된 제품 안내를 답변 근거로 사용하고 출처를 보여주어야 합니다.

이 요구를 충족하기 위한 조치를 모두 고르시오.

A. 토큰(Token) 상한만 늘려 최신 규정이 생성되게 한다
B. 질문과 관련된 최신 문서를 검색해 요청 맥락에 제공한다
C. 답변과 출처를 대조하고 근거가 부족할 때의 처리를 둔다
D. temperature만 낮춰 최신 규정이 반영되도록 한다
E. 시스템 지침(System Instructions)에 최신이라고 선언하고 자료를 생략한다

내 답: __________

## 45. 통화 녹음에 포함된 발화를 검색 가능한 글로 변환하려고 합니다.

가장 먼저 필요한 음성 처리 기능은 무엇입니까?

A. 개체명 인식(Named Entity Recognition, NER)
B. 텍스트 요약
C. 음성 인식(Speech Recognition)
D. 음성 합성(Speech Synthesis)

내 답: __________
