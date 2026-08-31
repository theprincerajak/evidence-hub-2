import { Html, Head, Main, NextScript } from 'next/document';
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Evidence Hub" />
      </Head>
      <body className="bg-dark">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}