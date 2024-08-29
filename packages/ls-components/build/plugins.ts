// import { resolve } from "path";
import { PluginOption } from 'vite';
// import { VitePWA } from "vite-plugin-pwa";
import { visualizer } from 'rollup-plugin-visualizer';
import simpleHtmlPlugin from 'vite-plugin-simple-html';
// import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import eslintPlugin from 'vite-plugin-eslint';
import viteCompression from 'vite-plugin-compression';
import vueSetupExtend from 'unplugin-vue-setup-extend-plus/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import AutoImport from 'unplugin-auto-import/vite';
import IconsResolver from 'unplugin-icons/resolver';
import Icons from 'unplugin-icons/vite';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

import path from 'path';
const pathSrc = path.resolve(__dirname, '../../ls-components');

/**
 * 创建 vite 插件
 * @param viteEnv
 */
export const createVitePlugins = (viteEnv: ViteEnv): (PluginOption | PluginOption[])[] => {
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
    // 使用 svg 图标
    // createSvgIconsPlugin({
    //   iconDirs: [resolve(process.cwd(), "src/assets/icons")],
    //   symbolId: "icon-[dir]-[name]"
    // }),
    // vitePWA
    // VITE_PWA && createVitePwa(viteEnv),
    // 是否生成包预览，分析依赖包大小做优化处理
    VITE_REPORT && (visualizer({ filename: 'stats.html', gzipSize: true, brotliSize: true, open: true }) as PluginOption),
    AutoImport({
      imports: [
        // 需要自动导入的插件，自定义导入的API
        'vue',
        'vue-router',
        'pinia'
      ],
      resolvers: [
        ElementPlusResolver({
          importStyle: 'sass' // 自定义主题颜色
        }),
        // 自动导入图标组件
        IconsResolver({
          prefix: 'Icon'
        })
      ],
      dts: path.resolve(pathSrc, 'auto-imports.d.ts')
    }),
    Components({
      resolvers: [
        // 自动导入 Element Plus 组件 (采用scss样式配色系统)
        ElementPlusResolver({
          importStyle: 'sass' // 自定义主题颜色
        }),
        // 自动注册图标组件
        IconsResolver({
          enabledCollections: ['ep']
        })
      ],
      dirs: ['src/components'],
      dts: path.resolve(pathSrc, 'components.d.ts')
    }),
    Icons({
      autoInstall: true
    }),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/assets/svgs')],
      symbolId: 'icon-[dir]-[name]'
    })
  ];
};

/**
 * @description 根据 compress 配置，生成不同的压缩规则
 * @param viteEnv
 */
const createCompression = (viteEnv: ViteEnv): PluginOption | PluginOption[] => {
  const { VITE_BUILD_COMPRESS = 'none', VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE } = viteEnv;
  const compressList = VITE_BUILD_COMPRESS.split(',');
  const plugins: PluginOption[] = [];
  if (compressList.includes('gzip')) {
    plugins.push(
      viteCompression({
        ext: '.gz',
        algorithm: 'gzip',
        deleteOriginFile: VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE
      })
    );
  }
  if (compressList.includes('brotli')) {
    plugins.push(
      viteCompression({
        ext: '.br',
        algorithm: 'brotliCompress',
        deleteOriginFile: VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE
      })
    );
  }
  return plugins;
};

/**
 * @description VitePwa
 * @param viteEnv
 */
// const createVitePwa = (viteEnv: ViteEnv): PluginOption | PluginOption[] => {
//   const { VITE_GLOB_APP_TITLE } = viteEnv;
//   return VitePWA({
//     registerType: "autoUpdate",
//     manifest: {
//       name: VITE_GLOB_APP_TITLE,
//       short_name: VITE_GLOB_APP_TITLE,
//       theme_color: "#ffffff",
//       icons: [
//         {
//           src: "/logo.png",
//           sizes: "192x192",
//           type: "image/png"
//         },
//         {
//           src: "/logo.png",
//           sizes: "512x512",
//           type: "image/png"
//         },
//         {
//           src: "/logo.png",
//           sizes: "512x512",
//           type: "image/png",
//           purpose: "any maskable"
//         }
//       ]
//     }
//   });
// };
