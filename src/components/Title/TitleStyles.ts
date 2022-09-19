import styled from '@emotion/styled'
import Slider from 'react-slick'

export const Wrap = styled.div`
  max-width: 65vw;
  min-height: 100vh;
  background: linear-gradient(to bottom, #0b0719, #2d333b);
`

export const StyledSlider = styled(Slider)`
  height: 100vh;
  //background: linear-gradient(to bottom, #0b0719, #2d333b);
  /* .slick-track {
    margin: 0;
    padding: 0;
  } */
  .slick-slide div {
    outline: none; // 슬라이드 클릭시 파란선을 제거하기 위해서 작성
    //width: 100%;
  }
`

export const Item = styled.div`
  width: 100%;
  height: 100vh;
`

export const TextBox = styled.div`
  width: 50%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > p {
    margin: 0;
  }
`

interface H1Props {
  pos: number
}

export const H1 = styled.h1<H1Props>`
  width: 100%;
  padding: 0 0.5rem;
  text-align: start;
  margin-top: 0;
  margin-bottom: 1rem;
  margin-left: ${({ pos }) => `calc(8rem * ${pos + 1});`};

  font-family: 'Cinzel', serif;
`
