import Close from "../components/Close";
import styles from "./Contact.module.scss";

export default function Contact() {
  return (
    <>
      <div className={styles.windowWrap}>
        <div className={styles.bar}>
          <h1>Contact</h1>
          <Close />
        </div>
        <div className={styles.pageArea}></div>
      </div>
    </>
  );
}
