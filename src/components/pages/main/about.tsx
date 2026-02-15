import TransitionWrapper from '@components/common/transition-wrapper'

// Mock data for pinned repos
const pinnedRepos = [
  {
    name: 'lnuvy.github.io',
    description: 'Personal portfolio website built with Next.js and Tailwind CSS 4.',
    language: 'TypeScript',
    color: '#3178c6',
    stars: '15+',
    url: 'https://github.com/lnuvy/lnuvy.github.io',
  },
  {
    name: 'doctor-palette',
    description: 'Healthcare SaaS platform frontend development (Private).',
    language: 'React',
    color: '#61dafb',
    stars: 'Private',
    url: '#',
  },
  {
    name: 'algorithm',
    description: 'Algorithm problem solving archive (LeetCode, Baekjoon).',
    language: 'JavaScript',
    color: '#f1e05a',
    stars: 8,
    url: 'https://github.com/lnuvy/algorithm',
  },
  {
    name: 'nestjs-practice',
    description: 'Backend learning journey with NestJS and TypeORM.',
    language: 'TypeScript',
    color: '#3178c6',
    stars: 5,
    url: '#',
  },
]

const About = () => {
  return (
    <div
      id="About"
      className="relative z-20 w-full max-w-4xl mx-auto px-4 py-20 text-text-default font-sans bg-background-default border-t border-border-color shadow-[0_-10px_20px_-5px_rgba(0,0,0,0.1)] rounded-t-3xl mt-[-100px]"
    >
      {/* Intro Section */}
      <TransitionWrapper>
        <div className="w-full flex flex-col md:flex-row gap-8 items-start mb-12">
          <div className="flex-1 space-y-4">
            <span className="text-sm font-mono text-text-muted">lnuvy / README.md</span>
            <h1 className="text-4xl font-bold border-b pb-4 border-border-color">
              Hi there, I&apos;m Hanul Lee <span className="animate-pulse inline-block">👋</span>
            </h1>
            <div className="text-lg leading-relaxed text-text-2 space-y-4"></div>
          </div>
        </div>
      </TransitionWrapper>

      {/* Tech Stack - Badges */}
      <TransitionWrapper>
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-xl">🛠</span> Tech Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            <img
              src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white"
              alt="Next.js"
            />
            <img
              src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
              alt="React"
            />
            <img
              src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"
              alt="TypeScript"
            />
            <img
              src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"
              alt="Tailwind"
            />
            <img src="https://img.shields.io/badge/Jotai-000000?style=for-the-badge&logoColor=white" alt="Jotai" />
            <img
              src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"
              alt="Node.js"
            />
            <img
              src="https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white"
              alt="NestJS"
            />
          </div>
        </div>
      </TransitionWrapper>

      {/* Pinned Repositories */}
      <TransitionWrapper>
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="text-xl">📌</span> Pinned Projects
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
      <TransitionWrapper>
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
      </TransitionWrapper>
    </div>
  )
}

export default About
