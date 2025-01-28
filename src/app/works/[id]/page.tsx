"use client";

import styles from "./WorksDetails.module.scss";
import worksData from "../../data/worksData";
import { useParams } from "next/navigation"; // useParams をインポート
import Close from "@/app/components/Close";
import Image from "next/image";
import logo from "../../../../public/img/portfolio_logo.webp";
import WorksNav from "@/app/components/WorksNav";

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
        <h1>{work.title}</h1>
        <Close />
      </div>
      <div className={styles.pageArea}>
        <header className={styles.header}>
          <Image src={logo} alt="ポートフォリオロゴ" />
        </header>
        <WorksNav />
        <div className={styles.worksArea}>
          <div className={styles.sliderWrap}></div>
          <div className={styles.data}>
            {/* <div className={styles.dataTop}>
              <p className={styles.prize}>{}</p>
            </div> */}
            <h3>{work.title}</h3>
            <p className={styles.date}>{work.period}</p>
            <p className={styles.mainExplain}>{work.explain}</p>
            <div className={styles.usedWrap}>
              <div className={styles.usedApp}>
                <p>Ps</p>
              </div>
              <div className={styles.usedApp}>
                <p>Ai</p>
              </div>
            </div>
            <div className={styles.btnWrap}>
              <p className={styles.term}>1年後期</p>
              <p className={styles.siteBtn}>サイトはありません</p>
            </div>
            <div>
              <h4>制作感想</h4>
              <p className={styles.subExplain}>
                グラフィックデザイン。キャンドルナイトの温かさを感じるようなデザインに仕上げました。
                自分がデザインしたチラシが学校や街中に貼られている光景を見たときは、とても感動しました。
                この作品から、デザインの楽しさを改めて感じることができました。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
