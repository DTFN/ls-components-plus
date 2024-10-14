<script setup lang="ts" name="LSEditor">
import '@wangeditor/editor/dist/css/style.css';
import { useNamespace } from '@cpo/_hooks/useNamespace';
import { Editor, Toolbar } from '@wangeditor/editor-for-vue';
import { lsEditorProps } from './types';
import { IEditorConfig, IToolbarConfig } from '@wangeditor/editor';
import { merge } from 'lodash-es';

const ns = useNamespace('editor');
const comClass: string = ns.b();

const props = defineProps(lsEditorProps);

const editorRef = shallowRef();

const defToolbarConfig: Partial<IToolbarConfig> = {
  excludeKeys: ['group-video']
};
const defEditorConfig: Partial<IEditorConfig> = {
  placeholder: '请输入内容...',
  maxLength: 20000,
  MENU_CONF: {
    uploadImage: {
      server: props.uploadServer,
      fieldName: props.uploadFieldName,
      headers: {
        token: props.uploadToken
      },
      customInsert(res: any, insertFn: any) {
        // res 即服务端的返回结果 从 res 中找到 data alt href ，然后插入图片
        const { data = '', alt = '', href = '' } = res || {};
        insertFn(data, alt, href);
      }
    }
  }
};

const editorStyle = computed(() => {
  return {
    height: props?.height || '300px'
  };
});

const valueModel = ref('');

watch(
  () => props.valueHtml,
  val => {
    valueModel.value = val;
  },
  {
    immediate: true,
    deep: true
  }
);

onBeforeUnmount(() => {
  const editor = editorRef.value;
  if (editor == null) return;
  editor.destroy();
});

defineExpose({
  editorRef
});
</script>

<template>
  <div :class="comClass">
    <Toolbar class="tool-bar-wrap" :editor="editorRef" :default-config="merge(defToolbarConfig, toolbarConfig)" :mode="mode" />
    <Editor
      class="editor-wrap"
      v-model="valueModel"
      :default-config="merge(defEditorConfig, editorConfig)"
      :style="editorStyle"
      :mode="mode"
    />
  </div>
</template>

<style lang="scss" scoped>
.ls-editor {
  border: 1px solid $color-text5;
}
.tool-bar-wrap {
  border-bottom: 1px solid $color-text5;
}
.editor-wrap {
  :deep() .w-e-text-container {
    h1 {
      margin-block: 0.67em 0.67em !important;
      font-size: 2em !important;
    }
  }
}
</style>
