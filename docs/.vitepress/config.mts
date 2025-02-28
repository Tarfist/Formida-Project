import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Formida Project",
  description: "An Index For You're Love in Technology",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About Formida', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Complete Index',
        items: [
          { text: 'Begining Guide', link: '/Begining' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
