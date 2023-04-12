import type { AppProps } from 'next/app'
import { ThemeProvider } from '@emotion/react'
import { useCallback, useEffect, useState } from 'react'
import { theme } from '../styles/theme'
import GlobalStyles from '../styles/GlobalStyles'
import ThemeContextProvider from 'src/context/theme-context'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <OGCommon />
      <ThemeContextProvider>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeContextProvider>
    </>
  )
}

export default MyApp
