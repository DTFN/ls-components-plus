<script setup lang="ts">
import { Edit } from '@element-plus/icons-vue';
import SvgIconVue from '@/assets/vue.svg';
import SvgIconCount from '@/assets/count.svg';
import SvgIconDataIcv from '@/assets/data_icv.svg';

const iconName = ref('iconoir:fish');
const separatorColor = ref('red');

setTimeout(() => {
  separatorColor.value = 'blue';
  iconName.value = 'game-icons:whale-tail';
}, 2000);
</script>

<template>
  <div>
    <LSButton :icon="Edit" :loading="true">按钮1</LSButton>
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

    <LSIcon :type="1" name="iconoir:fish" width="30" height="30" color="red" />
    <LSIcon name="HomeFilled" color="blue" />
    <LSIcon>
      <el-icon size="20">
        <Edit />
      </el-icon>
    </LSIcon>
    <LSIcon :type="2" :name="SvgIconVue" width="30" height="30" color="yellow" />
    <LSIcon :type="2" :name="SvgIconCount" width="30" height="30" color="orange" />
    <LSIcon :type="2" :name="SvgIconDataIcv" width="30" height="30" color="green" />
    <SvgIconVue />
    <LSIcon width="30" height="30">
      <SvgIconVue />
    </LSIcon>
  </div>
</template>

<style lang="scss" scoped></style>
