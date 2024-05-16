import styles from "./Cakes.module.css";
import CakeImg from "./CakeImg/CakeImg";

export default function Cakes({ cakeImages }: { cakeImages: string[] }) {
  return (
    <main className={styles.cakeContainer}>
      <h1 className={styles.cakesHeading}>Cakes</h1>
      {cakeImages.map((url, index) => (
        <CakeImg key={index} src={url} />
      ))}
    </main>
  );
}
