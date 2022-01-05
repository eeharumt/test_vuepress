module.exports = {
    // site config
    lang: 'ja-JP',
    title: 'Discord 非公式日本語ドキュメント',
    description: 'This is my first VuePress site',
    dest: 'docs/',
    base: '/unofficial-discord-jpdoc/',
  
    // theme and its config
    theme: '@vuepress/theme-default',
    themeConfig: {
      logo: '/assets/img/Discord-Logo-Color.png',
      navbar: [
        // NavbarItem
        {
          text: '基本操作',
          link: '/basic_guide/',
        },
        {
          text: 'サーバー設定',
          link: '/server_guide/',
        },
        {
          text: 'ユーザー設定',
          link: '/listofsettings/',
        },
      ]
    },
    plugins: [
      [
        '@vuepress/google-analytics',
        {
          ga: 'G-D3X9922XZE', // 自身のトラッキングIDを設定
        },
      ],
    ],
  }
  