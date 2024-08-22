import styled from '@emotion/styled'
import TransitionWrapper from '@components/common/transition-wrapper'
import Blog from '@components/pages/main/blog'
import Experience from '@components/pages/main/experience'
import Stacks from '@components/pages/main/stacks'
import TitleCarousel from '@components/title-carousel'

const RightContent = () => {
  return (
    <Wrap>
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
    </Wrap>
  )
}

const Wrap = styled.div`
  width: 100%;
  max-width: calc(100% - 296px);
  margin-left: calc(296px + 24px);

  @media ${({ theme }) => theme.device.tablet} {
    margin-left: calc(256px + 16px);
  }

  @media ${({ theme }) => theme.device.mobile} {
    max-width: 100vw;
    margin-left: 0;
  }
  background-color: ${({ theme }) => theme.palette.backgroundColor};
  /* transition: background-color 0.2s ease-in-out; */
`

// const Title = styled.div`
//   background: linear-gradient(to bottom, #0b0719, #2d333b);
//   height: 100vh;
//   width: 100%;
// `

export default RightContent
