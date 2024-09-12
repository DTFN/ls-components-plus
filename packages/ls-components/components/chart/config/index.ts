import { merge } from 'lodash-es';

export function templateOption({ template, data = [], templatePatch = {}, customOption = {} }: any) {
  if (template) {
    let configData = require(`./${template}.ts`);
    const { dealConfig } = configData.default;
    return merge(dealConfig(data, templatePatch), customOption);
  }
  return customOption;
}

export default {
  templateOption
};
