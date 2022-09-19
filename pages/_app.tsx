import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { ThemeProvider } from '@emotion/react'
import { useDarkMode } from '@hooks/useDarkMode'

function MyApp({ Component, pageProps }: AppProps) {
  const { theme, toggleColorTheme } = useDarkMode()

  return (
    <ThemeProvider theme={theme}>
      <div className="global-div">
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  )
}

export default MyApp
