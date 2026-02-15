import clsx from 'clsx'
import TransitionWrapper from '@components/common/transition-wrapper'
import About from '@components/pages/main/about'
import Blog from '@components/pages/main/blog'
import Experience from '@components/pages/main/experience'
import Stacks from '@components/pages/main/stacks'
import TitleCarousel from '@components/title-carousel'
import useScrollSpy from '@hooks/use-scroll-spy'

const RightContent = () => {
  useScrollSpy(['Top', 'About', 'Stacks', 'Experience', 'Blog'])

  return (
    <div
      className={clsx(
        'w-full bg-background-default transition-all duration-200 ease-in-out',
        // Mobile (default)
        'ml-0 max-w-full',
        // Tablet (md: >= 768px, LeftBar width: 256px)
        'md:ml-[272px] md:max-w-[calc(100%-272px)]',
        // Desktop (lg: >= 1024px, LeftBar width: 296px)
        'lg:ml-[320px] lg:max-w-[calc(100%-320px)]',
      )}
    >
      {/* TitleCarousel Area with scroll space */}
      <div style={{ height: '150vh', minHeight: '1000px' }}>
        <TitleCarousel />
      </div>

      {/* About Section - Starts after scrolling past TitleCarousel */}
      <TransitionWrapper>
        <About />
      </TransitionWrapper>

      <br />
      <TransitionWrapper mxAuto>
        <Stacks />
      </TransitionWrapper>
      <br />
      <TransitionWrapper mxAuto>
        <Experience />
      </TransitionWrapper>
      <br />
      <TransitionWrapper mxAuto>
        <Blog />
      </TransitionWrapper>
      <br />
    </div>
  )
}

export default RightContent

// const Title = styled.div`
//   background: linear-gradient(to bottom, #0b0719, #2d333b);
//   height: 100vh;
//   width: 100%;
// `
