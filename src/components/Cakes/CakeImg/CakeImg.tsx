import FullScreenImage from "@/components/FullScreenImage/FullScreenImage";
import styles from "./CakeImg.module.css";
// export default function CakeImg(props: { src: string }) {
//   const { src } = props;
export default function CakeImg(props: { src: string }) {
  const { src } = props;
  // return <img className={styles.cakeImg} src={"/cakes/" + src} />;
  return (
    <FullScreenImage
      src={"/cakes/" + src}
      alt="A Cake made by Tabitha"
      classList={styles.cakeImg}
    />
  );
}
