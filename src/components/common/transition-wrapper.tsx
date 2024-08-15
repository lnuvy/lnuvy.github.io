import { PropsWithChildren } from 'react'
import { useInView } from 'react-intersection-observer'
import { Transition } from 'react-transition-group'
import styled from '@emotion/styled'

interface TransitionWrapperProps extends PropsWithChildren {
  timeout?: number
}

const TransitionWrapper = (props: TransitionWrapperProps) => {
  const { children, timeout = 30 } = props

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <Transition in={inView} timeout={timeout}>
      {(state) => (
        <TransitionDiv ref={ref} className={state}>
          {children}
        </TransitionDiv>
      )}
    </Transition>
  )
}

export default TransitionWrapper

const TransitionDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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
