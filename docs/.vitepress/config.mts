import { defineConfig } from 'vitepress'


// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/Formida-Project/',
  title: "Formida Project",
  description: "An Index For You're Love in Technology",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    logo: '/test.png',

    nav: [
      { text: 'Home', link: '/'},
      { text: 'About Formida', link: '/about' }
    ],

    sidebar: [
      {
        text: 'Complete Index',
        items: [
          { text: 'Begining Guide', link: '/Begining' },
        ]
      },

      {
        text: 'Other',
        items: [
          { text: 'About Formida', link: '/About' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    footer: {
      message: 'Made with ❤️ by Tarf',
      copyright: '© 2025'
      
    }
  }
}
)