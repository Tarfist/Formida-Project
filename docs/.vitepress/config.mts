import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/Formida-Project/',
  title: "Formida Project",
  description: "An Index For You're Love in Technology",
  lastUpdated: true,

  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
  ],

  themeConfig: {
    

      search: {
        provider: 'local'
      }
    ,

    logo: '/test.png',

    

    nav: [
      { text: 'Home', link: '/' },
      { text: 'About Formida', link: '/About' },
    ]
    ,

    sidebar: [
      {
        text: '📚 Formida Index', // Add emoji here
        items: [
          { text: 'Begining Guide', link: '/Begining' }, // Add emoji here
          { text: 'About Formida', link: '/About' }, // Add emoji here
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
        text: '📱 mobile Specific',
        items: [
          { text: 'Android Exploit', link: '/Beginning' },
          { text: 'IOS Exploit', link: '/Beginning' },
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
      { icon: 'github', link: 'https://github.com/Tarfist/Formida-Project' },
      { icon: 'bluesky', link: 'https://twitter.com/Tarfisthttps://bsky.app/profile/tarfz.bsky.social' },
      { icon: 'discord', link: 'https://discord.gg/9Qs9Ft ' },
      { icon: 'youtube', link: 'https://www.youtube.com/@tarfz' },
    ],

    footer: {
      message: 'Made with ❤️ by Tarf',
      copyright: 'GNU License © 2025'
      
    }
  }
}
)
