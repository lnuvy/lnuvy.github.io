import React from 'react'
import styled from '@emotion/styled'

const Education = () => {
  return (
    <Wrap id="Education">
      <br />
      <h2>๐ Education.</h2>
      <br />
      <Title>2022.08 ~ ํ๊ตญ๋ฐฉ์กํต์ ๋ํ๊ต</Title>
      <Para>ํต๊ณยท๋ฐ์ดํฐ๊ณผํ๊ณผ ์ฌํ์ค</Para>
      <Title>2022.03 ~ 2022.05 ์คํ๋ฅดํ ์ฝ๋ฉํด๋ฝ ๋ถํธ์บ ํ</Title>
      <Para>ํญํด99 6๊ธฐ ๊ต์ก๊ณผ์  ์ฐธ์ฌ</Para>
      <Title>2021.06 ~ 2021.12 ๋๊ตฌ ์์ง์ง์์ ๋ฌธํ๊ต</Title>
      <Para>
        ๋น๋ฐ์ดํฐ๋ถ์๊ณผ UI๊ตฌํ์ ์ํ ์๋ฐ(JAVA), ํ์ด์ฌ(Python)๊ฐ๋ฐ์ ๊ณผ์  ์๋ฃ
      </Para>
      <br />
    </Wrap>
  )
}

const Wrap = styled.div``

const Title = styled.h4`
  margin-bottom: 0.3rem;
  font-weight: 500;
`

const Para = styled.li`
  margin-top: 0.2rem;
  margin-left: 0.5rem;
  font-weight: 300;

  &::marker {
    color: ;
  }
`

export default Education
