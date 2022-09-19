import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { ThemeProvider } from '@emotion/react'
import { useEffect, useState } from 'react'
import { theme } from '../styles/theme'

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
    }
    // return () => {
    //   localStorage.removeItem('theme')
    // }
  }, [])

  const changeMode = () => {
    isDark
      ? localStorage.setItem('theme', 'light')
      : localStorage.setItem('theme', 'dark')
    setIsDark(!isDark)
  }

  return (
    <ThemeProvider
      theme={
        isDark
          ? { device, ...theme.darkTheme }
          : { device, ...theme.lightTheme }
      }
    >
      <div className="global-div">
        <Component {...pageProps} changeMode={changeMode} />
      </div>
    </ThemeProvider>
  )
}

export default MyApp
