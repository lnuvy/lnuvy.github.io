import type { NextPage } from 'next'
import styled from '@emotion/styled'

const About: NextPage = () => {
  return (
    <Wrap id="About">
      <br />

      <h2>👋 About Me.</h2>
      <p>
        짧지않은 시간동안 재즈 기타리스트가 되기위한 여정을 끝내고 2021년 5월,
        자바의 정석을 구매해 처음 'Hello World' 를 띄운 주니어 개발자입니다.
        <br />
        예체능과 개발자는 닮은 점이 많다고 생각합니다. 끊임없이 고민하고 새로운
        것들을 익히기위해 공부 해야하는 점이 저와 잘 맞다고 생각했고, 이 경험은
        배움에 끝이 없고 급변하는 IT 업계에서 현재에 안주하지않고 나아갈 수 있게
        하는 힘이 될 것입니다.
        <br />
        <br />
        2022년 5월, ERP 프로그램 개발 업체인 (주)에이림 에 입사하여 대규모
        데이터를 다뤄보고, 사용자들에게 직접 불편한 점을 듣고 개선하며&nbsp;
        <b>
          '비즈니스를 어떻게 코드로 풀어낼 것인가' 를 꾸준히 고민하고 팀원들과
          소통하는 법을 배우게 되었습니다.
        </b>
        <br />
        새로운 기술에 관심이 많고, 비효율적인 수작업을 자동화 시키는 방법을
        찾아서 팀원들과 공유하고 알려주는 것을 좋아합니다. 그 예로 에이림에
        사원으로 있으면서 무거운 Redux 대신 서버 State 를 관리하는데 용이한
        react-query 를 제안 및 적용했고, 에이림 Slack 채널에서 push 때마다 직접
        메세지를 남기는 것이 비효율적이라고 판단해 깃허브 액션과 slack 수신용 웹
        후크를 사용하여 적용하고 팀원들에게 공유했습니다.
      </p>
    </Wrap>
  )
}

const Wrap = styled.div`
  //min-height: 100vh;
  line-height: 1.8;

  & > p {
    margin: 0 auto;
    border: 1px solid #444c56;
    border-radius: 8px;
    padding: 2rem;
    width: 90%;
    font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas,
      Liberation Mono, monospace;
  }
`

export default About
