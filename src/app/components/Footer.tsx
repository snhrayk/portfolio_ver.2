import styles from "./Footer.module.scss";
import Image from "next/image";
import github from "../../../public/img/github_footer.svg";

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
        </div>
        <p>
          <small>© 2024 Sunahara Ayaka&apos;s Portfolio</small>
        </p>
      </div>
    </div>
  );
}
