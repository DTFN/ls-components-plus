import { App } from 'vue';
// import { useData } from 'vitepress';
import Theme from 'vitepress/theme';
import './style.scss';
import ArticleMetadata from './components/ArticleMetadata.vue'; // 字数阅读时间
import ApiIntro from './components/ApiIntro.vue';
import print from 'vue3-print-nb';

// import LSWebPlus from '../../../ls-components/lib/index';
// import { vAuth } from '../../../ls-components/lib/directives';
// import '../../../ls-components/lib/index.css';

import LSWebPlus from '@lingshugroup/web-plus';
import { vAuth } from '@lingshugroup/web-plus/directives';
import '@lingshugroup/web-plus/index.css';
import 'element-plus/dist/index.css';

export default Object.assign({}, Theme, {
  // Layout: () => {
  // const props: Record<string, any> = {};
  // // 获取 frontmatter
  // const { frontmatter } = useData();

  // /* 添加自定义 class */
  // if (frontmatter.value?.layoutClass) {
  //   props.class = frontmatter.value.layoutClass;
  // }

  // return h(Theme.Layout, props);
  // },
  enhanceApp({ app }: { app: App }) {
    app.component('ArticleMetadata', ArticleMetadata);
    app.component('ApiIntro', ApiIntro);

    app.directive('print', print);

    vAuth.permissions = ['a', 'b', 'c'];
    app.directive('auth', vAuth);
    app.use(LSWebPlus);
  }
});
