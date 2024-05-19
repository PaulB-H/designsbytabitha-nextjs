import styles from "./CakeImg.module.css";
import FullScreenImage from "@/components/FullScreenImage/FullScreenImage";

export default function CakeImg(props: { src: string }) {
  const { src } = props;
  return (
    <FullScreenImage
      src={src}
      alt="A Cake made by Tabitha"
      classList={styles.cakeImg}
    />
  );
}
