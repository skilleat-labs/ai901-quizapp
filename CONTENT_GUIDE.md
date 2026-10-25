# 문항 검토·수정 안내

원본은 `content/questions.json`, 평가 구성은 `content/sets.json`입니다. 강사 화면의 문제은행에서 정답과 모든 선택지 해설을 검토하고 JSON을 내려받아 수정·가져올 수도 있습니다.

문항 필드: `id`, `version`, `domain`, `topic`, `type`(single/multiple), `prompt`, 선택적 `code`, `options`(id/text/reason), `correct`(보기 ID 배열), `explanation`, `source`, `lecture`, `lab`, `authorship`, `difficulty`.

기존 ID·세트 구성을 유지하고, 정답 수와 `type`을 맞추세요. 오답 해설은 해당 보기의 개념과 왜 질문 조건에 맞지 않는지를 설명해야 합니다. `source`는 해당 개념을 설명하는 Microsoft Learn 문서여야 합니다. 서비스명·SDK·시험 범위가 바뀌면 최신 문서와 다시 비교하세요.

가져오기는 스키마와 문항 구성을 검증하지만 사실 정확성을 자동 보증하지 않습니다. 실제 수업 전 강사가 문항과 교안 진도를 최종 대조해야 합니다. 동일 목표를 개념형·상황형으로 짝지었으므로 서로 독립적인 240개 학습 목표를 뜻하지 않습니다. 합격을 보장하거나 실제 출제 문제라고 안내하지 마세요.

웹에서 가져온 문제은행은 Azure Table(로컬은 개발 저장소)에 저장됩니다. 새 응시에 적용되고 기존 응시는 생성 당시 문항 스냅샷을 유지합니다. 코드의 JSON을 바꾸어 배포해도 저장소에 가져온 은행이 있으면 그 버전이 우선합니다. 배포 후에도 강사 화면에서 원하는 은행을 가져오세요.

`scripts/build-bank.py`는 최초 문항 생성 원고입니다. 실행하면 `questions.json`을 다시 생성하므로 직접 고친 문항이 있다면 먼저 보관하세요. 수정 뒤 `npm run check`와 `npm test`를 실행합니다.

개정 원고는 `scripts/strengthen_bank.py`입니다. `build-bank.py`가 기본 원고 생성 후 이 개정을 적용합니다. 개정 내용은 [보강 기록](docs/QUESTION_REVIEW.md)을 참조하세요.

한영 용어·문장 개정은 `scripts/polish_language.py`에서 관리합니다. 빌드가 보강 원고 뒤 이 편집을 적용하며 코드 자체는 번역하지 않습니다. 자세한 변경은 [표현 검토](docs/LANGUAGE_REVIEW.md)를 참조하세요.
