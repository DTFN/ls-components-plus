import type { App } from 'vue';
import _LSButton from './Button.vue';
import _LSButtonGroup from './ButtonGroup.vue';
import { setGlobalConfig } from '@cpo/_utils/config';
import type { LSOptions } from '@cpo/_utils/types';

const LSButton = Object.assign(_LSButton, {
  install: (app: App, options?: LSOptions) => {
    setGlobalConfig(app, options);
    if (_LSButton.name) {
      app.component(_LSButton.name, _LSButton);
    }
  }
});

const LSButtonGroup = Object.assign(_LSButtonGroup, {
  install: (app: App, options?: LSOptions) => {
    setGlobalConfig(app, options);
    if (_LSButtonGroup.name) {
      app.component(_LSButtonGroup.name, _LSButtonGroup);
    }
  }
});

export { LSButton, LSButtonGroup };
