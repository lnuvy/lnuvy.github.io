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
        'w-full bg-background-default transition-colors duration-200 ease-in-out',
        'max-w-[calc(100%-296px)] ml-[calc(296px+24px)]',
        'md:ml-[calc(256px+16px)]',
        'max-md:max-w-[100vw] max-md:ml-0',
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
