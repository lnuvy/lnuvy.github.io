import type { NextPage } from 'next'
import styled from '@emotion/styled'

const About: NextPage = () => {
  return (
    <Wrap id="About">
      <br />
      <h2>👋 About Me.</h2>
      <p>
        2022년 5월, ERP 프로그램 개발 업체인 (주)에이림 에 입사하여 대규모
        데이터를 다뤄보고, 사용자들에게 직접 불편한 점을 듣고 개선하며
        개발자로서의 커리어를 시작했습니다.
        <br />
        회사 상황이 좋지않아 권고사직을 받았지만, 개발자란&nbsp;
        <b>
          {
            '단순히 코딩을 하는 사람이 아니라, 기업의 비즈니스 모델에 맞춰 생각하고, 코드로 풀어내는 사람'
          }
        </b>
        &nbsp;이라는 좋은 경험을 얻을 수 있었습니다.
        <br />
        <br />
        한편으로는 CTO, 시니어 개발자가 없는 에이림에서 기술적으로 배울 수 있는
        부분이 많지 않다는 점에서 아쉬웠지만, 그 덕분에 꾸준히 성장하는 방법을
        찾기위해 개인공부를 게을리 하지 않았습니다.
        <br />
        <br />
        새로운 기술에 관심이 많고, 비효율적인 수작업을 자동화 시키는 방법을
        찾아서 팀원들과 공유하고 알려주는 것을 좋아합니다. 그 예로 에이림에
        사원으로 있으면서 무거운 Redux 대신 서버 State 를 관리하는데 용이한
        react-query 를 제안했고, 회사용 Slack 채널에서 push 때마다 직접 메세지를
        남기는 것이 비효율적이라고 판단해 깃허브 액션과 slack 수신용 웹 후크를
        사용하여 적용하고 팀원들에게 공유했습니다.
      </p>
    </Wrap>
  )
}

const Wrap = styled.div`
  line-height: 1.8;
  & > p {
    margin: 0 auto;
    border: 1px solid #444c56;
    border-radius: 8px;
    padding: 2rem;
    width: 90%;
    font-family: ui-monospace, SFMono-Regular, SFMono, Menlo, Consolas,
      LiberationMono, monospace;

    @media ${({ theme }) => theme.device.mobile} {
      font-size: 0.8rem;
      padding: 1rem;
      width: 95%;
    }
  }
`

export default About
