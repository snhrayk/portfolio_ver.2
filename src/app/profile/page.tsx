"use client";
import Image from "next/image";
import Close from "../components/Close";
import styles from "./Profile.module.scss";
import figma from "../../../public/img/figma_profile_skill.svg";
import ramen from "../../../public/img/ramen_profile_myfav.svg";
import music from "../../../public/img/music_profile_myfav.svg";
import paint from "../../../public/img/paint_profile_myfav.svg";
import movie from "../../../public/img/movie_profile_myfav.svg";

export default function Profile() {
  const awardLink = (event, href, windowName) => {
    event.preventDefault();
    window.open(href, windowName);
  };

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
              <div className={styles.jobType}>
                <p>志望職種</p>
                <ul>
                  <li>フロントエンドエンジニア</li>
                  <li>UI/UXデザイナー</li>
                  <li>デザインエンジニア</li>
                </ul>
              </div>
            </div>
          </div>
          {/* about me */}
          <section className={styles.about}>
            <h2>about me</h2>
            {/* 私の長所 */}
            <div className={styles.strongWrap}>
              <h3>
                私は<span>&quot;スポンジ&quot;</span>のような人です
              </h3>
              <p className={styles.strongText}>
                <span>①吸収力</span>
                スポンジが水をよく吸うように、新しい知識や技術を吸収します。
                インプットだけで終わらせず、自分のスキルとしてしっかり活かします。
              </p>
              <p className={styles.strongText}>
                <span>②適応力</span>
                スポンジが柔らかく変幻自在で、隅々まで行き渡るように、
                どんな状況にも柔軟に対応します。
              </p>
              <p className={styles.strongText}>
                <span>③発信力</span>
                吸収したものを溜め込まず、アウトプットし、チームやプロジェクトで貢献します。
              </p>
            </div>
            {/* デザインとコーディングについて */}
            <div className={styles.detailWrap}>
              <div className={styles.detailChild}>
                <h3>design</h3>
                <p>
                  学校近くで開催されたキャンドルナイトのポスター制作で準グランプリに選ばれたことをきっかけに、自分のデザインに自信を持てるようになりました。
                  この経験を通じてデザインへの興味がさらに深まり、UI/UXデザインを学び始めました。
                  2年生ではHackUにデザイナーとして出場し、チームで最優秀賞を受賞しました。審査員からのフィードバックでも多くの称賛をいただき、デザインに対する自信が一層強まりました。
                  UI/UXデザインを学び続けており、現在は新しくデザインシステムについて勉強中です。
                  <br />
                  より良いUI/UXデザインを作るために、ユーザーの目線に立ち、使いやすく余計な情報を省いたデザインを心がけています。
                  またそのデザインを同じUI/UXデザインを学んでいる友人や先生に見せフィードバックを頂き、改良を重ねています。
                  私はデザインの中でもメリハリや要素の配置が得意です。
                </p>
              </div>
              <div className={styles.detailChild}>
                <h3>coding</h3>
                <p>
                  コーディングは難しいことも多いですが、課題や制作を通して着実に成長してきました。
                  一時は周りと比べて自信を失いかけたこともありましたが、諦めずに自分のペースで学び続けた結果、ReactやNext.jsを使い一人でWebサイトやWebアプリを制作できるまでになりました。
                  現在はfirebaseやSQLを学び、データベースの知識も深めることを目標としています。
                  <br />
                  普段
                  <span>他の人が見てもわかりやすいコードを書くこと</span>
                  を心がけています。
                  そのために、コードが長くなった場合は後から探しやすいようにコメントを書いて分けたり、変数名や画像名をどれを指しているのか&quot;aboutTtl&quot;や&quot;logo_works.svg&quot;などと具体的に書くようにしています。
                </p>
              </div>
            </div>
            {/* 締めの3行 */}
            <p className={styles.summaryText}>
              デザインエンジニアを目指し、現在デザインとコーディングの両方を勉強しています。
              このスキルを活かし、仕事の場面ではデザイナーとエンジニアの架け橋となる役割を果たせます。また、仕事内容に応じてデザイナーやエンジニアとして柔軟に役割を切り替え、様々な場面で活躍できるのが強みだと考えています。
            </p>
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
                    onClick={(event) =>
                      awardLink(
                        event,
                        "https://npo.ecc.ac.jp/activities/index.php?c=topics_view&pk=1709003397&cn=8",
                        "2024年中崎町キャンドルナイト(済美冬まつり)"
                      )
                    }
                  >
                    2023年度 中崎町キャンドルナイト ポスター 準グランプリ受賞
                  </a>
                </li>
                <li>
                  <a
                    href="https://html5award.com/award2023"
                    onClick={(event) =>
                      awardLink(
                        event,
                        "https://html5award.com/award2023",
                        "2023年度 専門学校HTML5作品アワード"
                      )
                    }
                  >
                    2023年度 専門学校HTML5作品アワード 入選
                  </a>
                </li>
                <li>2023年度 +E展 コンセプト賞受賞</li>
                <li>
                  <a
                    href="https://hacku.yahoo.co.jp/hacku2024_tokyo2/"
                    onClick={(event) =>
                      awardLink(
                        event,
                        "https://hacku.yahoo.co.jp/hacku2024_tokyo2/",
                        "2024年度 Open Hack U 2024 TOKYO vol.2"
                      )
                    }
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
                株式会社カワッタデザインのインターンシップに1週間程参加させていただきました。
                デザインの基礎を１から丁寧に学び、また実際に企業の案件に携わってデザイン物を制作しました。
                その結果、デザインの知識が深まるとともにデザイナーの仕事の流れやコミュニケーションの大切さを学ぶことができ、
                とても貴重な経験となりました。
              </p>
            </div>
            {/* Webに興味を持つまで(history) */}
            <div className={styles.history}>
              <h3>専門学校に進学するまでの私のヒストリー☆</h3>
              <table>
                <tbody>
                  <tr>
                    <th>幼少期</th>
                    <td>
                      家にパソコンがあった影響で、よくパソコンゲームで遊んでいた。
                    </td>
                  </tr>
                  <tr>
                    <th>小中学生</th>
                    <td>
                      パソコンを使う授業が好きで、毎授業楽しみだった。
                      小学生の頃はパソコンサークル的なものにも入って、wordやpower
                      pointを使ってよくデザイン物を作っていた。
                      絵も描くことが好きで中学の頃は美術部に入っていた。
                    </td>
                  </tr>
                  <tr>
                    <th>高校</th>
                    <td>
                      パソコンに触れる機会が多いと思い、商業科の高校に進学。
                      多くの資格を取得する。
                      <br />
                      高校2年の終わり頃、私は進路に迷っていた。そんな時に何十もの大学や専門学校が集まる進路説明会に参加した。どこに行こうか学校一覧のカタログで探していた時に、webデザイナーと言う職種が目に留まった。パソコンも絵を書くことが好きな私には合っているかもと興味を持ち、Webデザインコースを目指す。
                    </td>
                  </tr>
                  {/* <tr>
                    <th>専門学校(現在)</th>
                    <td></td>
                  </tr> */}
                </tbody>
              </table>
            </div>
            {/* その他 */}
            <div className={styles.certification}>
              <h3>その他</h3>
              <p>
                商業科の高校に通っていたこともあり、多くの資格を取得しています。
                <br />
                自分の趣味である洋楽を楽しむため、またコードの理解を深めるために英語を勉強し続けています。
                現在はTOEIC600点台を目指して勉強中です。
              </p>
              <p>
                (全商簿記実務検定1級 / 全商英語検定1級 /
                全商ビジネス計算実務検定試験(電卓)1級 / 全商商業経済検定1級 /
                全商情報処理検定2級(プログラミング部門) / 色彩検定3級 取得済)
              </p>
            </div>
          </section>
          {/* 私の好きなもの */}
          <section className={styles.myFav}>
            <h2>my favorite</h2>
            <div className={styles.childWrap}>
              <div className={styles.favChild}>
                <Image src={ramen} alt="ラーメンのアイコン" />
                <p>
                  <span>好きな食べ物:ラーメン</span>
                  <br />
                  週に一度必ず食べています。好きなラーメンは醤油豚骨です。
                </p>
              </div>
              <div className={styles.favChild}>
                <Image src={paint} alt="パレットのアイコン" />
                <p>
                  <span>特技:色鉛筆画(特に人物画)</span>
                  <br />
                  時間があるときに好きなアーティストの絵を描いています。
                </p>
              </div>
              <div className={styles.favChild}>
                <Image src={music} alt="音楽のアイコン" />
                <p>
                  <span>趣味①:洋楽を聴くこと</span>
                  <br />
                  私の生きがいです。毎朝洋楽を聴いて一日をスタートしています。
                </p>
              </div>
              <div className={styles.favChild}>
                <Image src={movie} alt="映画のアイコン" />
                <p>
                  <span>趣味②:映画・ドラマ鑑賞</span>
                  <br />
                  時間があるときにNetflixやDisney+で海外作品を観ています。
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
