import styles from "./WorksNav.module.scss";

export default function WorksNav() {
  return (
    <div className={styles.navWrap}>
      <ul className={styles.nav}>
        <li>すべて</li>
        <li>受賞作品</li>
        <li>個人制作</li>
        <li>チーム制作</li>
        <li>Webデザイン</li>
        <li>Ui/Uxデザイン</li>
        <li>グラフィックデザイン</li>
        <li>react・next.js</li>
      </ul>
    </div>
  );
}
