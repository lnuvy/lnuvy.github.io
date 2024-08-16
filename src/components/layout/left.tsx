import { useRef } from 'react'
import Link from 'next/link'
import AutoSizeImage from '@components/LeftBar/AutoSizeImage'
import Chapter from '@components/LeftBar/Chapter'
import { useLayoutContext } from '@context/layout-context'
import SelectBtn from '@elements/SelectBtn'
import ToggleBox from '@elements/ToggleBox'
import { clickInteraction, clickOutLink } from '@helpers/tracking'
import { useClickOutside } from '@hooks/use-click-outside'
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
  const { isOpen, onChange, setIsOpen } = useLayoutContext()
  const year = new Date().getFullYear()

  const ref = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLDivElement>(null)
  useClickOutside({
    inRef: ref,
    exceptRef: closeRef,
    handler: () => setIsOpen(false),
  })

  return (
    <>
      <br />
      <SidebarBtn ref={closeRef}>
        <input
          type="checkbox"
          id="sidebar"
          style={{ display: 'none' }}
          checked={isOpen}
          onChange={(e) => {
            onChange(e)
            clickInteraction('mobile_sidebar')
          }}
        />
        <BurgerIcon mobileToggle={isOpen} htmlFor="sidebar" onClick={(e) => e.stopPropagation()}>
          <span />
          <span />
          <span />
        </BurgerIcon>
      </SidebarBtn>
      <br />
      <Wrap ref={ref} mobileToggle={isOpen}>
        <AutoSizeImage
          src="images/runners-jayden.png"
          onClick={() => {
            clickInteraction('profile_image')
            window.open('https://github.com/lnuvy')
          }}
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
          <Link href="https://github.com/lnuvy" onClick={() => clickOutLink('github')}>
            <a target={'_blank'}>
              <SelectBtn wide padding="5px 16px">
                {/* <Image src="images/github-logo.png" alt="github logo" width={16} height={16} /> */}
                <Github />
                Github
              </SelectBtn>
            </a>
          </Link>

          <Link href="https://runners.im/members/41" onClick={() => clickOutLink('runners')}>
            <a target={'_blank'}>
              <SelectBtn wide padding="5px 16px">
                <div className="flex-center" style={{ marginRight: '0.5rem' }}>
                  <Runners />
                </div>
                Runners
              </SelectBtn>
            </a>
          </Link>
        </ButtonWrapper>

        <Chapter setSidebarToggle={setIsOpen} />

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
