<script setup lang="ts">
import { Edit } from '@element-plus/icons-vue';

const iconName = ref('iconoir:fish');
const separatorColor = ref('red');

setTimeout(() => {
  separatorColor.value = 'blue';
  iconName.value = 'game-icons:whale-tail';
}, 2000);
</script>

<template>
  <div>
    <LSButton :icon="Edit">按钮1</LSButton>
    <LSButton icon-name="iconoir:fish" :icon-type="2">按钮2</LSButton>

    <br />

    <LSButtonGroup type="primary" :separator="1" :separator-color="separatorColor" :separator-size="12">
      <LSButton :icon="Edit" link>按钮3</LSButton>
      <LSButton :icon-name="iconName" :icon-type="2" link>按钮4</LSButton>
      <LSButton link>按钮5</LSButton>
    </LSButtonGroup>

    <br />

    <LSButtonGroup type="primary" :separator="2" :separator-color="'green'" :separator-size="16">
      <LSButton :icon="Edit" link>按钮6</LSButton>
      <LSButton :icon-name="iconName" :icon-type="2" link>按钮7</LSButton>
      <LSButton link>按钮8</LSButton>
    </LSButtonGroup>
  </div>
</template>

<style lang="scss" scoped></style>
