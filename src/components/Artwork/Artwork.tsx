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

          <div className={styles.grid_item}>
            <FullScreenImage
              src="/artwork/paintings/Aurora_Borealis_diptych_8X10_1920x734.webp"
              alt="Image"
              classList={clsx(styles.painting)}
            />
            <div className={styles.textBox}>
              <p className={styles.bold}>Aurora Borealis</p>
              <p>Acrylic on Canvas</p>
              <p>8” X 10”</p>
            </div>
          </div>

          <div className={styles.grid_item}>
            <FullScreenImage
              src="/artwork/paintings/Celestial_14X18_1400x1080.webp"
              alt="Image"
              classList={clsx(styles.painting)}
            />
            <div className={styles.textBox}>
              <p className={styles.bold}>Celestial</p>
              <p>Acrylic on Canvas</p>
              <p>14” X 18”</p>
            </div>
          </div>

          <div className={styles.grid_item}>
            <FullScreenImage
              src="/artwork/paintings/emotion_1_8X10_1378x1080.webp"
              alt="Image"
              classList={clsx(styles.painting)}
            />
            <div className={styles.textBox}>
              <p className={styles.bold}>Emotion 1</p>
              <p>Acrylic on Canvas</p>
              <p>8” X 10”</p>
            </div>
          </div>

          <div className={styles.grid_item}>
            <FullScreenImage
              src="/artwork/paintings/emotion_2_8X10_1360x1080.webp"
              alt="Image"
              classList={clsx(styles.painting)}
            />
            <div className={styles.textBox}>
              <p className={styles.bold}>Emotion 2</p>
              <p>Acrylic on Canvas</p>
              <p>8” X 10”</p>
            </div>
          </div>

          <div className={styles.grid_item}>
            <FullScreenImage
              src="/artwork/paintings/life_diptych_8X10_1853x1080.webp"
              alt="Image"
              classList={clsx(styles.painting)}
            />
            <div className={styles.textBox}>
              <p className={styles.bold}>Life</p>
              <p>Acrylic on Canvas</p>
              <p>8” X 10”</p>
            </div>
          </div>

          <div className={styles.grid_item}>
            <FullScreenImage
              src="/artwork/paintings/Line_and_texture_Diptych_12X16_1920x673.webp"
              alt="Image"
              classList={clsx(styles.painting)}
            />
            <div className={styles.textBox}>
              <p className={styles.bold}>Line & Texture</p>
              <p>Acrylic on Canvas</p>
              <p>12” X 16”</p>
            </div>
          </div>

          <div className={styles.grid_item}>
            <FullScreenImage
              src="/artwork/paintings/Muted_Flowers_9X12_1435x1080.webp"
              alt="Image"
              classList={clsx(styles.painting)}
            />
            <div className={styles.textBox}>
              <p className={styles.bold}>Muted Flowers</p>
              <p>Acrylic on Canvas</p>
              <p>9” X 12”</p>
            </div>
          </div>

          <div className={styles.grid_item}>
            <FullScreenImage
              src="/artwork/paintings/Ocean_Blue_12X16_1440x1080.webp"
              alt="Image"
              classList={clsx(styles.painting)}
            />
            <div className={styles.textBox}>
              <p className={styles.bold}>Ocean Blue</p>
              <p>Acrylic on Canvas</p>
              <p>12” X 16”</p>
            </div>
          </div>

          <div className={styles.grid_item}>
            <FullScreenImage
              src="/artwork/paintings/Ocean_Blue_small_9X12_819x1080.webp"
              alt="Image"
              classList={clsx(styles.painting)}
            />
            <div className={styles.textBox}>
              <p className={styles.bold}>Ocean Blue Small</p>
              <p>Acrylic on Canvas</p>
              <p>9” X 12”</p>
            </div>
          </div>

          <div className={styles.grid_item}>
            <FullScreenImage
              src="/artwork/paintings/Turmoil_12X16_1439x1080.webp"
              alt="Image"
              classList={clsx(styles.painting)}
            />
            <div className={styles.textBox}>
              <p className={styles.bold}>Turmoil</p>
              <p>Acrylic on Canvas</p>
              <p>12” X 16”</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
