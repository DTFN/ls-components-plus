<script setup lang="ts" name="LSMenu">
import { useNamespace } from '@cpo/_hooks/useNamespace';
import { lsMenuProps, lsEmitNames, MenuBaseType } from './types';
import useRouterHook from '@cpo/_hooks/useRouterHook';
import MenuItem from './MenuItem.vue';

const { currentRouter } = useRouterHook();

const ns = useNamespace('menu');
const comClass: string = ns.b();

const props = defineProps(lsMenuProps);

const emits = defineEmits(lsEmitNames);

const useAttr = useAttrs();

const isInit = ref(false);
const selectedKeys: Ref<string> = ref('');
const lsComMenuRef = ref();

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

watch(
  () => useAttr['default-active'],
  async val => {
    if (val) {
      await nextTick();
      updateActiveClass(val.toString());
    }
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

function onJump(item: MenuBaseType) {
  emits('onJump', item);
}

function defineSubClickFunc(item: MenuBaseType) {
  const { key } = item;
  updateActiveClass(key);
  emits('defineSubClick', item);
}

function defineChildClickFunc(item: MenuBaseType) {
  const { key } = item;
  updateActiveClass(key);
  emits('defineChildClick', item);
}

function updateActiveClass(index: string | undefined) {
  if (lsComMenuRef.value) {
    let isExists = false;
    const subMenuDom = lsComMenuRef.value.$el.querySelectorAll('.el-sub-menu');
    const menuItemDom = lsComMenuRef.value.$el.querySelectorAll('.el-menu-item');
    const subActiveCss = 'is-sub-active';
    const menuActiveCss = 'is-active';
    menuItemDom.forEach((n: any) => {
      const classNames = Array.from(n.classList);
      if (classNames.includes(menuActiveCss)) {
        n.classList.remove(menuActiveCss);
      }
      if (index === n.dataset.index) {
        isExists = true;
        n.classList.add(menuActiveCss);
      }
    });
    subMenuDom.forEach((n: any) => {
      const classNames = Array.from(n.classList);
      if (classNames.includes(subActiveCss)) {
        n.classList.remove(subActiveCss);
      }
      if (!isExists && index === n.dataset.index) {
        n.classList.add(subActiveCss);
      }
    });
  }
}

onMounted(() => {
  isInit.value = true;
  initMenuSider();
});

defineExpose({
  lsComMenuRef
});
</script>

<template>
  <el-menu ref="lsComMenuRef" v-bind="$attrs" :class="comClass" :default-active="selectedKeys">
    <MenuItem
      v-for="item in menuConfigList"
      :key="item['key']"
      :item="item"
      :permission-list="permissionList"
      :need-permission="needPermission"
      :is-define-click="isDefineClick"
      :show-tooltip="showTooltip"
      @on-jump="onJump"
      @define-sub-click="defineSubClickFunc"
      @define-child-click="defineChildClickFunc"
    >
      <template #[item.iconSlot]><slot :name="item.iconSlot"></slot></template>
    </MenuItem>
  </el-menu>
</template>

<style lang="scss" scoped>
.ls-menu {
  &.el-menu {
    height: auto;
    border-right: 0;
    :deep(.el-sub-menu) {
      .el-menu--inline {
        background-color: #f4f4f4;
      }
      .ls-icon {
        margin-right: 6px;
      }
      &.is-sub-active {
        > .el-sub-menu__title {
          color: var(--el-menu-active-color);
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
    :deep(.el-menu-item) {
      position: relative;
      .ls-icon {
        margin-right: 6px;
      }
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
  :deep(.el-sub-menu) {
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
      .menu-title {
        width: 100%;
        p {
          @extend %text-ellipsis;

          width: calc(100% - 24px);
        }
      }
    }
  }
  :deep(> .el-menu-item),
  :deep(.el-sub-menu__title) {
    & [class^='ls-icon'],
    [class^='el-icon'] {
      width: auto !important;
    }
    & [class^='el-icon'] {
      margin-right: 0;
    }
    &:hover {
      background-color: var(--el-fill-color-light);
      outline: none;
      .ls-icon,
      span {
        color: v-bind(hoverColor);
        svg {
          color: v-bind(hoverColor);
        }
      }
    }
  }
}
</style>
