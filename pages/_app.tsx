import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useState } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  const [isDark, setIsDark] = useState(false)

  return (
    <div className="global-div">
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
