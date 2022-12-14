import styled from '@emotion/styled'
import Slider from 'react-slick'

export const Wrap = styled.div`
  width: 100%;
  min-height: 100vh;
`

export const StyledSlider = styled(Slider)`
  height: 100vh;
  //width: 100%;

  //.slick-slider {
  //  max-width: calc(100vw - 30vw);
  //}

  .slick-slide div {
    outline: none; // 슬라이드 클릭시 파란선을 제거하기 위해서 작성
    //width: 100%;
  }
`

export const Item = styled.div`
  width: 100%;
  height: 100vh;
  display: flex !important;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //padding: 0 0 5rem;
  background: linear-gradient(to left, #0b0719, #2d333b);
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
`

export const TextBox = styled.div`
  background: linear-gradient(to left, #2d333b, #0b0719);

  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > p {
    margin: 0;
    color: ${({ theme }) => theme.palette.text4};
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
`

interface H1Props {
  pos: number
}

export const H1 = styled.h1<H1Props>`
  width: 100%;
  text-align: start;
  margin-top: 0;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.palette.text4};
  padding-left: ${({ pos }) => `calc(5rem * ${pos + 1});`};
  @media ${({ theme }) => theme.device.mobile} {
    padding-left: ${({ pos }) => `calc(3rem * ${pos + 1});`};
  }
  font-family: 'Cinzel', serif;

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
`
