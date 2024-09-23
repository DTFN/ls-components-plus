import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import type { App, Plugin } from 'vue';
import { LSButton, LSButtonGroup } from './button/index';
import LSDescriptions from './descriptions/index';
import { LSForm, LSFormItem } from './form/index';
import LSPreview from './preview/index';
import LSTable from './table/index';
import LSUpload from './upload/index';
import LSMenu from './menu/index';
import LSIcon from './icon/index';
import LSConfirm from './confirm/index';
import LSChart from './chart/index';
import LSBreadcrumb from './breadcrumb/index';
import LSBellMessage from './bellMessage/index';
import LSLive from './live/index';

const components: Record<string, Plugin> = {
  LSButtonGroup,
  LSButton,
  LSDescriptions,
  LSUpload,
  LSPreview,
  LSForm,
  LSFormItem,
  LSTable,
  LSMenu,
  LSIcon,
  LSConfirm,
  LSChart,
  LSBreadcrumb,
  LSBellMessage,
  LSLive
};

const install = (app: App) => {
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
  }

  for (const key of Object.keys(components)) {
    const cpo: any = components[key];
    app.component(cpo?.name, cpo);
  }
};

const LSWebPlus = {
  ...components,
  install
};

export default LSWebPlus;
