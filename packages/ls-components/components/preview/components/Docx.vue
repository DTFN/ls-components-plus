<script setup lang="ts" name="LSDocx">
import { useNamespace } from '@cpo/_hooks/useNamespace';
import { docxProps, imageViewerEmits } from '../types';

const ns = useNamespace('docx');
const comClass: string = ns.b();

const docxPromise = () => import('docx-preview');

const props = defineProps(docxProps);

const emits = defineEmits(imageViewerEmits);

const docxRef = ref();

watch(
  () => props.source,
  val => {
    updateDocx(val);
  }
);

async function updateDocx(val: ArrayBuffer) {
  if (!val) {
    ElMessage.error('Word文档地址不能为空且格式必须是ArrayBuffer');
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
      breakPages: true, //enables page breaking on page breaks
      ignoreLastRenderedPageBreak: true, //disables page breaking on lastRenderedPageBreak elements
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
    .then(res => {
      emits('loadComplete');
      console.log(res);
    })
    .catch(() => {
      emits('loadError');
    });
}
</script>

<template>
  <div :class="comClass">
    <div ref="docxRef"></div>
  </div>
</template>

<style lang="scss" scoped></style>
