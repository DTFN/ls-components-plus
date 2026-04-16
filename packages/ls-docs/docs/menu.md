---
outline: deep
---

# Menu 菜单

::: warning 基于el-menu二次封装，保留原属性和方法。
:::

## 使用方式

### 1. 基本路由模式

<ClientOnly>
<LSMenu :menu-config-list="MENU_CONFIG_LIST" class="menu-wrap" />
</ClientOnly>

::: details 点我查看代码

```js
import { ref } from 'vue'

const MENU_CONFIG_LIST = [
  {
    title: '渔场概览',
    name: 'FisheryOverview',
    path: 'fishery-overview',
    iconConfig: { name: 'House', color: 'red', size: 16 },
    key: '1',
    cpoPath: 'fisheryManager/Overview',
    pCode: 'c1',
    link: 'https://www.lingshu.net/'
  },
  {
    title: '养殖单元管理',
    name: '',
    path: '',
    key: '2',
    cpoPath: '',
    pCode: 'c2',
    children: [
      {
        title: '养殖区域管理',
        name: 'PondGroup',
        path: 'pond-group',
        key: '2-1',
        cpoPath: 'pondManager/Group',
        pCode: 'c21',
        leaf: true,
        children: [
          {
            title: '养殖区域详情',
            name: 'PondGroupDetail',
            path: 'pond-group-detail',
            key: '2-1',
            cpoPath: 'pondManager/GroupDetail',
            pCode: 'c21',
            hideMenu: true
          }
        ]
      },
      {
        title: '养殖池管理',
        name: 'PondManager',
        path: 'pond-manager',
        key: '2-2',
        cpoPath: 'pondManager/Index',
        pCode: 'c22'
      },
      {
        title: '养殖品种',
        name: 'FishCategory',
        path: 'fishCategory',
        key: '2-3',
        cpoPath: 'prodManager/fishCategory/Index',
        pCode: 'c23'
      }
    ]
  },
  {
    title: '规划管理',
    name: 'PlanManager',
    path: 'plan-manager',
    key: '8',
    cpoPath: 'planManager/Index',
    pCode: 'c7',
    leaf: true
  }
]
```

```html
<LSMenu :menu-config-list="MENU_CONFIG_LIST" class="menu-wrap" />
```

:::

### 2. 自定义点击事件

<ClientOnly>
<div style="position: relative">
  <LSMenu
    :menu-config-list="MENU_CONFIG_LIST2"
    style="max-width: 200px"
    :collapse="false"
    :is-define-click="true"
    :default-active="defaultActive"
    @define-sub-click="defineSubClickFunc"
    @define-child-click="defineChildClickFunc"
  >
  </LSMenu>

  <ul class="block-list">
    <li :class="{ active: blockIndex == 0 }" @click="blockClick(0)">渔场概览</li>
    <li :class="{ active: blockIndex == 1 }" @click="blockClick(1)">养殖单元管理</li>
  </ul>
</div>
</ClientOnly>

::: details 点我查看代码

```js
import { ref } from 'vue'

const MENU_CONFIG_LIST2 = [
  {
    title: '渔场概览',
    key: '1'
  },
  {
    title: '养殖单元管理',
    key: '2',
    children: [
      {
        title: '养殖区域管理',
        key: '2-1'
      },
      {
        title: '养殖池管理',
        key: '2-2'
      },
      {
        title: '养殖品种',
        key: '2-3'
      }
    ]
  }
]
const blockIndex = ref(0)
const defaultActive = ref('1')

function blockClick(val) {
  blockIndex.value = val
  defaultActive.value = (val + 1).toString()
}

function defineSubClickFunc(item) {
  const { key } = item
  blockIndex.value = key?.split('-')[0] - 1
  defaultActive.value = key
}

function defineChildClickFunc(item) {
  const { key } = item
  blockIndex.value = key?.split('-')[0] - 1
  defaultActive.value = key
}
```

