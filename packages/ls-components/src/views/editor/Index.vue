<script setup lang="ts">
const uploadServer = ref('http://icds-admin.test.sh.energy-blockchain.com/v1/proof/data-ownership');

const lsEditorRef = ref();

function onClick() {
  const editor = lsEditorRef.value.editorRef;
  console.log(editor.getHtml());
}
</script>

<template>
  <div>
    <LSEditor ref="lsEditorRef" :upload-server="uploadServer" />

    <LSButton type="primary" @click="onClick"> 提交 </LSButton>
  </div>
</template>

<style lang="scss" scoped></style>
