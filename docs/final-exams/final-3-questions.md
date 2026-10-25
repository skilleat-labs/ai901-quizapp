# 최종 모의고사 3 · 45문항

권장 시간 50분. 복수 선택은 정답을 모두 골라야 득점합니다. 자체 제작 문제를 재구성한 연습 평가이며 공식 시험 원문이 아닙니다.

## 1. 콜 녹음과 제품 시연 영상에서 요약·주제 등 업무 필드를 정해진 구조로 받아야 합니다.

적절한 접근은 무엇입니까?

A. 문서 분류 레이블만 반환해 개별 추출 필드(Extracted Field)를 대체
B. 모든 파일을 텍스트 확장자로 바꾼 뒤 그대로 저장
C. 입력 형식에 맞는 분석기(Analyzer)와 스키마(Schema)를 이용한 정보 추출(Information Extraction)
D. OCR(Optical Character Recognition)만 사용하면 음성 내용도 자동 전사된다

내 답: __________

## 2. 다음 content에 텍스트와 이미지 입력을 구성했습니다.

요청 형식 외에 호출 대상 모델에서 확인해야 할 능력은 무엇입니까?

```python
content = [
    {"type": "input_text", "text": "사진을 설명해줘"},
    {"type": "input_image", "image_url": public_image_url},
]
```

A. 텍스트 전용 모델이면 image_url이 있으면 자동으로 시각 모델이 된다
B. 이미지 생성(Image Generation) 배포면 어떤 이미지 해석 API도 지원한다
C. 프로젝트 이름이 같으면 모든 배포의 입력 형식도 같다
D. 호출 배포와 API가 텍스트·이미지 입력을 함께 지원하는지 확인한다

내 답: __________

## 3. AI 오류에 대한 이의제기 접수자와 수정 승인자를 정합니다.

가장 직접적인 원칙은 무엇입니까?

A. 신뢰성과 안전성(Reliability and Safety)
B. 투명성(Transparency)
C. 책임성(Accountability)
D. 공정성(Fairness)

내 답: __________

## 4. 분석 제출이 성공해 poller를 받았습니다.

추출 필드(Extracted Field)를 읽기 위해 최종 결과를 얻는 적절한 방법은 무엇입니까?

```python
poller = client.begin_analyze_binary(
    analyzer_id=analyzer_id, binary_input=file_bytes)
# 다음 단계: 최종 분석 필드 읽기
```

A. poller 객체를 JSON 문자열로 그대로 변환
B. poller.result()
C. 입력 파일의 read() 결과
D. client.endpoint

내 답: __________

## 5. 포털에서 만든 에이전트(Agent)의 지침과 도구를 앱에서도 사용해야 합니다.

기본 모델에 질문만 보내는 현재 코드의 수정 방향으로 적절한 것은 무엇입니까?

A. 에이전트(Agent) 이름을 API 키(API Key) 대신 사용한다
B. model에 프로젝트 표시명만 넣는다
C. temperature를 포털 값과 맞추면 도구도 자동 연결된다
D. 사용 중인 SDK의 에이전트(Agent) 참조 호출로 해당 에이전트를 지정한다

내 답: __________

## 6. 운영 앱이 API 키(API Key) 대신 Entra ID 토큰(Token)으로 서비스를 호출합니다.

키를 제거한 뒤에도 반드시 준비해야 하는 구성은 무엇입니까?

A. 토큰(Token) 발급이 되면 모든 리소스 접근 권한(Permission)이 자동 부여됨
B. 모델 이름이 같으면 다른 구독(Subscription) 권한(Permission)도 자동 공유됨
C. 프로젝트를 볼 수 있으면 모든 데이터 작업 실행 가능
D. 지원 인증(Authentication) 방식과 호출 신원에 필요한 역할 부여

내 답: __________

## 7. 고객 후기의 내용을 긍정·부정 등의 경향으로 분석하려고 합니다.

가장 적합한 기능은 무엇입니까?

A. 개체명 인식(Named Entity Recognition, NER)
B. 요약
C. 감정 분석(Sentiment Analysis)
D. 핵심 구 추출(Key Phrase Extraction)

