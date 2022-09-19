import React, { useEffect, useState } from 'react'
import {
  Wrap,
  ImageProfile,
  Image,
  Span,
  Footer,
  BurgerIcon,
} from './LeftBarStyles'
import Chapter from '@components/LeftBar/Chapter'
import ToggleBox from '@elements/ToggleBox'
import { theme } from '../../../styles/theme'

const LeftBar = ({ changeMode }: any) => {
  const [checked, setChecked] = useState<any>(false)

  useEffect(() => {
    const localTheme = localStorage.getItem('theme')
    setChecked(localTheme === 'dark')
  }, [])

  return (
    <>
      <br />
      <input type="checkbox" id="sidebar" style={{ display: 'none' }} />
      <BurgerIcon htmlFor="sidebar" onClick={(e) => e.stopPropagation()}>
        <span />
        <span />
        <span />
      </BurgerIcon>
      <br />
      <Wrap>
        <br />
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
    </>
  )
}

export default LeftBar
