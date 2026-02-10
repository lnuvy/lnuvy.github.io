import { ChangeEvent, useRef } from 'react'
import clsx from 'clsx'
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

const SidebarBtn = ({ className, children, ...props }: any) => (
  <div className={clsx('fixed w-[60px] h-[50px] bg-transparent rounded-lg z-50 top-4 left-0', className)} {...props}>
    {children}
  </div>
)

const BurgerIcon = ({ mobileToggle, children, className, ...props }: any) => (
  <label
    className={clsx(
      'cursor-pointer block',
      // Mobile only styles (default hidden spans on desktop implicit)
      'max-md:block max-md:w-[30px] max-md:h-[20px] max-md:fixed max-md:top-8 max-md:left-4',
      // Span common styles
      '[&>span]:hidden max-md:[&>span]:block max-md:[&>span]:h-[2px] max-md:[&>span]:bg-text-1 max-md:[&>span]:left-0 max-md:[&>span]:w-full max-md:[&>span]:absolute',
      // Child 1
      mobileToggle
        ? 'max-md:[&>span:nth-of-type(1)]:top-1/2 max-md:[&>span:nth-of-type(1)]:rotate-45'
        : 'max-md:[&>span:nth-of-type(1)]:top-0',
      // Child 2
      mobileToggle
        ? 'max-md:[&>span:nth-of-type(2)]:opacity-0 max-md:[&>span:nth-of-type(2)]:top-1/2'
        : 'max-md:[&>span:nth-of-type(2)]:top-1/2',
      // Child 3
      mobileToggle
        ? 'max-md:[&>span:nth-of-type(3)]:top-1/2 max-md:[&>span:nth-of-type(3)]:-rotate-45'
        : 'max-md:[&>span:nth-of-type(3)]:top-full',
      className,
    )}
    {...props}
  >
    {children}
  </label>
)

const Wrap = ({ mobileToggle, className, children, ...props }: any) => (
  <div
    className={clsx(
      'h-screen w-full max-w-[296px] fixed top-0 transition-[left] duration-400 bg-background-default',
      'max-lg:max-w-[256px]',
      'max-md:w-[40vw] max-md:min-w-[280px] max-md:fixed max-md:z-4 max-md:bg-background-1 max-md:border-r max-md:border-background-2',
      mobileToggle ? 'max-md:left-0' : 'max-md:left-[-500px]',
      className,
    )}
    {...props}
  >
    {children}
  </div>
)

const NameInfo = ({ className, children, ...props }: any) => (
  <div className={clsx('py-4 font-light text-base max-md:px-4', className)} {...props}>
    {children}
  </div>
)

const ButtonWrapper = ({ className, children, ...props }: any) => (
  <div
    className={clsx('flex w-full gap-2 max-lg:flex-col max-lg:gap-4 max-md:px-4 [&>a]:flex [&>a]:flex-1', className)}
    {...props}
  >
    {children}
  </div>
)

const Footer = ({ className, children, ...props }: any) => (
  <div className={clsx('text-[0.8rem] relative top-[30px] flex justify-center', className)} {...props}>
    {children}
  </div>
)

const Span = ({ className, children, ...props }: any) => (
  <span className={clsx('text-text-1 mx-4 max-lg:text-[0.7rem]', className)} {...props}>
    {children}
  </span>
)

const ModeChangeWrap = ({ className, children, ...props }: any) => (
  <div className={clsx('relative top-[100px] left-[-26px]', className)} {...props}>
    {children}
  </div>
)

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
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            onChange(e)
            clickInteraction('mobile_sidebar')
          }}
        />
        <BurgerIcon mobileToggle={isOpen} htmlFor="sidebar" onClick={(e: any) => e.stopPropagation()}>
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
          <h4 className="m-0 text-[24px] leading-tight text-text-default">이한울 </h4>

          <div className="flex-sb w-full">
            <span className="text-text-muted text-[20px] font-light leading-6">lnuvy</span>
          </div>
        </NameInfo>

        <Chapter setSidebarToggle={setIsOpen} />

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