내 답: __________

## 8. 개발자가 로그인한 상태인데 에이전트(Agent) 실행 요청이 접근 거부로 실패합니다.

우선 점검해야 할 구성은 무엇입니까?

A. 대상 리소스의 역할과 접근 권한(Permission)
B. 프로젝트 표시명을 짧게 변경
C. 모델 temperature와 top_p만 확인
D. 토큰(Token)이 발급됐으므로 호출 권한(Permission)도 있다고 가정

내 답: __________

## 9. 사용자에게 추천 결과의 근거와 시스템 한계를 설명합니다.

이 조치의 주된 목적에 해당하는 원칙은 무엇입니까?

A. 개인정보 및 보안(Privacy and Security)
B. 투명성(Transparency)
C. 포용성(Inclusiveness)
D. 책임성(Accountability)

내 답: __________

## 10. 동일한 조건의 신청서에서 특정 연령대의 잘못된 거절 비율이 더 높다.

먼저 점검할 원칙은 무엇입니까?

A. 공정성(Fairness)
B. 투명성(Transparency)
C. 책임성(Accountability)
D. 포용성(Inclusiveness)

내 답: __________

## 11. 상담 요약 앱의 테스트 로그에 고객 연락처가 불필요하게 남고 모든 팀원이 읽을 수 있습니다.

가장 직접적으로 점검할 원칙은 무엇입니까?

A. 개인정보 및 보안(Privacy and Security)
B. 투명성(Transparency)
C. 공정성(Fairness)
D. 포용성(Inclusiveness)

내 답: __________

## 12. 고객 답변은 짧은 한국어로 하되 사내 승인 범위를 벗어나지 않아야 합니다.

이 지속적 규칙의 적절한 배치는 무엇입니까?

A. 사용자 질문을 API 키(API Key)에 결합한다
B. 앱 역할·행동 경계는 시스템 지침(System Instructions)에 두고 작업별 내용은 사용자 입력(User Input)으로 전달한다
C. 역할 규칙을 model 배포 이름(Deployment Name)에 넣는다
D. 역할 규칙을 응답 수신 후 화면에만 붙인다

내 답: __________

## 13. 문장 속 '배'가 과일인지 선박인지 주변 단어와의 관계를 통해 표현됩니다.

이때 어텐션(Attention)이 담당하는 역할은 무엇입니까?

A. 외부 검색 인덱스에서 최신 문서를 가져온다
B. 입력 토큰(Token) 사이의 관련성을 반영해 문맥 표현을 만든다
C. 원문을 고정 키워드 목록으로만 바꾼다
D. 서비스에서 유해 출력을 차단하는 정책을 실행한다

내 답: __________

## 14. 다음 코드를 1시간 회의 자막 앱에 사용했더니 첫 발화 이후 인식이 끝납니다.

가장 적절한 수정은 무엇입니까?

```python
recognizer = speechsdk.SpeechRecognizer(speech_config=config)
result = recognizer.recognize_once_async().get()
```

A. 음성 합성(Speech Synthesis)의 음성 이름을 바꾼다
B. recognize_once_async의 이름에 async가 있으므로 그대로 사용한다
C. 한 번의 결과에 모든 이후 발화가 자동 추가된다고 가정한다
D. 연속 인식(Continuous Recognition)을 시작하고 이벤트로 결과를 수신하며 종료를 관리한다

내 답: __________

## 15. 예약 에이전트(Agent)가 '예약했습니다'라고 답했지만 예약 시스템에는 기록이 없습니다.

먼저 점검해야 할 구성은 무엇입니까?

A. 모델의 출력 길이만 늘리기
B. 같은 문장을 더 확신 있게 생성하도록 지시
C. 예약 도구 연결과 권한(Permission)·실행 결과 확인
D. 과거 예약 문서의 검색 수만 늘리기

내 답: __________

## 16. 에이전트(Agent)가 감정 분석(Sentiment Analysis)을 외부 기능으로 선택해 호출하도록 하려고 합니다.

Language MCP(Model Context Protocol) 서버의 역할은 무엇입니까?

