# AI-901 Quiz App 배포 계획

상태: Ready for Validation
갱신일: 2026-10-25
저장소: https://github.com/skilleat-labs/ai901-quizapp

## 구성

독립 저장소 루트에서 Node.js 24 웹앱을 Azure App Service Linux B1 단일 인스턴스에 배포한다. Azure Table Storage QuizData에 이름·기수·응시·답안·문항 버전을 보관하며 관리 ID로 접근한다. Key Vault에 강사 암호와 세션 키를 보관한다. Application Insights/Log Analytics를 포함한다.

인프라: infra/main.bicep, infra/resources.bicep, infra/main.parameters.json
앱 구성: azure.yaml
CI/CD: .github/workflows/azure-webapp.yml
배포 안내: AZURE_DEPLOYMENT.md

## 확인된 검증

로컬 문항·JavaScript 검사, 자동 테스트 15개, 학생·강사 브라우저 흐름을 확인했다. Bicep 컴파일은 이전 준비 단계에서 통과했다. 시험 범위·운영 검증 한계는 VERIFICATION.md에 기록했다.

## 실제 Azure 검증 대기

구독·지역·예산을 아직 확정하지 않았다. 실제 구독의 정책·할당량·리소스 가용성·배포 주체의 리소스 생성 및 역할 부여 권한·what-if를 확인해야 한다. 실제 Table 연결과 재시작 후 이력 보존 검증이 남아 있다. 현재 상태를 Validated로 간주하지 않는다.

## 보안·데이터

.env와 .data는 Git 제외. 앱 배포와 학생 데이터 저장을 분리한다. 로컬 .data/records.json의 기존 이력을 Azure로 자동 이전하지 않는다. 학생은 요청에 따라 이름만 입력하며 본인 인증은 하지 않는다.

GitHub 배포는 저장소의 production 환경에 OIDC 신뢰를 구성한 후 사용한다. ENABLE_AZURE_DEPLOY=true 설정 전에는 검사만 실행한다. 외부 Azure 리소스 생성·배포는 아직 실행하지 않았다.
