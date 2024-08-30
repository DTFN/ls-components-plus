import type { App, Plugin } from 'vue';
import { LSButton, LSButtonGroup } from './button/index';

const components: Record<string, Plugin> = {
  LSButtonGroup,
  LSButton
};

const install = (app: App) => {
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
