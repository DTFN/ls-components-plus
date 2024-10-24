import { defineConfig, loadEnv } from 'vitepress';
import { resolve } from 'path';
import dayjs from 'dayjs';
import nav from './nav/index';
import sidebar from './sidebar/index';
import head from './head/index';
import { wrapperEnv } from '../build/getEnv';
import { createVitePlugins } from '../build/plugins';

const root = process.cwd();
const NODE_ENV: any = process.env.NODE_ENV;
const env = loadEnv(NODE_ENV, root);
const viteEnv = wrapperEnv(env);
const plugins: any = createVitePlugins(viteEnv);

const __APP_INFO__ = {
  lastBuildTime: dayjs().format('YYYY-MM-DD HH:mm:ss')
};

// https://vitepress.dev/reference/site-config
export default defineConfig({
  outDir: resolve('./dist/'),
  title: '前端组件库（Vue3）',
  description: '前端组件库（Vue3）及公共方法使用手册',
  // cleanUrls: true,
  lastUpdated: true,

  lang: 'cn-ZH',

  head,

  markdown: {
    lineNumbers: true,
    codeTransformers: [
      {
        postprocess(code) {
          return code.replace(/\[\!\!code/g, '[!code')
        }
      }
    ],
    image: {
      lazyLoading: true
    },
    config: (md) => {
      md.renderer.rules.heading_close = (tokens, idx, options, env, slf) => {
          let htmlResult = slf.renderToken(tokens, idx, options);
          if (tokens[idx].tag === 'h1') htmlResult += `<ArticleMetadata />`; 
          return htmlResult;
      }
    },
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    logo: '/logo.png',

    lastUpdated: {
      text: '上次更新时间',
      formatOptions: {
        dateStyle: 'short', // 可选值full、long、medium、short
        timeStyle: 'medium' // 可选值full、long、medium、short
      },
    },

    siteTitle: false,

    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                },
              },
            },
          },
        },
      },
    },

    nav,

    sidebar,

    footer: {
      message: '零数科技前端团队',
      copyright: '© 2024 lingshu Tech Ltd. All Rights Reserved'
    },
    sidebarMenuLabel: '目录',

    returnToTopLabel: '返回顶部',

    outline: {
      level: [2, 3],
      label: '当前页大纲'
    },

    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
  },

  vite: {
    plugins: [plugins],
    resolve: {
      alias: {
        '@docs': resolve(__dirname, '../docs'),
        '@exp': resolve(__dirname, '../examples'),
      }
    },
    esbuild: {
      pure: ['console.log'],
      drop: ['debugger']
    },
    define: {
      __APP_INFO__: JSON.stringify(__APP_INFO__)
    },
    server: {
      host: '0.0.0.0',
      port: 9093,
    },
    ssr: {
      noExternal: [
        'vue3-print-nb',
        'element-plus',
        '@wangeditor/editor',
        '@wangeditor/editor-for-vue',
        '@lingshugroup/web-plus'
      ]
    }
  }
})
