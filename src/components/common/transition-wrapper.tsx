import { PropsWithChildren } from 'react'
import { useInView } from 'react-intersection-observer'
import { Transition } from 'react-transition-group'
import styled from '@emotion/styled'

interface TransitionWrapperProps extends PropsWithChildren {
  timeout?: number
  mxAuto?: boolean
}

const TransitionWrapper = (props: TransitionWrapperProps) => {
  const { children, timeout = 30, mxAuto } = props

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <Transition in={inView} timeout={timeout}>
      {(state) => (
        <TransitionDiv ref={ref} className={state} mxAuto={mxAuto}>
          {children}
        </TransitionDiv>
      )}
    </Transition>
  )
}

export default TransitionWrapper

const TransitionDiv = styled.div<{ mxAuto?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${({ theme }) => theme.device.mobile} {
    ${({ mxAuto }) => mxAuto && 'margin: 0 auto; width: 90vw;'};
  }

  &.entered {
    transition-duration: 700ms;
  }

  &.exiting {
  }

  &.exited {
    transform: translateY(10%);
    opacity: 0;
    transition-duration: 600ms;
  }

  &.entering {
    transform: translateY(10%);
    opacity: 0.3;
    transition-duration: 600ms;
  }
`
