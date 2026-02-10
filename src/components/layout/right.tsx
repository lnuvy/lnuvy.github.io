import clsx from 'clsx'
import TransitionWrapper from '@components/common/transition-wrapper'
import Blog from '@components/pages/main/blog'
import Experience from '@components/pages/main/experience'
import Stacks from '@components/pages/main/stacks'
import TitleCarousel from '@components/title-carousel'

const RightContent = () => {
  return (
    <div
      className={clsx(
        'w-full bg-background-default transition-colors duration-200 ease-in-out',
        'max-w-[calc(100%-296px)] ml-[calc(296px+24px)]',
        'md:ml-[calc(256px+16px)]',
        'max-md:max-w-[100vw] max-md:ml-0',
      )}
    >
      <div style={{ height: '240vh', minHeight: '1200px' }}>
        <TitleCarousel />
        <br />
        {/* <TransitionWrapper>
          <About />
        </TransitionWrapper> */}
      </div>
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
