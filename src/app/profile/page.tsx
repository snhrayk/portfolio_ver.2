import Image from "next/image";
import Close from "../components/Close";
import styles from "./Profile.module.scss";
import figma from "../../../public/img/figma_profile_skill.png";
import ramen from "../../../public/img/ramen_profile_fav.png";
import music from "../../../public/img/music_profile_fav.png";
import paint from "../../../public/img/paint_profile_fav.png";
import movie from "../../../public/img/movies_profile_fav.png";

export default function Profile() {
  // const awardLink = (event, href, windowName) => {
  //   event.preventDefault();
  //   window.open(href, windowName);
  // };

  return (
    <>
      <div className={styles.windowWrap}>
        <div className={styles.bar}>
          <h1>
            Profile (<span>私について</span>)
          </h1>
          <Close />
        </div>
        <div className={styles.pageArea}>
          {/* ここからページごとに違う */}
          {/* 簡単な自己紹介とスキル */}
          <div className={styles.profileTopWrap}>
            {/* 簡単な自己紹介 */}
            <section className={styles.profileLeft}>
              <div className={styles.imgWrap}></div>
              <div className={styles.textTop}>
                <h2>profile card</h2>
                <p className={styles.name}>
                  name<span>砂原彩花</span>
                </p>
                <div className={styles.schoolWrap}>
                  <p>education</p>
                  <p className={styles.school}>
                    ECCコンピュータ専門学校 <br />
                    <span>マルチメディア研究学科 / Webデザインコース</span>
                  </p>
                </div>
                <p className={styles.from}>
                  hometown<span>兵庫県神戸市</span>
                </p>
                <p className={styles.birth}>
                  date of birth<time dateTime="2005-02-21">2005/02/21</time>
                </p>
                <p className={styles.graduation}>Graduation expected in 2026</p>
              </div>
            </section>
            {/* スキルと志望職種 */}
            <div className={styles.profileRight}>
              <section className={styles.skills}>
                <h2>My skills</h2>
                <div className={styles.programming}>
                  <h3>programming language</h3>
                  <div className={styles.languageWrap}>
                    <p>html</p>
                    <p>css</p>
                    <p>scss</p>
                    <p>js</p>
                    <p>react</p>
                    <p>next.js</p>
                    <p>pug</p>
                    <p>PHP</p>
                    <p>firebase</p>
                    <p>SQL</p>
                  </div>
                </div>
                <div className={styles.software}>
                  <h3>software</h3>
                  <div className={styles.softWrap}>
                    <div>
                      <p>Ai</p>
                    </div>
                    <div>
                      <p>Ps</p>
                    </div>
                    <div>
                      <Image src={figma} alt="figmaのアイコン" />
                    </div>
                    <div>
                      <p>Xd</p>
                    </div>
                    <div>
                      <p>Ae</p>
                    </div>
                    <div>
                      <p>Pr</p>
                    </div>
                    <div>
                      <p>Id</p>
                    </div>
                  </div>
                </div>
              </section>
              <p className={styles.jobType}>志望職種：デザインエンジニア</p>
            </div>
          </div>
          {/* about me */}
          <section className={styles.about}>
            <h2>about</h2>
            {/* 簡単に3行 */}
            <p className={styles.firstText}>
              {/* デザインの知識とコーディング力が両方活かせるデザインエンジニアを現在目指しています。デザイナーとエンジニアの通訳を行ったり、仕事内容によって役割を変えたりなど、私が持つスキルを様々な場面で活躍したいです。 */}
            </p>
            {/* デザインとコーディングについて */}
            <div className={styles.detailWrap}>
              <div className={styles.detailChild}>
                <h3>coding</h3>
                <p>
                  {/* コーディングは難しいことも多いですが、課題や制作を通して少しずつ成長しています。
                  自分でコードを考えて書いて、それが実際に自分の思い通りに動いたときがコーディングをしている上で感じる楽しい瞬間です。
                  <br />
                  reactやnext.jsをさらに極めるため現在勉強中です。 */}
                </p>
              </div>
              <div className={styles.detailChild}>
                <h3>design</h3>
                <p>
                  {/* キャンドルナイトに向けてポスターを制作した際、自分のポスターが準グランプリに選ばれたことがきっかけで自分のデザインに自信を持つことができました。
                  そこからデザインに対してさらに興味を持つようになり、現在はWebサイトやWebアプリに欠かせないUI/UXデザインを勉強中です。 */}
                </p>
              </div>
            </div>
            {/* 私の強み */}
            <div className={styles.strongWrap}>
              <h3>私の強み</h3>
              <p>{/* 私の強みは */}</p>
            </div>
            {/* 受賞歴 */}
            <div className={styles.awardWrap}>
              <h3>
                受賞歴<span>※+E展は学内で開催されるコンテストです</span>
              </h3>
              <ul>
                <li>2023年度 +E展 敢闘賞受賞</li>
                <li>
                  <a
                    href="https://npo.ecc.ac.jp/activities/index.php?c=topics_view&pk=1709003397&cn=8"
                    // onClick={(event) =>
                    //   awardLink(
                    //     event,
                    //     "https://npo.ecc.ac.jp/activities/index.php?c=topics_view&pk=1709003397&cn=8",
                    //     "2024年中崎町キャンドルナイト(済美冬まつり)"
                    //   )
                    // }
                  >
                    2023年度 中崎町キャンドルナイト ポスター 準グランプリ受賞
                  </a>
                </li>
                <li>
                  <a
                    href="https://html5award.com/award2023"
                    // onClick={(event) =>
                    //   awardLink(
                    //     event,
                    //     "https://html5award.com/award2023",
                    //     "2023年度 専門学校HTML5作品アワード"
                    //   )
                    // }
                  >
                    2023年度 専門学校HTML5作品アワード 入選
                  </a>
                </li>
                <li>2023年度 +E展 コンセプト賞受賞</li>
                <li>
                  <a
                    href="https://hacku.yahoo.co.jp/hacku2024_tokyo2/"
                    // onClick={(event) =>
                    //   awardLink(
                    //     event,
                    //     "https://hacku.yahoo.co.jp/hacku2024_tokyo2/",
                    //     "2024年度 Open Hack U 2024 TOKYO vol.2"
                    //   )
                    // }
                  >
                    2024年度 Open Hack U 2024 TOKYO vol.2 最優秀賞受賞
                  </a>
                </li>
              </ul>
            </div>

            {/* インターン歴 */}
            <div className={styles.internWrap}>
              <h3>インターンシップ</h3>
              <p>
                2024年9月
                株式会社カワッタデザインでのインターンシップに1週間程参加させていただきました。
                <br />
                このインターンシップを通して、
              </p>
            </div>
            {/* Webに興味を持つまで(history) */}
            {/* ↑で資格をもっていることを伝える */}

            {/* <div className={styles.}>
            <p>
              多くの資格を取得しており、現在はTOEIC600点台を目指して勉強中です
            </p>
            <p>
              全商簿記実務検定1級 / 全商英語検定1級 /
              全商ビジネス計算実務検定試験(電卓)1級 /<br />
              全商商業経済検定1級 / 全商情報処理検定2級(プログラミング部門) /
              色彩検定3級
            </p>
          </div> */}
          </section>
          {/* 私の好きなもの */}
          <section className={styles.myFav}>
            <h2>my favorite</h2>
            <div className={styles.childWrap}>
              <div className={styles.favChild}>
                <Image src={ramen} alt="ラーメンのアイコン" />
                <p>
                  I love ramen!!!
                  <br />
                  <span>好きな食べ物:ラーメン</span>
                </p>
              </div>
              <div className={styles.favChild}>
                <Image src={paint} alt="パレットのアイコン" />
                <p>
                  Colored pencil drawing
                  <br />
                  <span>特技:色鉛筆画(特に人物画)</span>
                </p>
              </div>
              <div className={styles.favChild}>
                <Image src={music} alt="音楽のアイコン" />
                <p>
                  listening to pop music
                  <br />
                  <span>趣味①:洋楽を聴くこと</span>
                </p>
              </div>
              <div className={styles.favChild}>
                <Image src={movie} alt="映画のアイコン" />
                <p>
                  watching movies
                  <br />
                  <span>趣味②:映画・ドラマ鑑賞</span>
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
