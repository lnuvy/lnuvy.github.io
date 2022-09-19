import styled from '@emotion/styled'

export const BurgerIcon = styled.label`
  @media ${({ theme }) => theme.device.mobile} {
    width: 30px;
    height: 20px;
    display: block;
    position: fixed;
    top: 2rem;
    & > span {
      display: block;
      height: 2px;
      background-color: ${({ theme }) => theme.palette.text1};
      left: 0;
      width: 100%;
      position: absolute;
      transition: 0.3s;

      &:nth-child(1) {
        top: 0;
      }
      &:nth-child(2) {
        top: 50%;
      }
      &:nth-child(3) {
        top: 100%;
      }
    }

    input[id='sidebar']:checked + & > span:nth-child(1) {
      top: 50%;
      transform: rotate(45deg);
    }
    input[id='sidebar']:checked + & > span:nth-child(2) {
      opacity: 0;
    }

    input[id='sidebar']:checked + & > span:nth-child(3) {
      top: 50%;
      transform: rotate(-45deg);
    }
  }
`

export const Wrap = styled.div`
  height: 100vh;
  padding: 1rem;
  max-width: 30vw;
  position: sticky;
  top: 0;
  left: 0px;

  @media ${({ theme }) => theme.device.mobile} {
    position: fixed;
    left: -300px;
  }
`

export const ImageProfile = styled.div`
  width: 260px;
  height: 260px;

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
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.palette.borderColor};
`

export const Footer = styled.div`
  font-size: 0.8rem;
  position: relative;
  top: 20px;
`

export const Span = styled.span`
  color: ${({ theme }) => theme.palette.text1};
  margin: 0 1rem;
`
