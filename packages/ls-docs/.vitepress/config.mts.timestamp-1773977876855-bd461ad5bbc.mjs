// .vitepress/config.mts
import { defineConfig, loadEnv } from "file:///D:/NpmPackages/ls-components-plus/node_modules/.pnpm/vitepress@1.5.0_@algolia+cl_eaa548ea40db93397a47921986a0ec41/node_modules/vitepress/dist/node/index.js";
import { resolve as resolve2 } from "path";
import dayjs from "file:///D:/NpmPackages/ls-components-plus/node_modules/.pnpm/dayjs@1.11.19/node_modules/dayjs/dayjs.min.js";

// .vitepress/nav/index.ts
var nav_default = [
  { text: "\u7EC4\u4EF6", link: "/docs/quickstart" },
  { text: "\u65B9\u6CD5", link: "/tools/directives/auth" }
];

// .vitepress/sidebar/index.ts
var sidebar_default = {
  "/docs/": [
    {
      text: "\u6307\u5357",
      items: [{ text: "\u5FEB\u901F\u5F00\u59CB", link: "/docs/quickstart" }]
    },
    {
      text: "Basic \u57FA\u7840\u7EC4\u4EF6",
      items: [
        { text: "Icon \u56FE\u6807", link: "/docs/icon" },
        { text: "Button \u6309\u94AE", link: "/docs/button" },
        { text: "Layout \u5E03\u5C40", link: "/docs/layout" }
      ]
    },
    {
      text: "Form \u8868\u5355\u7EC4\u4EF6",
      items: [
        { text: "Form \u8868\u5355", link: "/docs/form" },
        { text: "Upload \u4E0A\u4F20", link: "/docs/upload" }
      ]
    },
    {
      text: "Data \u6570\u636E\u5C55\u793A",
      items: [
        { text: "Table \u8868\u683C", link: "/docs/table" },
        { text: "Descriptions \u63CF\u8FF0", link: "/docs/descriptions" },
        { text: "Preview \u9884\u89C8\uFF08\u65E7\uFF0C\u4E0D\u518D\u66F4\u65B0\uFF09", link: "/docs/preview" },
        { text: "PreviewImage \u56FE\u7247\u9884\u89C8", link: "/docs/previewImage" },
        { text: "PreviewPdf PDF\u9884\u89C8", link: "/docs/previewPdf" },
        { text: "PreviewXlsx Excel\u9884\u89C8", link: "/docs/previewXlsx" },
        { text: "PreviewDoc \u6587\u6863\u9884\u89C8", link: "/docs/previewDocx" },
        { text: "Tree \u6743\u9650\u6811", link: "/docs/tree" },
        { text: "Map \u5730\u56FE", link: "/docs/map" },
        { text: "Live \u76F4\u64AD/\u89C6\u9891", link: "/docs/live" },
        { text: "Editor \u5BCC\u6587\u672C", link: "/docs/editor" },
        { text: "List \u5217\u8868", link: "/docs/list" }
      ]
    },
    {
      text: "Chart \u56FE\u8868",
      items: [
        { text: "chart \u4ECB\u7ECD", link: "/docs/charts/" },
        { text: "Bar \u67F1\u72B6\u56FE", link: "/docs/charts/bar" },
        { text: "Line \u6298\u7EBF\u56FE", link: "/docs/charts/line" },
        { text: "Pie \u997C\u56FE", link: "/docs/charts/pie" }
      ]
    },
    {
      text: "Navigation \u5BFC\u822A",
      items: [
        { text: "Backtop \u56DE\u5230\u9876\u90E8", link: "/docs/backtop" },
        { text: "Breadcrumb \u9762\u5305\u5C51", link: "/docs/breadcrumb" },
        { text: "Menu \u83DC\u5355", link: "/docs/menu" }
      ]
    },
    {
      text: "Feedback \u53CD\u9988\u7EC4\u4EF6",
      items: [
        { text: "Confirm \u786E\u8BA4\u6846", link: "/docs/confirm" },
        { text: "BellMessage \u6D88\u606F\u901A\u77E5\u5217\u8868", link: "/docs/bellMessage" },
        { text: "Dialog \u5BF9\u8BDD\u6846", link: "/docs/dialog" },
        { text: "Tooltip \u5F39\u51FA\u63D0\u793A", link: "/docs/tooltip" }
      ]
    },
    {
      text: "Other \u5176\u5B83\u7EC4\u4EF6",
      items: [
        { text: "Print \u6253\u5370", link: "/docs/print" },
        // { text: 'ContainerBox 适配容器', link: '/docs/containerBox' },
        { text: "Download \u4E0B\u8F7D", link: "/docs/download" },
        { text: "Cropper \u56FE\u7247\u88C1\u526A", link: "/docs/cropper" }
      ]
    }
  ],
  "/tools/": [
    // {
    //   text: 'directives',
    //   items: [{ text: 'auth', link: '/tools/directives/auth' }]
    // },
    {
      text: "hooks",
      items: [
        { text: "useRouterHook", link: "/tools/hooks/useRouterHook" },
        { text: "useWSHook", link: "/tools/hooks/useWSHook" },
        { text: "useOptionHook", link: "/tools/hooks/useOptionHook" },
        { text: "useTableListHook", link: "/tools/hooks/useTableListHook" }
      ]
    },
    {
      text: "utils",
      items: [
        { text: "lsValidate", link: "/tools/utils/validate" },
        { text: "lsCheck", link: "/tools/utils/check" },
        { text: "lsUtil", link: "/tools/utils/util" }
      ]
    }
  ]
};

// .vitepress/head/index.ts
var head = [
  ["link", { rel: "icon", href: "/favicon.png" }],
  ["link", { href: "https://front-development.oss-cn-beijing.aliyuncs.com/front-dev/luckysheet/plugins/css/pluginsCss.css" }],
  ["link", { href: "https://front-development.oss-cn-beijing.aliyuncs.com/front-dev/luckysheet/plugins/plugins.css" }],
  ["link", { href: "https://front-development.oss-cn-beijing.aliyuncs.com/front-dev/luckysheet/css/luckysheet.css" }],
  ["link", { href: "https://front-development.oss-cn-beijing.aliyuncs.com/front-dev/luckysheet/assets/iconfont/iconfont.css" }],
  ["script", { src: "https://front-development.oss-cn-beijing.aliyuncs.com/front-dev/luckysheet/plugins/js/plugin.js" }],
  ["script", { src: "https://front-development.oss-cn-beijing.aliyuncs.com/front-dev/luckysheet/luckysheet.umd.js" }]
];
var head_default = head;

// build/getEnv.ts
function wrapperEnv(envConf) {
  const ret = {};
  for (const envName of Object.keys(envConf)) {
    let realName = envConf[envName].replace(/\\n/g, "\n");
    realName = realName === "true" ? true : realName === "false" ? false : realName;
    if (envName === "VITE_PORT") realName = Number(realName);
    if (envName === "VITE_PROXY") {
      try {
        realName = JSON.parse(realName);
      } catch (error) {
      }
    }
    ret[envName] = realName;
  }
  return ret;
}

