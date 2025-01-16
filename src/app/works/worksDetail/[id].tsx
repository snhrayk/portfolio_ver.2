import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import styles from "./WorkDetail.module.scss";
import heading from "../../data/worksHeading";
import detail from "../../data/worksDetail";
import Close from "@/app/components/Close";

export default function WorksDetail() {
  const router = useRouter();
  const { id } = router.query;

  // headingデータから該当IDの詳細データを取得
  const workHeading = heading.find((item) => item.id === Number(id));
  const workDetail = detail.find((item) => item.id === Number(id));

  if (!workHeading || !workDetail) {
    return (
      <div className={styles.error}>
        <p>該当する作品が見つかりません。</p>
        <Link href="/works">
          <a>作品一覧へ戻る</a>
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.workDetail}>
      <div className={styles.bar}>
        <h1>
          {workHeading.title} (<span>作品詳細</span>)
        </h1>
        <Close />
      </div>
      <div className={styles.pageArea}>
        <header className={styles.header}>
          <Image
            src={workHeading.img}
            alt={workHeading.title}
            width={600}
            height={400}
            className={styles.workImg}
          />
        </header>
        <section className={styles.detailSection}>
          <h2>{workHeading.title}</h2>
          <p className={styles.date}>{workDetail.date}</p>
          <p className={styles.period}>{workDetail.period}</p>
          <p className={styles.explain}>{workDetail.explain}</p>
          <p className={styles.thoughts}>{workDetail.thoughts}</p>
          <div className={styles.icons}>
            <div className={styles.coding}>
              <h3>使用技術</h3>
              {workDetail.codingIcons.map((icon, index) => (
                <Image
                  key={index}
                  src={icon}
                  alt="使用言語"
                  width={40}
                  height={40}
                />
              ))}
            </div>
            <div className={styles.design}>
              <h3>デザインツール</h3>
              {workDetail.designIcons.map((icon, index) => (
                <Image
                  key={index}
                  src={icon}
                  alt="デザインツール"
                  width={40}
                  height={40}
                />
              ))}
            </div>
          </div>
          <div className={styles.links}>
            {workDetail.workUrl && (
              <Link href={workDetail.workUrl}>
                <a target="_blank" rel="noopener noreferrer">
                  Webサイトを見る
                </a>
              </Link>
            )}
            {workDetail.githubUrl && (
              <Link href={workDetail.githubUrl}>
                <a target="_blank" rel="noopener noreferrer">
                  GitHubリポジトリを見る
                </a>
              </Link>
            )}
          </div>
        </section>
        <div className={styles.slideImages}>
          {workDetail.slideImg.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt={`スライド画像${index + 1}`}
              width={600}
              height={400}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
