<script setup lang="ts" name="LSMenu">
/**
 * @summary 菜单组件 - 基于 Element Plus Menu 的二次封装
 *
 * 这是自研库的标准导航菜单组件，支持多级菜单、权限控制、路由集成等功能。
 * 提供了灵活的菜单配置和丰富的自定义选项，适用于企业级后台管理系统。
 *
 * @attr {array} menuConfigList - 菜单配置列表，包含菜单项的所有配置信息
 * @attr {string} fontSize - 菜单字体大小 (默认: '14px')
 * @attr {boolean} needPermission - 是否需要权限控制 (默认: false)
 * @attr {array} permissionList - 权限列表，用于控制菜单项的显示与隐藏
 * @attr {boolean} isDefineClick - 是否使用自定义点击事件处理 (默认: false)
 * @attr {boolean} showTooltip - 是否显示工具提示 (默认: false)
 * @attr {string} default-active - 当前激活菜单的 key 值
 * @attr {string} mode - 菜单模式 (vertical/horizontal)，支持垂直和水平布局
 * @attr {boolean} collapse - 是否水平折叠收起菜单 (仅在 mode 为 vertical 时可用)
 * @attr {boolean} unique-opened - 是否只保持一个子菜单的展开 (默认: false)
 * @attr {string} menu-trigger - 子菜单打开的触发方式 (hover/click)
 * @attr {string} router - 是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转 (默认: false)
 * @attr {string} background-color - 菜单的背景色 (默认: #ffffff)
 * @attr {string} text-color - 菜单的文字颜色 (默认: #303133)
 * @attr {string} active-text-color - 当前激活菜单的文字颜色 (默认: #409EFF)
 * @attr {string} default-openeds - 当前打开的 sub-menu 的 key 数组
 *
 * @slot - 默认插槽，用于放置菜单内容
 * @slot icon - 图标插槽，用于自定义菜单图标
 * @slot title - 标题插槽，用于自定义菜单标题
 * @slot submenu - 子菜单插槽，用于自定义子菜单内容
 *
 * @event onJump - 菜单跳转事件，点击菜单项时触发，返回菜单项数据
 * @event defineSubClick - 子菜单点击事件，点击子菜单时触发
 * @event defineChildClick - 子菜单项点击事件，点击子菜单项时触发
 * @event select - 菜单选中事件，菜单项被选中时触发
 * @event open - sub-menu 展开的回调
 * @event close - sub-menu 收起的回调
 *
 * @csspart menu - 菜单主体容器
 * @csspart menu-item - 菜单项元素
 * @csspart sub-menu - 子菜单容器
 * @csspart menu-icon - 菜单图标
 * @csspart menu-title - 菜单标题
 *
 * @example
 * <!-- 基础用法 -->
 * <LSMenu :menu-config-list="menuList" />
 *
 * @example
 * <!-- 权限控制 -->
 * <LSMenu
 *   :menu-config-list="menuList"
 *   :need-permission="true"
 *   :permission-list="['user:view', 'user:add']"
 * />
 *
 * @example
 * <!-- 自定义点击事件 -->
 * <LSMenu
 *   :menu-config-list="menuList"
 *   :is-define-click="true"
 *   @onJump="handleMenuJump"
 * />
 *
 * @example
 * <!-- 多级菜单 -->
 * <LSMenu :menu-config-list="menuList">
 *   <template #icon="{ item }">
 *     <el-icon><component :is="item.icon" /></el-icon>
 *   </template>
 * </LSMenu>
 *
 * @example
 * <!-- 菜单项配置 -->
 * const menuList = [
 *   {
 *     key: '1',
 *     title: '仪表盘',
 *     icon: 'Odometer',
 *     path: '/dashboard',
 *     children: [
 *       {
 *         key: '1-1',
 *         title: '分析页',
 *         path: '/dashboard/analysis'
 *       }
 *     ]
 *   }
 * ];
 */

import { useNamespace } from '@cpo/_hooks/useNamespace';
import { lsMenuProps, lsEmitNames, MenuBaseType } from './types';
import useRouterHook from '@cpo/_hooks/useRouterHook';
import MenuItem from './MenuItem.vue';
import { lsMenuKey } from '@cpo/_constants/token';

const { currentRouter } = useRouterHook();

const ns = useNamespace('menu');
const comClass: string = ns.b();

const props = defineProps(lsMenuProps);

const emits = defineEmits(lsEmitNames);

const useAttr = useAttrs();

provide(lsMenuKey, { fontSize: props.fontSize });

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
  <el-menu ref="lsComMenuRef" :default-active="selectedKeys" v-bind="$attrs" :class="comClass">
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
        width: auto !important;
        margin-right: 6px;
        .el-icon {
          width: auto !important;
        }
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
        box-sizing: border-box;
        width: 100%;
        p {
          @extend %text-ellipsis;

          width: 100%;
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
