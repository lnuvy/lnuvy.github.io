'use client'

import { useEffect } from 'react'

interface UseClickOutsideType {
  inRef: React.RefObject<any>
  exceptRef?: React.RefObject<any>
  handler: () => void
  options?: {
    clickEvent?: boolean
    touchEvent?: boolean
  }
}

/**
 * 모바일 대응을 위해 TouchEvent를 추가했습니다.
 *
 * @param inRef 클릭 이벤트를 감지하지 않을 영역
 * @param exceptRef 조건부 렌더링 등으로 인해 추가로 생긴 영역에도 클릭 이벤트를 감지하지 않기위한 영역
 *
 */
export const useClickOutside = ({ inRef, exceptRef, handler, options }: UseClickOutsideType) => {
  const { clickEvent = true, touchEvent = true } = options ?? {}

  useEffect(() => {
    const listener = (event: TouchEvent | MouseEvent) => {
      if (
        !inRef?.current ||
        inRef?.current?.contains(event.target as Node) ||
        exceptRef?.current?.contains(event.target as Node)
      ) {
        return
      }
      handler()
    }

    if (clickEvent) document.addEventListener('mousedown', listener)
    if (touchEvent) document.addEventListener('touchstart', listener)

    return () => {
      if (clickEvent) document.removeEventListener('mousedown', listener)
      if (touchEvent) document.removeEventListener('touchstart', listener)
    }
  }, [inRef, exceptRef, handler, clickEvent, touchEvent])
}
