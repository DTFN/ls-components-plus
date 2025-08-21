import type { App, Plugin } from 'vue';
import LSDateTimePicker from './date_time_picker/index';

const components: Record<string, Plugin> = {
  LSDateTimePicker
};

const install = (app: App) => {
  for (const key of Object.keys(components)) {
    const cpo: any = components[key];
    app.component(cpo?.name, cpo);
  }
};

const LSH5Components: Plugin = {
  ...components,
  install
};

export default LSH5Components;
