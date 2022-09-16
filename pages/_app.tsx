import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Nav, Footer } from '../src/components'
import { useState } from 'react'

function MyApp({ Component, pageProps }: AppProps) {

  const [isDark, setIsDark] = useState(false)

  return (
    <div className='global-div'>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp
