import Head from "next/head";
import Hero from "@/components/Hero/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tabitha Bernard - Artist Portfolio</title>
        <meta name="description" content="Artist Portfolio - Tabitha Bernard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
    </>
  );
}
