// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import Msg from "./components/Msg";
// import styles from "./page.module.scss";

// export default function Home() {
//   const [isFirstVisit, setIsFirstVisit] = useState(true);
//   const router = useRouter();

//   useEffect(() => {
//     const hasVisited = localStorage.getItem("hasVisited");

//     if (!hasVisited) {
//       // 初回訪問なら、localStorageに保存 & /profile にリダイレクト
//       localStorage.setItem("hasVisited", "true");
//       setIsFirstVisit(true);
//       router.replace("/profile");
//     } else {
//       setIsFirstVisit(false);
//     }
//   }, [router]);

//   return (
//     <div className={styles.page}>
//       {isFirstVisit ? <span>{"</Msg>"}</span> : <Msg />}
//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Msg from "./components/Msg";
import styles from "./page.module.scss";

export default function Home() {
  const [isFirstVisit, setIsFirstVisit] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");

    if (!hasVisited) {
      // 初回訪問なら、localStorageに保存して、/profileページへリダイレクト
      localStorage.setItem("hasVisited", "true");
      setIsFirstVisit(true);
      router.replace("/profile");
    } else {
      setIsFirstVisit(false);
    }
  }, [router]);

  return (
    <div className={styles.page}>
      {isFirstVisit && <span className={styles.msgOverlay}>{"</Msg>"}</span>}
      {!isFirstVisit && <Msg />}
    </div>
  );
}
