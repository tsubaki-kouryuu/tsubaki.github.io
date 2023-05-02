import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className="dark" style={{colorScheme: 'dark'}}>
      <Head />
      <body className={`bg-gray-950 overflow-hidden`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
