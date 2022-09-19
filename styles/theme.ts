// import { Theme } from '@emotion/react'

interface ThemeObj {
  backgroundColor: string
  textColor: string
  borderColor: string
  stackBorder: string
  linkColor: string
  chapterHover: string
  labelColor: string
}

interface Theme {
  darkTheme: ThemeObj
  lightTheme: ThemeObj
}

export const theme: Theme = {
  darkTheme: {
    backgroundColor: '#22272e',
    textColor: 'rgba(205, 217, 229, .7)',
    borderColor: '#444c56',
    stackBorder: '#373e47',
    linkColor: '#539bf5',
    chapterHover: 'rgba(205, 217, 229, 0.5)',
    labelColor: '#768390',
  },
  lightTheme: {
    backgroundColor: '#fff',
    textColor: '#24292f',
    borderColor: '#444c56', // chapter border, 라벨과 동일
    stackBorder: '#d0d7de', // 리스트 보더
    linkColor: '#0969da',
    chapterHover: 'rgba(205, 217, 229, 0.5)',
    labelColor: '#768390',
  },
}
