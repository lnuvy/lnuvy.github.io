import React, {
  useState,
  useCallback,
  useEffect,
  useRef,
  MouseEvent,
} from 'react'
import styles from './styles.module.css'

const ScrollProgress = () => {
  const [width, setWidth] = useState<number>(0)
  const progressRef = useRef<HTMLDivElement | null>(null)

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

  return (
    <div className={styles.ScrollProgress} ref={progressRef}>
      <div
        className={styles.ScrollProgressItem}
        style={{ width: width + '%' }}
      />
    </div>
  )
}

export default ScrollProgress
