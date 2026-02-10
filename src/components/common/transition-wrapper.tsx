import { PropsWithChildren } from 'react'
import { useInView } from 'react-intersection-observer'
import { Transition } from 'react-transition-group'
import clsx from 'clsx'

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
        <div
          ref={ref}
          className={clsx(
            'flex flex-col justify-center items-center',
            mxAuto && 'max-md:mx-auto max-md:w-[90vw]',
            state === 'entered' && 'duration-700',
            state === 'exited' && 'translate-y-[10%] opacity-0 duration-500', // Reduced duration for exit to match old styling check if needed
            state === 'entering' && 'translate-y-[10%] opacity-0 duration-500',
            // Default state or transitioned state
            (state === 'entered' || state === 'exiting') && 'translate-y-0 opacity-100',
          )}
        >
          {children}
        </div>
      )}
    </Transition>
  )
}

export default TransitionWrapper