A. Language 기능을 MCP(Model Context Protocol) 도구 인터페이스로 노출한다
B. MCP(Model Context Protocol)가 사용자 접근 권한(Permission)을 무조건 확대한다
C. MCP(Model Context Protocol)가 분석 결과 없이 시스템 지침(System Instructions)만 변경한다
D. MCP(Model Context Protocol) 연결 자체가 Language 모델을 새로 학습시킨다

내 답: __________

## 17. 영상 생성 요청이 작업 ID와 진행 상태를 반환했습니다. 아직 파일 URL이 없습니다.

다음 동작으로 적절한 것은 무엇입니까?

A. 같은 모델을 이미지 분류(Image Classification) API로 호출한다
B. 작업 ID를 영상 바이트로 저장한다
C. 해당 API의 작업 상태(Job Status)를 확인하고 완료 후 결과를 가져온다
D. 첫 응답에 URL이 없으므로 매번 새 작업을 제출한다

내 답: __________

## 18. 영수증 분석 결과에 총금액이 누락되어 있습니다.

결과를 정상으로 간주하기 전에 적용할 적절한 조치를 모두 고르시오.

A. 파일 이름만으로 모든 필드가 맞는지 확정
B. 필드 유효성 검사
C. 스키마(Schema)가 맞으면 모든 값을 자동 승인
D. 누락·불확실 결과 재검토
E. 빈 값을 임의의 금액으로 채워 정상 처리

내 답: __________

## 19. 팀별로 에이전트(Agent)·연결·개발 자산을 구성할 공간이 필요합니다.

개별 모델의 호출 이름과 구분되는 Foundry 구성은 무엇입니까?

A. 응답마다 생성되는 텍스트 한 조각
B. AI 개발 자산과 연결을 구성하는 프로젝트 작업 공간
C. 서비스 인증(Authentication)을 위한 액세스 토큰(Access Token)
D. 모든 모델 요청에서 model에 넣는 기반 모델(Foundation Model) ID

내 답: __________

## 20. 아래 요청에서 원격 모델이 로컬 이미지를 읽을 수 없습니다.

필요한 수정은 무엇입니까?

```python
content = [{"type": "input_text", "text": "설명해줘"},
           {"type": "input_image", "image_url": "C:/images/item.png"}]
```

A. 이미지 파일명을 시스템 지침(System Instructions)으로만 전달한다
B. 지원되는 접근 가능 URL 또는 MIME 형식에 맞는 base64 data URI로 제공한다
C. 로컬 경로를 model 인수에 옮긴다
D. 텍스트 전용 배포에 같은 경로를 다시 보낸다

내 답: __________

## 21. 앞서 입력된 문맥을 이용해 다음 토큰(Token)을 차례로 생성하는 모델을 선택합니다.

이 GPT 계열 모델에 가장 적합한 구조는 무엇입니까?

A. 이미지 전체 레이블을 예측하는 분류 구조
B. 디코더(Decoder) 기반 생성 구조
C. 입력의 표현 벡터(Vector)만 얻는 인코더(Encoder) 전용 구조
D. 규칙 기반 키워드 치환 구조

내 답: __________

## 22. Vision Transformer가 이미지의 여러 부분을 함께 분석하려고 합니다.

이미지 패치의 관계를 처리하는 방식으로 적절한 것은 무엇입니까?

A. 패치 임베딩(Embedding)과 어텐션(Attention)
B. 각 픽셀을 서로 관계없이 고정 레이블로만 변환
C. 이미지를 원문 문장으로만 바꾸어 학습
D. 텍스트 감정 레이블을 그대로 픽셀 색으로 치환

내 답: __________

## 23. 실습 PC에 마이크는 없지만 지원되는 WAV 파일이 있습니다.

다음 코드에서 빈칸에 전달해야 하는 설정의 역할을 설명한 것은 무엇입니까?

```python
audio = speechsdk.audio.AudioConfig(filename="sample.wav")
recognizer = speechsdk.SpeechRecognizer(
    speech_config=config, audio_config=____)
```

