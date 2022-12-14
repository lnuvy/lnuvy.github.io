import type { AppProps } from 'next/app'
import { ThemeProvider } from '@emotion/react'
import { useCallback, useEffect, useState } from 'react'
import { theme } from '../styles/theme'
import GlobalStyles from '../styles/GlobalStyles'

function MyApp({ Component, pageProps }: AppProps) {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const localTheme = localStorage.getItem('theme')
    if (localTheme !== null) {
      if (localTheme === 'dark') {
        setIsDark(true)
      } else {
        setIsDark(false)
      }
    } else {
      localStorage.setItem('theme', 'dark')
    }
  }, [])

  const changeMode = useCallback(() => {
    isDark
      ? localStorage.setItem('theme', 'light')
      : localStorage.setItem('theme', 'dark')
    setIsDark(!isDark)
  }, [isDark])

  return (
    <ThemeProvider
      theme={
        isDark
          ? { device: theme.device, palette: theme.darkTheme }
          : { device: theme.device, palette: theme.lightTheme }
      }
    >
      <GlobalStyles isDark={isDark} />
      <Component {...pageProps} changeMode={changeMode} />
    </ThemeProvider>
  )
}

export default MyApp
