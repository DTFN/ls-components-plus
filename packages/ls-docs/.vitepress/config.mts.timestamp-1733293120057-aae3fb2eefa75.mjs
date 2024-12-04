// .vitepress/config.mts
import { defineConfig, loadEnv } from "file:///D:/NpmPackages/ls-components-plus/node_modules/.pnpm/vitepress@1.4.1_@algolia+client-search@4.24.0_@types+node@22.5.1_@types+react@18.3.5_async-va_faomye55yxzhkll3p2xlkv5z2q/node_modules/vitepress/dist/node/index.js";
import { resolve as resolve2 } from "path";
import dayjs from "file:///D:/NpmPackages/ls-components-plus/node_modules/.pnpm/dayjs@1.11.13/node_modules/dayjs/dayjs.min.js";

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
        { text: "Preview \u9884\u89C8", link: "/docs/preview" },
        { text: "Tree \u6743\u9650\u6811", link: "/docs/tree" },
        { text: "map \u5730\u56FE", link: "/docs/map" },
        { text: "live \u76F4\u64AD/\u89C6\u9891", link: "/docs/live" },
        { text: "json\u7F16\u8F91\u5668", link: "/docs/jsonEditor" },
        { text: "Editor \u7F16\u8F91\u5668", link: "/docs/editor" },
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
        { text: "BellMessage \u6D88\u606F\u901A\u77E5", link: "/docs/bellMessage" },
        { text: "Dialog \u5F39\u6846", link: "/docs/dialog" }
      ]
    },
    {
      text: "Other \u5176\u5B83\u7EC4\u4EF6",
      items: [
        { text: "Print \u6253\u5370", link: "/docs/print" },
        { text: "Flowbox \u6D41\u5F0F\u76D2\u5B50", link: "/docs/flowBox" },
        { text: "ContainerBox \u9002\u914D\u5BB9\u5668", link: "/docs/containerBox" }
      ]
    }
  ],
  "/tools/": [
    {
      text: "directives",
      items: [{ text: "auth", link: "/tools/directives/auth" }]
    },
    {
      text: "hooks",
      items: [
        { text: "useRouterHook", link: "/tools/hooks/useRouterHook" },
        { text: "useColorthiefHook", link: "/tools/hooks/useColorthiefHook" },
        { text: "useWSHook", link: "/tools/hooks/useWSHook" },
        { text: "useOptionHook", link: "/tools/hooks/useOptionHook" },
        { text: "useTableListHook", link: "/tools/hooks/useTableListHook" }
      ]
    },
    {
      text: "utils",
      items: [
        { text: "validate", link: "/tools/utils/validate" },
        { text: "check", link: "/tools/utils/check" }
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
import { visualizer } from "file:///D:/NpmPackages/ls-components-plus/node_modules/.pnpm/rollup-plugin-visualizer@5.12.0_rollup@4.21.1/node_modules/rollup-plugin-visualizer/dist/plugin/index.js";
import simpleHtmlPlugin from "file:///D:/NpmPackages/ls-components-plus/node_modules/.pnpm/vite-plugin-simple-html@0.1.2_vite@5.4.2_@types+node@22.5.1_sass@1.77.8_terser@5.36.0_/node_modules/vite-plugin-simple-html/dist/index.js";
import vueJsx from "file:///D:/NpmPackages/ls-components-plus/node_modules/.pnpm/@vitejs+plugin-vue-jsx@4.0.1_vite@5.4.2_@types+node@22.5.1_sass@1.77.8_terser@5.36.0__vue@3.4.38_typescript@5.5.4_/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import eslintPlugin from "file:///D:/NpmPackages/ls-components-plus/node_modules/.pnpm/vite-plugin-eslint@1.8.1_eslint@8.57.0_vite@5.4.2_@types+node@22.5.1_sass@1.77.8_terser@5.36.0_/node_modules/vite-plugin-eslint/dist/index.mjs";
import viteCompression from "file:///D:/NpmPackages/ls-components-plus/node_modules/.pnpm/vite-plugin-compression@0.5.1_vite@5.4.2_@types+node@22.5.1_sass@1.77.8_terser@5.36.0_/node_modules/vite-plugin-compression/dist/index.mjs";
import vueSetupExtend from "file:///D:/NpmPackages/ls-components-plus/node_modules/.pnpm/unplugin-vue-setup-extend-plus@1.0.1/node_modules/unplugin-vue-setup-extend-plus/dist/vite.js";
import Components from "file:///D:/NpmPackages/ls-components-plus/node_modules/.pnpm/unplugin-vue-components@0.27.4_@babel+parser@7.25.4_rollup@4.21.1_vue@3.4.38_typescript@5.5.4_/node_modules/unplugin-vue-components/dist/vite.js";
import { ElementPlusResolver } from "file:///D:/NpmPackages/ls-components-plus/node_modules/.pnpm/unplugin-vue-components@0.27.4_@babel+parser@7.25.4_rollup@4.21.1_vue@3.4.38_typescript@5.5.4_/node_modules/unplugin-vue-components/dist/resolvers.js";
import AutoImport from "file:///D:/NpmPackages/ls-components-plus/node_modules/.pnpm/unplugin-auto-import@0.18.2_@vueuse+core@10.11.1_vue@3.4.38_typescript@5.5.4___rollup@4.21.1/node_modules/unplugin-auto-import/dist/vite.js";
import FilesLoader from "file:///D:/NpmPackages/ls-components-plus/node_modules/.pnpm/vite-plugin-files-loader@1.1.1_vite@5.4.2_@types+node@22.5.1_sass@1.77.8_terser@5.36.0_/node_modules/vite-plugin-files-loader/dist/index.mjs";
import svgLoader from "file:///D:/NpmPackages/ls-components-plus/node_modules/.pnpm/vite-svg-loader@5.1.0_vue@3.4.38_typescript@5.5.4_/node_modules/vite-svg-loader/index.js";
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLnZpdGVwcmVzcy9jb25maWcubXRzIiwgIi52aXRlcHJlc3MvbmF2L2luZGV4LnRzIiwgIi52aXRlcHJlc3Mvc2lkZWJhci9pbmRleC50cyIsICIudml0ZXByZXNzL2hlYWQvaW5kZXgudHMiLCAiYnVpbGQvZ2V0RW52LnRzIiwgImJ1aWxkL3BsdWdpbnMudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxOcG1QYWNrYWdlc1xcXFxscy1jb21wb25lbnRzLXBsdXNcXFxccGFja2FnZXNcXFxcbHMtZG9jc1xcXFwudml0ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxOcG1QYWNrYWdlc1xcXFxscy1jb21wb25lbnRzLXBsdXNcXFxccGFja2FnZXNcXFxcbHMtZG9jc1xcXFwudml0ZXByZXNzXFxcXGNvbmZpZy5tdHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L05wbVBhY2thZ2VzL2xzLWNvbXBvbmVudHMtcGx1cy9wYWNrYWdlcy9scy1kb2NzLy52aXRlcHJlc3MvY29uZmlnLm10c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZywgbG9hZEVudiB9IGZyb20gJ3ZpdGVwcmVzcyc7XG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAncGF0aCc7XG5pbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnO1xuaW1wb3J0IG5hdiBmcm9tICcuL25hdi9pbmRleCc7XG5pbXBvcnQgc2lkZWJhciBmcm9tICcuL3NpZGViYXIvaW5kZXgnO1xuaW1wb3J0IGhlYWQgZnJvbSAnLi9oZWFkL2luZGV4JztcbmltcG9ydCB7IHdyYXBwZXJFbnYgfSBmcm9tICcuLi9idWlsZC9nZXRFbnYnO1xuaW1wb3J0IHsgY3JlYXRlVml0ZVBsdWdpbnMgfSBmcm9tICcuLi9idWlsZC9wbHVnaW5zJztcblxuY29uc3Qgcm9vdCA9IHByb2Nlc3MuY3dkKCk7XG5jb25zdCBOT0RFX0VOVjogYW55ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlY7XG5jb25zdCBlbnYgPSBsb2FkRW52KE5PREVfRU5WLCByb290KTtcbmNvbnN0IHZpdGVFbnYgPSB3cmFwcGVyRW52KGVudik7XG5jb25zdCBwbHVnaW5zOiBhbnkgPSBjcmVhdGVWaXRlUGx1Z2lucyh2aXRlRW52KTtcblxuY29uc3QgX19BUFBfSU5GT19fID0ge1xuICBsYXN0QnVpbGRUaW1lOiBkYXlqcygpLmZvcm1hdCgnWVlZWS1NTS1ERCBISDptbTpzcycpXG59O1xuXG4vLyBodHRwczovL3ZpdGVwcmVzcy5kZXYvcmVmZXJlbmNlL3NpdGUtY29uZmlnXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBvdXREaXI6IHJlc29sdmUoJy4uLy4uL2Rpc3QvJyksXG4gIHRpdGxlOiAnXHU1MjREXHU3QUVGXHU3RUM0XHU0RUY2XHU1RTkzXHVGRjA4VnVlM1x1RkYwOScsXG4gIGRlc2NyaXB0aW9uOiAnXHU1MjREXHU3QUVGXHU3RUM0XHU0RUY2XHU1RTkzXHVGRjA4VnVlM1x1RkYwOVx1NTNDQVx1NTE2Q1x1NTE3MVx1NjVCOVx1NkNENVx1NEY3Rlx1NzUyOFx1NjI0Qlx1NTE4QycsXG4gIC8vIGNsZWFuVXJsczogdHJ1ZSxcbiAgbGFzdFVwZGF0ZWQ6IHRydWUsXG5cbiAgbGFuZzogJ2NuLVpIJyxcblxuICBoZWFkLFxuXG4gIG1hcmtkb3duOiB7XG4gICAgbGluZU51bWJlcnM6IHRydWUsXG4gICAgY29kZVRyYW5zZm9ybWVyczogW1xuICAgICAge1xuICAgICAgICBwb3N0cHJvY2Vzcyhjb2RlKSB7XG4gICAgICAgICAgcmV0dXJuIGNvZGUucmVwbGFjZSgvXFxbXFwhXFwhY29kZS9nLCAnWyFjb2RlJylcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF0sXG4gICAgaW1hZ2U6IHtcbiAgICAgIGxhenlMb2FkaW5nOiB0cnVlXG4gICAgfSxcbiAgICBjb25maWc6IChtZCkgPT4ge1xuICAgICAgbWQucmVuZGVyZXIucnVsZXMuaGVhZGluZ19jbG9zZSA9ICh0b2tlbnMsIGlkeCwgb3B0aW9ucywgZW52LCBzbGYpID0+IHtcbiAgICAgICAgICBsZXQgaHRtbFJlc3VsdCA9IHNsZi5yZW5kZXJUb2tlbih0b2tlbnMsIGlkeCwgb3B0aW9ucyk7XG4gICAgICAgICAgaWYgKHRva2Vuc1tpZHhdLnRhZyA9PT0gJ2gxJykgaHRtbFJlc3VsdCArPSBgPEFydGljbGVNZXRhZGF0YSAvPmA7IFxuICAgICAgICAgIHJldHVybiBodG1sUmVzdWx0O1xuICAgICAgfVxuICAgIH0sXG4gIH0sXG5cbiAgdGhlbWVDb25maWc6IHtcbiAgICAvLyBodHRwczovL3ZpdGVwcmVzcy5kZXYvcmVmZXJlbmNlL2RlZmF1bHQtdGhlbWUtY29uZmlnXG5cbiAgICBsb2dvOiAnL2xvZ28ucG5nJyxcblxuICAgIGxhc3RVcGRhdGVkOiB7XG4gICAgICB0ZXh0OiAnXHU0RTBBXHU2QjIxXHU2NkY0XHU2NUIwXHU2NUY2XHU5NUY0JyxcbiAgICAgIGZvcm1hdE9wdGlvbnM6IHtcbiAgICAgICAgZGF0ZVN0eWxlOiAnc2hvcnQnLCAvLyBcdTUzRUZcdTkwMDlcdTUwM0NmdWxsXHUzMDAxbG9uZ1x1MzAwMW1lZGl1bVx1MzAwMXNob3J0XG4gICAgICAgIHRpbWVTdHlsZTogJ21lZGl1bScgLy8gXHU1M0VGXHU5MDA5XHU1MDNDZnVsbFx1MzAwMWxvbmdcdTMwMDFtZWRpdW1cdTMwMDFzaG9ydFxuICAgICAgfSxcbiAgICB9LFxuXG4gICAgc2l0ZVRpdGxlOiBmYWxzZSxcblxuICAgIHNlYXJjaDoge1xuICAgICAgcHJvdmlkZXI6ICdsb2NhbCcsXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIGxvY2FsZXM6IHtcbiAgICAgICAgICB6aDoge1xuICAgICAgICAgICAgdHJhbnNsYXRpb25zOiB7XG4gICAgICAgICAgICAgIGJ1dHRvbjoge1xuICAgICAgICAgICAgICAgIGJ1dHRvblRleHQ6ICdcdTY0MUNcdTdEMjJcdTY1ODdcdTY4NjMnLFxuICAgICAgICAgICAgICAgIGJ1dHRvbkFyaWFMYWJlbDogJ1x1NjQxQ1x1N0QyMlx1NjU4N1x1Njg2MydcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgbW9kYWw6IHtcbiAgICAgICAgICAgICAgICBub1Jlc3VsdHNUZXh0OiAnXHU2NUUwXHU2Q0Q1XHU2MjdFXHU1MjMwXHU3NkY4XHU1MTczXHU3RUQzXHU2NzlDJyxcbiAgICAgICAgICAgICAgICByZXNldEJ1dHRvblRpdGxlOiAnXHU2RTA1XHU5NjY0XHU2N0U1XHU4QkUyXHU2NzYxXHU0RUY2JyxcbiAgICAgICAgICAgICAgICBmb290ZXI6IHtcbiAgICAgICAgICAgICAgICAgIHNlbGVjdFRleHQ6ICdcdTkwMDlcdTYyRTknLFxuICAgICAgICAgICAgICAgICAgbmF2aWdhdGVUZXh0OiAnXHU1MjA3XHU2MzYyJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG5cbiAgICBuYXYsXG5cbiAgICBzaWRlYmFyLFxuXG4gICAgZm9vdGVyOiB7XG4gICAgICBtZXNzYWdlOiAnXHU5NkY2XHU2NTcwXHU3OUQxXHU2MjgwXHU1MjREXHU3QUVGXHU1NkUyXHU5NjFGJyxcbiAgICAgIGNvcHlyaWdodDogJ1x1MDBBOSAyMDI0IGxpbmdzaHUgVGVjaCBMdGQuIEFsbCBSaWdodHMgUmVzZXJ2ZWQnXG4gICAgfSxcbiAgICBzaWRlYmFyTWVudUxhYmVsOiAnXHU3NkVFXHU1RjU1JyxcblxuICAgIHJldHVyblRvVG9wTGFiZWw6ICdcdThGRDRcdTU2REVcdTk4NzZcdTkwRTgnLFxuXG4gICAgb3V0bGluZToge1xuICAgICAgbGV2ZWw6IFsyLCAzXSxcbiAgICAgIGxhYmVsOiAnXHU1RjUzXHU1MjREXHU5ODc1XHU1OTI3XHU3RUIyJ1xuICAgIH0sXG5cbiAgICBkb2NGb290ZXI6IHtcbiAgICAgIHByZXY6ICdcdTRFMEFcdTRFMDBcdTk4NzUnLFxuICAgICAgbmV4dDogJ1x1NEUwQlx1NEUwMFx1OTg3NScsXG4gICAgfSxcbiAgfSxcblxuICB2aXRlOiB7XG4gICAgcGx1Z2luczogW3BsdWdpbnNdLFxuICAgIHJlc29sdmU6IHtcbiAgICAgIGFsaWFzOiB7XG4gICAgICAgICdAZG9jcyc6IHJlc29sdmUoX19kaXJuYW1lLCAnLi4vZG9jcycpLFxuICAgICAgICAnQGV4cCc6IHJlc29sdmUoX19kaXJuYW1lLCAnLi4vZXhhbXBsZXMnKSxcbiAgICAgIH1cbiAgICB9LFxuICAgIGVzYnVpbGQ6IHtcbiAgICAgIHB1cmU6IFsnY29uc29sZS5sb2cnXSxcbiAgICAgIGRyb3A6IFsnZGVidWdnZXInXVxuICAgIH0sXG4gICAgZGVmaW5lOiB7XG4gICAgICBfX0FQUF9JTkZPX186IEpTT04uc3RyaW5naWZ5KF9fQVBQX0lORk9fXylcbiAgICB9LFxuICAgIHNlcnZlcjoge1xuICAgICAgaG9zdDogJzAuMC4wLjAnLFxuICAgICAgcG9ydDogOTA5MyxcbiAgICB9LFxuICAgIHNzcjoge1xuICAgICAgbm9FeHRlcm5hbDogW1xuICAgICAgICAndnVlMy1wcmludC1uYicsXG4gICAgICAgICdlbGVtZW50LXBsdXMnLFxuICAgICAgICAnQHdhbmdlZGl0b3IvZWRpdG9yJyxcbiAgICAgICAgJ0B3YW5nZWRpdG9yL2VkaXRvci1mb3ItdnVlJyxcbiAgICAgICAgJ0BsaW5nc2h1Z3JvdXAvd2ViLXBsdXMnLFxuICAgICAgICAnbG9kYXNoJyxcbiAgICAgICAgJ3BkZmpzLWRpc3QnLFxuICAgICAgICAnZWNoYXJ0cycsXG4gICAgICAgICd2dWUzLXRzLWpzb25lZGl0b3InLFxuICAgICAgICAnbHVja3lleGNlbCcsXG4gICAgICAgICdAYW1hcC9hbWFwLWpzYXBpLWxvYWRlcidcbiAgICAgIF1cbiAgICB9XG4gIH1cbn0pXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXE5wbVBhY2thZ2VzXFxcXGxzLWNvbXBvbmVudHMtcGx1c1xcXFxwYWNrYWdlc1xcXFxscy1kb2NzXFxcXC52aXRlcHJlc3NcXFxcbmF2XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxOcG1QYWNrYWdlc1xcXFxscy1jb21wb25lbnRzLXBsdXNcXFxccGFja2FnZXNcXFxcbHMtZG9jc1xcXFwudml0ZXByZXNzXFxcXG5hdlxcXFxpbmRleC50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovTnBtUGFja2FnZXMvbHMtY29tcG9uZW50cy1wbHVzL3BhY2thZ2VzL2xzLWRvY3MvLnZpdGVwcmVzcy9uYXYvaW5kZXgudHNcIjtleHBvcnQgZGVmYXVsdCBbXG4gIHsgdGV4dDogJ1x1N0VDNFx1NEVGNicsIGxpbms6ICcvZG9jcy9xdWlja3N0YXJ0JyB9LFxuICB7IHRleHQ6ICdcdTY1QjlcdTZDRDUnLCBsaW5rOiAnL3Rvb2xzL2RpcmVjdGl2ZXMvYXV0aCcgfVxuXTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxcTnBtUGFja2FnZXNcXFxcbHMtY29tcG9uZW50cy1wbHVzXFxcXHBhY2thZ2VzXFxcXGxzLWRvY3NcXFxcLnZpdGVwcmVzc1xcXFxzaWRlYmFyXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxOcG1QYWNrYWdlc1xcXFxscy1jb21wb25lbnRzLXBsdXNcXFxccGFja2FnZXNcXFxcbHMtZG9jc1xcXFwudml0ZXByZXNzXFxcXHNpZGViYXJcXFxcaW5kZXgudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L05wbVBhY2thZ2VzL2xzLWNvbXBvbmVudHMtcGx1cy9wYWNrYWdlcy9scy1kb2NzLy52aXRlcHJlc3Mvc2lkZWJhci9pbmRleC50c1wiO2V4cG9ydCBkZWZhdWx0IHtcbiAgJy9kb2NzLyc6IFtcbiAgICB7XG4gICAgICB0ZXh0OiAnXHU2MzA3XHU1MzU3JyxcbiAgICAgIGl0ZW1zOiBbeyB0ZXh0OiAnXHU1RkVCXHU5MDFGXHU1RjAwXHU1OUNCJywgbGluazogJy9kb2NzL3F1aWNrc3RhcnQnIH1dXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnQmFzaWMgXHU1N0ZBXHU3ODQwXHU3RUM0XHU0RUY2JyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdGV4dDogJ0ljb24gXHU1NkZFXHU2ODA3JywgbGluazogJy9kb2NzL2ljb24nIH0sXG4gICAgICAgIHsgdGV4dDogJ0J1dHRvbiBcdTYzMDlcdTk0QUUnLCBsaW5rOiAnL2RvY3MvYnV0dG9uJyB9LFxuICAgICAgICB7IHRleHQ6ICdMYXlvdXQgXHU1RTAzXHU1QzQwJywgbGluazogJy9kb2NzL2xheW91dCcgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ0Zvcm0gXHU4ODY4XHU1MzU1XHU3RUM0XHU0RUY2JyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdGV4dDogJ0Zvcm0gXHU4ODY4XHU1MzU1JywgbGluazogJy9kb2NzL2Zvcm0nIH0sXG4gICAgICAgIHsgdGV4dDogJ1VwbG9hZCBcdTRFMEFcdTRGMjAnLCBsaW5rOiAnL2RvY3MvdXBsb2FkJyB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnRGF0YSBcdTY1NzBcdTYzNkVcdTVDNTVcdTc5M0EnLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiAnVGFibGUgXHU4ODY4XHU2ODNDJywgbGluazogJy9kb2NzL3RhYmxlJyB9LFxuICAgICAgICB7IHRleHQ6ICdEZXNjcmlwdGlvbnMgXHU2M0NGXHU4RkYwJywgbGluazogJy9kb2NzL2Rlc2NyaXB0aW9ucycgfSxcbiAgICAgICAgeyB0ZXh0OiAnUHJldmlldyBcdTk4ODRcdTg5QzgnLCBsaW5rOiAnL2RvY3MvcHJldmlldycgfSxcbiAgICAgICAgeyB0ZXh0OiAnVHJlZSBcdTY3NDNcdTk2NTBcdTY4MTEnLCBsaW5rOiAnL2RvY3MvdHJlZScgfSxcbiAgICAgICAgeyB0ZXh0OiAnbWFwIFx1NTczMFx1NTZGRScsIGxpbms6ICcvZG9jcy9tYXAnIH0sXG4gICAgICAgIHsgdGV4dDogJ2xpdmUgXHU3NkY0XHU2NEFEL1x1ODlDNlx1OTg5MScsIGxpbms6ICcvZG9jcy9saXZlJyB9LFxuICAgICAgICB7IHRleHQ6ICdqc29uXHU3RjE2XHU4RjkxXHU1NjY4JywgbGluazogJy9kb2NzL2pzb25FZGl0b3InIH0sXG4gICAgICAgIHsgdGV4dDogJ0VkaXRvciBcdTdGMTZcdThGOTFcdTU2NjgnLCBsaW5rOiAnL2RvY3MvZWRpdG9yJyB9LFxuICAgICAgICB7IHRleHQ6ICdMaXN0IFx1NTIxN1x1ODg2OCcsIGxpbms6ICcvZG9jcy9saXN0JyB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnQ2hhcnQgXHU1NkZFXHU4ODY4JyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdGV4dDogJ2NoYXJ0IFx1NEVDQlx1N0VDRCcsIGxpbms6ICcvZG9jcy9jaGFydHMvJyB9LFxuICAgICAgICB7IHRleHQ6ICdCYXIgXHU2N0YxXHU3MkI2XHU1NkZFJywgbGluazogJy9kb2NzL2NoYXJ0cy9iYXInIH0sXG4gICAgICAgIHsgdGV4dDogJ0xpbmUgXHU2Mjk4XHU3RUJGXHU1NkZFJywgbGluazogJy9kb2NzL2NoYXJ0cy9saW5lJyB9LFxuICAgICAgICB7IHRleHQ6ICdQaWUgXHU5OTdDXHU1NkZFJywgbGluazogJy9kb2NzL2NoYXJ0cy9waWUnIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdOYXZpZ2F0aW9uIFx1NUJGQ1x1ODIyQScsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHRleHQ6ICdCYWNrdG9wIFx1NTZERVx1NTIzMFx1OTg3Nlx1OTBFOCcsIGxpbms6ICcvZG9jcy9iYWNrdG9wJyB9LFxuICAgICAgICB7IHRleHQ6ICdCcmVhZGNydW1iIFx1OTc2Mlx1NTMwNVx1NUM1MScsIGxpbms6ICcvZG9jcy9icmVhZGNydW1iJyB9LFxuICAgICAgICB7IHRleHQ6ICdNZW51IFx1ODNEQ1x1NTM1NScsIGxpbms6ICcvZG9jcy9tZW51JyB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnRmVlZGJhY2sgXHU1M0NEXHU5OTg4XHU3RUM0XHU0RUY2JyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdGV4dDogJ0NvbmZpcm0gXHU3ODZFXHU4QkE0XHU2ODQ2JywgbGluazogJy9kb2NzL2NvbmZpcm0nIH0sXG4gICAgICAgIHsgdGV4dDogJ0JlbGxNZXNzYWdlIFx1NkQ4OFx1NjA2Rlx1OTAxQVx1NzdFNScsIGxpbms6ICcvZG9jcy9iZWxsTWVzc2FnZScgfSxcbiAgICAgICAgeyB0ZXh0OiAnRGlhbG9nIFx1NUYzOVx1Njg0NicsIGxpbms6ICcvZG9jcy9kaWFsb2cnIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdPdGhlciBcdTUxNzZcdTVCODNcdTdFQzRcdTRFRjYnLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiAnUHJpbnQgXHU2MjUzXHU1MzcwJywgbGluazogJy9kb2NzL3ByaW50JyB9LFxuICAgICAgICB7IHRleHQ6ICdGbG93Ym94IFx1NkQ0MVx1NUYwRlx1NzZEMlx1NUI1MCcsIGxpbms6ICcvZG9jcy9mbG93Qm94JyB9LFxuICAgICAgICB7IHRleHQ6ICdDb250YWluZXJCb3ggXHU5MDAyXHU5MTREXHU1QkI5XHU1NjY4JywgbGluazogJy9kb2NzL2NvbnRhaW5lckJveCcgfVxuICAgICAgXVxuICAgIH1cbiAgXSxcbiAgJy90b29scy8nOiBbXG4gICAge1xuICAgICAgdGV4dDogJ2RpcmVjdGl2ZXMnLFxuICAgICAgaXRlbXM6IFt7IHRleHQ6ICdhdXRoJywgbGluazogJy90b29scy9kaXJlY3RpdmVzL2F1dGgnIH1dXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnaG9va3MnLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiAndXNlUm91dGVySG9vaycsIGxpbms6ICcvdG9vbHMvaG9va3MvdXNlUm91dGVySG9vaycgfSxcbiAgICAgICAgeyB0ZXh0OiAndXNlQ29sb3J0aGllZkhvb2snLCBsaW5rOiAnL3Rvb2xzL2hvb2tzL3VzZUNvbG9ydGhpZWZIb29rJyB9LFxuICAgICAgICB7IHRleHQ6ICd1c2VXU0hvb2snLCBsaW5rOiAnL3Rvb2xzL2hvb2tzL3VzZVdTSG9vaycgfSxcbiAgICAgICAgeyB0ZXh0OiAndXNlT3B0aW9uSG9vaycsIGxpbms6ICcvdG9vbHMvaG9va3MvdXNlT3B0aW9uSG9vaycgfSxcbiAgICAgICAgeyB0ZXh0OiAndXNlVGFibGVMaXN0SG9vaycsIGxpbms6ICcvdG9vbHMvaG9va3MvdXNlVGFibGVMaXN0SG9vaycgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ3V0aWxzJyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdGV4dDogJ3ZhbGlkYXRlJywgbGluazogJy90b29scy91dGlscy92YWxpZGF0ZScgfSxcbiAgICAgICAgeyB0ZXh0OiAnY2hlY2snLCBsaW5rOiAnL3Rvb2xzL3V0aWxzL2NoZWNrJyB9XG4gICAgICBdXG4gICAgfVxuICBdXG59O1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxOcG1QYWNrYWdlc1xcXFxscy1jb21wb25lbnRzLXBsdXNcXFxccGFja2FnZXNcXFxcbHMtZG9jc1xcXFwudml0ZXByZXNzXFxcXGhlYWRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXE5wbVBhY2thZ2VzXFxcXGxzLWNvbXBvbmVudHMtcGx1c1xcXFxwYWNrYWdlc1xcXFxscy1kb2NzXFxcXC52aXRlcHJlc3NcXFxcaGVhZFxcXFxpbmRleC50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovTnBtUGFja2FnZXMvbHMtY29tcG9uZW50cy1wbHVzL3BhY2thZ2VzL2xzLWRvY3MvLnZpdGVwcmVzcy9oZWFkL2luZGV4LnRzXCI7Y29uc3QgaGVhZDogYW55ID0gW1xuICBbJ2xpbmsnLCB7IHJlbDogJ2ljb24nLCBocmVmOiAnL2Zhdmljb24ucG5nJyB9XSxcbiAgWydsaW5rJywgeyBocmVmOiAnaHR0cHM6Ly9mcm9udC1kZXZlbG9wbWVudC5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vZnJvbnQtZGV2L2x1Y2t5c2hlZXQvcGx1Z2lucy9jc3MvcGx1Z2luc0Nzcy5jc3MnIH1dLFxuICBbJ2xpbmsnLCB7IGhyZWY6ICdodHRwczovL2Zyb250LWRldmVsb3BtZW50Lm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9mcm9udC1kZXYvbHVja3lzaGVldC9wbHVnaW5zL3BsdWdpbnMuY3NzJyB9XSxcbiAgWydsaW5rJywgeyBocmVmOiAnaHR0cHM6Ly9mcm9udC1kZXZlbG9wbWVudC5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vZnJvbnQtZGV2L2x1Y2t5c2hlZXQvY3NzL2x1Y2t5c2hlZXQuY3NzJyB9XSxcbiAgWydsaW5rJywgeyBocmVmOiAnaHR0cHM6Ly9mcm9udC1kZXZlbG9wbWVudC5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vZnJvbnQtZGV2L2x1Y2t5c2hlZXQvYXNzZXRzL2ljb25mb250L2ljb25mb250LmNzcycgfV0sXG4gIFsnc2NyaXB0JywgeyBzcmM6ICdodHRwczovL2Zyb250LWRldmVsb3BtZW50Lm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9mcm9udC1kZXYvbHVja3lzaGVldC9wbHVnaW5zL2pzL3BsdWdpbi5qcycgfV0sXG4gIFsnc2NyaXB0JywgeyBzcmM6ICdodHRwczovL2Zyb250LWRldmVsb3BtZW50Lm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9mcm9udC1kZXYvbHVja3lzaGVldC9sdWNreXNoZWV0LnVtZC5qcycgfV1cbl07XG5leHBvcnQgZGVmYXVsdCBoZWFkO1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxOcG1QYWNrYWdlc1xcXFxscy1jb21wb25lbnRzLXBsdXNcXFxccGFja2FnZXNcXFxcbHMtZG9jc1xcXFxidWlsZFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcTnBtUGFja2FnZXNcXFxcbHMtY29tcG9uZW50cy1wbHVzXFxcXHBhY2thZ2VzXFxcXGxzLWRvY3NcXFxcYnVpbGRcXFxcZ2V0RW52LnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9OcG1QYWNrYWdlcy9scy1jb21wb25lbnRzLXBsdXMvcGFja2FnZXMvbHMtZG9jcy9idWlsZC9nZXRFbnYudHNcIjtpbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCB7IFJlY29yZGFibGUsIFZpdGVFbnYgfSBmcm9tICcuLi90eXBpbmdzL2dsb2JhbCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0RldkZuKG1vZGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gbW9kZSA9PT0gJ2Rldic7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Byb2RGbihtb2RlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIG1vZGUgPT09ICdwcm9kJztcbn1cblxuLyoqXG4gKiBXaGV0aGVyIHRvIGdlbmVyYXRlIHBhY2thZ2UgcHJldmlld1xuICovXG5leHBvcnQgZnVuY3Rpb24gaXNSZXBvcnRNb2RlKCk6IGJvb2xlYW4ge1xuICByZXR1cm4gcHJvY2Vzcy5lbnYuVklURV9SRVBPUlQgPT09ICd0cnVlJztcbn1cblxuLy8gUmVhZCBhbGwgZW52aXJvbm1lbnQgdmFyaWFibGUgY29uZmlndXJhdGlvbiBmaWxlcyB0byBwcm9jZXNzLmVudlxuZXhwb3J0IGZ1bmN0aW9uIHdyYXBwZXJFbnYoZW52Q29uZjogUmVjb3JkYWJsZSk6IFZpdGVFbnYge1xuICBjb25zdCByZXQ6IGFueSA9IHt9O1xuXG4gIGZvciAoY29uc3QgZW52TmFtZSBvZiBPYmplY3Qua2V5cyhlbnZDb25mKSkge1xuICAgIGxldCByZWFsTmFtZSA9IGVudkNvbmZbZW52TmFtZV0ucmVwbGFjZSgvXFxcXG4vZywgJ1xcbicpO1xuICAgIHJlYWxOYW1lID0gcmVhbE5hbWUgPT09ICd0cnVlJyA/IHRydWUgOiByZWFsTmFtZSA9PT0gJ2ZhbHNlJyA/IGZhbHNlIDogcmVhbE5hbWU7XG4gICAgaWYgKGVudk5hbWUgPT09ICdWSVRFX1BPUlQnKSByZWFsTmFtZSA9IE51bWJlcihyZWFsTmFtZSk7XG4gICAgaWYgKGVudk5hbWUgPT09ICdWSVRFX1BST1hZJykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmVhbE5hbWUgPSBKU09OLnBhcnNlKHJlYWxOYW1lKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7fVxuICAgIH1cbiAgICByZXRbZW52TmFtZV0gPSByZWFsTmFtZTtcbiAgfVxuICByZXR1cm4gcmV0O1xufVxuXG4vKipcbiAqIEdldCB1c2VyIHJvb3QgZGlyZWN0b3J5XG4gKiBAcGFyYW0gZGlyIGZpbGUgcGF0aFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um9vdFBhdGgoLi4uZGlyOiBzdHJpbmdbXSkge1xuICByZXR1cm4gcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksIC4uLmRpcik7XG59XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXE5wbVBhY2thZ2VzXFxcXGxzLWNvbXBvbmVudHMtcGx1c1xcXFxwYWNrYWdlc1xcXFxscy1kb2NzXFxcXGJ1aWxkXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxOcG1QYWNrYWdlc1xcXFxscy1jb21wb25lbnRzLXBsdXNcXFxccGFja2FnZXNcXFxcbHMtZG9jc1xcXFxidWlsZFxcXFxwbHVnaW5zLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9OcG1QYWNrYWdlcy9scy1jb21wb25lbnRzLXBsdXMvcGFja2FnZXMvbHMtZG9jcy9idWlsZC9wbHVnaW5zLnRzXCI7aW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnO1xuaW1wb3J0IHsgUGx1Z2luT3B0aW9uIH0gZnJvbSAndml0ZSc7XG4vLyBpbXBvcnQgeyBWaXRlUFdBIH0gZnJvbSBcInZpdGUtcGx1Z2luLXB3YVwiO1xuaW1wb3J0IHsgdmlzdWFsaXplciB9IGZyb20gJ3JvbGx1cC1wbHVnaW4tdmlzdWFsaXplcic7XG5pbXBvcnQgc2ltcGxlSHRtbFBsdWdpbiBmcm9tICd2aXRlLXBsdWdpbi1zaW1wbGUtaHRtbCc7XG5pbXBvcnQgdnVlSnN4IGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZS1qc3gnO1xuaW1wb3J0IGVzbGludFBsdWdpbiBmcm9tICd2aXRlLXBsdWdpbi1lc2xpbnQnO1xuaW1wb3J0IHZpdGVDb21wcmVzc2lvbiBmcm9tICd2aXRlLXBsdWdpbi1jb21wcmVzc2lvbic7XG5pbXBvcnQgdnVlU2V0dXBFeHRlbmQgZnJvbSAndW5wbHVnaW4tdnVlLXNldHVwLWV4dGVuZC1wbHVzL3ZpdGUnO1xuaW1wb3J0IENvbXBvbmVudHMgZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvdml0ZSc7XG5pbXBvcnQgeyBFbGVtZW50UGx1c1Jlc29sdmVyIH0gZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvcmVzb2x2ZXJzJztcbmltcG9ydCBBdXRvSW1wb3J0IGZyb20gJ3VucGx1Z2luLWF1dG8taW1wb3J0L3ZpdGUnO1xuaW1wb3J0IHsgVml0ZUVudiB9IGZyb20gJy4uL3R5cGluZ3MvZ2xvYmFsJztcbmltcG9ydCBGaWxlc0xvYWRlciBmcm9tICd2aXRlLXBsdWdpbi1maWxlcy1sb2FkZXInO1xuaW1wb3J0IHN2Z0xvYWRlciBmcm9tICd2aXRlLXN2Zy1sb2FkZXInO1xuXG5jb25zdCBwYXRoU3JjID0gcmVzb2x2ZShfX2Rpcm5hbWUsICcuLi90eXBpbmdzJyk7XG5cbi8qKlxuICogXHU1MjFCXHU1RUZBIHZpdGUgXHU2M0QyXHU0RUY2XG4gKiBAcGFyYW0gdml0ZUVudlxuICovXG5leHBvcnQgY29uc3QgY3JlYXRlVml0ZVBsdWdpbnMgPSAodml0ZUVudjogVml0ZUVudik6IChQbHVnaW5PcHRpb24gfCBQbHVnaW5PcHRpb25bXSlbXSA9PiB7XG4gIGNvbnN0IHsgVklURV9HTE9CX0FQUF9USVRMRSwgVklURV9SRVBPUlQgfSA9IHZpdGVFbnY7XG4gIHJldHVybiBbXG4gICAgLy8gdnVlIFx1NTNFRlx1NEVFNVx1NEY3Rlx1NzUyOCBqc3gvdHN4IFx1OEJFRFx1NkNENVxuICAgIHZ1ZUpzeCgpLFxuICAgIC8vIGVzTGludCBcdTYyQTVcdTk1MTlcdTRGRTFcdTYwNkZcdTY2M0VcdTc5M0FcdTU3MjhcdTZENEZcdTg5QzhcdTU2NjhcdTc1NENcdTk3NjJcdTRFMEFcbiAgICBlc2xpbnRQbHVnaW4oKSxcbiAgICAvLyBuYW1lIFx1NTNFRlx1NEVFNVx1NTE5OVx1NTcyOCBzY3JpcHQgXHU2ODA3XHU3QjdFXHU0RTBBXG4gICAgdnVlU2V0dXBFeHRlbmQoe30pLFxuICAgIC8vIFx1NTIxQlx1NUVGQVx1NjI1M1x1NTMwNVx1NTM4Qlx1N0YyOVx1OTE0RFx1N0Y2RVxuICAgIGNyZWF0ZUNvbXByZXNzaW9uKHZpdGVFbnYpLFxuICAgIC8vIFx1NkNFOFx1NTE2NVx1NTNEOFx1OTFDRlx1NTIzMCBodG1sIFx1NjU4N1x1NEVGNlxuICAgIHNpbXBsZUh0bWxQbHVnaW4oe1xuICAgICAgbWluaWZ5OiB0cnVlLFxuICAgICAgaW5qZWN0OiB7XG4gICAgICAgIGRhdGE6IHsgdGl0bGU6IFZJVEVfR0xPQl9BUFBfVElUTEUgfVxuICAgICAgfVxuICAgIH0pLFxuICAgIC8vIHZpdGVQV0FcbiAgICAvLyBWSVRFX1BXQSAmJiBjcmVhdGVWaXRlUHdhKHZpdGVFbnYpLFxuICAgIC8vIFx1NjYyRlx1NTQyNlx1NzUxRlx1NjIxMFx1NTMwNVx1OTg4NFx1ODlDOFx1RkYwQ1x1NTIwNlx1Njc5MFx1NEY5RFx1OEQ1Nlx1NTMwNVx1NTkyN1x1NUMwRlx1NTA1QVx1NEYxOFx1NTMxNlx1NTkwNFx1NzQwNlxuICAgIFZJVEVfUkVQT1JUICYmICh2aXN1YWxpemVyKHsgZmlsZW5hbWU6ICdzdGF0cy5odG1sJywgZ3ppcFNpemU6IHRydWUsIGJyb3RsaVNpemU6IHRydWUsIG9wZW46IHRydWUgfSkgYXMgUGx1Z2luT3B0aW9uKSxcbiAgICBBdXRvSW1wb3J0KHtcbiAgICAgIGltcG9ydHM6IFtcbiAgICAgICAgLy8gXHU5NzAwXHU4OTgxXHU4MUVBXHU1MkE4XHU1QkZDXHU1MTY1XHU3Njg0XHU2M0QyXHU0RUY2XHVGRjBDXHU4MUVBXHU1QjlBXHU0RTQ5XHU1QkZDXHU1MTY1XHU3Njg0QVBJXG4gICAgICAgICd2dWUnLFxuICAgICAgICAndnVlLXJvdXRlcicsXG4gICAgICAgICdwaW5pYSdcbiAgICAgIF0sXG4gICAgICBpZ25vcmU6IFsnaCddLFxuICAgICAgcmVzb2x2ZXJzOiBbRWxlbWVudFBsdXNSZXNvbHZlcigpXSxcbiAgICAgIGR0czogcmVzb2x2ZShwYXRoU3JjLCAnYXV0by1pbXBvcnRzLmQudHMnKVxuICAgIH0pLFxuICAgIENvbXBvbmVudHMoe1xuICAgICAgcmVzb2x2ZXJzOiBbRWxlbWVudFBsdXNSZXNvbHZlcigpXSxcbiAgICAgIGRpcnM6IFsnc3JjL2NvbXBvbmVudHMnXSxcbiAgICAgIGR0czogcmVzb2x2ZShwYXRoU3JjLCAnY29tcG9uZW50cy5kLnRzJylcbiAgICB9KSxcbiAgICBGaWxlc0xvYWRlcigpLFxuICAgIHN2Z0xvYWRlcigpXG4gIF07XG59O1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBcdTY4MzlcdTYzNkUgY29tcHJlc3MgXHU5MTREXHU3RjZFXHVGRjBDXHU3NTFGXHU2MjEwXHU0RTBEXHU1NDBDXHU3Njg0XHU1MzhCXHU3RjI5XHU4OUM0XHU1MjE5XG4gKiBAcGFyYW0gdml0ZUVudlxuICovXG5jb25zdCBjcmVhdGVDb21wcmVzc2lvbiA9ICh2aXRlRW52OiBWaXRlRW52KTogUGx1Z2luT3B0aW9uIHwgUGx1Z2luT3B0aW9uW10gPT4ge1xuICBjb25zdCB7IFZJVEVfQlVJTERfQ09NUFJFU1MgPSAnbm9uZScsIFZJVEVfQlVJTERfQ09NUFJFU1NfREVMRVRFX09SSUdJTl9GSUxFIH0gPSB2aXRlRW52O1xuICBjb25zdCBjb21wcmVzc0xpc3QgPSBWSVRFX0JVSUxEX0NPTVBSRVNTLnNwbGl0KCcsJyk7XG4gIGNvbnN0IHBsdWdpbnM6IFBsdWdpbk9wdGlvbltdID0gW107XG4gIGlmIChjb21wcmVzc0xpc3QuaW5jbHVkZXMoJ2d6aXAnKSkge1xuICAgIHBsdWdpbnMucHVzaChcbiAgICAgIHZpdGVDb21wcmVzc2lvbih7XG4gICAgICAgIGV4dDogJy5neicsXG4gICAgICAgIGFsZ29yaXRobTogJ2d6aXAnLFxuICAgICAgICBkZWxldGVPcmlnaW5GaWxlOiBWSVRFX0JVSUxEX0NPTVBSRVNTX0RFTEVURV9PUklHSU5fRklMRVxuICAgICAgfSlcbiAgICApO1xuICB9XG4gIGlmIChjb21wcmVzc0xpc3QuaW5jbHVkZXMoJ2Jyb3RsaScpKSB7XG4gICAgcGx1Z2lucy5wdXNoKFxuICAgICAgdml0ZUNvbXByZXNzaW9uKHtcbiAgICAgICAgZXh0OiAnLmJyJyxcbiAgICAgICAgYWxnb3JpdGhtOiAnYnJvdGxpQ29tcHJlc3MnLFxuICAgICAgICBkZWxldGVPcmlnaW5GaWxlOiBWSVRFX0JVSUxEX0NPTVBSRVNTX0RFTEVURV9PUklHSU5fRklMRVxuICAgICAgfSlcbiAgICApO1xuICB9XG4gIHJldHVybiBwbHVnaW5zO1xu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QkFDTixZQUFZO0FBQUEsZ0JBQ1osaUJBQWlCO0FBQUEsY0FDbkI7QUFBQSxjQUNBLE9BQU87QUFBQSxnQkFDTCxlQUFlO0FBQUEsZ0JBQ2Ysa0JBQWtCO0FBQUEsZ0JBQ2xCLFFBQVE7QUFBQSxrQkFDTixZQUFZO0FBQUEsa0JBQ1osY0FBYztBQUFBLGdCQUNoQjtBQUFBLGNBQ0Y7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBRUE7QUFBQSxJQUVBO0FBQUEsSUFFQSxRQUFRO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxXQUFXO0FBQUEsSUFDYjtBQUFBLElBQ0Esa0JBQWtCO0FBQUEsSUFFbEIsa0JBQWtCO0FBQUEsSUFFbEIsU0FBUztBQUFBLE1BQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQztBQUFBLE1BQ1osT0FBTztBQUFBLElBQ1Q7QUFBQSxJQUVBLFdBQVc7QUFBQSxNQUNULE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxJQUNSO0FBQUEsRUFDRjtBQUFBLEVBRUEsTUFBTTtBQUFBLElBQ0osU0FBUyxDQUFDLE9BQU87QUFBQSxJQUNqQixTQUFTO0FBQUEsTUFDUCxPQUFPO0FBQUEsUUFDTCxTQUFTRCxTQUFRRSxtQ0FBVyxTQUFTO0FBQUEsUUFDckMsUUFBUUYsU0FBUUUsbUNBQVcsYUFBYTtBQUFBLE1BQzFDO0FBQUEsSUFDRjtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1AsTUFBTSxDQUFDLGFBQWE7QUFBQSxNQUNwQixNQUFNLENBQUMsVUFBVTtBQUFBLElBQ25CO0FBQUEsSUFDQSxRQUFRO0FBQUEsTUFDTixjQUFjLEtBQUssVUFBVSxZQUFZO0FBQUEsSUFDM0M7QUFBQSxJQUNBLFFBQVE7QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxJQUNSO0FBQUEsSUFDQSxLQUFLO0FBQUEsTUFDSCxZQUFZO0FBQUEsUUFDVjtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogWyJyZXNvbHZlIiwgInZpdGVFbnYiLCAicGx1Z2lucyIsICJfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSIsICJyZXNvbHZlIiwgImVudiIsICJfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSJdCn0K
