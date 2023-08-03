import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Slider from 'react-slick';

export const Wrap = styled.div`
  width: 100%;
  min-height: 100vh;
`;

export const StyledSlider = styled(Slider)`
  height: 80vh;

  .slick-slide div {
    outline: none; // 슬라이드 클릭시 파란선을 제거하기 위해서 작성
    //width: 100%;
  }
`;

const CommonBackground = css`
  background-size: cover;
  background-position: right 50% bottom 45%;
`;

export const SecondSlider = styled.div`
  width: 100%;
  height: 80vh;
  display: flex !important;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${CommonBackground}
  background-position: right;
  background-image: url('/images/main2.jpg');

  color: ${({ theme }) => theme.palette.text4};
  font-size: 0.9rem;

  & > h3 {
    font-size: 1.2rem;
    margin-bottom: 2rem;

    @media ${({ theme }) => theme.device.mobile} {
      font-size: 1rem;
    }
  }

  & > p {
    margin: 0.2rem;
    padding: 0 3rem;
    @media ${({ theme }) => theme.device.mobile} {
      padding: 0 1rem;
      font-size: 0.8rem;
    }
  }
`;

export const FirstSlider = styled.div`
  /* background: linear-gradient(to left, #2d333b, #0b0719); */
  background-image: url('/images/main.jpg');
  ${CommonBackground}
  background-color: rgba(0, 0, 0, 0.7);

  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* justify-content: center; */
  /* align-items: center; */
`;

export const TitleWrapper = styled.div`
  position: absolute;
  bottom: 0;
`;

export const H1 = styled.h1`
  width: 100%;
  text-align: center;
  margin-top: 0;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.palette.text2};

  /* font-family: 'Cinzel', serif; */

  animation: moveUp 1.5s;
  @keyframes moveUp {
    from {
      opacity: 0;
      transform: translate3d(-20%, 0, 0);
    }
    to {
      opacity: 1;
      transform: translateZ(0);
    }
  }
`;

export const TextWrapper = styled.div`
  padding: 1rem;
  & > p {
    margin: 0 auto 5rem;
    color: grey;
    font-size: 0.9rem;
    animation: moveDown 3s;

    @media ${({ theme }) => theme.device.mobile} {
      font-size: 0.7rem;
    }

    @keyframes moveDown {
      0% {
        opacity: 0;
      }
      50% {
        opacity: 0;
        transform: translate3d(0, 100%, 0);
      }
      100% {
        opacity: 1;
        transform: translateZ(0);
      }
    }
  }
`;
