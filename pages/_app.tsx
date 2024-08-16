import { useEffect } from 'react'
import mixpanel from 'mixpanel-browser'
import type { AppProps } from 'next/app'
import OGCommon from '@components/open-graph/og-common'
import { isProduction } from '@helpers/env'
import ThemeContextProvider from 'src/context/theme-context'
import GlobalStyles from '../styles/global-styles'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    console.log('env', process.env.NEXT_PUBLIC_MX_TOKEN)
    if (isProduction()) {
      // eslint-disable-next-line import/no-named-as-default-member
      mixpanel.init(process.env.NEXT_PUBLIC_MX_TOKEN || '', {
        debug: true,
        track_pageview: true,
      })
    }
  }, [])

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
