import styled from '@emotion/styled';

const About = () => {
  return (
    <Wrap id="About">
      <br />
      <h2>👋 About Me.</h2>
      <p>
        2022년 5월, ERP 프로그램 개발 업체인 (주)에이림 에 입사하여 대규모 데이터를 다뤄보고, 사용자들에게 직접 불편한
        점을 듣고 개선하며 개발자로서의 커리어를 시작했습니다.
        <br />
        회사 상황이 좋지않아 권고사직을 받았지만, 개발자란&nbsp;
        <b>{'단순히 코딩을 하는 사람이 아니라, 기업의 비즈니스 모델에 맞춰 생각하고, 코드로 풀어내는 사람'}</b>
        &nbsp;이라는 좋은 경험을 얻을 수 있었습니다.
        <br />
        <br />
        그 후, C2C 서비스인 중고 가구 거래 플랫폼 ffeed를 개발하는 (주)알파벳에이에 입사하여 다양한 문제를 겪어보고, 그
        문제를 해결하기 위해 개발자가 어떻게 접근해야하는지, 개발 우선순위를 능동적으로 바꿔가며 개선하는 유연한 사고를
        기를 수 있었습니다.
        <br />
        <br />
        새로운 팀원을 뽑는다는것은 큰 리스크라는 것을 알기에, {'함께 일하고 싶은 팀원'}이 되기위해 끊임없이
        노력하겠습니다.
      </p>
    </Wrap>
  );
};

export default About;

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
`;
