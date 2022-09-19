import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { lightTheme, darkTheme, ColorTheme } from '../styles/theme'
import { useDarkMode } from '@hooks/useDarkMode'
import { createContext } from 'react'

interface ContextProps {
  colorTheme: ColorTheme
  toggleColorTheme: () => void
}

export const ThemeContext = createContext<ContextProps>({
  colorTheme: lightTheme,
  toggleColorTheme: () => {
    return null
  },
})

function MyApp({ Component, pageProps }: AppProps) {
  const { colorTheme, toggleColorTheme } = useDarkMode()

  return (
    <ThemeContext.Provider value={{ colorTheme, toggleColorTheme }}>
      <div className="global-div">
        <Component {...pageProps} />
      </div>
    </ThemeContext.Provider>
  )
}

export default MyApp
