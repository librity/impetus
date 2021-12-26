import Document, { Html, Head, Main, NextScript } from 'next/document'

import Default from './tags/Default'
import OpenGraph from './tags/OpenGraph'
import Twitter from './tags/Twitter'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <Default />
          <OpenGraph />
          <Twitter />

          <link rel="icon" href="/icons/favicon.svg" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
