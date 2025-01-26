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
        <div className={styles.worksArea}></div>
      </div>
    </div>
  );
}
