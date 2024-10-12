<script setup lang="ts" name="LSEditor">
import '@wangeditor/editor/dist/css/style.css';
import { useNamespace } from '@cpo/_hooks/useNamespace';
import { Editor, Toolbar } from '@wangeditor/editor-for-vue';
import { lsEditorEmits, lsEditorProps } from './types';
import { IEditorConfig, IToolbarConfig } from '@wangeditor/editor';

const ns = useNamespace('editor');
const comClass: string = ns.b();

const props = defineProps(lsEditorProps);

const emits = defineEmits(lsEditorEmits);

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
      fieldName: props.uploadFieldName
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

function handleCreated(editor: any) {
  // console.log(editor);
  editorRef.value = editor;
  emits('handleCreated', editor);
}

function handleChange(editor: any) {
  // console.log(editor.getHtml());
  emits('handleChange', editor);
}

function handleDestroyed(editor: any) {
  // console.log(editor);
  emits('handleDestroyed', editor);
}

function handleFocus(editor: any) {
  // console.log(editor);
  emits('handleFocus', editor);
}

function handleBlur(editor: any) {
  // console.log(editor);
  emits('handleBlur', editor);
}

function customAlert(info: string, type: string) {
  // console.log(info, type);
  emits('customAlert', info, type);
}

function customPaste(editor: any, event: any, callback: any) {
  // console.log(editor, event, callback);
  emits('customPaste', editor, event, callback);
}

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
    <Toolbar
      class="tool-bar-wrap"
      :editor="editorRef"
      :default-config="Object.assign(defToolbarConfig, toolbarConfig)"
      :mode="mode"
    />
    <Editor
      class="editor-wrap"
      v-model="valueModel"
      :default-config="Object.assign(defEditorConfig, editorConfig)"
      :style="editorStyle"
      :mode="mode"
      @on-created="handleCreated"
      @on-change="handleChange"
      @on-destroyed="handleDestroyed"
      @on-focus="handleFocus"
      @on-blur="handleBlur"
      @custom-alert="customAlert"
      @custom-paste="customPaste"
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
