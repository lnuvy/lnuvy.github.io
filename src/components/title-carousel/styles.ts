import styled from '@emotion/styled'
import Image from 'next/image'

export const Wrap = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  min-height: 100vh;
`

export const FirstSlider = styled.div<{ isScroll: boolean }>`
  position: relative;
  height: ${({ isScroll }) => (isScroll ? '60vh' : '100vh')};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  transition: all 0.7s cubic-bezier(0.2, 0, 0.2, 1);
  /* transition: all 0.7s ease-in-out; */
`

export const StyledImage = styled(Image)`
  object-fit: cover;
  object-position: right 50% bottom 45%;
  z-index: 1;

  @media ${({ theme }) => theme.device.mobile} {
    object-position: right 90% bottom 45%;
  }
`

export const TitleWrapper = styled.div`
  position: absolute;
  bottom: 0;
`

export const H1 = styled.h1`
  width: 100%;
  text-align: center;
  font-weight: 600;
  margin-top: 0;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.palette.text2};

  position: relative;
  z-index: -1;
  opacity: 0;
  animation: moveUp 0.9s;
  animation-delay: 700ms;
  animation-fill-mode: forwards; /* 애니메이션 이후 상태를 유지 */

  @keyframes moveUp {
    from {
      opacity: 0;
      transform: translate3d(-10%, 0, 0);
    }
    to {
      opacity: 1;
      transform: translateZ(0);
    }
  }
`

export const TextWrapper = styled.div`
  padding: 1rem;
  & > p {
    margin: 0 auto 20px;
    color: grey;
    font-size: 0.9rem;
    animation: moveDown 2s;

    @media ${({ theme }) => theme.device.mobile} {
      font-size: 0.7rem;
    }

    @keyframes moveDown {
      0% {
        opacity: 0;
      }
      50% {
        opacity: 0;
        transform: translate3d(0, 100%, 0);
      }
      100% {
        opacity: 1;
        transform: translateZ(0);
      }
    }
  }
  & > .dot {
    margin-left: 12px;
  }
`

export const LinkStyle = styled.span`
  font-weight: 600;
  color: ${({ theme }) => theme.palette.link} !important;
  :hover {
    text-decoration: underline;
  }
`
