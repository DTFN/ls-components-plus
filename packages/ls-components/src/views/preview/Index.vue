<script setup lang="ts">
const type = ref('image');
const source: any = ref([
  'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
  'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
  'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg'
]);
const showViewer = ref(false);

function closeViewer() {
  showViewer.value = false;
  source.value = '';
}
</script>

<template>
  <div>
    <div>
      <LSButton type="primary" @click="showViewer = true">图片预览</LSButton>
    </div>
    <LSPreview v-model="showViewer" :on-close="closeViewer" :type="type" :source="source" />
  </div>
</template>

<style lang="scss" scoped></style>
