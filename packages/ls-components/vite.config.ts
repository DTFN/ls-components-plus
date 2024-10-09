// https://vitejs.dev/config/
import { defineConfig, loadEnv, ConfigEnv, UserConfig } from 'vite';
import path from 'path';
import { wrapperEnv } from './build/getEnv';
import { createProxy } from './build/proxy';
import { createVitePlugins } from './build/plugins';

const pathSrc = path.resolve(__dirname, 'src');
const cpoSrc = path.resolve(__dirname, 'components');

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
      lib: {
        entry: path.resolve(__dirname, './components/main.ts'),
        name: 'index',
        fileName: 'index'
      },
      rollupOptions: {
        external: ['vue', 'vue-router'],
        output: {
          globals: {
            vue: 'Vue',
            'vue-router': 'VueRouter'
          },
          assetFileNames: 'lsWebPlus.css'
        }
      }
    },
    esbuild: {
      pure: viteEnv.VITE_DROP_CONSOLE ? ['console.log', 'debugger'] : [],
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
