#### AI 코드 리뷰의 시작 — Google Gemini Code Assist

<code style='font-size: 100%; line-height: 1.5'>
2025년 하반기, 팀의 코드 리뷰 품질을 높이기 위해 <b>Google Gemini Code Assist</b>를 도입했습니다.
열린 PR에 대해 자동으로 AI 리뷰가 달리는 구조였는데, 초기에는 프로젝트 맥락에 맞지 않거나 실용적이지 않은 피드백이 많았습니다.
<br/>
<br/>
개선을 위해 <a href="https://developers.google.com/gemini-code-assist/docs/customize-gemini-behavior-github?hl=ko#styleguide.md" target="_blank" style="text-decoration: underline;">GCA styleguide.md</a> 파일로 우리 프로젝트의 컨벤션과 아키텍처 맥락을 담은 가이드를 직접 보강했습니다.
그러자 리뷰의 정확도가 확연하게 올라갔고, <b>"AI한테 맥락을 알려줘야 쓸만한 결과가 나온다"</b>는 걸 피부로 체감한 경험이었습니다.
</code>

#### Antigravity 베타 — Rules와 Workflows로 환경 세팅

<code style='font-size: 100%; line-height: 1.5'>
2025년 11월, Google의 <b>Antigravity</b> 베타 버전을 써볼 수 있는 기회가 생겼습니다.
Gemini Code Review 에서 styleguide.md를 보강하며 느꼈던 "맥락 주입"의 중요성을 이미 체득한 상태였기에, 바로 <b>.agent/rules</b>에 프로젝트 컨벤션(Jotai 상태관리, Module Federation 경계 규칙, 데이터마스킹 정책 등)을 정리하고, <b>.agent/workflows</b>에 반복적인 작업 흐름(코드리뷰, test 코드 작성)을 작성했습니다.
<br/>
<br/>
2026년 초, 안티그래비티를 사용하는 동료가 하나둘 늘기 시작했고 제가 작성한 맞춤 Rules가 더욱 보강되었습니다. 전역 상태관리 가이드를 레퍼런스로 등록하는 패턴을 넣어 에이전트가 우리 코드베이스를 이해할 수 있는 토대를 만들었고, 이 Rules 자체가 신규 팀원이나 다른 파트 동료에게는 <b>살아있는 온보딩 문서</b> 역할도 하게 되었습니다.
<br/>
</code>

#### Skills 기능 출시 — 즉시 도입, 즉시 적용

<code style='font-size: 100%; line-height: 1.5'>
1월 14일, Antigravity에 <b>Skills</b> 기능이 추가되었다는 소식을 듣고 바로 적용에 들어갔습니다.
<br/>
<br/>
PR 생성 자동화 스킬, React Best Practices 스킬, pull-request-labeling 스킬 등을 작성하고, 슬랙 알림 CI와 통합 라벨러 로직까지 직접 구현했습니다.
또한 모노레포가 크게 통합되면서 프론트엔드-백엔드 교차 개발 상황을 위한 <b>교차 컨텍스트 규칙</b>과, LaunchDarkly 피처 플래그 가이드, 모듈 생성 스킬의 포트 할당 로직 등 실무에서 반복되는 판단을 에이전트에게 위임할 수 있도록 고도화했습니다.
<br/>
<br/>
결과적으로, 상황에 맞는 특정 워크플로우를 실행하면 재귀적인 코드검증까지 진행하고, 에이전트에게 자연어로 'PR 올려줘' 같은 일을 시키면 <b>자동으로 라벨이 붙고, 적절한 리뷰어가 배정되며, 슬랙으로 정제된 알림이 가는</b> 환경이 구축되었습니다.

반복적인 태스크를 에이전트에게 위임하고, 그 덕에 확보한 시간으로 아키텍처와 생산성을 고민할 수 있는 환경 — 그걸 직접 만들어가는 재미를 느끼고 있습니다.
</code>