```html
<div style="position: relative">
  <LSMenu
    :menu-config-list="MENU_CONFIG_LIST2"
    style="max-width: 200px"
    :collapse="false"
    :is-define-click="true"
    :default-active="defaultActive"
    @define-sub-click="defineSubClickFunc"
    @define-child-click="defineChildClickFunc"
  >
  </LSMenu>

  <ul class="block-list">
    <li :class="{ active: blockIndex == 0 }" @click="blockClick(0)">渔场概览</li>
    <li :class="{ active: blockIndex == 1 }" @click="blockClick(1)">养殖单元管理</li>
  </ul>
</div>
```

```scss
.block-list {
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  width: 300px;
  li {
    width: 100px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    cursor: pointer;
    border: 1px solid #eeeeee;
    margin-top: 0;
    &.active {
      color: #ffffff;
      background-color: blue;
    }
  }
}
```

:::

### 3. 带权限控制的菜单

<ClientOnly>
<LSMenu
  :menu-config-list="MENU_CONFIG_LIST"
  :need-permission="true"
  :permission-list="['c1', 'c2', 'c21', 'c22']"
  class="menu-wrap"
/>
</ClientOnly>

::: details 点我查看代码

```js
// 权限列表只包含 c1, c2, c21, c22
const permissionList = ['c1', 'c2', 'c21', 'c22']
```

```html
<LSMenu
  :menu-config-list="MENU_CONFIG_LIST"
  :need-permission="true"
  :permission-list="permissionList"
  class="menu-wrap"
/>
```

:::

### 4. 带自定义字体大小的菜单

<ClientOnly>
<LSMenu
  :menu-config-list="MENU_CONFIG_LIST3"
  :font-size="16"
  class="menu-wrap"
/>
</ClientOnly>

::: details 点我查看代码

```js
const MENU_CONFIG_LIST3 = [
  {
    title: '首页',
    name: 'Home',
    path: 'home',
    iconConfig: { name: 'House', size: 18 },
    key: '1'
  },
  {
    title: '设置',
    name: 'Settings',
    path: 'settings',
    key: '2',
    children: [
      {
        title: '用户设置',
        name: 'UserSettings',
        path: 'user-settings',
        key: '2-1'
      },
      {
        title: '系统设置',
        name: 'SystemSettings',
        path: 'system-settings',
        key: '2-2'
      }
    ]
  }
]
```

```html
<LSMenu :menu-config-list="MENU_CONFIG_LIST3" :font-size="16" class="menu-wrap" />
```

:::

### 5. 禁用 Tooltip 的菜单

<ClientOnly>
<LSMenu
  :menu-config-list="MENU_CONFIG_LIST3"
  :show-tooltip="false"
  class="menu-wrap"
/>
</ClientOnly>

::: details 点我查看代码

```html
<LSMenu :menu-config-list="MENU_CONFIG_LIST3" :show-tooltip="false" class="menu-wrap" />
```

:::

### 6. 带自定义图标的菜单

<ClientOnly>
<LSMenu :menu-config-list="MENU_CONFIG_LIST4" class="menu-wrap">
  <template #custom-icon>
    <el-icon><Setting /></el-icon>
  </template>
</LSMenu>
</ClientOnly>

::: details 点我查看代码

```js
const MENU_CONFIG_LIST4 = [
  {
    title: '首页',
    name: 'Home',
    path: 'home',
    iconConfig: { name: 'House' },
    key: '1'
  },
  {
    title: '设置',
    name: 'Settings',
    path: 'settings',
    key: '2',
    iconSlot: 'custom-icon',
    children: [
      {
        title: '用户设置',
        name: 'UserSettings',
        path: 'user-settings',
        key: '2-1'
      }
    ]
  }
]
```

```html
<LSMenu :menu-config-list="MENU_CONFIG_LIST4" class="menu-wrap">
  <template #custom-icon>
    <el-icon><Setting /></el-icon>
  </template>
</LSMenu>
```

:::

## 菜单配置详解

### 1. 基本配置

