import styles, { floatLeft } from "./Artwork.module.css";
import clsx from "clsx";
import FullScreenImage from "../FullScrenImage/FullScreenImage";

export default function Artwork() {
  return (
    <div className={styles.container_100vh}>
      <main className={styles.main}>
        <div className={styles.container_artwork}>
          <h1 className={styles.paintingName}>Paintings</h1>
          <p className={styles.instructions}>Tap to view full image</p>
          <div className={styles.row}>
            <FullScreenImage
              src="/artwork/paintings/Cinque_Terre_1737x1080.webp"
              alt="Image"
              classList={clsx(styles.floatLeft, styles.painting)}
            />
            <div className={styles.textBox}>
              <p className={styles.bold}>Cinque Terre</p>
              <p>Acrylic on Canvas </p>
              <p>48” x 30”</p>
            </div>
          </div>
          <div className={styles.row}>
            <FullScreenImage
              src="/artwork/paintings/Interconnectivity_1083x1080.webp"
              alt="Image"
              classList={clsx(styles.floatRight, styles.painting)}
            />
            <div className={styles.textBox}>
              <p className={styles.bold}>Interconnectivity</p>
              <p>Mixed Media on Canvas</p>
              <p>36” X 36”</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
