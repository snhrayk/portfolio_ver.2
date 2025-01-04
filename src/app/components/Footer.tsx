import styles from "./Footer.module.scss";
import Image from "next/image";
import insta from "../../../public/img/instagram_footer.svg";
import github from "../../../public/img/github_footer.svg";
import x from "../../../public/img/x_footer.svg";

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
          <a
            href="https://x.com/s7h_aya?s=21&t=bBSma4MzjQ4i1O-SxVr2Ug"
            onClick={(event) =>
              link(
                event,
                "https://x.com/s7h_aya?s=21&t=bBSma4MzjQ4i1O-SxVr2Ug",
                "私のX"
              )
            }
          >
            <Image src={x} alt="私のX" />
          </a>
        </div>
        <p>
          <small>© 2024 Sunahara Ayaka&apos;s Portfolio</small>
        </p>
      </div>
    </div>
  );
}
