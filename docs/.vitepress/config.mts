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
      { text: 'Home', link: '/' },
      { text: 'About Formida', link: '/About' },
    ]
    ,

    sidebar: [
      {
        text: '⭐ Formida Index',
        items: [
          { text: 'Begining Guide', link: '/Begining' },
          { text: 'About Formida', link: '/About' },
        ]
      },

      {
        text: '🕹️ Console Specific',
        items: [
          { text: 'Playstation 4', link: '/Beginning' },
          { text: 'Playstation 3', link: '/Beginning' },
          { text: 'Switch', link: '/Beginning' },
          { text: 'Xbox 360', link: '/Beginning' },
          { text: 'Xbox One', link: '/Beginning' },
        ]
      },

      {
        text: '🎮 Gaming Specific',
        items: [
          { text: 'Minecraft Legacy', link: '/Beginning' },
          { text: 'Minecraft Bedrock', link: '/Beginning' },
          { text: 'Roblox', link: '/Beginning' },
          { text: 'Among Us', link: '/Beginning' },
        ]
      },

      {
        text: '⚠️ Other Specific',
        items: [
          { text: 'Precautions', link: '/' },
        ]
      }
    ],
    

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Tarfist/Formida-Project' }
    ],

    footer: {
      message: 'Made with ❤️ by Tarf',
      copyright: 'GNU License © 2025'
      
    }
  }
}
)