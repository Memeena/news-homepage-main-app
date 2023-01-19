import styles from "./Header.module.css";
import headerImgSmall from "../../assets/images/image-web-3-mobile.jpg";
import headerImgLarge from "../../assets/images/image-web-3-desktop.jpg";

export default function Header({ width }) {
  const img = width < 600 ? headerImgSmall : headerImgLarge;
  return (
    <div className={styles.header}>
      <img className={styles.img} src={img} />
      <h1 className={styles.heading}>The Bright Future of Web 3.0?</h1>
      <p className={styles.desc}>
        We dive into the next evolution of the web that claims to put the power
        of the platforms back into the hands of the people. But is it really
        fulfilling its promise?
      </p>
      <button className={styles.button}>Read More</button>
    </div>
  );
}