```js
const menuItem = {
  // 菜单标题
  title: '菜单名称',

  // 路由名称（用于路由跳转）
  name: 'RouteName',

  // 路由路径
  path: 'route-path',

  // 菜单唯一标识
  key: 'menu-key',

  // 组件路径（用于动态路由生成）
  cpoPath: 'view/component/path',

  // 权限编码
  pCode: 'permission-code',

  // 图标名称（字符串格式，与 iconConfig 二选一）
  icon: 'House',

  // 重定向路径
  redirect: '/redirect-path',

  // 路由元信息
  meta: {
    requiresAuth: true,
    title: '页面标题'
  }
}
```

### 2. 图标配置

```js
// 使用内置图标
const menuWithIcon = {
  title: '菜单名称',
  iconConfig: {
    name: 'House', // 图标名称
    color: '#409EFF', // 图标颜色
    size: 16 // 图标大小
  }
}

// 使用自定义图标插槽
const menuWithCustomIcon = {
  title: '菜单名称',
  iconSlot: 'custom-icon' // 插槽名称
}
```

### 3. 子菜单配置

```js
const menuWithChildren = {
  title: '父菜单',
  key: 'parent-key',
  children: [
    {
      title: '子菜单1',
      key: 'child-key-1'
    },
    {
      title: '子菜单2',
      key: 'child-key-2'
    }
  ]
}
```

### 4. 外链配置

```js
const menuWithLink = {
  title: '外部链接',
  link: 'https://www.example.com' // 配置后会在新窗口打开
}
```

### 5. 图标字符串配置

```js
const menuWithIconString = {
  title: '菜单名称',
  icon: 'House', // 直接使用图标名称，与 iconConfig 二选一
  key: 'menu-key'
}
```

### 6. 权限控制

```js
const menuWithPermission = {
  title: '需要权限的菜单',
  pCode: 'admin-only' // 权限编码
};

// 在组件中使用
<LSMenu
  :menu-config-list="menuList"
  :need-permission="true"
  :permission-list="['admin-only']"
/>
```

### 7. 重定向配置

```js
const menuWithRedirect = {
  title: '带重定向的菜单',
  path: '/dashboard',
  redirect: '/dashboard/overview' // 访问 /dashboard 时自动重定向
}
```

### 8. 特殊配置

```js
const specialMenu = {
  title: '特殊菜单',

  // 是否为叶子菜单（子菜单不显示）
  leaf: true,

  // 是否隐藏该菜单
  hideMenu: false,

  // 是否自定义跳转处理
  defJump: true,

  // 是否显示为图标菜单（收缩时）
  iconSlot: 'custom-icon-name'
}
```

### 5. 权限控制

```js
const menuWithPermission = {
  title: '需要权限的菜单',
  pCode: 'admin-only' // 权限编码
};

// 在组件中使用
<LSMenu
  :menu-config-list="menuList"
  :need-permission="true"
  :permission-list="['admin-only']"
/>
```

### 6. 特殊配置

```js
const specialMenu = {
  title: '特殊菜单',

  // 是否为叶子菜单（子菜单不显示）
  leaf: true,

  // 是否隐藏菜单
  hideMenu: false,

  // 是否自定义跳转处理
  defJump: true
}
```

## 路由生成与管理

### 1. 动态生成路由

::: warning 通过以下方式动态创建路由，适用带权限控制项目
:::

```js
import { useRouterHook } from '@lingshugroup/web-plus/hooks';
const router = useRouter();

const { getMenusByAuth, jumpRouteCom }: any = useRouterHook();

const routesModule = import.meta.glob('/src/views/**/*.vue');
const menus = getMenusByAuth(MENU_CONFIG_LIST, routesModule, '/src/views');
router.removeRoute('Layout');
router.addRoute({
  name: 'Layout',
  path: '/',
  component: () => import('@/views/Layout.vue'),
  redirect: menus[0]?.path,
  children: []
});
(menus || []).forEach((item: any) => {
  router.addRoute('Layout', item);
});
if (location.pathname == '/') {
  jumpRouteCom(
    {
      path: menus[0]?.path
    },
    1
  );
} else {
  const searchParams = new URLSearchParams(location.search);
  const query: any = {};
  for (let key of searchParams) {
    query[key[0]] = key[1];
  }
  jumpRouteCom(
    {
      path: location.pathname.replace('/', ''),
      query
    },
    1
  );
}
```

