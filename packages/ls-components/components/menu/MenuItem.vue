<script setup lang="ts" name="LSMenuItem">
/**
 * @summary 菜单项组件 - `LSMenu` 的递归子项渲染器
 *
 * `MenuItem` 是 `LSMenu` 的内部子组件，负责按菜单配置递归渲染 `el-menu-item` 或 `el-sub-menu`。
 * 当菜单项不存在 `children` 或显式标记 `leaf=true` 时渲染为普通菜单项；否则渲染子菜单。
 * 组件同时处理 3 类点击行为：默认路由跳转、外链打开，以及 `defJump` / `isDefineClick` 对应的自定义事件分发。
 *
 * @attr {MenuBaseType} item 当前菜单项配置
 * @attr {boolean} needPermission 是否开启权限过滤；开启后结合 `permissionList` 与 `item.pCode` 控制显示
 * @attr {Array<string|number>} permissionList 权限列表
 * @attr {boolean} isDefineClick 是否启用自定义点击模式
 * @attr {boolean} showTooltip 是否为叶子菜单标题启用 tooltip
 *
 * @slot [iconSlot] 动态图标插槽名；当 `item.iconSlot` 存在时渲染对应插槽
 *
 * @event onJump(item) 菜单项 `defJump=true` 时向外层继续抛出
 * @event defineSubClick(item) 点击子菜单标题时向外层继续抛出
 * @event defineChildClick(item) 点击叶子菜单项且 `isDefineClick=true` 时向外层继续抛出
 */
import LSIcon from '@cpo/icon/Index.vue';
import LSTooltip from '@cpo/tooltip/Index.vue';
import { lsEmitNames, lsMenuItemProps, MenuBaseType } from './types';
import useRouterHook from '@cpo/_hooks/useRouterHook';
import { lsMenuKey } from '@cpo/_constants/token';

const { jumpRouteCom } = useRouterHook();

const emits = defineEmits(lsEmitNames);

const props = defineProps(lsMenuItemProps);

const menuProps = inject(lsMenuKey) as {
  fontSize: number;
};

const jumpRoute = (index: string, item: MenuBaseType) => {
  if (props.isDefineClick) {
    defineChildClickFunc(item);
  } else {
    const { link, defJump } = item || {};
    if (defJump) {
      emits('onJump', item);
    } else {
      if (!link) {
        jumpRouteCom(item);
      } else {
        window.open(link, '_blank');
      }
    }
  }
};

function onJump(item: MenuBaseType) {
  emits('onJump', item);
}

function defineSubClickFunc(item: MenuBaseType) {
  if (props.isDefineClick) {
    emits('defineSubClick', item);
  }
}

function defineChildClickFunc(item: MenuBaseType) {
  if (props.isDefineClick) {
    emits('defineChildClick', item);
  }
}
</script>

<template id="menu-item">
  <template v-if="!needPermission || permissionList.includes(item.pCode)">
    <!-- 无子菜单项 -->
    <div v-if="!item.children || item.leaf" @click.stop>
      <el-menu-item :index="item['key']" :data-index="item['key']" @click="jumpRoute(item['key'], item as MenuBaseType)">
        <LSIcon v-bind="item.iconConfig">
          <template v-if="item.iconSlot" #default>
            <slot :name="item.iconSlot"> </slot>
          </template>
        </LSIcon>
        <template #title>
          <LSTooltip v-if="showTooltip" :content="item.title" placement="right" :font-size="menuProps?.fontSize">
            <span class="menu-title">
              <p>{{ item.title }}</p></span
            >
          </LSTooltip>
          <span v-else class="menu-title">
            <p>{{ item.title }}</p></span
          >
        </template>
      </el-menu-item>
    </div>
    <!-- 有子菜单 -->
    <el-sub-menu v-else :index="item['key']" :data-index="item['key']" @click.stop="defineSubClickFunc(item as MenuBaseType)">
      <template #title>
        <LSIcon v-bind="item.iconConfig">
          <template v-if="item.iconSlot" #default>
            <slot :name="item.iconSlot"> </slot>
          </template>
        </LSIcon>
        <span>{{ item.title }}</span>
      </template>
      <MenuItem
        v-for="child in item.children"
        :key="child['key']"
        :item="child"
        :permission-list="permissionList"
        :need-permission="needPermission"
        :is-define-click="isDefineClick"
        :show-tooltip="showTooltip"
        @on-jump="onJump"
        @define-sub-click="defineSubClickFunc"
        @define-child-click="defineChildClickFunc"
      />
    </el-sub-menu>
  </template>
</template>

<style lang="scss" scoped></style>
