<script setup lang="ts" name="LSBreadcrumb">
/**
 * @summary 面包屑组件 - 导航路径展示
 *
 * 基于 Element Plus `el-breadcrumb` 的二次封装组件，用于展示当前页面层级路径。
 * 默认从当前路由 `meta.bcList` 自动渲染，也支持通过 `defineList` 自定义数据；
 * 当项中存在 `name` 时执行路由跳转，存在 `link` 时在新窗口打开外链，其余项仅作文本展示。
 *
 * @attr {BreadCrumpListType} defineList 自定义面包屑数据，结构与路由 `meta.bcList` 一致
 * @attr {boolean} showPos=true 是否显示“当前位置”前缀
 * @attr {string} posTitle='当前位置' 当前位置前缀文案
 *
 * @event 无
 *
 * @example
 * <!-- 根据当前路由 meta.bcList 自动渲染 -->
 * <LSBreadcrumb />
 *
 * @example
 * <!-- 自定义面包屑 -->
 * <LSBreadcrumb
 *   :define-list="[
 *     { title: '首页', name: 'Home' },
 *     { title: '产品管理' },
 *     { title: '产品详情', name: 'ProductDetail', query: { id: '123' } }
 *   ]"
 * />
 *
 * @example
 * <!-- 隐藏当前位置前缀 -->
 * <LSBreadcrumb :define-list="defineBCList" :show-pos="false" />
 *
 * @example
 * <!-- 自定义当前位置文案 -->
 * <LSBreadcrumb :define-list="defineBCList" pos-title="当前路径" />
 */
import { useNamespace } from '@cpo/_hooks/useNamespace';
import useRouterHook from '@cpo/_hooks/useRouterHook';
import type { JumpParamsType } from '@cpo/menu/types';
import { RouteMeta } from 'vue-router';
import type { BreadCrumpListType } from './types';
import { lsBreadcrumbProp } from './types';

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
