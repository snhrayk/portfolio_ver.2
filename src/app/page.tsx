"use client";

import Msg from "./components/Msg";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <Msg />
    </div>
  );
}
