<script setup lang="ts" name="LSBreadcrumb">
/**
 * @summary 面包屑组件 - 导航路径展示
 *
 * 这是自研库的标准面包屑组件，用于显示当前页面的导航路径。
 * 支持自动路由解析和自定义路径列表，支持点击跳转和新窗口打开。
 *
 * @attr {any[]} defineList - 自定义面包屑列表
 * @attr {boolean} showPos - 是否显示位置前缀
 * @attr {string} posTitle - 位置前缀文本
 *
 * @event 无
 *
 * @csspart breadcrumb - 面包屑容器
 *
 * @example
 * <!-- 自动路由面包屑 -->
 * <LSBreadcrumb />
 *
 * @example
 * <!-- 自定义面包屑 -->
 * <LSBreadcrumb
 *   :defineList="[
 *     { title: '首页', path: '/' },
 *     { title: '用户管理', path: '/users' },
 *     { title: '用户详情' }
 *   ]"
 * />
 *
 * @example
 * <!-- 显示位置前缀 -->
 * <LSBreadcrumb showPos posTitle="当前位置" />
 */
import { useNamespace } from '@cpo/_hooks/useNamespace';
import { lsBreadcrumbProp } from './types';
import useRouterHook from '@cpo/_hooks/useRouterHook';
import type { JumpParamsType } from '@cpo/menu/types';
import { RouteMeta } from 'vue-router';
import type { BreadCrumpListType } from './types';

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

const curBCList: ComputedRef<BreadCrumpListType | unknown[]> = computed(() => {
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
    <p v-if="props.showPos" class="pos">{{ posTitle }}：</p>
    <el-breadcrumb v-bind="$attrs">
      <el-breadcrumb-item
        v-for="(item, i) in curBCList as BreadCrumpListType"
        :key="i"
        :class="{ 'has-jump': item.name }"
        @click="jumpLink(item)"
        >{{ item.title }}</el-breadcrumb-item
      >
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
    font-size: 14px;
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
