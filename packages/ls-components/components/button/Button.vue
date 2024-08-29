<script setup lang="ts" name="LSButton">
import { lsBtnProp } from './types';

const btnClass = '';

console.log(lsBtnProp);
</script>

<template>
  <el-button v-bind="$attrs" :class="btnClass">
    <slot></slot>
  </el-button>
</template>

<style lang="scss" scoped></style>
