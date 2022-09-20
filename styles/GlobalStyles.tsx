import React from 'react'
import { Global, css } from '@emotion/react'

type ThemeProps = {
  isDark: boolean
}

const GlobalStyles = ({ isDark }: ThemeProps) => {
  console.log('뭐냐>', isDark)
  const styles = css`
    html,
    body {
      padding: 0;
      margin: 0;
      font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui,
        Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo',
        'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji',
        'Segoe UI Symbol', sans-serif;
      scroll-behavior: smooth;
      background-color: ${isDark ? '#22272e;' : '#fff'};
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    * {
      box-sizing: border-box;
    }

    .flex-start {
      display: flex;
      justify-content: start;
      align-items: center;
    }

    .flex-center {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .flex-sb {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .flex-end {
      display: flex;
      justify-content: end;
      align-items: center;
    }

    .flex-c-start {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: start;
    }

    .flex-c-center {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .flex-c-end {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: end;
    }
  `

  return <Global styles={styles} />
}

export default GlobalStyles
