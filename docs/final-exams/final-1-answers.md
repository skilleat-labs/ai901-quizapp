# 최종 모의고사 1 · 정답과 해설

## 1. 정답: D
문항 ID: D1-A-10-2

정상 입력뿐 아니라 오류·위험 상황의 동작을 확인합니다.

- A: 투명성(Transparency)에 도움이 되지만 실패 상황 시험(Failure-case Testing)을 대체하지 않습니다.
- B: 책임 구조와 안전성 검증은 함께 필요합니다.
- C: 포용성(Inclusiveness)에 도움이 되지만 위험 입력의 안전한 처리를 확인하지 못합니다.
- D: 정상 입력뿐 아니라 오류·위험 상황의 동작을 확인합니다.

[공식 근거](https://learn.microsoft.com/en-us/training/modules/get-started-ai-fundamentals/)

## 2. 정답: A, C
문항 ID: D1-A-09-2

데이터 최소화와 접근 통제를 함께 적용합니다.

- A: 데이터 최소화와 접근 통제를 함께 적용합니다.
- B: 출력 길이는 기존 데이터의 접근 권한(Permission)을 바꾸지 않습니다.
- C: 데이터 최소화와 접근 통제를 함께 적용합니다.
- D: 다른 식별 정보도 보호해야 합니다.
- E: 지침은 저장소 접근 제어를 대체하지 않습니다.

[공식 근거](https://learn.microsoft.com/en-us/agents/design-guidelines/responsible-ai)

## 3. 정답: D
문항 ID: M-I-04-1

인증(Authentication) 성공과 작업 권한(Permission)은 별개다.

- A: 인증(Authentication)은 신원 확인이며 필요한 역할을 보장하지 않습니다.
- B: 권한(Permission) 오류를 주소 식별자 변경으로 해결할 근거가 없습니다.
- C: 샘플링 설정은 접근 권한(Permission)을 바꾸지 않습니다.
- D: 인증(Authentication) 성공과 작업 권한(Permission)은 별개다.

[공식 근거](https://learn.microsoft.com/en-us/python/api/overview/azure/ai-projects-readme?view=azure-python)

## 4. 정답: D
문항 ID: D4-B-05-2

모델과 API 경로에 따라 인수와 결과 구조가 다를 수 있습니다.

- A: 출력 형식과 지원 메서드가 다를 수 있습니다.
- B: 대상 식별자뿐 아니라 해당 API 계약도 맞아야 합니다.
- C: 지원 경로와 결과 구조를 확인해야 합니다.
- D: 모델과 API 경로에 따라 인수와 결과 구조가 다를 수 있습니다.

[공식 근거](https://learn.microsoft.com/en-us/azure/foundry/openai/how-to/dall-e)

## 5. 정답: B
문항 ID: D4-A-04-2

문자를 읽은 뒤 값의 의미와 스키마(Schema)를 대응시켜야 합니다.

- A: 파일 크기는 날짜의 업무 의미와 관계없습니다.
- B: 문자를 읽은 뒤 값의 의미와 스키마(Schema)를 대응시켜야 합니다.
- C: 음성 합성(Speech Synthesis)은 의미 매핑을 해결하지 않습니다.
- D: 인식 성공이 필드 의미를 보장하지 않습니다.

[공식 근거](https://learn.microsoft.com/en-us/training/modules/introduction-computer-vision/)

## 6. 정답: B
문항 ID: M-I-02-2

클라이언트 구성은 요청 준비이며 별도의 추론(Inference) 호출이 필요합니다.

- A: 인증(Authentication) 초기화와 추론(Inference)은 별개다.
- B: 클라이언트 구성은 요청 준비이며 별도의 추론(Inference) 호출이 필요합니다.
- C: 객체 출력은 모델 요청을 전송하지 않습니다.
- D: 설정 읽기만으로 API를 호출하지 않습니다.

[공식 근거](https://learn.microsoft.com/en-us/azure/foundry/foundry-models/how-to/generate-responses)

## 7. 정답: B
문항 ID: M-I-21-2

영상 생성은 시간이 걸릴 수 있어 제출과 결과 획득을 구분합니다.

- A: 기존 작업을 확인하지 않으면 중복 생성과 비용이 발생할 수 있습니다.
- B: 영상 생성은 시간이 걸릴 수 있어 제출과 결과 획득을 구분합니다.
- C: 식별자는 생성된 영상 콘텐츠가 아닙니다.
- D: 작업 상태(Job Status) 조회와 관계없는 기능이다.

[공식 근거](https://learn.microsoft.com/en-us/training/modules/get-started-vision-azure/)

## 8. 정답: C
문항 ID: M-I-18-1

텍스트에서 오디오를 만드는 합성 기능을 사용해야 합니다.

- A: 오디오 입력 설정으로 문자열 합성을 요청할 수 없습니다.
- B: 언어 설정은 인식 기능을 합성으로 바꾸지 않습니다.
- C: 텍스트에서 오디오를 만드는 합성 기능을 사용해야 합니다.
- D: 텍스트 분석(Text Analysis) 결과는 합성된 오디오가 아닙니다.

[공식 근거](https://learn.microsoft.com/en-us/training/modules/introduction-ai-speech/)

## 9. 정답: B
문항 ID: D2-A-07-2

실제 사용 패턴과 한도를 보며 비용·지연을 평가해야 합니다.

- A: 비용 방식과 처리 지역 범위를 혼동합니다.
- B: 실제 사용 패턴과 한도를 보며 비용·지연을 평가해야 합니다.
- C: 요청 설정이 배포 용량 확보를 대신하지 않습니다.
- D: 상시 확보 용량의 비용이 사용 패턴과 맞는지 검토가 필요합니다.

[공식 근거](https://learn.microsoft.com/en-us/azure/foundry/openai/how-to/deployment-types)

## 10. 정답: A
문항 ID: D1-A-01-2

프롬프트(Prompt)를 조건으로 새로운 표현을 만듭니다.

- A: 프롬프트(Prompt)를 조건으로 새로운 표현을 만듭니다.
- B: 추출은 기존 표현에서 주요 구를 고르는 작업이며 새 초안 작성과 다릅니다.
- C: 분류는 레이블 예측이며 새 콘텐츠 생성(Content Generation)과 구분됩니다.
- D: 개체 분석은 기존 내용의 구조 파악이다.

[공식 근거](https://learn.microsoft.com/en-us/training/modules/get-started-ai-fundamentals/)

## 11. 정답: A
문항 ID: D3-A-09-2

문제 원인을 추적하되 비밀값은 기록하지 않습니다.

- A: 문제 원인을 추적하되 비밀값은 기록하지 않습니다.
- B: 실행 기록 없이 재시도하면 변경 작업이 중복될 수 있습니다.
- C: 자연어 선언만으로 실제 도구 성공을 확인할 수 없습니다.
- D: 검색 근거와 외부 도구 실행(Tool Execution) 결과는 다릅니다.

[공식 근거](https://learn.microsoft.com/en-us/training/modules/get-started-with-generative-ai-and-agents/)

## 12. 정답: A, D
문항 ID: D2-B-10-2

구조 제약과 내용 검증은 함께 필요합니다.

- A: 구조 제약과 내용 검증은 함께 필요합니다.
- B: 형식 유효성과 내용 정확성은 다릅니다.
- C: 실제 구조·형식 검증이 필요합니다.
- D: 구조 제약과 내용 검증은 함께 필요합니다.
- E: 낮은 변동성이 업무 제약을 보장하지 않습니다.

[공식 근거](https://learn.microsoft.com/en-us/azure/foundry/foundry-models/how-to/generate-responses)

## 13. 정답: C
문항 ID: M-I-08-1

출력 상한(Output Limit)은 길이 제한이며 완결된 요약을 자동 보장하지 않습니다.

- A: 샘플링 설정은 지정된 출력 한도를 해제하지 않습니다.
- B: 출력 상한(Output Limit)과 입력 길이를 혼동합니다.
- C: 출력 상한(Output Limit)은 길이 제한이며 완결된 요약을 자동 보장하지 않습니다.
- D: 응답이 잘릴 수 있어 완료 상태를 확인해야 합니다.

[공식 근거](https://learn.microsoft.com/en-us/azure/foundry/foundry-models/how-to/generate-responses)

## 14. 정답: D
문항 ID: M-I-11-1

도구가 노출되고 선택·실행 가능한지 확인해야 합니다.

- A: 출력 길이와 도구 연결은 별개다.
- B: 도구 구성과 권한(Permission)을 확인하기 전에 원인을 모델 배포(Model Deployment)로 단정합니다.
- C: 검색 연결로 외부 실행 권한(Permission)이 부여되지 않습니다.
- D: 도구가 노출되고 선택·실행 가능한지 확인해야 합니다.

[공식 근거](https://learn.microsoft.com/en-us/training/modules/get-started-with-generative-ai-and-agents/)

## 15. 정답: C
문항 ID: M-C-08-2

유사한 조건에서 집단별 부당한 차이가 발생하는지 검토합니다.

- A: AI 사용과 한계를 설명하는 원칙이며 이 사례의 집단별 오류 비교와 구분됩니다.
- B: 접근성과 다양한 사용자 지원도 중요하지만 제시된 핵심은 집단별 결과 차이다.
- C: 유사한 조건에서 집단별 부당한 차이가 발생하는지 검토합니다.
- D: 운영 책임 주체를 지정하는 것과 결과 편향을 점검하는 것은 다릅니다.

[공식 근거](https://learn.microsoft.com/en-us/agents/design-guidelines/responsible-ai)

## 16. 정답: A
문항 ID: D3-A-08-2

배포 모델 호출만으로 에이전트(Agent)의 도구·지식 구성이 연결되지는 않습니다.

- A: 배포 모델 호출만으로 에이전트(Agent)의 도구·지식 구성이 연결되지는 않습니다.
- B: 식별자와 자격 증명(Credential)을 혼동한 것이다.
- C: 프로젝트 이름은 에이전트(Agent) 참조를 대신하지 않습니다.
- D: 샘플링 값이 에이전트(Agent) 구성을 연결하지 않습니다.

[공식 근거](https://learn.microsoft.com/en-us/python/api/overview/azure/ai-projects-readme?view=azure-python)

## 17. 정답: B
문항 ID: D3-B-01-2

지정 작업의 구조화된 분석 결과를 직접 받을 수 있습니다.

- A: 원하는 분석 결과 구조나 의미를 보장하지 못합니다.
- B: 지정 작업의 구조화된 분석 결과를 직접 받을 수 있습니다.
- C: 합성 설정은 텍스트의 감정 분석(Sentiment Analysis) 결과가 아닙니다.
- D: 새 그림 생성은 정형 텍스트 분석(Text Analysis) 기능이 아닙니다.

[공식 근거](https://learn.microsoft.com/en-us/training/modules/get-started-text-analysis-azure/)

## 18. 정답: D
문항 ID: M-I-05-1

SDK가 사용하는 신원과 역할을 별도로 설정해야 합니다.

- A: 생성 결과는 인증(Authentication) 수단이 아닙니다.
- B: 주소는 토큰(Token)을 제공하는 자격 증명(Credential)이 아닙니다.
- C: 호출 대상 이름은 인증(Authentication) 객체가 아닙니다.
- D: SDK가 사용하는 신원과 역할을 별도로 설정해야 합니다.

[공식 근거](https://learn.microsoft.com/en-us/python/api/overview/azure/ai-projects-readme?view=azure-python)

## 19. 정답: D
문항 ID: D3-A-10-2

성공 사례뿐 아니라 실패 시 상태 전달과 복구 동작도 검증해야 합니다.

- A: 설명의 길이는 실제 실행 성공의 근거가 아닙니다.
- B: 다양한 입력과 실패 경로를 확인하지 못합니다.
- C: 문서 검색(Document Search) 성공과 도구 실행(Tool Execution) 성공은 별개다.
- D: 성공 사례뿐 아니라 실패 시 상태 전달과 복구 동작도 검증해야 합니다.

[공식 근거](https://learn.microsoft.com/en-us/training/modules/get-started-with-generative-ai-and-agents/)

## 20. 정답: C
문항 ID: M-C-15-1

각 대상의 범주와 위치를 함께 반환합니다.

- A: 문자를 읽는 기능이며 일반 물체 위치·범주 검출과 다릅니다.
- B: 새 이미지를 만드는 기능으로 기존 물체 검출이 아닙니다.
- C: 각 대상의 범주와 위치를 함께 반환합니다.
- D: 이미지 전체 범주만으로 각 물체의 위치를 제공하지 못합니다.

[공식 근거](https://learn.microsoft.com/en-us/training/modules/introduction-computer-vision/)

## 21. 정답: D
문항 ID: D3-B-09-2

서비스 연결과 입력·출력 경로의 역할을 구분합니다.

- A: SpeechConfig는 서비스 설정이며 추출 필드(Extracted Field) 정의가 아닙니다.
- B: AudioConfig는 오디오 소스를 지정하며 토큰(Token) 상한이 아닙니다.
- C: Speech 설정 객체의 역할과 다릅니다.
- D: 서비스 연결과 입력·출력 경로의 역할을 구분합니다.

[공식 근거](https://learn.microsoft.com/en-us/azure/ai-services/speech-service/how-to-recognize-speech)

## 22. 정답: B
문항 ID: M-C-10-1

사용자가 AI의 성격·근거·한계를 이해하도록 합니다.

- A: 책임자 지정이나 이의제기 절차가 핵심인 사례와 다릅니다.
- B: 사용자가 AI의 성격·근거·한계를 이해하도록 합니다.
- C: 데이터 접근과 보호 자체를 설명하는 조치가 아닙니다.
- D: 접근성 지원이나 다양한 이용 환경을 직접 다루지 않습니다.

[공식 근거](https://learn.microsoft.com/en-us/agents/design-guidelines/responsible-ai)

## 23. 정답: B
문항 ID: M-C-16-1

문자 인식(Optical Character Recognition, OCR) 이후 각 값이 업무상 무엇을 뜻하는지 해석해야 합니다.

- A: 오디오 출력은 업무 필드 매핑을 해결하지 못합니다.
- B: 문자 인식(Optical Character Recognition, OCR) 이후 각 값이 업무상 무엇을 뜻하는지 해석해야 합니다.
- C: 문서 종류 판별만으로 개별 필드 값을 얻을 수 없습니다.
- D: 문자의 연결만으로 합계·세금 또는 날짜 의미가 구분되지 않습니다.

[공식 근거](https://learn.microsoft.com/en-us/training/modules/introduction-information-extraction/)

## 24. 정답: A
문항 ID: M-I-19-2

로컬 경로 문자열만으로 원격 서비스가 파일 바이트를 읽을 수 없습니다.

- A: 로컬 경로 문자열만으로 원격 서비스가 파일 바이트를 읽을 수 없습니다.
- B: 입력 전달 문제와 이미지 입력 능력 문제를 모두 해결하지 못합니다.
- C: 배포 식별자 위치로 바꾸어도 이미지 내용이 전달되지 않습니다.
- D: 파일명만으로 사진 내용을 알 수 없습니다.

[공식 근거](https://learn.microsoft.com/en-us/training/modules/get-started-vision-azure/)

## 25. 정답: A
문항 ID: D4-A-07-2

이미지의 글자를 기계가 읽는 문자열로 만듭니다.

- A: 이미지의 글자를 기계가 읽는 문자열로 만듭니다.
- B: 기존 문자 인식(Optical Character Recognition, OCR)과 새 이미지 생성(Image Generation)은 다릅니다.
- C: 정서 분석은 문자 인식(Optical Character Recognition, OCR) 결과가 아닙니다.
- D: OCR(Optical Character Recognition) 텍스트와 합계·세금 등의 의미 추출은 구분해야 합니다.

[공식 근거](https://learn.microsoft.com/en-us/training/modules/introduction-information-extraction/)

## 26. 정답: A
문항 ID: D4-B-07-2

분석기(Analyzer)와 스키마(Schema)가 추출 목표를 설정합니다.

- A: 분석기(Analyzer)와 스키마(Schema)가 추출 목표를 설정합니다.
- B: 분석기(Analyzer)는 처리 요구와 출력 필드를 구성하며 인증(Authentication)값 자체가 아닙니다.
- C: 콘텐츠를 어떻게 처리할지 정의하는 구성과 다릅니다.
- D: 분석기(Analyzer) 정의는 UI보다 콘텐츠 처리·필드 추출을 다룬다.

[공식 근거](https://learn.microsoft.com/en-us/training/modules/get-started-information-extraction/)

## 27. 정답: C
문항 ID: D2-B-02-2

충분한 맥락이 작업 요구를 명확하게 만듭니다.

- A: 불필요한 맥락이 핵심 요구를 흐릴 수 있습니다.
- B: 요구를 추측하게 하여 결과 일관성을 떨어뜨린다.
- C: 충분한 맥락이 작업 요구를 명확하게 만듭니다.
- D: 길이 제한만으로 대상과 업무 목적이 정해지지 않습니다.

[공식 근거](https://learn.microsoft.com/en-us/training/modules/fundamentals-generative-ai/)

## 28. 정답: A
문항 ID: D2-A-01-2

토큰(Token)은 단어·일부 문자열 등 모델이 처리하는 단위다.

- A: 토큰(Token)은 단어·일부 문자열 등 모델이 처리하는 단위다.
- B: 콘텐츠 필터 기능이며 토큰화(Tokenization) 목적이 아닙니다.
- C: 어텐션(Attention)과 구분되는 입력 분할 단계다.
- D: 이는 임베딩(Embedding)의 역할이며 토큰(Token) 분할과 구분됩니다.

[공식 근거](https://learn.microsoft.com/en-us/training/modules/fundamentals-generative-ai/)

## 29. 정답: A
문항 ID: M-C-01-2

주어진 맥락을 바탕으로 새로운 문장을 작성하는 것이 핵심이다.

- A: 주어진 맥락을 바탕으로 새로운 문장을 작성하는 것이 핵심이다.
- B: 인물·장소 등을 식별하며 새로운 안내문 생성이 아닙니다.
- C: 기존 입력에 범주를 붙이며 새로운 대본 작성을 주목적으로 하지 않습니다.
- D: 원문의 주제어를 뽑지만 새로운 설명문을 구성하는 작업과 다릅니다.

[공식 근거](https://learn.microsoft.com/en-us/training/modules/get-started-ai-fundamentals/)

## 30. 정답: C
문항 ID: D1-A-06-2

다양한 사용자의 접근과 참여를 지원합니다.

- A: 결과의 집단별 불이익과 접근성 지원은 구분해야 합니다.
- B: 운영 책임자와 수정 절차 지정이 중심인 원칙이다.
- C: 다양한 사용자의 접근과 참여를 지원합니다.
- D: 장애 상황의 안전한 동작이 아니라 사용자 접근이 핵심이다.

[공식 근거](https://learn.microsoft.com/en-us/agents/design-guidelines/responsible-ai)

## 31. 정답: A
문항 ID: D4-B-04-2

인증(Authentication)·네트워크 제약으로 접근이 막힐 수 있습니다.

- A: 인증(Authentication)·네트워크 제약으로 접근이 막힐 수 있습니다.
- B: 권한(Permission)·유효 기간·네트워크 문제를 확인해야 합니다.
- C: 세션·네트워크·권한(Permission) 차이로 원격 서비스는 접근하지 못할 수 있습니다.
- D: 암호화된 전송과 서비스의 콘텐츠 접근 권한(Permission)은 다릅니다.

[공식 근거](https://learn.microsoft.com/en-us/training/modules/get-started-information-extraction/)

## 32. 정답: B, E
문항 ID: M-I-22-1

원하는 구조와 필드 의미를 명시해 추출 요구를 표현합니다.

- A: 형식뿐 아니라 실제 분석 결과와 검증이 필요합니다.
- B: 업무상 의미와 구분 조건을 모델에 안내합니다.
- C: 서비스 주소는 업무 필드 스키마(Field Schema)가 아닙니다.
- D: 입력 이름 변경으로 추출 필드(Extracted Field)가 정의되지 않습니다.
- E: 원하는 결과 구조와 자료형(Data Type)을 명시합니다.

[공식 근거](https://learn.microsoft.com/en-us/azure/ai-services/content-understanding/concepts/analyzer-reference)

## 33. 정답: D
문항 ID: M-C-13-2

텍스트에서 개체와 범주를 찾아 구조화합니다.

- A: 주요 표현을 뽑지만 각 항목을 인물·장소·조직으로 구분하는 작업과 다릅니다.
- B: 내용을 압축하며 개체 범주 목록을 직접 산출하는 작업과 다릅니다.
- C: 문장 정서 경향을 반환하며 회사·인물 목록 추출과 다릅니다.
- D: 텍스트에서 개체와 범주를 찾아 구조화합니다.

[공식 근거](https://learn.microsoft.com/en-us/training/modules/introduction-language/)

## 34. 정답: A
문항 ID: D4-B-08-2

서비스가 어떤 값을 어떤 구조로 반환해야 하는지 명시합니다.

- A: 서비스가 어떤 값을 어떤 구조로 반환해야 하는지 명시합니다.
- B: 식별자는 구체적인 필드 스키마(Field Schema)를 대신하지 않습니다.
- C: 입력 파일 이름 변경은 분석기(Analyzer) 구성이 아닙니다.
- D: 서비스 주소와 입력 콘텐츠·스키마(Schema)는 별개다.

[공식 근거](https://learn.microsoft.com/en-us/azure/ai-services/content-understanding/concepts/analyzer-reference)

## 35. 정답: C
문항 ID: D3-B-04-2

확신 수치를 실제 정확도 보장으로 해석하면 안 됩니다.

- A: 분류의 확신과 내용의 진실성은 다릅니다.
- B: 모델 분류 점수는 관측된 사용자 만족률과 다릅니다.
- C: 확신 수치를 실제 정확도 보장으로 해석하면 안 됩니다.
- D: 개별 결과의 확신이 전체 작업 정확도를 보장하지 않습니다.

[공식 근거](https://learn.microsoft.com/en-us/training/modules/get-started-text-analysis-azure/)

## 36. 정답: A
문항 ID: M-C-06-2

크기가 아니라 업무 품질과 실행 제약을 함께 충족해야 합니다.

- A: 크기가 아니라 업무 품질과 실행 제약을 함께 충족해야 합니다.
- B: 실행 메모리와 지연 제약을 충족하지 못할 수 있습니다.
- C: 입력 길이 지원과 작업 품질은 별도로 평가해야 합니다.
- D: 작다고 해서 업무 품질이 보장되지 않습니다.

[공식 근거](https://learn.microsoft.com/en-us/training/modules/fundamentals-generative-ai/)

## 37. 정답: D
문항 ID: M-I-12-2

기본 모델 배포(Model Deployment) 호출과 구성된 에이전트(Agent) 호출을 구분해야 합니다.

- A: 프로젝트 이름만으로 에이전트(Agent)의 구성과 도구를 참조하지 않습니다.
- B: 샘플링 일치는 에이전트(Agent) 구성을 연결하지 않습니다.
- C: 에이전트(Agent) 식별자와 인증(Authentication)값은 다른 역할이다.
- D: 기본 모델 배포(Model Deployment) 호출과 구성된 에이전트(Agent) 호출을 구분해야 합니다.

[공식 근거](https://learn.microsoft.com/en-us/python/api/overview/azure/ai-projects-readme?view=azure-python)

## 38. 정답: C
문항 ID: M-C-02-1

업무 수행에는 모델의 텍스트 생성 외에 도구 연결과 실행 권한(Permission)이 필요합니다.

- A: 구조화 출력(Structured Outputs)과 실제 API 실행은 별개다.
- B: 검색된 사례가 현재 업무의 실제 실행을 대신하지 않습니다.
- C: 업무 수행에는 모델의 텍스트 생성 외에 도구 연결과 실행 권한(Permission)이 필요합니다.
- D: 지시만으로 주문·예약 시스템에 접근할 수 없습니다.

[공식 근거](https://learn.microsoft.com/en-us/training/modules/get-started-with-generative-ai-and-agents/)

## 39. 정답: C
문항 ID: D3-B-06-2

입력과 출력의 방향으로 구분합니다.

- A: 두 기능의 입력·출력 방향을 거꾸로 설명했다.
- B: 인식과 합성은 언어 간 번역과 구분됩니다.
- C: 입력과 출력의 방향으로 구분합니다.
- D: 음성 변환과 텍스트 분석(Text Analysis) 작업을 혼동한 것이다.

[공식 근거](https://learn.microsoft.com/en-us/azure/ai-services/speech-service/how-to-recognize-speech)

## 40. 정답: B
문항 ID: D3-B-05-2

클라이언트 객체(Client Object)가 아니라 각 문서의 응답을 처리해야 합니다.

- A: 결과 데이터와 모델 배포(Model Deployment) 식별자를 혼동한 것이다.
- B: 클라이언트 객체(Client Object)가 아니라 각 문서의 응답을 처리해야 합니다.
- C: 문서별 결과를 잃는다.
- D: 초기화와 실제 분석 결과는 다릅니다.

[공식 근거](https://learn.microsoft.com/en-us/training/modules/get-started-text-analysis-azure/)

## 41. 정답: D
문항 ID: M-I-01-1

model에는 사용하려는 배포의 이름을 지정합니다.

- A: 구독(Subscription)은 모델 배포(Model Deployment) 식별자가 아닙니다.
- B: 배포 이름(Deployment Name)과 다르면 대상 배포를 식별하지 못합니다.
- C: 프로젝트 작업 공간과 모델 배포(Model Deployment)는 다른 식별자다.
- D: model에는 사용하려는 배포의 이름을 지정합니다.

[공식 근거](https://learn.microsoft.com/en-us/azure/foundry/foundry-models/how-to/generate-responses)

## 42. 정답: B
문항 ID: M-C-03-1

표현이 달라도 의미가 가까운 문장을 벡터(Vector) 공간에서 비교할 수 있습니다.

- A: 길이는 의미 유사도를 나타내지 않습니다.
- B: 표현이 달라도 의미가 가까운 문장을 벡터(Vector) 공간에서 비교할 수 있습니다.
- C: 동일 토큰(Token) 일치만으로 다른 표현의 의미를 충분히 비교하지 못합니다.
- D: 긍정·부정의 유사성과 질문 의도의 유사성은 다릅니다.

[공식 근거](https://learn.microsoft.com/en-us/training/modules/fundamentals-generative-ai/)

## 43. 정답: D
문항 ID: D2-A-03-2

주변 토큰(Token) 관계를 통해 문맥을 표현합니다.

- A: 이는 콘텐츠 안전 필터 역할이며 어텐션(Attention) 자체와 다릅니다.
- B: 토큰화(Tokenization)와 토큰(Token) 사이 문맥 관계 계산은 별개다.
- C: 모델 내부 관계 계산과 외부 데이터 갱신은 다릅니다.
- D: 주변 토큰(Token) 관계를 통해 문맥을 표현합니다.

[공식 근거](https://learn.microsoft.com/en-us/training/modules/fundamentals-generative-ai/)

## 44. 정답: B, C
문항 ID: M-C-17-2

검색된 최신 자료로 답변을 보강할 수 있으며 사실 확인은 여전히 필요합니다.

- A: 출력 길이 설정으로 모델이 새 규정을 알게 되지는 않습니다.
- B: 모델에 없는 최신 업무 근거를 전달합니다.
- C: 검색을 사용해도 부정확한 답변이 가능하므로 검증이 필요합니다.
- D: 샘플링 조정은 새로운 문서를 모델에 제공하지 않습니다.
- E: 최신성 선언은 근거 데이터 제공을 대신하지 않습니다.

[공식 근거](https://learn.microsoft.com/en-us/training/modules/get-started-with-generative-ai-and-agents/)

## 45. 정답: C
문항 ID: D1-A-03-2

오디오 입력에서 발화를 문자로 변환합니다.

- A: 전사된 글에서 개체를 찾을 수 있지만 오디오를 문자로 바꾸지는 않습니다.
- B: 이미 문자로 된 내용을 압축하며 녹음의 문자 변환은 아닙니다.
- C: 오디오 입력에서 발화를 문자로 변환합니다.
- D: 글자를 오디오로 변환하는 반대 방향의 작업이다.

[공식 근거](https://learn.microsoft.com/en-us/training/modules/get-started-ai-fundamentals/)
