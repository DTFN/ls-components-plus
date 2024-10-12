// vite.config.ts
import { defineConfig, loadEnv } from "file:///D:/NpmPackages/ls-components-plus/node_modules/.pnpm/vite@5.4.2_@types+node@22.5.1_sass@1.77.8_terser@5.31.6/node_modules/vite/dist/node/index.js";
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
import simpleHtmlPlugin from "file:///D:/NpmPackages/ls-components-plus/node_modules/.pnpm/vite-plugin-simple-html@0.1.2_vite@5.4.2_@types+node@22.5.1_sass@1.77.8_terser@5.31.6_/node_modules/vite-plugin-simple-html/dist/index.js";
import vue from "file:///D:/NpmPackages/ls-components-plus/node_modules/.pnpm/@vitejs+plugin-vue@5.1.2_vite@5.4.2_@types+node@22.5.1_sass@1.77.8_terser@5.31.6__vue@3.4.38_typescript@5.5.4_/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///D:/NpmPackages/ls-components-plus/node_modules/.pnpm/@vitejs+plugin-vue-jsx@4.0.1_vite@5.4.2_@types+node@22.5.1_sass@1.77.8_terser@5.31.6__vue@3.4.38_typescript@5.5.4_/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import eslintPlugin from "file:///D:/NpmPackages/ls-components-plus/node_modules/.pnpm/vite-plugin-eslint@1.8.1_eslint@8.57.0_vite@5.4.2_@types+node@22.5.1_sass@1.77.8_terser@5.31.6_/node_modules/vite-plugin-eslint/dist/index.mjs";
import viteCompression from "file:///D:/NpmPackages/ls-components-plus/node_modules/.pnpm/vite-plugin-compression@0.5.1_vite@5.4.2_@types+node@22.5.1_sass@1.77.8_terser@5.31.6_/node_modules/vite-plugin-compression/dist/index.mjs";
import vueSetupExtend from "file:///D:/NpmPackages/ls-components-plus/node_modules/.pnpm/unplugin-vue-setup-extend-plus@1.0.1/node_modules/unplugin-vue-setup-extend-plus/dist/vite.js";
import Components from "file:///D:/NpmPackages/ls-components-plus/node_modules/.pnpm/unplugin-vue-components@0.27.4_@babel+parser@7.25.4_rollup@4.21.1_vue@3.4.38_typescript@5.5.4_/node_modules/unplugin-vue-components/dist/vite.js";
import { ElementPlusResolver } from "file:///D:/NpmPackages/ls-components-plus/node_modules/.pnpm/unplugin-vue-components@0.27.4_@babel+parser@7.25.4_rollup@4.21.1_vue@3.4.38_typescript@5.5.4_/node_modules/unplugin-vue-components/dist/resolvers.js";
import AutoImport from "file:///D:/NpmPackages/ls-components-plus/node_modules/.pnpm/unplugin-auto-import@0.18.2_@vueuse+core@10.11.1_vue@3.4.38_typescript@5.5.4___rollup@4.21.1/node_modules/unplugin-auto-import/dist/vite.js";
import IconsResolver from "file:///D:/NpmPackages/ls-components-plus/node_modules/.pnpm/unplugin-icons@0.19.2_@vue+compiler-sfc@3.4.38/node_modules/unplugin-icons/dist/resolver.js";
import Icons from "file:///D:/NpmPackages/ls-components-plus/node_modules/.pnpm/unplugin-icons@0.19.2_@vue+compiler-sfc@3.4.38/node_modules/unplugin-icons/dist/vite.js";
import { createSvgIconsPlugin } from "file:///D:/NpmPackages/ls-components-plus/node_modules/.pnpm/vite-plugin-svg-icons@2.0.1_vite@5.4.2_@types+node@22.5.1_sass@1.77.8_terser@5.31.6_/node_modules/vite-plugin-svg-icons/dist/index.mjs";
import FilesLoader from "file:///D:/NpmPackages/ls-components-plus/node_modules/.pnpm/vite-plugin-files-loader@1.1.1_vite@5.4.2_@types+node@22.5.1_sass@1.77.8_terser@5.31.6_/node_modules/vite-plugin-files-loader/dist/index.mjs";
import svgLoader from "file:///D:/NpmPackages/ls-components-plus/node_modules/.pnpm/vite-svg-loader@5.1.0_vue@3.4.38_typescript@5.5.4_/node_modules/vite-svg-loader/index.js";
import path from "path";
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
        }),
        // 自动注册图标组件
        IconsResolver({
          enabledCollections: ["ep"]
        })
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
    svgLoader()
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
var __vite_injected_original_dirname2 = "D:\\NpmPackages\\ls-components-plus\\packages\\ls-components";
var pathSrc2 = path2.resolve(__vite_injected_original_dirname2, "src");
var cpoSrc = path2.resolve(__vite_injected_original_dirname2, "components");
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
      lib: {
        entry: path2.resolve(__vite_injected_original_dirname2, "./components/main.ts"),
        name: "index",
        fileName: "index"
      },
      rollupOptions: {
        external: ["vue", "vue-router"],
        output: {
          globals: {
            vue: "Vue",
            "vue-router": "VueRouter"
          },
          assetFileNames: "lsWebPlus.css"
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAiYnVpbGQvZ2V0RW52LnRzIiwgImJ1aWxkL3Byb3h5LnRzIiwgImJ1aWxkL3BsdWdpbnMudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxOcG1QYWNrYWdlc1xcXFxscy1jb21wb25lbnRzLXBsdXNcXFxccGFja2FnZXNcXFxcbHMtY29tcG9uZW50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcTnBtUGFja2FnZXNcXFxcbHMtY29tcG9uZW50cy1wbHVzXFxcXHBhY2thZ2VzXFxcXGxzLWNvbXBvbmVudHNcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L05wbVBhY2thZ2VzL2xzLWNvbXBvbmVudHMtcGx1cy9wYWNrYWdlcy9scy1jb21wb25lbnRzL3ZpdGUuY29uZmlnLnRzXCI7Ly8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmltcG9ydCB7IGRlZmluZUNvbmZpZywgbG9hZEVudiwgQ29uZmlnRW52LCBVc2VyQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCB7IHdyYXBwZXJFbnYgfSBmcm9tICcuL2J1aWxkL2dldEVudic7XG5pbXBvcnQgeyBjcmVhdGVQcm94eSB9IGZyb20gJy4vYnVpbGQvcHJveHknO1xuaW1wb3J0IHsgY3JlYXRlVml0ZVBsdWdpbnMgfSBmcm9tICcuL2J1aWxkL3BsdWdpbnMnO1xuXG5jb25zdCBwYXRoU3JjID0gcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3NyYycpO1xuY29uc3QgY3BvU3JjID0gcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ2NvbXBvbmVudHMnKTtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKCh7IG1vZGUgfTogQ29uZmlnRW52KTogVXNlckNvbmZpZyA9PiB7XG4gIGNvbnN0IHJvb3QgPSBwcm9jZXNzLmN3ZCgpO1xuICBjb25zdCBlbnYgPSBsb2FkRW52KG1vZGUsIHJvb3QpO1xuICBjb25zdCB2aXRlRW52ID0gd3JhcHBlckVudihlbnYpO1xuXG4gIHJldHVybiB7XG4gICAgYmFzZTogJy8nLFxuICAgIHJlc29sdmU6IHtcbiAgICAgIGFsaWFzOiB7XG4gICAgICAgICdAJzogcGF0aFNyYyxcbiAgICAgICAgJ0BjcG8nOiBjcG9TcmNcbiAgICAgIH1cbiAgICB9LFxuICAgIGJ1aWxkOiB7XG4gICAgICBvdXREaXI6ICdsaWInLFxuICAgICAgbGliOiB7XG4gICAgICAgIGVudHJ5OiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9jb21wb25lbnRzL21haW4udHMnKSxcbiAgICAgICAgbmFtZTogJ2luZGV4JyxcbiAgICAgICAgZmlsZU5hbWU6ICdpbmRleCdcbiAgICAgIH0sXG4gICAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICAgIGV4dGVybmFsOiBbJ3Z1ZScsICd2dWUtcm91dGVyJ10sXG4gICAgICAgIG91dHB1dDoge1xuICAgICAgICAgIGdsb2JhbHM6IHtcbiAgICAgICAgICAgIHZ1ZTogJ1Z1ZScsXG4gICAgICAgICAgICAndnVlLXJvdXRlcic6ICdWdWVSb3V0ZXInXG4gICAgICAgICAgfSxcbiAgICAgICAgICBhc3NldEZpbGVOYW1lczogJ2xzV2ViUGx1cy5jc3MnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGVzYnVpbGQ6IHtcbiAgICAgIHB1cmU6IFsnY29uc29sZS5sb2cnLCAnZGVidWdnZXInXSxcbiAgICAgIGtlZXBOYW1lczogdHJ1ZVxuICAgIH0sXG4gICAgLy8gXHU0RjlEXHU4RDU2XHU5ODg0XHU1MkEwXHU4RjdEXG4gICAgb3B0aW1pemVEZXBzOiB7XG4gICAgICBpbmNsdWRlOiBbJ2VsZW1lbnQtcGx1cy9lcy8qKicsICdAdnVldXNlL2NvcmUnLCAnQGVsZW1lbnQtcGx1cy9pY29ucy12dWUnXVxuICAgIH0sXG4gICAgLy8gc2NzcyBcdTUxNjhcdTVDNDBcdTUzRDhcdTkxQ0ZcbiAgICBjc3M6IHtcbiAgICAgIHByZXByb2Nlc3Nvck9wdGlvbnM6IHtcbiAgICAgICAgc2Nzczoge1xuICAgICAgICAgIC8vIEB1c2UgXCJzcmMvc3R5bGUvZWxlbWVudC9pbmRleC5zY3NzXCIgYXMgKjsgXHU4MUVBXHU1QjlBXHU0RTQ5XHU0RTNCXHU5ODk4XHU5ODlDXHU4MjcyXG4gICAgICAgICAgLy8gYWRkaXRpb25hbERhdGE6IGBAdXNlIFwic3JjL3N0eWxlL3Zhci5zY3NzXCIgYXMgKjtgLFxuICAgICAgICAgIGFkZGl0aW9uYWxEYXRhOiBgQHVzZSBcIkBjcG8vX3N0eWxlL2NvbW1vbi92YXJpYWJsZS5zY3NzXCIgYXMgKjsgQHVzZSBcIkBjcG8vX3N0eWxlL2NvbW1vbi91dGlscy5zY3NzXCIgYXMgKjsgQHVzZSBcIkBjcG8vX3N0eWxlL2VsZW1lbnQvaW5kZXguc2Nzc1wiIGFzICo7YFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICAvLyBcdTYzRDJcdTRFRjZcbiAgICBwbHVnaW5zOiBbY3JlYXRlVml0ZVBsdWdpbnModml0ZUVudildLFxuICAgIHNlcnZlcjoge1xuICAgICAgaG9zdDogJzAuMC4wLjAnLFxuICAgICAgcG9ydDogdml0ZUVudi5WSVRFX1BPUlQsXG4gICAgICBvcGVuOiB2aXRlRW52LlZJVEVfT1BFTixcbiAgICAgIHByb3h5OiBjcmVhdGVQcm94eSh2aXRlRW52LlZJVEVfUFJPWFkpXG4gICAgfVxuICB9O1xufSk7XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXE5wbVBhY2thZ2VzXFxcXGxzLWNvbXBvbmVudHMtcGx1c1xcXFxwYWNrYWdlc1xcXFxscy1jb21wb25lbnRzXFxcXGJ1aWxkXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxOcG1QYWNrYWdlc1xcXFxscy1jb21wb25lbnRzLXBsdXNcXFxccGFja2FnZXNcXFxcbHMtY29tcG9uZW50c1xcXFxidWlsZFxcXFxnZXRFbnYudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L05wbVBhY2thZ2VzL2xzLWNvbXBvbmVudHMtcGx1cy9wYWNrYWdlcy9scy1jb21wb25lbnRzL2J1aWxkL2dldEVudi50c1wiO2ltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEZXZGbihtb2RlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIG1vZGUgPT09ICdkZXYnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNQcmVGbihtb2RlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIG1vZGUgPT09ICdwcmUnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNQcm9kRm4obW9kZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBtb2RlID09PSAncHJvZCc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Rlc3RGbihtb2RlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIG1vZGUgPT09ICd0ZXN0Jztcbn1cblxuLyoqXG4gKiBXaGV0aGVyIHRvIGdlbmVyYXRlIHBhY2thZ2UgcHJldmlld1xuICovXG5leHBvcnQgZnVuY3Rpb24gaXNSZXBvcnRNb2RlKCk6IGJvb2xlYW4ge1xuICByZXR1cm4gcHJvY2Vzcy5lbnYuVklURV9SRVBPUlQgPT09ICd0cnVlJztcbn1cblxuLy8gUmVhZCBhbGwgZW52aXJvbm1lbnQgdmFyaWFibGUgY29uZmlndXJhdGlvbiBmaWxlcyB0byBwcm9jZXNzLmVudlxuZXhwb3J0IGZ1bmN0aW9uIHdyYXBwZXJFbnYoZW52Q29uZjogUmVjb3JkYWJsZSk6IFZpdGVFbnYge1xuICBjb25zdCByZXQ6IGFueSA9IHt9O1xuXG4gIGZvciAoY29uc3QgZW52TmFtZSBvZiBPYmplY3Qua2V5cyhlbnZDb25mKSkge1xuICAgIGxldCByZWFsTmFtZSA9IGVudkNvbmZbZW52TmFtZV0ucmVwbGFjZSgvXFxcXG4vZywgJ1xcbicpO1xuICAgIHJlYWxOYW1lID0gcmVhbE5hbWUgPT09ICd0cnVlJyA/IHRydWUgOiByZWFsTmFtZSA9PT0gJ2ZhbHNlJyA/IGZhbHNlIDogcmVhbE5hbWU7XG4gICAgaWYgKGVudk5hbWUgPT09ICdWSVRFX1BPUlQnKSByZWFsTmFtZSA9IE51bWJlcihyZWFsTmFtZSk7XG4gICAgaWYgKGVudk5hbWUgPT09ICdWSVRFX1BST1hZJykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmVhbE5hbWUgPSBKU09OLnBhcnNlKHJlYWxOYW1lKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7fVxuICAgIH1cbiAgICByZXRbZW52TmFtZV0gPSByZWFsTmFtZTtcbiAgfVxuICByZXR1cm4gcmV0O1xufVxuXG4vKipcbiAqIEdldCB1c2VyIHJvb3QgZGlyZWN0b3J5XG4gKiBAcGFyYW0gZGlyIGZpbGUgcGF0aFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um9vdFBhdGgoLi4uZGlyOiBzdHJpbmdbXSkge1xuICByZXR1cm4gcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksIC4uLmRpcik7XG59XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXE5wbVBhY2thZ2VzXFxcXGxzLWNvbXBvbmVudHMtcGx1c1xcXFxwYWNrYWdlc1xcXFxscy1jb21wb25lbnRzXFxcXGJ1aWxkXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxOcG1QYWNrYWdlc1xcXFxscy1jb21wb25lbnRzLXBsdXNcXFxccGFja2FnZXNcXFxcbHMtY29tcG9uZW50c1xcXFxidWlsZFxcXFxwcm94eS50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovTnBtUGFja2FnZXMvbHMtY29tcG9uZW50cy1wbHVzL3BhY2thZ2VzL2xzLWNvbXBvbmVudHMvYnVpbGQvcHJveHkudHNcIjtpbXBvcnQgdHlwZSB7IFByb3h5T3B0aW9ucyB9IGZyb20gJ3ZpdGUnO1xuXG50eXBlIFByb3h5SXRlbSA9IFtzdHJpbmcsIHN0cmluZ107XG5cbnR5cGUgUHJveHlMaXN0ID0gUHJveHlJdGVtW107XG5cbnR5cGUgUHJveHlUYXJnZXRMaXN0ID0gUmVjb3JkPHN0cmluZywgUHJveHlPcHRpb25zPjtcblxuLyoqXG4gKiBcdTUyMUJcdTVFRkFcdTRFRTNcdTc0MDZcdUZGMENcdTc1MjhcdTRFOEVcdTg5RTNcdTY3OTAgLmVudi5kZXZlbG9wbWVudCBcdTRFRTNcdTc0MDZcdTkxNERcdTdGNkVcbiAqIEBwYXJhbSBsaXN0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcm94eShsaXN0OiBQcm94eUxpc3QgPSBbXSkge1xuICBjb25zdCByZXQ6IFByb3h5VGFyZ2V0TGlzdCA9IHt9O1xuICBmb3IgKGNvbnN0IFtwcmVmaXgsIHRhcmdldF0gb2YgbGlzdCkge1xuICAgIGNvbnN0IGh0dHBzUkUgPSAvXmh0dHBzOlxcL1xcLy87XG4gICAgY29uc3QgaXNIdHRwcyA9IGh0dHBzUkUudGVzdCh0YXJnZXQpO1xuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2h0dHAtcGFydHkvbm9kZS1odHRwLXByb3h5I29wdGlvbnNcbiAgICByZXRbcHJlZml4XSA9IHtcbiAgICAgIHRhcmdldDogdGFyZ2V0LFxuICAgICAgY2hhbmdlT3JpZ2luOiB0cnVlLFxuICAgICAgd3M6IHRydWUsXG4gICAgICByZXdyaXRlOiBwYXRoID0+IHBhdGgucmVwbGFjZShuZXcgUmVnRXhwKGBeJHtwcmVmaXh9YCksICcnKSxcbiAgICAgIC8vIGh0dHBzIGlzIHJlcXVpcmUgc2VjdXJlPWZhbHNlXG4gICAgICAuLi4oaXNIdHRwcyA/IHsgc2VjdXJlOiBmYWxzZSB9IDoge30pXG4gICAgfTtcbiAgfVxuICByZXR1cm4gcmV0O1xufVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxOcG1QYWNrYWdlc1xcXFxscy1jb21wb25lbnRzLXBsdXNcXFxccGFja2FnZXNcXFxcbHMtY29tcG9uZW50c1xcXFxidWlsZFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcTnBtUGFja2FnZXNcXFxcbHMtY29tcG9uZW50cy1wbHVzXFxcXHBhY2thZ2VzXFxcXGxzLWNvbXBvbmVudHNcXFxcYnVpbGRcXFxccGx1Z2lucy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovTnBtUGFja2FnZXMvbHMtY29tcG9uZW50cy1wbHVzL3BhY2thZ2VzL2xzLWNvbXBvbmVudHMvYnVpbGQvcGx1Z2lucy50c1wiOy8vIGltcG9ydCB7IHJlc29sdmUgfSBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IHsgUGx1Z2luT3B0aW9uIH0gZnJvbSAndml0ZSc7XG4vLyBpbXBvcnQgeyBWaXRlUFdBIH0gZnJvbSBcInZpdGUtcGx1Z2luLXB3YVwiO1xuaW1wb3J0IHsgdmlzdWFsaXplciB9IGZyb20gJ3JvbGx1cC1wbHVnaW4tdmlzdWFsaXplcic7XG5pbXBvcnQgc2ltcGxlSHRtbFBsdWdpbiBmcm9tICd2aXRlLXBsdWdpbi1zaW1wbGUtaHRtbCc7XG4vLyBpbXBvcnQgeyBjcmVhdGVTdmdJY29uc1BsdWdpbiB9IGZyb20gXCJ2aXRlLXBsdWdpbi1zdmctaWNvbnNcIjtcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJztcbmltcG9ydCB2dWVKc3ggZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlLWpzeCc7XG5pbXBvcnQgZXNsaW50UGx1Z2luIGZyb20gJ3ZpdGUtcGx1Z2luLWVzbGludCc7XG5pbXBvcnQgdml0ZUNvbXByZXNzaW9uIGZyb20gJ3ZpdGUtcGx1Z2luLWNvbXByZXNzaW9uJztcbmltcG9ydCB2dWVTZXR1cEV4dGVuZCBmcm9tICd1bnBsdWdpbi12dWUtc2V0dXAtZXh0ZW5kLXBsdXMvdml0ZSc7XG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlJztcbmltcG9ydCB7IEVsZW1lbnRQbHVzUmVzb2x2ZXIgfSBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy9yZXNvbHZlcnMnO1xuaW1wb3J0IEF1dG9JbXBvcnQgZnJvbSAndW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZSc7XG5pbXBvcnQgSWNvbnNSZXNvbHZlciBmcm9tICd1bnBsdWdpbi1pY29ucy9yZXNvbHZlcic7XG5pbXBvcnQgSWNvbnMgZnJvbSAndW5wbHVnaW4taWNvbnMvdml0ZSc7XG5pbXBvcnQgeyBjcmVhdGVTdmdJY29uc1BsdWdpbiB9IGZyb20gJ3ZpdGUtcGx1Z2luLXN2Zy1pY29ucyc7XG5pbXBvcnQgRmlsZXNMb2FkZXIgZnJvbSAndml0ZS1wbHVnaW4tZmlsZXMtbG9hZGVyJztcbmltcG9ydCBzdmdMb2FkZXIgZnJvbSAndml0ZS1zdmctbG9hZGVyJztcblxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5jb25zdCBwYXRoU3JjID0gcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4uLy4uL2xzLWNvbXBvbmVudHMnKTtcblxuLyoqXG4gKiBcdTUyMUJcdTVFRkEgdml0ZSBcdTYzRDJcdTRFRjZcbiAqIEBwYXJhbSB2aXRlRW52XG4gKi9cbmV4cG9ydCBjb25zdCBjcmVhdGVWaXRlUGx1Z2lucyA9ICh2aXRlRW52OiBWaXRlRW52KTogKFBsdWdpbk9wdGlvbiB8IFBsdWdpbk9wdGlvbltdKVtdID0+IHtcbiAgY29uc3QgeyBWSVRFX0dMT0JfQVBQX1RJVExFLCBWSVRFX1JFUE9SVCB9ID0gdml0ZUVudjtcbiAgcmV0dXJuIFtcbiAgICB2dWUoKSxcbiAgICAvLyB2dWUgXHU1M0VGXHU0RUU1XHU0RjdGXHU3NTI4IGpzeC90c3ggXHU4QkVEXHU2Q0Q1XG4gICAgdnVlSnN4KCksXG4gICAgLy8gZXNMaW50IFx1NjJBNVx1OTUxOVx1NEZFMVx1NjA2Rlx1NjYzRVx1NzkzQVx1NTcyOFx1NkQ0Rlx1ODlDOFx1NTY2OFx1NzU0Q1x1OTc2Mlx1NEUwQVxuICAgIGVzbGludFBsdWdpbigpLFxuICAgIC8vIG5hbWUgXHU1M0VGXHU0RUU1XHU1MTk5XHU1NzI4IHNjcmlwdCBcdTY4MDdcdTdCN0VcdTRFMEFcbiAgICB2dWVTZXR1cEV4dGVuZCh7fSksXG4gICAgLy8gXHU1MjFCXHU1RUZBXHU2MjUzXHU1MzA1XHU1MzhCXHU3RjI5XHU5MTREXHU3RjZFXG4gICAgY3JlYXRlQ29tcHJlc3Npb24odml0ZUVudiksXG4gICAgLy8gXHU2Q0U4XHU1MTY1XHU1M0Q4XHU5MUNGXHU1MjMwIGh0bWwgXHU2NTg3XHU0RUY2XG4gICAgc2ltcGxlSHRtbFBsdWdpbih7XG4gICAgICBtaW5pZnk6IHRydWUsXG4gICAgICBpbmplY3Q6IHtcbiAgICAgICAgZGF0YTogeyB0aXRsZTogVklURV9HTE9CX0FQUF9USVRMRSB9XG4gICAgICB9XG4gICAgfSksXG4gICAgLy8gdml0ZVBXQVxuICAgIC8vIFZJVEVfUFdBICYmIGNyZWF0ZVZpdGVQd2Eodml0ZUVudiksXG4gICAgLy8gXHU2NjJGXHU1NDI2XHU3NTFGXHU2MjEwXHU1MzA1XHU5ODg0XHU4OUM4XHVGRjBDXHU1MjA2XHU2NzkwXHU0RjlEXHU4RDU2XHU1MzA1XHU1OTI3XHU1QzBGXHU1MDVBXHU0RjE4XHU1MzE2XHU1OTA0XHU3NDA2XG4gICAgVklURV9SRVBPUlQgJiYgKHZpc3VhbGl6ZXIoeyBmaWxlbmFtZTogJ3N0YXRzLmh0bWwnLCBnemlwU2l6ZTogdHJ1ZSwgYnJvdGxpU2l6ZTogdHJ1ZSwgb3BlbjogdHJ1ZSB9KSBhcyBQbHVnaW5PcHRpb24pLFxuICAgIEF1dG9JbXBvcnQoe1xuICAgICAgaW1wb3J0czogW1xuICAgICAgICAvLyBcdTk3MDBcdTg5ODFcdTgxRUFcdTUyQThcdTVCRkNcdTUxNjVcdTc2ODRcdTYzRDJcdTRFRjZcdUZGMENcdTgxRUFcdTVCOUFcdTRFNDlcdTVCRkNcdTUxNjVcdTc2ODRBUElcbiAgICAgICAgJ3Z1ZScsXG4gICAgICAgICd2dWUtcm91dGVyJyxcbiAgICAgICAgJ3BpbmlhJ1xuICAgICAgXSxcbiAgICAgIHJlc29sdmVyczogW1xuICAgICAgICBFbGVtZW50UGx1c1Jlc29sdmVyKHtcbiAgICAgICAgICBpbXBvcnRTdHlsZTogJ3Nhc3MnIC8vIFx1ODFFQVx1NUI5QVx1NEU0OVx1NEUzQlx1OTg5OFx1OTg5Q1x1ODI3MlxuICAgICAgICB9KSxcbiAgICAgICAgLy8gXHU4MUVBXHU1MkE4XHU1QkZDXHU1MTY1XHU1NkZFXHU2ODA3XHU3RUM0XHU0RUY2XG4gICAgICAgIEljb25zUmVzb2x2ZXIoe1xuICAgICAgICAgIHByZWZpeDogJ0ljb24nXG4gICAgICAgIH0pXG4gICAgICBdLFxuICAgICAgZHRzOiBwYXRoLnJlc29sdmUocGF0aFNyYywgJ2F1dG8taW1wb3J0cy5kLnRzJylcbiAgICB9KSxcbiAgICBDb21wb25lbnRzKHtcbiAgICAgIHJlc29sdmVyczogW1xuICAgICAgICAvLyBcdTgxRUFcdTUyQThcdTVCRkNcdTUxNjUgRWxlbWVudCBQbHVzIFx1N0VDNFx1NEVGNiAoXHU5MUM3XHU3NTI4c2Nzc1x1NjgzN1x1NUYwRlx1OTE0RFx1ODI3Mlx1N0NGQlx1N0VERilcbiAgICAgICAgRWxlbWVudFBsdXNSZXNvbHZlcih7XG4gICAgICAgICAgaW1wb3J0U3R5bGU6ICdzYXNzJyAvLyBcdTgxRUFcdTVCOUFcdTRFNDlcdTRFM0JcdTk4OThcdTk4OUNcdTgyNzJcbiAgICAgICAgfSksXG4gICAgICAgIC8vIFx1ODFFQVx1NTJBOFx1NkNFOFx1NTE4Q1x1NTZGRVx1NjgwN1x1N0VDNFx1NEVGNlxuICAgICAgICBJY29uc1Jlc29sdmVyKHtcbiAgICAgICAgICBlbmFibGVkQ29sbGVjdGlvbnM6IFsnZXAnXVxuICAgICAgICB9KVxuICAgICAgXSxcbiAgICAgIGRpcnM6IFsnc3JjL2NvbXBvbmVudHMnXSxcbiAgICAgIGR0czogcGF0aC5yZXNvbHZlKHBhdGhTcmMsICdjb21wb25lbnRzLmQudHMnKVxuICAgIH0pLFxuICAgIEljb25zKHtcbiAgICAgIGF1dG9JbnN0YWxsOiB0cnVlXG4gICAgfSksXG4gICAgY3JlYXRlU3ZnSWNvbnNQbHVnaW4oe1xuICAgICAgaWNvbkRpcnM6IFtwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwgJ3NyYy9hc3NldHMvc3ZncycpXSxcbiAgICAgIHN5bWJvbElkOiAnaWNvbi1bZGlyXS1bbmFtZV0nXG4gICAgfSksXG4gICAgRmlsZXNMb2FkZXIoKSxcbiAgICBzdmdMb2FkZXIoKVxuICBdO1xufTtcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gXHU2ODM5XHU2MzZFIGNvbXByZXNzIFx1OTE0RFx1N0Y2RVx1RkYwQ1x1NzUxRlx1NjIxMFx1NEUwRFx1NTQwQ1x1NzY4NFx1NTM4Qlx1N0YyOVx1ODlDNFx1NTIxOVxuICogQHBhcmFtIHZpdGVFbnZcbiAqL1xuY29uc3QgY3JlYXRlQ29tcHJlc3Npb24gPSAodml0ZUVudjogVml0ZUVudik6IFBsdWdpbk9wdGlvbiB8IFBsdWdpbk9wdGlvbltdID0+IHtcbiAgY29uc3QgeyBWSVRFX0JVSUxEX0NPTVBSRVNTID0gJ25vbmUnLCBWSVRFX0JVSUxEX0NPTVBSRVNTX0RFTEVURV9PUklHSU5fRklMRSB9ID0gdml0ZUVudjtcbiAgY29uc3QgY29tcHJlc3NMaXN0ID0gVklURV9CVUlMRF9DT01QUkVTUy5zcGxpdCgnLCcpO1xuICBjb25zdCBwbHVnaW5zOiBQbHVnaW5PcHRpb25bXSA9IFtdO1xuICBpZiAoY29tcHJlc3NMaXN0LmluY2x1ZGVzKCdnemlwJykpIHtcbiAgICBwbHVnaW5zLnB1c2goXG4gICAgICB2aXRlQ29tcHJlc3Npb24oe1xuICAgICAgICBleHQ6ICcuZ3onLFxuICAgICAgICBhbGdvcml0aG06ICdnemlwJyxcbiAgICAgICAgZGVsZXRlT3JpZ2luRmlsZTogVklURV9CVUlMRF9DT01QUkVTU19ERUxFVEVfT1JJR0lOX0ZJTEVcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuICBpZiAoY29tcHJlc3NMaXN0LmluY2x1ZGVzKCdicm90bGknKSkge1xuICAgIHBsdWdpbnMucHVzaChcbiAgICAgIHZpdGVDb21wcmVzc2lvbih7XG4gICAgICAgIGV4dDogJy5icicsXG4gICAgICAgIGFsZ29yaXRobTogJ2Jyb3RsaUNvbXByZXNzJyxcbiAgICAgICAgZGVsZXRlT3JpZ2luRmlsZTogVklURV9CVUlMRF9DT01QUkVTU19ERUxFVEVfT1JJR0lOX0ZJTEVcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuICByZXR1cm4gcGx1Z2lucztcbn07XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIFZpdGVQd2FcbiAqIEBwYXJhbSB2aXRlRW52XG4gKi9cbi8vIGNvbnN0IGNyZWF0ZVZpdGVQd2EgPSAodml0ZUVudjogVml0ZUVudik6IFBsdWdpbk9wdGlvbiB8IFBsdWdpbk9wdGlvbltdID0+IHtcbi8vICAgY29uc3QgeyBWSVRFX0dMT0JfQVBQX1RJVExFIH0gPSB2aXRlRW52O1xuLy8gICByZXR1cm4gVml0ZVBXQSh7XG4vLyAgICAgcmVnaXN0ZXJUeXBlOiBcImF1dG9VcGRhdGVcIixcbi8vICAgICBtYW5pZmVzdDoge1xuLy8gICAgICAgbmFtZTogVklURV9HTE9CX0FQUF9USVRMRSxcbi8vICAgICAgIHNob3J0X25hbWU6IFZJVEVfR0xPQl9BUFBfVElUTEUsXG4vLyAgICAgICB0aGVtZV9jb2xvcjogXCIjZmZmZmZmXCIsXG4vLyAgICAgICBpY29uczogW1xuLy8gICAgICAgICB7XG4vLyAgICAgICAgICAgc3JjOiBcIi9sb2dvLnBuZ1wiLFxuLy8gICAgICAgICAgIHNpemVzOiBcIjE5MngxOTJcIixcbi8vICAgICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiXG4vLyAgICAgICAgIH0sXG4vLyAgICAgICAgIHtcbi8vICAgICAgICAgICBzcmM6IFwiL2xvZ28ucG5nXCIsXG4vLyAgICAgICAgICAgc2l6ZXM6IFwiNTEyeDUxMlwiLFxuLy8gICAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCJcbi8vICAgICAgICAgfSxcbi8vICAgICAgICAge1xuLy8gICAgICAgICAgIHNyYzogXCIvbG9nby5wbmdcIixcbi8vICAgICAgICAgICBzaXplczogXCI1MTJ4NTEyXCIsXG4vLyAgICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcbi8vICAgICAgICAgICBwdXJwb3NlOiBcImFueSBtYXNrYWJsZVwiXG4vLyAgICAgICAgIH1cbi8vICAgICAgIF1cbi8vICAgICB9XG4vLyAgIH0pO1xuLy8gfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFDQSxTQUFTLGNBQWMsZUFBc0M7QUFDN0QsT0FBT0EsV0FBVTs7O0FDd0JWLFNBQVMsV0FBVyxTQUE4QjtBQUN2RCxRQUFNLE1BQVcsQ0FBQztBQUVsQixhQUFXLFdBQVcsT0FBTyxLQUFLLE9BQU8sR0FBRztBQUMxQyxRQUFJLFdBQVcsUUFBUSxPQUFPLEVBQUUsUUFBUSxRQUFRLElBQUk7QUFDcEQsZUFBVyxhQUFhLFNBQVMsT0FBTyxhQUFhLFVBQVUsUUFBUTtBQUN2RSxRQUFJLFlBQVksWUFBYSxZQUFXLE9BQU8sUUFBUTtBQUN2RCxRQUFJLFlBQVksY0FBYztBQUM1QixVQUFJO0FBQ0YsbUJBQVcsS0FBSyxNQUFNLFFBQVE7QUFBQSxNQUNoQyxTQUFTLE9BQU87QUFBQSxNQUFDO0FBQUEsSUFDbkI7QUFDQSxRQUFJLE9BQU8sSUFBSTtBQUFBLEVBQ2pCO0FBQ0EsU0FBTztBQUNUOzs7QUM3Qk8sU0FBUyxZQUFZLE9BQWtCLENBQUMsR0FBRztBQUNoRCxRQUFNLE1BQXVCLENBQUM7QUFDOUIsYUFBVyxDQUFDLFFBQVEsTUFBTSxLQUFLLE1BQU07QUFDbkMsVUFBTSxVQUFVO0FBQ2hCLFVBQU0sVUFBVSxRQUFRLEtBQUssTUFBTTtBQUduQyxRQUFJLE1BQU0sSUFBSTtBQUFBLE1BQ1o7QUFBQSxN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LFdBQVc7QUFBQSxJQUNiO0FBQUE7QUFBQSxJQUVBLGNBQWM7QUFBQSxNQUNaLFNBQVMsQ0FBQyxzQkFBc0IsZ0JBQWdCLHlCQUF5QjtBQUFBLElBQzNFO0FBQUE7QUFBQSxJQUVBLEtBQUs7QUFBQSxNQUNILHFCQUFxQjtBQUFBLFFBQ25CLE1BQU07QUFBQTtBQUFBO0FBQUEsVUFHSixnQkFBZ0I7QUFBQSxRQUNsQjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUE7QUFBQSxJQUVBLFNBQVMsQ0FBQyxrQkFBa0IsT0FBTyxDQUFDO0FBQUEsSUFDcEMsUUFBUTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sTUFBTSxRQUFRO0FBQUEsTUFDZCxNQUFNLFFBQVE7QUFBQSxNQUNkLE9BQU8sWUFBWSxRQUFRLFVBQVU7QUFBQSxJQUN2QztBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogWyJwYXRoIiwgInBhdGgiLCAiX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUiLCAicGF0aFNyYyIsICJwYXRoIiwgIl9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lIl0KfQo=
