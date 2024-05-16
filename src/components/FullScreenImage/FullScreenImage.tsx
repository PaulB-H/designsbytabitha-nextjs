import { useState } from "react";
import styles from "./FullScreenImage.module.css";
import clsx from "clsx";

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
    <>
      {!isFullScreen ? (
        <img
          className={classList}
          src={src}
          alt={alt}
          onClick={toggleFullScreen}
        />
      ) : (
        <>
          <img className={classList} src={src} alt={alt} />
          <div className={styles.fullscreen_image} onClick={toggleFullScreen}>
            <img
              className={clsx(classList)}
              src={src}
              alt={alt}
              onClick={toggleFullScreen}
            />
          </div>
        </>
      )}
    </>
  );
};

export default FullScreenImage;
