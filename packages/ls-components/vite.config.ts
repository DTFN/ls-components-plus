// https://vitejs.dev/config/
import { defineConfig, loadEnv, ConfigEnv, UserConfig } from 'vite';
import path from 'path';
import { wrapperEnv } from './build/getEnv';
import { createProxy } from './build/proxy';
import { createVitePlugins } from './build/plugins';
import { readdirSync, statSync } from 'fs';

const pathSrc = path.resolve(__dirname, 'src');
const cpoSrc = path.resolve(__dirname, 'components');

function getComponentEntries(cpoPath: string) {
  const resolve = (dir: string) => path.join(__dirname, './', dir);
  const comList = ['_directives', '_hooks', '_utils'];
  let files = readdirSync(resolve(cpoPath));
  const componentEntries = files.reduce((fileObj: any, item: any) => {
    const join = (path as any).join;
    const itemPath = join(cpoPath, item);
    const isDir = statSync(itemPath).isDirectory();
    const [name] = item.split('.');
    if (isDir) {
      let temp = '';
      if (!item.startsWith('_')) {
        temp = name;
      } else if (comList.includes(item)) {
        temp = item.replace('_', '');
      }
      temp && (fileObj[temp] = resolve(join(itemPath, 'index.ts')));
    } else if (name === 'main') {
      fileObj['index'] = resolve(`${itemPath}`);
    }
    return fileObj;
  }, {});
  return componentEntries;
}

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
      cssCodeSplit: false,
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      },
      lib: {
        entry: getComponentEntries('components'),
        name: '[name]',
        fileName: '[name]/index',
        formats: ['es', 'cjs']
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
          'lodash',
          'vue3-ts-jsoneditor'
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
            luckyexcel: 'luckyexcel',
            lodash: 'lodash',
            'vue3-ts-jsoneditor': 'vue3-ts-jsoneditor'
          },
          assetFileNames: 'index.css',
          preserveModules: true
        }
      }
    },
    esbuild: {
      pure: ['console.log', 'debugger'],
      keepNames: true
    },
    // 依赖预加载
    optimizeDeps: {
      include: ['element-plus/es/**', '@vueuse/core', '@element-plus/icons-vue'],
      exclude: ['pdfjs-dist']
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
