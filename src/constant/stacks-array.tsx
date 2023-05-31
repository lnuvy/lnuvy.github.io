import Aws from 'public/svg/Aws';
import Next from 'public/svg/Next';

export const stacksArray = [
  {
    id: 0,
    name: 'JavaScript',
    isPublic: 1,
    desc: '프론트엔드 개발자에게 가장 중요한 언어라고 생각합니다. 자료구조 및 알고리즘을 자바스크립트로 공부하고 있습니다.',
    svg: '/images/JavaScript_logo_2.png',
    svgName: 'JavaScript',
    updated: 'Updated 29 seconds ago',
    starred: 1,
  },
  {
    id: 1,
    name: 'TypeScript',
    isPublic: 1,
    desc: '자바스크립트 개발자의 기본 소양은 React도, Next.js 도 아닌 TS라고 생각합니다. 협업의 기본이자, 프로덕트의 안정성을 끌어올리는 좋은 도구입니다.',
    svg: '/images/Typescript_logo_2020.png',
    svgName: 'TypeScript',
    updated: 'Updated now',
    starred: 1,
    link: 'https://www.typescriptlang.org/',
  },
  {
    id: 2,
    name: 'React',
    isPublic: 1,
    desc: '함수형 컴포넌트와 훅, 의존성 주입 등 기본적인 개념을 알고있으며 클린코드와 커스텀 훅에 관심이 많습니다.',
    svg: '/images/React-icon.png',
    svgName: 'React',
    updated: 'Updated 1 minute ago',
    starred: 0,
    link: 'https://legacy.reactjs.org/',
  },
  {
    id: 3,
    name: 'Next.js',
    isPublic: 1,
    desc: '지금의 github.io 페이지는 Next.js 와 emotion 을 사용하여 개발했습니다. 최근 격변한 Next.js 13버전을 사용해보고 있습니다.',
    svg: <Next />,
    svgName: 'Next.js by Vercel',
    updated: 'Updated 12 minutes ago',
    starred: 1,
    link: 'https://nextjs.org/',
  },
  {
    id: 4,
    name: 'Solid.js',
    isPublic: 1,
    desc: '반응형 프레임워크를 익히기 좋은 강력한 프레임워크라고 생각합니다. 사용해보니 리액트와 작동방식이 꽤 달라 애먹었던 적도 많았지만, 회사 팀원들/사이드 프로젝트 멤버들과 프로젝트를 만들어 나가며 즐겁게 공부중입니다.',
    svg: '/images/solid.ico',
    svgName: 'Solid.js',
    updated: 'Updated 2 hours ago',
    starred: 1,
    link: 'https://www.solidjs.com/',
  },
  {
    id: 5,
    name: 'AWS',
    isPublic: 1,
    desc: 'Spring Boot JPA로 만든 REST-API와 파이썬 flask 서버를 EC2로 배포한 경험이 있고, SPA 배포가 간편한 S3를 사용해보았습니다.',
    svg: <Aws />,
    svgName: 'Amazon Web Service',
    updated: 'Updated 13 days ago',
    starred: 0,
  },
  {
    id: 6,
    name: 'Java',
    isPublic: 0,
    desc: '처음 공부한 언어로, 국비교육 당시 가장 중점적으로 다루었습니다. 이 기본기는 타입스크립트를 공부할 때 많은 도움이 되고있어, 한번 배운것은 항상 내 자산이 된다는 것을 느끼게 해주었습니다.',
    svg: '/images/java-4-logo-svgrepo-com.svg',
    svgName: 'Java/Spring',
    updated: 'Updated on 11 Jan',
    starred: 0,
  },
];