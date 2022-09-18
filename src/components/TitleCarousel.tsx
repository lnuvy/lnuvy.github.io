import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { settings } from '@constant/CarouselSetting'
import styled from '@emotion/styled'

const TitleCarousel = () => {
  return (
    <Wrap>
      <StyledSlider {...settings}>
        {[...Array(2)].map((_, i) => {
          if (i % 2 === 0) return <Item>하하</Item>
          else
            return (
              <Item key={i}>
                <img src="images/profile.jpg" />
              </Item>
            )
        })}
      </StyledSlider>
    </Wrap>
  )
}

const Wrap = styled.div`
  width: 65vw;
  min-height: 100vh;
  background: linear-gradient(to bottom, #0b0719, #2d333b);
`

const StyledSlider = styled(Slider)`
  height: 100vh;
  width: inherit;
  //background: linear-gradient(to bottom, #0b0719, #2d333b);
  /* .slick-track {
    margin: 0;
    padding: 0;
  } */
  .slick-slide div {
    outline: none; // 슬라이드 클릭시 파란선을 제거하기 위해서 작성
    width: 100%;
  }
`

const Item = styled.div`
  width: 100%;
  height: 100vh;
`

export default TitleCarousel
