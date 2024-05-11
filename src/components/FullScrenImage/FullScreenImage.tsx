import { useState } from "react";
import styles from "./FullScreenImage.module.css";

interface FullScreenImage_props {
  src: string;
  alt: string;
  classList: string;
}

const FullScreenImage = ({ src, alt, classList }: FullScreenImage_props) => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <div>
      {!isFullScreen ? (
        <img
          className={classList}
          src={src}
          alt={alt}
          onClick={toggleFullScreen}
        />
      ) : (
        <div className={styles.fullscreen_image} onClick={toggleFullScreen}>
          <img className={classList} src={src} alt={alt} />
        </div>
      )}
    </div>
  );
};

export default FullScreenImage;
