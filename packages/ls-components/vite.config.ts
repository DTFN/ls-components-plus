// https://vitejs.dev/config/
import { defineConfig, loadEnv, ConfigEnv, UserConfig } from 'vite';
import path from 'path';
import { wrapperEnv } from './build/getEnv';
import { createProxy } from './build/proxy';
import { createVitePlugins } from './build/plugins';
// import { readdirSync, statSync } from 'fs';

const pathSrc = path.resolve(__dirname, 'src');
const cpoSrc = path.resolve(__dirname, 'components');

// function getComponentEntries(cpoPath: string) {
//   const resolve = (dir: string) => path.join(__dirname, './', dir);
//   let files = readdirSync(resolve(cpoPath));
//   const componentEntries = files.reduce((fileObj: any, item: any) => {
//     const join = (path as any).join;
//     const itemPath = join(cpoPath, item);
//     const isDir = statSync(itemPath).isDirectory();
//     const [name, suffix] = item.split('.');

//     if (isDir && !item.startsWith('_')) {
//       fileObj[item] = resolve(join(itemPath, 'index.ts'));
//     } else if (suffix === 'ts') {
//       fileObj[name] = resolve(`${itemPath}`);
//     }
//     return fileObj;
//   }, {});
//   return componentEntries;
// }

export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  const root = process.cwd();
  const env = loadEnv(mode, root);
  const viteEnv = wrapperEnv(env);

  return {
    base: '/',
    resolve: {
      alias: {
        '@': pathSrc,
        '@cpo': cpoSrc
      }
    },
    build: {
      outDir: 'lib',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      },
      lib: {
        entry: path.resolve(__dirname, './components/main.ts'),
        // entry: getComponentEntries('components'),
        name: 'index',
        fileName: 'index',
        // fileName: '[name]/index'
        // formats: ['es', 'cjs']
        formats: ['es', 'umd']
      },
      rollupOptions: {
        external: [
          'vue',
          'vue-router',
          'axios',
          'echarts',
          'element-plus',
          'pdfjs-dist',
          '@wangeditor/editor',
          '@wangeditor/editor-for-vue',
          '@element-plus/icons-vue',
          '@iconify/vue',
          'luckyexcel',
          /echarts\/.+/,
          /pdfjs-dist\/.+/
        ],
        output: {
          exports: 'named',
          globals: {
            vue: 'Vue',
            'vue-router': 'VueRouter',
            axios: 'axios',
            echarts: 'echarts',
            'element-plus': 'element-plus',
            'pdfjs-dist': 'pdfjs-dist',
            '@wangeditor/editor': '@wangeditor/editor',
            '@wangeditor/editor-for-vue': '@wangeditor/editor-for-vue',
            '@element-plus/icons-vue': '@element-plus/icons-vue',
            '@iconify/vue': '@iconify/vue',
            luckyexcel: 'luckyexcel'
          },
          assetFileNames: 'index.css'
        }
      }
    },
    esbuild: {
      pure: ['console.log', 'debugger'],
      keepNames: true
    },
    // 依赖预加载
    optimizeDeps: {
      include: ['element-plus/es/**', '@vueuse/core', '@element-plus/icons-vue']
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
      host: '0.0.0.0',
      port: viteEnv.VITE_PORT,
      open: viteEnv.VITE_OPEN,
      proxy: createProxy(viteEnv.VITE_PROXY)
    }
  };
});
