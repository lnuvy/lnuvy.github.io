#### AI 코드 리뷰의 시작 — 맥락을 알려줘야 쓸만하다

<code style='font-size: 100%; line-height: 1.5'>
팀의 코드 리뷰 품질을 높이기 위해 <b>Google Gemini Code Assist</b>를 도입했습니다. 초기에는 프로젝트 맥락에 맞지 않는 피드백이 많았는데, <a href="https://developers.google.com/gemini-code-assist/docs/customize-gemini-behavior-github?hl=ko#styleguide.md" target="_blank" style="text-decoration: underline;">styleguide.md</a>에 우리 아키텍처와 컨벤션을 담자 리뷰 정확도가 확 올라갔습니다.
<br />
<b>"AI한테 맥락을 알려줘야 쓸만한 결과가 나온다"</b> — 이후 모든 에이전트 활용의 출발점이 된 경험이었습니다.
</code>

<br />
<br />

#### Antigravity + Skills — 에이전트에게 '우리 문법'을 가르치다

<code style='font-size: 100%; line-height: 1.5'>
Antigravity 베타를 접하고, 바로 <b>.agent/rules</b>에 프로젝트 컨벤션(Jotai, MF 경계, 데이터마스킹 등)을, <b>.agent/workflows</b>에 반복 작업 흐름을 정리했습니다. 에이전트를 쓰는 동료가 늘면서 Rules가 자연스럽게 보강됐고, 이 문서 자체가 <b>신규 팀원의 온보딩 가이드</b> 역할도 하게 되었습니다.
<br />
<br />
Skills 기능이 출시되자마자 PR 자동 생성, 라벨링, 슬랙 알림까지 연결했습니다. 지금은 에이전트에게 'PR 올려줘'라고 하면 <b>라벨이 붙고, 리뷰어가 배정되고, 슬랙으로 알림이 가는</b> 환경이 구축되어 있습니다.
반복적인 태스크를 에이전트에게 위임하고, 그 덕에 확보한 시간으로 아키텍처와 생산성을 고민할 수 있는 환경 — 그걸 직접 만들어가는 재미를 느끼고 있습니다.
</code>

<br />
