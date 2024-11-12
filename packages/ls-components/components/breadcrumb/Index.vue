<script setup lang="ts" name="LSBreadcrumb">
import { useNamespace } from '@cpo/_hooks/useNamespace';
import { lsBreadcrumbProp } from './types';
import useRouterHook from '@cpo/_hooks/useRouterHook';
import type { JumpParamsType } from '@cpo/menu/types';
import { RouteMeta } from 'vue-router';

const props = defineProps(lsBreadcrumbProp);

const { jumpRouteCom, currentRouter } = useRouterHook();

const ns = useNamespace('breadcrumb');
const comClass: string = ns.b();

function isBCList(obj: unknown): obj is Array<JumpParamsType> {
  return typeof obj === 'object' && obj !== null;
}

const updateBCList = () => {
  const { bcList }: RouteMeta = currentRouter?.value?.meta || {};
  if (isBCList(bcList)) {
    return bcList;
  }
  return [];
};

const curBCList: any = computed(() => {
  if (props.defineList && props.defineList.length > 0) {
    return props.defineList;
  }
  return updateBCList();
});

function jumpLink(item: JumpParamsType) {
  const { link } = item;
  if (link) {
    window.open(link, '_blank');
  } else {
    jumpRouteCom(item);
  }
}
</script>

<template>
  <div v-if="curBCList && curBCList.length > 0" :class="comClass">
    <p class="pos">当前位置：</p>
    <el-breadcrumb v-bind="$attrs">
      <el-breadcrumb-item v-for="(item, i) in curBCList" :key="i" :class="{ 'has-jump': item.name }" @click="jumpLink(item)">{{
        item.title
      }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<style lang="scss" scoped>
.ls-breadcrumb {
  display: flex;
  align-items: center;
  padding: 0 0 20px;
  line-height: 20px;
  .el-breadcrumb,
  .pos {
    height: 20px;
    line-height: 20px;
  }
  .el-breadcrumb__item {
    &.has-jump {
      cursor: pointer;
      :deep(.el-breadcrumb__inner) {
        color: var(--el-color-primary);
      }
    }
    &:last-child {
      :deep(.el-breadcrumb__inner) {
        color: var(--el-color-info);
      }
    }
  }
}
</style>