### 2. 路由跳转

LSMenu 组件支持多种跳转方式：

1. **路由跳转**：配置 `name` 或 `path` 属性，组件会自动使用 `useRouterHook` 进行跳转
2. **外链跳转**：配置 `link` 属性，会在新窗口打开
3. **自定义跳转**：配置 `defJump: true` 并监听 `onJump` 事件
4. **自定义点击事件**：配置 `isDefineClick: true` 并监听 `defineSubClick` 或 `defineChildClick` 事件

## API

### 1. Attributes

<ApiIntro :tableColumn="tableColumn" :tableData="tableData" />

#### 1.1. Menu Item Attributes

::: warning 默认路由meta中bcList配置参数与之一致
:::

<ApiIntro :tableColumn="tableColumn" :tableData="tableData2" />

### 2. Events

<ApiIntro :tableColumn="eventTableColumn" :tableData="tableData3" />

### 3. Slots

<ApiIntro :tableColumn="slotTableColumn" :tableData="tableData4" />

## 最佳实践

### 1. 菜单配置管理

建议将菜单配置集中管理，便于维护和权限控制：

```js
// src/config/menu.ts
export const MENU_CONFIG = [
  // 菜单配置
];

// 在组件中使用
import { MENU_CONFIG } from '@/config/menu';

<LSMenu :menu-config-list="MENU_CONFIG" />
```

### 2. 权限控制

结合后端返回的权限列表，动态控制菜单显示：

```js
// 从后端获取权限列表
const permissionList = ref([]);

// 登录后获取权限
async function login() {
  const res = await api.login(credentials);
  permissionList.value = res.data.permissions;
}

// 在菜单中使用
<LSMenu
  :menu-config-list="MENU_CONFIG"
  :need-permission="true"
  :permission-list="permissionList"
/>
```

### 3. 国际化支持

对于多语言应用，可以结合 i18n 使用：

```js
const MENU_CONFIG = [
  {
    title: 'home', // 使用 i18n key
    name: 'Home',
    path: 'home'
  }
];

// 在组件中使用
<template>
  <LSMenu :menu-config-list="localizedMenu" />
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const localizedMenu = computed(() => {
  return MENU_CONFIG.map(item => ({
    ...item,
    title: t(item.title)
  }));
});
</script>
```

### 4. 响应式菜单

结合媒体查询和状态管理，实现响应式菜单：

```js
const isCollapse = ref(false)

// 监听窗口大小变化
function handleResize() {
  isCollapse.value = window.innerWidth < 768
}

window.addEventListener('resize', handleResize)
```

```html
<LSMenu :menu-config-list="MENU_CONFIG" :collapse="isCollapse" />
```

<script setup>
import { ref } from 'vue';
import { tableColumn, tableMethodColumn, tableSlotColumn } from '../constant';
import { Setting } from '@element-plus/icons-vue';

const MENU_CONFIG_LIST = [
  {
    title: '渔场概览',
    name: 'FisheryOverview',
    path: 'fishery-overview',
    iconConfig: { name: 'House', color: 'red', size: 16 },
    key: '1',
    cpoPath: 'fisheryManager/Overview',
    pCode: 'c1',
    link: 'https://www.lingshu.net/'
  },
  {
    title: '养殖单元管理',
    name: '',
    path: '',
    key: '2',
    cpoPath: '',
    pCode: 'c2',
    children: [
      {
        title: '养殖区域管理',
        name: 'PondGroup',
        path: 'pond-group',
        key: '2-1',
        cpoPath: 'pondManager/Group',
        pCode: 'c21',
        leaf: true,
        children: [
          {
            title: '养殖区域详情',
            name: 'PondGroupDetail',
            path: 'pond-group-detail',
            key: '2-1',
            cpoPath: 'pondManager/GroupDetail',
            pCode: 'c21',
            hideMenu: true
          }
        ]
      },
      {
        title: '养殖池管理',
        name: 'PondManager',
        path: 'pond-manager',
        key: '2-2',
        cpoPath: 'pondManager/Index',
        pCode: 'c22'
      },
      {
        title: '养殖品种',
        name: 'FishCategory',
        path: 'fishCategory',
        key: '2-3',
        cpoPath: 'prodManager/fishCategory/Index',
        pCode: 'c23'
      }
    ]
  },
  {
    title: '规划管理',
    name: 'PlanManager',
    path: 'plan-manager',
    key: '8',
    cpoPath: 'planManager/Index',
    pCode: 'c7',
    leaf: true
  }
];