// build/plugins.ts
import { resolve } from "path";
import { visualizer } from "file:///D:/NpmPackages/ls-components-plus/node_modules/.pnpm/rollup-plugin-visualizer@5.14.0_rollup@4.53.3/node_modules/rollup-plugin-visualizer/dist/plugin/index.js";
import simpleHtmlPlugin from "file:///D:/NpmPackages/ls-components-plus/node_modules/.pnpm/vite-plugin-simple-html@1.1_d149ffdb8c02808385602b1e8a7cb405/node_modules/vite-plugin-simple-html/dist/index.js";
import vueJsx from "file:///D:/NpmPackages/ls-components-plus/node_modules/.pnpm/@vitejs+plugin-vue-jsx@5.1._eadd28569db1bc32d1e3181eaacc3327/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import eslintPlugin from "file:///D:/NpmPackages/ls-components-plus/node_modules/.pnpm/vite-plugin-eslint@1.8.1_es_81999240d86f91ee053a27280951fbc3/node_modules/vite-plugin-eslint/dist/index.mjs";
import viteCompression from "file:///D:/NpmPackages/ls-components-plus/node_modules/.pnpm/vite-plugin-compression@0.5_4e4d84e133562729b3f51e7286a8b594/node_modules/vite-plugin-compression/dist/index.mjs";
import vueSetupExtend from "file:///D:/NpmPackages/ls-components-plus/node_modules/.pnpm/unplugin-vue-setup-extend-plus@1.0.1/node_modules/unplugin-vue-setup-extend-plus/dist/vite.js";
import Components from "file:///D:/NpmPackages/ls-components-plus/node_modules/.pnpm/unplugin-vue-components@0.2_f983249c1e5b4954ac80be823d1fe648/node_modules/unplugin-vue-components/dist/vite.js";
import { ElementPlusResolver } from "file:///D:/NpmPackages/ls-components-plus/node_modules/.pnpm/unplugin-vue-components@0.2_f983249c1e5b4954ac80be823d1fe648/node_modules/unplugin-vue-components/dist/resolvers.js";
import AutoImport from "file:///D:/NpmPackages/ls-components-plus/node_modules/.pnpm/unplugin-auto-import@0.18.6_6fa7134e3eab7b4006c49134ca933749/node_modules/unplugin-auto-import/dist/vite.js";
import FilesLoader from "file:///D:/NpmPackages/ls-components-plus/node_modules/.pnpm/vite-plugin-files-loader@1._b58b28d47bc8346a070631518a195319/node_modules/vite-plugin-files-loader/dist/index.mjs";
import svgLoader from "file:///D:/NpmPackages/ls-components-plus/node_modules/.pnpm/vite-svg-loader@5.1.0_vue@3.5.18_typescript@5.9.3_/node_modules/vite-svg-loader/index.js";
var __vite_injected_original_dirname = "D:\\NpmPackages\\ls-components-plus\\packages\\ls-docs\\build";
var pathSrc = resolve(__vite_injected_original_dirname, "../typings");
var createVitePlugins = (viteEnv2) => {
  const { VITE_GLOB_APP_TITLE, VITE_REPORT } = viteEnv2;
  return [
    // vue 可以使用 jsx/tsx 语法
    vueJsx(),
    // esLint 报错信息显示在浏览器界面上
    eslintPlugin(),
    // name 可以写在 script 标签上
    vueSetupExtend({}),
    // 创建打包压缩配置
    createCompression(viteEnv2),
    // 注入变量到 html 文件
    simpleHtmlPlugin({
      minify: true,
      inject: {
        data: { title: VITE_GLOB_APP_TITLE }
      }
    }),
    // vitePWA
    // VITE_PWA && createVitePwa(viteEnv),
    // 是否生成包预览，分析依赖包大小做优化处理
    VITE_REPORT && visualizer({ filename: "stats.html", gzipSize: true, brotliSize: true, open: true }),
    AutoImport({
      imports: [
        // 需要自动导入的插件，自定义导入的API
        "vue",
        "vue-router",
        "pinia"
      ],
      ignore: ["h"],
      resolvers: [ElementPlusResolver()],
      dts: resolve(pathSrc, "auto-imports.d.ts")
    }),
    Components({
      resolvers: [ElementPlusResolver()],
      dirs: ["src/components"],
      dts: resolve(pathSrc, "components.d.ts")
    }),
    FilesLoader(),
    svgLoader()
  ];
};
var createCompression = (viteEnv2) => {
  const { VITE_BUILD_COMPRESS = "none", VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE } = viteEnv2;
  const compressList = VITE_BUILD_COMPRESS.split(",");
  const plugins2 = [];
  if (compressList.includes("gzip")) {
    plugins2.push(
      viteCompression({
        ext: ".gz",
        algorithm: "gzip",
        deleteOriginFile: VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE
      })
    );
  }
  if (compressList.includes("brotli")) {
    plugins2.push(
      viteCompression({
        ext: ".br",
        algorithm: "brotliCompress",
        deleteOriginFile: VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE
      })
    );
  }
  return plugins2;
};

