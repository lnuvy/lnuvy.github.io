import React from 'react'
import { Wrap, ImageProfile, Image, Span, Footer } from './LeftBarStyles'

const LeftBar = () => {
  return (
    <Wrap>
      <ImageProfile>
        <Image src="images/profile.JPG" alt="my_img" />
      </ImageProfile>

      <h4>이한울</h4>

      <div className="flex-c-center" style={{ gap: '0.5rem' }}>
        <span>Top</span>
        <span>About</span>
        <span>Stacks</span>
        <span>Experience</span>
        <span>Education</span>
      </div>

      <Footer>
        <Span>© 2022. lnuvy All rights reserved.</Span>
      </Footer>
    </Wrap>
  )
}

export default LeftBar
