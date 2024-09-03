<script setup lang="ts" name="LSImage">
const defAttrs: any = reactive({
  'zoom-rate': 1.5,
  'max-scale': 6,
  'min-scale': 0.3,
  fit: 'cover'
});
</script>

<template>
  <div class="ls-image-preview">
    <el-image v-bind="Object.assign(defAttrs, $attrs)" />
  </div>
</template>

<style lang="scss" scoped></style>