const MENU_CONFIG_LIST2 = [
  {
    title: '渔场概览',
    key: '1'
  },
  {
    title: '养殖单元管理',
    key: '2',
    children: [
      {
        title: '养殖区域管理',
        key: '2-1'
      },
      {
        title: '养殖池管理',
        key: '2-2'
      },
      {
        title: '养殖品种',
        key: '2-3'
      }
    ]
  }
];

const MENU_CONFIG_LIST3 = [
  {
    title: '首页',
    name: 'Home',
    path: 'home',
    iconConfig: { name: 'House', size: 18 },
    key: '1'
  },
  {
    title: '设置',
    name: 'Settings',
    path: 'settings',
    key: '2',
    children: [
      {
        title: '用户设置',
        name: 'UserSettings',
        path: 'user-settings',
        key: '2-1'
      },
      {
        title: '系统设置',
        name: 'SystemSettings',
        path: 'system-settings',
        key: '2-2'
      }
    ]
  }
];

const MENU_CONFIG_LIST4 = [
  {
    title: '首页',
    name: 'Home',
    path: 'home',
    iconConfig: { name: 'House' },
    key: '1'
  },
  {
    title: '设置',
    name: 'Settings',
    path: 'settings',
    key: '2',
    iconSlot: 'custom-icon',
    children: [
      {
        title: '用户设置',
        name: 'UserSettings',
        path: 'user-settings',
        key: '2-1'
      }
    ]
  }
];

const blockIndex = ref(0);
const defaultActive = ref('1');

function blockClick(val) {
  blockIndex.value = val;
  defaultActive.value = (val + 1).toString();
}

function defineSubClickFunc(item) {
  const { key } = item;
  blockIndex.value = key?.split('-')[0] - 1;
  defaultActive.value = key;
}

function defineChildClickFunc(item) {
  const { key } = item;
  blockIndex.value = key?.split('-')[0] - 1;
  defaultActive.value = key;
}

const tableData = ref([
  {
    name: 'menuConfigList',
    desc: '菜单配置列表',
    type: 'Array<MenuBaseType>',
    value: '[]',
    required: '是'
  },
  {
    name: 'needPermission',
    desc: '是否需要权限控制',
    type: 'boolean',
    value: 'false',
    required: '否'
  },
  {
    name: 'permissionList',
    desc: '权限列表，内部存放pCode码，当needPermission为true时生效',
    type: 'Array<string|number>',
    value: '[]',
    required: '否'
  },
  {
    name: 'hoverColor',
    desc: '菜单hover时的文字和图标颜色',
    type: 'string',
    value: '-',
    required: '否'
  },
  {
    name: 'isDefineClick',
    desc: '菜单点击是否自定义，为true时会触发defineSubClick和defineChildClick事件',
    type: 'boolean',
    value: 'false',
    required: '否'
  },
  {
    name: 'showTooltip',
    desc: '鼠标移入菜单项时是否显示tooltip提示',
    type: 'boolean',
    value: 'true',
    required: '否'
  },
  {
    name: 'fontSize',
    desc: '菜单字体大小，用于tooltip组件',
    type: 'number',
    value: '14',
    required: '否'
  }
])

