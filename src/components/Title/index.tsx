import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { settings } from '@constant/CarouselSetting'
import { Wrap, StyledSlider, Item, TextBox, H1 } from './TitleStyles'

const TitleCarousel = () => {
  return (
    <Wrap id="Top">
      <StyledSlider {...settings}>
        {[...Array(4)].map((_, i) => {
          if (i === 0) return <Page key={i} />
          else return <Item key={i}>하하</Item>
        })}
      </StyledSlider>
    </Wrap>
  )
}

const array = ['React/Node', 'Frontend', 'Developer']

const Page = () => {
  return (
    <TextBox>
      {array.map((t, i) => {
        return (
          <H1 key={`${i}_${i}`} pos={i}>
            {t}
          </H1>
        )
      })}

      <p>JavaScript / TypeScript / React / MySQL / MongoDB </p>
    </TextBox>
  )
}

export default TitleCarousel
