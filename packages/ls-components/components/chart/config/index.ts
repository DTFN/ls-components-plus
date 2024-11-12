import { merge } from 'lodash-es';

export async function templateOption({ template, data = [], templatePatch = {}, customOption = {} }: any) {
  if (template) {
    const modules = import.meta.glob('./template/*.ts');
    let configData: any = await modules[`./template/${template}.ts`]();
    const { dealOption } = configData;
    return merge(dealOption(data, templatePatch), customOption);
  }
  return customOption;
}

export default {
  templateOption
};
