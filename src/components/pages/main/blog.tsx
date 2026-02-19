import { clickOutLink } from '@helpers/tracking'

interface Props {}

const Blog = ({}: Props) => {
  const mediumPosts = [
    {
      title: 'SW국제화(i18n)를 위한 i18next 라이브러리와 react-i18next',
      link: 'https://medium.com/runners-im/sw%EA%B5%AD%EC%A0%9C%ED%99%94-i18n-%EB%A5%BC-%EC%9C%84%ED%95%9C-i18next-%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC%EC%99%80-react-i18next-ebb579f1763b',
      id: 'medium_i18n',
    },
    {
      title: '프로덕트 데이터 분석 툴 프로젝트에 이식하기 (Google Analytics, Mixpanel)',
      link: 'https://medium.com/runners-im/%EC%9D%B4-%EA%B0%80%EC%84%B1%EC%9D%B4-%EB%A7%9E%EB%8A%94-%EA%B0%80%EC%84%B1%EC%9D%B4-%EB%A7%9E%EB%8A%94%EA%B0%80-%ED%94%84%EB%A1%9C%EB%8D%95%ED%8A%B8-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EB%B6%84%EC%84%9D-%ED%88%B4-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%EC%97%90-%EC%9D%B4%EC%8B%9D%ED%95%98%EA%B8%B0-google-analytics-mixpanel-b008c557fe5d',
      id: 'medium_ga',
    },
    {
      title: 'Next.js 14v 마이그레이션 도전기 | useSearchParams',
      link: 'https://medium.com/runners-im/next-js-14-%EB%A7%88%EC%9D%B4%EA%B7%B8%EB%A0%88%EC%9D%B4%EC%85%98-%EB%8F%84%EC%A0%84%EA%B8%B0-usesearchparams-react-router-dom-urlsearchparams-770d54a183c0',
      id: 'medium_search_params',
    },
    {
      title: 'Next.js 이미지 최적화와 Lighthouse 성능 개선 확인하기',
      link: 'https://medium.com/runners-im/next-js-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%B5%9C%EC%A0%84%ED%99%94%EC%99%80-lighthouse-%EC%84%B1%EB%8A%A5-%EA%B0%9C%EC%84%A0-%ED%99%95%EC%9D%B8%ED%95%98%EA%B8%B0-ba9f3cd3221b',
      id: 'medium_image',
    },
  ]

  return (
    <div id="Blog" className="w-full py-4 pt-8 text-text-default">
      <br />
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">🖥️ Blog.</h2>
      <br />
      <div className="grid grid-cols-1 gap-6">
        {/* Main Blog Card */}
        <a
          href="https://notion-blog-xi-one.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="block border border-border-color rounded-md p-6 bg-background-1 hover:border-text-muted transition-colors no-underline"
          onClick={() => clickOutLink('notion_blog')}
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-link-color">Tech Blog</h3>
            <span className="text-xs border border-border-color rounded-full px-2 py-0.5 text-text-muted">
              Personal
            </span>
          </div>
          <p className="text-sm text-text-muted mb-4">
            Next.js와 Notion API를 활용하여 직접 구축한 개인 기술 블로그입니다. <br />
            학습한 내용과 개발 회고를 기록합니다.
          </p>
          <div className="flex items-center gap-2 text-sm text-link-color font-medium">
            <span>블로그 바로가기</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </div>
        </a>

        {/* Medium Posts Section */}
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-4">Written on Medium (Runners Team)</h3>
          <div className="space-y-3">
            {mediumPosts.map((post) => (
              <a
                key={post.id}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 border border-border-color rounded-md bg-background-1 hover:bg-background-2 transition-colors no-underline"
                onClick={() => clickOutLink(post.id)}
              >
                <div className="flex items-start gap-3">
                  <span className="text-text-muted mt-1">•</span>
                  <span className="text-link-color hover:underline font-medium">{post.title}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
