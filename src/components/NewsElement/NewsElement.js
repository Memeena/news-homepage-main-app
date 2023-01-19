import styles from "./NewsElement.module.css";

export default function NewsElement(props) {
  return (
    <div className={styles.newsElement}>
      <img
        src={require(`../../assets/images/${props.img}`)}
        className={styles.img}
        alt={props.imgName}
      />
      <p className={styles.id}>{"0" + `${props.id}`}</p>
      <h1 className={styles.heading}>{props.heading}</h1>
      <p className={styles.desc}>{props.desc}</p>
    </div>
  );
}
