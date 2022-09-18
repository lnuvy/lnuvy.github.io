import React from 'react'
import { Wrap, ImageProfile, Image, Span, Footer } from './Styles'

const Index = () => {
  return (
    <Wrap>
      <ImageProfile>
        <Image src="images/profile.JPG" alt="my_img" />
      </ImageProfile>

      <h4>이한울</h4>

      <Footer>
        <Span>© 2022. lnuvy All rights reserved.</Span>
      </Footer>
    </Wrap>
  )
}

export default Index
