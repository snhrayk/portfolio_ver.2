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

  const webSiteLink = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    windowName: string
  ) => {
    event.preventDefault();
    window.open(href, windowName);
  };

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
            <h3>{work.title}</h3>
            <p className={styles.catchCopy}>{work.catchCopy}</p>
            <p className={styles.date}>{work.period}</p>
            <ul className={styles.tagList}>
              {work.tag.map((tag, index) => (
                <li key={index}>#{tag}</li>
              ))}
            </ul>
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
              <p className={styles.term}>{work.date}</p>
              <Link
                href={work.workUrl}
                onClick={(event) =>
                  webSiteLink(event, work.workUrl, work.title)
                }
                className={styles.siteBtn}
              >
                サイトを見る
              </Link>
            </div>
            <Link
              href={work.githubUrl}
              onClick={(event) =>
                webSiteLink(event, work.githubUrl, work.title)
              }
              className={styles.githubBtn}
            >
              <span>github</span>-{work.title}
            </Link>
            {/* 作品概要 */}
            <div className={styles.summaryWrap}>
              <h4>作品概要</h4>
              <p className={styles.workSummary}>{work.workSummary}</p>
              <h4>こだわった点</h4>
              <p className={styles.workSummary}>{work.point}</p>
              <h4>学び</h4>
              <p className={styles.workSummary}>{work.learned}</p>
              <h4>反省点</h4>
              <p className={styles.workSummary}>{work.reflection}</p>
              <h4>その他</h4>
              <p className={styles.workSummary}>{work.other}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
