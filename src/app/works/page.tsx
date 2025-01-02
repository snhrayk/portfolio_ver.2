import Image from "next/image";
import Close from "../components/Close";
import styles from "./Works.module.scss";
import logo from "../../../public/img/portfolio_logo.png";

import heading from "../data/worksHeading";
import Link from "next/link";

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
              <li>受賞歴有</li>
              <li>すべて</li>
              <li>個人制作</li>
              <li>チーム制作</li>
              <li>その他</li>
            </ul>
          </header>
          {heading.map((work) => (
            <section key={work.id} className={styles.workWrap}>
              <div className={styles.workItem}>
                {work.img && (
                  <Image
                    src={work.img}
                    alt={work.title}
                    width={300}
                    height={250}
                    className={styles.workImg}
                  />
                )}
                {work.awardImg && (
                  <Image
                    src={work.img}
                    alt={work.title}
                    width={300}
                    height={250}
                    className={styles.workImg}
                  />
                )}
                <h2>{work.title}</h2>
                <p className={styles.explain}>{work.explain}</p>
                <div className={styles.btnWrap}>
                  <p className={styles.workDate}>{work.date}</p>
                  <Link href={`/${work.id}`}>詳細を見る</Link>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