A. 파일 경로를 인식 언어 설정에 넣는다
B. 파일 경로를 사용하는 AudioConfig를 만들어 recognizer의 audio_config에 전달한다
C. 파일 경로를 SpeechConfig의 subscription에 넣는다
D. 텍스트 합성용 메서드를 호출해 인식을 대신한다

내 답: __________

## 24. 콜센터에서 통화 녹음을 문자로 바꾸고 상담 종료 후 안내 문장을 음성으로 읽습니다.

올바른 처리 순서는 무엇입니까?

A. 음성 인식(Speech Recognition) 후 음성 합성(Speech Synthesis)
B. 음성 합성(Speech Synthesis) 후 음성 인식(Speech Recognition)
C. 감정 분석(Sentiment Analysis) 후 기계 번역
D. 음성 번역만 사용

내 답: __________

## 25. 영어와 한국어 문서의 글자 수가 비슷한데 모델 입력 토큰(Token) 수가 다릅니다.

가장 적절한 설명은 무엇입니까?

A. 토큰(Token)은 공백으로 분리된 단어와 항상 일치한다
B. 모델의 토크나이저와 텍스트 표현에 따라 분할 결과가 달라진다
C. 토큰(Token)은 UTF-8 바이트 수와 항상 동일하다
D. 토큰(Token) 수 차이는 곧 모델 지식의 정확도 차이다

내 답: __________

## 26. 대표 질문과 시스템 지침(System Instructions)을 Foundry 플레이그라운드(Playground)에서 시험했다.

코드 구현으로 넘어갈 때 가장 적절한 다음 단계는 무엇입니까?

A. 테스트 답변 문장만 코드에 저장해 모든 새 질문에 반환한다
B. 플레이그라운드(Playground) 설정이 모든 로컬 코드에 자동 적용된다고 가정한다
C. 플레이그라운드(Playground) 성공으로 앱의 네트워크·권한(Permission) 테스트를 생략한다
D. 검증한 배포·지침·지원 설정을 기록해 코드에 반영하고 같은 입력으로 다시 확인한다

내 답: __________

## 27. 팀과 코드를 공유하되 실제 API 키(API Key)는 공개하지 않아야 합니다.

비밀값을 앱에 전달하는 가장 적절한 방식은 무엇입니까?

A. 키를 환경 변수(Environment Variable)에 넣으면 사용자가 받는 HTML에 출력해도 안전
B. 환경 설정으로 비밀값 주입
C. 배포 이름(Deployment Name)을 API 키(API Key) 대신 사용
D. 실제 .env를 공개 저장소에 함께 커밋

내 답: __________

## 28. 문서뿐 아니라 통화 녹음과 영상에서도 업무 정보를 추출하려고 합니다.

분석기(Analyzer)가 지원하는지 확인할 입력 범위는 무엇입니까?

A. 문서만 지원하며 음성 내용은 추출 대상이 아님
B. 오디오 파일만 지원하며 문서 필드는 처리 불가
C. 문서·이미지·오디오·비디오
D. 이미지 파일만 지원하며 영상의 음성은 항상 무시

내 답: __________

## 29. 고객은 사진과 글을 함께 보내고 사진 속 파손 부분을 설명해 달라고 합니다.

모델 선택 시 먼저 확인할 능력은 무엇입니까?

A. 텍스트에서 새 이미지를 생성하는 능력만 확인
B. 음성에서 문자를 추출하는 능력만 확인
C. 텍스트 임베딩(Embedding) 생성 능력만 확인
D. 텍스트와 이미지 입력을 함께 해석하는 멀티모달(Multimodal) 능력

내 답: __________

## 30. GPT 이미지 모델이 이미지를 base64 데이터로 반환해 화면에는 긴 문자열만 표시됩니다.

실제 이미지 파일을 저장하려면 이 데이터를 어떻게 처리해야 합니까?

```python
encoded_image = response.data[0].b64_json
# 반환된 이미지 데이터를 PNG 파일로 저장해야 함
```

