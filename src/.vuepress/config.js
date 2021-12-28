module.exports = {
    // site config
    lang: 'ja-JP',
    title: 'Discord 非公式日本語ドキュメント',
    description: 'This is my first VuePress site',
    dest: 'docs/',
    base: '/test_vuepress/',
  
    // theme and its config
    theme: '@vuepress/theme-default',
    themeConfig: {
      logo: 'https://vuejs.org/images/logo.png',
      navbar: [
        // NavbarItem
        {
          text: '初心者ガイド',
          link: '/basic_guide/',
        },
        {
          text: 'サーバーの運用',
          link: '/server_guide/',
        },
        {
          text: '各種設定',
          link: '/listofsettings/',
        },
      ]
    },
  }
  