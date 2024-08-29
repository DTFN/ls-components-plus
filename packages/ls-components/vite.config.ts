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
    // build: {
    //   minify: 'esbuild',

    //   rollupOptions: {
    //     output: {
    //       chunkFileNames: 'js/[name]-[hash].js', // 引入文件名的名称
    //       entryFileNames: 'js/[name]-[hash].js', // 包的入口文件名称
    //       assetFileNames: '[ext]/[name]-[hash].[ext]', // 资源文件像 字体，图片等
    //       manualChunks(id) {
    //         try {
    //           if (id.includes('node_modules')) {
    //             const name = id.split('node_modules/')[1].split('/');

    //             if (name[0] === '.pnpm') return name[1];
    //             else return name[0];
    //           }
    //         } catch (error) {
    //           console.error(error);
    //         }
    //       }
    //     }
    //   }
    // },
    esbuild: {
      pure: viteEnv.VITE_DROP_CONSOLE ? ['console.log', 'debugger'] : []
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
          additionalData: `@use "components/_style/element/index.scss" as *;`
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