A. 응답의 이미지 필드를 확인하고 base64를 디코딩(Decoding)해 바이너리 파일로 저장한다
B. base64 문자열을 UTF-8 텍스트로 .png 파일에 쓴다
C. 이미지 문자열을 output_text의 설명문으로 바꾼다
D. 응답 전체 JSON의 이름만 .png로 바꾼다

내 답: __________

## 31. 주차장 사진에서 차량마다 경계 상자(Bounding Box)를 그리고 종류를 표시해야 합니다.

이미지 전체에 레이블 하나를 붙이는 작업 대신 무엇을 사용합니까?

A. 개체 감지(Object Detection)
B. 이미지 생성(Image Generation)
C. OCR(Optical Character Recognition)
D. 이미지 분류(Image Classification)

내 답: __________

## 32. 수천 건의 설문 응답에서 자주 언급되는 주요 표현을 빠르게 확인하려고 합니다.

가장 적절한 기능은 무엇입니까?

A. 문서 전체를 새로운 요약 문단으로 작성
B. 핵심 주제어 추출(Key Phrase Extraction)
C. 사람·장소·조직 범주만 식별
D. 문서의 긍정·부정 점수만 계산

내 답: __________

## 33. 개발팀이 자유 형식 답변 대신 정해진 텍스트 분석(Text Analysis) 작업의 결과 객체를 원합니다.

가장 적합한 출발점은 무엇입니까?

A. Speech SDK의 음성 합성(Speech Synthesis) 결과를 감정 레이블로 사용
B. 범용 모델에 감정을 설명해 달라고만 요청하고 자연어를 수작업 분해
C. 이미지 모델에 텍스트를 그림으로 만들어 달라고 요청
D. Azure Language SDK의 해당 분석 메서드 사용

내 답: __________

## 34. 코드는 프로젝트 작업을 위한 AIProjectClient를 만듭니다.

포털의 어느 주소를 endpoint에 사용해야 합니까?

```python
project = AIProjectClient(
    endpoint=____, credential=DefaultAzureCredential())
```

A. 사용하는 SDK가 요구하는 Foundry 프로젝트 엔드포인트(Project Endpoint)
B. 이미지 파일의 공개 다운로드 URL
C. Azure 구독(Subscription) 관리 포털 URL
D. 모델 카탈로그(Model Catalog) 웹페이지 URL

내 답: __________

## 35. 일정한 대량 요청이 계속 발생하는 서비스에서 처리 용량을 확보해야 합니다.

사용량·비용과 함께 검토할 방식은 무엇입니까?

A. 최대 출력 토큰(Maximum Output Tokens)만 늘려 용량을 확보
B. 같은 배포 이름(Deployment Name)을 반복해서 지정해 처리량 확보
C. Provisioned 처리량
D. 간헐적 호출만 가정한 사용량 기반 배포로 요구 처리량 검증 생략

내 답: __________

## 36. 식탁 사진 속 모든 접시의 위치를 각각 표시해야 합니다.

이미지 전체를 음식 사진으로 분류하는 것만으로 요구를 충족하지 못하는 이유는 무엇입니까?

A. OCR(Optical Character Recognition) 텍스트를 연결하면 일반 물체의 경계도 얻는다
B. 새 이미지 생성(Image Generation)만이 기존 물체 위치를 찾는 방법이다
C. 분류 레이블이 있으면 모든 경계 상자(Bounding Box)도 이미 포함된다
D. 개별 대상의 위치를 얻으려면 개체 감지(Object Detection) 작업이 필요하다

내 답: __________

## 37. 다음 코드를 긴 회의 자막 앱에 사용했더니 첫 발화 뒤 인식이 끝났습니다.

원인과 개선 방향으로 가장 적절한 것은 무엇입니까?

```python
recognizer = speechsdk.SpeechRecognizer(speech_config=config)
result = recognizer.recognize_once_async().get()
```

A. 음성 합성(Speech Synthesis) 목소리를 바꾸면 발화가 계속 수신된다
B. SpeechConfig의 키 길이가 회의 길이를 결정한다
C. 단일 발화(Single Utterance)용이므로 긴 세션에는 연속 인식(Continuous Recognition)과 이벤트 처리를 검토한다
D. async이므로 자동으로 회의 끝까지 모든 발화를 수신한다

