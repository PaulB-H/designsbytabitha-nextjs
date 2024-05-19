import styles from "./Artwork.module.css";
import clsx from "clsx";
import FullScreenImage from "../FullScreenImage/FullScreenImage";

export default function Artwork() {
  return (
    <div className={styles.container_100vh}>
      <main className={styles.main}>
        <h1 className={styles.paintingName}>Paintings</h1>
        <p className={styles.instructions}>Tap to view full image</p>
        <div className={styles.container_artwork}>
          <div className={styles.grid_item}>
            <FullScreenImage
              src="/artwork/paintings/Cinque_Terre_1737x1080.webp"
              alt="Image"
              classList={clsx(styles.painting)}
            />
            <div className={styles.textBox}>
              <p className={styles.bold}>Cinque Terre</p>
              <p>Acrylic on Canvas </p>
              <p>48” x 30”</p>
            </div>
          </div>

          <div className={styles.grid_item}>
            <FullScreenImage
              src="/artwork/paintings/Interconnectivity_1083x1080.webp"
              alt="Image"
              classList={clsx(styles.painting)}
            />
            <div className={styles.textBox}>
              <p className={styles.bold}>Interconnectivity</p>
              <p>Mixed Media on Canvas</p>
              <p>36” X 36”</p>
            </div>
          </div>

          <div className={styles.grid_item}>
            <FullScreenImage
              src="/artwork/paintings/Winter_Sunrise_Over_Toronto_Harbour_707x1080.webp"
              alt="Image"
              classList={clsx(styles.painting)}
            />
            <div className={styles.textBox}>
              <p className={styles.bold}>
                Winter Sunrise over
                <br />
                Toronto Harbour
              </p>
              <p>Acrylic</p>
              <p>24” x 36”</p>
            </div>
          </div>

          <div className={styles.grid_item}>
            <FullScreenImage
              src="/artwork/paintings/Marine_Life_1461x1080.webp"
              alt="Image"
              classList={clsx(styles.painting)}
            />
            <div className={styles.textBox}>
              <p className={styles.bold}>Marine Life</p>
              <p>Acrylic on Canvas</p>
              <p>18” X 24”</p>
            </div>
          </div>

          <div className={styles.grid_item}>
            <FullScreenImage
              src="/artwork/paintings/Wildfires_1369x1080.webp"
              alt="Image"
              classList={clsx(styles.painting)}
            />
            <div className={styles.textBox}>
              <p className={styles.bold}>Wildfires</p>
              <p>Acrylic on Canvas</p>
              <p>18” X 24”</p>
            </div>
          </div>

          <div className={styles.grid_item}>
            <FullScreenImage
              src="/artwork/paintings/Rough_Seas_1430x1080.webp"
              alt="Image"
              classList={clsx(styles.painting)}
            />
            <div className={styles.textBox}>
              <p className={styles.bold}>Rough Seas</p>
              <p>Acrylic on Canvas</p>
              <p>18” X 24”</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
