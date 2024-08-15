const deviceSizes = {
  mobile: 375,
  tablet: 768,
  pc: 1080,
}

/**
 * 숫자가 작을수록 연한 색깔 ex) text1, text2
 *
 * */
export const theme = {
  device: {
    mobile: `screen and (max-width: ${deviceSizes.tablet - 1}px)`,
    tablet: `screen and (max-width: ${deviceSizes.pc - 1}px)`,
  },
  darkTheme: {
    backgroundColor: '#22272e',
    background1: '#373e48', // 버튼색상
    background2: '#454e58', // 버튼 border 색상
    background3: '#454c56', // 버튼 hover
    background4: '#758390', // 버튼 border hover
    text1: 'rgba(205, 217, 229, 0.5)',
    text2: 'rgba(205, 217, 229, .7)',
    text3: '#768390',
    text4: '#adbac7',
    awsColor: '#fff',
    borderColor: '#444c56',
    stackBorder: '#373e47',
    linkColor: '#539bf5',
    chapterHover: 'rgba(205, 217, 229, 0.5)',
    labelColor: '#768390',
    boxShadow: '#cdd9e526'
  },
  lightTheme: {
    backgroundColor: '#fff',
    background1: '#f6f8fb',
    background2: '#d6d8db',
    background3: '#f3f4f6',
    background4: '#d3d4d7',
    text1: '#57606a',
    text2: '#24292f',
    text3: '#adbac7',
    text4: '#adbac7',
    awsColor: '#252F3E',
    borderColor: '#d0d7de',
    stackBorder: '#d0d7de',
    linkColor: '#0969da',
    chapterHover: 'rgba(205, 217, 229, 0.5)',
    labelColor: '#768390',
    boxShadow: '#1f232826'
  },
}
