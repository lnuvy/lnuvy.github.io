import React, { useContext } from 'react'
import { Wrap, ImageProfile, Image, Span, Footer } from './LeftBarStyles'
import Chapter from '@components/LeftBar/Chapter'
import { ThemeContext } from '@emotion/react'

const LeftBar = () => {
  const { colorTheme, toggleColorTheme } = useContext(ThemeContext)

  return (
    <Wrap>
      <ImageProfile>
        <Image src="images/profile.JPG" alt="my_img" />
      </ImageProfile>

      <h4>이한울</h4>

      <Chapter />

      <button onClick={toggleTheme}>토글</button>
      <Footer>
        <Span>© 2022. lnuvy All rights reserved.</Span>
      </Footer>
    </Wrap>
  )
}

export default LeftBar
