import React from 'react'
import { Wrap, ImageProfile, Image, Span, Footer } from './LeftBarStyles'
import Chapter from '@components/LeftBar/Chapter'
import { useDarkMode } from '@hooks/useDarkMode'

const LeftBar = () => {
  const { theme, toggleColorTheme } = useDarkMode()

  return (
    <Wrap>
      <ImageProfile>
        <Image src="images/profile.JPG" alt="my_img" />
      </ImageProfile>

      <h4>이한울</h4>

      <Chapter />

      <button onClick={toggleColorTheme}>토글</button>
      <Footer>
        <Span>© 2022. lnuvy All rights reserved.</Span>
      </Footer>
    </Wrap>
  )
}

export default LeftBar
