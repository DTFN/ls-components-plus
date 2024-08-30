<script setup lang="ts" name="LSButtonGroup">
const btnClass = computed(() => {
  return 'ls-button-group';
});
</script>

<template>
  <el-button-group v-bind="$attrs" :class="btnClass">
    <slot></slot>
  </el-button-group>
</template>

<style lang="scss" scoped>
@import '@cpo/_style/button.scss';
</style>
