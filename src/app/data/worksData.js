const worksData = [
  // herstel(完了)
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
    codingIcons: ["/img/html_works.svg", "/img/css_works.svg"],
    designIcons: ["Ai", "Ps", "Xd"],
    // 画像
    slideImg: [
      "/img/herstel_heading.webp",
      "/img/herstel_works_contentsMap.png",
      "/img/herstel_works_logo.png",
      "/img/herstel_works_flyer.png",
      "/img/herstel_works_leaflet.png",
      "/img/herstel_works_set.png",
      "/img/herstel_works_package.webp",
    ],
    // URL
    type: "webサイト",
    workUrl: "https://click.ecc.ac.jp/ecc/creator/sakuhin/2023/cw1/wd1a04/",
    githubUrl: "https://github.com/snhrayk/herstel",
    // その他URL
    lpUrl: "無し",
    documentUrl: "無し",
    documentName: "",
    otherUrl: "無し",
    otherName: "",
    // 役割
    role: "企画・サイトデザイン・ロゴデザイン・グラフィックデザイン・コーディング・プレゼン",
    // 作品概要(作品の説明、課題、解決策)
    workSummary:
      "初めての個人制作。コーヒーor紅茶となにかをかけ合わせたものを制作する授業テーマでした。私は紅茶とサブスクリプションサービスを組み合わせたサービスを考え、日々の子育てで体力的・精神的な疲れを感じている主婦にターゲットを絞りました。紅茶のリラックス効果を使って、子育ての体力的精神的な疲れを軽減させる狙いです。",
    // 工夫点
    point:
      "サイトに取り掛かる前に、コンテンツマップ(2/7)で情報の洗い出しを行いました。そうすることでサイトの構成が明確になり、情報の優先順位がつけやすくなりました。また、ワイヤーフレームやカンプを作成する際の作業効率も上がりました。Webサイトやフライヤーを作成するだけでなく、よりイメージを具体的にするために紅茶が詰め合わされている箱のデザイン(6/7)や紅茶のパッケージ(コーヒーフレッシュのような形のものを想定)(7/7)も考えました。",
    // 反省点
    reflection:
      "初めての制作でまだ知識が乏しかったのと質よりも量に走ってしまったことにより、細かいところが甘いと感じます。アイコンの画質の粗さ、aタグの色設定、ページの余白など。また、実際にターゲットに当てはまる方に一人でもヒアリングして、内容をより深く理解してから制作に入るべきだったと反省しています。左上のロゴ(3/7)は情報量が多いため、もう少しシンプルにすることでロゴとしての認知度が上がると思いました。",
    // 振り返り
    review:
      "今見ると、改善点ばかりが目立ちますが、改善点が多いと感じるのは自分が成長した証拠だと思っております。herstelは授業で学んだhtmlやcssを初めてアウトプットした作品で、コーディングの楽しさを知るきっかけになりました。",
  },
  // // florita(LPの崩れが気になるため、修正完了までコメントアウト)
  // {
  //   id: 2,
  //   title: "florita",
  //   catchCopy: "女性に向けた服・コスメのランダムショッピング通販サイト",
  //   date: "1年夏期",
  //   img: "/img/florita_heading.webp",
  //   tag: ["チーム制作", "Webデザイン", "Ui/Uxデザイン", "コーディング"],
  //   period: "2023.09 (２週間)",
  //   // 使用言語
  //   codingIcons: ["/img/html_works.svg", "/img/sass_works.svg"],
  //   designIcons: ["figma", "Xd", "Ai"],
  //   // スライド画像
  //   slideImg: ["/img/florita_heading.webp"],
  //   // URL
  //   workUrl: "",
  //   githubUrl: "https://github.com/SuzakiKaito/florita",
  //   // 役割
  //   role: "企画・LPデザイン・企画書・プレゼン",
  //   // 作品概要(作品の説明、課題、解決策)
  //   workSummary:
  //     "初めてのチーム制作で先輩との合同チームでした。『女性が買い物中に学ぶ』をテーマに2週間で制作しました。ネット通販は「選択だらけで疲れる」という課題を解決させるために、ランダムで商品を表示することで、ユーザーが選択することを減らし、ストレス無く快適に買い物を楽しめるようにしました。ターゲットは女性の中でも、20~30代からで流行に敏感だけど仕事が忙しくてなかなかショッピングしに行く時間がとれない方を想定しました。",
  //   // 工夫点
  //   point: "",
  //   // 反省点
  //   reflection:
  //     "流れ見できるようなアプリは現在あるため、そのアプリとの差別化をもっと考えるべきでした。",
  //   // その他
  //   review:
  //     "LPについて、sassやfigmaの使い方、企画書の作り方など授業よりも先に学ぶことが多く、大変勉強になりました。",
  // },
  // faveTag(サイトのリンク以外は完了)
  {
    id: 3,
    title: "fave#",
    catchCopy: "洋楽好きに向けたコミュニティWebアプリ",
    date: "1年後期",
    img: "/img/faveTag_heading.webp",
    tag: ["個人制作", "Ui/Uxデザイン", "グラフィックデザイン", "コーディング"],
    period: "制作期間",
    // 使用言語
    codingIcons: [
      "/img/html_works.svg",
      "/img/sass_works.svg",
      "/img/js_works.svg",
    ],
    designIcons: ["figma", "Ai", "Ps"],
    // 画像
    slideImg: [
      "/img/faveTag_heading.webp",
      "/img/faveTag_works_analysis_1.png",
      "/img/faveTag_works_analysis_2.png",
      "/img/faveTag_works_analysis_3.png",
      "/img/faveTag_works_analysis_4.png",
      "/img/faveTag_works_solution.png",
      "/img/faveTag_works_howto.png",
      "/img/faveTag_works_function.png",
      "/img/faveTag_works_cognition.png",
      "/img/faveTag_works_cd.png",
      "/img/faveTag_works_sticker.png",
      "/img/faveTag_works_instagram.png",
      "/img/faveTag_works_logo.png",
      "/img/faveTag_works_design.png",
      "/img/faveTag_works_bonus.png",
    ],
    // URL
    type: "webアプリ",
    workUrl: "",
    githubUrl: "https://github.com/snhrayk/CW2-faveTag",
    // その他URL
    lpUrl: "無し",
    documentUrl: "無し",
    documentName: "",
    otherUrl: "無し",
    otherName: "",
    // 役割
    role: "企画・サイトデザイン・ロゴデザイン・グラフィックデザイン・コーディング・プレゼン",
    // 作品概要(作品の説明、課題、解決策)
    workSummary:
      "世の中を便利にするWebという授業テーマで、私は洋楽好きに向けたコミュニティWebアプリを制作しました。アーティスト情報の表示にはSpotify APIを使用していました(html,scss,jsを使用していたため、トークンを定期的に手動で取得し直していました)",
    // 工夫点
    point:
      "アーティスト(自分の好きなアーティスト)別、さらに投稿内容によってイベント・リリース・グッズ・その他と大きく分けられるため、情報に埋もれること無く自分が知りたい内容までたどり着きやすくなっています。前回の作品のロゴは情報量が多かったため、今回はシンプルなデザインにして汎用性の高いロゴに仕上げました(13/15~14/15)",
    // 反省点
    reflection:
      "デザインとコーディングが中途半端になり、作品のクオリティが低くなってしまったことです。1年の後期で初めて個人制作とチーム制作の掛け持ちを体験したため、全体の作業量が上手く把握しきれなかったことが原因だと思います。現在の配色は青~紫で統一されていて、洋楽好きと繋がれるワクワクさが感じられないため、海外のようなポップなカラーを取り入れた配色にするべきだったと今思います。",
    // 振り返り
    review:
      "個人制作とチーム制作との両立の失敗を通して、自分の力量を知りました。次の作品から、時間配分に気をつけタスクの細分化を行いました。すると、デザインやコーディングの時間を確保ができ、作品のクオリティも向上しました。",
  },
  // ゆるめ旅(完了)
  {
    id: 4,
    title: "ゆるめ旅",
    catchCopy: "目的地に世界1遅く到着するルート案内Webアプリ",
    date: "1年後期",
    img: "/img/yurumetabi_heading.webp",
    tag: ["受賞作品", "チーム制作", "Ui/Uxデザイン", "コーディング"],
    period: "制作期間",
    // 使用言語
    codingIcons: ["/img/nextjs_works.svg", "/img/firebase_works.svg"],
    designIcons: ["figma", "Ai"],
    // 画像
    slideImg: [
      "/img/yurumetabi_heading.webp",
      "/img/yurumetabi_works_concept.png",
      "/img/yurumetabi_works_analysis.png",
      "/img/yurumetabi_works_solution.png",
      "/img/yurumetabi_works_howto.png",
      "/img/yurumetabi_works_design.png",
      "/img/yurumetabi_works_cognition.png",
    ],
    // URL
    type: "webアプリ",
    workUrl: "https://yurumetabi.vercel.app/",
    githubUrl: "https://github.com/kusanohatsumi/yurumetabi",
    // その他URL
    lpUrl: "https://koudaihirata.github.io/yurumetabi-LP/",
    documentUrl: "無し",
    documentName: "",
    otherUrl: "無し",
    otherName: "",
    // 役割
    role: "企画・コーディング(マイページ)",
    // 作品概要(作品の説明、課題、解決策)
    workSummary:
      "html5アワードに応募し、入選した作品。旅行のマンネリ化と観光地が思っていたのと違うという課題を解決するために、あえて遠回りをさせて景色を楽しんだり寄り道しながら目的地へ向かう新しいルート案内アプリを制作しました。",
    // 工夫点
    point:
      "このチーム制作で初めて、nextjsとfirebaseを触りました。初めてで分からないことだらけでしたが先輩から丁寧に教えていただいたおかげで、なんとか形にすることができ、スキルも身につきました。",
    // 反省点
    reflection:
      "新しい技術を学びながらの制作だったため、私が担当の機能を完成させるまでに時間がかかってしまいました。その結果、作業がチーム制作に偏ってしまい、個人制作の作業時間が減ってしまいました。",
    // 振り返り
    review:
      "nextjsはhtml・css・jsと比べてコードの書き方がより複雑で、一時は挫折しかけましたが、諦めずに最後まで取り組みました。おかげで現在nextjsとfirebaseを使ったwebサイトやwebアプリを一人で制作できるところまで成長できています。",
  },
  // キャンドルナイトポスター(完了)
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
    type: "その他",
    workUrl: "",
    githubUrl: "",
    // その他URL
    lpUrl: "無し",
    documentUrl: "無し",
    documentName: "",
    otherUrl: "無し",
    otherName: "",
    // 役割
    role: "グラフィックデザイン",
    // 作品概要(作品の説明、課題、解決策)
    workSummary:
      "大阪市北区中崎町で毎年開催されるキャンドルナイト。第13回のポスターを制作し、ありがたいことに準グランプリをいただきました。",
    // 工夫点
    point:
      "キャンドルの暖かさではなくキャンドルがつなぐ人々の暖かさも伝わるように、人から人へキャンドルを渡している写真を使用しました。ポスター下半分にはグラデーションを使用しており、写真に負けること無く文字が読める様になっています。",
    // 反省点
    reflection:
      "キャンドルナイトに訪れる方の立場になって内容の優先順位を考えたとき、クレジット部分は一番優先順位が低いと感じ文字を小さくしてメリハリを付けました。ですが今画像で見た時に何が書かれているのかわからないくらい文字が読めないため、もう少し文字を大きくするべきだったと思いました。",
    // 振り返り
    review:
      "私が作成したポスターがフライヤーとなって、中崎町全体に貼られていたり配布されていたりするのを見たとき、やはり大変嬉しい気持ちになりました。また、準グランプリをいただいたことで、自分のデザイン力に自信を持つことができ、以降デザインするとき前向きに取り組むことができました。",
  },
  // ポートフォリオ ver.1(完了)
  {
    id: 6,
    title: "ポートフォリオ ver.1",
    catchCopy: "初めて作成したポートフォリオサイト",
    date: "1年春期",
    img: "/img/portfolioVer1_heading.webp",
    tag: ["Webデザイン", "コーディング"],
    period: "2024.02~2024.03(1ヶ月半)",
    // 使用言語
    codingIcons: ["/img/react_works.svg", "/img/sass_works.svg"],
    designIcons: ["figma", "Ai"],
    // 画像
    slideImg: ["/img/portfolioVer1_heading.webp"],
    // URL
    type: "webサイト",
    workUrl: "https://spic-port-folio.vercel.app/",
    githubUrl: "https://github.com/snhrayk/portfolio",
    // その他URL
    lpUrl: "無し",
    documentUrl: "無し",
    documentName: "",
    otherUrl: "無し",
    otherName: "",
    // 役割
    role: "サイトデザイン・コーディング",
    // 作品概要(作品の説明、課題、解決策)
    workSummary:
      "レトロなパソコン画面風のデザイン。y2kデザイン、海外ぽさを感じるポップなカラーを使用することで、洋楽を通して海外風を好きになった私の個性を表現しています。",
    // 工夫点
    point:
      "レトロなパソコンを感じられるように、ビット調のアイコンやフォントを使用しています。このフォントを全ての文字に適用してしまうと読みづらくなってしまうため、シンプルで読みやすいOsakaフォントも使用しています。",
    // 反省点
    reflection:
      "企業の方がこのポートフォリオサイトを見た際に、私がどういう考えを持った人間なのかという必要な情報が少ないことが大きな反省点です。また、画像サイズが大きく読み込みに時間がかかってしまうことや、作品ごとにファイルを作成したためコード量が多いことも気になりました。そのため、ポートフォリオver.2ではその反省を活かし改善しています。",
    // 振り返り
    review:
      "まだ使い慣れていないreactを使い一人でサイトを作りきったため、コーディングスキルが上がり自分のコーディング力に自信が持てました。",
  },

  // 歴てく(一旦完了)
  {
    id: 8,
    title: "歴てく",
    catchCopy: "初めてクライアントの方から依頼を受けて制作したWebサイト",
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
    type: "webサイト",
    workUrl: "https://reki-teku.vercel.app/",
    githubUrl: "https://github.com/demonic29/team_reactors",
    // その他URL
    lpUrl: "無し",
    documentUrl: "/img/rekiteku_works_proposal.pdf",
    documentName: "仕様書",
    otherUrl: "https://reki-teku.vercel.app/login",
    otherName: "管理者画面",
    // 役割
    role: "企画・サイトデザイン(チーム全員で)・ロゴデザイン・コーディング(私達について・管理者のログイン画面)・仕様書作成・プレゼン",
    // 作品概要(作品の説明、課題、解決策)
    workSummary:
      "クライアントの方からの依頼で、福岡県の歴史スポットを回るツアーを提案するサイトを制作しました(授業課題)。紹介する歴史スポットの中にはマイナーな場所もあり整備が行き届いていない場合があると考え、私のチームは体力面に配慮しながらも楽しめるものとなっています。",
    // 工夫点
    point:
      "ロゴは歴史の堅いイメージを払拭したいとのご要望を頂き、全体的に丸みをもたらしています。書道は昔ながらの日本の文化で歴史を感じれるものの一つだと思い、歴てくの文字は書道の行書のようなデザインになっています。また、クライアントの方が安心してご自身で操作できるように、管理者画面やgoogle my mapの仕様書を作成しました。",
    // 反省点
    reflection:
      "大きな反省点はありません。チームでコミュニケーションを取り合い、お互いの意見を尊重しながら制作を進めることができました。",
    // 振り返り
    review:
      "私のチームのWebサイトは残念ながら選ばれませんでしたが、私が作成したロゴやgoogle my mapの仕様書が採用されたため大変嬉しかったです。",
  },
  // Dental Guide(完了)
  {
    id: 9,
    title: "Dental Guide",
    catchCopy: "毎回正しい歯磨きができるWebアプリ",
    date: "2年前期",
    img: "/img/dentalGuide_heading.webp",
    tag: ["個人制作", "Ui/Uxデザイン", "コーディング"],
    period: "2024.04~2024.07",
    // 使用言語
    codingIcons: ["/img/nextjs_works.svg", "/img/firebase_works.svg"],
    designIcons: ["figma", "Ai"],
    // 画像
    slideImg: [
      "/img/dentalGuide_heading.webp",
      "/img/dentalGuide_works_concept.png",
      "/img/dentalGuide_works_analysis_1.png",
      "/img/dentalGuide_works_analysis_2.png",
      "/img/dentalGuide_works_solution.png",
      "/img/dentalGuide_works_howto.png",
      "/img/dentalGuide_works_pageIdea.svg",
      "/img/dentalGuide_works_function_1.png",
      "/img/dentalGuide_works_function_2.png",
      "/img/dentalGuide_works_revenue.png",
      "/img/dentalGuide_works_reward.png",
      "/img/dentalGuide_works_design.png",
    ],
    // URL
    type: "webアプリ",
    workUrl: "https://dental-guide.vercel.app/",
    githubUrl: "https://github.com/snhrayk/CW3-DentalGuide",
    // その他URL
    lpUrl: "無し",
    documentUrl: "無し",
    documentName: "",
    otherUrl: "無し",
    otherName: "",
    // 役割
    role: "企画・ui/uxデザイン・コーディング・プレゼン",
    // 作品概要(作品の説明、課題、解決策)
    workSummary:
      "私の歯磨きの仕方って正しいのかなと歯磨き中にふと思ったことがきっかけで、このWebアプリを制作しました。",
    // 工夫点
    point:
      "歯磨きは歯を綺麗に保つことで、清潔感を連想させることから、白を基調とし余計な装飾を省いたデザインにしました。またページ遷移やナビゲーションバーにアニメーションを使うことで、心地よい操作感を感じてもらえるようにしました。",
    // 反省点
    reflection:
      "apiの接続が上手くいかず、メイン機能の一部である音楽再生機能とニュース機能が実装できませんでした。また、ロゴをアプリデザインを行う前に作成してしまったことで、ロゴとアプリデザインの統一感がなくなってしまいました。",
    // 振り返り
    review:
      "メイン機能を実装しきれなかったことが残念ですが、デザインにはこだわり、ユーザーが使いやすいアプリを作ることができました。また、spotify apiにリベンジします。",
  },
  // Ride Clock(一旦完了反省点思い出したら追加)
  {
    id: 10,
    title: "Ride Clock",
    catchCopy: "電車の時刻表のUX向上に焦点を当てたウィジェット",
    date: "2年夏期",
    img: "/img/rideClock_heading.webp",
    tag: ["受賞作品", "チーム制作", "Ui/Uxデザイン"],
    period: "2024.08",
    // 使用言語
    codingIcons: ["/img/"],
    designIcons: ["figma", "Ai"],
    // 画像
    slideImg: ["/img/rideClock_heading.webp"],
    // URL
    type: "その他",
    workUrl: "",
    githubUrl: "",
    // その他URL
    lpUrl: "無し",
    documentUrl: "無し",
    documentName: "",
    otherUrl: "無し",
    otherName: "",
    // 役割
    role: "ui/uxデザイン・ロゴデザイン",
    // 作品概要(作品の説明、課題、解決策)
    workSummary:
      "Open Hack U 2024 TOKYO vol.2に出場し、最優秀賞を受賞した作品です。また、技育展2024でも決勝大会まで進出しました。ITコースの先輩3人とチームを組み、私はデザイナーとして参加しました。このウィジェットは電車の時刻表のUX向上に焦点を当て、通勤・通学者をターゲットにしています。",
    // 工夫点
    point:
      "アナログ時計のようなデザインにすることで、現在時刻から1時間以内までの発車時刻を直感的に把握できます。電車の種別(特急、快速、普通)ごとにメモリの色を変えているため、どの電車かが一目でわかります。",
    // 反省点
    reflection: "",
    // 振り返り
    review:
      "初めてのハッカソンでしたが、最優秀賞を受賞できたことで、自分のデザイン力に自信を持つことができました。また、技育展で他の出場した方々と交流することができ、新たな刺激を受けることができました。",
  },
  // えほんポケット(完了)
  {
    id: 11,
    title: "えほんポケット",
    catchCopy: "幼い頃に読んだ懐かしい絵本を探すためWebアプリ",
    date: "2年後期",
    img: "/img/ehonPocket_heading.webp",
    tag: ["チーム制作", "Ui/Uxデザイン", "コーディング"],
    period: "2024.10~2024.01",
    // 使用言語
    codingIcons: [
      "/img/nextjs_works.svg",
      "/img/sass_works.svg",
      "/img/firebase_works.svg",
    ],
    designIcons: ["figma", "Ai", "Ps"],
    // 画像
    slideImg: [
      "/img/ehonPocket_heading.webp",
      "/img/ehonPocket_works_concept.png",
      "/img/ehonPocket_works_effect.png",
      "/img/ehonPocket_works_analysis.png",
      "/img/ehonPocket_works_solution.png",
      "/img/ehonPocket_works_function.png",
      "/img/ehonPocket_works_design.png",
    ],
    // URL
    type: "webアプリ",
    workUrl: "https://2024-teampj-app.vercel.app/",
    githubUrl: "https://github.com/kmii12/2024-teampj",
    // その他URL
    lpUrl: "https://2024-teampj-lp.vercel.app/",
    documentUrl: "無し",
    documentName: "",
    otherUrl: "https://2024-teampj-data-form.vercel.app/",
    otherName: "絵本データ入力フォーム",
    // 役割
    role: "リーダー・企画・コーディング(リードエンジニア/検索画面・絵本データ入力フォーム)・プレゼン",
    // 作品概要(作品の説明、課題、解決策)
    workSummary:
      "Html5アワードに向けて3学年合同チームで制作した作品。リーダーとしてチームをまとめ制作を円滑に進めるために、報連相の徹底・チームメンバーの特性を把握しそれに応じたタスクの割り振りを行いました。",
    // 工夫点
    point:
      "メイン機能のユーザーの曖昧な記憶をもとに絵本を特定できる絞り込み検索。検索ロジックとデータ処理の効率化に注力しました。絞り込み検索では、質問ごとの選択肢を絵本データと関連付け、ユーザーの回答に応じて候補を絞り込みます。例えば、「日本」を選択すると回答に「location_japan」という値を設定し、Firebaseに保存された絵本データの中から同じ値を持つものだけを表示させる仕組みです。さらに、Session Storageを活用して一時的にデータをローカルに保持することで、サーバーの負荷を軽減し、大量のデータにも対応できる動作を実現しました。絵本のapiが無かったため、代わりにfirebase firestore databeseを使用しました。後にエンジニア以外のメンバーが絵本のデータを追加できるように絵本データ入力フォームを作成しました。",
    // 反省点
    reflection:
      "絞り込み検索機能が目標日までに間に合わず、その後の作業に影響が出てしまいました。動作のイメージは明確でしたが、質問ごとの選択肢を絵本データを照らし合わし、一致した絵本データのみを表示させるコードの実装に苦戦しました。複雑な部分は、より余裕を持ったスケジュールで進めるべきだったと感じています。",
    // 振り返り
    review:
      "授業評価でAを貰い、チームも揉めること無く最後のプレゼンまで円滑に進めることができたためリーダーとしての役割を果たせたと思います。",
  },
  // ぐるめ旦過(完了)
  {
    id: 12,
    title: "ぐるめ旦過",
    catchCopy: "福岡県北九州市にある市場の紹介サイト",
    date: "2年後期",
    img: "/img/gurumeTanga_heading.webp",
    tag: ["個人制作", "Webデザイン", "コーディング"],
    period: "2024.10~2025.01",
    // 使用言語
    codingIcons: ["/img/nextjs_works.svg", "/img/firebase_works.svg"],
    designIcons: ["figma", "Ai", "Ps"],
    // 画像
    slideImg: ["/img/gurumeTanga_heading.webp"],
    // URL
    type: "webサイト",
    workUrl: "https://cw4-website.vercel.app/",
    githubUrl: "https://github.com/snhrayk/cw4",
    // その他URL
    lpUrl: "無し",
    documentUrl: "無し",
    documentName: "",
    otherUrl: "無し",
    otherName: "",
    // 役割
    role: "企画・サイトデザイン・ロゴデザイン・コーディング・プレゼン",
    // 作品概要(作品の説明、課題、解決策)
    workSummary:
      "地方紹介サイトを作る授業課題でした。祖母が住む市にある市場で、幼い頃何度か訪れたことがあったため、旦過市場を選びました。",
    // 工夫点
    point:
      "メイン機能であるグルメマップは、店の商品や予算、場所を知るだけではありません。気に入った店があればお気に入りに追加し、自分だけのマップを作成して予算も合計してくれるため実際に旦過市場に訪れる際に役立てることができます。",
    // 反省点
    reflection:
      "冬休みに実際にこの市場に行きリサーチをして、サイトに入れる情報をより具体的にする予定だったのですが、家の事情により行くことができませんでした。そのため、情報が具体的ではないところが多いまま制作を終えてしまいました。2年でmysqlを学び理解を深めるためにお店のデータベース用でmysqlを使おうとしたのですが、nextjsとmysqlの組み合わせにはバックエンド側でAPIの作成が必要だったため、代わりにfirebaseを使いました。",
    review:
      "情報不足なため、また旦過市場に行くタイミングがあれば、内容の追加と修正を行いたいと思います。",
  },
  // ECCダンジョン(準備中)
  // {
  //   id: 13,
  //   title: "ECCダンジョン",
  //   catchCopy: "オープンキャンパスイベント用のWebアプリ",
  //   date: "2年12月",
  //   // figmaのモックアップを載せる
  //   img: "/img/noImg_works.png",
  //   tag: ["チーム制作", "Ui/Uxデザイン"],
  //   period: "2024.12",
  //   // 使用言語
  //   codingIcons: ["/img/"],
  //   designIcons: ["figma", "Ai"],
  //   // 画像
  //   // 動作ごとのモックアップを載せる
  //   slideImg: ["/img/"],
  //   // URL
  //   type: "webアプリ",
  //   workUrl: "",
  //   githubUrl: "https://github.com/ECC-Dungeon",
  //   その他URL
  //   lpUrl: "無し",
  //   documentUrl: "無し",
  //   documentName: "",
  //   otherUrl: "無し",
  //   otherName: "",
  //   // 役割
  //   role: "ui/uxデザイン・ロゴデザイン",
  //   // 作品概要(作品の説明、課題、解決策)
  //   workSummary: "",
  //   // 工夫点
  //   point: "",
  //   // 反省点
  //   reflection: "",
  //   // 振り返り
  //   review: "",
  // },
  // ポートフォリオ ver.2
  {
    id: 14,
    title: "ポートフォリオ ver.2",
    catchCopy: "コードを簡略化して、ui/uxによりこだわったポートフォリオ",
    date: "2年後期",
    img: "/img/portfolioVer2_heading.webp",
    tag: ["Webデザイン", "コーディング"],
    period: "2024.12~2025.03",
    // 使用言語
    codingIcons: ["/img/nextjs_works.svg", "/img/sass_works.svg"],
    designIcons: ["figma", "Ai"],
    // 画像
    slideImg: ["/img/portfolioVer2_heading.webp"],
    // URL
    type: "webサイト",
    workUrl: "https://portfolio-ver-2-mu.vercel.app/",
    githubUrl: "https://github.com/snhrayk/portfolio_ver.2",
    // その他URL
    lpUrl: "無し",
    documentUrl: "無し",
    documentName: "",
    otherUrl: "無し",
    otherName: "",
    // 役割
    role: "サイトデザイン、ロゴデザイン、コーディング",
    // 作品概要(作品の説明、課題、解決策)
    workSummary: "",
    // 工夫点
    point: "",
    // 反省点
    reflection: "",
    // 振り返り
    review: "",
  },
  // Juice Timer(完了)
  {
    id: 15,
    title: "Juice Timer",
    catchCopy: "デザインエンジニアを意識しながら制作したタイマー",
    date: "2年後期",
    img: "/img/juiceTimer_heading.webp",
    tag: ["習作", "ui/uxデザイン", "デザインシステム", "コーディング"],
    period: "2024.10(1ヶ月)",
    // 使用言語
    codingIcons: ["/img/react_works.svg", "/img/css_works.svg"],
    designIcons: ["figma"],
    // 画像
    slideImg: [
      "/img/juiceTimer_heading.webp",
      "/img/juiceTimer_works_schedule.png",
      "/img/juiceTimer_works_designEngineer_1.png",
      "/img/juiceTimer_works_designEngineer_2.png",
      "/img/juiceTimer_works_designEngineer_3.png",
      "/img/juiceTimer_works_designEngineer_4.png",
      "/img/juiceTimer_works_designEngineer_5.png",
      "/img/juiceTimer_works_designSystem.webp",
    ],
    // URL
    type: "webアプリ",
    workUrl: "https://oct-web-training.vercel.app/",
    githubUrl: "https://github.com/snhrayk/Oct-WebTraining",
    // その他URL
    lpUrl: "無し",
    documentUrl: "無し",
    documentName: "",
    otherUrl: "無し",
    otherName: "",
    // 役割
    role: "ui/uxデザイン・コーディング・プレゼン",
    // 作品概要(作品の説明、課題、解決策)
    workSummary:
      "時間 に関するものを1ヶ月で制作する授業課題でした。ジュースを飲むと減っていく様子をタイマーに取り入れることで、時間の経過を視覚的に感じられ、またジュースが無くなるまでずっと見たくなるような面白さもあると考えたため、Juice Timerを制作しました。さらにデザインエンジニアへの理解を深めるために、ui/uxデザイン・デザインシステムの作成からコーディングまで行いました。",
    // 工夫点
    point:
      "波のsvgを2枚重ね、cssでアニメーションをつけることで、ジュースの滑らかさを表現しよりリアルで親しみやすいものにしました。時間が経過するごとにジュースが減っていくようにするためにジュースの高さを時間で割り算し、タイマーを実装しています。デザインシステムを作成し、デザインの統一感を持たせることで、デザインエンジニアとしてのスキルを身につけることができました。",
    // 反省点
    reflection:
      "モバイルシミュレーターを使用し実装を行っていたため、普通のブラウザで見ると波のアニメーションの速さが異なってしまいました。",
    // 振り返り
    review:
      "最後クラス内でプレゼンを行い、クラス評価で1位をいただきました。私は元々プレゼンが苦手だったため、自分に対して大きな成長を感じることができ大変うれしかったです。",
  },
];

export default worksData;
