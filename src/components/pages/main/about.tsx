import TransitionWrapper from '@components/common/transition-wrapper'

// Mock data for pinned repos
const pinnedRepos = [
  {
    name: 'next.js',
    forkedFrom: 'vercel/next.js',
    description:
      'Next.js 14.0.4 버전에서 OpenGraphMetadata 객체에 문제를 발견하고 이슈를 남겨 v14.2.0에서 수정되었습니다.',
    language: 'TypeScript',
    color: '#3178c6',
    stars: '138k+',
    url: 'https://github.com/vercel/next.js/issues/63415',
  },
  {
    name: 'pokerogue',
    forkedFrom: 'pagefaultgames/pokerogue',
    description:
      '미스터리 조우로 잡은 포켓몬의 도감을 열었을 때 좌/우 화살표로 에러가 나는 현상을 발견해 수정했습니다.',
    language: 'TypeScript',
    color: '#3178c6',
    stars: '5.5k+',
    url: 'https://github.com/pagefaultgames/pokerogue/pull/6000',
  },
  {
    name: 'eslint-plugin-import',
    forkedFrom: 'import-js/eslint-plugin-import',
    description:
      'ESLint 9 Flat Config 초기, typescript-eslint와 함께 사용할 때 발생하는 설정 문제를 알리기 위해 Docs를 업데이트 했습니다.',
    language: 'JavaScript',
    color: '#f1e05a',
    stars: '5.9k+',
    url: 'https://github.com/import-js/eslint-plugin-import/pull/3126',
  },
]

const About = () => {
  return (
    <div
      id="About"
      className="relative z-20 w-full max-w-4xl mx-auto px-4 py-20 text-text-default font-sans bg-background-default border-t mt-[-100px]"
    >
      {/* Intro Section */}
      <TransitionWrapper>
        <div className="w-full flex flex-col md:flex-row gap-8 items-start mb-12">
          <div className="flex-1 space-y-4">
            <span className="text-sm font-mono text-text-muted">lnuvy / README.md</span>
            <h1 className="text-4xl font-bold border-b pb-4 border-border-color">
              Hi there, I&apos;m Hanul Lee <span className="animate-pulse inline-block">👋</span>
            </h1>
            <div className="text-lg leading-relaxed text-text-2 space-y-4">
              몰입하는 개발자, 이한울입니다.
              <br />
              <br />
              개발자란 단순히 코딩하는 사람이 아닌, <br />
              기업의 비즈니스 모델에 맞춰 생각하고 코드로 풀어내는 사람이라는 확신을 가지고 있습니다.
              <br />
              급변하는 AI 생태계에 빠르게 적응하고, 마주친 문제 해결을 효율적으로 하기 위한 고민을 즐깁니다.
            </div>
          </div>
        </div>
      </TransitionWrapper>

      {/* Tech Stack - Badges */}
      {/* <TransitionWrapper>
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-xl">🛠</span> Tech Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            <img
              src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"
              alt="JavaScript"
            />
            <img
              src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"
              alt="TypeScript"
            />
            <img
              src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
              alt="React"
            />
            <img src="https://img.shields.io/badge/Jotai-000000?style=for-the-badge&logoColor=white" alt="Jotai" />
            <img src="https://img.shields.io/badge/Zustand-443E38?style=for-the-badge" alt="Zustand" />
            <img
              src="https://img.shields.io/badge/Apollo%20Client-311C87?style=for-the-badge&logo=apollo-graphql&logoColor=white"
              alt="Apollo Client"
            />
            <img src="https://img.shields.io/badge/Rspack-F6F6F6?style=for-the-badge&logoColor=black" alt="Rspack" />
            <img
              src="https://img.shields.io/badge/Module%20Federation-2B3A42?style=for-the-badge&logo=webpack&logoColor=white"
              alt="Module Federation"
            />
            <img
              src="https://img.shields.io/badge/Turborepo-EF5B25?style=for-the-badge&logo=turborepo&logoColor=white"
              alt="Turborepo"
            />
          </div>
        </div>
      </TransitionWrapper> */}

      {/* Pinned Repositories */}
      <TransitionWrapper>
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="text-xl">📌</span> Pinned Projects (오픈소스 기여)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {pinnedRepos.map((repo) => (
              <a
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                key={repo.name}
                className="block border border-border-color rounded-md p-4 bg-background-1 hover:border-text-muted transition-colors"
                style={{ textDecoration: 'none' }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <svg
                    aria-hidden="true"
                    height="16"
                    viewBox="0 0 16 16"
                    version="1.1"
                    width="16"
                    data-view-component="true"
                    className="fill-text-muted"
                  >
                    <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.45a.25.25 0 0 1-.4-.2Z"></path>
                  </svg>
                  <span className="font-bold text-link-color">{repo.name}</span>
                  <span className="text-xs border border-border-color rounded-full px-2 py-0.5 text-text-muted ml-auto">
                    Public
                  </span>
                </div>
                {/* @ts-ignore */}
                {repo.forkedFrom && <p className="text-xs text-text-muted mb-2">Forked from {repo.forkedFrom}</p>}
                <p className="text-sm text-text-2 mb-4 h-10 line-clamp-2">{repo.description}</p>
                <div className="flex items-center gap-4 text-xs text-text-muted mt-auto">
                  <div className="flex items-center gap-1">
                    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: repo.color }}></span>
                    <span>{repo.language}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg
                      aria-hidden="true"
                      height="16"
                      viewBox="0 0 16 16"
                      version="1.1"
                      width="16"
                      data-view-component="true"
                      className="fill-text-muted scale-75"
                    >
                      <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.75.75 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z"></path>
                    </svg>
                    {repo.stars}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </TransitionWrapper>

      {/* Contribution Calendar */}
      {/* <TransitionWrapper>
        <div>
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-xl">📊</span> Contributions
          </h3>
          <div className="border border-border-color rounded-md p-4 bg-background-1 overflow-hidden">
            <img
              src="https://ghchart.rshah.org/238636/lnuvy"
              alt="lnuvy's Github chart"
              className="w-full min-w-[700px]"
            />
          </div>
        </div>
      </TransitionWrapper> */}
    </div>
  )
}

export default About
