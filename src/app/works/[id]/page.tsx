"use client";

import worksData from "../../data/worksData";
import { useParams } from "next/navigation"; // useParams をインポート
import Close from "@/app/components/Close";
import Image from "next/image";
import logo from "../../../../public/img/portfolio_logo.webp";
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
        <h1>
          Works (<span>作品紹介</span>) &gt; {work.title}
        </h1>
        <Close />
      </div>
      <div className={styles.pageArea}>
        <header className={styles.header}>
          <Link href="/works">
            <Image src={logo} alt="ポートフォリオロゴ" />
          </Link>
        </header>
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
              {work.type === "その他"
                ? ""
                : work.codingIcons.map((coding, index) => {
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
                        <Image
                          src={coding}
                          alt="使用技術"
                          width={32}
                          height={32}
                        />
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
              {work.type === "その他" ? (
                <p className={styles.graphicBtn}>サイトはありません</p>
              ) : (
                <Link
                  href={work.workUrl}
                  onClick={(event) =>
                    webSiteLink(event, work.workUrl, work.title)
                  }
                  className={styles.siteBtn}
                >
                  {work.type === "webサイト"
                    ? "Webサイトを見る"
                    : "Webアプリを見る"}
                </Link>
              )}
            </div>
            {work.type === "その他" ? (
              ""
            ) : (
              <div className={styles.linkWrap}>
                <Link
                  href={work.githubUrl}
                  onClick={(event) =>
                    webSiteLink(event, work.githubUrl, work.title)
                  }
                  className={styles.githubBtn}
                >
                  <span>github</span>-{work.title}
                </Link>
                {work.lpUrl === "無し" ? (
                  ""
                ) : (
                  <Link
                    href={work.lpUrl}
                    onClick={(event) =>
                      webSiteLink(event, work.lpUrl, work.title)
                    }
                    className={styles.linkBtn}
                  >
                    ランディングページ
                  </Link>
                )}
                {work.documentUrl === "無し" ? (
                  ""
                ) : (
                  <Link
                    href={work.documentUrl}
                    onClick={(event) =>
                      webSiteLink(event, work.documentUrl, work.title)
                    }
                    className={styles.linkBtn}
                  >
                    {work.documentName}
                  </Link>
                )}
                {work.otherUrl === "無し" ? (
                  ""
                ) : (
                  <Link
                    href={work.otherUrl}
                    onClick={(event) =>
                      webSiteLink(event, work.otherUrl, work.title)
                    }
                    className={styles.linkBtn}
                  >
                    {work.otherName}
                  </Link>
                )}
              </div>
            )}
            {/* 作品概要 */}
            <div className={styles.summaryWrap}>
              <h4>役割</h4>
              <p className={styles.workSummary}>{work.role}</p>
              <h4>作品概要</h4>
              <p className={styles.workSummary}>{work.workSummary}</p>
              <h4>工夫点</h4>
              <p className={styles.workSummary}>{work.point}</p>
              <h4>反省点</h4>
              <p className={styles.workSummary}>{work.reflection}</p>
              <h4>振り返り</h4>
              <p className={styles.workSummary}>{work.review}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
