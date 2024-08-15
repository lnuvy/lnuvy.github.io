import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
      <link rel="shortcut icon" href="/images/favicon.png" />
      </Head>
      <body>
        <div id="portal" />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
