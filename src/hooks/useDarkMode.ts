import { useEffect, useState } from 'react'
import { theme } from '../../styles/theme'

export const useDarkMode = () => {
  const [isDark, setIsDark] = useState<boolean>(true)

  const changeMode = (isCheck: boolean) => {
    isCheck
      ? localStorage.setItem('theme', 'light')
      : localStorage.setItem('theme', 'dark')
    setIsDark(!isCheck)
  }

  const toggleColorTheme = () => changeMode(isDark)

  useEffect(() => {
    const localTheme = localStorage.getItem('theme')
    if (localTheme !== null) {
      if (localTheme === 'dark') {
        setIsDark(true)
      } else {
        setIsDark(false)
      }
    }
  }, [])

  return {
    theme: isDark ? theme.darkTheme : theme.lightTheme,
    toggleColorTheme,
  }
}
