<script setup lang="ts" name="LSMenu">
/**
 * @summary 菜单组件 - 基于 `el-menu` 的二次封装
 *
 * `LSMenu` 用于渲染多级导航菜单，保留 Element Plus `el-menu` 的原生属性、事件与方法，
 * 并额外补充菜单配置模型、权限过滤、自定义点击回调、hover 颜色与 tooltip 能力。
 * 组件内部会递归渲染 `menuConfigList`，并通过 `$attrs` 透传 `default-active`、`collapse`、
 * `mode`、`unique-opened` 等 `el-menu` 原生能力。
 *
 * 自有属性：
 * @attr {Array<MenuBaseType>} menuConfigList 菜单配置列表，必填
 * @attr {boolean} needPermission 是否开启权限过滤；开启后结合 `permissionList` 与菜单项 `pCode` 控制显示，默认 `false`
 * @attr {Array<string|number>} permissionList 权限列表，内部存放菜单权限码，默认 `[]`
 * @attr {string} hoverColor 菜单 hover 时的文字和图标颜色，默认 `''`
 * @attr {boolean} isDefineClick 菜单点击是否改为自定义处理；为 `true` 时触发 `defineSubClick` / `defineChildClick`，默认 `false`
 * @attr {boolean} showTooltip 鼠标移入菜单项时是否显示 tooltip 提示，默认 `true`
 * @attr {number} fontSize 菜单字体大小；用于内部 tooltip 组件，默认 `14`
 *
 * @slot [iconSlot] 动态图标插槽名；当菜单项配置 `iconSlot` 时渲染对应具名插槽
 *
 * @event onJump(item) 菜单点击自定义处理事件；当菜单项 `defJump=true` 时触发
 * @event defineSubClick(item) 点击子菜单标题时触发；仅在 `isDefineClick=true` 时生效
 * @event defineChildClick(item) 点击子菜单项时触发；仅在 `isDefineClick=true` 时生效
 *
 * @expose lsComMenuRef 内部 `el-menu` 实例引用，可用于访问保留的方法
 *
 * @example
 * <LSMenu :menu-config-list="MENU_CONFIG_LIST" class="menu-wrap" />
 *
 * @example
 * <LSMenu
 *   :menu-config-list="MENU_CONFIG_LIST"
 *   :need-permission="true"
 *   :permission-list="['c1', 'c2', 'c21', 'c22']"
 *   class="menu-wrap"
 * />
 *
 * @example
 * <LSMenu
 *   :menu-config-list="MENU_CONFIG_LIST2"
 *   :is-define-click="true"
 *   :default-active="defaultActive"
 *   @define-sub-click="defineSubClickFunc"
 *   @define-child-click="defineChildClickFunc"
 * />
 */

import type { MenuBaseType } from './types'
import { lsMenuKey } from '@cpo/_constants/token'
import { useNamespace } from '@cpo/_hooks/useNamespace'
import useRouterHook from '@cpo/_hooks/useRouterHook'
import MenuItem from './MenuItem.vue'
import { lsEmitNames, lsMenuProps } from './types'

const props = defineProps(lsMenuProps)

const emits = defineEmits(lsEmitNames)

const { currentRouter } = useRouterHook()

const ns = useNamespace('menu')
const comClass: string = ns.b()

const useAttr = useAttrs()

provide(lsMenuKey, { fontSize: props.fontSize })

const isInit = ref(false)
const selectedKeys: Ref<string> = ref('')
const lsComMenuRef = ref()

watch(
  () => props.permissionList,
  (nVal) => {
    if (props.needPermission && nVal && nVal.length > 0) {
      initMenuSider()
    }
  },
  {
    immediate: true,
    deep: true,
  },
)

watch(
  () => currentRouter.value,
  () => {
    initMenuSider()
  },
  {
    immediate: true,
    deep: true,
  },
)

watch(
  () => useAttr['default-active'],
  async (val) => {
    if (val) {
      await nextTick()
      updateActiveClass(val.toString())
    }
  },
  {
    immediate: true,
    deep: true,
  },
)

function initMenuSider() {
  if (!isInit.value) {
    return
  }
  const { meta }: any = currentRouter?.value || {}
  selectedKeys.value = meta?.key || '1'
}

function onJump(item: MenuBaseType) {
  emits('onJump', item)
}

function defineSubClickFunc(item: MenuBaseType) {
  const { key } = item
  updateActiveClass(key)
  emits('defineSubClick', item)
}

function defineChildClickFunc(item: MenuBaseType) {
  const { key } = item
  updateActiveClass(key)
  emits('defineChildClick', item)
}

function updateActiveClass(index: string | undefined) {
  if (lsComMenuRef.value) {
    let isExists = false
    const subMenuDom = lsComMenuRef.value.$el.querySelectorAll('.el-sub-menu')
    const menuItemDom = lsComMenuRef.value.$el.querySelectorAll('.el-menu-item')
    const subActiveCss = 'is-sub-active'
    const menuActiveCss = 'is-active'
    menuItemDom.forEach((n: any) => {
      const classNames = Array.from(n.classList)

      if (classNames.includes(menuActiveCss)) {
        n.classList.remove(menuActiveCss)
      }

      if (index === n.dataset.index) {
        isExists = true
        n.classList.add(menuActiveCss)
      }
    })
    subMenuDom.forEach((n: any) => {
      const classNames = Array.from(n.classList)

      if (classNames.includes(subActiveCss)) {
        n.classList.remove(subActiveCss)
      }

      if (!isExists && index === n.dataset.index) {
        n.classList.add(subActiveCss)
      }
    })
  }
}

onMounted(() => {
  isInit.value = true
  initMenuSider()
})

defineExpose({
  lsComMenuRef,
})
</script>

<template>
  <el-menu ref="lsComMenuRef" :default-active="selectedKeys" v-bind="$attrs" :class="comClass">
    <MenuItem
      v-for="item in menuConfigList"
      :key="item.key"
      :item="item"
      :permission-list="permissionList"
      :need-permission="needPermission"
      :is-define-click="isDefineClick"
      :show-tooltip="showTooltip"
      @on-jump="onJump"
      @define-sub-click="defineSubClickFunc"
      @define-child-click="defineChildClickFunc"
    >
      <template #[item.iconSlot]>
        <slot :name="item.iconSlot"></slot>
      </template>
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
