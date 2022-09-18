import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { settings } from '@constant/CarouselSetting'
import { Wrap, StyledSlider, Item, TextBox } from './TitleStyles'

const TitleCarousel = () => {
  return (
    <Wrap>
      <StyledSlider {...settings}>
        {[...Array(1)].map((_, i) => {
          if (i === 0) return <Page key={i} />
          else return <Item>하하</Item>
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
        return <h1>{t}</h1>
      })}

      <p>JavaScript / TypeScript / React / MySQL / MongoDB </p>
      <p></p>
    </TextBox>
  )
}

export default TitleCarousel
