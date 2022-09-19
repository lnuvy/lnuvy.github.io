import React from 'react'
import styled from '@emotion/styled'
import TitleCarousel from '@components/Title'
import About from '../../pages/About'
import Stacks from '../../pages/Stacks'

const RightContent = () => {
  return (
    <Wrap>
      <TitleCarousel />

      <br />
      <About />
      <br />
      <Stacks />
      <br />

      <h3>테스트</h3>
      <h3>테스트</h3>
      <h3>테스트</h3>
      <h3>테스트</h3>
      <h3>테스트</h3>
      <h3>테스트</h3>
      <h3>테스트</h3>
      <h3>테스트</h3>
      <h3>테스트</h3>
      <h3>테스트</h3>
      <h3>테스트</h3>
      <h3>테스트</h3>
      <h3>테스트</h3>
      <h3>테스트</h3>
      <h3>테스트</h3>
      <h3>테스트</h3>
      <h3>테스트</h3>
      <h3>테스트</h3>
      <h3>테스트</h3>
      <h3>테스트</h3>
      <h3>테스트</h3>
      <h3>테스트</h3>
      <h3>테스트</h3>
      <h3>테스트</h3>
      <h3>테스트</h3>
      <h3>테스트</h3>
      <h3>테스트</h3>
    </Wrap>
  )
}

const Wrap = styled.div`
  max-width: calc(90vw - 30vw);
  @media ${({ theme }) => theme.device.mobile} {
    max-width: 90vw;
  }
  background-color: ${({ theme }) => theme.palette.backgroundColor};

  //@media;
`
//
// const Title = styled.div`
//   background: linear-gradient(to bottom, #0b0719, #2d333b);
//   height: 100vh;
//   width: 100%;
// `

export default RightContent
