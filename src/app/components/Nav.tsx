import styles from "./Nav.module.scss";
import profile from "../../../public/img/profile_nav.svg";
import works from "../../../public/img/works_nav.svg";
import contact from "../../../public/img/contact_nav.svg";
import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className={styles.navWrap}>
      <Link href="/profile" className={styles.navChild}>
        <Image src={profile} alt="プロフィール" />
        <p>Profile</p>
      </Link>
      <Link href="/works" className={styles.navChild}>
        <Image src={works} alt="作品紹介" />
        <p>Works</p>
      </Link>
      <Link href="/contact" className={styles.navChild}>
        <Image src={contact} alt="お問い合わせ" />
        <p>Contact</p>
      </Link>
    </nav>
  );
}
