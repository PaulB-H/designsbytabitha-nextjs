/**
 * Custom document using PAGES router:
 * https://nextjs.org/docs/pages/building-your-application/routing/custom-document
 */

import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Tabitha Bernard - Artist Portfolio</title>
        <meta name="description" content="Artist Portfolio - Tabitha Bernard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
