import { setGlobalConfig } from '@cpo/_utils/config';
import type { LSOptions } from '@cpo/_utils/types';
import type { App } from 'vue';
import _LSForm from './Form.vue';
import _LSFormItem from './FormItem.vue';

const LSForm = Object.assign(_LSForm, {
  install: (app: App, options?: LSOptions) => {
    setGlobalConfig(app, options);
    if (_LSForm.name) {
      app.component(_LSForm.name, _LSForm);
    }
  }
});

const LSFormItem = Object.assign(_LSFormItem, {
  install: (app: App, options?: LSOptions) => {
    setGlobalConfig(app, options);
    if (_LSFormItem.name) {
      app.component(_LSFormItem.name, _LSFormItem);
    }
  }
});

export { LSForm, LSFormItem };
