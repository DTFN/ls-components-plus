// vite.config.ts
import { defineConfig, loadEnv } from "file:///D:/NpmPackages/ls-components-plus/node_modules/.pnpm/vite@5.4.2_@types+node@22.5.1_sass@1.77.8_terser@5.36.0/node_modules/vite/dist/node/index.js";
import path2 from "path";

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

// build/proxy.ts
function createProxy(list = []) {
  const ret = {};
  for (const [prefix, target] of list) {
    const httpsRE = /^https:\/\//;
    const isHttps = httpsRE.test(target);
    ret[prefix] = {
      target,
      changeOrigin: true,
      ws: true,
      rewrite: (path3) => path3.replace(new RegExp(`^${prefix}`), ""),
      // https is require secure=false
      ...isHttps ? { secure: false } : {}
    };
  }
  return ret;
}

// build/plugins.ts
import { visualizer } from "file:///D:/NpmPackages/ls-components-plus/node_modules/.pnpm/rollup-plugin-visualizer@5.12.0_rollup@4.21.1/node_modules/rollup-plugin-visualizer/dist/plugin/index.js";
import simpleHtmlPlugin from "file:///D:/NpmPackages/ls-components-plus/node_modules/.pnpm/vite-plugin-simple-html@0.1.2_vite@5.4.2_@types+node@22.5.1_sass@1.77.8_terser@5.36.0_/node_modules/vite-plugin-simple-html/dist/index.js";
import vue from "file:///D:/NpmPackages/ls-components-plus/node_modules/.pnpm/@vitejs+plugin-vue@5.1.2_vite@5.4.2_@types+node@22.5.1_sass@1.77.8_terser@5.36.0__vue@3.5.13_typescript@5.5.4_/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///D:/NpmPackages/ls-components-plus/node_modules/.pnpm/@vitejs+plugin-vue-jsx@4.0.1_vite@5.4.2_@types+node@22.5.1_sass@1.77.8_terser@5.36.0__vue@3.5.13_typescript@5.5.4_/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import eslintPlugin from "file:///D:/NpmPackages/ls-components-plus/node_modules/.pnpm/vite-plugin-eslint@1.8.1_eslint@8.57.0_vite@5.4.2_@types+node@22.5.1_sass@1.77.8_terser@5.36.0_/node_modules/vite-plugin-eslint/dist/index.mjs";
import viteCompression from "file:///D:/NpmPackages/ls-components-plus/node_modules/.pnpm/vite-plugin-compression@0.5.1_vite@5.4.2_@types+node@22.5.1_sass@1.77.8_terser@5.36.0_/node_modules/vite-plugin-compression/dist/index.mjs";
import vueSetupExtend from "file:///D:/NpmPackages/ls-components-plus/node_modules/.pnpm/unplugin-vue-setup-extend-plus@1.0.1/node_modules/unplugin-vue-setup-extend-plus/dist/vite.js";
import Components from "file:///D:/NpmPackages/ls-components-plus/node_modules/.pnpm/unplugin-vue-components@0.27.4_@babel+parser@7.25.4_rollup@4.21.1_vue@3.5.13_typescript@5.5.4_/node_modules/unplugin-vue-components/dist/vite.js";
import { ElementPlusResolver } from "file:///D:/NpmPackages/ls-components-plus/node_modules/.pnpm/unplugin-vue-components@0.27.4_@babel+parser@7.25.4_rollup@4.21.1_vue@3.5.13_typescript@5.5.4_/node_modules/unplugin-vue-components/dist/resolvers.js";
import AutoImport from "file:///D:/NpmPackages/ls-components-plus/node_modules/.pnpm/unplugin-auto-import@0.18.2_@vueuse+core@12.0.0_typescript@5.5.4__rollup@4.21.1/node_modules/unplugin-auto-import/dist/vite.js";
import IconsResolver from "file:///D:/NpmPackages/ls-components-plus/node_modules/.pnpm/unplugin-icons@0.19.2_@vue+compiler-sfc@3.5.13/node_modules/unplugin-icons/dist/resolver.js";
import Icons from "file:///D:/NpmPackages/ls-components-plus/node_modules/.pnpm/unplugin-icons@0.19.2_@vue+compiler-sfc@3.5.13/node_modules/unplugin-icons/dist/vite.js";
import { createSvgIconsPlugin } from "file:///D:/NpmPackages/ls-components-plus/node_modules/.pnpm/vite-plugin-svg-icons@2.0.1_vite@5.4.2_@types+node@22.5.1_sass@1.77.8_terser@5.36.0_/node_modules/vite-plugin-svg-icons/dist/index.mjs";
import FilesLoader from "file:///D:/NpmPackages/ls-components-plus/node_modules/.pnpm/vite-plugin-files-loader@1.1.1_vite@5.4.2_@types+node@22.5.1_sass@1.77.8_terser@5.36.0_/node_modules/vite-plugin-files-loader/dist/index.mjs";
import svgLoader from "file:///D:/NpmPackages/ls-components-plus/node_modules/.pnpm/vite-svg-loader@5.1.0_vue@3.5.13_typescript@5.5.4_/node_modules/vite-svg-loader/index.js";
import path from "path";
import dts from "file:///D:/NpmPackages/ls-components-plus/node_modules/.pnpm/vite-plugin-dts@4.4.0_@types+node@22.5.1_rollup@4.21.1_typescript@5.5.4_vite@5.4.2_@types+nod_uvkkxnhom637iackxvu4el274a/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_dirname = "D:\\NpmPackages\\ls-components-plus\\packages\\ls-components\\build";
var pathSrc = path.resolve(__vite_injected_original_dirname, "../../ls-components");
var createVitePlugins = (viteEnv) => {
  const { VITE_GLOB_APP_TITLE, VITE_REPORT } = viteEnv;
  return [
    vue(),
    // vue 可以使用 jsx/tsx 语法
    vueJsx(),
    // esLint 报错信息显示在浏览器界面上
    eslintPlugin(),
    // name 可以写在 script 标签上
    vueSetupExtend({}),
    // 创建打包压缩配置
    createCompression(viteEnv),
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
      resolvers: [
        ElementPlusResolver({
          importStyle: "sass"
          // 自定义主题颜色
        }),
        // 自动导入图标组件
        IconsResolver({
          prefix: "Icon"
        })
      ],
      dts: path.resolve(pathSrc, "auto-imports.d.ts")
    }),
    Components({
      resolvers: [
        // 自动导入 Element Plus 组件 (采用scss样式配色系统)
        ElementPlusResolver({
          importStyle: "sass"
          // 自定义主题颜色
        })
        // 自动注册图标组件
        // IconsResolver({
        //   enabledCollections: ['ep']
        // })
      ],
      dirs: ["src/components"],
      dts: path.resolve(pathSrc, "components.d.ts")
    }),
    Icons({
      autoInstall: true
    }),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), "src/assets/svgs")],
      symbolId: "icon-[dir]-[name]"
    }),
    FilesLoader(),
    svgLoader(),
    dts({
      include: [
        "src/**/*.d.ts",
        "components/**/*.vue",
        "components/**/*.ts",
        "components/**/*.d.ts",
        "components.d.ts",
        "auto-imports.d.ts"
      ],
      exclude: ["node_modules", "dist", "**/*.js", ".npmrc", "lib", "components/main.ts", "components/components.ts"],
      outDir: "lib/types",
      staticImport: true,
      rollupTypes: false
    })
  ];
};
var createCompression = (viteEnv) => {
  const { VITE_BUILD_COMPRESS = "none", VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE } = viteEnv;
  const compressList = VITE_BUILD_COMPRESS.split(",");
  const plugins = [];
  if (compressList.includes("gzip")) {
    plugins.push(
      viteCompression({
        ext: ".gz",
        algorithm: "gzip",
        deleteOriginFile: VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE
      })
    );
  }
  if (compressList.includes("brotli")) {
    plugins.push(
      viteCompression({
        ext: ".br",
        algorithm: "brotliCompress",
        deleteOriginFile: VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE
      })
    );
  }
  return plugins;
};

