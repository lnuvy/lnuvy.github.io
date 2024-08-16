import styled from '@emotion/styled'
import { LayoutContextProvider } from '@context/layout-context'
import { useCheck } from '@hooks/use-input'
import { ChildrenProps } from 'types/components'
import LeftBar from './left'
import RightContent from './right'

const Layout = ({ children }: ChildrenProps) => {
  const [isOpen, onChangeToggle, setIsOpen] = useCheck(false)

  return (
    <LayoutContextProvider isOpen={isOpen} onChange={onChangeToggle} setIsOpen={setIsOpen}>
      <Frame>
        <InsetFrame isOpen={isOpen} />
        {children}
      </Frame>
    </LayoutContextProvider>
  )
}

Layout.Left = LeftBar
Layout.Right = RightContent

export default Layout

const Frame = styled.div`
  width: 100%;
  max-width: 1280px;
  padding-left: 32px;
  padding-right: 32px;
  display: flex;
  flex: 1;
  margin: 0 auto;

  /* gap: 24px;

  @media ${({ theme }) => theme.device.tablet} {
    gap: 16px;
  } */

  /* transition: all 2s ease-in-out; */

  @media ${({ theme }) => theme.device.mobile} {
    width: 90vw;
    gap: 0;
    padding: 0;
  }
`

const InsetFrame = styled.div<{ isOpen: boolean }>`
  position: fixed;
  z-index: ${({ isOpen }) => (isOpen ? 2 : -1)};
  inset: 0;
  transition: all 0.3s ease-in-out;
  background-color: ${({ isOpen }) => (isOpen ? `rgba(0, 0, 0, 0.5);` : `transparent;`)};
`
