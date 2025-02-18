import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.windowWrap}>
        <div className={styles.bar}>
          <h1>Welcome to my portfolio &lt;3</h1>
          {/* <Close /> */}
        </div>
        <div className={styles.pageArea}>
          <p>
            画面右にあるアイコンをクリックすると
            <br />
            各ページに遷移できます
          </p>
          <span>※Contactをクリックするとメールが起動します</span>
        </div>
      </div>
    </div>
  );
}
