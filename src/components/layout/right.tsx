import About from '@components/pages/main/about';
import Blog from '@components/pages/main/blog';
import Education from '@components/pages/main/education';
import Experience from '@components/pages/main/experience';
import Stacks from '@components/pages/main/stacks';
import TitleCarousel from '@components/title-carousel';
import styled from '@emotion/styled';

//
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
      <br />
      <Blog />
      <br />
      <Education />
      <br />
      <p style={{ marginBottom: '5rem' }}>부족한 점이 많지만 최선을 다하겠습니다. 감사합니다!</p>
    </Wrap>
  );
};

const Wrap = styled.div`
  max-width: calc(90vw - 30vw);
  margin-left: 30vw;
  @media ${({ theme }) => theme.device.mobile} {
    max-width: 90vw;
    margin-left: 0;
  }
  background-color: ${({ theme }) => theme.palette.backgroundColor};
  /* transition: background-color 0.2s ease-in-out; */
`;

// const Title = styled.div`
//   background: linear-gradient(to bottom, #0b0719, #2d333b);
//   height: 100vh;
//   width: 100%;
// `

export default RightContent;
