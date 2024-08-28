import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'LS Web Components',
  description: 'A VitePress Site',
  cleanUrls: true,
  lastUpdated: true,

  lang: 'cn-ZH',

  head: [['link', { rel: 'icon', href: '/favicon.png' }]],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    logo: '/logo.png',
    siteTitle: false,

    search: {
      provider: 'local',
      // options: {
      //   locales: {
      //     placeholder: '搜索'
      //   }
      // }
    },

    nav: [
      { text: '指南', link: '/docs/guide/guide1' },
      { text: '组件', link: '/docs/component/component1' }
    ],

    sidebar: {
      '/docs/guide': [
        {
          text: '指南',
          items: [
            { text: '介绍', link: '/docs/guide/guide1' },
            { text: '快速开始', link: '/docs/guide/guide2' },
            { text: '页面3', link: '/docs/guide/guide3' },
          ]
        }
      ],
      '/docs/component': [
        {
          text: 'Basic 基础组件',
          items: [
            { text: 'Button 按钮', link: '/docs/component/component1' }
          ]
        },
        {
          text: 'Form 表单组件',
          items: [
            { text: 'Form 表单', link: '/docs/component/component2' },
            { text: 'Upload 上传', link: '/docs/component/component3' },
          ]
        },
        {
          text: 'Data 数据展示',
          items: [
            { text: 'Table 表格', link: '/docs/component/component4' },
            { text: 'Detail 详情', link: '/docs/component/component5' },
          ]
        }
      ]
    },

    outline: {
      label: '页面导航'
    }

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  }
})
