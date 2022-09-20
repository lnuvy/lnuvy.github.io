import React from 'react'
import styled from '@emotion/styled'
import TitleCarousel from '@components/Title'
import About from '../../pages/About'
import Stacks from '../../pages/Stacks'
import Experience from '../../pages/Experience'

const RightContent = () => {
  return (
    <Wrap>
      <TitleCarousel />

      <br />
      <About />
      <br />
      <Stacks />
      <br />
      <Experience />
      <h3>테스트</h3>
    </Wrap>
  )
}

const Wrap = styled.div`
  max-width: calc(90vw - 30vw);
  margin-left: 30vw;
  @media ${({ theme }) => theme.device.mobile} {
    max-width: 90vw;
    margin-left: 0;
  }
  background-color: ${({ theme }) => theme.palette.backgroundColor};
`
//
// const Title = styled.div`
//   background: linear-gradient(to bottom, #0b0719, #2d333b);
//   height: 100vh;
//   width: 100%;
// `

export default RightContent
