import { merge } from 'lodash-es';

export async function templateOption({ template, data = [], templatePatch = {}, customOption = {} }: any) {
  if (template) {
    let configData = await import(`./${template}.ts`);
    const { dealOption } = configData;
    return merge(dealOption(data, templatePatch), customOption);
  }
  return customOption;
}

export default {
  templateOption
};
