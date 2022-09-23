import React from 'react'
import styled from '@emotion/styled'

const Education = () => {
  return (
    <Wrap id="Education">
      <br />
      <h2>📖 Education.</h2>
      <br />
      <Title>2022.08 ~ 한국방송통신대학교</Title>
      <Para>통계·데이터과학과 재학중</Para>
      <Title>2022.03 ~ 2022.05 스파르타 코딩클럽 부트캠프</Title>
      <Para>항해99 6기 교육과정 참여</Para>
      <Title>2021.06 ~ 2021.12 대구 영진직업전문학교</Title>
      <Para>
        빅데이터분석과 UI구현을 위한 자바(JAVA), 파이썬(Python)개발자 과정 수료
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
