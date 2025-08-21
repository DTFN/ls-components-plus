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
          drop_console: true
        }
      },
      lib: {
        entry: getComponentEntries('components'),
        name: '[name]',
        fileName: '[name]/index',
        formats: ['es', 'cjs']
      },
      rollupOptions: {
        external: ['vue', 'vue-router', 'axios', 'lodash'],
        output: {
          exports: 'named',
          globals: {
            vue: 'Vue',
            'vue-router': 'VueRouter',
            axios: 'axios',
            lodash: 'lodash'
          },
          assetFileNames: 'index.css',
          preserveModules: true
        }
      }
    },
    esbuild: {
      pure: ['console.log'],
      keepNames: true
    },
    // 依赖预加载
    optimizeDeps: {
      include: ['@vueuse/core']
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
