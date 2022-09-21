import React, { useEffect, useState } from 'react'
import {
  Wrap,
  ImageProfile,
  Image,
  NameInfo,
  Span,
  Footer,
  SidebarBtn,
  BurgerIcon,
  ModeChangeWrap,
} from './LeftBarStyles'
import Chapter from '@components/LeftBar/Chapter'
import ToggleBox from '@elements/ToggleBox'
import { useCheck } from '@hooks/useInput'

const LeftBar = ({ changeMode }: any) => {
  const [sidebarToggle, onChangeToggle, setSidebarToggle] = useCheck(false)
  const [checked, setChecked] = useState<any>(false)

  useEffect(() => {
    const localTheme = localStorage.getItem('theme')
    setChecked(localTheme === 'dark')
  }, [])

  return (
    <>
      <br />
      <SidebarBtn>
        <input
          type="checkbox"
          id="sidebar"
          style={{ display: 'none' }}
          checked={sidebarToggle}
          onChange={onChangeToggle}
        />
        <BurgerIcon
          mobileToggle={sidebarToggle}
          htmlFor="sidebar"
          onClick={(e) => e.stopPropagation()}
        >
          <span />
          <span />
          <span />
        </BurgerIcon>
      </SidebarBtn>
      <br />

      <Wrap mobileToggle={sidebarToggle}>
        <ImageProfile>
          <Image src="images/profile.JPG" alt="my_img" />
        </ImageProfile>

        <NameInfo className="flex-c-start">
          <h4>이한울</h4>

          <div className="flex-sb" style={{ padding: '0 1rem 0 0' }}>
            <span>lnuvy</span>
            <i>1997.02.24</i>
          </div>
        </NameInfo>

        <Chapter setSidebarToggle={setSidebarToggle} />

        <div style={{ marginTop: '2rem' }}>
          <Footer>
            <Span>© 2022. lnuvy All rights reserved.</Span>
          </Footer>
        </div>
        <ModeChangeWrap className="flex-center">
          <ToggleBox checked={checked} changeMode={changeMode} />
        </ModeChangeWrap>
      </Wrap>
    </>
  )
}

export default LeftBar
