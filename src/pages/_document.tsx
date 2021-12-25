import Document, { Html, Head, Main, NextScript } from 'next/document'

import OGTags from './tags/OGTags'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <OGTags />
          <meta
            name="description"
            content="A Momentum clone made with Next.JS and Typescript."
          />

          <link rel="icon" href="/favicon.ico" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
