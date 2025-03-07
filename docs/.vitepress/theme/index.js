// Import the default theme
import DefaultTheme from 'vitepress/theme'
// Import your custom CSS
import './style.scss' 

import vitepressNprogress from 'vitepress-plugin-nprogress'
import 'vitepress-plugin-nprogress/lib/css/index.css'


import './style.scss'

export default {
  ...DefaultTheme,
  enhanceApp: (ctx) => {
    vitepressNprogress(ctx)
  }
}