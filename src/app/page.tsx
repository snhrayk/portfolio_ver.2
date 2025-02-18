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
            画面右側のアイコンをクリックすることで
            <br />
            各ページをご覧いただけます
          </p>
          <span>※Contactをクリックするとメールが起動します</span>
        </div>
      </div>
    </div>
  );
}
