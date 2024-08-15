import { useState, useEffect } from 'react'

function useIsFirstScroll() {
  const [isScrolledDown, setIsScrolledDown] = useState(false)

  const [isAlreadyScrolled, setIsAlreadyScrolled] = useState(false)

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (lastScrollY === 0 && currentScrollY > 0) {
        setIsScrolledDown(true)
      } else if (currentScrollY === 0) {
        setIsScrolledDown(false)
      }

      // 이미 About me 이상 넘어간 경우, 다시 텍스트가 100vh로 넘어가는것을 방지
      if (currentScrollY > 500) {
        setIsAlreadyScrolled(true)
      }

      lastScrollY = currentScrollY
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return { isScrolledDown, isAlreadyScrolled }
}

export default useIsFirstScroll
