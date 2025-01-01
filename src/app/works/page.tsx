import Image from "next/image";
import Close from "../components/Close";
import styles from "./Works.module.scss";
import logo from "../../../public/img/portfolio_logo.png";

import worksData from "../data/worksData";

export default function Works() {
  return (
    <>
      <div className={styles.windowWrap}>
        <div className={styles.bar}>
          <h1>
            Works (<span>作品紹介</span>)
          </h1>
          <Close />
        </div>
        <div className={styles.pageArea}>
          <header className={styles.header}>
            {/* 後で変更予定 */}
            <Image src={logo} alt="ポートフォリオロゴ" />
            <ul className={styles.nav}>
              <li>オススメ!</li>
              <li>受賞歴有</li>
            </ul>
          </header>
          {worksData.map((work) => (
            <section key={work.id} className={styles.id}>
              <div className={styles.imgArea}></div>
              <h2 className={styles.jpn}>
                {work.title}
                {work.subtitle && <span>{work.subtitle}</span>}
              </h2>
              <p className={styles.explain}>{work.explain}</p>
              <div className={styles.btmWrap}>
                <p className={styles.workDate}>{work.workDate}</p>
                <button>詳細を見る</button>
              </div>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
