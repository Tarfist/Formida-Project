import { defineConfig } from 'vitepress'
import { 
  GitChangelog
, 
  GitChangelogMarkdownSection
, 
} from '@nolebase/vitepress-plugin-git-changelog/vite'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  vite
  : { 
      plugins
  : [ 
        GitChangelog
  ({ 
          // Fill in your repository URL here
          repoURL
  : () => 'https://github.com/nolebase/integrations', 
        }), 
        GitChangelogMarkdownSection
  (), 
      ],
    }, 
  base: '/Formida-Project/',
  title: "Formida Project",
  description: "An Index For You're Love in Technology",
  lastUpdated: true,

  head: [['link', { rel: 'icon', href: '/Formida-Project/favicon.ico' }]],

  themeConfig: {
    
    editLink: {
      pattern: 'https://github.com/Tarfist/Formida-Project/edit/main/docs/:path'
    },

      logo: '/test.png',

      search: {
        provider: 'local'
      },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'About Formida', link: '/About' },
    ],

    sidebar: [
      {
        text: '🌟 Formida Index', 
        items: [
          { text: 'Begining Guide', link: '/Begining' },
          { text: 'Honorable Mentions', link: '/Honorable' },
          { text: 'About Formida', link: '/About' }, 
        ]
      },

      {
        text: '🕹️ Console Specific',
        collapsed: false,
        items: [
          { text: 'Playstation 4', link: '/Beginning' },
          { text: 'Playstation 3', link: '/Beginning' },
          { text: 'Xbox 360', link: '/Beginning' },
          { text: 'Xbox One', link: '/Beginning' },
          { text: 'Switch', link: '/Beginning' },
        ]
      },
      {
        text: '🎮 Gaming Specific',
        collapsed: false,
        items: [
          { text: 'Minecraft Legacy'},
          { text: 'Minecraft Bedrock', link: '/Beginning' },
          { text: 'Roblox', link: '/Beginning' },
          { text: 'Among Us', link: '/Beginning' },
        ]
      },

      {
        text: '📱 mobile Specific',
        collapsed: false,
        items: [
          { text: 'Android Exploit', link: '/Beginning' },
          { text: 'IOS Exploit', link: '/Beginning' },
        ]
      },

      {
        text: '⚠️ Precautions',
        items: [
          { text: 'Before Starting', link: '/' },

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
      message: 'Made with ❤️ by Tarf, For you.',
      copyright: 'GNU License © 2025'
      
    }
  }
}
)
