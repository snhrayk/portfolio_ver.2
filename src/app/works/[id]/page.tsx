"use client";

import worksData from "../../data/worksData";
import { useParams } from "next/navigation"; // useParams をインポート
import Close from "@/app/components/Close";
import Image from "next/image";
import logo from "../../../../public/img/portfolio_logo.webp";
import WorksNav from "@/app/components/WorksNav";
import Link from "next/link";
import WorksSlider from "@/app/components/WorksSlider";
import styles from "./WorksDetails.module.scss";

export default function WorksDetail() {
  // URL パラメータを取得
  const { id } = useParams();

  // 取得した id を使って対象の作品を検索
  const work = worksData.find((work) => work.id === Number(id));

  if (!work) {
    return <p>作品が見つかりません。</p>;
  }

  return (
    <div className={styles.windowWrap}>
      <div className={styles.bar}>
        <h1>Works / {work.title}</h1>
        <Close />
      </div>
      <div className={styles.pageArea}>
        <header className={styles.header}>
          <Link href="/works">
            <Image src={logo} alt="ポートフォリオロゴ" />
          </Link>
        </header>
        <WorksNav />
        <div className={styles.worksArea}>
          <div className={styles.sliderWrap}>
            <WorksSlider slideImg={work.slideImg} />
          </div>
          <div className={styles.data}>
            {/* <div className={styles.dataTop}>
              <p className={styles.prize}>{}</p>
            </div> */}
            <h3>{work.title}</h3>
            <p className={styles.date}>{work.period}</p>
            <p className={styles.mainExplain}>{work.explain}</p>
            <ul className={styles.usedWrap}>
              {work.codingIcons.map((coding, index) => {
                const techName = coding
                  .match(/\/img\/(.*?)_works\.svg/)?.[1] // ファイル名から技術名を抽出
                  ?.toLowerCase();

                return (
                  <li
                    className={`${styles.usedApp} ${
                      techName ? styles[techName] : ""
                    }`}
                    key={`coding-${index}`}
                  >
                    <Image src={coding} alt="使用技術" width={32} height={32} />
                  </li>
                );
              })}
              {work.designIcons.map((design, index) => {
                const techName = design.toLowerCase(); // SCSSのクラス名と一致させる

                return (
                  <li
                    className={`${styles.usedApp} ${styles[techName]}`}
                    key={`design-${index}`}
                  >
                    {design === "figma" ? (
                      <Image
                        src="/img/figma_works.svg"
                        alt="使用技術"
                        width={32}
                        height={32}
                      />
                    ) : (
                      <p>{design}</p>
                    )}
                  </li>
                );
              })}
            </ul>
            <div className={styles.btnWrap}>
              <p className={styles.term}>1年後期</p>
              <p className={styles.siteBtn}>サイトはありません</p>
            </div>
            <div>
              <h4>制作感想</h4>
              <p className={styles.subExplain}>{work.explain}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
