import { useCallback, useEffect, useState } from 'react'
import { createDynamicContext } from '../create-dynamic-context'

const THEME_KEY = '_theme'

interface ThemeContextProps {
  isDark: boolean
  onChangeTheme: () => void
}

const { ContextProvider, useContext } = createDynamicContext<ThemeContextProps>()

export const useThemeContext = useContext

interface Props {
  children: JSX.Element | JSX.Element[]
}

const ThemeContextProvider = ({ children }: Props) => {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const localTheme = localStorage.getItem(THEME_KEY)
    if (localTheme != null) {
      setIsDark(localTheme === 'dark')
    }
    if (localTheme == null) {
      localStorage.setItem(THEME_KEY, 'dark')
    }
  }, [])

  useEffect(() => {
    // Tailwind Dark Mode
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  const onChangeTheme = useCallback(() => {
    isDark ? localStorage.setItem(THEME_KEY, 'light') : localStorage.setItem(THEME_KEY, 'dark')
    setIsDark((prev) => !prev)
  }, [isDark])

  return (
    <ContextProvider isDark={isDark} onChangeTheme={onChangeTheme}>
      {children}
    </ContextProvider>
  )
}

export default ThemeContextProvider
