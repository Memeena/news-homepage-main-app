import styles from "./NewElement.module.css";

export default function NewElement(props) {
  return (
    <div className={styles.newElement}>
      <h1 className={styles.heading}>{props.heading}</h1>
      <p className={styles.desc}>{props.desc}</p>
    </div>
  );
}
