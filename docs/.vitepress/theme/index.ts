import DefaultTheme from 'vitepress/theme'
// Import your custom CSS
import './style.scss' 

import vitepressNprogress from 'vitepress-plugin-nprogress'
import 'vitepress-plugin-nprogress/lib/css/index.css'

import { 
  NolebaseGitChangelogPlugin
} from '@nolebase/vitepress-plugin-git-changelog/client'

import '@nolebase/vitepress-plugin-git-changelog/client/style.css'

export default {
  ...DefaultTheme,
  enhanceApp: ({ app }) => {
    vitepressNprogress({ app })
    app.use(NolebaseGitChangelogPlugin)
  }
}