# Day 1 종합 이해도 점검

40문항 · 50분 · 단일/복수 선택 · 추가 점검은 기존 누적 순위에서 제외

범위: AI 정의와 한계, 워크로드 5종과 조합, 책임 있는 AI 6원칙, Azure 계층과 Foundry, 예산·리전·정리, 신원·권한, Python 환경·첫 호출·오류 대응

## D1-C-01 · 워크로드

AI가 작성한 보고서가 자연스럽고 자신감 있는 문장으로 제시됐습니다. 내용의 정확성에 대한 설명으로 가장 적절한 것은 무엇입니까?

A. 문장이 자연스러우면 사실 검증은 필요 없다
B. 학습한 패턴에 따른 출력이므로 근거와 사실을 검증해야 한다
C. 같은 질문의 답이 달라지면 AI 기능이 아닌 것이다
D. AI가 작성하면 최종 결정의 책임도 AI에 이전된다

정답: b

AI는 그럴듯하지만 사실과 다른 내용을 만들 수 있습니다.

- A: 문장의 유창함은 사실의 정확성을 보장하지 않습니다.
- B: AI는 그럴듯하지만 사실과 다른 내용을 만들 수 있습니다.
- C: 생성 설정 등에 따라 같은 입력의 출력도 달라질 수 있습니다.
- D: AI 사용자의 검토와 운영 주체의 책임은 남습니다.

