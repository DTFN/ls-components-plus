import type { App } from 'vue';
import { getRootAttr, isServerRendering } from '@cpo/_utils/dom';
import type { LSOptions, LSUnionTypeSS } from '@cpo/_utils/types';

const COMPONENT_PREFIX = 'LS';
const GLOBAL_CONFIG_NAME = '$LS';

export const getComponentPrefix = (options?: LSOptions) => {
  return options?.componentPrefix ?? COMPONENT_PREFIX;
};

export const setGlobalConfig = (app: App, options?: LSOptions): void => {
  if (options && options.classPrefix) {
    app.config.globalProperties[GLOBAL_CONFIG_NAME] = {
      ...(app.config.globalProperties[GLOBAL_CONFIG_NAME] ?? {}),
      classPrefix: options.classPrefix
    };
  }
};

export const initVariables = () => {
  const variables: LSUnionTypeSS = {};
  if (!isServerRendering) {
    const ele = document.documentElement;
    for (let i = 1; i <= 10; i++) {
      variables[`colorBrand${i}`] = getRootAttr(ele, `--color-brand${i}`);
      variables[`colorSuccess${i}`] = getRootAttr(ele, `--color-success${i}`);
      variables[`colorWarning${i}`] = getRootAttr(ele, `--color-warning${i}`);
      variables[`colorDanger${i}`] = getRootAttr(ele, `--color-danger${i}`);
      variables[`colorInfo${i}`] = getRootAttr(ele, `--color-info${i}`);
      if (i <= 7) {
        variables[`colorGray${i}`] = getRootAttr(ele, `--color-gray${i}`);
        variables[`colorFill${i}`] = getRootAttr(ele, `--color-fill${i}`);
      }
      if (i <= 6) {
        variables[`colorBorder${i}`] = getRootAttr(ele, `--color-border${i}`);
      }
      if (i <= 5) {
        variables[`colorText${i}`] = getRootAttr(ele, `--color-text${i}`);
      }
    }
    variables['colorLight'] = getRootAttr(ele, `--color-light`);
    variables['colorDark'] = getRootAttr(ele, `--color-dark`);

    variables['boxShadowbase'] = getRootAttr(ele, `--box-shadow-base`);
    variables['boxShadowMid'] = getRootAttr(ele, `--box-shadow-mid`);
    variables['boxShadowUp'] = getRootAttr(ele, `--box-shadow-up`);
  }
  return variables;
};

export const getVariable = (key: string): string => {
  if (!isServerRendering) {
    const ele = document.documentElement;
    return getRootAttr(ele, key);
  }
  return '';
};
