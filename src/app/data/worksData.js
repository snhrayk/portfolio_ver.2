const worksData = [
  // herstel
  {
    id: 1,
    title: "herstel",
    date: "1年前期",
    img: "/img/herstel_heading.webp",
    tag: ["受賞作品", "個人制作"],
    id: 1,
    period: "2023.04~2023.08",
    explain:
      "入学してから初めての個人制作。今子育てに奮闘中の主婦の方に向けた紅茶定期便サービス。子育ての疲れに効果的な紅茶をご用意しております。",
    // 使用言語
    codingIcons: [
      "/img/html_works.svg",
      "/img/css_works.svg",
      "/img/js_works.svg",
    ],
    designIcons: ["Ai", "Ps", "Xd"],
    // 画像
    slideImg: ["/img/herstel_heading.webp"],
    // URL
    workUrl: "https://click.ecc.ac.jp/ecc/creator/sakuhin/2023/cw1/wd1a04/",
    githubUrl: "https://github.com/snhrayk/herstel",
  },
  // // florita
  // {
  //   id: 2,
  //   title: "florita",
  //   explain:
  //     "女性に向けた服・コスメのランダムショッピング通販アプリ。『女性が買い物中に学ぶ』をテーマに2週間で制作しました。",
  //   date: "1年夏期",
  //   img: "/img/florita_heading.webp",
  //   tag: ["チーム制作"],
  //   // 使用言語
  //   codingIcons: ["/img/html_works.svg", "/img/sass_works.svg"],
  //   designIcons: ["figma", "Ai", "Xd"],
  //   // スライド画像
  //   slideImg: [
  //     "/img/florita_heading.webp",
  //     "/img/florita_heading.webp",
  //     "/img/florita_heading.webp",
  //   ],
  //   awardImg: "",
  //   // URL
  //   workUrl: "https://snhrayk.github.io/herstel/",
  //   githubUrl: "https://github.com/snhrayk/herstel",
  // },
  // // // faveTag
  // {
  //   id: 3,
  //   title: "fave#",
  //   explain:
  //     "洋楽好きに向けたコミュニティWebアプリ。自分の好きな洋楽アーティストごとに作られたコミュニティスペースで、他のユーザーと交流できます。",
  //   date: "1年後期",
  //   img: "/img/faveTag_heading.webp",
  //   tag: ["個人制作"],
  // },
  // // // ゆるめ旅
  // {
  //   id: 4,
  //   title: "ゆるめ旅",
  //   explain:
  //     "遠回りをして目的地の着くルート案内機能と見つけたスポットを撮影して共有できるスポット共有機能を合わせた新しいルート案内アプリです。",
  //   date: "1年後期",
  //   img: "/img/yurumetabi_heading.webp",
  //   awardImg: "",
  //   tag: ["受賞作品", "チーム制作"],
  // },
  // // // キャンドルナイトポスター
  // {
  //   id: 5,
  //   title: "キャンドルナイトポスター",
  //   explain:
  //     "毎年中崎町で開催されるキャンドルナイト。そのイベントのポスターを制作しました。",
  //   date: "1年後期",
  //   img: "/img/candleNight_heading.webp",
  //   awardImg: "",
  //   tag: ["受賞作品", "その他"],
  // },
  // // // 名刺
  // {
  //   id: 6,
  //   title: "名刺",
  //   explain:
  //     "1年前期と1年後期に制作した名刺。デザインから印刷まで全て自分で行いました。",
  //   date: "1年",
  //   img: "/img/nameCard_heading.webp",
  //   tag: ["その他"],
  // },
  // // // ポートフォリオ ver.1
  // {
  //   id: 7,
  //   title: "ポートフォリオ ver.1",
  //   explain:
  //     "初めて作成したポートフォリオサイトです。昔のパソコンのようなデザインになっています。",
  //   date: "1年春期",
  //   img: "/img/portfolioVer1_heading.webp",
  //   tag: ["その他"],
  // },
  // // // 歴てく
  // {
  //   id: 8,
  //   title: "歴てく",
  //   explain: "準備中です",
  //   date: "2年前期",
  //   img: "/img/noImg_works.png",
  //   tag: ["チーム制作"],
  // },
  // // // Dental Guide
  // {
  //   id: 9,
  //   title: "Dental Guide",
  //   explain: "準備中です",
  //   date: "2年前期",
  //   img: "/img/noImg_works.png",
  //   tag: ["個人制作"],
  // },
  // // // くろのす(現在はRide Clock)
  // {
  //   id: 10,
  //   title: "くろのす(現在はRide Clock)",
  //   explain: "準備中です",
  //   date: "2年夏期",
  //   img: "/img/noImg_works.png",
  //   awardImg: "",
  //   tag: ["受賞作品", "チーム制作"],
  // },
  // // // えほんポケット
  // {
  //   id: 11,
  //   title: "えほんポケット",
  //   explain: "現在制作中です",
  //   date: "2年後期",
  //   img: "/img/noImg_works.png",
  //   tag: ["チーム制作"],
  // },
  // // // ぐるめ旦過
  // {
  //   id: 12,
  //   title: "ぐるめ旦過",
  //   explain: "現在制作中です",
  //   date: "2年後期",
  //   img: "/img/noImg_works.png",
  //   tag: ["個人制作"],
  // },
  // // // ECCダンジョン
  // {
  //   id: 13,
  //   title: "ECCダンジョン",
  //   explain: "現在制作中です",
  //   date: "2年12月",
  //   img: "/img/noImg_works.png",
  //   tag: ["チーム制作"],
  // },
  // // // ポートフォリオ ver.2
  // {
  //   id: 14,
  //   title: "ポートフォリオ ver.2",
  //   explain: "現在制作中です",
  //   date: "2年後期",
  //   img: "/img/noImg_works.png",
  //   tag: ["その他"],
  // },
];

export default worksData;
