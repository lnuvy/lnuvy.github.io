import styled from '@emotion/styled'

type SidebarProps = {
  mobileToggle: boolean
}

export const SidebarBtn = styled.div`
  position: fixed;
  width: 60px;
  height: 50px;
  background-color: transparent;
  border-radius: 8px;
  z-index: 50;
  top: 1rem;
  left: 0;
`

export const BurgerIcon = styled.label<SidebarProps>`
  cursor: pointer;

  @media ${({ theme }) => theme.device.mobile} {
    width: 30px;
    height: 20px;
    display: block;
    position: fixed;
    top: 2rem;
    left: 1rem;
    & > span {
      display: block;
      height: 2px;
      background-color: ${({ theme }) => theme.palette.text1};
      left: 0;
      width: 100%;
      position: absolute;
      /* transition: 0.2s; */

      &:nth-of-type(1) {
        ${({ mobileToggle }) => (mobileToggle ? 'top: 50%; transform: rotate(45deg);' : 'top: 0;')};
      }
      &:nth-of-type(2) {
        top: 50%;
        ${({ mobileToggle }) => (mobileToggle ? 'opacity: 0;' : 'top: 50%;')};
      }
      &:nth-of-type(3) {
        ${({ mobileToggle }) => (mobileToggle ? 'top: 50%; transform: rotate(-45deg);' : 'top: 100%;')};
      }
    }
  }
`
export const Wrap = styled.div<SidebarProps>`
  height: 100vh;
  width: 100%;
  max-width: 296px;
  position: fixed;
  top: 0;
  transition: left 0.4s;
  background-color: ${({ theme }) => theme.palette.backgroundColor};

  @media ${({ theme }) => theme.device.tablet} {
    max-width: 256px;
  }

  @media ${({ theme }) => theme.device.mobile} {
    width: 40vw;
    min-width: 280px;
    position: fixed;
    left: ${({ mobileToggle }) => (mobileToggle ? '0;' : '-500px;')};
    z-index: 4;
    background-color: ${({ theme }) => theme.palette.background1};
    border-right: 1px solid ${({ theme }) => theme.palette.background2};
  }
`

export const NameInfo = styled.div`
  padding: 1rem 0;
  font-weight: 300;
  font-size: 1rem;

  & > .flex-sb {
    width: 100%;
  }
  & > h4 {
    margin: 0;
    font-size: 24px;
    line-height: 1.25;
    color: ${({ theme }) => theme.palette['text-default']};
  }
  & span {
    color: ${({ theme }) => theme.palette['text-muted']};
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: 24px;
  }

  @media ${({ theme }) => theme.device.mobile} {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 8px;
  @media ${({ theme }) => theme.device.tablet} {
    flex-direction: column;
    gap: 1rem;
  }

  @media ${({ theme }) => theme.device.mobile} {
    padding: 0 1rem;
  }

  & > a {
    display: flex;
    flex: 1;
  }
`

export const Footer = styled.div`
  font-size: 0.8rem;
  position: relative;
  top: 30px;
  display: flex;
  justify-content: center;
`

export const Span = styled.span`
  color: ${({ theme }) => theme.palette.text1};
  margin: 0 1rem;

  @media ${({ theme }) => theme.device.tablet} {
    font-size: 0.7rem;
  }
`

export const ModeChangeWrap = styled.div`
  position: relative;
  top: 100px;
  left: -26px;
`
