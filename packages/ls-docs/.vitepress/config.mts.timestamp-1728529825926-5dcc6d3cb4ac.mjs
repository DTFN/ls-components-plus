// .vitepress/config.mts
import { defineConfig, loadEnv } from "file:///D:/NpmPackages/ls-components-plus/packages/ls-docs/node_modules/.pnpm/vitepress@1.3.4_@algolia+client-search@4.24.0_postcss@8.4.47_search-insights@2.17.2/node_modules/vitepress/dist/node/index.js";
import { resolve as resolve2 } from "path";
import dayjs from "file:///D:/NpmPackages/ls-components-plus/node_modules/.pnpm/dayjs@1.11.13/node_modules/dayjs/dayjs.min.js";

// .vitepress/nav/index.ts
var nav_default = [{ text: "\u7EC4\u4EF6", link: "/docs/quickstart" }];

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
        { text: "Button \u6309\u94AE", link: "/docs/button" }
      ]
    },
    {
      text: "Form \u8868\u5355\u7EC4\u4EF6",
      items: [
        { text: "Form \u8868\u5355", link: "/docs/component2" },
        { text: "Upload \u4E0A\u4F20", link: "/docs/upload" }
      ]
    },
    {
      text: "Data \u6570\u636E\u5C55\u793A",
      items: [
        { text: "Table \u8868\u683C", link: "/docs/component4" },
        { text: "Descriptions \u63CF\u8FF0", link: "/docs/descriptions" }
      ]
    },
    {
      text: "Navigation \u5BFC\u822A",
      items: [
        { text: "Backtop \u56DE\u5230\u9876\u90E8", link: "/docs/backtop" },
        { text: "Breadcrumb \u9762\u5305\u5C51", link: "/docs/breadcrumb" },
        { text: "Menu \u83DC\u5355", link: "/docs/menu" }
      ]
    }
  ]
};

