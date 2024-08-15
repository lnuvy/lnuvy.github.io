import type { AppProps } from 'next/app'
import OGCommon from '@components/open-graph/og-common'
import ThemeContextProvider from 'src/context/theme-context'
import GlobalStyles from '../styles/global-styles'

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
