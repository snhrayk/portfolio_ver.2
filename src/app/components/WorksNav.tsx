import styles from "./WorksNav.module.scss";

const categories = [
  "すべて",
  "受賞作品",
  "個人制作",
  "チーム制作",
  "習作",
  "Webデザイン",
  "Ui/Uxデザイン",
  "デザインシステム",
  "グラフィックデザイン",
  "コーディング",
];

interface WorksNavProps {
  setSelectedCategory: (category: string) => void;
  selectedCategory: string;
}

export default function WorksNav({
  selectedCategory,
  setSelectedCategory,
}: WorksNavProps) {
  return (
    <div className={styles.navWrap}>
      <ul className={styles.nav}>
        {categories.map((category) => (
          <li
            key={category}
            className={selectedCategory === category ? styles.active : ""}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}
