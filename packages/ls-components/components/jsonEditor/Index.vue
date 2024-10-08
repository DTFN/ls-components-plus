<script setup lang="ts" name="LSJsonEditor">
// https://github.com/bestkolobok/vue3-jsoneditor
import JsonEditor from 'vue3-ts-jsoneditor';
import { lsJsonEditorProps } from './types';
import { useNamespace } from '@cpo/_hooks/useNamespace';

const ns = useNamespace('json-editor');
const comClass: string = ns.b();

const props = defineProps(lsJsonEditorProps);

const defAttrs: any = ref({
  mode: 'tree',
  height: 600
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

<style lang="scss" scoped></style>
