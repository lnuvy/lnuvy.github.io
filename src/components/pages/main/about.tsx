import TransitionWrapper from '@components/common/transition-wrapper'

const About = () => {
  return (
    <div id="About" className="leading-[1.8] max-md:pt-16">
      <br />
      <h2>👋 About Me.</h2>

      <TransitionWrapper>
        <p className="mx-auto border border-[#444c56] rounded-lg p-8 w-[90%] font-mono max-md:text-[0.8rem] max-md:p-4 max-md:w-[95%]">
          2022년 5월, ERP 프로그램 개발 업체인 (주)에이림 에 입사하여 개발자로서의 첫 커리어를 시작했습니다.
          <br />
          에이림에서의 짧은 경험을 통해 개발자는 &nbsp;
          <b>{'단순히 코딩을 하는 사람이 아니라, 기업의 비즈니스 모델에 맞춰 생각하고, 코드로 풀어내는 사람'}</b>
          &nbsp;이라는 좋은 경험을 얻을 수 있었습니다.
          <br />
          <br />그 후, C2C 서비스인 중고 가구 거래 플랫폼 ffeed를 개발하는 (주)알파벳에이에 입사하여 DM과 유저 인터뷰
          등을 통해 <b>유저피드백을 실시간으로 받으며 성장하고</b>, 유저의 니즈를 파악하기 위해 개발자와 팀원들이 어떻게
          접근해야하는지, 개발 우선순위를 능동적으로 바꿔가며 개선하는 유연한 사고를 기를 수 있었습니다.
          <br />
          <br />
          현재 재직중인 위버케어에서는 헬스케어 SaaS 서비스인 닥터팔레트의 프론트엔드 개발을 담당하고 있습니다.
          <br />
          React 19, Module Federation 기반의 대규모 모노레포 환경에서 50개 이상의 패키지를 관리하며, Jotai와 Tailwind
          CSS 4를 도입해 디자인 시스템을 고도화하는 등 기술적인 도전과 성장을 지속하고 있습니다.
          <br />
          함께 일하고 싶은 팀원이 되기 위해 노력하며 긍정적으로 맡은 업무에 최선을 다합니다.
        </p>
      </TransitionWrapper>
    </div>
  )
}

export default About
