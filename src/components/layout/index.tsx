import { LayoutContextProvider } from '@context/layout-context';
import styled from '@emotion/styled';
import { ChildrenProps } from 'types/components';
import LeftBar from './left';
import RightContent from './right';

const Layout = ({ children }: ChildrenProps) => {

  

  return (
    <LayoutContextProvider>
  <Frame>{children}</Frame>
  </LayoutContextProvider>
  )

};

Layout.Left = LeftBar;
Layout.Right = RightContent;

export default Layout;

const Frame = styled.div`
  width: 100%;
  max-width: 1216px;
  display: flex;
  flex: 1;
  margin: 0 auto;

  /* transition: all 2s ease-in-out; */

  @media ${({ theme }) => theme.device.mobile} {
    gap: 0;
  }
`;
