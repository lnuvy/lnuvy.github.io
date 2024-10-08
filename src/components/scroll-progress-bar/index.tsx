import React, { useState, useCallback, useEffect, useRef, useMemo } from 'react'
import { getProgressColor } from '@helpers/function'
import styles from './styles.module.css'

const ScrollProgress = () => {
  const [width, setWidth] = useState<number>(0)
  const progressRef = useRef<HTMLDivElement>(null)

  const handleScroll = useCallback((): void => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement
    if (scrollTop === 0) {
      setWidth(0)
      return
    }
    const windowHeight = scrollHeight - clientHeight
    const currentPercent = scrollTop / windowHeight
    setWidth(currentPercent * 100)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true)

    return () => {
      window.removeEventListener('scroll', handleScroll, true)
    }
  }, [handleScroll])

  const colorMemo = useMemo(() => getProgressColor(width), [width])

  return (
    <div className={styles['scroll-progress']} ref={progressRef}>
      <div
        className={styles['scroll-item']}
        style={{
          width: width + '%',
          background: `${colorMemo}`,
          transition: 'background-color 0.3s ease',
        }}
      />
    </div>
  )
}

export default ScrollProgress
