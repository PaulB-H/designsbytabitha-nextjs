import Head from "next/head";
import styles from "./index.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tabitha Bernard - Artist Portfolio</title>
        <meta name="description" content="Artist Portfolio - Tabitha Bernard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="container" className={styles.container_100vh}>
        <main className={styles.main}>
          <img
            id="floral"
            src="/floral.png"
            alt=""
            className={styles.floralRing}
          />
          <img
            id="profileImg"
            src="/profile.webp"
            alt="Picture of Tabitha Bernard"
            className={styles.profileImg}
          />
          <div className={styles.textContainer}>
            <h2 className={styles.header}>Hello! I'm Tabitha Bernard</h2>
            <p className={styles.text}>
              I'm an IT Project Manager turned Artist.
            </p>
            <p className={styles.text}>
              I enjoy bringing beauty and imagination to life, one project at a
              time, and this is my portfolio
            </p>
            <br />
            <a href="mailto:tabitha@designsbytabitha.ca">
              tabitha@designsbytabitha.ca
            </a>
          </div>
        </main>
      </div>
    </>
  );
}
