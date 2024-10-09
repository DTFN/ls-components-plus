<script setup lang="ts" name="LSJsonEditor">
// https://github.com/bestkolobok/vue3-jsoneditor
import JsonEditor from 'vue3-ts-jsoneditor';
import { lsJsonEditorProps } from './types';
import { useNamespace } from '@cpo/_hooks/useNamespace';

const ns = useNamespace('json-editor');
const comClass: string = ns.b();

const props = defineProps(lsJsonEditorProps);

const defAttrs: any = ref({
  mode: 'text',
  height: 600,
  navigationBar: false,
  readOnly: true
});

const jsonModel: any = ref({});

watch(
  () => props.jsonValue,
  val => {
    jsonModel.value = val;
  },
  {
    immediate: true,
    deep: true
  }
);
</script>

<template>
  <div :class="comClass">
    <json-editor v-bind="Object.assign(defAttrs, $attrs)" v-model="jsonModel" />
  </div>
</template>

<style lang="scss" scoped>
.ls-json-editor {
  :deep() .vue-ts-json-editor {
    .jse-last,
    .jse-search,
    .jse-separator {
      display: none !important;
    }
    .jse-button {
      &:nth-of-type(2) {
        border-right: 1px solid #ffffff !important;
      }
    }
  }
}
</style>
