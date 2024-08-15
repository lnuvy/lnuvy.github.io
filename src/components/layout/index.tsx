import styled from '@emotion/styled'
import { LayoutContextProvider } from '@context/layout-context'
import { ChildrenProps } from 'types/components'
import LeftBar from './left'
import RightContent from './right'

const Layout = ({ children }: ChildrenProps) => {
  return (
    <LayoutContextProvider>
      <Frame>{children}</Frame>
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
