import styles from "./Footer.module.scss";
import insta from "../../../public/img/instagram-logo.png";
import github from "../../../public/img/github_logo.png";
import Image from "next/image";
// import x from "../../../public/img/x-logo.png";

export default function Footer() {
  const link = (event: React.MouseEvent, href: string, windowName: string) => {
    event.preventDefault();
    window.open(href, windowName);
  };

  return (
    <div className={styles.borderTop}>
      <div className={styles.footerWrap}>
        <div className={styles.snsWrap}>
          <a
            href="https://github.com/snhrayk"
            onClick={(event) =>
              link(event, "https://github.com/snhrayk", "私のGitHub")
            }
          >
            <Image src={github} alt="私のGitHub" />
          </a>
          <a
            href="https://www.instagram.com/a8ksw_/"
            onClick={(event) =>
              link(event, "https://www.instagram.com/a8ksw_/", "私のInstagram")
            }
          >
            <Image src={insta} alt="私のInstagram" />
          </a>
        </div>
        <p>
          <small>© 2024 Sunahara Ayaka&apos;s Portfolio</small>
        </p>
      </div>
    </div>
  );
}
