import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const Wrap = styled.div`
  width: 100%;
  min-height: 100vh;
`
const CommonBackground = css`
  background-size: cover;
  background-position: right 50% bottom 45%;
`

export const SecondSlider = styled.div`
  width: 100%;
  height: 80vh;
  display: flex !important;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${CommonBackground}
  background-position: right;
  background-image: url('/images/main2.jpg');

  color: ${({ theme }) => theme.palette.text4};
  font-size: 0.9rem;

  & > h3 {
    font-size: 1.2rem;
    margin-bottom: 2rem;

    @media ${({ theme }) => theme.device.mobile} {
      font-size: 1rem;
    }
  }

  & > p {
    margin: 0.2rem;
    padding: 0 3rem;
    @media ${({ theme }) => theme.device.mobile} {
      padding: 0 1rem;
      font-size: 0.8rem;
    }
  }
`

export const FirstSlider = styled.div`
  background-image: url('/images/main.jpg');
  ${CommonBackground}
  background-color: rgba(0, 0, 0, 0.7);

  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* justify-content: center; */
  /* align-items: center; */
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
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.palette.text2};

  animation: moveUp 1.5s;
  @keyframes moveUp {
    from {
      opacity: 0;
      transform: translate3d(-20%, 0, 0);
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
    animation: moveDown 3s;

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
`

export const LinkStyle = styled.span`
  font-weight: 600;
  color: ${({ theme }) => theme.palette.link} !important;
  :hover {
    text-decoration: underline;
  }
`
