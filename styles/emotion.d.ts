import Theme from '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    device: {
      mobile: string
      tablet: string
    }
    palette: {
      backgroundColor: string
      background1: string
      background2: string
      background3: string
      background4: string
      text1: string
      text2: string
      text3: string
      text4: string
      awsColor: string
      borderColor: string
      stackBorder: string
      linkColor: string
      chapterHover: string
      labelColor: string
    }
  }
}
