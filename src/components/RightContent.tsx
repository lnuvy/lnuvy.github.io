import React from 'react'
import styled from '@emotion/styled'
import TitleCarousel from '@components/Title'

const RightContent = () => {
  return (
    <Wrap>
      <TitleCarousel />
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
  width: 100%;
  padding: 0 2rem;
`

const Title = styled.div`
  background: linear-gradient(to bottom, #0b0719, #2d333b);
  height: 100vh;
  width: 100%;
`

export default RightContent
