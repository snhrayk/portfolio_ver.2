"use client";
import Image from "next/image";
import Close from "../components/Close";
import styles from "./Works.module.scss";
import logo from "../../../public/img/portfolio_logo.webp";

import worksData from "../data/worksData";
import Link from "next/link";
import WorksNav from "../components/WorksNav";
import { useState } from "react";

export default function Works() {
  const [selectedCategory, setSelectedCategory] = useState("すべて");

  // フィルタリング処理
  const filteredWorks = (
    selectedCategory === "すべて"
      ? worksData
      : worksData.filter((work) => work.tag.includes(selectedCategory))
  ).sort((a, b) => b.id - a.id);
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
            <Link href="/works">
              <Image src={logo} alt="ポートフォリオロゴ" />
            </Link>
          </header>
          <WorksNav
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <div className={styles.worksArea}>
            {filteredWorks.map((work) => (
              <section key={work.id} className={styles.workWrap}>
                <div className={styles.workItem}>
                  {work.img && (
                    <Image
                      src={work.img}
                      alt={work.title}
                      width={594}
                      height={420}
                      className={styles.workImg}
                    />
                  )}
                  <h2>{work.title}</h2>
                  <p className={styles.catchCopy}>{work.catchCopy}</p>
                  <ul className={styles.tagWrap}>
                    {work.tag.map((tag, index) => (
                      <li key={`tag-${index}`}>#{tag}</li>
                    ))}
                  </ul>
                  <div className={styles.btnWrap}>
                    <p className={styles.workDate}>{work.date}</p>
                    <Link href={`/works/${work.id}`}>詳細を見る</Link>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