const tableData2 = ref([
  {
    name: 'title',
    desc: '菜单名称',
    type: 'string',
    value: '-',
    required: '是'
  },
  {
    name: 'name',
    desc: '菜单路由name',
    type: 'string',
    value: '-',
    required: '否'
  },
  {
    name: 'path',
    desc: '菜单路由path',
    type: 'string',
    value: '-',
    required: '否'
  },
  {
    name: 'iconConfig',
    desc: '菜单名称前面的图标配置，具体配置参考LSIcon',
    type: 'object',
    value: '-',
    required: '否'
  },
  {
    name: 'icon',
    desc: '图标名称（字符串格式，与iconConfig二选一）',
    type: 'string',
    value: '-',
    required: '否'
  },
  {
    name: 'key',
    desc: '菜单key，用于el-menu的索引，必须唯一',
    type: 'string',
    value: '-',
    required: '是'
  },
  {
    name: 'cpoPath',
    desc: 'view层组件对应路径，用于动态路由生成',
    type: 'string',
    value: '-',
    required: '否'
  },
  {
    name: 'pCode',
    desc: '权限code，用于权限控制',
    type: 'string|number',
    value: '-',
    required: '否'
  },
  {
    name: 'link',
    desc: '外链地址，配置之后会在新窗口打开，不走路由跳转',
    type: 'string',
    value: '-',
    required: '否'
  },
  {
    name: 'leaf',
    desc: '是否为叶子菜单，如果是叶子菜单，那么该菜单下的children菜单配置不显示',
    type: 'boolean',
    value: 'false',
    required: '否'
  },
  {
    name: 'hideMenu',
    desc: '是否隐藏该菜单',
    type: 'boolean',
    value: 'false',
    required: '否'
  },
  {
    name: 'children',
    desc: '子菜单配置',
    type: 'Array<MenuBaseType>',
    value: '[]',
    required: '否'
  },
  {
    name: 'defJump',
    desc: '菜单点击自定义处理，为true时会触发onJump事件',
    type: 'boolean',
    value: 'false',
    required: '否'
  },
  {
    name: 'iconSlot',
    desc: '菜单栏左边icon插槽名，用于自定义图标',
    type: 'string',
    value: '-',
    required: '否'
  },
  {
    name: 'meta',
    desc: '路由元信息，可存放自定义数据',
    type: 'object',
    value: '{}',
    required: '否'
  },
  {
    name: 'redirect',
    desc: '重定向路径，访问当前菜单时会自动跳转到指定路径',
    type: 'string',
    value: '-',
    required: '否'
  }
])

const eventTableColumn = ref([
  {
    prop: 'name',
    label: '事件名'
  },
  {
    prop: 'desc',
    label: '说明'
  },
  {
    prop: 'params',
    label: '参数'
  }
]);

const tableData3 = ref([
  {
    name: 'onJump',
    desc: '点击菜单自定义处理方法，defJump为true时生效',
    params: 'item: MenuBaseType'
  },
  {
    name: 'defineSubClick',
    desc: '点击子菜单标题回调方法，isDefineClick为true时生效',
    params: 'item: MenuBaseType'
  },
  {
    name: 'defineChildClick',
    desc: '点击子菜单项回调方法，isDefineClick为true时生效',
    params: 'item: MenuBaseType'
  }
])

const slotTableColumn = ref([
  {
    prop: 'name',
    label: '插槽名'
  },
  {
    prop: 'desc',
    label: '说明'
  }
]);

const tableData4 = ref([
  {
    name: '[iconSlot]',
    desc: '菜单栏左边icon插槽, 即属性定义的icon插槽名',
  }
])
</script>

<style lang="scss" scoped>
.menu-wrap {
  width: 200px;
  padding: 0;
  :deep(ul) {
    padding: 0;
    margin: 0;
  }
  :deep(li) {
    margin: 0;
  }
}

.block-list {
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  width: 300px;
  li {
    width: 100px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    cursor: pointer;
    border: 1px solid #eeeeee;
    margin-top: 0;
    &.active {
      color: #ffffff;
      background-color: blue;
    }
  }
}
</style>
