/**
 * Custom app using PAGES router:
 * https://nextjs.org/docs/pages/building-your-application/routing/custom-app
 */

import "@/global/style.css";
import type { AppProps } from "next/app";
import Head from "next/head";

import { inter, playfair_display } from "@/global/fonts";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Tabitha Bernard - Artist Portfolio</title>
        <meta name="description" content="Artist Portfolio - Tabitha Bernard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <style jsx global>{`
        :root {
          --inter-font: ${inter.style.fontFamily};
          --playfair-font: ${playfair_display.style.fontFamily};
        }
      `}</style>

      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
