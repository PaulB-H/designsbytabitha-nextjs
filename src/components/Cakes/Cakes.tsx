import styles from "./Cakes.module.css";
import CakeImg from "./CakeImg/CakeImg";

export default function Cakes({ cakeImages }: { cakeImages: string[] }) {
  return (
    <>
      <h1 className={styles.cakesHeading}>Baking</h1>
      <main className={styles.cakeContainer}>
        {cakeImages.map((url, index) => (
          <CakeImg key={index} src={url} />
        ))}
      </main>
    </>
  );
}
