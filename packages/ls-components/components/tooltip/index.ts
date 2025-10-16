import type { App } from 'vue';
import _LSTooltip from './Index.vue';
import { setGlobalConfig } from '@cpo/_utils/config';
import type { LSOptions } from '@cpo/_utils/types';

const LSTooltip: typeof _LSTooltip & { install: (app: App, options?: LSOptions) => void } = Object.assign(_LSTooltip, {
  install: (app: App, options?: LSOptions) => {
    setGlobalConfig(app, options);
    if (_LSTooltip.name) {
      app.component(_LSTooltip.name, _LSTooltip);
    }
  }
});

export default LSTooltip;
