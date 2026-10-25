# Azure Web App 배포 준비

실제 Azure 리소스 생성·Git 게시·배포는 수행하지 않았습니다. 기존 labs 저장소와 분리하여 **이 폴더 자체를 새 저장소 루트**로 사용하도록 구성했습니다.

## 구성

- Azure App Service Linux / Node.js 24 / B1, 시작 명령 `npm start`.
- Azure Table Storage `QuizData`: 기수·이름·세션·답안·성적·문항 버전. App Service 관리 ID로 접근합니다.
- Key Vault: 강사 암호와 쿠키 서명 키. 앱은 Key Vault 참조 설정으로 읽습니다.
- Application Insights와 Log Analytics: 운영 관측.

B1은 사이트가 유휴 상태여도 고정 비용이 발생합니다. Storage·Key Vault·로그는 사용량에 따라 추가 과금됩니다. 구독·지역·실제 학생 수가 정해지면 비용과 할당량을 확인해야 합니다. 저장소 중복성은 백업을 대체하지 않습니다. 성적 CSV와 문제은행 JSON을 정기적으로 내려받고, 운영 전 Table 백업·복구 정책을 별도로 정하세요.

## 인프라 배포 전

1. 구독·지역·환경 이름을 정하고 App Service B1 가용성, 리소스 공급자 등록과 배포 권한을 확인합니다. 배포 주체에는 리소스 생성 및 관리 ID 역할 할당 권한이 필요합니다.
2. Azure CLI/Bicep 또는 Azure Developer CLI를 준비합니다. `infra/main.bicep`는 구독 범위 템플릿입니다.
3. `environmentName`, `location`, `adminPassword`(12자 이상), `sessionSecret`(무작위 32자 이상)을 보안 매개변수 파일로 전달합니다. 실제 암호를 Git이나 명령 기록에 넣지 마세요. `infra/main.parameters.json`은 azd 환경 변수 치환용입니다.
4. 실제 구독에서 what-if와 권한·역할 검증 후 인프라를 배포합니다. 역할과 Key Vault 참조 전파에 시간이 걸릴 수 있습니다.

운영 필수 앱 설정은 Bicep에 포함됩니다: `NODE_ENV=production`, `STORAGE_DRIVER=azure`, `TABLE_ENDPOINT`, `TABLE_NAME`, `ADMIN_PASSWORD`, `SESSION_SECRET`. 운영에서 로컬 파일 저장은 허용하지 않습니다.

## GitHub Actions

`.github/workflows/azure-webapp.yml`은 검사·테스트·실행 파일 패키징을 수행합니다. 배포는 기본 비활성입니다.

Azure에 인프라를 만든 후 GitHub `production` 환경에 OIDC 신뢰를 설정합니다. 신뢰 주체는 해당 저장소의 `environment:production`이어야 합니다. 배포 ID에 대상 Web App 범위의 배포 권한을 부여하고 아래 값을 설정합니다.

- Secrets: `AZURE_CLIENT_ID`, `AZURE_TENANT_ID`, `AZURE_SUBSCRIPTION_ID`
- Variables: `AZURE_WEBAPP_NAME`, `ENABLE_AZURE_DEPLOY=true`

실행 패키지에 `.env`, `.data`, 테스트·개발 문서는 포함하지 않습니다. 문제은행 JSON은 서버 전용이고 정적 파일 경로로 제공하지 않습니다. 학생 API는 공개 시점 전 정답·해설을 제거합니다.

## 운영 시작 확인

`/health` 저장소 연결, 강사 로그인, 새 기수, 평가 개방, 서로 다른 두 이름의 제출·순위, 재접속, 제한 시간·마감, 해설 공개, CSV, Web App 재시작 후 기록 유지까지 확인하세요. 실제 Azure Table 어댑터와 다중 인스턴스 동시 제출은 아직 클라우드에서 검증하지 않았습니다. 초기에는 인스턴스 1개로 운영 검증한 뒤 확장하세요.

이름만으로 입장하므로 다른 사람이 같은 이름으로 기존 기록에 들어갈 수 있습니다. 이는 요청한 참여 방식이며 강사 암호는 학생에게 공유하지 마세요. 공개 인터넷에서 운영할 때는 수업 종료 후 보관 기간과 삭제 절차를 정하세요.
