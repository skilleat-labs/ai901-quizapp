# 최종 모의고사 4 · Microsoft Learn 원문 연결형

확인일: 2026-10-25. 12개 공개 모듈의 43문항(개념 21 + 구현 22)을 연결합니다. 1~3회차의 자체 제작 문제를 재사용하지 않습니다. 자체 제작 문제 은행은 240개를 유지하고, 공식 원문 참조 기록 43개를 별도로 추가했습니다.

## 학생 사용 방법

1. 강사가 4회차를 열면 종합 모의고사 메뉴에서 시작합니다. 기본 60분입니다.
2. 화면의 한국어 질문과 보기를 읽고 직접 답합니다. 핵심 용어는 영문도 병기합니다.
3. 필요하면 문항별 영문 원문 링크로 학습 요지를 대조합니다.
4. 제출 후 사이트 검토 답안 기준의 해설과 회차 순위를 확인합니다.

## 출처와 편집 범위

공식 모듈 43문항의 학습 요지를 한국어로 재서술하고, 학습용 보기를 자체 구성했습니다. 공식 번역본 또는 Microsoft가 제공한 한국어 원문으로 표시하지 않습니다. 영문 질문·선택지 전체의 복제본이 아닙니다. 원문 번호와 출처는 그대로 연결합니다.

공식 시험 Practice Assessment나 실제 기출문제가 아닙니다. 정답·해설은 사이트의 검토 기준이며 Microsoft 공식 채점 피드백과 구분합니다. 원문 보기 번호를 입력하던 이전 방식은 새 버전에서 사용하지 않습니다.

이전 응시는 시작 당시 스냅샷을 유지합니다. 최신 한국어 버전은 새 회차·새 응시에서 확인합니다.

## 모듈 구성

| 영역 | 모듈 | 문항 | 원문 |
|---|---|---:|---|
| 개념 | AI 개념 | 3 | [Microsoft Learn](https://learn.microsoft.com/en-us/training/modules/get-started-ai-fundamentals/8-knowledge-check) |
| 개념 | 생성형 AI·에이전트 개념 | 6 | [Microsoft Learn](https://learn.microsoft.com/en-us/training/modules/fundamentals-generative-ai/8-knowledge-check) |
| 개념 | 자연어 처리 개념 | 3 | [Microsoft Learn](https://learn.microsoft.com/en-us/training/modules/introduction-language/5-knowledge-check) |
| 개념 | 음성 개념 | 3 | [Microsoft Learn](https://learn.microsoft.com/en-us/training/modules/introduction-ai-speech/6-knowledge-check) |
| 개념 | 비전 개념 | 3 | [Microsoft Learn](https://learn.microsoft.com/en-us/training/modules/introduction-computer-vision/6-knowledge-check) |
| 개념 | 정보 추출 개념 | 3 | [Microsoft Learn](https://learn.microsoft.com/en-us/training/modules/introduction-information-extraction/7-knowledge-check) |
| 구현 | Azure·Foundry 시작 | 4 | [Microsoft Learn](https://learn.microsoft.com/en-us/training/modules/get-started-with-ai-in-azure/7-knowledge-check) |
| 구현 | 생성형 AI·에이전트 구현 | 5 | [Microsoft Learn](https://learn.microsoft.com/en-us/training/modules/get-started-with-generative-ai-and-agents/7-knowledge-check) |
| 구현 | 텍스트 분석 구현 | 3 | [Microsoft Learn](https://learn.microsoft.com/en-us/training/modules/get-started-text-analysis-azure/6-knowledge-check) |
| 구현 | 음성 구현 | 3 | [Microsoft Learn](https://learn.microsoft.com/en-us/training/modules/get-started-speech-azure/6-knowledge-check) |
| 구현 | 비전·이미지 생성 구현 | 4 | [Microsoft Learn](https://learn.microsoft.com/en-us/training/modules/get-started-vision-azure/6-knowledge-check) |
| 구현 | 정보 추출 구현 | 3 | [Microsoft Learn](https://learn.microsoft.com/en-us/training/modules/get-started-information-extraction/5-knowledge-check) |

## 유지보수

`content/official-references.json`에 원문 URL·문제 번호·확인일·검토 정답 번호·자체 해설을 관리합니다. `scripts/build-bank.py`가 `build_official_exam.py`로 4회차를 생성합니다. 기존 응시에는 당시 스냅샷이 유지됩니다.

한국어 편집 원고는 `scripts/official_korean.py`에서 관리합니다. 영문 원문 보기 번호와 한국어 보기 번호는 대응하지 않습니다. 사이트는 한국어 보기 ID로 채점합니다.
