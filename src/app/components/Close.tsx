import styles from "./Close.module.scss";
import Image from "next/image";
import close from "../../../public/img/close.svg";
import Link from "next/link";

export default function Close() {
  return (
    <>
      <Link href="/" className={styles.closeBtn}>
        <Image src={close} alt="閉じるボタン" />
      </Link>
    </>
  );
}
