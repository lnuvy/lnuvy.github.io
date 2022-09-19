import '@emotion/react'

declare module '@emotion/react' {
  export interface LightTheme {
    mode: {
      backgroundColor: string
      textColor: string
      borderColor: string
      stackBorder: string
      linkColor: string
      chapterHover: string
      labelColor: string
    }
  }

  export interface DarkTheme {
    mode: {
      backgroundColor: string
      textColor: string
      borderColor: string
      stackBorder: string
      linkColor: string
      chapterHover: string
      labelColor: string
    }
  }
}
