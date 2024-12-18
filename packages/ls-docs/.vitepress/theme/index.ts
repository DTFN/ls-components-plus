import { App } from 'vue';
import Theme from 'vitepress/theme';
import './style.scss';
import ArticleMetadata from './components/ArticleMetadata.vue'; // 字数阅读时间
import ApiIntro from './components/ApiIntro.vue';
import print from 'vue3-print-nb';
// import { defineClientComponent } from 'vitepress';

import 'element-plus/dist/index.css';

// import LSWebPlus from '../../../ls-components/lib/index';
// import { vAuth } from '../../../ls-components/lib/directives';
// import '../../../ls-components/lib/index.css';

// import LSWebPlus from '@lingshugroup/web-plus';
import { vAuth } from '@lingshugroup/web-plus/directives';
import '@lingshugroup/web-plus/index.css';

// import LSIcon from '@lingshugroup/web-plus/icon';
// import { LSButton, LSButtonGroup } from '@lingshugroup/web-plus/button';
// import LSLayout from '@lingshugroup/web-plus/layout';

// import { LSForm, LSFormItem } from '@lingshugroup/web-plus/form';
// import LSUpload from '@lingshugroup/web-plus/upload';

// import LSTable from '@lingshugroup/web-plus/table';
// import LSDescriptions from '@lingshugroup/web-plus/descriptions';
// import LSTree from '@lingshugroup/web-plus/tree';
// import LSMap from '@lingshugroup/web-plus/map';
// import LSLive from '@lingshugroup/web-plus/live';
// import LSEditor from '@lingshugroup/web-plus/editor';
// import LSList from '@lingshugroup/web-plus/list';

// import LSChart from '@lingshugroup/web-plus/chart';

// import LSBackTop from '@lingshugroup/web-plus/backTop';
// import LSBreadcrumb from '@lingshugroup/web-plus/breadcrumb';
// import LSMenu from '@lingshugroup/web-plus/menu';

// import LSConfirm from '@lingshugroup/web-plus/confirm';
// import LSBellMessage from '@lingshugroup/web-plus/bellMessage';
// import LSDialog from '@lingshugroup/web-plus/dialog';

// import LSPrint from '@lingshugroup/web-plus/print';
// import LSContainerBox from '@lingshugroup/web-plus/containerBox';

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
  async enhanceApp({ app }: { app: App }) {
      app.component('ArticleMetadata', ArticleMetadata);
      app.component('ApiIntro', ApiIntro);
  
      app.directive('print', print);
  
      vAuth.permissions = ['a', 'b', 'c'];
      app.directive('auth', vAuth);
      // [
      //   LSIcon,
      //   LSButton,
      //   LSButtonGroup,
      //   LSLayout,
      //   LSForm,
      //   LSFormItem,
      //   LSUpload,
      //   LSTable,
      //   LSDescriptions,
      //   LSTree,
      //   LSMap,
        // LSLive,
        // LSEditor,
        // LSList,
        // LSChart,
        // LSBackTop,
        // LSBreadcrumb,
        // LSMenu,
        // LSConfirm,
        // LSBellMessage,
        // LSDialog,
        // LSPrint,
        // LSContainerBox
      // ].map(item => {
      //   app.component(item.name, item);
      // });
      
    if (!import.meta.env.SSR) {
      const plugin = await import('@lingshugroup/web-plus')
      app.use(plugin.default)
    }

  }
});
