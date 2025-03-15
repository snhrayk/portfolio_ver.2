import styles from "./Msg.module.scss";
// import Image from "next/image";
// import close from "../../../public/img/close.svg";
// import { useState } from "react";

export default function Msg() {
  // const [isVisible, setIsVisible] = useState(true);

  // const handleClose = () => {
  //   setIsVisible(false);
  // };

  // if (!isVisible) return null;

  return (
    <>
      <div className={styles.windowWrap}>
        <div className={styles.bar}>
          <h1>Welcome to my portfolio &lt;3</h1>
          {/* <button className={styles.closeBtn} onClick={handleClose}>
            <Image src={close} alt="閉じるボタン" />
          </button> */}
        </div>
        <div className={styles.pageArea}>
          <p>
            画面右側のアイコンをクリックすることで
            <br />
            各ページをご覧いただけます
          </p>
        </div>
      </div>
    </>
  );
}
