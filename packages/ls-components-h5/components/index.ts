import type { App, Plugin } from 'vue';
import LSDatePicker from './data_time_picker/index';

const components: Record<string, Plugin> = {
  LSDatePicker
};

const install = (app: App) => {
  for (const key of Object.keys(components)) {
    const cpo: any = components[key];
    app.component(cpo?.name, cpo);
  }
};

const LSH5Plus: Plugin = {
  ...components,
  install
};

export default LSH5Plus;
