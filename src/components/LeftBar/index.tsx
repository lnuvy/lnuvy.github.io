import React, { useEffect, useState } from 'react'
import { Wrap, ImageProfile, Image, Span, Footer } from './LeftBarStyles'
import Chapter from '@components/LeftBar/Chapter'
import ToggleBox from '../../elements/ToggleBox'

const LeftBar = ({ changeMode }: any) => {
  const [checked, setChecked] = useState<any>(false)

  useEffect(() => {
    const localTheme = localStorage.getItem('theme')
    setChecked(localTheme === 'dark')
  }, [])

  return (
    <Wrap>
      <ImageProfile>
        <Image src="images/profile.JPG" alt="my_img" />
      </ImageProfile>

      <h4>이한울</h4>

      <Chapter />

      <div className="flex-start">
        <ToggleBox checked={checked} changeMode={changeMode} />
      </div>
      <Footer>
        <Span>© 2022. lnuvy All rights reserved.</Span>
      </Footer>
    </Wrap>
  )
}

export default LeftBar
