/**
 * Custom app using PAGES router:
 * https://nextjs.org/docs/pages/building-your-application/routing/custom-app
 */

import "@/global/style.css";
import type { AppProps } from "next/app";

import { inter, playfair_display } from "@/global/fonts";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --inter-font: ${inter.style.fontFamily};
          --playfair-font: ${playfair_display.style.fontFamily};
        }
      `}</style>

      <Component {...pageProps} />
    </>
  );
}
