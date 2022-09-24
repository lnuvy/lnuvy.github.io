import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { settings } from '@constant/CarouselSetting'
import { Wrap, StyledSlider, Item, TextBox, H1 } from './TitleStyles'

const TitleCarousel = () => {
  return (
    <Wrap id="Top">
      <StyledSlider {...settings}>
        {[...Array(2)].map((_, i) => {
          if (i === 0) return <Page key={i} />
          else
            return (
              <Item key={i}>
                <h3>50점짜리 개발자, 더욱 성장할 기회를 잡기위해</h3>

                <p>{'프로그램은 돌아가면 된다. 제가 많이 들었던 말입니다.'}</p>
                <p>이젠 기술적인 성장을 향해 나아가고 싶습니다.</p>
              </Item>
            )
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
