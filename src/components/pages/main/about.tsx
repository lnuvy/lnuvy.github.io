import styled from '@emotion/styled'

const About = () => {
  return (
    <Wrap id="About">
      <br />
      <h2>👋 About Me.</h2>
      <p>
        2022년 5월, ERP 프로그램 개발 업체인 (주)에이림 에 입사하여 개발자로서의 첫 커리어를 시작했습니다.
        <br />
        에이림에서의 짧은 경험을 통해 개발자는 &nbsp;
        <b>{'단순히 코딩을 하는 사람이 아니라, 기업의 비즈니스 모델에 맞춰 생각하고, 코드로 풀어내는 사람'}</b>
        &nbsp;이라는 좋은 경험을 얻을 수 있었습니다.
        <br />
        <br />
        그 후, C2C 서비스인 중고 가구 거래 플랫폼 ffeed를 개발하는 (주)알파벳에이에 입사하여 DM과 유저 인터뷰 등을 통해
        유저피드백을 실시간으로 받으며 성장하고, 유저의 니즈를 파악하기 위해 개발자와 팀원들이 어떻게 접근해야하는지,
        개발 우선순위를 능동적으로 바꿔가며 개선하는 유연한 사고를 기를 수 있었습니다.
        <br />
        <br />
        현재 재직중인 러너스에서는 비록 실력은 부족하지만 커뮤니케이션 능력을 나름대로 인정받아 프론트엔드 팀장으로
        일하고 있으며, 정신없이 바쁜 와중에도 팀원들과 소통하며 여러 프로젝트를 관리하고 있습니다.
        <br />
        함께 일하고 싶은 팀원이 되기 위해 노력하며 긍정적으로 맡은 업무에 최선을 다합니다.
      </p>
    </Wrap>
  )
}

export default About

const Wrap = styled.div`
  line-height: 1.8;
  & > p {
    margin: 0 auto;
    border: 1px solid #444c56;
    border-radius: 8px;
    padding: 2rem;
    width: 90%;
    font-family: ui-monospace, SFMono-Regular, SFMono, Menlo, Consolas, LiberationMono, monospace;

    @media ${({ theme }) => theme.device.mobile} {
      font-size: 0.8rem;
      padding: 1rem;
      width: 95%;
    }
  }
`