// vite.config.ts
import { readdirSync, statSync } from "fs";
var __vite_injected_original_dirname2 = "D:\\NpmPackages\\ls-components-plus\\packages\\ls-components";
var pathSrc2 = path2.resolve(__vite_injected_original_dirname2, "src");
var cpoSrc = path2.resolve(__vite_injected_original_dirname2, "components");
function getComponentEntries(cpoPath) {
  const resolve = (dir) => path2.join(__vite_injected_original_dirname2, "./", dir);
  const comList = ["_directives", "_hooks", "_utils"];
  let files = readdirSync(resolve(cpoPath));
  const componentEntries = files.reduce((fileObj, item) => {
    const join = path2.join;
    const itemPath = join(cpoPath, item);
    const isDir = statSync(itemPath).isDirectory();
    const [name] = item.split(".");
    if (isDir) {
      let temp = "";
      if (!item.startsWith("_")) {
        temp = name;
      } else if (comList.includes(item)) {
        temp = item.replace("_", "");
      }
      temp && (fileObj[temp] = resolve(join(itemPath, "index.ts")));
    } else if (name === "main") {
      fileObj["index"] = resolve(`${itemPath}`);
    }
    return fileObj;
  }, {});
  return componentEntries;
}
var vite_config_default = defineConfig(({ mode }) => {
  const root = process.cwd();
  const env = loadEnv(mode, root);
  const viteEnv = wrapperEnv(env);
  return {
    base: "/",
    resolve: {
      alias: {
        "@": pathSrc2,
        "@cpo": cpoSrc
      }
    },
    build: {
      outDir: "lib",
      cssCodeSplit: false,
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      },
      lib: {
        entry: getComponentEntries("components"),
        name: "[name]",
        fileName: "[name]/index",
        formats: ["es", "cjs"]
      },
      rollupOptions: {
        external: [
          "vue",
          "vue-router",
          "axios",
          "echarts",
          "element-plus",
          "pdfjs-dist",
          "@wangeditor/editor",
          "@wangeditor/editor-for-vue",
          "@element-plus/icons-vue",
          "@iconify/vue",
          "luckyexcel",
          "lodash",
          "vue3-ts-jsoneditor"
        ],
        output: {
          exports: "named",
          globals: {
            vue: "Vue",
            "vue-router": "VueRouter",
            axios: "axios",
            echarts: "echarts",
            "element-plus": "element-plus",
            "pdfjs-dist": "pdfjs-dist",
            "@wangeditor/editor": "@wangeditor/editor",
            "@wangeditor/editor-for-vue": "@wangeditor/editor-for-vue",
            "@element-plus/icons-vue": "@element-plus/icons-vue",
            "@iconify/vue": "@iconify/vue",
            luckyexcel: "luckyexcel",
            lodash: "lodash",
            "vue3-ts-jsoneditor": "vue3-ts-jsoneditor"
          },
          assetFileNames: "index.css",
          preserveModules: true
        }
      }
    },
    esbuild: {
      pure: ["console.log", "debugger"],
      keepNames: true
    },
    // 依赖预加载
    optimizeDeps: {
      include: ["element-plus/es/**", "@vueuse/core", "@element-plus/icons-vue"]
    },
    // scss 全局变量
    css: {
      preprocessorOptions: {
        scss: {
          // @use "src/style/element/index.scss" as *; 自定义主题颜色
          // additionalData: `@use "src/style/var.scss" as *;`,
          additionalData: `@use "@cpo/_style/common/variable.scss" as *; @use "@cpo/_style/common/utils.scss" as *; @use "@cpo/_style/element/index.scss" as *;`
        }
      }
    },
    // 插件
    plugins: [createVitePlugins(viteEnv)],
    server: {
      host: "0.0.0.0",
      port: viteEnv.VITE_PORT,
      open: viteEnv.VITE_OPEN,
      proxy: createProxy(viteEnv.VITE_PROXY)
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAiYnVpbGQvZ2V0RW52LnRzIiwgImJ1aWxkL3Byb3h5LnRzIiwgImJ1aWxkL3BsdWdpbnMudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxOcG1QYWNrYWdlc1xcXFxscy1jb21wb25lbnRzLXBsdXNcXFxccGFja2FnZXNcXFxcbHMtY29tcG9uZW50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcTnBtUGFja2FnZXNcXFxcbHMtY29tcG9uZW50cy1wbHVzXFxcXHBhY2thZ2VzXFxcXGxzLWNvbXBvbmVudHNcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L05wbVBhY2thZ2VzL2xzLWNvbXBvbmVudHMtcGx1cy9wYWNrYWdlcy9scy1jb21wb25lbnRzL3ZpdGUuY29uZmlnLnRzXCI7Ly8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmltcG9ydCB7IGRlZmluZUNvbmZpZywgbG9hZEVudiwgQ29uZmlnRW52LCBVc2VyQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCB7IHdyYXBwZXJFbnYgfSBmcm9tICcuL2J1aWxkL2dldEVudic7XG5pbXBvcnQgeyBjcmVhdGVQcm94eSB9IGZyb20gJy4vYnVpbGQvcHJveHknO1xuaW1wb3J0IHsgY3JlYXRlVml0ZVBsdWdpbnMgfSBmcm9tICcuL2J1aWxkL3BsdWdpbnMnO1xuaW1wb3J0IHsgcmVhZGRpclN5bmMsIHN0YXRTeW5jIH0gZnJvbSAnZnMnO1xuXG5jb25zdCBwYXRoU3JjID0gcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3NyYycpO1xuY29uc3QgY3BvU3JjID0gcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ2NvbXBvbmVudHMnKTtcblxuZnVuY3Rpb24gZ2V0Q29tcG9uZW50RW50cmllcyhjcG9QYXRoOiBzdHJpbmcpIHtcbiAgY29uc3QgcmVzb2x2ZSA9IChkaXI6IHN0cmluZykgPT4gcGF0aC5qb2luKF9fZGlybmFtZSwgJy4vJywgZGlyKTtcbiAgY29uc3QgY29tTGlzdCA9IFsnX2RpcmVjdGl2ZXMnLCAnX2hvb2tzJywgJ191dGlscyddO1xuICBsZXQgZmlsZXMgPSByZWFkZGlyU3luYyhyZXNvbHZlKGNwb1BhdGgpKTtcbiAgY29uc3QgY29tcG9uZW50RW50cmllcyA9IGZpbGVzLnJlZHVjZSgoZmlsZU9iajogYW55LCBpdGVtOiBhbnkpID0+IHtcbiAgICBjb25zdCBqb2luID0gKHBhdGggYXMgYW55KS5qb2luO1xuICAgIGNvbnN0IGl0ZW1QYXRoID0gam9pbihjcG9QYXRoLCBpdGVtKTtcbiAgICBjb25zdCBpc0RpciA9IHN0YXRTeW5jKGl0ZW1QYXRoKS5pc0RpcmVjdG9yeSgpO1xuICAgIGNvbnN0IFtuYW1lXSA9IGl0ZW0uc3BsaXQoJy4nKTtcbiAgICBpZiAoaXNEaXIpIHtcbiAgICAgIGxldCB0ZW1wID0gJyc7XG4gICAgICBpZiAoIWl0ZW0uc3RhcnRzV2l0aCgnXycpKSB7XG4gICAgICAgIHRlbXAgPSBuYW1lO1xuICAgICAgfSBlbHNlIGlmIChjb21MaXN0LmluY2x1ZGVzKGl0ZW0pKSB7XG4gICAgICAgIHRlbXAgPSBpdGVtLnJlcGxhY2UoJ18nLCAnJyk7XG4gICAgICB9XG4gICAgICB0ZW1wICYmIChmaWxlT2JqW3RlbXBdID0gcmVzb2x2ZShqb2luKGl0ZW1QYXRoLCAnaW5kZXgudHMnKSkpO1xuICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gJ21haW4nKSB7XG4gICAgICBmaWxlT2JqWydpbmRleCddID0gcmVzb2x2ZShgJHtpdGVtUGF0aH1gKTtcbiAgICB9XG4gICAgcmV0dXJuIGZpbGVPYmo7XG4gIH0sIHt9KTtcbiAgcmV0dXJuIGNvbXBvbmVudEVudHJpZXM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoeyBtb2RlIH06IENvbmZpZ0Vudik6IFVzZXJDb25maWcgPT4ge1xuICBjb25zdCByb290ID0gcHJvY2Vzcy5jd2QoKTtcbiAgY29uc3QgZW52ID0gbG9hZEVudihtb2RlLCByb290KTtcbiAgY29uc3Qgdml0ZUVudiA9IHdyYXBwZXJFbnYoZW52KTtcblxuICByZXR1cm4ge1xuICAgIGJhc2U6ICcvJyxcbiAgICByZXNvbHZlOiB7XG4gICAgICBhbGlhczoge1xuICAgICAgICAnQCc6IHBhdGhTcmMsXG4gICAgICAgICdAY3BvJzogY3BvU3JjXG4gICAgICB9XG4gICAgfSxcbiAgICBidWlsZDoge1xuICAgICAgb3V0RGlyOiAnbGliJyxcbiAgICAgIGNzc0NvZGVTcGxpdDogZmFsc2UsXG4gICAgICB0ZXJzZXJPcHRpb25zOiB7XG4gICAgICAgIGNvbXByZXNzOiB7XG4gICAgICAgICAgZHJvcF9jb25zb2xlOiB0cnVlLFxuICAgICAgICAgIGRyb3BfZGVidWdnZXI6IHRydWVcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGxpYjoge1xuICAgICAgICBlbnRyeTogZ2V0Q29tcG9uZW50RW50cmllcygnY29tcG9uZW50cycpLFxuICAgICAgICBuYW1lOiAnW25hbWVdJyxcbiAgICAgICAgZmlsZU5hbWU6ICdbbmFtZV0vaW5kZXgnLFxuICAgICAgICBmb3JtYXRzOiBbJ2VzJywgJ2NqcyddXG4gICAgICB9LFxuICAgICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgICBleHRlcm5hbDogW1xuICAgICAgICAgICd2dWUnLFxuICAgICAgICAgICd2dWUtcm91dGVyJyxcbiAgICAgICAgICAnYXhpb3MnLFxuICAgICAgICAgICdlY2hhcnRzJyxcbiAgICAgICAgICAnZWxlbWVudC1wbHVzJyxcbiAgICAgICAgICAncGRmanMtZGlzdCcsXG4gICAgICAgICAgJ0B3YW5nZWRpdG9yL2VkaXRvcicsXG4gICAgICAgICAgJ0B3YW5nZWRpdG9yL2VkaXRvci1mb3ItdnVlJyxcbiAgICAgICAgICAnQGVsZW1lbnQtcGx1cy9pY29ucy12dWUnLFxuICAgICAgICAgICdAaWNvbmlmeS92dWUnLFxuICAgICAgICAgICdsdWNreWV4Y2VsJyxcbiAgICAgICAgICAnbG9kYXNoJyxcbiAgICAgICAgICAndnVlMy10cy1qc29uZWRpdG9yJ1xuICAgICAgICBdLFxuICAgICAgICBvdXRwdXQ6IHtcbiAgICAgICAgICBleHBvcnRzOiAnbmFtZWQnLFxuICAgICAgICAgIGdsb2JhbHM6IHtcbiAgICAgICAgICAgIHZ1ZTogJ1Z1ZScsXG4gICAgICAgICAgICAndnVlLXJvdXRlcic6ICdWdWVSb3V0ZXInLFxuICAgICAgICAgICAgYXhpb3M6ICdheGlvcycsXG4gICAgICAgICAgICBlY2hhcnRzOiAnZWNoYXJ0cycsXG4gICAgICAgICAgICAnZWxlbWVudC1wbHVzJzogJ2VsZW1lbnQtcGx1cycsXG4gICAgICAgICAgICAncGRmanMtZGlzdCc6ICdwZGZqcy1kaXN0JyxcbiAgICAgICAgICAgICdAd2FuZ2VkaXRvci9lZGl0b3InOiAnQHdhbmdlZGl0b3IvZWRpdG9yJyxcbiAgICAgICAgICAgICdAd2FuZ2VkaXRvci9lZGl0b3ItZm9yLXZ1ZSc6ICdAd2FuZ2VkaXRvci9lZGl0b3ItZm9yLXZ1ZScsXG4gICAgICAgICAgICAnQGVsZW1lbnQtcGx1cy9pY29ucy12dWUnOiAnQGVsZW1lbnQtcGx1cy9pY29ucy12dWUnLFxuICAgICAgICAgICAgJ0BpY29uaWZ5L3Z1ZSc6ICdAaWNvbmlmeS92dWUnLFxuICAgICAgICAgICAgbHVja3lleGNlbDogJ2x1Y2t5ZXhjZWwnLFxuICAgICAgICAgICAgbG9kYXNoOiAnbG9kYXNoJyxcbiAgICAgICAgICAgICd2dWUzLXRzLWpzb25lZGl0b3InOiAndnVlMy10cy1qc29uZWRpdG9yJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgYXNzZXRGaWxlTmFtZXM6ICdpbmRleC5jc3MnLFxuICAgICAgICAgIHByZXNlcnZlTW9kdWxlczogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBlc2J1aWxkOiB7XG4gICAgICBwdXJlOiBbJ2NvbnNvbGUubG9nJywgJ2RlYnVnZ2VyJ10sXG4gICAgICBrZWVwTmFtZXM6IHRydWVcbiAgICB9LFxuICAgIC8vIFx1NEY5RFx1OEQ1Nlx1OTg4NFx1NTJBMFx1OEY3RFxuICAgIG9wdGltaXplRGVwczoge1xuICAgICAgaW5jbHVkZTogWydlbGVtZW50LXBsdXMvZXMvKionLCAnQHZ1ZXVzZS9jb3JlJywgJ0BlbGVtZW50LXBsdXMvaWNvbnMtdnVlJ11cbiAgICB9LFxuICAgIC8vIHNjc3MgXHU1MTY4XHU1QzQwXHU1M0Q4XHU5MUNGXG4gICAgY3NzOiB7XG4gICAgICBwcmVwcm9jZXNzb3JPcHRpb25zOiB7XG4gICAgICAgIHNjc3M6IHtcbiAgICAgICAgICAvLyBAdXNlIFwic3JjL3N0eWxlL2VsZW1lbnQvaW5kZXguc2Nzc1wiIGFzICo7IFx1ODFFQVx1NUI5QVx1NEU0OVx1NEUzQlx1OTg5OFx1OTg5Q1x1ODI3MlxuICAgICAgICAgIC8vIGFkZGl0aW9uYWxEYXRhOiBgQHVzZSBcInNyYy9zdHlsZS92YXIuc2Nzc1wiIGFzICo7YCxcbiAgICAgICAgICBhZGRpdGlvbmFsRGF0YTogYEB1c2UgXCJAY3BvL19zdHlsZS9jb21tb24vdmFyaWFibGUuc2Nzc1wiIGFzICo7IEB1c2UgXCJAY3BvL19zdHlsZS9jb21tb24vdXRpbHMuc2Nzc1wiIGFzICo7IEB1c2UgXCJAY3BvL19zdHlsZS9lbGVtZW50L2luZGV4LnNjc3NcIiBhcyAqO2BcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgLy8gXHU2M0QyXHU0RUY2XG4gICAgcGx1Z2luczogW2NyZWF0ZVZpdGVQbHVnaW5zKHZpdGVFbnYpXSxcbiAgICBzZXJ2ZXI6IHtcbiAgICAgIGhvc3Q6ICcwLjAuMC4wJyxcbiAgICAgIHBvcnQ6IHZpdGVFbnYuVklURV9QT1JULFxuICAgICAgb3Blbjogdml0ZUVudi5WSVRFX09QRU4sXG4gICAgICBwcm94eTogY3JlYXRlUHJveHkodml0ZUVudi5WSVRFX1BST1hZKVxuICAgIH1cbiAgfTtcbn0pO1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxOcG1QYWNrYWdlc1xcXFxscy1jb21wb25lbnRzLXBsdXNcXFxccGFja2FnZXNcXFxcbHMtY29tcG9uZW50c1xcXFxidWlsZFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcTnBtUGFja2FnZXNcXFxcbHMtY29tcG9uZW50cy1wbHVzXFxcXHBhY2thZ2VzXFxcXGxzLWNvbXBvbmVudHNcXFxcYnVpbGRcXFxcZ2V0RW52LnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9OcG1QYWNrYWdlcy9scy1jb21wb25lbnRzLXBsdXMvcGFja2FnZXMvbHMtY29tcG9uZW50cy9idWlsZC9nZXRFbnYudHNcIjtpbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcblxuZXhwb3J0IGZ1bmN0aW9uIGlzRGV2Rm4obW9kZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBtb2RlID09PSAnZGV2Jztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJlRm4obW9kZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBtb2RlID09PSAncHJlJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvZEZuKG1vZGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gbW9kZSA9PT0gJ3Byb2QnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNUZXN0Rm4obW9kZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBtb2RlID09PSAndGVzdCc7XG59XG5cbi8qKlxuICogV2hldGhlciB0byBnZW5lcmF0ZSBwYWNrYWdlIHByZXZpZXdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzUmVwb3J0TW9kZSgpOiBib29sZWFuIHtcbiAgcmV0dXJuIHByb2Nlc3MuZW52LlZJVEVfUkVQT1JUID09PSAndHJ1ZSc7XG59XG5cbi8vIFJlYWQgYWxsIGVudmlyb25tZW50IHZhcmlhYmxlIGNvbmZpZ3VyYXRpb24gZmlsZXMgdG8gcHJvY2Vzcy5lbnZcbmV4cG9ydCBmdW5jdGlvbiB3cmFwcGVyRW52KGVudkNvbmY6IFJlY29yZGFibGUpOiBWaXRlRW52IHtcbiAgY29uc3QgcmV0OiBhbnkgPSB7fTtcblxuICBmb3IgKGNvbnN0IGVudk5hbWUgb2YgT2JqZWN0LmtleXMoZW52Q29uZikpIHtcbiAgICBsZXQgcmVhbE5hbWUgPSBlbnZDb25mW2Vudk5hbWVdLnJlcGxhY2UoL1xcXFxuL2csICdcXG4nKTtcbiAgICByZWFsTmFtZSA9IHJlYWxOYW1lID09PSAndHJ1ZScgPyB0cnVlIDogcmVhbE5hbWUgPT09ICdmYWxzZScgPyBmYWxzZSA6IHJlYWxOYW1lO1xuICAgIGlmIChlbnZOYW1lID09PSAnVklURV9QT1JUJykgcmVhbE5hbWUgPSBOdW1iZXIocmVhbE5hbWUpO1xuICAgIGlmIChlbnZOYW1lID09PSAnVklURV9QUk9YWScpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJlYWxOYW1lID0gSlNPTi5wYXJzZShyZWFsTmFtZSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge31cbiAgICB9XG4gICAgcmV0W2Vudk5hbWVdID0gcmVhbE5hbWU7XG4gIH1cbiAgcmV0dXJuIHJldDtcbn1cblxuLyoqXG4gKiBHZXQgdXNlciByb290IGRpcmVjdG9yeVxuICogQHBhcmFtIGRpciBmaWxlIHBhdGhcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFJvb3RQYXRoKC4uLmRpcjogc3RyaW5nW10pIHtcbiAgcmV0dXJuIHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCAuLi5kaXIpO1xufVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxOcG1QYWNrYWdlc1xcXFxscy1jb21wb25lbnRzLXBsdXNcXFxccGFja2FnZXNcXFxcbHMtY29tcG9uZW50c1xcXFxidWlsZFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcTnBtUGFja2FnZXNcXFxcbHMtY29tcG9uZW50cy1wbHVzXFxcXHBhY2thZ2VzXFxcXGxzLWNvbXBvbmVudHNcXFxcYnVpbGRcXFxccHJveHkudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L05wbVBhY2thZ2VzL2xzLWNvbXBvbmVudHMtcGx1cy9wYWNrYWdlcy9scy1jb21wb25lbnRzL2J1aWxkL3Byb3h5LnRzXCI7aW1wb3J0IHR5cGUgeyBQcm94eU9wdGlvbnMgfSBmcm9tICd2aXRlJztcblxudHlwZSBQcm94eUl0ZW0gPSBbc3RyaW5nLCBzdHJpbmddO1xuXG50eXBlIFByb3h5TGlzdCA9IFByb3h5SXRlbVtdO1xuXG50eXBlIFByb3h5VGFyZ2V0TGlzdCA9IFJlY29yZDxzdHJpbmcsIFByb3h5T3B0aW9ucz47XG5cbi8qKlxuICogXHU1MjFCXHU1RUZBXHU0RUUzXHU3NDA2XHVGRjBDXHU3NTI4XHU0RThFXHU4OUUzXHU2NzkwIC5lbnYuZGV2ZWxvcG1lbnQgXHU0RUUzXHU3NDA2XHU5MTREXHU3RjZFXG4gKiBAcGFyYW0gbGlzdFxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUHJveHkobGlzdDogUHJveHlMaXN0ID0gW10pIHtcbiAgY29uc3QgcmV0OiBQcm94eVRhcmdldExpc3QgPSB7fTtcbiAgZm9yIChjb25zdCBbcHJlZml4LCB0YXJnZXRdIG9mIGxpc3QpIHtcbiAgICBjb25zdCBodHRwc1JFID0gL15odHRwczpcXC9cXC8vO1xuICAgIGNvbnN0IGlzSHR0cHMgPSBodHRwc1JFLnRlc3QodGFyZ2V0KTtcblxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9odHRwLXBhcnR5L25vZGUtaHR0cC1wcm94eSNvcHRpb25zXG4gICAgcmV0W3ByZWZpeF0gPSB7XG4gICAgICB0YXJnZXQ6IHRhcmdldCxcbiAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcbiAgICAgIHdzOiB0cnVlLFxuICAgICAgcmV3cml0ZTogcGF0aCA9PiBwYXRoLnJlcGxhY2UobmV3IFJlZ0V4cChgXiR7cHJlZml4fWApLCAnJyksXG4gICAgICAvLyBodHRwcyBpcyByZXF1aXJlIHNlY3VyZT1mYWxzZVxuICAgICAgLi4uKGlzSHR0cHMgPyB7IHNlY3VyZTogZmFsc2UgfSA6IHt9KVxuICAgIH07XG4gIH1cbiAgcmV0dXJuIHJldDtcbn1cbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxcTnBtUGFja2FnZXNcXFxcbHMtY29tcG9uZW50cy1wbHVzXFxcXHBhY2thZ2VzXFxcXGxzLWNvbXBvbmVudHNcXFxcYnVpbGRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXE5wbVBhY2thZ2VzXFxcXGxzLWNvbXBvbmVudHMtcGx1c1xcXFxwYWNrYWdlc1xcXFxscy1jb21wb25lbnRzXFxcXGJ1aWxkXFxcXHBsdWdpbnMudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L05wbVBhY2thZ2VzL2xzLWNvbXBvbmVudHMtcGx1cy9wYWNrYWdlcy9scy1jb21wb25lbnRzL2J1aWxkL3BsdWdpbnMudHNcIjsvLyBpbXBvcnQgeyByZXNvbHZlIH0gZnJvbSBcInBhdGhcIjtcbmltcG9ydCB7IFBsdWdpbk9wdGlvbiB9IGZyb20gJ3ZpdGUnO1xuLy8gaW1wb3J0IHsgVml0ZVBXQSB9IGZyb20gXCJ2aXRlLXBsdWdpbi1wd2FcIjtcbmltcG9ydCB7IHZpc3VhbGl6ZXIgfSBmcm9tICdyb2xsdXAtcGx1Z2luLXZpc3VhbGl6ZXInO1xuaW1wb3J0IHNpbXBsZUh0bWxQbHVnaW4gZnJvbSAndml0ZS1wbHVnaW4tc2ltcGxlLWh0bWwnO1xuLy8gaW1wb3J0IHsgY3JlYXRlU3ZnSWNvbnNQbHVnaW4gfSBmcm9tIFwidml0ZS1wbHVnaW4tc3ZnLWljb25zXCI7XG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSc7XG5pbXBvcnQgdnVlSnN4IGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZS1qc3gnO1xuaW1wb3J0IGVzbGludFBsdWdpbiBmcm9tICd2aXRlLXBsdWdpbi1lc2xpbnQnO1xuaW1wb3J0IHZpdGVDb21wcmVzc2lvbiBmcm9tICd2aXRlLXBsdWdpbi1jb21wcmVzc2lvbic7XG5pbXBvcnQgdnVlU2V0dXBFeHRlbmQgZnJvbSAndW5wbHVnaW4tdnVlLXNldHVwLWV4dGVuZC1wbHVzL3ZpdGUnO1xuaW1wb3J0IENvbXBvbmVudHMgZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvdml0ZSc7XG5pbXBvcnQgeyBFbGVtZW50UGx1c1Jlc29sdmVyIH0gZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvcmVzb2x2ZXJzJztcbmltcG9ydCBBdXRvSW1wb3J0IGZyb20gJ3VucGx1Z2luLWF1dG8taW1wb3J0L3ZpdGUnO1xuaW1wb3J0IEljb25zUmVzb2x2ZXIgZnJvbSAndW5wbHVnaW4taWNvbnMvcmVzb2x2ZXInO1xuaW1wb3J0IEljb25zIGZyb20gJ3VucGx1Z2luLWljb25zL3ZpdGUnO1xuaW1wb3J0IHsgY3JlYXRlU3ZnSWNvbnNQbHVnaW4gfSBmcm9tICd2aXRlLXBsdWdpbi1zdmctaWNvbnMnO1xuaW1wb3J0IEZpbGVzTG9hZGVyIGZyb20gJ3ZpdGUtcGx1Z2luLWZpbGVzLWxvYWRlcic7XG5pbXBvcnQgc3ZnTG9hZGVyIGZyb20gJ3ZpdGUtc3ZnLWxvYWRlcic7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBkdHMgZnJvbSAndml0ZS1wbHVnaW4tZHRzJztcblxuY29uc3QgcGF0aFNyYyA9IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuLi8uLi9scy1jb21wb25lbnRzJyk7XG5cbi8qKlxuICogXHU1MjFCXHU1RUZBIHZpdGUgXHU2M0QyXHU0RUY2XG4gKiBAcGFyYW0gdml0ZUVudlxuICovXG5leHBvcnQgY29uc3QgY3JlYXRlVml0ZVBsdWdpbnMgPSAodml0ZUVudjogVml0ZUVudik6IChQbHVnaW5PcHRpb24gfCBQbHVnaW5PcHRpb25bXSlbXSA9PiB7XG4gIGNvbnN0IHsgVklURV9HTE9CX0FQUF9USVRMRSwgVklURV9SRVBPUlQgfSA9IHZpdGVFbnY7XG4gIHJldHVybiBbXG4gICAgdnVlKCksXG4gICAgLy8gdnVlIFx1NTNFRlx1NEVFNVx1NEY3Rlx1NzUyOCBqc3gvdHN4IFx1OEJFRFx1NkNENVxuICAgIHZ1ZUpzeCgpLFxuICAgIC8vIGVzTGludCBcdTYyQTVcdTk1MTlcdTRGRTFcdTYwNkZcdTY2M0VcdTc5M0FcdTU3MjhcdTZENEZcdTg5QzhcdTU2NjhcdTc1NENcdTk3NjJcdTRFMEFcbiAgICBlc2xpbnRQbHVnaW4oKSxcbiAgICAvLyBuYW1lIFx1NTNFRlx1NEVFNVx1NTE5OVx1NTcyOCBzY3JpcHQgXHU2ODA3XHU3QjdFXHU0RTBBXG4gICAgdnVlU2V0dXBFeHRlbmQoe30pLFxuICAgIC8vIFx1NTIxQlx1NUVGQVx1NjI1M1x1NTMwNVx1NTM4Qlx1N0YyOVx1OTE0RFx1N0Y2RVxuICAgIGNyZWF0ZUNvbXByZXNzaW9uKHZpdGVFbnYpLFxuICAgIC8vIFx1NkNFOFx1NTE2NVx1NTNEOFx1OTFDRlx1NTIzMCBodG1sIFx1NjU4N1x1NEVGNlxuICAgIHNpbXBsZUh0bWxQbHVnaW4oe1xuICAgICAgbWluaWZ5OiB0cnVlLFxuICAgICAgaW5qZWN0OiB7XG4gICAgICAgIGRhdGE6IHsgdGl0bGU6IFZJVEVfR0xPQl9BUFBfVElUTEUgfVxuICAgICAgfVxuICAgIH0pLFxuICAgIC8vIHZpdGVQV0FcbiAgICAvLyBWSVRFX1BXQSAmJiBjcmVhdGVWaXRlUHdhKHZpdGVFbnYpLFxuICAgIC8vIFx1NjYyRlx1NTQyNlx1NzUxRlx1NjIxMFx1NTMwNVx1OTg4NFx1ODlDOFx1RkYwQ1x1NTIwNlx1Njc5MFx1NEY5RFx1OEQ1Nlx1NTMwNVx1NTkyN1x1NUMwRlx1NTA1QVx1NEYxOFx1NTMxNlx1NTkwNFx1NzQwNlxuICAgIFZJVEVfUkVQT1JUICYmICh2aXN1YWxpemVyKHsgZmlsZW5hbWU6ICdzdGF0cy5odG1sJywgZ3ppcFNpemU6IHRydWUsIGJyb3RsaVNpemU6IHRydWUsIG9wZW46IHRydWUgfSkgYXMgUGx1Z2luT3B0aW9uKSxcbiAgICBBdXRvSW1wb3J0KHtcbiAgICAgIGltcG9ydHM6IFtcbiAgICAgICAgLy8gXHU5NzAwXHU4OTgxXHU4MUVBXHU1MkE4XHU1QkZDXHU1MTY1XHU3Njg0XHU2M0QyXHU0RUY2XHVGRjBDXHU4MUVBXHU1QjlBXHU0RTQ5XHU1QkZDXHU1MTY1XHU3Njg0QVBJXG4gICAgICAgICd2dWUnLFxuICAgICAgICAndnVlLXJvdXRlcicsXG4gICAgICAgICdwaW5pYSdcbiAgICAgIF0sXG4gICAgICBpZ25vcmU6IFsnaCddLFxuICAgICAgcmVzb2x2ZXJzOiBbXG4gICAgICAgIEVsZW1lbnRQbHVzUmVzb2x2ZXIoe1xuICAgICAgICAgIGltcG9ydFN0eWxlOiAnc2FzcycgLy8gXHU4MUVBXHU1QjlBXHU0RTQ5XHU0RTNCXHU5ODk4XHU5ODlDXHU4MjcyXG4gICAgICAgIH0pLFxuICAgICAgICAvLyBcdTgxRUFcdTUyQThcdTVCRkNcdTUxNjVcdTU2RkVcdTY4MDdcdTdFQzRcdTRFRjZcbiAgICAgICAgSWNvbnNSZXNvbHZlcih7XG4gICAgICAgICAgcHJlZml4OiAnSWNvbidcbiAgICAgICAgfSlcbiAgICAgIF0sXG4gICAgICBkdHM6IHBhdGgucmVzb2x2ZShwYXRoU3JjLCAnYXV0by1pbXBvcnRzLmQudHMnKVxuICAgIH0pLFxuICAgIENvbXBvbmVudHMoe1xuICAgICAgcmVzb2x2ZXJzOiBbXG4gICAgICAgIC8vIFx1ODFFQVx1NTJBOFx1NUJGQ1x1NTE2NSBFbGVtZW50IFBsdXMgXHU3RUM0XHU0RUY2IChcdTkxQzdcdTc1MjhzY3NzXHU2ODM3XHU1RjBGXHU5MTREXHU4MjcyXHU3Q0ZCXHU3RURGKVxuICAgICAgICBFbGVtZW50UGx1c1Jlc29sdmVyKHtcbiAgICAgICAgICBpbXBvcnRTdHlsZTogJ3Nhc3MnIC8vIFx1ODFFQVx1NUI5QVx1NEU0OVx1NEUzQlx1OTg5OFx1OTg5Q1x1ODI3MlxuICAgICAgICB9KVxuICAgICAgICAvLyBcdTgxRUFcdTUyQThcdTZDRThcdTUxOENcdTU2RkVcdTY4MDdcdTdFQzRcdTRFRjZcbiAgICAgICAgLy8gSWNvbnNSZXNvbHZlcih7XG4gICAgICAgIC8vICAgZW5hYmxlZENvbGxlY3Rpb25zOiBbJ2VwJ11cbiAgICAgICAgLy8gfSlcbiAgICAgIF0sXG4gICAgICBkaXJzOiBbJ3NyYy9jb21wb25lbnRzJ10sXG4gICAgICBkdHM6IHBhdGgucmVzb2x2ZShwYXRoU3JjLCAnY29tcG9uZW50cy5kLnRzJylcbiAgICB9KSxcbiAgICBJY29ucyh7XG4gICAgICBhdXRvSW5zdGFsbDogdHJ1ZVxuICAgIH0pLFxuICAgIGNyZWF0ZVN2Z0ljb25zUGx1Z2luKHtcbiAgICAgIGljb25EaXJzOiBbcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksICdzcmMvYXNzZXRzL3N2Z3MnKV0sXG4gICAgICBzeW1ib2xJZDogJ2ljb24tW2Rpcl0tW25hbWVdJ1xuICAgIH0pLFxuICAgIEZpbGVzTG9hZGVyKCksXG4gICAgc3ZnTG9hZGVyKCksXG4gICAgZHRzKHtcbiAgICAgIGluY2x1ZGU6IFtcbiAgICAgICAgJ3NyYy8qKi8qLmQudHMnLFxuICAgICAgICAnY29tcG9uZW50cy8qKi8qLnZ1ZScsXG4gICAgICAgICdjb21wb25lbnRzLyoqLyoudHMnLFxuICAgICAgICAnY29tcG9uZW50cy8qKi8qLmQudHMnLFxuICAgICAgICAnY29tcG9uZW50cy5kLnRzJyxcbiAgICAgICAgJ2F1dG8taW1wb3J0cy5kLnRzJ1xuICAgICAgXSxcbiAgICAgIGV4Y2x1ZGU6IFsnbm9kZV9tb2R1bGVzJywgJ2Rpc3QnLCAnKiovKi5qcycsICcubnBtcmMnLCAnbGliJywgJ2NvbXBvbmVudHMvbWFpbi50cycsICdjb21wb25lbnRzL2NvbXBvbmVudHMudHMnXSxcbiAgICAgIG91dERpcjogJ2xpYi90eXBlcycsXG4gICAgICBzdGF0aWNJbXBvcnQ6IHRydWUsXG4gICAgICByb2xsdXBUeXBlczogZmFsc2VcbiAgICB9KVxuICBdO1xufTtcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gXHU2ODM5XHU2MzZFIGNvbXByZXNzIFx1OTE0RFx1N0Y2RVx1RkYwQ1x1NzUxRlx1NjIxMFx1NEUwRFx1NTQwQ1x1NzY4NFx1NTM4Qlx1N0YyOVx1ODlDNFx1NTIxOVxuICogQHBhcmFtIHZpdGVFbnZcbiAqL1xuY29uc3QgY3JlYXRlQ29tcHJlc3Npb24gPSAodml0ZUVudjogVml0ZUVudik6IFBsdWdpbk9wdGlvbiB8IFBsdWdpbk9wdGlvbltdID0+IHtcbiAgY29uc3QgeyBWSVRFX0JVSUxEX0NPTVBSRVNTID0gJ25vbmUnLCBWSVRFX0JVSUxEX0NPTVBSRVNTX0RFTEVURV9PUklHSU5fRklMRSB9ID0gdml0ZUVudjtcbiAgY29uc3QgY29tcHJlc3NMaXN0ID0gVklURV9CVUlMRF9DT01QUkVTUy5zcGxpdCgnLCcpO1xuICBjb25zdCBwbHVnaW5zOiBQbHVnaW5PcHRpb25bXSA9IFtdO1xuICBpZiAoY29tcHJlc3NMaXN0LmluY2x1ZGVzKCdnemlwJykpIHtcbiAgICBwbHVnaW5zLnB1c2goXG4gICAgICB2aXRlQ29tcHJlc3Npb24oe1xuICAgICAgICBleHQ6ICcuZ3onLFxuICAgICAgICBhbGdvcml0aG06ICdnemlwJyxcbiAgICAgICAgZGVsZXRlT3JpZ2luRmlsZTogVklURV9CVUlMRF9DT01QUkVTU19ERUxFVEVfT1JJR0lOX0ZJTEVcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuICBpZiAoY29tcHJlc3NMaXN0LmluY2x1ZGVzKCdicm90bGknKSkge1xuICAgIHBsdWdpbnMucHVzaChcbiAgICAgIHZpdGVDb21wcmVzc2lvbih7XG4gICAgICAgIGV4dDogJy5icicsXG4gICAgICAgIGFsZ29yaXRobTogJ2Jyb3RsaUNvbXByZXNzJyxcbiAgICAgICAgZGVsZXRlT3JpZ2luRmlsZTogVklURV9CVUlMRF9DT01QUkVTU19ERUxFVEVfT1JJR0lOX0ZJTEVcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuICByZXR1cm4gcGx1Z2lucztcbn07XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIFZpdGVQd2FcbiAqIEBwYXJhbSB2aXRlRW52XG4gKi9cbi8vIGNvbnN0IGNyZWF0ZVZpdGVQd2EgPSAodml0ZUVudjogVml0ZUVudik6IFBsdWdpbk9wdGlvbiB8IFBsdWdpbk9wdGlvbltdID0+IHtcbi8vICAgY29uc3QgeyBWSVRFX0dMT0JfQVBQX1RJVExFIH0gPSB2aXRlRW52O1xuLy8gICByZXR1cm4gVml0ZVBXQSh7XG4vLyAgICAgcmVnaXN0ZXJUeXBlOiBcImF1dG9VcGRhdGVcIixcbi8vICAgICBtYW5pZmVzdDoge1xuLy8gICAgICAgbmFtZTogVklURV9HTE9CX0FQUF9USVRMRSxcbi8vICAgICAgIHNob3J0X25hbWU6IFZJVEVfR0xPQl9BUFBfVElUTEUsXG4vLyAgICAgICB0aGVtZV9jb2xvcjogXCIjZmZmZmZmXCIsXG4vLyAgICAgICBpY29uczogW1xuLy8gICAgICAgICB7XG4vLyAgICAgICAgICAgc3JjOiBcIi9sb2dvLnBuZ1wiLFxuLy8gICAgICAgICAgIHNpemVzOiBcIjE5MngxOTJcIixcbi8vICAgICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiXG4vLyAgICAgICAgIH0sXG4vLyAgICAgICAgIHtcbi8vICAgICAgICAgICBzcmM6IFwiL2xvZ28ucG5nXCIsXG4vLyAgICAgICAgICAgc2l6ZXM6IFwiNTEyeDUxMlwiLFxuLy8gICAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCJcbi8vICAgICAgICAgfSxcbi8vICAgICAgICAge1xuLy8gICAgICAgICAgIHNyYzogXCIvbG9nby5wbmdcIixcbi8vICAgICAgICAgICBzaXplczogXCI1MTJ4NTEyXCIsXG4vLyAgICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcbi8vICAgICAgICAgICBwdXJwb3NlOiBcImFueSBtYXNrYWJsZVwiXG4vLyAgICAgICAgIH1cbi8vICAgICAgIF1cbi8vICAgICB9XG4vLyAgIH0pO1xuLy8gfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFDQSxTQUFTLGNBQWMsZUFBc0M7QUFDN0QsT0FBT0EsV0FBVTs7O0FDd0JWLFNBQVMsV0FBVyxTQUE4QjtBQUN2RCxRQUFNLE1BQVcsQ0FBQztBQUVsQixhQUFXLFdBQVcsT0FBTyxLQUFLLE9BQU8sR0FBRztBQUMxQyxRQUFJLFdBQVcsUUFBUSxPQUFPLEVBQUUsUUFBUSxRQUFRLElBQUk7QUFDcEQsZUFBVyxhQUFhLFNBQVMsT0FBTyxhQUFhLFVBQVUsUUFBUTtBQUN2RSxRQUFJLFlBQVksWUFBYSxZQUFXLE9BQU8sUUFBUTtBQUN2RCxRQUFJLFlBQVksY0FBYztBQUM1QixVQUFJO0FBQ0YsbUJBQVcsS0FBSyxNQUFNLFFBQVE7QUFBQSxNQUNoQyxTQUFTLE9BQU87QUFBQSxNQUFDO0FBQUEsSUFDbkI7QUFDQSxRQUFJLE9BQU8sSUFBSTtBQUFBLEVBQ2pCO0FBQ0EsU0FBTztBQUNUOzs7QUM3Qk8sU0FBUyxZQUFZLE9BQWtCLENBQUMsR0FBRztBQUNoRCxRQUFNLE1BQXVCLENBQUM7QUFDOUIsYUFBVyxDQUFDLFFBQVEsTUFBTSxLQUFLLE1BQU07QUFDbkMsVUFBTSxVQUFVO0FBQ2hCLFVBQU0sVUFBVSxRQUFRLEtBQUssTUFBTTtBQUduQyxRQUFJLE1BQU0sSUFBSTtBQUFBLE1BQ1o7QUFBQSxNQUNBLGNBQWM7QUFBQSxNQUNkLElBQUk7QUFBQSxNQUNKLFNBQVMsQ0FBQUMsVUFBUUEsTUFBSyxRQUFRLElBQUksT0FBTyxJQUFJLE1BQU0sRUFBRSxHQUFHLEVBQUU7QUFBQTtBQUFBLE1BRTFELEdBQUksVUFBVSxFQUFFLFFBQVEsTUFBTSxJQUFJLENBQUM7QUFBQSxJQUNyQztBQUFBLEVBQ0Y7QUFDQSxTQUFPO0FBQ1Q7OztBQzFCQSxTQUFTLGtCQUFrQjtBQUMzQixPQUFPLHNCQUFzQjtBQUU3QixPQUFPLFNBQVM7QUFDaEIsT0FBTyxZQUFZO0FBQ25CLE9BQU8sa0JBQWtCO0FBQ3pCLE9BQU8scUJBQXFCO0FBQzVCLE9BQU8sb0JBQW9CO0FBQzNCLE9BQU8sZ0JBQWdCO0FBQ3ZCLFNBQVMsMkJBQTJCO0FBQ3BDLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sbUJBQW1CO0FBQzFCLE9BQU8sV0FBVztBQUNsQixTQUFTLDRCQUE0QjtBQUNyQyxPQUFPLGlCQUFpQjtBQUN4QixPQUFPLGVBQWU7QUFDdEIsT0FBTyxVQUFVO0FBQ2pCLE9BQU8sU0FBUztBQXBCaEIsSUFBTSxtQ0FBbUM7QUFzQnpDLElBQU0sVUFBVSxLQUFLLFFBQVEsa0NBQVcscUJBQXFCO0FBTXRELElBQU0sb0JBQW9CLENBQUMsWUFBd0Q7QUFDeEYsUUFBTSxFQUFFLHFCQUFxQixZQUFZLElBQUk7QUFDN0MsU0FBTztBQUFBLElBQ0wsSUFBSTtBQUFBO0FBQUEsSUFFSixPQUFPO0FBQUE7QUFBQSxJQUVQLGFBQWE7QUFBQTtBQUFBLElBRWIsZUFBZSxDQUFDLENBQUM7QUFBQTtBQUFBLElBRWpCLGtCQUFrQixPQUFPO0FBQUE7QUFBQSxJQUV6QixpQkFBaUI7QUFBQSxNQUNmLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxRQUNOLE1BQU0sRUFBRSxPQUFPLG9CQUFvQjtBQUFBLE1BQ3JDO0FBQUEsSUFDRixDQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFJRCxlQUFnQixXQUFXLEVBQUUsVUFBVSxjQUFjLFVBQVUsTUFBTSxZQUFZLE1BQU0sTUFBTSxLQUFLLENBQUM7QUFBQSxJQUNuRyxXQUFXO0FBQUEsTUFDVCxTQUFTO0FBQUE7QUFBQSxRQUVQO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxRQUFRLENBQUMsR0FBRztBQUFBLE1BQ1osV0FBVztBQUFBLFFBQ1Qsb0JBQW9CO0FBQUEsVUFDbEIsYUFBYTtBQUFBO0FBQUEsUUFDZixDQUFDO0FBQUE7QUFBQSxRQUVELGNBQWM7QUFBQSxVQUNaLFFBQVE7QUFBQSxRQUNWLENBQUM7QUFBQSxNQUNIO0FBQUEsTUFDQSxLQUFLLEtBQUssUUFBUSxTQUFTLG1CQUFtQjtBQUFBLElBQ2hELENBQUM7QUFBQSxJQUNELFdBQVc7QUFBQSxNQUNULFdBQVc7QUFBQTtBQUFBLFFBRVQsb0JBQW9CO0FBQUEsVUFDbEIsYUFBYTtBQUFBO0FBQUEsUUFDZixDQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUtIO0FBQUEsTUFDQSxNQUFNLENBQUMsZ0JBQWdCO0FBQUEsTUFDdkIsS0FBSyxLQUFLLFFBQVEsU0FBUyxpQkFBaUI7QUFBQSxJQUM5QyxDQUFDO0FBQUEsSUFDRCxNQUFNO0FBQUEsTUFDSixhQUFhO0FBQUEsSUFDZixDQUFDO0FBQUEsSUFDRCxxQkFBcUI7QUFBQSxNQUNuQixVQUFVLENBQUMsS0FBSyxRQUFRLFFBQVEsSUFBSSxHQUFHLGlCQUFpQixDQUFDO0FBQUEsTUFDekQsVUFBVTtBQUFBLElBQ1osQ0FBQztBQUFBLElBQ0QsWUFBWTtBQUFBLElBQ1osVUFBVTtBQUFBLElBQ1YsSUFBSTtBQUFBLE1BQ0YsU0FBUztBQUFBLFFBQ1A7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFNBQVMsQ0FBQyxnQkFBZ0IsUUFBUSxXQUFXLFVBQVUsT0FBTyxzQkFBc0IsMEJBQTBCO0FBQUEsTUFDOUcsUUFBUTtBQUFBLE1BQ1IsY0FBYztBQUFBLE1BQ2QsYUFBYTtBQUFBLElBQ2YsQ0FBQztBQUFBLEVBQ0g7QUFDRjtBQU1BLElBQU0sb0JBQW9CLENBQUMsWUFBb0Q7QUFDN0UsUUFBTSxFQUFFLHNCQUFzQixRQUFRLHVDQUF1QyxJQUFJO0FBQ2pGLFFBQU0sZUFBZSxvQkFBb0IsTUFBTSxHQUFHO0FBQ2xELFFBQU0sVUFBMEIsQ0FBQztBQUNqQyxNQUFJLGFBQWEsU0FBUyxNQUFNLEdBQUc7QUFDakMsWUFBUTtBQUFBLE1BQ04sZ0JBQWdCO0FBQUEsUUFDZCxLQUFLO0FBQUEsUUFDTCxXQUFXO0FBQUEsUUFDWCxrQkFBa0I7QUFBQSxNQUNwQixDQUFDO0FBQUEsSUFDSDtBQUFBLEVBQ0Y7QUFDQSxNQUFJLGFBQWEsU0FBUyxRQUFRLEdBQUc7QUFDbkMsWUFBUTtBQUFBLE1BQ04sZ0JBQWdCO0FBQUEsUUFDZCxLQUFLO0FBQUEsUUFDTCxXQUFXO0FBQUEsUUFDWCxrQkFBa0I7QUFBQSxNQUNwQixDQUFDO0FBQUEsSUFDSDtBQUFBLEVBQ0Y7QUFDQSxTQUFPO0FBQ1Q7OztBSG5JQSxTQUFTLGFBQWEsZ0JBQWdCO0FBTnRDLElBQU1DLG9DQUFtQztBQVF6QyxJQUFNQyxXQUFVQyxNQUFLLFFBQVFDLG1DQUFXLEtBQUs7QUFDN0MsSUFBTSxTQUFTRCxNQUFLLFFBQVFDLG1DQUFXLFlBQVk7QUFFbkQsU0FBUyxvQkFBb0IsU0FBaUI7QUFDNUMsUUFBTSxVQUFVLENBQUMsUUFBZ0JELE1BQUssS0FBS0MsbUNBQVcsTUFBTSxHQUFHO0FBQy9ELFFBQU0sVUFBVSxDQUFDLGVBQWUsVUFBVSxRQUFRO0FBQ2xELE1BQUksUUFBUSxZQUFZLFFBQVEsT0FBTyxDQUFDO0FBQ3hDLFFBQU0sbUJBQW1CLE1BQU0sT0FBTyxDQUFDLFNBQWMsU0FBYztBQUNqRSxVQUFNLE9BQVFELE1BQWE7QUFDM0IsVUFBTSxXQUFXLEtBQUssU0FBUyxJQUFJO0FBQ25DLFVBQU0sUUFBUSxTQUFTLFFBQVEsRUFBRSxZQUFZO0FBQzdDLFVBQU0sQ0FBQyxJQUFJLElBQUksS0FBSyxNQUFNLEdBQUc7QUFDN0IsUUFBSSxPQUFPO0FBQ1QsVUFBSSxPQUFPO0FBQ1gsVUFBSSxDQUFDLEtBQUssV0FBVyxHQUFHLEdBQUc7QUFDekIsZUFBTztBQUFBLE1BQ1QsV0FBVyxRQUFRLFNBQVMsSUFBSSxHQUFHO0FBQ2pDLGVBQU8sS0FBSyxRQUFRLEtBQUssRUFBRTtBQUFBLE1BQzdCO0FBQ0EsZUFBUyxRQUFRLElBQUksSUFBSSxRQUFRLEtBQUssVUFBVSxVQUFVLENBQUM7QUFBQSxJQUM3RCxXQUFXLFNBQVMsUUFBUTtBQUMxQixjQUFRLE9BQU8sSUFBSSxRQUFRLEdBQUcsUUFBUSxFQUFFO0FBQUEsSUFDMUM7QUFDQSxXQUFPO0FBQUEsRUFDVCxHQUFHLENBQUMsQ0FBQztBQUNMLFNBQU87QUFDVDtBQUVBLElBQU8sc0JBQVEsYUFBYSxDQUFDLEVBQUUsS0FBSyxNQUE2QjtBQUMvRCxRQUFNLE9BQU8sUUFBUSxJQUFJO0FBQ3pCLFFBQU0sTUFBTSxRQUFRLE1BQU0sSUFBSTtBQUM5QixRQUFNLFVBQVUsV0FBVyxHQUFHO0FBRTlCLFNBQU87QUFBQSxJQUNMLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxNQUNQLE9BQU87QUFBQSxRQUNMLEtBQUtEO0FBQUEsUUFDTCxRQUFRO0FBQUEsTUFDVjtBQUFBLElBQ0Y7QUFBQSxJQUNBLE9BQU87QUFBQSxNQUNMLFFBQVE7QUFBQSxNQUNSLGNBQWM7QUFBQSxNQUNkLGVBQWU7QUFBQSxRQUNiLFVBQVU7QUFBQSxVQUNSLGNBQWM7QUFBQSxVQUNkLGVBQWU7QUFBQSxRQUNqQjtBQUFBLE1BQ0Y7QUFBQSxNQUNBLEtBQUs7QUFBQSxRQUNILE9BQU8sb0JBQW9CLFlBQVk7QUFBQSxRQUN2QyxNQUFNO0FBQUEsUUFDTixVQUFVO0FBQUEsUUFDVixTQUFTLENBQUMsTUFBTSxLQUFLO0FBQUEsTUFDdkI7QUFBQSxNQUNBLGVBQWU7QUFBQSxRQUNiLFVBQVU7QUFBQSxVQUNSO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0EsUUFBUTtBQUFBLFVBQ04sU0FBUztBQUFBLFVBQ1QsU0FBUztBQUFBLFlBQ1AsS0FBSztBQUFBLFlBQ0wsY0FBYztBQUFBLFlBQ2QsT0FBTztBQUFBLFlBQ1AsU0FBUztBQUFBLFlBQ1QsZ0JBQWdCO0FBQUEsWUFDaEIsY0FBYztBQUFBLFlBQ2Qsc0JBQXNCO0FBQUEsWUFDdEIsOEJBQThCO0FBQUEsWUFDOUIsMkJBQTJCO0FBQUEsWUFDM0IsZ0JBQWdCO0FBQUEsWUFDaEIsWUFBWTtBQUFBLFlBQ1osUUFBUTtBQUFBLFlBQ1Isc0JBQXNCO0FBQUEsVUFDeEI7QUFBQSxVQUNBLGdCQUFnQjtBQUFBLFVBQ2hCLGlCQUFpQjtBQUFBLFFBQ25CO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNQLE1BQU0sQ0FBQyxlQUFlLFVBQVU7QUFBQSxNQUNoQyxXQUFXO0FBQUEsSUFDYjtBQUFBO0FBQUEsSUFFQSxjQUFjO0FBQUEsTUFDWixTQUFTLENBQUMsc0JBQXNCLGdCQUFnQix5QkFBeUI7QUFBQSxJQUMzRTtBQUFBO0FBQUEsSUFFQSxLQUFLO0FBQUEsTUFDSCxxQkFBcUI7QUFBQSxRQUNuQixNQUFNO0FBQUE7QUFBQTtBQUFBLFVBR0osZ0JBQWdCO0FBQUEsUUFDbEI7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBO0FBQUEsSUFFQSxTQUFTLENBQUMsa0JBQWtCLE9BQU8sQ0FBQztBQUFBLElBQ3BDLFFBQVE7QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE1BQU0sUUFBUTtBQUFBLE1BQ2QsTUFBTSxRQUFRO0FBQUEsTUFDZCxPQUFPLFlBQVksUUFBUSxVQUFVO0FBQUEsSUFDdkM7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFsicGF0aCIsICJwYXRoIiwgIl9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lIiwgInBhdGhTcmMiLCAicGF0aCIsICJfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSJdCn0K
