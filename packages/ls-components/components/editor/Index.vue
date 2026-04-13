<script setup lang="ts" name="LSEditor">
/**
 * @summary 富文本编辑器组件 - 基于 `wangeditor` 的二次封装
 *
 * `LSEditor` 基于 `@wangeditor/editor` 与 `@wangeditor/editor-for-vue` 实现，
 * 提供统一的图片上传配置、工具栏配置、编辑器实例暴露以及菜单越界位置修正能力。
 * 组件使用 `valueHtml` 作为回显内容输入，并将 `toolbarConfig`、`editorConfig` 与默认配置合并后传给 `wangeditor`。
 * 如需只读模式、占位文案或更多行为控制，请通过 `editorConfig` 传入原生配置。
 *
 * @attr {string} valueHtml 富文本 HTML 内容，用于回显
 * @attr {string} height 编辑区域高度，默认 `300px`
 * @attr {'default'|'simple'} mode 编辑器模式，默认 `default`
 * @attr {object} toolbarConfig 工具栏配置，与 `wangeditor` 配置保持一致
 * @attr {object} editorConfig 编辑器配置，与 `wangeditor` 配置保持一致
 * @attr {string} uploadServer 图片上传服务器地址
 * @attr {string} uploadToken 图片上传所需 token；未传且 `uploadHeaders` 为空时会自动写入请求头
 * @attr {string} uploadFieldName 图片上传字段名，默认 `file`
 * @attr {object|null} uploadHeaders 自定义上传请求头，优先级高于 `uploadToken`
 * @attr {number} uploadImgSize 图片上传大小限制，默认 `2`
 * @attr {string} uploadImgSizeUnit 图片上传大小单位，可选 `GB` / `MB` / `KB`，默认 `MB`
 * @attr {object|null} containerDom 可视区域 DOM，用于修正图片/视频菜单越界位置，默认 `null`
 *
 * @slot 无
 *
 * @event handleCreated(editor) 编辑器创建完成时触发
 * @event handleChange(editor) 编辑器内容变化时触发
 * @event handleDestroyed(editor) 编辑器销毁时触发
 * @event handleFocus(editor) 编辑器获得焦点时触发
 * @event handleBlur(editor) 编辑器失去焦点时触发
 * @event customAlert(info, type) 自定义 alert 事件
 * @event customPaste(editor, event, callback) 自定义粘贴事件
 *
 * @example
 * <LSEditor
 *   ref="lsEditorRef"
 *   :value-html="valueHtml"
 *   :upload-server="uploadServer"
 *   :upload-token="uploadToken"
 *   height="400px"
 *   @handle-created="handleCreated"
 * />
 */
import { useNamespace } from '@cpo/_hooks/useNamespace';
import { elementOutOfBounds } from '@cpo/_utils/utils';
import { IEditorConfig, IToolbarConfig } from '@wangeditor/editor';
import { Editor, Toolbar } from '@wangeditor/editor-for-vue';
import { merge } from 'lodash-es';
import { lsEditorEmits, lsEditorProps } from './types';

const ns = useNamespace('editor');
const comClass: string = ns.b();

const props = defineProps(lsEditorProps);
const emits = defineEmits(lsEditorEmits);

const editorRef = shallowRef();
const lsEditorRef = ref();

function getMaxFileSize(size: number, unit: string) {
  let temp = (size || 2) * 1024 * 1024;
  if (!size) {
    return temp;
  }
  switch (unit) {
    case 'GB':
      temp = size * 1024 * 1024;
      break;
    case 'KB':
      temp = size * 1024;
      break;
    default:
      break;
  }
  return temp;
}

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
      maxFileSize: getMaxFileSize(props.uploadImgSize, props.uploadImgSizeUnit),
      headers: props.uploadHeaders
        ? props.uploadHeaders
        : {
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

const handleCreated = (editor: any) => {
  editorRef.value = editor;
  listenerDoms();
  emits('handleCreated', editor);
};
const handleChange = (editor: any) => {
  emits('handleChange', editor);
};
const handleDestroyed = (editor: any) => {
  emits('handleDestroyed', editor);
};
const handleFocus = (editor: any) => {
  emits('handleFocus', editor);
};
const handleBlur = (editor: any) => {
  emits('handleBlur', editor);
};
const customAlert = (info: any, type: any) => {
  emits('customAlert', info, type);
};
const customPaste = (editor: any, event: any, callback: any) => {
  emits('customPaste', editor, event, callback);
};

async function listenerDoms() {
  await nextTick();
  const imgDoms = lsEditorRef.value.querySelectorAll('button[data-menu-key="group-image"]') || [];
  imgDoms.forEach((element: any) => {
    element.removeEventListener('mouseenter', updateStyle);
    element.addEventListener('mouseenter', () => {
      updateStyle(element);
    });
  });
  const videoDoms = lsEditorRef.value.querySelectorAll('button[data-menu-key="group-video"]') || [];
  videoDoms.forEach((element: any) => {
    element.removeEventListener('mouseenter', updateStyle);
    element.addEventListener('mouseenter', () => {
      updateStyle(element);
    });
  });
}

function updateStyle(e: any) {
  const dom = e.parentNode.querySelector('.w-e-bar-item-menus-container');
  const pos = elementOutOfBounds(dom, props.containerDom);
  switch (pos) {
    case 'left':
      dom.style.left = 0;
      dom.style.right = 'inherit';
      break;
    case 'right':
      dom.style.left = 'inherit';
      dom.style.right = 0;
      break;
  }
}

defineExpose({
  editorRef
});
</script>

<template>
  <div ref="lsEditorRef" :class="comClass">
    <Toolbar class="tool-bar-wrap" :editor="editorRef" :default-config="merge(defToolbarConfig, toolbarConfig)" :mode="mode" />
    <Editor
      class="editor-wrap"
      v-model="valueModel"
      :default-config="merge(defEditorConfig, editorConfig)"
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

<style>
@import '@wangeditor/editor/dist/css/style.css';
</style>
<style lang="scss" scoped>
.ls-editor {
  z-index: 999;
  border: 1px solid cpo-var.$color-text5;
}
.tool-bar-wrap {
  border-bottom: 1px solid cpo-var.$color-text5;
  :deep(.w-e-bar-item) {
    justify-content: flex-start;
  }
}
.editor-wrap {
  :deep(.w-e-text-container) {
    h1 {
      margin-block: 0.67em 0.67em !important;
      font-size: 2em !important;
    }
  }
}
</style>
