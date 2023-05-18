import { useThemeContext } from '@context/theme-context';
import { css, Global } from '@emotion/react';

const common = css`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI',
      'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
      sans-serif;
    scroll-behavior: smooth;
    user-select: none;
  }
  /* 
  html {
    font-size: 62.5%;
  } */

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
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
`;

const light = css`
  ${common}
  html,
  body {
    background-color: #fff;
  }
`;

const dark = css`
  ${common}
  html,
  body {
    background-color: #22272e;
  }
`;

const GlobalStyles = () => {
  const { isDark } = useThemeContext();

  if (isDark) return <Global styles={dark} />;
  else return <Global styles={light} />;
};

export default GlobalStyles;
