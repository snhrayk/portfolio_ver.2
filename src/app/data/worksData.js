const worksData = [
  // テンプレート
  // {
  //   id: 0,
  //   title: "作品名",
  //   date: "制作時期",
  //   img: "/img/",
  //   tag: [
  //     "受賞作品",
  //     "個人制作",
  //     "Webデザイン",
  //     "グラフィックデザイン",
  //     "コーディング",
  //   ],
  //   period: "制作期間",
  //   catchCopy: "キャッチコピー",
  //   // 使用言語
  //   codingIcons: [
  //     "/img/",
  //   ],
  //   designIcons: [""],
  //   // 画像
  //   slideImg: ["/img/"],
  //   // URL
  //   workUrl: "",
  //   githubUrl: "",
  //   // 作品概要(作品の説明、課題、解決策)
  //   workSummary:"",
  //   // こだわりポイント
  //   point: "",
  //   // 学び
  //   learned: "",
  //   // 反省点
  //   reflection: "",
  //   // その他
  //   other: "",
  // },
  // テンプレート終わり
  {
    id: 1,
    title: "herstel",
    date: "1年前期",
    img: "/img/herstel_heading.webp",
    tag: [
      "受賞作品",
      "個人制作",
      "Webデザイン",
      "グラフィックデザイン",
      "コーディング",
    ],
    period: "2023.04~2023.08",
    catchCopy: "紅茶定期便サービスのWebサイト",
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
    // 作品概要(作品の説明、課題、解決策)
    workSummary:
      "コーヒーor紅茶となにかをかけ合わせて制作する授業課題でした。私は紅茶とサブスクリプションサービスを組み合わせたサービスを考え、Webサイトを制作しました。",
    // こだわりポイント
    point: "",
    // 学び
    learned: "",
    // 反省点
    reflection: "",
    // その他
    other: "",
  },
  // florita
  {
    id: 2,
    title: "florita",
    catchCopy: "女性に向けた服・コスメのランダムショッピング通販サイト",
    date: "1年夏期",
    img: "/img/florita_heading.webp",
    tag: ["チーム制作", "Webデザイン", "ui/uxデザイン", "コーディング"],
    period: "2023.09 (２週間)",
    // 使用言語
    codingIcons: ["/img/html_works.svg", "/img/sass_works.svg"],
    designIcons: ["figma", "Xd", "Ai"],
    // スライド画像
    slideImg: ["/img/florita_heading.webp"],
    // URL
    workUrl: "",
    githubUrl: "https://github.com/SuzakiKaito/florita",
    // 作品概要(作品の説明、課題、解決策)
    workSummary: "『女性が買い物中に学ぶ』をテーマに2週間で制作しました。",
    // こだわりポイント
    point: "",
    // 学び
    learned: "",
    // 反省点
    reflection: "",
    // その他
    other: "",
  },
  // faveTag
  {
    id: 3,
    title: "fave#",
    catchCopy: "洋楽好きに向けたコミュニティWebアプリ",
    date: "1年後期",
    img: "/img/faveTag_heading.webp",
    tag: ["個人制作", "ui/uxデザイン", "グラフィックデザイン", "コーディング"],
    period: "制作期間",
    // 使用言語
    codingIcons: [
      "/img/html_works.svg",
      "/img/css_works.svg",
      "/img/js_works.svg",
    ],
    designIcons: ["figma", "Ai", "Ps"],
    // 画像
    slideImg: ["/img/faveTag_heading.webp"],
    // URL
    workUrl: "",
    githubUrl: "https://github.com/snhrayk/CW2-faveTag",
    // 作品概要(作品の説明、課題、解決策)
    workSummary:
      "自分の好きな洋楽アーティストごとに作られたコミュニティスペースで、他のユーザーと交流できます。",
    // こだわりポイント
    point: "",
    // 学び
    learned: "",
    // 反省点
    reflection: "",
    // その他
    other: "",
  },
  // ゆるめ旅
  {
    id: 4,
    title: "ゆるめ旅",
    catchCopy: "あえて遠回りをして目的地に向かうルート案内アプリ",
    date: "1年後期",
    img: "/img/yurumetabi_heading.webp",
    tag: [
      "受賞作品",
      "チーム制作",
      "ui/uxデザイン",
      "グラフィックデザイン",
      "コーディング",
    ],
    period: "制作期間",
    // 使用言語
    codingIcons: ["/img/nextjs_works.svg", "/img/firebase_works.svg"],
    designIcons: ["figma", "Ai"],
    // 画像
    slideImg: ["/img/yurumetabi_heading.webp"],
    // URL
    workUrl: "https://yurumetabi.vercel.app/",
    githubUrl: "https://github.com/kusanohatsumi/yurumetabi",
    // 作品概要(作品の説明、課題、解決策)
    workSummary:
      "遠回りをして目的地の着くルート案内機能と見つけたスポットを撮影して共有できるスポット共有機能を合わせた新しいルート案内アプリです。",
    // こだわりポイント
    point: "",
    // 学び
    learned: "",
    // 反省点
    reflection: "",
    // その他
    other: "",
  },
  // キャンドルナイトポスター
  {
    id: 5,
    title: "キャンドルナイトポスター",
    catchCopy: "毎年中崎町で開催されるキャンドルナイトのポスター",
    date: "1年後期",
    img: "/img/candleNight_heading.webp",
    tag: ["受賞作品", "グラフィックデザイン"],
    period: "2023.10~2023.11",
    // 使用言語
    // コーディングなし
    codingIcons: ["/img/"],
    designIcons: ["Ai", "Ps"],
    // 画像
    slideImg: ["/img/candleNight_heading.webp"],
    // URLなし
    workUrl: "",
    githubUrl: "",
    // 作品概要(作品の説明、課題、解決策)
    workSummary: "",
    // こだわりポイント
    point: "",
    // 学び
    learned: "",
    // 反省点
    reflection: "",
    // その他
    other: "",
  },
  // ポートフォリオ ver.1
  {
    id: 6,
    title: "ポートフォリオ ver.1",
    catchCopy: "初めて作成したポートフォリオサイト",
    date: "1年春期",
    img: "/img/portfolioVer1_heading.webp",
    tag: ["Webデザイン", "コーディング"],
    period: "2024.02~2024.03",
    // 使用言語
    codingIcons: ["/img/react_works.svg", "/img/sass_works.svg"],
    designIcons: ["figma"],
    // 画像
    slideImg: ["/img/portfolioVer1_heading.webp"],
    // URL
    workUrl: "",
    githubUrl: "",
    // 作品概要(作品の説明、課題、解決策)
    workSummary: "",
    // こだわりポイント
    point: "昔のパソコンのようなデザインになっています。",
    // 学び
    learned: "",
    // 反省点
    reflection: "",
    // その他
    other: "",
  },
  // 歴てく
  {
    id: 8,
    title: "歴てく",
    catchCopy: "",
    date: "2年前期",
    img: "/img/rekiteku_heading.webp",
    tag: ["チーム制作", "Webデザイン", "コーディング"],
    period: "2024.04~2024.07",
    // 使用言語
    codingIcons: ["/img/react_works.svg", "/img/firebase_works.svg"],
    designIcons: ["figma", "Ai"],
    // 画像
    slideImg: ["/img/rekiteku_heading.webp"],
    // URL
    workUrl: "https://reki-teku.vercel.app/",
    githubUrl: "https://github.com/demonic29/team_reactors",
    // 作品概要(作品の説明、課題、解決策)
    workSummary: "",
    // こだわりポイント
    point: "",
    // 学び
    learned: "",
    // 反省点
    reflection: "",
    // その他
    other: "",
  },
  // Dental Guide
  {
    id: 9,
    title: "Dental Guide",
    catchCopy: "準備中です",
    date: "2年前期",
    img: "/img/noImg_works.png",
    tag: ["個人制作", "ui/uxデザイン", "コーディング"],
    period: "2024.04~2024.07",
    // 使用言語
    codingIcons: ["/img/nextjs_works.svg", "/img/firebase_works.svg"],
    designIcons: ["figma", "Ai"],
    // 画像
    slideImg: ["/img/"],
    // URL
    workUrl: "https://dental-guide.vercel.app/",
    githubUrl: "https://github.com/snhrayk/CW3-DentalGuide",
    // 作品概要(作品の説明、課題、解決策)
    workSummary: "",
    // こだわりポイント
    point: "",
    // 学び
    learned: "",
    // 反省点
    reflection: "",
    // その他
    other: "",
  },
  // くろのす(現在はRide Clock)
  {
    id: 10,
    title: "Ride Clock",
    catchCopy: "準備中です",
    date: "2年夏期",
    img: "/img/noImg_works.png",
    tag: ["受賞作品", "チーム制作", "ui/uxデザイン"],
    period: "制作期間",
    // 使用言語
    codingIcons: ["/img/"],
    designIcons: ["figma", "Ai"],
    // 画像
    slideImg: ["/img/"],
    // URL
    workUrl: "",
    githubUrl: "",
    // 作品概要(作品の説明、課題、解決策)
    workSummary: "",
    // こだわりポイント
    point: "",
    // 学び
    learned: "",
    // 反省点
    reflection: "",
    // その他
    other: "",
  },
  // えほんポケット
  {
    id: 11,
    title: "えほんポケット",
    catchCopy: "現在制作中です",
    date: "2年後期",
    img: "/img/noImg_works.png",
    tag: ["チーム制作"],
    period: "制作期間",
    // 使用言語
    codingIcons: ["/img/"],
    designIcons: [""],
    // 画像
    slideImg: ["/img/"],
    // URL
    workUrl: "",
    githubUrl: "",
    // 作品概要(作品の説明、課題、解決策)
    workSummary: "",
    // こだわりポイント
    point: "",
    // 学び
    learned: "",
    // 反省点
    reflection: "",
    // その他
    other: "",
  },
  // ぐるめ旦過
  {
    id: 12,
    title: "ぐるめ旦過",
    catchCopy: "現在制作中です",
    date: "2年後期",
    img: "/img/noImg_works.png",
    tag: ["個人制作"],
    period: "制作期間",
    // 使用言語
    codingIcons: ["/img/"],
    designIcons: [""],
    // 画像
    slideImg: ["/img/"],
    // URL
    workUrl: "",
    githubUrl: "",
    // 作品概要(作品の説明、課題、解決策)
    workSummary: "",
    // こだわりポイント
    point: "",
    // 学び
    learned: "",
    // 反省点
    reflection: "",
    // その他
    other: "",
  },
  // ECCダンジョン
  {
    id: 13,
    title: "ECCダンジョン",
    catchCopy: "現在制作中です",
    date: "2年12月",
    img: "/img/noImg_works.png",
    tag: ["チーム制作"],
    period: "制作期間",
    // 使用言語
    codingIcons: ["/img/"],
    designIcons: [""],
    // 画像
    slideImg: ["/img/"],
    // URL
    workUrl: "",
    githubUrl: "",
    // 作品概要(作品の説明、課題、解決策)
    workSummary: "",
    // こだわりポイント
    point: "",
    // 学び
    learned: "",
    // 反省点
    reflection: "",
    // その他
    other: "",
  },
  // ポートフォリオ ver.2
  {
    id: 14,
    title: "ポートフォリオ ver.2",
    catchCopy: "コードを簡略化して、ui/uxによりこだわったポートフォリオ",
    date: "2年後期",
    img: "/img/noImg_works.png",
    tag: ["その他"],
    period: "制作期間",
    // 使用言語
    codingIcons: ["/img/"],
    designIcons: [""],
    // 画像
    slideImg: ["/img/"],
    // URL
    workUrl: "",
    githubUrl: "",
    // 作品概要(作品の説明、課題、解決策)
    workSummary: "",
    // こだわりポイント
    point: "",
    // 学び
    learned: "",
    // 反省点
    reflection: "",
    // その他
    other: "",
  },
];

export default worksData;
