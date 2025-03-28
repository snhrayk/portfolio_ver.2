import Image from "next/image";
import Close from "../components/Close";
import styles from "./Contact.module.scss";
import logo from "../../../public/img/portfolio_logo.webp";
import Link from "next/link";

export default function Works() {
  return (
    <>
      <div className={styles.windowWrap}>
        <div className={styles.bar}>
          <h1>
            contact (<span>お問い合わせ</span>)
          </h1>
          <Close />
        </div>
        <div className={styles.pageArea}>
          <header className={styles.header}>
            <Image src={logo} alt="ポートフォリオロゴ" />
          </header>
          <div className={styles.contactArea}>
            <h2>お問い合わせはこちらからお願いいたします</h2>
            <Link href="mailto:ayaka21sunahara@gmail.com">
              ayaka21sunahara@gmail.com
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
