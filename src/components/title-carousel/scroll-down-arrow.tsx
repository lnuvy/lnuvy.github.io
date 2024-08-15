import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import ArrowDown from 'public/svg/arrow-down'

const ScrollDownArrow = () => {
  return (
    <div>
      <ScrollText>Scroll</ScrollText>

      <AnimateIcon>
        <ArrowDown />
      </AnimateIcon>
    </div>
  )
}

export default ScrollDownArrow

const ScrollText = styled.div`
  position: absolute;
  font-size: 20px;
  bottom: 100px;
  left: calc(50% - 24px);
  color: ${({ theme }) => theme.palette['text-default']};
`

export const bounce = keyframes`
  0% {
    bottom: 58px;
  }
  50% {
    bottom: 50px;
  }
  100% {
    bottom: 58px;
  }
`

const AnimateIcon = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  left: calc(50% - 15px);
  bottom: 30px;

  animation: ${bounce} 1s infinite;
`
