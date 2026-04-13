<script setup lang="ts" name="LSDocx">
/**
 * @summary Word 文档渲染组件 - `LSPreviewDocx` 的内部渲染器
 *
 * `LSDocx` 是 `LSPreviewDocx` 的内部子组件，负责基于 `docx-preview` 将 DOCX 数据渲染到容器节点。
 * 组件监听 `source` 变化后执行异步渲染，并通过通用预览事件把加载成功、加载失败、下载点击与数据清空行为继续向外层透传。
 * 当前实现会先校验 `source` 是否为 `ArrayBuffer`；若为空或不是 `ArrayBuffer`，会提示文件为空并触发 `loadError`。
 *
 * @attr {ArrayBuffer|string} source 文档数据源；类型层面兼容 `ArrayBuffer` / `string`，当前渲染实现实际依赖 `ArrayBuffer`
 * @attr {Function} onClose 关闭预览时的回调函数
 *
 * @event loadComplete 文档渲染完成后触发
 * @event loadError 文档渲染失败或数据源不合法时触发
 * @event update:source 点击关闭按钮后触发，用于将外部 `source` 重置为空数组
 * @event onDownload 点击下载按钮后触发，参数来自透传的 `downloadData`
 */
import { useNamespace } from '@cpo/_hooks/useNamespace';
import { docxProps } from './types';
import { previewEmits, fileEmpty } from '@cpo/_constants/previewType';
import { isArrayBuffer } from '@cpo/_utils/check';

const ns = useNamespace('docx');
const comClass: string = ns.b();

const docxPromise = () => import('docx-preview');

const props = defineProps(docxProps);

const emits = defineEmits(previewEmits);

const attrs = useAttrs();

const hasDownload = computed(() => {
  return attrs['has-download'] || attrs['hasDownload'];
});

const downloadLoading = computed(() => {
  return attrs['download-loading'] || attrs['downloadLoading'] || false;
});

const docxRef = ref();

watch(
  () => props.source,
  val => {
    if (val) {
      updateDocx(val);
    }
  },
  {
    immediate: true,
    deep: true
  }
);

async function updateDocx(val: ArrayBuffer | String) {
  if (!val || !isArrayBuffer(val)) {
    ElMessage.error(fileEmpty);
    emits('loadError');
    return;
  }

  const docx = await docxPromise();
  docx
    .renderAsync(val, docxRef.value, docxRef.value, {
      className: 'docx', //class name/prefix for default and document style classes
      inWrapper: true, //enables rendering of wrapper around document content
      ignoreWidth: false, //disables rendering width of page
      ignoreHeight: true, //disables rendering height of page
      ignoreFonts: false, //disables fonts rendering
      breakPages: false, //enables page breaking on page breaks
      ignoreLastRenderedPageBreak: false, //disables page breaking on lastRenderedPageBreak elements
      experimental: false, //enables experimental features (tab stops calculation)
      trimXmlDeclaration: true, //if true, xml declaration will be removed from xml documents before parsing
      useBase64URL: false, //if true, images, fonts, etc. will be converted to base 64 URL, otherwise URL.createObjectURL is used
      renderChanges: false, //enables experimental rendering of document changes (inserions/deletions)
      renderHeaders: true, //enables headers rendering
      renderFooters: true, //enables footers rendering
      renderFootnotes: true, //enables footnotes rendering
      renderEndnotes: true, //enables endnotes rendering
      debug: false //enables additional logging
    })
    .then(() => {
      emits('loadComplete');
    })
    .catch(() => {
      emits('loadError');
    });
}

const closeFunc = () => {
  props.onClose && props.onClose();
  emits('update:source', []);
};

function onDownload() {
  emits('onDownload', attrs.downloadData);
}
</script>

<template>
  <div :class="comClass">
    <span :class="[ns.e('btn'), ns.e('close')]" @click="closeFunc">
      <LSIcon name="Close" :size="24" color="#FFF" />
    </span>
    <span v-if="hasDownload" :class="[ns.e('btn'), ns.e('download')]" @click="onDownload">
      <LSIcon
        :class="{ 'is-loading': downloadLoading }"
        :name="`${downloadLoading ? 'Loading' : 'Download'}`"
        :size="24"
        color="#FFF"
      />
    </span>
    <div ref="docxRef"></div>
  </div>
</template>

<style lang="scss" scoped>
@mixin op-icon() {
  width: 44px;
  height: 44px;
  font-size: 24px;
  color: #ffffff;
  background-color: #606266;
  border-color: #ffffff;
}
.ls-docx__btn {
  position: absolute;
  z-index: 1;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  border-radius: 50%;
  opacity: 0.8;
  .ls-icon {
    font-size: inherit;
    cursor: pointer;
  }
  &.ls-docx__close {
    top: 40px;
    right: 40px;
    width: 40px;
    height: 40px;
    font-size: 40px;

    @include op-icon;
  }
  &.ls-docx__download {
    top: 100px;
    right: 40px;
    z-index: 3;
    width: 40px;
    height: 40px;
    font-size: 40px;

    @include op-icon;
  }
}
:deep(.docx-wrapper) {
  background-color: transparent !important;
  .docx_3 {
    border: none !important;
  }
}
</style>
