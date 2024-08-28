// https://vitejs.dev/config/
import vue from '@vitejs/plugin-vue'
import path from 'node:path'
import { visualizer } from 'rollup-plugin-visualizer'
import AutoImport from 'unplugin-auto-import/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import type { ConfigEnv, UserConfig } from 'vite'
import { defineConfig, loadEnv } from 'vite'
import viteCompression from 'vite-plugin-compression'
import simpleHtmlPlugin from 'vite-plugin-simple-html'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

const pathSrc = path.resolve(__dirname, 'src')

export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  const root = process.cwd()
  const env = loadEnv(mode, root)

  return {
    base: '/',
    resolve: {
      alias: {
        '@': pathSrc
      },
    },
    build: {
      minify: 'esbuild',

      rollupOptions: {
        output: {
          chunkFileNames: 'js/[name]-[hash].js', // 引入文件名的名称
          entryFileNames: 'js/[name]-[hash].js', // 包的入口文件名称
          assetFileNames: '[ext]/[name]-[hash].[ext]', // 资源文件像 字体，图片等
          manualChunks(id) {
            try {
              if (id.includes('node_modules')) {
                const name = id.split('node_modules/')[1].split('/')

                if (name[0] === '.pnpm')
                  return name[1]
                else
                  return name[0]
              }
            }
            catch (error) {
              console.error(error)
            }
          },
        },
      },
    },
    esbuild: {
      drop: mode === 'dev' ? [] : ['console', 'debugger'],
    },
    // 依赖预加载
    optimizeDeps: {
      include: ['element-plus/es/**', '@vueuse/core', '@element-plus/icons-vue'],
    },
    // scss 全局变量
    css: {
      preprocessorOptions: {
        scss: {
          // @use "src/style/element/index.scss" as *; 自定义主题颜色
          // additionalData: `@use "src/style/var.scss" as *;`,
          additionalData: `@use "components/_style/element/index.scss" as *;`,
        },
      },
    },
    // 插件
    plugins: [
      vue(),
      AutoImport({
        imports: ['vue', 'vue-router', '@vueuse/core'],
        dts: 'auto-imports.d.ts',
        vueTemplate: true,
        resolvers: [
          // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
          ElementPlusResolver(
            {
              importStyle: 'sass', // 自定义主题颜色
            },
          ),
          // 自动导入图标组件
          IconsResolver({
            prefix: 'Icon',
          }),
        ],
      }),
      Components({
        dts: 'components.d.ts',
        resolvers: [
          // 自动注册图标组件
          IconsResolver({
            enabledCollections: ['ep'],
          }),
          // 自动导入 Element Plus 组件 (采用scss样式配色系统)
          ElementPlusResolver(
            {
              importStyle: 'sass', // 自定义主题颜色
            },
          ),
        ],
      }),
      Icons({
        autoInstall: true,
      }),
      simpleHtmlPlugin({
        inject: {
          data: {
            title: env.VITE_APP_TITLE,
          },
        },
        minify: true,
      }),
      createSvgIconsPlugin({
        // 指定需要缓存的图标文件夹
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        // 指定symbolId格式
        symbolId: 'icon-[name]',
      }),
      // 打包压缩
      viteCompression(
        {
          verbose: true, // 是否在控制台中输出压缩结果
          disable: false, // 是否禁用压缩
          threshold: 10240, // 如果体积大于阈值，将被压缩，单位为b
          algorithm: 'gzip', // 压缩算法，可选['gzip'，' brotliccompress '，'deflate '，'deflateRaw']
          ext: '.gz', // 添加的压缩文件扩展名
          deleteOriginFile: false, // 源文件压缩后是否删除(!!!!删除之后部署页面打不开)
        },
      ),
      // 打包体积分析
      visualizer({
        filename: './bundle-stats.html', // 输出HTML报告的路径
        open: false, // 是否自动打开报告页面
        gzipSize: true, // 是否显示gzip压缩后的大小
        brotliSize: true, // 是否显示brotli压缩后的大小
      }),
    ],
    server: {
      host: '0.0.0.0',
      hmr: true,
      strictPort: false,
      port: 8080
    },
  }
})