내 답: __________

## 38. 분류 결과의 변동을 줄이려고 모델의 temperature를 낮췄습니다.

이 설정의 효과와 정확성 보장 여부를 올바르게 설명한 것은 무엇입니까?

A. 온도가 0이면 모든 내용이 사실이 된다
B. 온도를 낮추면 최신 자료를 자동으로 검색한다
C. 출력 변동을 줄일 수 있지만 사실 정확성과 완전한 동일 응답은 보장하지 않는다
D. 온도를 낮추면 컨텍스트 한도(Context Limit)가 확장된다

내 답: __________

## 39. 여행 에이전트(Agent)가 예약을 실행하기 전에 확인해야 할 조건과 행동 경계를 정합니다.

이 규칙을 어디에 반영해야 합니까?

A. 모든 응답을 검증된 사실로 보장
B. 행동 목표와 경계 지정
C. 도구 연결과 권한(Permission)을 자동으로 부여
D. 기본 모델의 사전 학습 가중치를 즉시 변경

내 답: __________

## 40. 규정 설명은 업로드한 문서를 근거로 하고 잔여 휴가 일수는 HR API에서 조회해야 합니다.

필요한 구성을 모두 고르시오.

A. 시스템 지침(System Instructions)에 조회 완료라고 작성한다
B. 매뉴얼에 모든 미래 재고를 미리 적는다
C. 허가된 업무 API 도구
D. 문서 검색(Document Search)용 지식 연결(Knowledge Connection)
E. temperature만 낮춰 현재 수치를 확정한다

내 답: __________

## 41. 메모리가 제한된 장치에서 짧은 명령을 분류해야 합니다.

작은 모델 후보가 요구사항을 충족하는지 판단하는 방법은 무엇입니까?

A. 파라미터가 가장 많으면 실행 제약을 무시하고 선택한다
B. 컨텍스트 창(Context Window)이 길면 모든 분류 작업에서도 최고 품질이다
C. 같은 공급자 모델이면 평가 결과도 같다고 판단한다
D. 대표 입력으로 품질·지연·비용·자원 사용을 함께 평가한다

내 답: __________

## 42. 분석 결과를 색상만으로 구분하던 화면에 텍스트 레이블과 키보드 탐색을 추가했다.

어느 원칙을 적용한 것인가?

A. 공정성(Fairness)
B. 책임성(Accountability)
C. 포용성(Inclusiveness)
D. 투명성(Transparency)

내 답: __________

## 43. 채용 AI의 전체 정확도는 높지만, 동등한 경력의 지원자 중 특정 집단의 잘못된 탈락 비율이 더 높습니다.

가장 먼저 점검해야 할 원칙은 무엇입니까?

A. 포용성(Inclusiveness)
B. 공정성(Fairness)
C. 책임성(Accountability)
D. 투명성(Transparency)

내 답: __________

## 44. 사진 질문에 사용하던 모델에 오디오 파일도 보내려고 합니다.

사용 전에 확인해야 할 사항은 무엇입니까?

A. 이름에 chat이 있으면 이미지 생성(Image Generation)까지 모두 가능하다
B. 해당 모델·버전·API가 실제로 지원하는 입력 형식을 확인한다
C. 이미지 입력을 지원하면 모든 오디오·영상 입력도 지원한다
D. 컨텍스트 창(Context Window)이 길면 어떤 파일 형식도 직접 처리한다

내 답: __________

## 45. 요약을 짧게 받으려고 출력 상한(Output Limit)만 크게 낮췄다.

문장이 완결되지 않을 때 우선 할 조치는 무엇입니까?

A. 완료 상태와 사용량을 확인하고 요약 지시·출력 상한(Output Limit)을 함께 조정한다
B. 상한을 입력 토큰(Token) 수로 해석해 입력만 삭제한다
C. temperature를 바꾸면 상한을 초과해 끝까지 출력된다
D. 낮은 상한이면 항상 자연스러운 요약이 되므로 정상으로 처리한다

내 답: __________
