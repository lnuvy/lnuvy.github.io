import Link from 'next/link'
import AutoSizeImage from '@components/LeftBar/AutoSizeImage'
import Chapter from '@components/LeftBar/Chapter'
import SelectBtn from '@elements/SelectBtn'
import ToggleBox from '@elements/ToggleBox'
import { useCheck } from '@hooks/use-input'
import Github from 'public/svg/github'
import Runners from 'public/svg/runners'
import {
  BurgerIcon,
  ButtonWrapper,
  Footer,
  ModeChangeWrap,
  NameInfo,
  SidebarBtn,
  Span,
  Wrap,
} from './styles/left-style'

const LeftBar = () => {
  const [sidebarToggle, onChangeToggle, setSidebarToggle] = useCheck(false)
  const year = new Date().getFullYear()

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
        <BurgerIcon mobileToggle={sidebarToggle} htmlFor="sidebar" onClick={(e) => e.stopPropagation()}>
          <span />
          <span />
          <span />
        </BurgerIcon>
      </SidebarBtn>
      <br />

      <Wrap mobileToggle={sidebarToggle}>
        <AutoSizeImage
          src="images/runners-jayden.png"
          onClick={() => window.open('https://github.com/lnuvy')}
          alt="profile"
          layout="fill"
        />
        <NameInfo className="flex-c-start">
          <h4>이한울 </h4>

          <div className="flex-sb">
            <span>lnuvy</span>
          </div>
        </NameInfo>

        <ButtonWrapper>
          <Link href="https://github.com/lnuvy">
            <a target={'_blank'} style={{ display: 'flex' }}>
              <SelectBtn wide padding="5px 16px">
                {/* <Image src="images/github-logo.png" alt="github logo" width={16} height={16} /> */}
                <Github />
                Github
              </SelectBtn>
            </a>
          </Link>

          <Link href="https://runners.im/members/41">
            <a target={'_blank'} style={{ display: 'flex' }}>
              <SelectBtn wide padding="5px 16px">
                <div className="flex-center" style={{ marginRight: '0.5rem' }}>
                  <Runners />
                </div>
                Runners
              </SelectBtn>
            </a>
          </Link>
        </ButtonWrapper>

        <Chapter setSidebarToggle={setSidebarToggle} />

        <div style={{ marginTop: '2rem' }}>
          <Footer>
            <Span>© {year}. lnuvy All rights reserved.</Span>
          </Footer>
        </div>
        <ModeChangeWrap className="flex-center">
          <ToggleBox />
        </ModeChangeWrap>
      </Wrap>
    </>
  )
}

export default LeftBar
