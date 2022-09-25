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
      transition: 0.3s;

      &:nth-of-type(1) {
        ${({ mobileToggle }) =>
          mobileToggle ? 'top: 50%; transform: rotate(45deg);' : 'top: 0;'};
      }
      &:nth-of-type(2) {
        top: 50%;
        ${({ mobileToggle }) => (mobileToggle ? 'opacity: 0;' : 'top: 50%;')};
      }
      &:nth-of-type(3) {
        ${({ mobileToggle }) =>
          mobileToggle ? 'top: 50%;transform: rotate(-45deg);' : 'top: 100%;'};
      }
    }
  }
`
export const Wrap = styled.div<SidebarProps>`
  height: 100vh;
  padding: 1rem;
  width: 30vw;
  position: fixed;
  top: 0;
  transition: left 0.5s;
  background-color: ${({ theme }) => theme.palette.backgroundColor};

  @media ${({ theme }) => theme.device.mobile} {
    width: 40vw;
    min-width: 280px;
    position: fixed;
    left: ${({ mobileToggle }) => (mobileToggle ? '0;' : '-500px;')};
    z-index: 2;
    background-color: ${({ theme }) => theme.palette.background1};
    border-right: 1px solid ${({ theme }) => theme.palette.background2};
  }
`

export const ImageProfile = styled.div`
  width: 260px;
  height: 260px;
  margin: 0 auto;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.palette.borderColor};

  @media ${({ theme }) => theme.device.tablet} {
    width: 200px;
    height: 200px;
  }

  @media ${({ theme }) => theme.device.mobile} {
    width: 150px;
    height: 150px;
  }
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
`

export const NameInfo = styled.div`
  padding: 0.5rem 1rem;
  gap: 0.5rem;
  font-weight: 300;
  font-size: 1rem;

  & > .flex-sb {
    width: 100%;
  }
  & > h4 {
    margin: 0;
    font-size: 24px;
    line-height: 1.25;
    padding: 0 1rem;
  }
  & span {
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: 24px;
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