// .vitepress/config.mts
var __vite_injected_original_dirname2 = "D:\\NpmPackages\\ls-components-plus\\packages\\ls-docs\\.vitepress";
var root = process.cwd();
var NODE_ENV = process.env.NODE_ENV;
var env = loadEnv(NODE_ENV, root);
var viteEnv = wrapperEnv(env);
var plugins = createVitePlugins(viteEnv);
var __APP_INFO__ = {
  lastBuildTime: dayjs().format("YYYY-MM-DD HH:mm:ss")
};
var config_default = defineConfig({
  outDir: resolve2("../../dist/"),
  title: "\u524D\u7AEF\u7EC4\u4EF6\u5E93\uFF08Vue3\uFF09",
  description: "\u524D\u7AEF\u7EC4\u4EF6\u5E93\uFF08Vue3\uFF09\u53CA\u516C\u5171\u65B9\u6CD5\u4F7F\u7528\u624B\u518C",
  // cleanUrls: true,
  lastUpdated: true,
  lang: "cn-ZH",
  head: head_default,
  markdown: {
    lineNumbers: true,
    codeTransformers: [
      {
        postprocess(code) {
          return code.replace(/\[\!\!code/g, "[!code");
        }
      }
    ],
    image: {
      lazyLoading: true
    },
    config: (md) => {
      md.renderer.rules.heading_close = (tokens, idx, options, env2, slf) => {
        let htmlResult = slf.renderToken(tokens, idx, options);
        if (tokens[idx].tag === "h1") htmlResult += `<ArticleMetadata />`;
        return htmlResult;
      };
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/logo.png",
    lastUpdated: {
      text: "\u4E0A\u6B21\u66F4\u65B0\u65F6\u95F4",
      formatOptions: {
        dateStyle: "short",
        // 可选值full、long、medium、short
        timeStyle: "medium"
        // 可选值full、long、medium、short
      }
    },
    siteTitle: false,
    search: {
      provider: "local",
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: "\u641C\u7D22\u6587\u6863",
                buttonAriaLabel: "\u641C\u7D22\u6587\u6863"
              },
              modal: {
                noResultsText: "\u65E0\u6CD5\u627E\u5230\u76F8\u5173\u7ED3\u679C",
                resetButtonTitle: "\u6E05\u9664\u67E5\u8BE2\u6761\u4EF6",
                footer: {
                  selectText: "\u9009\u62E9",
                  navigateText: "\u5207\u6362"
                }
              }
            }
          }
        }
      }
    },
    nav: nav_default,
    sidebar: sidebar_default,
    footer: {
      message: "\u96F6\u6570\u79D1\u6280\u524D\u7AEF\u56E2\u961F",
      copyright: "\xA9 2024 lingshu Tech Ltd. All Rights Reserved"
    },
    sidebarMenuLabel: "\u76EE\u5F55",
    returnToTopLabel: "\u8FD4\u56DE\u9876\u90E8",
    outline: {
      level: [2, 3],
      label: "\u5F53\u524D\u9875\u5927\u7EB2"
    },
    docFooter: {
      prev: "\u4E0A\u4E00\u9875",
      next: "\u4E0B\u4E00\u9875"
    }
  },
  vite: {
    plugins: [plugins],
    resolve: {
      alias: {
        "@docs": resolve2(__vite_injected_original_dirname2, "../docs"),
        "@exp": resolve2(__vite_injected_original_dirname2, "../examples")
      }
    },
    esbuild: {
      pure: ["console.log"],
      drop: ["debugger"]
    },
    define: {
      __APP_INFO__: JSON.stringify(__APP_INFO__)
    },
    server: {
      host: "0.0.0.0",
      port: 9093
    },
    ssr: {
      noExternal: [
        "vue3-print-nb",
        "element-plus",
        "@wangeditor/editor",
        "@wangeditor/editor-for-vue",
        "@lingshugroup/web-plus",
        "lodash",
        "pdfjs-dist",
        "echarts",
        "vue3-ts-jsoneditor",
        "luckyexcel",
        "@amap/amap-jsapi-loader"
      ]
    }
  }
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLnZpdGVwcmVzcy9jb25maWcubXRzIiwgIi52aXRlcHJlc3MvbmF2L2luZGV4LnRzIiwgIi52aXRlcHJlc3Mvc2lkZWJhci9pbmRleC50cyIsICIudml0ZXByZXNzL2hlYWQvaW5kZXgudHMiLCAiYnVpbGQvZ2V0RW52LnRzIiwgImJ1aWxkL3BsdWdpbnMudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxOcG1QYWNrYWdlc1xcXFxscy1jb21wb25lbnRzLXBsdXNcXFxccGFja2FnZXNcXFxcbHMtZG9jc1xcXFwudml0ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxOcG1QYWNrYWdlc1xcXFxscy1jb21wb25lbnRzLXBsdXNcXFxccGFja2FnZXNcXFxcbHMtZG9jc1xcXFwudml0ZXByZXNzXFxcXGNvbmZpZy5tdHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L05wbVBhY2thZ2VzL2xzLWNvbXBvbmVudHMtcGx1cy9wYWNrYWdlcy9scy1kb2NzLy52aXRlcHJlc3MvY29uZmlnLm10c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZywgbG9hZEVudiB9IGZyb20gJ3ZpdGVwcmVzcyc7XG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAncGF0aCc7XG5pbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnO1xuaW1wb3J0IG5hdiBmcm9tICcuL25hdi9pbmRleCc7XG5pbXBvcnQgc2lkZWJhciBmcm9tICcuL3NpZGViYXIvaW5kZXgnO1xuaW1wb3J0IGhlYWQgZnJvbSAnLi9oZWFkL2luZGV4JztcbmltcG9ydCB7IHdyYXBwZXJFbnYgfSBmcm9tICcuLi9idWlsZC9nZXRFbnYnO1xuaW1wb3J0IHsgY3JlYXRlVml0ZVBsdWdpbnMgfSBmcm9tICcuLi9idWlsZC9wbHVnaW5zJztcblxuY29uc3Qgcm9vdCA9IHByb2Nlc3MuY3dkKCk7XG5jb25zdCBOT0RFX0VOVjogYW55ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlY7XG5jb25zdCBlbnYgPSBsb2FkRW52KE5PREVfRU5WLCByb290KTtcbmNvbnN0IHZpdGVFbnYgPSB3cmFwcGVyRW52KGVudik7XG5jb25zdCBwbHVnaW5zOiBhbnkgPSBjcmVhdGVWaXRlUGx1Z2lucyh2aXRlRW52KTtcblxuY29uc3QgX19BUFBfSU5GT19fID0ge1xuICBsYXN0QnVpbGRUaW1lOiBkYXlqcygpLmZvcm1hdCgnWVlZWS1NTS1ERCBISDptbTpzcycpXG59O1xuXG4vLyBodHRwczovL3ZpdGVwcmVzcy5kZXYvcmVmZXJlbmNlL3NpdGUtY29uZmlnXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBvdXREaXI6IHJlc29sdmUoJy4uLy4uL2Rpc3QvJyksXG4gIHRpdGxlOiAnXHU1MjREXHU3QUVGXHU3RUM0XHU0RUY2XHU1RTkzXHVGRjA4VnVlM1x1RkYwOScsXG4gIGRlc2NyaXB0aW9uOiAnXHU1MjREXHU3QUVGXHU3RUM0XHU0RUY2XHU1RTkzXHVGRjA4VnVlM1x1RkYwOVx1NTNDQVx1NTE2Q1x1NTE3MVx1NjVCOVx1NkNENVx1NEY3Rlx1NzUyOFx1NjI0Qlx1NTE4QycsXG4gIC8vIGNsZWFuVXJsczogdHJ1ZSxcbiAgbGFzdFVwZGF0ZWQ6IHRydWUsXG5cbiAgbGFuZzogJ2NuLVpIJyxcblxuICBoZWFkLFxuXG4gIG1hcmtkb3duOiB7XG4gICAgbGluZU51bWJlcnM6IHRydWUsXG4gICAgY29kZVRyYW5zZm9ybWVyczogW1xuICAgICAge1xuICAgICAgICBwb3N0cHJvY2Vzcyhjb2RlKSB7XG4gICAgICAgICAgcmV0dXJuIGNvZGUucmVwbGFjZSgvXFxbXFwhXFwhY29kZS9nLCAnWyFjb2RlJylcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF0sXG4gICAgaW1hZ2U6IHtcbiAgICAgIGxhenlMb2FkaW5nOiB0cnVlXG4gICAgfSxcbiAgICBjb25maWc6IChtZCkgPT4ge1xuICAgICAgbWQucmVuZGVyZXIucnVsZXMuaGVhZGluZ19jbG9zZSA9ICh0b2tlbnMsIGlkeCwgb3B0aW9ucywgZW52LCBzbGYpID0+IHtcbiAgICAgICAgICBsZXQgaHRtbFJlc3VsdCA9IHNsZi5yZW5kZXJUb2tlbih0b2tlbnMsIGlkeCwgb3B0aW9ucyk7XG4gICAgICAgICAgaWYgKHRva2Vuc1tpZHhdLnRhZyA9PT0gJ2gxJykgaHRtbFJlc3VsdCArPSBgPEFydGljbGVNZXRhZGF0YSAvPmA7IFxuICAgICAgICAgIHJldHVybiBodG1sUmVzdWx0O1xuICAgICAgfVxuICAgIH0sXG4gIH0sXG5cbiAgdGhlbWVDb25maWc6IHtcbiAgICAvLyBodHRwczovL3ZpdGVwcmVzcy5kZXYvcmVmZXJlbmNlL2RlZmF1bHQtdGhlbWUtY29uZmlnXG5cbiAgICBsb2dvOiAnL2xvZ28ucG5nJyxcblxuICAgIGxhc3RVcGRhdGVkOiB7XG4gICAgICB0ZXh0OiAnXHU0RTBBXHU2QjIxXHU2NkY0XHU2NUIwXHU2NUY2XHU5NUY0JyxcbiAgICAgIGZvcm1hdE9wdGlvbnM6IHtcbiAgICAgICAgZGF0ZVN0eWxlOiAnc2hvcnQnLCAvLyBcdTUzRUZcdTkwMDlcdTUwM0NmdWxsXHUzMDAxbG9uZ1x1MzAwMW1lZGl1bVx1MzAwMXNob3J0XG4gICAgICAgIHRpbWVTdHlsZTogJ21lZGl1bScgLy8gXHU1M0VGXHU5MDA5XHU1MDNDZnVsbFx1MzAwMWxvbmdcdTMwMDFtZWRpdW1cdTMwMDFzaG9ydFxuICAgICAgfSxcbiAgICB9LFxuXG4gICAgc2l0ZVRpdGxlOiBmYWxzZSxcblxuICAgIHNlYXJjaDoge1xuICAgICAgcHJvdmlkZXI6ICdsb2NhbCcsXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIGxvY2FsZXM6IHtcbiAgICAgICAgICB6aDoge1xuICAgICAgICAgICAgdHJhbnNsYXRpb25zOiB7XG4gICAgICAgICAgICAgIGJ1dHRvbjoge1xuICAgICAgICAgICAgICAgIGJ1dHRvblRleHQ6ICdcdTY0MUNcdTdEMjJcdTY1ODdcdTY4NjMnLFxuICAgICAgICAgICAgICAgIGJ1dHRvbkFyaWFMYWJlbDogJ1x1NjQxQ1x1N0QyMlx1NjU4N1x1Njg2MydcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgbW9kYWw6IHtcbiAgICAgICAgICAgICAgICBub1Jlc3VsdHNUZXh0OiAnXHU2NUUwXHU2Q0Q1XHU2MjdFXHU1MjMwXHU3NkY4XHU1MTczXHU3RUQzXHU2NzlDJyxcbiAgICAgICAgICAgICAgICByZXNldEJ1dHRvblRpdGxlOiAnXHU2RTA1XHU5NjY0XHU2N0U1XHU4QkUyXHU2NzYxXHU0RUY2JyxcbiAgICAgICAgICAgICAgICBmb290ZXI6IHtcbiAgICAgICAgICAgICAgICAgIHNlbGVjdFRleHQ6ICdcdTkwMDlcdTYyRTknLFxuICAgICAgICAgICAgICAgICAgbmF2aWdhdGVUZXh0OiAnXHU1MjA3XHU2MzYyJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG5cbiAgICBuYXYsXG5cbiAgICBzaWRlYmFyLFxuXG4gICAgZm9vdGVyOiB7XG4gICAgICBtZXNzYWdlOiAnXHU5NkY2XHU2NTcwXHU3OUQxXHU2MjgwXHU1MjREXHU3QUVGXHU1NkUyXHU5NjFGJyxcbiAgICAgIGNvcHlyaWdodDogJ1x1MDBBOSAyMDI0IGxpbmdzaHUgVGVjaCBMdGQuIEFsbCBSaWdodHMgUmVzZXJ2ZWQnXG4gICAgfSxcbiAgICBzaWRlYmFyTWVudUxhYmVsOiAnXHU3NkVFXHU1RjU1JyxcblxuICAgIHJldHVyblRvVG9wTGFiZWw6ICdcdThGRDRcdTU2REVcdTk4NzZcdTkwRTgnLFxuXG4gICAgb3V0bGluZToge1xuICAgICAgbGV2ZWw6IFsyLCAzXSxcbiAgICAgIGxhYmVsOiAnXHU1RjUzXHU1MjREXHU5ODc1XHU1OTI3XHU3RUIyJ1xuICAgIH0sXG5cbiAgICBkb2NGb290ZXI6IHtcbiAgICAgIHByZXY6ICdcdTRFMEFcdTRFMDBcdTk4NzUnLFxuICAgICAgbmV4dDogJ1x1NEUwQlx1NEUwMFx1OTg3NScsXG4gICAgfSxcbiAgfSxcblxuICB2aXRlOiB7XG4gICAgcGx1Z2luczogW3BsdWdpbnNdLFxuICAgIHJlc29sdmU6IHtcbiAgICAgIGFsaWFzOiB7XG4gICAgICAgICdAZG9jcyc6IHJlc29sdmUoX19kaXJuYW1lLCAnLi4vZG9jcycpLFxuICAgICAgICAnQGV4cCc6IHJlc29sdmUoX19kaXJuYW1lLCAnLi4vZXhhbXBsZXMnKSxcbiAgICAgIH1cbiAgICB9LFxuICAgIGVzYnVpbGQ6IHtcbiAgICAgIHB1cmU6IFsnY29uc29sZS5sb2cnXSxcbiAgICAgIGRyb3A6IFsnZGVidWdnZXInXVxuICAgIH0sXG4gICAgZGVmaW5lOiB7XG4gICAgICBfX0FQUF9JTkZPX186IEpTT04uc3RyaW5naWZ5KF9fQVBQX0lORk9fXylcbiAgICB9LFxuICAgIHNlcnZlcjoge1xuICAgICAgaG9zdDogJzAuMC4wLjAnLFxuICAgICAgcG9ydDogOTA5MyxcbiAgICB9LFxuICAgIHNzcjoge1xuICAgICAgbm9FeHRlcm5hbDogW1xuICAgICAgICAndnVlMy1wcmludC1uYicsXG4gICAgICAgICdlbGVtZW50LXBsdXMnLFxuICAgICAgICAnQHdhbmdlZGl0b3IvZWRpdG9yJyxcbiAgICAgICAgJ0B3YW5nZWRpdG9yL2VkaXRvci1mb3ItdnVlJyxcbiAgICAgICAgJ0BsaW5nc2h1Z3JvdXAvd2ViLXBsdXMnLFxuICAgICAgICAnbG9kYXNoJyxcbiAgICAgICAgJ3BkZmpzLWRpc3QnLFxuICAgICAgICAnZWNoYXJ0cycsXG4gICAgICAgICd2dWUzLXRzLWpzb25lZGl0b3InLFxuICAgICAgICAnbHVja3lleGNlbCcsXG4gICAgICAgICdAYW1hcC9hbWFwLWpzYXBpLWxvYWRlcidcbiAgICAgIF1cbiAgICB9XG4gIH1cbn0pXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXE5wbVBhY2thZ2VzXFxcXGxzLWNvbXBvbmVudHMtcGx1c1xcXFxwYWNrYWdlc1xcXFxscy1kb2NzXFxcXC52aXRlcHJlc3NcXFxcbmF2XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxOcG1QYWNrYWdlc1xcXFxscy1jb21wb25lbnRzLXBsdXNcXFxccGFja2FnZXNcXFxcbHMtZG9jc1xcXFwudml0ZXByZXNzXFxcXG5hdlxcXFxpbmRleC50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovTnBtUGFja2FnZXMvbHMtY29tcG9uZW50cy1wbHVzL3BhY2thZ2VzL2xzLWRvY3MvLnZpdGVwcmVzcy9uYXYvaW5kZXgudHNcIjtleHBvcnQgZGVmYXVsdCBbXG4gIHsgdGV4dDogJ1x1N0VDNFx1NEVGNicsIGxpbms6ICcvZG9jcy9xdWlja3N0YXJ0JyB9LFxuICB7IHRleHQ6ICdcdTY1QjlcdTZDRDUnLCBsaW5rOiAnL3Rvb2xzL2RpcmVjdGl2ZXMvYXV0aCcgfVxuXTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxcTnBtUGFja2FnZXNcXFxcbHMtY29tcG9uZW50cy1wbHVzXFxcXHBhY2thZ2VzXFxcXGxzLWRvY3NcXFxcLnZpdGVwcmVzc1xcXFxzaWRlYmFyXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxOcG1QYWNrYWdlc1xcXFxscy1jb21wb25lbnRzLXBsdXNcXFxccGFja2FnZXNcXFxcbHMtZG9jc1xcXFwudml0ZXByZXNzXFxcXHNpZGViYXJcXFxcaW5kZXgudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L05wbVBhY2thZ2VzL2xzLWNvbXBvbmVudHMtcGx1cy9wYWNrYWdlcy9scy1kb2NzLy52aXRlcHJlc3Mvc2lkZWJhci9pbmRleC50c1wiO2V4cG9ydCBkZWZhdWx0IHtcbiAgJy9kb2NzLyc6IFtcbiAgICB7XG4gICAgICB0ZXh0OiAnXHU2MzA3XHU1MzU3JyxcbiAgICAgIGl0ZW1zOiBbeyB0ZXh0OiAnXHU1RkVCXHU5MDFGXHU1RjAwXHU1OUNCJywgbGluazogJy9kb2NzL3F1aWNrc3RhcnQnIH1dXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnQmFzaWMgXHU1N0ZBXHU3ODQwXHU3RUM0XHU0RUY2JyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdGV4dDogJ0ljb24gXHU1NkZFXHU2ODA3JywgbGluazogJy9kb2NzL2ljb24nIH0sXG4gICAgICAgIHsgdGV4dDogJ0J1dHRvbiBcdTYzMDlcdTk0QUUnLCBsaW5rOiAnL2RvY3MvYnV0dG9uJyB9LFxuICAgICAgICB7IHRleHQ6ICdMYXlvdXQgXHU1RTAzXHU1QzQwJywgbGluazogJy9kb2NzL2xheW91dCcgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ0Zvcm0gXHU4ODY4XHU1MzU1XHU3RUM0XHU0RUY2JyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdGV4dDogJ0Zvcm0gXHU4ODY4XHU1MzU1JywgbGluazogJy9kb2NzL2Zvcm0nIH0sXG4gICAgICAgIHsgdGV4dDogJ1VwbG9hZCBcdTRFMEFcdTRGMjAnLCBsaW5rOiAnL2RvY3MvdXBsb2FkJyB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnRGF0YSBcdTY1NzBcdTYzNkVcdTVDNTVcdTc5M0EnLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiAnVGFibGUgXHU4ODY4XHU2ODNDJywgbGluazogJy9kb2NzL3RhYmxlJyB9LFxuICAgICAgICB7IHRleHQ6ICdEZXNjcmlwdGlvbnMgXHU2M0NGXHU4RkYwJywgbGluazogJy9kb2NzL2Rlc2NyaXB0aW9ucycgfSxcbiAgICAgICAgeyB0ZXh0OiAnUHJldmlldyBcdTk4ODRcdTg5QzhcdUZGMDhcdTY1RTdcdUZGMENcdTRFMERcdTUxOERcdTY2RjRcdTY1QjBcdUZGMDknLCBsaW5rOiAnL2RvY3MvcHJldmlldycgfSxcbiAgICAgICAgeyB0ZXh0OiAnUHJldmlld0ltYWdlIFx1NTZGRVx1NzI0N1x1OTg4NFx1ODlDOCcsIGxpbms6ICcvZG9jcy9wcmV2aWV3SW1hZ2UnIH0sXG4gICAgICAgIHsgdGV4dDogJ1ByZXZpZXdQZGYgUERGXHU5ODg0XHU4OUM4JywgbGluazogJy9kb2NzL3ByZXZpZXdQZGYnIH0sXG4gICAgICAgIHsgdGV4dDogJ1ByZXZpZXdYbHN4IEV4Y2VsXHU5ODg0XHU4OUM4JywgbGluazogJy9kb2NzL3ByZXZpZXdYbHN4JyB9LFxuICAgICAgICB7IHRleHQ6ICdQcmV2aWV3RG9jIFx1NjU4N1x1Njg2M1x1OTg4NFx1ODlDOCcsIGxpbms6ICcvZG9jcy9wcmV2aWV3RG9jeCcgfSxcbiAgICAgICAgeyB0ZXh0OiAnVHJlZSBcdTY3NDNcdTk2NTBcdTY4MTEnLCBsaW5rOiAnL2RvY3MvdHJlZScgfSxcbiAgICAgICAgeyB0ZXh0OiAnTWFwIFx1NTczMFx1NTZGRScsIGxpbms6ICcvZG9jcy9tYXAnIH0sXG4gICAgICAgIHsgdGV4dDogJ0xpdmUgXHU3NkY0XHU2NEFEL1x1ODlDNlx1OTg5MScsIGxpbms6ICcvZG9jcy9saXZlJyB9LFxuICAgICAgICB7IHRleHQ6ICdFZGl0b3IgXHU1QkNDXHU2NTg3XHU2NzJDJywgbGluazogJy9kb2NzL2VkaXRvcicgfSxcbiAgICAgICAgeyB0ZXh0OiAnTGlzdCBcdTUyMTdcdTg4NjgnLCBsaW5rOiAnL2RvY3MvbGlzdCcgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ0NoYXJ0IFx1NTZGRVx1ODg2OCcsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHRleHQ6ICdjaGFydCBcdTRFQ0JcdTdFQ0QnLCBsaW5rOiAnL2RvY3MvY2hhcnRzLycgfSxcbiAgICAgICAgeyB0ZXh0OiAnQmFyIFx1NjdGMVx1NzJCNlx1NTZGRScsIGxpbms6ICcvZG9jcy9jaGFydHMvYmFyJyB9LFxuICAgICAgICB7IHRleHQ6ICdMaW5lIFx1NjI5OFx1N0VCRlx1NTZGRScsIGxpbms6ICcvZG9jcy9jaGFydHMvbGluZScgfSxcbiAgICAgICAgeyB0ZXh0OiAnUGllIFx1OTk3Q1x1NTZGRScsIGxpbms6ICcvZG9jcy9jaGFydHMvcGllJyB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnTmF2aWdhdGlvbiBcdTVCRkNcdTgyMkEnLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiAnQmFja3RvcCBcdTU2REVcdTUyMzBcdTk4NzZcdTkwRTgnLCBsaW5rOiAnL2RvY3MvYmFja3RvcCcgfSxcbiAgICAgICAgeyB0ZXh0OiAnQnJlYWRjcnVtYiBcdTk3NjJcdTUzMDVcdTVDNTEnLCBsaW5rOiAnL2RvY3MvYnJlYWRjcnVtYicgfSxcbiAgICAgICAgeyB0ZXh0OiAnTWVudSBcdTgzRENcdTUzNTUnLCBsaW5rOiAnL2RvY3MvbWVudScgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ0ZlZWRiYWNrIFx1NTNDRFx1OTk4OFx1N0VDNFx1NEVGNicsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHRleHQ6ICdDb25maXJtIFx1Nzg2RVx1OEJBNFx1Njg0NicsIGxpbms6ICcvZG9jcy9jb25maXJtJyB9LFxuICAgICAgICB7IHRleHQ6ICdCZWxsTWVzc2FnZSBcdTZEODhcdTYwNkZcdTkwMUFcdTc3RTVcdTUyMTdcdTg4NjgnLCBsaW5rOiAnL2RvY3MvYmVsbE1lc3NhZ2UnIH0sXG4gICAgICAgIHsgdGV4dDogJ0RpYWxvZyBcdTVCRjlcdThCRERcdTY4NDYnLCBsaW5rOiAnL2RvY3MvZGlhbG9nJyB9LFxuICAgICAgICB7IHRleHQ6ICdUb29sdGlwIFx1NUYzOVx1NTFGQVx1NjNEMFx1NzkzQScsIGxpbms6ICcvZG9jcy90b29sdGlwJyB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnT3RoZXIgXHU1MTc2XHU1QjgzXHU3RUM0XHU0RUY2JyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdGV4dDogJ1ByaW50IFx1NjI1M1x1NTM3MCcsIGxpbms6ICcvZG9jcy9wcmludCcgfSxcbiAgICAgICAgLy8geyB0ZXh0OiAnQ29udGFpbmVyQm94IFx1OTAwMlx1OTE0RFx1NUJCOVx1NTY2OCcsIGxpbms6ICcvZG9jcy9jb250YWluZXJCb3gnIH0sXG4gICAgICAgIHsgdGV4dDogJ0Rvd25sb2FkIFx1NEUwQlx1OEY3RCcsIGxpbms6ICcvZG9jcy9kb3dubG9hZCcgfSxcbiAgICAgICAgeyB0ZXh0OiAnQ3JvcHBlciBcdTU2RkVcdTcyNDdcdTg4QzFcdTUyNkEnLCBsaW5rOiAnL2RvY3MvY3JvcHBlcicgfVxuICAgICAgXVxuICAgIH1cbiAgXSxcbiAgJy90b29scy8nOiBbXG4gICAgLy8ge1xuICAgIC8vICAgdGV4dDogJ2RpcmVjdGl2ZXMnLFxuICAgIC8vICAgaXRlbXM6IFt7IHRleHQ6ICdhdXRoJywgbGluazogJy90b29scy9kaXJlY3RpdmVzL2F1dGgnIH1dXG4gICAgLy8gfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnaG9va3MnLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiAndXNlUm91dGVySG9vaycsIGxpbms6ICcvdG9vbHMvaG9va3MvdXNlUm91dGVySG9vaycgfSxcbiAgICAgICAgeyB0ZXh0OiAndXNlV1NIb29rJywgbGluazogJy90b29scy9ob29rcy91c2VXU0hvb2snIH0sXG4gICAgICAgIHsgdGV4dDogJ3VzZU9wdGlvbkhvb2snLCBsaW5rOiAnL3Rvb2xzL2hvb2tzL3VzZU9wdGlvbkhvb2snIH0sXG4gICAgICAgIHsgdGV4dDogJ3VzZVRhYmxlTGlzdEhvb2snLCBsaW5rOiAnL3Rvb2xzL2hvb2tzL3VzZVRhYmxlTGlzdEhvb2snIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICd1dGlscycsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHRleHQ6ICdsc1ZhbGlkYXRlJywgbGluazogJy90b29scy91dGlscy92YWxpZGF0ZScgfSxcbiAgICAgICAgeyB0ZXh0OiAnbHNDaGVjaycsIGxpbms6ICcvdG9vbHMvdXRpbHMvY2hlY2snIH0sXG4gICAgICAgIHsgdGV4dDogJ2xzVXRpbCcsIGxpbms6ICcvdG9vbHMvdXRpbHMvdXRpbCcgfVxuICAgICAgXVxuICAgIH1cbiAgXVxufTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxcTnBtUGFja2FnZXNcXFxcbHMtY29tcG9uZW50cy1wbHVzXFxcXHBhY2thZ2VzXFxcXGxzLWRvY3NcXFxcLnZpdGVwcmVzc1xcXFxoZWFkXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxOcG1QYWNrYWdlc1xcXFxscy1jb21wb25lbnRzLXBsdXNcXFxccGFja2FnZXNcXFxcbHMtZG9jc1xcXFwudml0ZXByZXNzXFxcXGhlYWRcXFxcaW5kZXgudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L05wbVBhY2thZ2VzL2xzLWNvbXBvbmVudHMtcGx1cy9wYWNrYWdlcy9scy1kb2NzLy52aXRlcHJlc3MvaGVhZC9pbmRleC50c1wiO2NvbnN0IGhlYWQ6IGFueSA9IFtcbiAgWydsaW5rJywgeyByZWw6ICdpY29uJywgaHJlZjogJy9mYXZpY29uLnBuZycgfV0sXG4gIFsnbGluaycsIHsgaHJlZjogJ2h0dHBzOi8vZnJvbnQtZGV2ZWxvcG1lbnQub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL2Zyb250LWRldi9sdWNreXNoZWV0L3BsdWdpbnMvY3NzL3BsdWdpbnNDc3MuY3NzJyB9XSxcbiAgWydsaW5rJywgeyBocmVmOiAnaHR0cHM6Ly9mcm9udC1kZXZlbG9wbWVudC5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vZnJvbnQtZGV2L2x1Y2t5c2hlZXQvcGx1Z2lucy9wbHVnaW5zLmNzcycgfV0sXG4gIFsnbGluaycsIHsgaHJlZjogJ2h0dHBzOi8vZnJvbnQtZGV2ZWxvcG1lbnQub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL2Zyb250LWRldi9sdWNreXNoZWV0L2Nzcy9sdWNreXNoZWV0LmNzcycgfV0sXG4gIFsnbGluaycsIHsgaHJlZjogJ2h0dHBzOi8vZnJvbnQtZGV2ZWxvcG1lbnQub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL2Zyb250LWRldi9sdWNreXNoZWV0L2Fzc2V0cy9pY29uZm9udC9pY29uZm9udC5jc3MnIH1dLFxuICBbJ3NjcmlwdCcsIHsgc3JjOiAnaHR0cHM6Ly9mcm9udC1kZXZlbG9wbWVudC5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vZnJvbnQtZGV2L2x1Y2t5c2hlZXQvcGx1Z2lucy9qcy9wbHVnaW4uanMnIH1dLFxuICBbJ3NjcmlwdCcsIHsgc3JjOiAnaHR0cHM6Ly9mcm9udC1kZXZlbG9wbWVudC5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vZnJvbnQtZGV2L2x1Y2t5c2hlZXQvbHVja3lzaGVldC51bWQuanMnIH1dXG5dO1xuZXhwb3J0IGRlZmF1bHQgaGVhZDtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxcTnBtUGFja2FnZXNcXFxcbHMtY29tcG9uZW50cy1wbHVzXFxcXHBhY2thZ2VzXFxcXGxzLWRvY3NcXFxcYnVpbGRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXE5wbVBhY2thZ2VzXFxcXGxzLWNvbXBvbmVudHMtcGx1c1xcXFxwYWNrYWdlc1xcXFxscy1kb2NzXFxcXGJ1aWxkXFxcXGdldEVudi50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovTnBtUGFja2FnZXMvbHMtY29tcG9uZW50cy1wbHVzL3BhY2thZ2VzL2xzLWRvY3MvYnVpbGQvZ2V0RW52LnRzXCI7aW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgeyBSZWNvcmRhYmxlLCBWaXRlRW52IH0gZnJvbSAnLi4vdHlwaW5ncy9nbG9iYWwnO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEZXZGbihtb2RlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIG1vZGUgPT09ICdkZXYnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNQcm9kRm4obW9kZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBtb2RlID09PSAncHJvZCc7XG59XG5cbi8qKlxuICogV2hldGhlciB0byBnZW5lcmF0ZSBwYWNrYWdlIHByZXZpZXdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzUmVwb3J0TW9kZSgpOiBib29sZWFuIHtcbiAgcmV0dXJuIHByb2Nlc3MuZW52LlZJVEVfUkVQT1JUID09PSAndHJ1ZSc7XG59XG5cbi8vIFJlYWQgYWxsIGVudmlyb25tZW50IHZhcmlhYmxlIGNvbmZpZ3VyYXRpb24gZmlsZXMgdG8gcHJvY2Vzcy5lbnZcbmV4cG9ydCBmdW5jdGlvbiB3cmFwcGVyRW52KGVudkNvbmY6IFJlY29yZGFibGUpOiBWaXRlRW52IHtcbiAgY29uc3QgcmV0OiBhbnkgPSB7fTtcblxuICBmb3IgKGNvbnN0IGVudk5hbWUgb2YgT2JqZWN0LmtleXMoZW52Q29uZikpIHtcbiAgICBsZXQgcmVhbE5hbWUgPSBlbnZDb25mW2Vudk5hbWVdLnJlcGxhY2UoL1xcXFxuL2csICdcXG4nKTtcbiAgICByZWFsTmFtZSA9IHJlYWxOYW1lID09PSAndHJ1ZScgPyB0cnVlIDogcmVhbE5hbWUgPT09ICdmYWxzZScgPyBmYWxzZSA6IHJlYWxOYW1lO1xuICAgIGlmIChlbnZOYW1lID09PSAnVklURV9QT1JUJykgcmVhbE5hbWUgPSBOdW1iZXIocmVhbE5hbWUpO1xuICAgIGlmIChlbnZOYW1lID09PSAnVklURV9QUk9YWScpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJlYWxOYW1lID0gSlNPTi5wYXJzZShyZWFsTmFtZSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge31cbiAgICB9XG4gICAgcmV0W2Vudk5hbWVdID0gcmVhbE5hbWU7XG4gIH1cbiAgcmV0dXJuIHJldDtcbn1cblxuLyoqXG4gKiBHZXQgdXNlciByb290IGRpcmVjdG9yeVxuICogQHBhcmFtIGRpciBmaWxlIHBhdGhcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFJvb3RQYXRoKC4uLmRpcjogc3RyaW5nW10pIHtcbiAgcmV0dXJuIHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCAuLi5kaXIpO1xufVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxOcG1QYWNrYWdlc1xcXFxscy1jb21wb25lbnRzLXBsdXNcXFxccGFja2FnZXNcXFxcbHMtZG9jc1xcXFxidWlsZFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcTnBtUGFja2FnZXNcXFxcbHMtY29tcG9uZW50cy1wbHVzXFxcXHBhY2thZ2VzXFxcXGxzLWRvY3NcXFxcYnVpbGRcXFxccGx1Z2lucy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovTnBtUGFja2FnZXMvbHMtY29tcG9uZW50cy1wbHVzL3BhY2thZ2VzL2xzLWRvY3MvYnVpbGQvcGx1Z2lucy50c1wiO2ltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdwYXRoJztcbmltcG9ydCB7IFBsdWdpbk9wdGlvbiB9IGZyb20gJ3ZpdGUnO1xuLy8gaW1wb3J0IHsgVml0ZVBXQSB9IGZyb20gXCJ2aXRlLXBsdWdpbi1wd2FcIjtcbmltcG9ydCB7IHZpc3VhbGl6ZXIgfSBmcm9tICdyb2xsdXAtcGx1Z2luLXZpc3VhbGl6ZXInO1xuaW1wb3J0IHNpbXBsZUh0bWxQbHVnaW4gZnJvbSAndml0ZS1wbHVnaW4tc2ltcGxlLWh0bWwnO1xuaW1wb3J0IHZ1ZUpzeCBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUtanN4JztcbmltcG9ydCBlc2xpbnRQbHVnaW4gZnJvbSAndml0ZS1wbHVnaW4tZXNsaW50JztcbmltcG9ydCB2aXRlQ29tcHJlc3Npb24gZnJvbSAndml0ZS1wbHVnaW4tY29tcHJlc3Npb24nO1xuaW1wb3J0IHZ1ZVNldHVwRXh0ZW5kIGZyb20gJ3VucGx1Z2luLXZ1ZS1zZXR1cC1leHRlbmQtcGx1cy92aXRlJztcbmltcG9ydCBDb21wb25lbnRzIGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3ZpdGUnO1xuaW1wb3J0IHsgRWxlbWVudFBsdXNSZXNvbHZlciB9IGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3Jlc29sdmVycyc7XG5pbXBvcnQgQXV0b0ltcG9ydCBmcm9tICd1bnBsdWdpbi1hdXRvLWltcG9ydC92aXRlJztcbmltcG9ydCB7IFZpdGVFbnYgfSBmcm9tICcuLi90eXBpbmdzL2dsb2JhbCc7XG5pbXBvcnQgRmlsZXNMb2FkZXIgZnJvbSAndml0ZS1wbHVnaW4tZmlsZXMtbG9hZGVyJztcbmltcG9ydCBzdmdMb2FkZXIgZnJvbSAndml0ZS1zdmctbG9hZGVyJztcblxuY29uc3QgcGF0aFNyYyA9IHJlc29sdmUoX19kaXJuYW1lLCAnLi4vdHlwaW5ncycpO1xuXG4vKipcbiAqIFx1NTIxQlx1NUVGQSB2aXRlIFx1NjNEMlx1NEVGNlxuICogQHBhcmFtIHZpdGVFbnZcbiAqL1xuZXhwb3J0IGNvbnN0IGNyZWF0ZVZpdGVQbHVnaW5zID0gKHZpdGVFbnY6IFZpdGVFbnYpOiAoUGx1Z2luT3B0aW9uIHwgUGx1Z2luT3B0aW9uW10pW10gPT4ge1xuICBjb25zdCB7IFZJVEVfR0xPQl9BUFBfVElUTEUsIFZJVEVfUkVQT1JUIH0gPSB2aXRlRW52O1xuICByZXR1cm4gW1xuICAgIC8vIHZ1ZSBcdTUzRUZcdTRFRTVcdTRGN0ZcdTc1MjgganN4L3RzeCBcdThCRURcdTZDRDVcbiAgICB2dWVKc3goKSxcbiAgICAvLyBlc0xpbnQgXHU2MkE1XHU5NTE5XHU0RkUxXHU2MDZGXHU2NjNFXHU3OTNBXHU1NzI4XHU2RDRGXHU4OUM4XHU1NjY4XHU3NTRDXHU5NzYyXHU0RTBBXG4gICAgZXNsaW50UGx1Z2luKCksXG4gICAgLy8gbmFtZSBcdTUzRUZcdTRFRTVcdTUxOTlcdTU3Mjggc2NyaXB0IFx1NjgwN1x1N0I3RVx1NEUwQVxuICAgIHZ1ZVNldHVwRXh0ZW5kKHt9KSxcbiAgICAvLyBcdTUyMUJcdTVFRkFcdTYyNTNcdTUzMDVcdTUzOEJcdTdGMjlcdTkxNERcdTdGNkVcbiAgICBjcmVhdGVDb21wcmVzc2lvbih2aXRlRW52KSxcbiAgICAvLyBcdTZDRThcdTUxNjVcdTUzRDhcdTkxQ0ZcdTUyMzAgaHRtbCBcdTY1ODdcdTRFRjZcbiAgICBzaW1wbGVIdG1sUGx1Z2luKHtcbiAgICAgIG1pbmlmeTogdHJ1ZSxcbiAgICAgIGluamVjdDoge1xuICAgICAgICBkYXRhOiB7IHRpdGxlOiBWSVRFX0dMT0JfQVBQX1RJVExFIH1cbiAgICAgIH1cbiAgICB9KSxcbiAgICAvLyB2aXRlUFdBXG4gICAgLy8gVklURV9QV0EgJiYgY3JlYXRlVml0ZVB3YSh2aXRlRW52KSxcbiAgICAvLyBcdTY2MkZcdTU0MjZcdTc1MUZcdTYyMTBcdTUzMDVcdTk4ODRcdTg5QzhcdUZGMENcdTUyMDZcdTY3OTBcdTRGOURcdThENTZcdTUzMDVcdTU5MjdcdTVDMEZcdTUwNUFcdTRGMThcdTUzMTZcdTU5MDRcdTc0MDZcbiAgICBWSVRFX1JFUE9SVCAmJiAodmlzdWFsaXplcih7IGZpbGVuYW1lOiAnc3RhdHMuaHRtbCcsIGd6aXBTaXplOiB0cnVlLCBicm90bGlTaXplOiB0cnVlLCBvcGVuOiB0cnVlIH0pIGFzIFBsdWdpbk9wdGlvbiksXG4gICAgQXV0b0ltcG9ydCh7XG4gICAgICBpbXBvcnRzOiBbXG4gICAgICAgIC8vIFx1OTcwMFx1ODk4MVx1ODFFQVx1NTJBOFx1NUJGQ1x1NTE2NVx1NzY4NFx1NjNEMlx1NEVGNlx1RkYwQ1x1ODFFQVx1NUI5QVx1NEU0OVx1NUJGQ1x1NTE2NVx1NzY4NEFQSVxuICAgICAgICAndnVlJyxcbiAgICAgICAgJ3Z1ZS1yb3V0ZXInLFxuICAgICAgICAncGluaWEnXG4gICAgICBdLFxuICAgICAgaWdub3JlOiBbJ2gnXSxcbiAgICAgIHJlc29sdmVyczogW0VsZW1lbnRQbHVzUmVzb2x2ZXIoKV0sXG4gICAgICBkdHM6IHJlc29sdmUocGF0aFNyYywgJ2F1dG8taW1wb3J0cy5kLnRzJylcbiAgICB9KSxcbiAgICBDb21wb25lbnRzKHtcbiAgICAgIHJlc29sdmVyczogW0VsZW1lbnRQbHVzUmVzb2x2ZXIoKV0sXG4gICAgICBkaXJzOiBbJ3NyYy9jb21wb25lbnRzJ10sXG4gICAgICBkdHM6IHJlc29sdmUocGF0aFNyYywgJ2NvbXBvbmVudHMuZC50cycpXG4gICAgfSksXG4gICAgRmlsZXNMb2FkZXIoKSxcbiAgICBzdmdMb2FkZXIoKVxuICBdO1xufTtcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gXHU2ODM5XHU2MzZFIGNvbXByZXNzIFx1OTE0RFx1N0Y2RVx1RkYwQ1x1NzUxRlx1NjIxMFx1NEUwRFx1NTQwQ1x1NzY4NFx1NTM4Qlx1N0YyOVx1ODlDNFx1NTIxOVxuICogQHBhcmFtIHZpdGVFbnZcbiAqL1xuY29uc3QgY3JlYXRlQ29tcHJlc3Npb24gPSAodml0ZUVudjogVml0ZUVudik6IFBsdWdpbk9wdGlvbiB8IFBsdWdpbk9wdGlvbltdID0+IHtcbiAgY29uc3QgeyBWSVRFX0JVSUxEX0NPTVBSRVNTID0gJ25vbmUnLCBWSVRFX0JVSUxEX0NPTVBSRVNTX0RFTEVURV9PUklHSU5fRklMRSB9ID0gdml0ZUVudjtcbiAgY29uc3QgY29tcHJlc3NMaXN0ID0gVklURV9CVUlMRF9DT01QUkVTUy5zcGxpdCgnLCcpO1xuICBjb25zdCBwbHVnaW5zOiBQbHVnaW5PcHRpb25bXSA9IFtdO1xuICBpZiAoY29tcHJlc3NMaXN0LmluY2x1ZGVzKCdnemlwJykpIHtcbiAgICBwbHVnaW5zLnB1c2goXG4gICAgICB2aXRlQ29tcHJlc3Npb24oe1xuICAgICAgICBleHQ6ICcuZ3onLFxuICAgICAgICBhbGdvcml0aG06ICdnemlwJyxcbiAgICAgICAgZGVsZXRlT3JpZ2luRmlsZTogVklURV9CVUlMRF9DT01QUkVTU19ERUxFVEVfT1JJR0lOX0ZJTEVcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuICBpZiAoY29tcHJlc3NMaXN0LmluY2x1ZGVzKCdicm90bGknKSkge1xuICAgIHBsdWdpbnMucHVzaChcbiAgICAgIHZpdGVDb21wcmVzc2lvbih7XG4gICAgICAgIGV4dDogJy5icicsXG4gICAgICAgIGFsZ29yaXRobTogJ2Jyb3RsaUNvbXByZXNzJyxcbiAgICAgICAgZGVsZXRlT3JpZ2luRmlsZTogVklURV9CVUlMRF9DT01QUkVTU19ERUxFVEVfT1JJR0lOX0ZJTEVcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuICByZXR1cm4gcGx1Z2lucztcbn07XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTZXLFNBQVMsY0FBYyxlQUFlO0FBQ25aLFNBQVMsV0FBQUEsZ0JBQWU7QUFDeEIsT0FBTyxXQUFXOzs7QUNGcVcsSUFBTyxjQUFRO0FBQUEsRUFDcFksRUFBRSxNQUFNLGdCQUFNLE1BQU0sbUJBQW1CO0FBQUEsRUFDdkMsRUFBRSxNQUFNLGdCQUFNLE1BQU0seUJBQXlCO0FBQy9DOzs7QUNIbVksSUFBTyxrQkFBUTtBQUFBLEVBQ2haLFVBQVU7QUFBQSxJQUNSO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixPQUFPLENBQUMsRUFBRSxNQUFNLDRCQUFRLE1BQU0sbUJBQW1CLENBQUM7QUFBQSxJQUNwRDtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxRQUNMLEVBQUUsTUFBTSxxQkFBVyxNQUFNLGFBQWE7QUFBQSxRQUN0QyxFQUFFLE1BQU0sdUJBQWEsTUFBTSxlQUFlO0FBQUEsUUFDMUMsRUFB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QUNQLE9BQU8sQ0FBQyxHQUFHLENBQUM7QUFBQSxNQUNaLE9BQU87QUFBQSxJQUNUO0FBQUEsSUFFQSxXQUFXO0FBQUEsTUFDVCxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsSUFDUjtBQUFBLEVBQ0Y7QUFBQSxFQUVBLE1BQU07QUFBQSxJQUNKLFNBQVMsQ0FBQyxPQUFPO0FBQUEsSUFDakIsU0FBUztBQUFBLE1BQ1AsT0FBTztBQUFBLFFBQ0wsU0FBU0QsU0FBUUUsbUNBQVcsU0FBUztBQUFBLFFBQ3JDLFFBQVFGLFNBQVFFLG1DQUFXLGFBQWE7QUFBQSxNQUMxQztBQUFBLElBQ0Y7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNQLE1BQU0sQ0FBQyxhQUFhO0FBQUEsTUFDcEIsTUFBTSxDQUFDLFVBQVU7QUFBQSxJQUNuQjtBQUFBLElBQ0EsUUFBUTtBQUFBLE1BQ04sY0FBYyxLQUFLLFVBQVUsWUFBWTtBQUFBLElBQzNDO0FBQUEsSUFDQSxRQUFRO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsSUFDUjtBQUFBLElBQ0EsS0FBSztBQUFBLE1BQ0gsWUFBWTtBQUFBLFFBQ1Y7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFsicmVzb2x2ZSIsICJ2aXRlRW52IiwgInBsdWdpbnMiLCAiX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUiLCAicmVzb2x2ZSIsICJlbnYiLCAiX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUiXQp9Cg==