// .vitepress/head/index.ts
var head_default = [
  ["link", { rel: "icon", href: "/favicon.png" }],
  ["link", { href: "https://fastly.jsdelivr.net/npm/luckysheet@latest/dist/plugins/css/pluginsCss.css" }],
  ["link", { href: "https://fastly.jsdelivr.net/npm/luckysheet@latest/dist/plugins/plugins.css" }],
  ["link", { href: "https://fastly.jsdelivr.net/npm/luckysheet@latest/dist/css/luckysheet.css" }],
  ["link", { href: "https://fastly.jsdelivr.net/npm/luckysheet@latest/dist/assets/iconfont/iconfont.css" }],
  ["script", { src: "https://fastly.jsdelivr.net/npm/luckysheet@latest/dist/plugins/js/plugin.js" }],
  ["script", { src: "https://fastly.jsdelivr.net/npm/luckysheet@latest/dist/luckysheet.umd.js" }]
];

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
import simpleHtmlPlugin from "file:///D:/NpmPackages/ls-components-plus/node_modules/.pnpm/vite-plugin-simple-html@0.1.2_vite@5.4.2_@types+node@22.5.1_sass@1.77.8_terser@5.31.6_/node_modules/vite-plugin-simple-html/dist/index.js";
import vueJsx from "file:///D:/NpmPackages/ls-components-plus/node_modules/.pnpm/@vitejs+plugin-vue-jsx@4.0.1_vite@5.4.2_@types+node@22.5.1_sass@1.77.8_terser@5.31.6__vue@3.4.38_typescript@5.5.4_/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import eslintPlugin from "file:///D:/NpmPackages/ls-components-plus/node_modules/.pnpm/vite-plugin-eslint@1.8.1_eslint@8.57.0_vite@5.4.2_@types+node@22.5.1_sass@1.77.8_terser@5.31.6_/node_modules/vite-plugin-eslint/dist/index.mjs";
import viteCompression from "file:///D:/NpmPackages/ls-components-plus/node_modules/.pnpm/vite-plugin-compression@0.5.1_vite@5.4.2_@types+node@22.5.1_sass@1.77.8_terser@5.31.6_/node_modules/vite-plugin-compression/dist/index.mjs";
import vueSetupExtend from "file:///D:/NpmPackages/ls-components-plus/node_modules/.pnpm/unplugin-vue-setup-extend-plus@1.0.1/node_modules/unplugin-vue-setup-extend-plus/dist/vite.js";
import Components from "file:///D:/NpmPackages/ls-components-plus/node_modules/.pnpm/unplugin-vue-components@0.27.4_@babel+parser@7.25.4_rollup@4.21.1_vue@3.4.38_typescript@5.5.4_/node_modules/unplugin-vue-components/dist/vite.js";
import { ElementPlusResolver } from "file:///D:/NpmPackages/ls-components-plus/node_modules/.pnpm/unplugin-vue-components@0.27.4_@babel+parser@7.25.4_rollup@4.21.1_vue@3.4.38_typescript@5.5.4_/node_modules/unplugin-vue-components/dist/resolvers.js";
import AutoImport from "file:///D:/NpmPackages/ls-components-plus/node_modules/.pnpm/unplugin-auto-import@0.18.2_@vueuse+core@10.11.1_vue@3.4.38_typescript@5.5.4___rollup@4.21.1/node_modules/unplugin-auto-import/dist/vite.js";
import FilesLoader from "file:///D:/NpmPackages/ls-components-plus/node_modules/.pnpm/vite-plugin-files-loader@1.1.1_vite@5.4.2_@types+node@22.5.1_sass@1.77.8_terser@5.31.6_/node_modules/vite-plugin-files-loader/dist/index.mjs";
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
  outDir: resolve2("../dist/"),
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
    }
  }
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLnZpdGVwcmVzcy9jb25maWcubXRzIiwgIi52aXRlcHJlc3MvbmF2L2luZGV4LnRzIiwgIi52aXRlcHJlc3Mvc2lkZWJhci9pbmRleC50cyIsICIudml0ZXByZXNzL2hlYWQvaW5kZXgudHMiLCAiYnVpbGQvZ2V0RW52LnRzIiwgImJ1aWxkL3BsdWdpbnMudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxOcG1QYWNrYWdlc1xcXFxscy1jb21wb25lbnRzLXBsdXNcXFxccGFja2FnZXNcXFxcbHMtZG9jc1xcXFwudml0ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxOcG1QYWNrYWdlc1xcXFxscy1jb21wb25lbnRzLXBsdXNcXFxccGFja2FnZXNcXFxcbHMtZG9jc1xcXFwudml0ZXByZXNzXFxcXGNvbmZpZy5tdHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L05wbVBhY2thZ2VzL2xzLWNvbXBvbmVudHMtcGx1cy9wYWNrYWdlcy9scy1kb2NzLy52aXRlcHJlc3MvY29uZmlnLm10c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZywgbG9hZEVudiB9IGZyb20gJ3ZpdGVwcmVzcyc7XG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAncGF0aCc7XG5pbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnO1xuaW1wb3J0IG5hdiBmcm9tICcuL25hdi9pbmRleCc7XG5pbXBvcnQgc2lkZWJhciBmcm9tICcuL3NpZGViYXIvaW5kZXgnO1xuaW1wb3J0IGhlYWQgZnJvbSAnLi9oZWFkL2luZGV4JztcbmltcG9ydCB7IHdyYXBwZXJFbnYgfSBmcm9tICcuLi9idWlsZC9nZXRFbnYnO1xuaW1wb3J0IHsgY3JlYXRlVml0ZVBsdWdpbnMgfSBmcm9tICcuLi9idWlsZC9wbHVnaW5zJztcblxuY29uc3Qgcm9vdCA9IHByb2Nlc3MuY3dkKCk7XG5jb25zdCBOT0RFX0VOVjogYW55ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlY7XG5jb25zdCBlbnYgPSBsb2FkRW52KE5PREVfRU5WLCByb290KTtcbmNvbnN0IHZpdGVFbnYgPSB3cmFwcGVyRW52KGVudik7XG5jb25zdCBwbHVnaW5zOiBhbnkgPSBjcmVhdGVWaXRlUGx1Z2lucyh2aXRlRW52KTtcblxuY29uc3QgX19BUFBfSU5GT19fID0ge1xuICBsYXN0QnVpbGRUaW1lOiBkYXlqcygpLmZvcm1hdCgnWVlZWS1NTS1ERCBISDptbTpzcycpXG59O1xuXG4vLyBodHRwczovL3ZpdGVwcmVzcy5kZXYvcmVmZXJlbmNlL3NpdGUtY29uZmlnXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBvdXREaXI6IHJlc29sdmUoJy4uL2Rpc3QvJyksXG4gIHRpdGxlOiAnXHU1MjREXHU3QUVGXHU3RUM0XHU0RUY2XHU1RTkzXHVGRjA4VnVlM1x1RkYwOScsXG4gIGRlc2NyaXB0aW9uOiAnXHU1MjREXHU3QUVGXHU3RUM0XHU0RUY2XHU1RTkzXHVGRjA4VnVlM1x1RkYwOVx1NTNDQVx1NTE2Q1x1NTE3MVx1NjVCOVx1NkNENVx1NEY3Rlx1NzUyOFx1NjI0Qlx1NTE4QycsXG4gIC8vIGNsZWFuVXJsczogdHJ1ZSxcbiAgbGFzdFVwZGF0ZWQ6IHRydWUsXG5cbiAgbGFuZzogJ2NuLVpIJyxcblxuICBoZWFkLFxuXG4gIG1hcmtkb3duOiB7XG4gICAgbGluZU51bWJlcnM6IHRydWUsXG4gICAgY29kZVRyYW5zZm9ybWVyczogW1xuICAgICAge1xuICAgICAgICBwb3N0cHJvY2Vzcyhjb2RlKSB7XG4gICAgICAgICAgcmV0dXJuIGNvZGUucmVwbGFjZSgvXFxbXFwhXFwhY29kZS9nLCAnWyFjb2RlJylcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF0sXG4gICAgaW1hZ2U6IHtcbiAgICAgIGxhenlMb2FkaW5nOiB0cnVlXG4gICAgfSxcbiAgICBjb25maWc6IChtZCkgPT4ge1xuICAgICAgbWQucmVuZGVyZXIucnVsZXMuaGVhZGluZ19jbG9zZSA9ICh0b2tlbnMsIGlkeCwgb3B0aW9ucywgZW52LCBzbGYpID0+IHtcbiAgICAgICAgICBsZXQgaHRtbFJlc3VsdCA9IHNsZi5yZW5kZXJUb2tlbih0b2tlbnMsIGlkeCwgb3B0aW9ucyk7XG4gICAgICAgICAgaWYgKHRva2Vuc1tpZHhdLnRhZyA9PT0gJ2gxJykgaHRtbFJlc3VsdCArPSBgPEFydGljbGVNZXRhZGF0YSAvPmA7IFxuICAgICAgICAgIHJldHVybiBodG1sUmVzdWx0O1xuICAgICAgfVxuICAgIH0sXG4gIH0sXG5cbiAgdGhlbWVDb25maWc6IHtcbiAgICAvLyBodHRwczovL3ZpdGVwcmVzcy5kZXYvcmVmZXJlbmNlL2RlZmF1bHQtdGhlbWUtY29uZmlnXG5cbiAgICBsb2dvOiAnL2xvZ28ucG5nJyxcblxuICAgIGxhc3RVcGRhdGVkOiB7XG4gICAgICB0ZXh0OiAnXHU0RTBBXHU2QjIxXHU2NkY0XHU2NUIwXHU2NUY2XHU5NUY0JyxcbiAgICAgIGZvcm1hdE9wdGlvbnM6IHtcbiAgICAgICAgZGF0ZVN0eWxlOiAnc2hvcnQnLCAvLyBcdTUzRUZcdTkwMDlcdTUwM0NmdWxsXHUzMDAxbG9uZ1x1MzAwMW1lZGl1bVx1MzAwMXNob3J0XG4gICAgICAgIHRpbWVTdHlsZTogJ21lZGl1bScgLy8gXHU1M0VGXHU5MDA5XHU1MDNDZnVsbFx1MzAwMWxvbmdcdTMwMDFtZWRpdW1cdTMwMDFzaG9ydFxuICAgICAgfSxcbiAgICB9LFxuXG4gICAgc2l0ZVRpdGxlOiBmYWxzZSxcblxuICAgIHNlYXJjaDoge1xuICAgICAgcHJvdmlkZXI6ICdsb2NhbCcsXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIGxvY2FsZXM6IHtcbiAgICAgICAgICB6aDoge1xuICAgICAgICAgICAgdHJhbnNsYXRpb25zOiB7XG4gICAgICAgICAgICAgIGJ1dHRvbjoge1xuICAgICAgICAgICAgICAgIGJ1dHRvblRleHQ6ICdcdTY0MUNcdTdEMjJcdTY1ODdcdTY4NjMnLFxuICAgICAgICAgICAgICAgIGJ1dHRvbkFyaWFMYWJlbDogJ1x1NjQxQ1x1N0QyMlx1NjU4N1x1Njg2MydcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgbW9kYWw6IHtcbiAgICAgICAgICAgICAgICBub1Jlc3VsdHNUZXh0OiAnXHU2NUUwXHU2Q0Q1XHU2MjdFXHU1MjMwXHU3NkY4XHU1MTczXHU3RUQzXHU2NzlDJyxcbiAgICAgICAgICAgICAgICByZXNldEJ1dHRvblRpdGxlOiAnXHU2RTA1XHU5NjY0XHU2N0U1XHU4QkUyXHU2NzYxXHU0RUY2JyxcbiAgICAgICAgICAgICAgICBmb290ZXI6IHtcbiAgICAgICAgICAgICAgICAgIHNlbGVjdFRleHQ6ICdcdTkwMDlcdTYyRTknLFxuICAgICAgICAgICAgICAgICAgbmF2aWdhdGVUZXh0OiAnXHU1MjA3XHU2MzYyJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG5cbiAgICBuYXYsXG5cbiAgICBzaWRlYmFyLFxuXG4gICAgZm9vdGVyOiB7XG4gICAgICBtZXNzYWdlOiAnXHU5NkY2XHU2NTcwXHU3OUQxXHU2MjgwXHU1MjREXHU3QUVGXHU1NkUyXHU5NjFGJyxcbiAgICAgIGNvcHlyaWdodDogJ1x1MDBBOSAyMDI0IGxpbmdzaHUgVGVjaCBMdGQuIEFsbCBSaWdodHMgUmVzZXJ2ZWQnXG4gICAgfSxcbiAgICBzaWRlYmFyTWVudUxhYmVsOiAnXHU3NkVFXHU1RjU1JyxcblxuICAgIHJldHVyblRvVG9wTGFiZWw6ICdcdThGRDRcdTU2REVcdTk4NzZcdTkwRTgnLFxuXG4gICAgb3V0bGluZToge1xuICAgICAgbGV2ZWw6IFsyLCAzXSxcbiAgICAgIGxhYmVsOiAnXHU1RjUzXHU1MjREXHU5ODc1XHU1OTI3XHU3RUIyJ1xuICAgIH0sXG5cbiAgICBkb2NGb290ZXI6IHtcbiAgICAgIHByZXY6ICdcdTRFMEFcdTRFMDBcdTk4NzUnLFxuICAgICAgbmV4dDogJ1x1NEUwQlx1NEUwMFx1OTg3NScsXG4gICAgfSxcbiAgfSxcblxuICB2aXRlOiB7XG4gICAgcGx1Z2luczogW3BsdWdpbnNdLFxuICAgIHJlc29sdmU6IHtcbiAgICAgIGFsaWFzOiB7XG4gICAgICAgICdAZG9jcyc6IHJlc29sdmUoX19kaXJuYW1lLCAnLi4vZG9jcycpLFxuICAgICAgICAnQGV4cCc6IHJlc29sdmUoX19kaXJuYW1lLCAnLi4vZXhhbXBsZXMnKSxcbiAgICAgIH1cbiAgICB9LFxuICAgIGVzYnVpbGQ6IHtcbiAgICAgIHB1cmU6IFsnY29uc29sZS5sb2cnXSxcbiAgICAgIGRyb3A6IFsnZGVidWdnZXInXVxuICAgIH0sXG4gICAgZGVmaW5lOiB7XG4gICAgICBfX0FQUF9JTkZPX186IEpTT04uc3RyaW5naWZ5KF9fQVBQX0lORk9fXylcbiAgICB9LFxuICAgIHNlcnZlcjoge1xuICAgICAgaG9zdDogJzAuMC4wLjAnLFxuICAgICAgcG9ydDogOTA5MyxcbiAgICB9XG4gIH1cbn0pXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXE5wbVBhY2thZ2VzXFxcXGxzLWNvbXBvbmVudHMtcGx1c1xcXFxwYWNrYWdlc1xcXFxscy1kb2NzXFxcXC52aXRlcHJlc3NcXFxcbmF2XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxOcG1QYWNrYWdlc1xcXFxscy1jb21wb25lbnRzLXBsdXNcXFxccGFja2FnZXNcXFxcbHMtZG9jc1xcXFwudml0ZXByZXNzXFxcXG5hdlxcXFxpbmRleC50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovTnBtUGFja2FnZXMvbHMtY29tcG9uZW50cy1wbHVzL3BhY2thZ2VzL2xzLWRvY3MvLnZpdGVwcmVzcy9uYXYvaW5kZXgudHNcIjtleHBvcnQgZGVmYXVsdCBbeyB0ZXh0OiAnXHU3RUM0XHU0RUY2JywgbGluazogJy9kb2NzL3F1aWNrc3RhcnQnIH1dO1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxOcG1QYWNrYWdlc1xcXFxscy1jb21wb25lbnRzLXBsdXNcXFxccGFja2FnZXNcXFxcbHMtZG9jc1xcXFwudml0ZXByZXNzXFxcXHNpZGViYXJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXE5wbVBhY2thZ2VzXFxcXGxzLWNvbXBvbmVudHMtcGx1c1xcXFxwYWNrYWdlc1xcXFxscy1kb2NzXFxcXC52aXRlcHJlc3NcXFxcc2lkZWJhclxcXFxpbmRleC50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovTnBtUGFja2FnZXMvbHMtY29tcG9uZW50cy1wbHVzL3BhY2thZ2VzL2xzLWRvY3MvLnZpdGVwcmVzcy9zaWRlYmFyL2luZGV4LnRzXCI7ZXhwb3J0IGRlZmF1bHQge1xuICAnL2RvY3MvJzogW1xuICAgIHtcbiAgICAgIHRleHQ6ICdcdTYzMDdcdTUzNTcnLFxuICAgICAgaXRlbXM6IFt7IHRleHQ6ICdcdTVGRUJcdTkwMUZcdTVGMDBcdTU5Q0InLCBsaW5rOiAnL2RvY3MvcXVpY2tzdGFydCcgfV1cbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdCYXNpYyBcdTU3RkFcdTc4NDBcdTdFQzRcdTRFRjYnLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiAnSWNvbiBcdTU2RkVcdTY4MDcnLCBsaW5rOiAnL2RvY3MvaWNvbicgfSxcbiAgICAgICAgeyB0ZXh0OiAnQnV0dG9uIFx1NjMwOVx1OTRBRScsIGxpbms6ICcvZG9jcy9idXR0b24nIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdGb3JtIFx1ODg2OFx1NTM1NVx1N0VDNFx1NEVGNicsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHRleHQ6ICdGb3JtIFx1ODg2OFx1NTM1NScsIGxpbms6ICcvZG9jcy9jb21wb25lbnQyJyB9LFxuICAgICAgICB7IHRleHQ6ICdVcGxvYWQgXHU0RTBBXHU0RjIwJywgbGluazogJy9kb2NzL3VwbG9hZCcgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ0RhdGEgXHU2NTcwXHU2MzZFXHU1QzU1XHU3OTNBJyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdGV4dDogJ1RhYmxlIFx1ODg2OFx1NjgzQycsIGxpbms6ICcvZG9jcy9jb21wb25lbnQ0JyB9LFxuICAgICAgICB7IHRleHQ6ICdEZXNjcmlwdGlvbnMgXHU2M0NGXHU4RkYwJywgbGluazogJy9kb2NzL2Rlc2NyaXB0aW9ucycgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ05hdmlnYXRpb24gXHU1QkZDXHU4MjJBJyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdGV4dDogJ0JhY2t0b3AgXHU1NkRFXHU1MjMwXHU5ODc2XHU5MEU4JywgbGluazogJy9kb2NzL2JhY2t0b3AnIH0sXG4gICAgICAgIHsgdGV4dDogJ0JyZWFkY3J1bWIgXHU5NzYyXHU1MzA1XHU1QzUxJywgbGluazogJy9kb2NzL2JyZWFkY3J1bWInIH0sXG4gICAgICAgIHsgdGV4dDogJ01lbnUgXHU4M0RDXHU1MzU1JywgbGluazogJy9kb2NzL21lbnUnIH1cbiAgICAgIF1cbiAgICB9XG4gIF1cbn07XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXE5wbVBhY2thZ2VzXFxcXGxzLWNvbXBvbmVudHMtcGx1c1xcXFxwYWNrYWdlc1xcXFxscy1kb2NzXFxcXC52aXRlcHJlc3NcXFxcaGVhZFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcTnBtUGFja2FnZXNcXFxcbHMtY29tcG9uZW50cy1wbHVzXFxcXHBhY2thZ2VzXFxcXGxzLWRvY3NcXFxcLnZpdGVwcmVzc1xcXFxoZWFkXFxcXGluZGV4LnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9OcG1QYWNrYWdlcy9scy1jb21wb25lbnRzLXBsdXMvcGFja2FnZXMvbHMtZG9jcy8udml0ZXByZXNzL2hlYWQvaW5kZXgudHNcIjtleHBvcnQgZGVmYXVsdCBbXG4gIFsnbGluaycsIHsgcmVsOiAnaWNvbicsIGhyZWY6ICcvZmF2aWNvbi5wbmcnIH1dLFxuICBbJ2xpbmsnLCB7IGhyZWY6ICdodHRwczovL2Zhc3RseS5qc2RlbGl2ci5uZXQvbnBtL2x1Y2t5c2hlZXRAbGF0ZXN0L2Rpc3QvcGx1Z2lucy9jc3MvcGx1Z2luc0Nzcy5jc3MnIH1dLFxuICBbJ2xpbmsnLCB7IGhyZWY6ICdodHRwczovL2Zhc3RseS5qc2RlbGl2ci5uZXQvbnBtL2x1Y2t5c2hlZXRAbGF0ZXN0L2Rpc3QvcGx1Z2lucy9wbHVnaW5zLmNzcycgfV0sXG4gIFsnbGluaycsIHsgaHJlZjogJ2h0dHBzOi8vZmFzdGx5LmpzZGVsaXZyLm5ldC9ucG0vbHVja3lzaGVldEBsYXRlc3QvZGlzdC9jc3MvbHVja3lzaGVldC5jc3MnIH1dLFxuICBbJ2xpbmsnLCB7IGhyZWY6ICdodHRwczovL2Zhc3RseS5qc2RlbGl2ci5uZXQvbnBtL2x1Y2t5c2hlZXRAbGF0ZXN0L2Rpc3QvYXNzZXRzL2ljb25mb250L2ljb25mb250LmNzcycgfV0sXG4gIFsnc2NyaXB0JywgeyBzcmM6ICdodHRwczovL2Zhc3RseS5qc2RlbGl2ci5uZXQvbnBtL2x1Y2t5c2hlZXRAbGF0ZXN0L2Rpc3QvcGx1Z2lucy9qcy9wbHVnaW4uanMnIH1dLFxuICBbJ3NjcmlwdCcsIHsgc3JjOiAnaHR0cHM6Ly9mYXN0bHkuanNkZWxpdnIubmV0L25wbS9sdWNreXNoZWV0QGxhdGVzdC9kaXN0L2x1Y2t5c2hlZXQudW1kLmpzJyB9XVxuXTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxcTnBtUGFja2FnZXNcXFxcbHMtY29tcG9uZW50cy1wbHVzXFxcXHBhY2thZ2VzXFxcXGxzLWRvY3NcXFxcYnVpbGRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXE5wbVBhY2thZ2VzXFxcXGxzLWNvbXBvbmVudHMtcGx1c1xcXFxwYWNrYWdlc1xcXFxscy1kb2NzXFxcXGJ1aWxkXFxcXGdldEVudi50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovTnBtUGFja2FnZXMvbHMtY29tcG9uZW50cy1wbHVzL3BhY2thZ2VzL2xzLWRvY3MvYnVpbGQvZ2V0RW52LnRzXCI7aW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgeyBSZWNvcmRhYmxlLCBWaXRlRW52IH0gZnJvbSAnLi4vdHlwaW5ncy9nbG9iYWwnO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEZXZGbihtb2RlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIG1vZGUgPT09ICdkZXYnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNQcm9kRm4obW9kZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBtb2RlID09PSAncHJvZCc7XG59XG5cbi8qKlxuICogV2hldGhlciB0byBnZW5lcmF0ZSBwYWNrYWdlIHByZXZpZXdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzUmVwb3J0TW9kZSgpOiBib29sZWFuIHtcbiAgcmV0dXJuIHByb2Nlc3MuZW52LlZJVEVfUkVQT1JUID09PSAndHJ1ZSc7XG59XG5cbi8vIFJlYWQgYWxsIGVudmlyb25tZW50IHZhcmlhYmxlIGNvbmZpZ3VyYXRpb24gZmlsZXMgdG8gcHJvY2Vzcy5lbnZcbmV4cG9ydCBmdW5jdGlvbiB3cmFwcGVyRW52KGVudkNvbmY6IFJlY29yZGFibGUpOiBWaXRlRW52IHtcbiAgY29uc3QgcmV0OiBhbnkgPSB7fTtcblxuICBmb3IgKGNvbnN0IGVudk5hbWUgb2YgT2JqZWN0LmtleXMoZW52Q29uZikpIHtcbiAgICBsZXQgcmVhbE5hbWUgPSBlbnZDb25mW2Vudk5hbWVdLnJlcGxhY2UoL1xcXFxuL2csICdcXG4nKTtcbiAgICByZWFsTmFtZSA9IHJlYWxOYW1lID09PSAndHJ1ZScgPyB0cnVlIDogcmVhbE5hbWUgPT09ICdmYWxzZScgPyBmYWxzZSA6IHJlYWxOYW1lO1xuICAgIGlmIChlbnZOYW1lID09PSAnVklURV9QT1JUJykgcmVhbE5hbWUgPSBOdW1iZXIocmVhbE5hbWUpO1xuICAgIGlmIChlbnZOYW1lID09PSAnVklURV9QUk9YWScpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJlYWxOYW1lID0gSlNPTi5wYXJzZShyZWFsTmFtZSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge31cbiAgICB9XG4gICAgcmV0W2Vudk5hbWVdID0gcmVhbE5hbWU7XG4gIH1cbiAgcmV0dXJuIHJldDtcbn1cblxuLyoqXG4gKiBHZXQgdXNlciByb290IGRpcmVjdG9yeVxuICogQHBhcmFtIGRpciBmaWxlIHBhdGhcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFJvb3RQYXRoKC4uLmRpcjogc3RyaW5nW10pIHtcbiAgcmV0dXJuIHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCAuLi5kaXIpO1xufVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxOcG1QYWNrYWdlc1xcXFxscy1jb21wb25lbnRzLXBsdXNcXFxccGFja2FnZXNcXFxcbHMtZG9jc1xcXFxidWlsZFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcTnBtUGFja2FnZXNcXFxcbHMtY29tcG9uZW50cy1wbHVzXFxcXHBhY2thZ2VzXFxcXGxzLWRvY3NcXFxcYnVpbGRcXFxccGx1Z2lucy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovTnBtUGFja2FnZXMvbHMtY29tcG9uZW50cy1wbHVzL3BhY2thZ2VzL2xzLWRvY3MvYnVpbGQvcGx1Z2lucy50c1wiO2ltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdwYXRoJztcbmltcG9ydCB7IFBsdWdpbk9wdGlvbiB9IGZyb20gJ3ZpdGUnO1xuLy8gaW1wb3J0IHsgVml0ZVBXQSB9IGZyb20gXCJ2aXRlLXBsdWdpbi1wd2FcIjtcbmltcG9ydCB7IHZpc3VhbGl6ZXIgfSBmcm9tICdyb2xsdXAtcGx1Z2luLXZpc3VhbGl6ZXInO1xuaW1wb3J0IHNpbXBsZUh0bWxQbHVnaW4gZnJvbSAndml0ZS1wbHVnaW4tc2ltcGxlLWh0bWwnO1xuaW1wb3J0IHZ1ZUpzeCBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUtanN4JztcbmltcG9ydCBlc2xpbnRQbHVnaW4gZnJvbSAndml0ZS1wbHVnaW4tZXNsaW50JztcbmltcG9ydCB2aXRlQ29tcHJlc3Npb24gZnJvbSAndml0ZS1wbHVnaW4tY29tcHJlc3Npb24nO1xuaW1wb3J0IHZ1ZVNldHVwRXh0ZW5kIGZyb20gJ3VucGx1Z2luLXZ1ZS1zZXR1cC1leHRlbmQtcGx1cy92aXRlJztcbmltcG9ydCBDb21wb25lbnRzIGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3ZpdGUnO1xuaW1wb3J0IHsgRWxlbWVudFBsdXNSZXNvbHZlciB9IGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3Jlc29sdmVycyc7XG5pbXBvcnQgQXV0b0ltcG9ydCBmcm9tICd1bnBsdWdpbi1hdXRvLWltcG9ydC92aXRlJztcbmltcG9ydCB7IFZpdGVFbnYgfSBmcm9tICcuLi90eXBpbmdzL2dsb2JhbCc7XG5pbXBvcnQgRmlsZXNMb2FkZXIgZnJvbSAndml0ZS1wbHVnaW4tZmlsZXMtbG9hZGVyJztcbmltcG9ydCBzdmdMb2FkZXIgZnJvbSAndml0ZS1zdmctbG9hZGVyJztcblxuY29uc3QgcGF0aFNyYyA9IHJlc29sdmUoX19kaXJuYW1lLCAnLi4vdHlwaW5ncycpO1xuXG4vKipcbiAqIFx1NTIxQlx1NUVGQSB2aXRlIFx1NjNEMlx1NEVGNlxuICogQHBhcmFtIHZpdGVFbnZcbiAqL1xuZXhwb3J0IGNvbnN0IGNyZWF0ZVZpdGVQbHVnaW5zID0gKHZpdGVFbnY6IFZpdGVFbnYpOiAoUGx1Z2luT3B0aW9uIHwgUGx1Z2luT3B0aW9uW10pW10gPT4ge1xuICBjb25zdCB7IFZJVEVfR0xPQl9BUFBfVElUTEUsIFZJVEVfUkVQT1JUIH0gPSB2aXRlRW52O1xuICByZXR1cm4gW1xuICAgIC8vIHZ1ZSBcdTUzRUZcdTRFRTVcdTRGN0ZcdTc1MjgganN4L3RzeCBcdThCRURcdTZDRDVcbiAgICB2dWVKc3goKSxcbiAgICAvLyBlc0xpbnQgXHU2MkE1XHU5NTE5XHU0RkUxXHU2MDZGXHU2NjNFXHU3OTNBXHU1NzI4XHU2RDRGXHU4OUM4XHU1NjY4XHU3NTRDXHU5NzYyXHU0RTBBXG4gICAgZXNsaW50UGx1Z2luKCksXG4gICAgLy8gbmFtZSBcdTUzRUZcdTRFRTVcdTUxOTlcdTU3Mjggc2NyaXB0IFx1NjgwN1x1N0I3RVx1NEUwQVxuICAgIHZ1ZVNldHVwRXh0ZW5kKHt9KSxcbiAgICAvLyBcdTUyMUJcdTVFRkFcdTYyNTNcdTUzMDVcdTUzOEJcdTdGMjlcdTkxNERcdTdGNkVcbiAgICBjcmVhdGVDb21wcmVzc2lvbih2aXRlRW52KSxcbiAgICAvLyBcdTZDRThcdTUxNjVcdTUzRDhcdTkxQ0ZcdTUyMzAgaHRtbCBcdTY1ODdcdTRFRjZcbiAgICBzaW1wbGVIdG1sUGx1Z2luKHtcbiAgICAgIG1pbmlmeTogdHJ1ZSxcbiAgICAgIGluamVjdDoge1xuICAgICAgICBkYXRhOiB7IHRpdGxlOiBWSVRFX0dMT0JfQVBQX1RJVExFIH1cbiAgICAgIH1cbiAgICB9KSxcbiAgICAvLyB2aXRlUFdBXG4gICAgLy8gVklURV9QV0EgJiYgY3JlYXRlVml0ZVB3YSh2aXRlRW52KSxcbiAgICAvLyBcdTY2MkZcdTU0MjZcdTc1MUZcdTYyMTBcdTUzMDVcdTk4ODRcdTg5QzhcdUZGMENcdTUyMDZcdTY3OTBcdTRGOURcdThENTZcdTUzMDVcdTU5MjdcdTVDMEZcdTUwNUFcdTRGMThcdTUzMTZcdTU5MDRcdTc0MDZcbiAgICBWSVRFX1JFUE9SVCAmJiAodmlzdWFsaXplcih7IGZpbGVuYW1lOiAnc3RhdHMuaHRtbCcsIGd6aXBTaXplOiB0cnVlLCBicm90bGlTaXplOiB0cnVlLCBvcGVuOiB0cnVlIH0pIGFzIFBsdWdpbk9wdGlvbiksXG4gICAgQXV0b0ltcG9ydCh7XG4gICAgICBpbXBvcnRzOiBbXG4gICAgICAgIC8vIFx1OTcwMFx1ODk4MVx1ODFFQVx1NTJBOFx1NUJGQ1x1NTE2NVx1NzY4NFx1NjNEMlx1NEVGNlx1RkYwQ1x1ODFFQVx1NUI5QVx1NEU0OVx1NUJGQ1x1NTE2NVx1NzY4NEFQSVxuICAgICAgICAndnVlJyxcbiAgICAgICAgJ3Z1ZS1yb3V0ZXInLFxuICAgICAgICAncGluaWEnXG4gICAgICBdLFxuICAgICAgcmVzb2x2ZXJzOiBbRWxlbWVudFBsdXNSZXNvbHZlcigpXSxcbiAgICAgIGR0czogcmVzb2x2ZShwYXRoU3JjLCAnYXV0by1pbXBvcnRzLmQudHMnKVxuICAgIH0pLFxuICAgIENvbXBvbmVudHMoe1xuICAgICAgcmVzb2x2ZXJzOiBbRWxlbWVudFBsdXNSZXNvbHZlcigpXSxcbiAgICAgIGRpcnM6IFsnc3JjL2NvbXBvbmVudHMnXSxcbiAgICAgIGR0czogcmVzb2x2ZShwYXRoU3JjLCAnY29tcG9uZW50cy5kLnRzJylcbiAgICB9KSxcbiAgICBGaWxlc0xvYWRlcigpLFxuICAgIHN2Z0xvYWRlcigpXG4gIF07XG59O1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBcdTY4MzlcdTYzNkUgY29tcHJlc3MgXHU5MTREXHU3RjZFXHVGRjBDXHU3NTFGXHU2MjEwXHU0RTBEXHU1NDBDXHU3Njg0XHU1MzhCXHU3RjI5XHU4OUM0XHU1MjE5XG4gKiBAcGFyYW0gdml0ZUVudlxuICovXG5jb25zdCBjcmVhdGVDb21wcmVzc2lvbiA9ICh2aXRlRW52OiBWaXRlRW52KTogUGx1Z2luT3B0aW9uIHwgUGx1Z2luT3B0aW9uW10gPT4ge1xuICBjb25zdCB7IFZJVEVfQlVJTERfQ09NUFJFU1MgPSAnbm9uZScsIFZJVEVfQlVJTERfQ09NUFJFU1NfREVMRVRFX09SSUdJTl9GSUxFIH0gPSB2aXRlRW52O1xuICBjb25zdCBjb21wcmVzc0xpc3QgPSBWSVRFX0JVSUxEX0NPTVBSRVNTLnNwbGl0KCcsJyk7XG4gIGNvbnN0IHBsdWdpbnM6IFBsdWdpbk9wdGlvbltdID0gW107XG4gIGlmIChjb21wcmVzc0xpc3QuaW5jbHVkZXMoJ2d6aXAnKSkge1xuICAgIHBsdWdpbnMucHVzaChcbiAgICAgIHZpdGVDb21wcmVzc2lvbih7XG4gICAgICAgIGV4dDogJy5neicsXG4gICAgICAgIGFsZ29yaXRobTogJ2d6aXAnLFxuICAgICAgICBkZWxldGVPcmlnaW5GaWxlOiBWSVRFX0JVSUxEX0NPTVBSRVNTX0RFTEVURV9PUklHSU5fRklMRVxuICAgICAgfSlcbiAgICApO1xuICB9XG4gIGlmIChjb21wcmVzc0xpc3QuaW5jbHVkZXMoJ2Jyb3RsaScpKSB7XG4gICAgcGx1Z2lucy5wdXNoKFxuICAgICAgdml0ZUNvbXByZXNzaW9uKHtcbiAgICAgICAgZXh0OiAnLmJyJyxcbiAgICAgICAgYWxnb3JpdGhtOiAnYnJvdGxpQ29tcHJlc3MnLFxuICAgICAgICBkZWxldGVPcmlnaW5GaWxlOiBWSVRFX0JVSUxEX0NPTVBSRVNTX0RFTEVURV9PUklHSU5fRklMRVxuICAgICAgfSlcbiAgICApO1xuICB9XG4gIHJldHVybiBwbHVnaW5zO1xufTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBNlcsU0FBUyxjQUFjLGVBQWU7QUFDblosU0FBUyxXQUFBQSxnQkFBZTtBQUN4QixPQUFPLFdBQVc7OztBQ0ZxVyxJQUFPLGNBQVEsQ0FBQyxFQUFFLE1BQU0s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QUVOLGFBQWE7QUFBQSxNQUNYLE1BQU07QUFBQSxNQUNOLGVBQWU7QUFBQSxRQUNiLFdBQVc7QUFBQTtBQUFBLFFBQ1gsV0FBVztBQUFBO0FBQUEsTUFDYjtBQUFBLElBQ0Y7QUFBQSxJQUVBLFdBQVc7QUFBQSxJQUVYLFFBQVE7QUFBQSxNQUNOLFVBQVU7QUFBQSxNQUNWLFNBQVM7QUFBQSxRQUNQLFNBQVM7QUFBQSxVQUNQLElBQUk7QUFBQSxZQUNGLGNBQWM7QUFBQSxjQUNaLFFBQVE7QUFBQSxnQkFDTixZQUFZO0FBQUEsZ0JBQ1osaUJBQWlCO0FBQUEsY0FDbkI7QUFBQSxjQUNBLE9BQU87QUFBQSxnQkFDTCxlQUFlO0FBQUEsZ0JBQ2Ysa0JBQWtCO0FBQUEsZ0JBQ2xCLFFBQVE7QUFBQSxrQkFDTixZQUFZO0FBQUEsa0JBQ1osY0FBYztBQUFBLGdCQUNoQjtBQUFBLGNBQ0Y7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBRUE7QUFBQSxJQUVBO0FBQUEsSUFFQSxRQUFRO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxXQUFXO0FBQUEsSUFDYjtBQUFBLElBQ0Esa0JBQWtCO0FBQUEsSUFFbEIsa0JBQWtCO0FBQUEsSUFFbEIsU0FBUztBQUFBLE1BQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQztBQUFBLE1BQ1osT0FBTztBQUFBLElBQ1Q7QUFBQSxJQUVBLFdBQVc7QUFBQSxNQUNULE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxJQUNSO0FBQUEsRUFDRjtBQUFBLEVBRUEsTUFBTTtBQUFBLElBQ0osU0FBUyxDQUFDLE9BQU87QUFBQSxJQUNqQixTQUFTO0FBQUEsTUFDUCxPQUFPO0FBQUEsUUFDTCxTQUFTRCxTQUFRRSxtQ0FBVyxTQUFTO0FBQUEsUUFDckMsUUFBUUYsU0FBUUUsbUNBQVcsYUFBYTtBQUFBLE1BQzFDO0FBQUEsSUFDRjtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1AsTUFBTSxDQUFDLGFBQWE7QUFBQSxNQUNwQixNQUFNLENBQUMsVUFBVTtBQUFBLElBQ25CO0FBQUEsSUFDQSxRQUFRO0FBQUEsTUFDTixjQUFjLEtBQUssVUFBVSxZQUFZO0FBQUEsSUFDM0M7QUFBQSxJQUNBLFFBQVE7QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxJQUNSO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbInJlc29sdmUiLCAidml0ZUVudiIsICJwbHVnaW5zIiwgIl9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lIiwgInJlc29sdmUiLCAiZW52IiwgIl9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lIl0KfQo=
