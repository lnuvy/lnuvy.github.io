import type { AppProps } from 'next/app'
import GlobalStyles from '../styles/global-styles'
import ThemeContextProvider from 'src/context/theme-context'
import OGCommon from '@components/open-graph/og-common'

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
