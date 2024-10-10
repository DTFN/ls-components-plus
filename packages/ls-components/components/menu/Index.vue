<script setup lang="ts" name="LSMenu">
import { useNamespace } from '@cpo/_hooks/useNamespace';
import { lsMenuProps } from './types';
import useRouterHook from '@cpo/_hooks/useRouterHook';
import MenuItem from './MenuItem.vue';

const { currentRouter } = useRouterHook();

const ns = useNamespace('menu');
const comClass: string = ns.b();

const props = defineProps(lsMenuProps);

const isInit = ref(false);
const selectedKeys: Ref<string> = ref('');

watch(
  () => props.permissionList,
  nVal => {
    if (props.needPermission && nVal && nVal.length > 0) {
      initMenuSider();
    }
  },
  {
    immediate: true,
    deep: true
  }
);

watch(
  () => currentRouter.value,
  () => {
    initMenuSider();
  },
  {
    immediate: true,
    deep: true
  }
);

function initMenuSider() {
  if (!isInit.value) {
    return;
  }
  const { meta }: any = currentRouter?.value || {};
  selectedKeys.value = meta?.key || '1';
}

onMounted(() => {
  isInit.value = true;
  initMenuSider();
});
</script>

<template>
  <el-menu v-bind="$attrs" :class="comClass" :default-active="selectedKeys">
    <MenuItem
      v-for="item in menuConfigList"
      :key="item['key']"
      :item="item"
      :permission-list="permissionList"
      :need-permission="needPermission"
    />
  </el-menu>
</template>

<style lang="scss" scoped>
.ls-menu {
  &.el-menu {
    height: 100%;
    border-right: 0;
    :deep(.el-sub-menu) {
      .el-menu--inline {
        background-color: #f4f4f4;
      }
    }
    :deep() .el-menu-item {
      position: relative;
      &:hover {
        background-color: var(--el-fill-color-light);
        outline: none;
      }
      &.is-active {
        background-color: var(--bg-color-primary) !important;
        &::before {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          width: 4px;
          content: '';
          background-color: var(--el-color-primary);
        }
      }
    }
  }
  :deep() {
    .el-sub-menu {
      .el-menu-item {
        span {
          position: relative;
          display: inline-block;
          padding-left: 10px;
          &::before {
            position: absolute;
            top: 50%;
            left: -10px;
            width: 5px;
            height: 5px;
            content: '';
            background: #303133;
            border-radius: 100%;
            transform: translateY(-50%);
          }
        }
        &.is-active {
          span {
            &::before {
              background: var(--el-color-primary);
            }
          }
        }
      }
    }
  }
}
</style>
