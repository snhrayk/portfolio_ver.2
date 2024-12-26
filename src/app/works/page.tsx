import Close from "../components/Close";
import styles from "./Works.module.scss";

export default function Works() {
  return (
    <>
      <div className={styles.windowWrap}>
        <div className={styles.bar}>
          <h1>Works</h1>
          <Close />
        </div>
        <div className={styles.pageArea}></div>
      </div>
    </>
  );
}