[공식 개념 근거](https://learn.microsoft.com/en-us/training/modules/get-started-ai-fundamentals/)

## D1-C-02 · 워크로드

업무에 AI를 도입할 때의 판단으로 적절한 것을 모두 고르시오.

A. 입력 자료와 필요한 출력 형태로 작업의 종류를 구분한다
B. 생성형 AI가 있으면 기존의 모든 전용 분석 서비스를 제거한다
C. 여러 워크로드를 조합해 하나의 솔루션을 만들 수 있다
D. 학습한 모델은 새로운 상황에서도 항상 정확하게 판단한다

정답: a, c

워크로드 선택은 입력과 요구 출력에서 출발합니다. 음성 인식과 요약처럼 기능을 순서대로 연결할 수 있습니다.

- A: 워크로드 선택은 입력과 요구 출력에서 출발합니다.
- B: 전용 서비스가 구조화된 결과와 일관된 분석에 더 적합할 수 있습니다.
- C: 음성 인식과 요약처럼 기능을 순서대로 연결할 수 있습니다.
- D: 학습 범위를 벗어나는 입력에서는 오류 가능성을 평가해야 합니다.

[공식 개념 근거](https://learn.microsoft.com/en-us/training/modules/get-started-ai-fundamentals/)

## D1-C-03 · 워크로드

홍보팀은 제품 설명을 바탕으로 새로운 광고 문구 세 가지를 작성하려고 합니다. 기존 문서의 범주를 예측하는 작업과 구분되는 주된 워크로드는 무엇입니까?

A. 텍스트 분류(Text Classification)
B. 개체명 인식(Named Entity Recognition)
C. 음성 인식(Speech Recognition)
D. 생성형 AI(Generative AI)

정답: d

입력 설명을 조건으로 새로운 광고 문구를 생성합니다.

- A: 분류는 정해진 범주를 예측하며 새 광고 문구 작성이 주목적이 아닙니다.
- B: 개체명 인식은 사람과 장소 등 기존 텍스트의 개체를 찾습니다.
- C: 음성을 텍스트로 바꾸는 작업입니다.
- D: 입력 설명을 조건으로 새로운 광고 문구를 생성합니다.

[공식 개념 근거](https://learn.microsoft.com/en-us/training/modules/get-started-ai-fundamentals/)

## D1-C-04 · 워크로드

상담 시스템 A는 반품 안내문만 작성합니다. 시스템 B는 허용된 주문 조회·반품 접수 도구를 호출해 업무를 처리합니다. B가 에이전트형 AI(Agentic AI)에 가까운 이유는 무엇입니까?

A. 답변 문장의 길이가 더 길기 때문이다
B. 키 없이 모든 데이터에 접근하기 때문이다
C. 목표 달성을 위해 허용된 도구로 외부 작업을 수행하기 때문이다
D. 모든 결정을 검토 없이 반드시 자동 실행하기 때문이다

정답: c

모델 응답을 넘어 도구와 연결해 작업을 수행하는 점이 핵심입니다.

- A: 문장 길이는 에이전트 여부를 결정하지 않습니다.
- B: 에이전트도 인증과 권한 통제를 따라야 합니다.
- C: 모델 응답을 넘어 도구와 연결해 작업을 수행하는 점이 핵심입니다.
- D: 사람의 승인과 제한된 권한을 포함한 에이전트도 가능합니다.

[공식 개념 근거](https://learn.microsoft.com/en-us/training/modules/get-started-ai-fundamentals/)

## D1-C-05 · 워크로드

후기에서 '배송은 느렸지만 제품은 만족스럽다'라는 정서와 '배송', '제품' 같은 주요 표현을 각각 찾으려 합니다. 적절한 기능 조합은 무엇입니까?

A. 감정 분석(Sentiment Analysis)과 핵심 구 추출(Key Phrase Extraction)
B. 음성 합성(Speech Synthesis)과 개체 감지(Object Detection)
C. 광학 문자 인식(OCR)과 이미지 분류(Image Classification)
D. 텍스트 분류와 음성 합성만 사용

정답: a

감정적 경향과 주요 구는 서로 다른 텍스트 분석 결과입니다.

- A: 감정적 경향과 주요 구는 서로 다른 텍스트 분석 결과입니다.
- B: 음성 출력과 이미지 물체 위치는 텍스트 요구와 다릅니다.
- C: 이미지의 글자를 읽거나 범주를 정하는 기능입니다.
- D: 정해진 범주와 음성 출력만으로 요구한 핵심 구를 직접 얻지는 못합니다.

[공식 개념 근거](https://learn.microsoft.com/en-us/training/modules/get-started-ai-fundamentals/)

## D1-C-06 · 워크로드

민원 문장에서 사람 이름과 도시 이름을 구분해 추출해야 합니다. 가장 직접적으로 대응하는 텍스트 분석 기능은 무엇입니까?

A. 핵심 구 추출(Key Phrase Extraction)
B. 감정 분석(Sentiment Analysis)
C. 개체명 인식(Named Entity Recognition, NER)
D. 음성 인식(Speech Recognition)

정답: c

사람과 장소 등 개체를 인식하고 유형을 구분합니다.

- A: 주요 구 추출만으로 사람과 도시의 개체 유형 분류를 요구한 것은 아닙니다.
- B: 문장의 긍정과 부정 등 정서적 경향을 분석합니다.
- C: 사람과 장소 등 개체를 인식하고 유형을 구분합니다.
- D: 음성 발화를 텍스트로 바꾸는 기능입니다.

[공식 개념 근거](https://learn.microsoft.com/en-us/training/modules/get-started-ai-fundamentals/)

## D1-C-07 · 워크로드

녹음된 회의를 글로 옮긴 뒤 핵심 내용만 새 문장으로 정리하고, 마지막에 결과를 음성으로 읽어주려 합니다. 올바른 처리 순서는 무엇입니까?

A. 음성 합성 → OCR → 개체 감지
B. 음성 인식(STT) → 텍스트 요약 → 음성 합성(TTS)
C. 텍스트 요약 → 음성 합성 → 음성 인식
D. 개체 감지 → 감정 분석 → 음성 합성

정답: b

음성을 글로 바꾼 후 요약하고 요약문을 음성으로 변환합니다.

- A: 음성 합성은 녹음 내용을 받아쓰는 기능이 아닙니다.
- B: 음성을 글로 바꾼 후 요약하고 요약문을 음성으로 변환합니다.
- C: 요약할 텍스트를 먼저 확보해야 합니다.
- D: 녹음 내용을 텍스트로 변환하는 단계가 빠져 있습니다.

[공식 개념 근거](https://learn.microsoft.com/en-us/training/modules/get-started-ai-fundamentals/)

## D1-C-08 · 워크로드

창고 사진 전체가 '실내'인지 판단하는 기능과 각 상자의 위치를 경계 상자로 표시하는 기능을 구분한 설명은 무엇입니까?

A. 둘 다 음성 인식이다
B. 둘 다 OCR만으로 수행하는 작업이다
C. 사진 전체 판단은 개체 감지, 상자 위치는 이미지 분류다
D. 사진 전체 판단은 이미지 분류, 상자 위치는 개체 감지다

정답: d

분류는 이미지 수준 범주를, 감지는 개체의 범주와 위치를 다룹니다.

- A: 이미지를 입력으로 하는 시각 분석 작업입니다.
- B: OCR은 이미지의 글자를 읽는 기능입니다.
- C: 전체 분류와 개별 물체 위치 감지의 관계가 반대입니다.
- D: 분류는 이미지 수준 범주를, 감지는 개체의 범주와 위치를 다룹니다.

[공식 개념 근거](https://learn.microsoft.com/en-us/training/modules/get-started-ai-fundamentals/)

## D1-C-09 · 워크로드

영수증 사진의 모든 글자를 읽는 것과 '상호·날짜·합계'를 이름 있는 필드로 반환하는 것의 차이는 무엇입니까?

A. OCR은 글자를 읽고, 정보 추출(Information Extraction)은 필요한 필드를 구조화한다
B. OCR은 금액을 결제하고, 정보 추출은 음성을 생성한다
C. 글자를 읽으면 모든 업무 필드와 관계가 항상 자동 확정된다
D. 필드 추출은 문서의 글자와 내용을 분석하지 않는다

정답: a

글자 인식 결과와 의미 있는 필드 추출 결과를 구분해야 합니다.

- A: 글자 인식 결과와 의미 있는 필드 추출 결과를 구분해야 합니다.
- B: 두 기능 모두 결제나 음성 생성이 본래 목적이 아닙니다.
- C: 텍스트 인식만으로 필드 의미가 항상 결정되지는 않습니다.
- D: 필드 추출도 입력 자료의 내용을 분석해야 합니다.

[공식 개념 근거](https://learn.microsoft.com/en-us/training/modules/get-started-ai-fundamentals/)

## D1-C-10 · 워크로드

고객 후기의 감정 분류와 녹음의 텍스트 변환을 구현하려 합니다. Azure 서비스와 작업의 연결이 적절한 것은 무엇입니까?

A. Azure Speech로 후기 감정 분석, Azure Language로 음성 인식
B. Azure Cost Management로 감정 분석, Azure Speech로 예산 설정
C. Azure Language로 감정 분석, Azure Speech로 음성 인식
D. 모델 카탈로그로 직접 음성을 녹음하고 리소스 그룹으로 번역

정답: c

각 서비스의 텍스트 및 음성 처리 목적에 맞는 연결입니다.

- A: 텍스트 분석과 음성 처리 서비스의 역할이 뒤바뀌었습니다.
- B: 비용 관리 기능은 언어 분석 서비스가 아닙니다.
- C: 각 서비스의 텍스트 및 음성 처리 목적에 맞는 연결입니다.
- D: 카탈로그와 리소스 그룹은 각각 탐색과 관리 기능입니다.

[공식 개념 근거](https://learn.microsoft.com/en-us/training/modules/get-started-ai-fundamentals/)

## D1-C-11 · 워크로드

문서·이미지·오디오에서 업무에 필요한 정보를 스키마에 맞는 필드로 얻으려 합니다. Day 1에서 소개한 정보 추출 서비스는 무엇입니까?

A. Microsoft Entra ID
B. Azure Content Understanding
C. Azure Cost Management
D. Azure Resource Manager의 리소스 그룹

정답: b

다양한 입력에서 스키마 기반 정보를 추출하는 서비스입니다.

- A: 사용자와 앱의 신원 및 접근을 관리하는 서비스입니다.
- B: 다양한 입력에서 스키마 기반 정보를 추출하는 서비스입니다.
- C: 비용 분석과 예산 관리 기능입니다.
- D: 관련 Azure 리소스를 묶는 관리 컨테이너입니다.

[공식 개념 근거](https://learn.microsoft.com/en-us/training/modules/get-started-ai-fundamentals/)

## D1-C-12 · 워크로드

고객 상담 솔루션이 녹음을 받아 감정을 파악하고 답변 초안을 작성해야 합니다. 설계 판단으로 적절한 것을 모두 고르시오.

A. 텍스트가 아니므로 감정 분석 전에 음성 합성부터 수행한다
B. 음성 인식으로 텍스트를 얻은 뒤 감정 분석과 초안 생성을 연결한다
C. 생성형 AI를 사용하면 민감한 고객 정보 검토가 불필요하다
D. 답변 초안은 오류 가능성이 있으므로 필요한 검토 절차를 둔다

정답: b, d

입력 변환 후 텍스트 분석과 생성 기능을 조합합니다. 생성 결과의 사실성과 안전성을 검토해야 합니다.

- A: 음성 합성은 텍스트를 음성으로 바꾸며 받아쓰기를 대신하지 않습니다.
- B: 입력 변환 후 텍스트 분석과 생성 기능을 조합합니다.
- C: 워크로드와 무관하게 개인정보 보호를 적용해야 합니다.
- D: 생성 결과의 사실성과 안전성을 검토해야 합니다.

[공식 개념 근거](https://learn.microsoft.com/en-us/training/modules/get-started-ai-fundamentals/)

## D1-C-13 · 책임 있는 AI

같은 자격의 지원자들을 평가하는 AI에서 특정 집단의 잘못된 탈락률이 높습니다. 원인을 조사하고 집단별 오류 차이를 줄이는 조치는 어느 원칙에 가장 가깝습니까?

A. 투명성(Transparency)
B. 포용성(Inclusiveness)
C. 공정성(Fairness)
D. 책임성(Accountability)

정답: c

비슷한 조건의 집단에 부당한 결과 차이가 있는지 평가합니다.

- A: 역할과 한계를 설명하는 원칙이며 집단 간 오류 격차가 직접 초점은 아닙니다.
- B: 서비스 접근과 참여를 지원하는 원칙과 구분됩니다.
- C: 비슷한 조건의 집단에 부당한 결과 차이가 있는지 평가합니다.
- D: 책임자와 감독 체계를 정하는 원칙입니다.

[공식 개념 근거](https://learn.microsoft.com/en-us/azure/machine-learning/concept-responsible-ai)

## D1-C-14 · 책임 있는 AI

시각장애 학생이 키보드와 스크린리더로 AI 학습 도구를 이용하도록 개선했습니다. 가장 직접적으로 실천한 원칙은 무엇입니까?

A. 포용성(Inclusiveness)
B. 투명성(Transparency)
C. 공정성(Fairness)
D. 개인정보 및 보안(Privacy and Security)

정답: a

다양한 능력과 상황의 사용자가 참여하도록 접근성을 개선합니다.

- A: 다양한 능력과 상황의 사용자가 참여하도록 접근성을 개선합니다.
- B: AI의 작동 방식과 한계를 설명하는 활동과 구분됩니다.
- C: 이 사례의 직접 초점은 결과 격차 측정보다 서비스 접근성입니다.
- D: 데이터 수집과 접근 통제가 직접 초점은 아닙니다.

[공식 개념 근거](https://learn.microsoft.com/en-us/azure/machine-learning/concept-responsible-ai)

## D1-C-15 · 책임 있는 AI

의료 안내 AI를 출시하기 전에 누락·오타·예상 밖 입력을 시험하고, 확신할 수 없으면 전문가에게 연결하도록 했습니다. 가장 직접적으로 관련된 원칙은 무엇입니까?

A. 책임성(Accountability)
B. 투명성(Transparency)
C. 포용성(Inclusiveness)
D. 신뢰성과 안전성(Reliability and Safety)

정답: d

예외와 실패 상황에서 안전하게 동작하도록 검증하고 대안을 설계합니다.

- A: 책임 주체 지정과 감독 절차가 핵심이며 여기서는 오류 상황의 안전 동작이 초점입니다.
- B: 사용자 설명만으로 오류 입력의 안전성을 검증할 수는 없습니다.
- C: 접근성보다 위험 상황에서도 안전한 동작이 초점입니다.
- D: 예외와 실패 상황에서 안전하게 동작하도록 검증하고 대안을 설계합니다.

[공식 개념 근거](https://learn.microsoft.com/en-us/azure/machine-learning/concept-responsible-ai)

## D1-C-16 · 책임 있는 AI

고객의 주민등록번호를 학습 지원 로그에 남기지 않고, 필요한 담당자만 상담 기록을 읽게 했습니다. 주로 적용한 원칙은 무엇입니까?

A. 공정성(Fairness)
B. 개인정보 및 보안(Privacy and Security)
C. 투명성(Transparency)
D. 포용성(Inclusiveness)

정답: b

불필요한 수집을 줄이고 접근을 통제하는 조치입니다.

- A: 집단별 결과 차이보다 데이터 보호 조치가 중심입니다.
- B: 불필요한 수집을 줄이고 접근을 통제하는 조치입니다.
- C: 사용자에게 시스템을 설명하는 것만을 의미하지 않습니다.
- D: 접근성 지원과 개인정보 접근 제한은 구분됩니다.

[공식 개념 근거](https://learn.microsoft.com/en-us/azure/machine-learning/concept-responsible-ai)

## D1-C-17 · 책임 있는 AI

AI 추천 화면에 'AI가 만든 추천'임을 알리고, 사용 데이터와 결과의 한계를 설명했습니다. 책임자 지정과 구분되는 주된 원칙은 무엇입니까?

A. 책임성(Accountability)
B. 신뢰성과 안전성(Reliability and Safety)
C. 투명성(Transparency)
D. 포용성(Inclusiveness)

정답: c

AI 관여 사실과 작동 방식 및 한계를 이해할 수 있게 합니다.

- A: 책임자와 이의 처리 권한을 정하는 활동이 직접 제시되지 않았습니다.
- B: 실패 상황 시험이 아니라 사용자 설명에 초점을 둡니다.
- C: AI 관여 사실과 작동 방식 및 한계를 이해할 수 있게 합니다.
- D: 사용자의 접근성 확대가 직접 제시된 것은 아닙니다.

[공식 개념 근거](https://learn.microsoft.com/en-us/azure/machine-learning/concept-responsible-ai)

## D1-C-18 · 책임 있는 AI

학교가 AI 채점의 최종 책임자를 지정하고, 학생의 이의 제기를 사람이 검토하는 절차를 마련했습니다. 가장 직접적으로 적용한 원칙은 무엇입니까?

A. 책임성(Accountability)
B. 투명성(Transparency)
C. 포용성(Inclusiveness)
D. 공정성(Fairness)

정답: a

AI 결과에 대한 사람의 책임과 감독 절차를 마련합니다.

- A: AI 결과에 대한 사람의 책임과 감독 절차를 마련합니다.
- B: 설명 제공과 책임 주체 지정은 서로 다른 초점입니다.
- C: 접근성 기능을 추가하는 활동과 구분됩니다.
- D: 집단별 차별 측정이 직접 제시된 것은 아닙니다.

[공식 개념 근거](https://learn.microsoft.com/en-us/azure/machine-learning/concept-responsible-ai)

## D1-C-19 · 책임 있는 AI

팀이 'AI 사용 사실을 고지했으므로 책임 있는 AI 점검은 끝났다'고 말합니다. 추가로 필요한 조치를 모두 고르시오.

A. 집단별 오류와 접근성을 점검한다
B. 개인정보 접근 통제와 예외 상황의 안전 동작을 시험한다
C. 사용 사실 고지만 있으면 사람의 책임자를 지정하지 않아도 된다
D. 오류 대응 책임자와 이의 제기 절차를 정한다

정답: a, b, d

공정성과 포용성도 별도로 평가해야 합니다. 개인정보 및 보안과 신뢰성과 안전성도 필요합니다. 운영 책임과 검토 절차도 마련해야 합니다.

- A: 공정성과 포용성도 별도로 평가해야 합니다.
- B: 개인정보 및 보안과 신뢰성과 안전성도 필요합니다.
- C: 투명성은 책임성을 대체하지 않습니다.
- D: 운영 책임과 검토 절차도 마련해야 합니다.

[공식 개념 근거](https://learn.microsoft.com/en-us/azure/machine-learning/concept-responsible-ai)

## D1-C-20 · 책임 있는 AI

사내 상담 AI가 민감한 기록을 처리합니다. 위험을 줄이는 운영 방법을 모두 고르시오.

A. 시스템 프롬프트에 '비밀 유지'를 쓰고 저장소를 익명 공개한다
B. 업무에 불필요한 개인정보는 수집과 보관을 줄인다
C. 권한이 필요한 담당자에게만 기록 접근을 허용한다
D. 이름만 지우면 전화번호와 상담 내용은 누구나 읽어도 된다

정답: b, c

데이터 최소화는 노출 범위를 줄입니다. 역할과 업무에 맞는 접근 제한을 적용해야 합니다.

- A: 프롬프트는 저장소 접근 통제를 대신하지 못합니다.
- B: 데이터 최소화는 노출 범위를 줄입니다.
- C: 역할과 업무에 맞는 접근 제한을 적용해야 합니다.
- D: 다른 식별 정보와 민감한 내용도 보호해야 합니다.

[공식 개념 근거](https://learn.microsoft.com/en-us/azure/machine-learning/concept-responsible-ai)

## D1-C-21 · Azure 환경

실습 리소스가 속하는 Azure 관리 계층을 넓은 범위에서 좁은 범위 순서로 나열한 것은 무엇입니까?

A. 리소스 → 테넌트 → 리소스 그룹 → 구독
B. 프로젝트 → 구독 → 테넌트 → API 키
C. 테넌트 → 리소스 그룹 → 구독 → 리소스
D. 테넌트(Tenant) → 구독(Subscription) → 리소스 그룹(Resource Group) → 리소스(Resource)

정답: d

신원 및 디렉터리 범위에서 구독과 리소스 관리 범위로 좁혀집니다.

- A: 개별 서비스가 테넌트보다 넓은 관리 범위는 아닙니다.
- B: 프로젝트와 API 키를 Azure 관리 계층과 혼동했습니다.
- C: 리소스 그룹은 구독 안에 있습니다.
- D: 신원 및 디렉터리 범위에서 구독과 리소스 관리 범위로 좁혀집니다.

[공식 개념 근거](https://learn.microsoft.com/en-us/training/modules/get-started-with-ai-in-azure/)

## D1-C-22 · Azure 환경

Foundry 리소스(Resource)와 프로젝트(Project)를 올바르게 설명한 것은 무엇입니까?

A. 프로젝트는 Azure 구독을 대체하므로 리소스 없이 모든 서비스를 사용한다
B. 리소스는 AI 서비스 접근을 제공하고 프로젝트는 그 안의 개발 작업 공간이다
C. 리소스는 대화 한 문장이며 프로젝트는 API 키 문자열이다
D. 프로젝트를 만들면 모든 모델 배포가 자동으로 생성된다

정답: b

Day 1에서 사용하는 Foundry 리소스와 프로젝트의 역할 구분입니다.

- A: 프로젝트는 Azure 구독과 리소스를 대신하는 청구 단위가 아닙니다.
- B: Day 1에서 사용하는 Foundry 리소스와 프로젝트의 역할 구분입니다.
- C: 응답과 인증 자격 증명은 리소스와 프로젝트의 정의가 아닙니다.
- D: 프로젝트 생성과 실제 모델 배포는 별도 작업입니다.

[공식 개념 근거](https://learn.microsoft.com/en-us/training/modules/get-started-with-ai-in-azure/)

## D1-C-23 · Azure 환경

팀이 Foundry에서 모델·에이전트·도구·지식을 구성하려 합니다. 각 항목의 역할에 대한 설명으로 적절한 것을 모두 고르시오.

A. 모델은 입력을 처리해 응답을 생성하는 데 사용한다
B. 도구는 API 키 문자열과 동일하므로 업무를 실행할 수 없다
C. 지식 원본은 업무에 필요한 참고 데이터에 접근하도록 연결할 수 있다
D. 에이전트를 만들면 리소스 접근 권한을 따로 관리할 필요가 없다

정답: a, c

모델은 언어 이해와 생성 등 추론 기능을 제공합니다. 업무 맥락에 필요한 정보를 제공하는 역할입니다.

- A: 모델은 언어 이해와 생성 등 추론 기능을 제공합니다.
- B: 도구는 외부 기능 실행과 정보 접근에 사용됩니다.
- C: 업무 맥락에 필요한 정보를 제공하는 역할입니다.
- D: 에이전트도 허용된 신원과 권한 안에서 동작해야 합니다.

[공식 개념 근거](https://learn.microsoft.com/en-us/training/modules/get-started-with-ai-in-azure/)

## D1-C-24 · 비용 관리

월 예산과 이메일 알림만 설정했고 별도의 자동화는 만들지 않았습니다. 비용이 예산을 초과할 때의 설명으로 가장 정확한 것은 무엇입니까?

A. 예산 알림은 사용량을 알려주며 리소스를 자동 중지하는 지출 상한은 아니다
B. 예산 100%가 되면 모든 리소스가 반드시 즉시 삭제된다
C. 알림을 설정하면 해당 구독의 모든 서비스가 무료가 된다
D. 예산 알림은 모델 응답의 최대 토큰 수를 설정한다

정답: a

예산만으로 실행 중인 리소스가 자동 중지되지 않습니다.

- A: 예산만으로 실행 중인 리소스가 자동 중지되지 않습니다.
- B: 예산 알림은 삭제 동작을 자동 수행하지 않습니다.
- C: 예산 설정은 서비스 요금제를 변경하지 않습니다.
- D: 비용 모니터링과 추론 매개변수는 별개입니다.

[공식 개념 근거](https://learn.microsoft.com/en-us/azure/cost-management-billing/costs/tutorial-acm-create-budgets)

## D1-C-25 · Azure 환경

Foundry 리소스를 만들 지역을 고르려는데 가장 가까운 지역에서 수업용 모델 배포가 제공되지 않습니다. 우선 확인할 사항은 무엇입니까?

A. 가까운 지역이면 모든 모델이 반드시 제공되므로 그대로 만든다
B. 프로젝트 표시 이름을 바꾸면 모델의 지역 제한이 해제된다
C. 허용된 지역 중 모델·배포 유형의 지원과 할당량을 확인한다
D. API 키를 재발급하면 미지원 지역에서도 모델이 생긴다

정답: c

사용하려는 모델의 지원 조건과 용량을 확인한 뒤 지역을 정합니다.

- A: 모델과 배포 유형의 지역별 지원은 다를 수 있습니다.
- B: 표시 이름은 모델 가용성을 변경하지 않습니다.
- C: 사용하려는 모델의 지원 조건과 용량을 확인한 뒤 지역을 정합니다.
- D: 인증 키는 모델 지원 지역을 바꾸지 않습니다.

[공식 개념 근거](https://learn.microsoft.com/en-us/training/modules/get-started-with-ai-in-azure/)

## D1-C-26 · Azure 환경

실습 종료 후 다른 팀의 운영 리소스까지 들어 있는 리소스 그룹을 지우려 합니다. 올바른 판단은 무엇입니까?

A. 리소스 그룹 삭제는 화면의 폴더 이름만 없애므로 안전하다
B. 그룹 안의 리소스와 소유자를 확인하고 허용된 실습 리소스만 정리한다
C. 모델 호출을 멈추면 모든 종류의 Azure 요금이 반드시 즉시 0원이 된다
D. 프로젝트 이름을 변경하면 기존 리소스가 삭제된다

정답: b

공유 그룹 삭제로 필요한 서비스까지 삭제하지 않도록 범위를 확인합니다.

- A: 리소스 그룹 삭제는 포함 리소스에도 영향을 줍니다.
- B: 공유 그룹 삭제로 필요한 서비스까지 삭제하지 않도록 범위를 확인합니다.
- C: 요금은 서비스와 배포 유형 및 남아 있는 리소스에 따라 다릅니다.
- D: 표시 이름 변경은 리소스 삭제 작업이 아닙니다.

[공식 개념 근거](https://learn.microsoft.com/en-us/training/modules/get-started-with-ai-in-azure/)

## D1-C-27 · Azure 환경

앱에 엔드포인트(Endpoint)와 API 키(API Key)를 설정하는 이유를 올바르게 설명한 것은 무엇입니까?

A. 엔드포인트는 비밀번호이고 키는 모델의 출력 길이다
B. 엔드포인트가 맞으면 키를 어떤 문자열로 설정해도 된다
C. API 키가 리소스 그룹을 대신하므로 엔드포인트가 필요 없다
D. 엔드포인트는 요청 주소이고 API 키는 서비스 요청 인증에 사용하는 비밀값이다

정답: d

호출 대상과 인증 자격 증명을 각각 올바르게 설정해야 합니다.

- A: 호출 주소와 인증 자격 증명의 역할을 뒤바꿨습니다.
- B: 키 인증을 사용하는 서비스에는 유효한 자격 증명이 필요합니다.
- C: 서비스 호출 주소와 리소스 관리 단위는 별개입니다.
- D: 호출 대상과 인증 자격 증명을 각각 올바르게 설정해야 합니다.

[공식 개념 근거](https://learn.microsoft.com/en-us/training/modules/get-started-with-ai-in-azure/)

## D1-C-28 · Azure 환경

관리 ID(Managed Identity)로 인증 토큰을 얻었지만 모델 호출 권한이 없다는 응답을 받았습니다. 다음 판단으로 가장 적절한 것은 무엇입니까?

A. 신원 인증과 작업 권한은 별개이므로 서비스가 지원하는 방식과 역할 범위를 확인한다
B. 토큰이 발급됐으므로 모든 Azure 리소스의 관리자 권한을 이미 가진다
C. 관리 ID를 쓰면 호출 대상 주소는 설정할 필요가 없다
D. 다른 사람의 프로젝트 이름을 입력하면 그 사람의 권한을 사용할 수 있다

정답: a

토큰을 받았다고 모든 서비스 데이터 작업이 허용되는 것은 아닙니다.

- A: 토큰을 받았다고 모든 서비스 데이터 작업이 허용되는 것은 아닙니다.
- B: 인증 성공이 광범위한 권한을 자동 부여하지 않습니다.
- C: 신원 인증도 적절한 서비스 주소를 사용해야 합니다.
- D: 표시 이름과 신원 및 권한은 구분됩니다.

[공식 개념 근거](https://learn.microsoft.com/en-us/training/modules/get-started-with-ai-in-azure/)

## D1-C-29 · Python과 호출

모델 카탈로그(Model Catalog), 플레이그라운드(Playground), 코드의 API 호출을 구분한 설명으로 적절한 것은 무엇입니까?

A. 모델 카탈로그를 열면 Python 코드의 모든 요청이 자동 전송된다
B. 플레이그라운드의 답변은 앱의 키·주소 설정이 항상 맞다는 보장이다
C. 카탈로그에서 모델을 탐색하고 플레이그라운드에서 시험한 뒤 앱에서도 별도 연결·호출을 확인한다
D. 배포 이름을 정하면 API 키를 공개해도 안전하다

정답: c

탐색과 포털 시험 및 코드 연결은 각각 확인할 단계입니다.

- A: 카탈로그 탐색과 앱의 요청 전송은 별도입니다.
- B: 포털 테스트 성공만으로 앱의 환경 변수와 인증까지 검증되지는 않습니다.
- C: 탐색과 포털 시험 및 코드 연결은 각각 확인할 단계입니다.
- D: 배포 식별자 설정은 비밀값 보호를 대신하지 못합니다.

[공식 개념 근거](https://learn.microsoft.com/en-us/azure/ai-services/openai/how-to/responses)

## D1-C-30 · Python과 호출

두 Python 실습이 같은 패키지의 서로 다른 버전을 필요로 합니다. 서로의 의존성을 덜 간섭하게 준비하는 방법은 무엇입니까?

A. 모든 API 키를 동일한 값으로 바꾼다
B. 프로젝트별 가상 환경(Virtual Environment)을 만들고 해당 환경에 패키지를 설치한다
C. Azure 리소스 그룹 이름을 바꾼다
D. 프롬프트 문장 끝에 라이브러리 버전을 쓴다

정답: b

가상 환경은 프로젝트별 Python 의존성을 분리합니다.

- A: 키는 패키지 버전을 격리하지 않습니다.
- B: 가상 환경은 프로젝트별 Python 의존성을 분리합니다.
- C: 클라우드 리소스 이름은 로컬 Python 패키지를 분리하지 않습니다.
- D: 모델 입력은 실행 환경의 패키지 버전을 변경하지 않습니다.

[공식 개념 근거](https://learn.microsoft.com/en-us/azure/ai-services/openai/how-to/responses)

## D1-C-31 · Python과 호출

Python 코드의 import os와 from openai import OpenAI를 읽는 설명으로 가장 적절한 것은 무엇입니까?

A. 두 줄은 사용자 프롬프트를 모델로 전송한다
B. 두 줄은 Azure 모델을 새로 학습한다
C. 두 줄을 실행하면 API 키가 자동 발급된다
D. 사용할 모듈과 클라이언트 클래스를 가져오는 단계다

정답: d

import 단계와 클라이언트 생성 및 요청 전송은 구분됩니다.

- A: import는 모듈과 이름을 가져오는 단계입니다.
- B: 패키지를 가져오는 것만으로 학습을 수행하지 않습니다.
- C: 키는 서비스에서 발급받거나 다른 인증 수단을 구성해야 합니다.
- D: import 단계와 클라이언트 생성 및 요청 전송은 구분됩니다.

[공식 개념 근거](https://learn.microsoft.com/en-us/azure/ai-services/openai/how-to/responses)

## D1-C-32 · Python과 호출

.env와 requirements.txt의 역할을 올바르게 구분한 것은 무엇입니까?

A. .env는 환경 설정값을, requirements.txt는 설치할 Python 패키지 의존성을 담을 수 있다
B. .env는 모델의 학습 가중치, requirements.txt는 API 응답 텍스트다
C. 두 파일은 동일한 형식이므로 내용을 서로 바꾸어도 된다
D. requirements.txt에 API 키를 쓰면 패키지가 키를 안전하게 숨긴다

정답: a

설정과 패키지 의존성은 서로 다른 목적입니다.

- A: 설정과 패키지 의존성은 서로 다른 목적입니다.
- B: 환경 설정과 패키지 목록을 모델 데이터와 혼동했습니다.
- C: 목적과 처리 방식이 다릅니다.
- D: 패키지 목록에 키를 넣어도 비밀이 보호되지 않습니다.

[공식 개념 근거](https://learn.microsoft.com/en-us/azure/ai-services/openai/how-to/responses)

## D1-C-33 · Python과 호출

.env에 API_KEY가 있지만 다음 코드에서 key가 None입니다. 우선 점검할 사항을 모두 고르시오.

```python
import os
from dotenv import load_dotenv

key = os.getenv("API_KEY")
load_dotenv()
```

A. 응답의 output_text를 먼저 출력하면 환경 변수가 생성되는지 확인한다
B. 앱이 찾는 .env 경로와 API_KEY라는 변수 이름이 일치하는지 확인한다
C. os.getenv 전에 load_dotenv()가 실행되는지 확인한다
D. API 키를 리소스 그룹 이름으로 바꾼다

정답: b, c

파일 위치와 변수 이름 불일치로 값을 못 읽을 수 있습니다. .env 내용을 환경에 올린 뒤 읽어야 합니다.

- A: 응답 출력은 환경 변수를 로드하지 않습니다.
- B: 파일 위치와 변수 이름 불일치로 값을 못 읽을 수 있습니다.
- C: .env 내용을 환경에 올린 뒤 읽어야 합니다.
- D: 리소스 그룹 이름은 요청 인증값을 대신하지 않습니다.

[공식 개념 근거](https://learn.microsoft.com/en-us/azure/ai-services/openai/how-to/responses)

## D1-C-34 · Python과 호출

다음 코드에서 모델에 사용자 입력을 실제로 보내는 줄은 어느 것입니까?

```python
from openai import OpenAI                         # 1
client = OpenAI(base_url=endpoint, api_key=key)    # 2
r = client.responses.create(model=deployment, input="안녕")  # 3
print(r.output_text)                              # 4
```

A. 1번 import 줄
B. 2번 클라이언트 생성 줄
C. 3번 responses.create 호출 줄
D. 4번 output_text 출력 줄

정답: c

이 메서드 호출에서 입력과 대상 배포를 지정해 요청합니다.

- A: 모듈과 클래스를 가져오는 단계입니다.
- B: 주소와 인증 설정을 준비하며 아직 추론 요청을 보내지 않습니다.
- C: 이 메서드 호출에서 입력과 대상 배포를 지정해 요청합니다.
- D: 이미 받은 응답 텍스트를 출력하는 단계입니다.

[공식 개념 근거](https://learn.microsoft.com/en-us/azure/ai-services/openai/how-to/responses)

## D1-C-35 · Python과 호출

아래 설정에서 배포 이름은 cafe-day1이고 기반 모델 이름은 다른 값입니다. model 빈칸에 넣을 실제 문자열은 무엇입니까?

```python
# 실제 배포 이름: cafe-day1
r = client.responses.create(model=____, input="인사해줘")
```

A. API_KEY
B. cafe-day1
C. rg-ai901
D. API 응답을 받을 파일 이름

정답: b

Azure OpenAI의 model에는 실제 배포 이름을 지정합니다.

- A: 키는 인증 자격 증명이며 배포 식별자가 아닙니다.
- B: Azure OpenAI의 model에는 실제 배포 이름을 지정합니다.
- C: 리소스 그룹 이름은 모델 배포 이름이 아닙니다.
- D: 출력 파일 이름은 추론 대상 배포를 지정하지 않습니다.

[공식 개념 근거](https://learn.microsoft.com/en-us/azure/ai-services/openai/how-to/responses)

## D1-C-36 · Python과 호출

요청은 성공했지만 응답 객체 전체 대신 생성된 텍스트를 출력하고 싶습니다. Day 1의 Responses API 코드에서 적절한 줄은 무엇입니까?

A. print(client.api_key)
B. print(os.getenv("MODEL_DEPLOYMENT_NAME"))
C. print(OpenAI)
D. print(r.output_text)

정답: d

응답 객체의 출력 텍스트 속성을 읽습니다.

- A: API 키를 출력하면 비밀값이 노출되며 모델 답변이 아닙니다.
- B: 배포 이름을 출력할 뿐 응답 텍스트가 아닙니다.
- C: 클라이언트 클래스의 표현을 출력할 뿐입니다.
- D: 응답 객체의 출력 텍스트 속성을 읽습니다.

[공식 개념 근거](https://learn.microsoft.com/en-us/azure/ai-services/openai/how-to/responses)

## D1-C-37 · Python과 호출

모델 호출에서 HTTP 401 인증 실패가 반환됐습니다. 이때 우선 점검할 내용으로 가장 적절한 것은 무엇입니까?

A. 인증 방식, 해당 서비스에 맞는 키나 토큰, 실제 로드된 설정을 확인한다
B. 정답률이 낮은 책임 있는 AI 문항부터 삭제한다
C. 모델의 temperature만 높인다
D. API 키를 사용자 화면에 출력해 누구나 비교하게 한다

정답: a

401은 인증 문제를 먼저 조사할 근거이며 추측으로 키를 공개하지 않습니다.

- A: 401은 인증 문제를 먼저 조사할 근거이며 추측으로 키를 공개하지 않습니다.
- B: 인증 오류와 평가 문항 내용은 관련이 없습니다.
- C: 생성 매개변수는 인증 실패를 해결하지 않습니다.
- D: 비밀값 공개는 문제 해결 대신 노출 위험을 만듭니다.

[공식 개념 근거](https://learn.microsoft.com/en-us/azure/ai-services/openai/how-to/responses)

## D1-C-38 · Python과 호출

API 응답이 HTTP 404이고, 다른 실행에서는 HTTP 429가 발생했습니다. 각각의 첫 점검 방향으로 가장 적절한 것은 무엇입니까?

A. 404는 패키지 설치만, 429는 비밀번호 길이만 확인한다
B. 두 코드 모두 무조건 새 구독을 만들어 해결한다
C. 404는 요청 경로·엔드포인트·배포 이름을, 429는 속도 제한·할당량과 재시도 간격을 확인한다
D. 404는 답변을 더 길게, 429는 요청을 무한히 빠르게 반복한다

정답: c

404의 원인을 배포 이름 하나로 단정하지 않고 429도 서비스 응답을 보고 대응합니다.

- A: HTTP 대상 오류와 사용량 제한에 직접 대응하지 않습니다.
- B: 오류별 원인을 먼저 확인해야 합니다.
- C: 404의 원인을 배포 이름 하나로 단정하지 않고 429도 서비스 응답을 보고 대응합니다.
- D: 출력 길이나 무제한 반복은 적절한 문제 해결이 아닙니다.

[공식 개념 근거](https://learn.microsoft.com/en-us/azure/ai-services/openai/how-to/responses)

## D1-C-39 · Python과 호출

실행 시 ModuleNotFoundError: No module named 'openai'가 발생합니다. 우선 취할 조치는 무엇입니까?

A. Azure 모델 배포 이름을 'openai'로 변경한다
B. 실행 중인 Python 환경을 확인하고 그 환경에 openai 패키지를 설치한다
C. API 키를 회전하면 패키지가 자동 설치된다
D. 프롬프트를 영어로 바꾼다

정답: b

활성 환경과 설치 대상이 일치해야 합니다.

- A: 로컬 패키지 import 실패는 배포 이름과 별개입니다.
- B: 활성 환경과 설치 대상이 일치해야 합니다.
- C: 키 교체는 로컬 패키지 설치가 아닙니다.
- D: import 실패는 프롬프트가 전송되기 전에 발생합니다.

[공식 개념 근거](https://learn.microsoft.com/en-us/azure/ai-services/openai/how-to/responses)

## D1-C-40 · Python과 호출

실제 API 키가 들어 있는 .env를 공개 Git에 올렸습니다. 노출을 처리하는 올바른 조치를 모두 고르시오.

A. 노출된 키를 폐기하거나 회전하고 앱 설정을 새 키로 바꾼다
B. 현재 파일만 지우면 과거에 노출된 키도 자동으로 무효가 된다
C. 실제 .env를 추적 대상에서 제거하고 .gitignore로 재커밋을 방지한다
D. 실제 값 없는 .env.example로 필요한 설정 이름만 공유한다

정답: a, c, d

노출된 키는 파일을 지워도 이미 복사됐을 수 있습니다. 추적 해제와 제외 규칙을 함께 확인해야 합니다. 예제에는 실제 비밀값을 담지 않고 설정 형식만 안내합니다.

- A: 노출된 키는 파일을 지워도 이미 복사됐을 수 있습니다.
- B: 파일 삭제와 서비스 키 무효화는 다른 작업입니다.
- C: 추적 해제와 제외 규칙을 함께 확인해야 합니다.
- D: 예제에는 실제 비밀값을 담지 않고 설정 형식만 안내합니다.

[공식 개념 근거](https://learn.microsoft.com/en-us/azure/ai-services/openai/how-to/responses)

