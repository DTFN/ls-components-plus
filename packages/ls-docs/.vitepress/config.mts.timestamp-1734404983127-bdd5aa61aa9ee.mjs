// .vitepress/config.mts
import { defineConfig, loadEnv } from "file:///D:/NpmPackages/ls-components-plus/node_modules/.pnpm/vitepress@1.5.0_@algolia+client-search@5.17.1_@types+node@22.5.1_@types+react@18.3.5_async-va_fqqtmlftcjtfywuhghgjrxmji4/node_modules/vitepress/dist/node/index.js";
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
import vueJsx from "file:///D:/NpmPackages/ls-components-plus/node_modules/.pnpm/@vitejs+plugin-vue-jsx@4.0.1_vite@5.4.2_@types+node@22.5.1_sass@1.77.8_terser@5.36.0__vue@3.5.13_typescript@5.5.4_/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import eslintPlugin from "file:///D:/NpmPackages/ls-components-plus/node_modules/.pnpm/vite-plugin-eslint@1.8.1_eslint@8.57.0_vite@5.4.2_@types+node@22.5.1_sass@1.77.8_terser@5.36.0_/node_modules/vite-plugin-eslint/dist/index.mjs";
import viteCompression from "file:///D:/NpmPackages/ls-components-plus/node_modules/.pnpm/vite-plugin-compression@0.5.1_vite@5.4.2_@types+node@22.5.1_sass@1.77.8_terser@5.36.0_/node_modules/vite-plugin-compression/dist/index.mjs";
import vueSetupExtend from "file:///D:/NpmPackages/ls-components-plus/node_modules/.pnpm/unplugin-vue-setup-extend-plus@1.0.1/node_modules/unplugin-vue-setup-extend-plus/dist/vite.js";
import Components from "file:///D:/NpmPackages/ls-components-plus/node_modules/.pnpm/unplugin-vue-components@0.27.4_@babel+parser@7.25.4_rollup@4.21.1_vue@3.5.13_typescript@5.5.4_/node_modules/unplugin-vue-components/dist/vite.js";
import { ElementPlusResolver } from "file:///D:/NpmPackages/ls-components-plus/node_modules/.pnpm/unplugin-vue-components@0.27.4_@babel+parser@7.25.4_rollup@4.21.1_vue@3.5.13_typescript@5.5.4_/node_modules/unplugin-vue-components/dist/resolvers.js";
import AutoImport from "file:///D:/NpmPackages/ls-components-plus/node_modules/.pnpm/unplugin-auto-import@0.18.2_@vueuse+core@12.0.0_typescript@5.5.4__rollup@4.21.1/node_modules/unplugin-auto-import/dist/vite.js";
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
    })
    // FilesLoader(),
    // svgLoader()
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLnZpdGVwcmVzcy9jb25maWcubXRzIiwgIi52aXRlcHJlc3MvbmF2L2luZGV4LnRzIiwgIi52aXRlcHJlc3Mvc2lkZWJhci9pbmRleC50cyIsICIudml0ZXByZXNzL2hlYWQvaW5kZXgudHMiLCAiYnVpbGQvZ2V0RW52LnRzIiwgImJ1aWxkL3BsdWdpbnMudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxOcG1QYWNrYWdlc1xcXFxscy1jb21wb25lbnRzLXBsdXNcXFxccGFja2FnZXNcXFxcbHMtZG9jc1xcXFwudml0ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxOcG1QYWNrYWdlc1xcXFxscy1jb21wb25lbnRzLXBsdXNcXFxccGFja2FnZXNcXFxcbHMtZG9jc1xcXFwudml0ZXByZXNzXFxcXGNvbmZpZy5tdHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L05wbVBhY2thZ2VzL2xzLWNvbXBvbmVudHMtcGx1cy9wYWNrYWdlcy9scy1kb2NzLy52aXRlcHJlc3MvY29uZmlnLm10c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZywgbG9hZEVudiB9IGZyb20gJ3ZpdGVwcmVzcyc7XG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAncGF0aCc7XG5pbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnO1xuaW1wb3J0IG5hdiBmcm9tICcuL25hdi9pbmRleCc7XG5pbXBvcnQgc2lkZWJhciBmcm9tICcuL3NpZGViYXIvaW5kZXgnO1xuaW1wb3J0IGhlYWQgZnJvbSAnLi9oZWFkL2luZGV4JztcbmltcG9ydCB7IHdyYXBwZXJFbnYgfSBmcm9tICcuLi9idWlsZC9nZXRFbnYnO1xuaW1wb3J0IHsgY3JlYXRlVml0ZVBsdWdpbnMgfSBmcm9tICcuLi9idWlsZC9wbHVnaW5zJztcblxuY29uc3Qgcm9vdCA9IHByb2Nlc3MuY3dkKCk7XG5jb25zdCBOT0RFX0VOVjogYW55ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlY7XG5jb25zdCBlbnYgPSBsb2FkRW52KE5PREVfRU5WLCByb290KTtcbmNvbnN0IHZpdGVFbnYgPSB3cmFwcGVyRW52KGVudik7XG5jb25zdCBwbHVnaW5zOiBhbnkgPSBjcmVhdGVWaXRlUGx1Z2lucyh2aXRlRW52KTtcblxuY29uc3QgX19BUFBfSU5GT19fID0ge1xuICBsYXN0QnVpbGRUaW1lOiBkYXlqcygpLmZvcm1hdCgnWVlZWS1NTS1ERCBISDptbTpzcycpXG59O1xuXG4vLyBodHRwczovL3ZpdGVwcmVzcy5kZXYvcmVmZXJlbmNlL3NpdGUtY29uZmlnXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBvdXREaXI6IHJlc29sdmUoJy4uLy4uL2Rpc3QvJyksXG4gIHRpdGxlOiAnXHU1MjREXHU3QUVGXHU3RUM0XHU0RUY2XHU1RTkzXHVGRjA4VnVlM1x1RkYwOScsXG4gIGRlc2NyaXB0aW9uOiAnXHU1MjREXHU3QUVGXHU3RUM0XHU0RUY2XHU1RTkzXHVGRjA4VnVlM1x1RkYwOVx1NTNDQVx1NTE2Q1x1NTE3MVx1NjVCOVx1NkNENVx1NEY3Rlx1NzUyOFx1NjI0Qlx1NTE4QycsXG4gIC8vIGNsZWFuVXJsczogdHJ1ZSxcbiAgbGFzdFVwZGF0ZWQ6IHRydWUsXG5cbiAgbGFuZzogJ2NuLVpIJyxcblxuICBoZWFkLFxuXG4gIG1hcmtkb3duOiB7XG4gICAgbGluZU51bWJlcnM6IHRydWUsXG4gICAgY29kZVRyYW5zZm9ybWVyczogW1xuICAgICAge1xuICAgICAgICBwb3N0cHJvY2Vzcyhjb2RlKSB7XG4gICAgICAgICAgcmV0dXJuIGNvZGUucmVwbGFjZSgvXFxbXFwhXFwhY29kZS9nLCAnWyFjb2RlJylcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF0sXG4gICAgaW1hZ2U6IHtcbiAgICAgIGxhenlMb2FkaW5nOiB0cnVlXG4gICAgfSxcbiAgICBjb25maWc6IChtZCkgPT4ge1xuICAgICAgbWQucmVuZGVyZXIucnVsZXMuaGVhZGluZ19jbG9zZSA9ICh0b2tlbnMsIGlkeCwgb3B0aW9ucywgZW52LCBzbGYpID0+IHtcbiAgICAgICAgICBsZXQgaHRtbFJlc3VsdCA9IHNsZi5yZW5kZXJUb2tlbih0b2tlbnMsIGlkeCwgb3B0aW9ucyk7XG4gICAgICAgICAgaWYgKHRva2Vuc1tpZHhdLnRhZyA9PT0gJ2gxJykgaHRtbFJlc3VsdCArPSBgPEFydGljbGVNZXRhZGF0YSAvPmA7IFxuICAgICAgICAgIHJldHVybiBodG1sUmVzdWx0O1xuICAgICAgfVxuICAgIH0sXG4gIH0sXG5cbiAgdGhlbWVDb25maWc6IHtcbiAgICAvLyBodHRwczovL3ZpdGVwcmVzcy5kZXYvcmVmZXJlbmNlL2RlZmF1bHQtdGhlbWUtY29uZmlnXG5cbiAgICBsb2dvOiAnL2xvZ28ucG5nJyxcblxuICAgIGxhc3RVcGRhdGVkOiB7XG4gICAgICB0ZXh0OiAnXHU0RTBBXHU2QjIxXHU2NkY0XHU2NUIwXHU2NUY2XHU5NUY0JyxcbiAgICAgIGZvcm1hdE9wdGlvbnM6IHtcbiAgICAgICAgZGF0ZVN0eWxlOiAnc2hvcnQnLCAvLyBcdTUzRUZcdTkwMDlcdTUwM0NmdWxsXHUzMDAxbG9uZ1x1MzAwMW1lZGl1bVx1MzAwMXNob3J0XG4gICAgICAgIHRpbWVTdHlsZTogJ21lZGl1bScgLy8gXHU1M0VGXHU5MDA5XHU1MDNDZnVsbFx1MzAwMWxvbmdcdTMwMDFtZWRpdW1cdTMwMDFzaG9ydFxuICAgICAgfSxcbiAgICB9LFxuXG4gICAgc2l0ZVRpdGxlOiBmYWxzZSxcblxuICAgIHNlYXJjaDoge1xuICAgICAgcHJvdmlkZXI6ICdsb2NhbCcsXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIGxvY2FsZXM6IHtcbiAgICAgICAgICB6aDoge1xuICAgICAgICAgICAgdHJhbnNsYXRpb25zOiB7XG4gICAgICAgICAgICAgIGJ1dHRvbjoge1xuICAgICAgICAgICAgICAgIGJ1dHRvblRleHQ6ICdcdTY0MUNcdTdEMjJcdTY1ODdcdTY4NjMnLFxuICAgICAgICAgICAgICAgIGJ1dHRvbkFyaWFMYWJlbDogJ1x1NjQxQ1x1N0QyMlx1NjU4N1x1Njg2MydcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgbW9kYWw6IHtcbiAgICAgICAgICAgICAgICBub1Jlc3VsdHNUZXh0OiAnXHU2NUUwXHU2Q0Q1XHU2MjdFXHU1MjMwXHU3NkY4XHU1MTczXHU3RUQzXHU2NzlDJyxcbiAgICAgICAgICAgICAgICByZXNldEJ1dHRvblRpdGxlOiAnXHU2RTA1XHU5NjY0XHU2N0U1XHU4QkUyXHU2NzYxXHU0RUY2JyxcbiAgICAgICAgICAgICAgICBmb290ZXI6IHtcbiAgICAgICAgICAgICAgICAgIHNlbGVjdFRleHQ6ICdcdTkwMDlcdTYyRTknLFxuICAgICAgICAgICAgICAgICAgbmF2aWdhdGVUZXh0OiAnXHU1MjA3XHU2MzYyJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG5cbiAgICBuYXYsXG5cbiAgICBzaWRlYmFyLFxuXG4gICAgZm9vdGVyOiB7XG4gICAgICBtZXNzYWdlOiAnXHU5NkY2XHU2NTcwXHU3OUQxXHU2MjgwXHU1MjREXHU3QUVGXHU1NkUyXHU5NjFGJyxcbiAgICAgIGNvcHlyaWdodDogJ1x1MDBBOSAyMDI0IGxpbmdzaHUgVGVjaCBMdGQuIEFsbCBSaWdodHMgUmVzZXJ2ZWQnXG4gICAgfSxcbiAgICBzaWRlYmFyTWVudUxhYmVsOiAnXHU3NkVFXHU1RjU1JyxcblxuICAgIHJldHVyblRvVG9wTGFiZWw6ICdcdThGRDRcdTU2REVcdTk4NzZcdTkwRTgnLFxuXG4gICAgb3V0bGluZToge1xuICAgICAgbGV2ZWw6IFsyLCAzXSxcbiAgICAgIGxhYmVsOiAnXHU1RjUzXHU1MjREXHU5ODc1XHU1OTI3XHU3RUIyJ1xuICAgIH0sXG5cbiAgICBkb2NGb290ZXI6IHtcbiAgICAgIHByZXY6ICdcdTRFMEFcdTRFMDBcdTk4NzUnLFxuICAgICAgbmV4dDogJ1x1NEUwQlx1NEUwMFx1OTg3NScsXG4gICAgfSxcbiAgfSxcblxuICB2aXRlOiB7XG4gICAgcGx1Z2luczogW3BsdWdpbnNdLFxuICAgIHJlc29sdmU6IHtcbiAgICAgIGFsaWFzOiB7XG4gICAgICAgICdAZG9jcyc6IHJlc29sdmUoX19kaXJuYW1lLCAnLi4vZG9jcycpLFxuICAgICAgICAnQGV4cCc6IHJlc29sdmUoX19kaXJuYW1lLCAnLi4vZXhhbXBsZXMnKSxcbiAgICAgIH1cbiAgICB9LFxuICAgIGVzYnVpbGQ6IHtcbiAgICAgIHB1cmU6IFsnY29uc29sZS5sb2cnXSxcbiAgICAgIGRyb3A6IFsnZGVidWdnZXInXVxuICAgIH0sXG4gICAgZGVmaW5lOiB7XG4gICAgICBfX0FQUF9JTkZPX186IEpTT04uc3RyaW5naWZ5KF9fQVBQX0lORk9fXylcbiAgICB9LFxuICAgIHNlcnZlcjoge1xuICAgICAgaG9zdDogJzAuMC4wLjAnLFxuICAgICAgcG9ydDogOTA5MyxcbiAgICB9LFxuICAgIHNzcjoge1xuICAgICAgbm9FeHRlcm5hbDogW1xuICAgICAgICAndnVlMy1wcmludC1uYicsXG4gICAgICAgICdlbGVtZW50LXBsdXMnLFxuICAgICAgICAnQHdhbmdlZGl0b3IvZWRpdG9yJyxcbiAgICAgICAgJ0B3YW5nZWRpdG9yL2VkaXRvci1mb3ItdnVlJyxcbiAgICAgICAgJ0BsaW5nc2h1Z3JvdXAvd2ViLXBsdXMnLFxuICAgICAgICAnbG9kYXNoJyxcbiAgICAgICAgJ3BkZmpzLWRpc3QnLFxuICAgICAgICAnZWNoYXJ0cycsXG4gICAgICAgICd2dWUzLXRzLWpzb25lZGl0b3InLFxuICAgICAgICAnbHVja3lleGNlbCcsXG4gICAgICAgICdAYW1hcC9hbWFwLWpzYXBpLWxvYWRlcidcbiAgICAgIF1cbiAgICB9XG4gIH1cbn0pXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXE5wbVBhY2thZ2VzXFxcXGxzLWNvbXBvbmVudHMtcGx1c1xcXFxwYWNrYWdlc1xcXFxscy1kb2NzXFxcXC52aXRlcHJlc3NcXFxcbmF2XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxOcG1QYWNrYWdlc1xcXFxscy1jb21wb25lbnRzLXBsdXNcXFxccGFja2FnZXNcXFxcbHMtZG9jc1xcXFwudml0ZXByZXNzXFxcXG5hdlxcXFxpbmRleC50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovTnBtUGFja2FnZXMvbHMtY29tcG9uZW50cy1wbHVzL3BhY2thZ2VzL2xzLWRvY3MvLnZpdGVwcmVzcy9uYXYvaW5kZXgudHNcIjtleHBvcnQgZGVmYXVsdCBbXG4gIHsgdGV4dDogJ1x1N0VDNFx1NEVGNicsIGxpbms6ICcvZG9jcy9xdWlja3N0YXJ0JyB9LFxuICB7IHRleHQ6ICdcdTY1QjlcdTZDRDUnLCBsaW5rOiAnL3Rvb2xzL2RpcmVjdGl2ZXMvYXV0aCcgfVxuXTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxcTnBtUGFja2FnZXNcXFxcbHMtY29tcG9uZW50cy1wbHVzXFxcXHBhY2thZ2VzXFxcXGxzLWRvY3NcXFxcLnZpdGVwcmVzc1xcXFxzaWRlYmFyXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxOcG1QYWNrYWdlc1xcXFxscy1jb21wb25lbnRzLXBsdXNcXFxccGFja2FnZXNcXFxcbHMtZG9jc1xcXFwudml0ZXByZXNzXFxcXHNpZGViYXJcXFxcaW5kZXgudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L05wbVBhY2thZ2VzL2xzLWNvbXBvbmVudHMtcGx1cy9wYWNrYWdlcy9scy1kb2NzLy52aXRlcHJlc3Mvc2lkZWJhci9pbmRleC50c1wiO2V4cG9ydCBkZWZhdWx0IHtcbiAgJy9kb2NzLyc6IFtcbiAgICB7XG4gICAgICB0ZXh0OiAnXHU2MzA3XHU1MzU3JyxcbiAgICAgIGl0ZW1zOiBbeyB0ZXh0OiAnXHU1RkVCXHU5MDFGXHU1RjAwXHU1OUNCJywgbGluazogJy9kb2NzL3F1aWNrc3RhcnQnIH1dXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnQmFzaWMgXHU1N0ZBXHU3ODQwXHU3RUM0XHU0RUY2JyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdGV4dDogJ0ljb24gXHU1NkZFXHU2ODA3JywgbGluazogJy9kb2NzL2ljb24nIH0sXG4gICAgICAgIHsgdGV4dDogJ0J1dHRvbiBcdTYzMDlcdTk0QUUnLCBsaW5rOiAnL2RvY3MvYnV0dG9uJyB9LFxuICAgICAgICB7IHRleHQ6ICdMYXlvdXQgXHU1RTAzXHU1QzQwJywgbGluazogJy9kb2NzL2xheW91dCcgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ0Zvcm0gXHU4ODY4XHU1MzU1XHU3RUM0XHU0RUY2JyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdGV4dDogJ0Zvcm0gXHU4ODY4XHU1MzU1JywgbGluazogJy9kb2NzL2Zvcm0nIH0sXG4gICAgICAgIHsgdGV4dDogJ1VwbG9hZCBcdTRFMEFcdTRGMjAnLCBsaW5rOiAnL2RvY3MvdXBsb2FkJyB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnRGF0YSBcdTY1NzBcdTYzNkVcdTVDNTVcdTc5M0EnLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiAnVGFibGUgXHU4ODY4XHU2ODNDJywgbGluazogJy9kb2NzL3RhYmxlJyB9LFxuICAgICAgICB7IHRleHQ6ICdEZXNjcmlwdGlvbnMgXHU2M0NGXHU4RkYwJywgbGluazogJy9kb2NzL2Rlc2NyaXB0aW9ucycgfSxcbiAgICAgICAgeyB0ZXh0OiAnUHJldmlldyBcdTk4ODRcdTg5QzgnLCBsaW5rOiAnL2RvY3MvcHJldmlldycgfSxcbiAgICAgICAgeyB0ZXh0OiAnVHJlZSBcdTY3NDNcdTk2NTBcdTY4MTEnLCBsaW5rOiAnL2RvY3MvdHJlZScgfSxcbiAgICAgICAgeyB0ZXh0OiAnbWFwIFx1NTczMFx1NTZGRScsIGxpbms6ICcvZG9jcy9tYXAnIH0sXG4gICAgICAgIHsgdGV4dDogJ2xpdmUgXHU3NkY0XHU2NEFEL1x1ODlDNlx1OTg5MScsIGxpbms6ICcvZG9jcy9saXZlJyB9LFxuICAgICAgICB7IHRleHQ6ICdFZGl0b3IgXHU3RjE2XHU4RjkxXHU1NjY4JywgbGluazogJy9kb2NzL2VkaXRvcicgfSxcbiAgICAgICAgeyB0ZXh0OiAnTGlzdCBcdTUyMTdcdTg4NjgnLCBsaW5rOiAnL2RvY3MvbGlzdCcgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ0NoYXJ0IFx1NTZGRVx1ODg2OCcsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHRleHQ6ICdjaGFydCBcdTRFQ0JcdTdFQ0QnLCBsaW5rOiAnL2RvY3MvY2hhcnRzLycgfSxcbiAgICAgICAgeyB0ZXh0OiAnQmFyIFx1NjdGMVx1NzJCNlx1NTZGRScsIGxpbms6ICcvZG9jcy9jaGFydHMvYmFyJyB9LFxuICAgICAgICB7IHRleHQ6ICdMaW5lIFx1NjI5OFx1N0VCRlx1NTZGRScsIGxpbms6ICcvZG9jcy9jaGFydHMvbGluZScgfSxcbiAgICAgICAgeyB0ZXh0OiAnUGllIFx1OTk3Q1x1NTZGRScsIGxpbms6ICcvZG9jcy9jaGFydHMvcGllJyB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnTmF2aWdhdGlvbiBcdTVCRkNcdTgyMkEnLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiAnQmFja3RvcCBcdTU2REVcdTUyMzBcdTk4NzZcdTkwRTgnLCBsaW5rOiAnL2RvY3MvYmFja3RvcCcgfSxcbiAgICAgICAgeyB0ZXh0OiAnQnJlYWRjcnVtYiBcdTk3NjJcdTUzMDVcdTVDNTEnLCBsaW5rOiAnL2RvY3MvYnJlYWRjcnVtYicgfSxcbiAgICAgICAgeyB0ZXh0OiAnTWVudSBcdTgzRENcdTUzNTUnLCBsaW5rOiAnL2RvY3MvbWVudScgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ0ZlZWRiYWNrIFx1NTNDRFx1OTk4OFx1N0VDNFx1NEVGNicsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHRleHQ6ICdDb25maXJtIFx1Nzg2RVx1OEJBNFx1Njg0NicsIGxpbms6ICcvZG9jcy9jb25maXJtJyB9LFxuICAgICAgICB7IHRleHQ6ICdCZWxsTWVzc2FnZSBcdTZEODhcdTYwNkZcdTkwMUFcdTc3RTUnLCBsaW5rOiAnL2RvY3MvYmVsbE1lc3NhZ2UnIH0sXG4gICAgICAgIHsgdGV4dDogJ0RpYWxvZyBcdTVGMzlcdTY4NDYnLCBsaW5rOiAnL2RvY3MvZGlhbG9nJyB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnT3RoZXIgXHU1MTc2XHU1QjgzXHU3RUM0XHU0RUY2JyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdGV4dDogJ1ByaW50IFx1NjI1M1x1NTM3MCcsIGxpbms6ICcvZG9jcy9wcmludCcgfSxcbiAgICAgICAgeyB0ZXh0OiAnQ29udGFpbmVyQm94IFx1OTAwMlx1OTE0RFx1NUJCOVx1NTY2OCcsIGxpbms6ICcvZG9jcy9jb250YWluZXJCb3gnIH1cbiAgICAgIF1cbiAgICB9XG4gIF0sXG4gICcvdG9vbHMvJzogW1xuICAgIHtcbiAgICAgIHRleHQ6ICdkaXJlY3RpdmVzJyxcbiAgICAgIGl0ZW1zOiBbeyB0ZXh0OiAnYXV0aCcsIGxpbms6ICcvdG9vbHMvZGlyZWN0aXZlcy9hdXRoJyB9XVxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ2hvb2tzJyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdGV4dDogJ3VzZVJvdXRlckhvb2snLCBsaW5rOiAnL3Rvb2xzL2hvb2tzL3VzZVJvdXRlckhvb2snIH0sXG4gICAgICAgIHsgdGV4dDogJ3VzZUNvbG9ydGhpZWZIb29rJywgbGluazogJy90b29scy9ob29rcy91c2VDb2xvcnRoaWVmSG9vaycgfSxcbiAgICAgICAgeyB0ZXh0OiAndXNlV1NIb29rJywgbGluazogJy90b29scy9ob29rcy91c2VXU0hvb2snIH0sXG4gICAgICAgIHsgdGV4dDogJ3VzZU9wdGlvbkhvb2snLCBsaW5rOiAnL3Rvb2xzL2hvb2tzL3VzZU9wdGlvbkhvb2snIH0sXG4gICAgICAgIHsgdGV4dDogJ3VzZVRhYmxlTGlzdEhvb2snLCBsaW5rOiAnL3Rvb2xzL2hvb2tzL3VzZVRhYmxlTGlzdEhvb2snIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICd1dGlscycsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHRleHQ6ICd2YWxpZGF0ZScsIGxpbms6ICcvdG9vbHMvdXRpbHMvdmFsaWRhdGUnIH0sXG4gICAgICAgIHsgdGV4dDogJ2NoZWNrJywgbGluazogJy90b29scy91dGlscy9jaGVjaycgfVxuICAgICAgXVxuICAgIH1cbiAgXVxufTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxcTnBtUGFja2FnZXNcXFxcbHMtY29tcG9uZW50cy1wbHVzXFxcXHBhY2thZ2VzXFxcXGxzLWRvY3NcXFxcLnZpdGVwcmVzc1xcXFxoZWFkXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxOcG1QYWNrYWdlc1xcXFxscy1jb21wb25lbnRzLXBsdXNcXFxccGFja2FnZXNcXFxcbHMtZG9jc1xcXFwudml0ZXByZXNzXFxcXGhlYWRcXFxcaW5kZXgudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L05wbVBhY2thZ2VzL2xzLWNvbXBvbmVudHMtcGx1cy9wYWNrYWdlcy9scy1kb2NzLy52aXRlcHJlc3MvaGVhZC9pbmRleC50c1wiO2NvbnN0IGhlYWQ6IGFueSA9IFtcbiAgWydsaW5rJywgeyByZWw6ICdpY29uJywgaHJlZjogJy9mYXZpY29uLnBuZycgfV0sXG4gIFsnbGluaycsIHsgaHJlZjogJ2h0dHBzOi8vZnJvbnQtZGV2ZWxvcG1lbnQub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL2Zyb250LWRldi9sdWNreXNoZWV0L3BsdWdpbnMvY3NzL3BsdWdpbnNDc3MuY3NzJyB9XSxcbiAgWydsaW5rJywgeyBocmVmOiAnaHR0cHM6Ly9mcm9udC1kZXZlbG9wbWVudC5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vZnJvbnQtZGV2L2x1Y2t5c2hlZXQvcGx1Z2lucy9wbHVnaW5zLmNzcycgfV0sXG4gIFsnbGluaycsIHsgaHJlZjogJ2h0dHBzOi8vZnJvbnQtZGV2ZWxvcG1lbnQub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL2Zyb250LWRldi9sdWNreXNoZWV0L2Nzcy9sdWNreXNoZWV0LmNzcycgfV0sXG4gIFsnbGluaycsIHsgaHJlZjogJ2h0dHBzOi8vZnJvbnQtZGV2ZWxvcG1lbnQub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL2Zyb250LWRldi9sdWNreXNoZWV0L2Fzc2V0cy9pY29uZm9udC9pY29uZm9udC5jc3MnIH1dLFxuICBbJ3NjcmlwdCcsIHsgc3JjOiAnaHR0cHM6Ly9mcm9udC1kZXZlbG9wbWVudC5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vZnJvbnQtZGV2L2x1Y2t5c2hlZXQvcGx1Z2lucy9qcy9wbHVnaW4uanMnIH1dLFxuICBbJ3NjcmlwdCcsIHsgc3JjOiAnaHR0cHM6Ly9mcm9udC1kZXZlbG9wbWVudC5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vZnJvbnQtZGV2L2x1Y2t5c2hlZXQvbHVja3lzaGVldC51bWQuanMnIH1dXG5dO1xuZXhwb3J0IGRlZmF1bHQgaGVhZDtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxcTnBtUGFja2FnZXNcXFxcbHMtY29tcG9uZW50cy1wbHVzXFxcXHBhY2thZ2VzXFxcXGxzLWRvY3NcXFxcYnVpbGRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXE5wbVBhY2thZ2VzXFxcXGxzLWNvbXBvbmVudHMtcGx1c1xcXFxwYWNrYWdlc1xcXFxscy1kb2NzXFxcXGJ1aWxkXFxcXGdldEVudi50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovTnBtUGFja2FnZXMvbHMtY29tcG9uZW50cy1wbHVzL3BhY2thZ2VzL2xzLWRvY3MvYnVpbGQvZ2V0RW52LnRzXCI7aW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgeyBSZWNvcmRhYmxlLCBWaXRlRW52IH0gZnJvbSAnLi4vdHlwaW5ncy9nbG9iYWwnO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEZXZGbihtb2RlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIG1vZGUgPT09ICdkZXYnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNQcm9kRm4obW9kZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBtb2RlID09PSAncHJvZCc7XG59XG5cbi8qKlxuICogV2hldGhlciB0byBnZW5lcmF0ZSBwYWNrYWdlIHByZXZpZXdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzUmVwb3J0TW9kZSgpOiBib29sZWFuIHtcbiAgcmV0dXJuIHByb2Nlc3MuZW52LlZJVEVfUkVQT1JUID09PSAndHJ1ZSc7XG59XG5cbi8vIFJlYWQgYWxsIGVudmlyb25tZW50IHZhcmlhYmxlIGNvbmZpZ3VyYXRpb24gZmlsZXMgdG8gcHJvY2Vzcy5lbnZcbmV4cG9ydCBmdW5jdGlvbiB3cmFwcGVyRW52KGVudkNvbmY6IFJlY29yZGFibGUpOiBWaXRlRW52IHtcbiAgY29uc3QgcmV0OiBhbnkgPSB7fTtcblxuICBmb3IgKGNvbnN0IGVudk5hbWUgb2YgT2JqZWN0LmtleXMoZW52Q29uZikpIHtcbiAgICBsZXQgcmVhbE5hbWUgPSBlbnZDb25mW2Vudk5hbWVdLnJlcGxhY2UoL1xcXFxuL2csICdcXG4nKTtcbiAgICByZWFsTmFtZSA9IHJlYWxOYW1lID09PSAndHJ1ZScgPyB0cnVlIDogcmVhbE5hbWUgPT09ICdmYWxzZScgPyBmYWxzZSA6IHJlYWxOYW1lO1xuICAgIGlmIChlbnZOYW1lID09PSAnVklURV9QT1JUJykgcmVhbE5hbWUgPSBOdW1iZXIocmVhbE5hbWUpO1xuICAgIGlmIChlbnZOYW1lID09PSAnVklURV9QUk9YWScpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJlYWxOYW1lID0gSlNPTi5wYXJzZShyZWFsTmFtZSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge31cbiAgICB9XG4gICAgcmV0W2Vudk5hbWVdID0gcmVhbE5hbWU7XG4gIH1cbiAgcmV0dXJuIHJldDtcbn1cblxuLyoqXG4gKiBHZXQgdXNlciByb290IGRpcmVjdG9yeVxuICogQHBhcmFtIGRpciBmaWxlIHBhdGhcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFJvb3RQYXRoKC4uLmRpcjogc3RyaW5nW10pIHtcbiAgcmV0dXJuIHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCAuLi5kaXIpO1xufVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxOcG1QYWNrYWdlc1xcXFxscy1jb21wb25lbnRzLXBsdXNcXFxccGFja2FnZXNcXFxcbHMtZG9jc1xcXFxidWlsZFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcTnBtUGFja2FnZXNcXFxcbHMtY29tcG9uZW50cy1wbHVzXFxcXHBhY2thZ2VzXFxcXGxzLWRvY3NcXFxcYnVpbGRcXFxccGx1Z2lucy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovTnBtUGFja2FnZXMvbHMtY29tcG9uZW50cy1wbHVzL3BhY2thZ2VzL2xzLWRvY3MvYnVpbGQvcGx1Z2lucy50c1wiO2ltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdwYXRoJztcbmltcG9ydCB7IFBsdWdpbk9wdGlvbiB9IGZyb20gJ3ZpdGUnO1xuLy8gaW1wb3J0IHsgVml0ZVBXQSB9IGZyb20gXCJ2aXRlLXBsdWdpbi1wd2FcIjtcbmltcG9ydCB7IHZpc3VhbGl6ZXIgfSBmcm9tICdyb2xsdXAtcGx1Z2luLXZpc3VhbGl6ZXInO1xuaW1wb3J0IHNpbXBsZUh0bWxQbHVnaW4gZnJvbSAndml0ZS1wbHVnaW4tc2ltcGxlLWh0bWwnO1xuaW1wb3J0IHZ1ZUpzeCBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUtanN4JztcbmltcG9ydCBlc2xpbnRQbHVnaW4gZnJvbSAndml0ZS1wbHVnaW4tZXNsaW50JztcbmltcG9ydCB2aXRlQ29tcHJlc3Npb24gZnJvbSAndml0ZS1wbHVnaW4tY29tcHJlc3Npb24nO1xuaW1wb3J0IHZ1ZVNldHVwRXh0ZW5kIGZyb20gJ3VucGx1Z2luLXZ1ZS1zZXR1cC1leHRlbmQtcGx1cy92aXRlJztcbmltcG9ydCBDb21wb25lbnRzIGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3ZpdGUnO1xuaW1wb3J0IHsgRWxlbWVudFBsdXNSZXNvbHZlciB9IGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3Jlc29sdmVycyc7XG5pbXBvcnQgQXV0b0ltcG9ydCBmcm9tICd1bnBsdWdpbi1hdXRvLWltcG9ydC92aXRlJztcbmltcG9ydCB7IFZpdGVFbnYgfSBmcm9tICcuLi90eXBpbmdzL2dsb2JhbCc7XG4vLyBpbXBvcnQgRmlsZXNMb2FkZXIgZnJvbSAndml0ZS1wbHVnaW4tZmlsZXMtbG9hZGVyJztcbi8vIGltcG9ydCBzdmdMb2FkZXIgZnJvbSAndml0ZS1zdmctbG9hZGVyJztcblxuY29uc3QgcGF0aFNyYyA9IHJlc29sdmUoX19kaXJuYW1lLCAnLi4vdHlwaW5ncycpO1xuXG4vKipcbiAqIFx1NTIxQlx1NUVGQSB2aXRlIFx1NjNEMlx1NEVGNlxuICogQHBhcmFtIHZpdGVFbnZcbiAqL1xuZXhwb3J0IGNvbnN0IGNyZWF0ZVZpdGVQbHVnaW5zID0gKHZpdGVFbnY6IFZpdGVFbnYpOiAoUGx1Z2luT3B0aW9uIHwgUGx1Z2luT3B0aW9uW10pW10gPT4ge1xuICBjb25zdCB7IFZJVEVfR0xPQl9BUFBfVElUTEUsIFZJVEVfUkVQT1JUIH0gPSB2aXRlRW52O1xuICByZXR1cm4gW1xuICAgIC8vIHZ1ZSBcdTUzRUZcdTRFRTVcdTRGN0ZcdTc1MjgganN4L3RzeCBcdThCRURcdTZDRDVcbiAgICB2dWVKc3goKSxcbiAgICAvLyBlc0xpbnQgXHU2MkE1XHU5NTE5XHU0RkUxXHU2MDZGXHU2NjNFXHU3OTNBXHU1NzI4XHU2RDRGXHU4OUM4XHU1NjY4XHU3NTRDXHU5NzYyXHU0RTBBXG4gICAgZXNsaW50UGx1Z2luKCksXG4gICAgLy8gbmFtZSBcdTUzRUZcdTRFRTVcdTUxOTlcdTU3Mjggc2NyaXB0IFx1NjgwN1x1N0I3RVx1NEUwQVxuICAgIHZ1ZVNldHVwRXh0ZW5kKHt9KSxcbiAgICAvLyBcdTUyMUJcdTVFRkFcdTYyNTNcdTUzMDVcdTUzOEJcdTdGMjlcdTkxNERcdTdGNkVcbiAgICBjcmVhdGVDb21wcmVzc2lvbih2aXRlRW52KSxcbiAgICAvLyBcdTZDRThcdTUxNjVcdTUzRDhcdTkxQ0ZcdTUyMzAgaHRtbCBcdTY1ODdcdTRFRjZcbiAgICBzaW1wbGVIdG1sUGx1Z2luKHtcbiAgICAgIG1pbmlmeTogdHJ1ZSxcbiAgICAgIGluamVjdDoge1xuICAgICAgICBkYXRhOiB7IHRpdGxlOiBWSVRFX0dMT0JfQVBQX1RJVExFIH1cbiAgICAgIH1cbiAgICB9KSxcbiAgICAvLyB2aXRlUFdBXG4gICAgLy8gVklURV9QV0EgJiYgY3JlYXRlVml0ZVB3YSh2aXRlRW52KSxcbiAgICAvLyBcdTY2MkZcdTU0MjZcdTc1MUZcdTYyMTBcdTUzMDVcdTk4ODRcdTg5QzhcdUZGMENcdTUyMDZcdTY3OTBcdTRGOURcdThENTZcdTUzMDVcdTU5MjdcdTVDMEZcdTUwNUFcdTRGMThcdTUzMTZcdTU5MDRcdTc0MDZcbiAgICBWSVRFX1JFUE9SVCAmJiAodmlzdWFsaXplcih7IGZpbGVuYW1lOiAnc3RhdHMuaHRtbCcsIGd6aXBTaXplOiB0cnVlLCBicm90bGlTaXplOiB0cnVlLCBvcGVuOiB0cnVlIH0pIGFzIFBsdWdpbk9wdGlvbiksXG4gICAgQXV0b0ltcG9ydCh7XG4gICAgICBpbXBvcnRzOiBbXG4gICAgICAgIC8vIFx1OTcwMFx1ODk4MVx1ODFFQVx1NTJBOFx1NUJGQ1x1NTE2NVx1NzY4NFx1NjNEMlx1NEVGNlx1RkYwQ1x1ODFFQVx1NUI5QVx1NEU0OVx1NUJGQ1x1NTE2NVx1NzY4NEFQSVxuICAgICAgICAndnVlJyxcbiAgICAgICAgJ3Z1ZS1yb3V0ZXInLFxuICAgICAgICAncGluaWEnXG4gICAgICBdLFxuICAgICAgaWdub3JlOiBbJ2gnXSxcbiAgICAgIHJlc29sdmVyczogW0VsZW1lbnRQbHVzUmVzb2x2ZXIoKV0sXG4gICAgICBkdHM6IHJlc29sdmUocGF0aFNyYywgJ2F1dG8taW1wb3J0cy5kLnRzJylcbiAgICB9KSxcbiAgICBDb21wb25lbnRzKHtcbiAgICAgIHJlc29sdmVyczogW0VsZW1lbnRQbHVzUmVzb2x2ZXIoKV0sXG4gICAgICBkaXJzOiBbJ3NyYy9jb21wb25lbnRzJ10sXG4gICAgICBkdHM6IHJlc29sdmUocGF0aFNyYywgJ2NvbXBvbmVudHMuZC50cycpXG4gICAgfSlcbiAgICAvLyBGaWxlc0xvYWRlcigpLFxuICAgIC8vIHN2Z0xvYWRlcigpXG4gIF07XG59O1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBcdTY4MzlcdTYzNkUgY29tcHJlc3MgXHU5MTREXHU3RjZFXHVGRjBDXHU3NTFGXHU2MjEwXHU0RTBEXHU1NDBDXHU3Njg0XHU1MzhCXHU3RjI5XHU4OUM0XHU1MjE5XG4gKiBAcGFyYW0gdml0ZUVudlxuICovXG5jb25zdCBjcmVhdGVDb21wcmVzc2lvbiA9ICh2aXRlRW52OiBWaXRlRW52KTogUGx1Z2luT3B0aW9uIHwgUGx1Z2luT3B0aW9uW10gPT4ge1xuICBjb25zdCB7IFZJVEVfQlVJTERfQ09NUFJFU1MgPSAnbm9uZScsIFZJVEVfQlVJTERfQ09NUFJFU1NfREVMRVRFX09SSUdJTl9GSUxFIH0gPSB2aXRlRW52O1xuICBjb25zdCBjb21wcmVzc0xpc3QgPSBWSVRFX0JVSUxEX0NPTVBSRVNTLnNwbGl0KCcsJyk7XG4gIGNvbnN0IHBsdWdpbnM6IFBsdWdpbk9wdGlvbltdID0gW107XG4gIGlmIChjb21wcmVzc0xpc3QuaW5jbHVkZXMoJ2d6aXAnKSkge1xuICAgIHBsdWdpbnMucHVzaChcbiAgICAgIHZpdGVDb21wcmVzc2lvbih7XG4gICAgICAgIGV4dDogJy5neicsXG4gICAgICAgIGFsZ29yaXRobTogJ2d6aXAnLFxuICAgICAgICBkZWxldGVPcmlnaW5GaWxlOiBWSVRFX0JVSUxEX0NPTVBSRVNTX0RFTEVURV9PUklHSU5fRklMRVxuICAgICAgfSlcbiAgICApO1xuICB9XG4gIGlmIChjb21wcmVzc0xpc3QuaW5jbHVkZXMoJ2Jyb3RsaScpKSB7XG4gICAgcGx1Z2lucy5wdXNoKFxuICAgICAgdml0ZUNvbXByZXNzaW9uKHtcbiAgICAgICAgZXh0OiAnLmJyJyxcbiAgICAgICAgYWxnb3JpdGhtOiAnYnJvdGxpQ29tcHJlc3MnLFxuICAgICAgICBkZWxldGVPcmlnaW5GaWxlOiBWSVRFX0JVSUxEX0NPTVBSRVNTX0RFTEVURV9PUklHSU5fRklMRVxuICAgICAgfSlcbiAgICApO1xuICB9XG4gIHJldHVybiBwbHVnaW5zO1xufTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBNlcsU0FBUyxjQUFjLGVBQWU7QUFDblosU0FBUyxXQUFBQSxnQkFBZTtBQUN4QixPQUFPLFdBQVc7OztBQ0ZxVyxJQUFPLGNBQVE7QUFBQSxFQUNwWSxFQUFFLE1BQU0sZ0JBQU0sTUFBTSxtQkFB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QVc7QUFBQSxJQUNiO0FBQUEsSUFDQSxrQkFBa0I7QUFBQSxJQUVsQixrQkFBa0I7QUFBQSxJQUVsQixTQUFTO0FBQUEsTUFDUCxPQUFPLENBQUMsR0FBRyxDQUFDO0FBQUEsTUFDWixPQUFPO0FBQUEsSUFDVDtBQUFBLElBRUEsV0FBVztBQUFBLE1BQ1QsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLElBQ1I7QUFBQSxFQUNGO0FBQUEsRUFFQSxNQUFNO0FBQUEsSUFDSixTQUFTLENBQUMsT0FBTztBQUFBLElBQ2pCLFNBQVM7QUFBQSxNQUNQLE9BQU87QUFBQSxRQUNMLFNBQVNELFNBQVFFLG1DQUFXLFNBQVM7QUFBQSxRQUNyQyxRQUFRRixTQUFRRSxtQ0FBVyxhQUFhO0FBQUEsTUFDMUM7QUFBQSxJQUNGO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDUCxNQUFNLENBQUMsYUFBYTtBQUFBLE1BQ3BCLE1BQU0sQ0FBQyxVQUFVO0FBQUEsSUFDbkI7QUFBQSxJQUNBLFFBQVE7QUFBQSxNQUNOLGNBQWMsS0FBSyxVQUFVLFlBQVk7QUFBQSxJQUMzQztBQUFBLElBQ0EsUUFBUTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLElBQ1I7QUFBQSxJQUNBLEtBQUs7QUFBQSxNQUNILFlBQVk7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbInJlc29sdmUiLCAidml0ZUVudiIsICJwbHVnaW5zIiwgIl9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lIiwgInJlc29sdmUiLCAiZW52IiwgIl9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lIl0KfQo=
