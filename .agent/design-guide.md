# Design Guide: GitHub Profile Style

이 문서는 `lnuvy.github.io`의 About 섹션을 GitHub README 스타일로 디자인하기 위한 가이드라인입니다.
개발자 친화적이고, 정보 밀도가 높으며, 익숙한 GitHub UX를 차용하여 전문성을 강조합니다.

## 1. 디자인 철학 (Design Philosophy)

- **Developer-Centric**: 화려한 애니메이션보다는 코드 가독성과 정보 전달에 집중합니다.
- **Markdown Inspiration**: 마치 잘 작성된 `README.md` 파일을 렌더링한 듯한 느낌을 줍니다.
- **Information Dense**: 공간 낭비를 줄이고, 한 눈에 핵심 기술 스택과 프로젝트를 파악할 수 있도록 합니다.

## 2. 타이포그래피 (Typography)

- **Primary Font**: 시스템 기본 산세리프 (Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif).
- **Code/Monospace**: `Menlo`, `Monaco`, `Consolas`, `"Courier New"`, `monospace`.
  - 주요 키워드, 기술 스택, 터미널 명령어 등은 모노스페이스 폰트를 사용합니다.
- **Heading**: 굵고 명확하게 (font-weight: 600+).

## 3. 색상 팔레트 (Color Palette - GitHub Dark Dimmed Theme)

- **Background**: `#0d1117` (Main), `#161b22` (Card/Box)
- **Border**: `#30363d`
- **Text**:
  - Primary: `#c9d1d9`
  - Secondary: `#8b949e`
  - Link: `#58a6ff`
- **Accent (Green)**: `#238636` (Button/Success), `#3fb950` (Graph)

## 4. 컴포넌트 구조 (Component Structure)

### 4.1. 프로필 헤더 (Profile Header)

- 좌측/상단: 프로필 이미지 (원형)
- 우측/하단: 이름, 아이디 (@lnuvy), 간단한 Bio (한 줄 소개), 소셜 링크 (GitHub, LinkedIn, Email).

### 4.2. 통계 및 기여도 (Stats & Contribution)

- **GitHub Stats Card**: 총 커밋 수, PR 수, 이슈 수 등을 보여주는 카드 스타일.
- **Contribution Graph**: 지난 1년 간의 활동을 보여주는 잔디 심기 그래프 (Calendar Heatmap).

### 4.3. 기술 스택 (Tech Stack)

- **Badges**: `Shields.io` 스타일의 뱃지 사용 (e.g., `Flat-Square` 스타일).
- **Categorization**: Frontend, Backend, DevOps, Tools로 구분하여 나열.

### 4.4. 핀 고정 저장소 (Pinned Repositories)

- GitHub 프로필의 "Pinned" 섹션과 동일한 레이아웃.
- 카드 형태: 저장소 이름, 설명, 주 언어(색상 원 포함), 스타 수, 포크 수.
- Grid Layout (2열 또는 3열).

### 4.5. 최근 활동 (Recent Activity) - Optional

- 타임라인 형태로 최근 블로그 포스트나 커밋 로그를 보여줌.

## 5. 구현 가이드 (Implementation Guide)

- Tailwind CSS를 사용하여 스타일링.
- `border`, `rounded-md`, `bg-canvas-subtle` 등의 유틸리티 클래스 활용.
- 아이콘은 `react-icons` (Runners 아이콘 등은 SVG 직접 사용) 또는 `lucide-react` 사용.
