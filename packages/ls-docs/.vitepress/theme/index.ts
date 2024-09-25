// import DefaultTheme from 'vitepress/theme'
// import { h, App } from 'vue'
// import { useData } from 'vitepress'
// import Layout from './Layout.vue'
// import './style.scss'

// export default {
//   ...DefaultTheme,
//   layout: Layout,
//   enhanceApp({ app }) {
//     // 注册一个全局组件
//     app.component('Layout', Layout)
//   }
// }

import { h, App } from 'vue';
import { useData } from 'vitepress';
import Theme from 'vitepress/theme';
import './style.scss';
import ArticleMetadata from './components/ArticleMetadata.vue'; //字数阅读时间

export default Object.assign({}, Theme, {
  Layout: () => {
    const props: Record<string, any> = {};
    // 获取 frontmatter
    const { frontmatter } = useData();

    /* 添加自定义 class */
    if (frontmatter.value?.layoutClass) {
      props.class = frontmatter.value.layoutClass;
    }

    return h(Theme.Layout, props);
  },
  enhanceApp({ app }: { app: App }) {
    app.component('ArticleMetadata', ArticleMetadata);
  }
});

// import ElementPlus from 'element-plus'
// import VPApp, { globals } from '../vitepress'
// import { define } from '../utils/types'
// import './style.css'
// import type { Theme } from 'vitepress'

// export default define<Theme>({
//   // NotFound,
//   Layout: VPApp,
//   enhanceApp: ({ app }) => {
//     app.use(ElementPlus)

//     globals.forEach(([name, Comp]) => {
//       app.component(name, Comp)
//     })
//   },
// })
