---
outline: deep
---

# Menu 菜单

::: warning 基于el-menu二次封装，保留原属性和方法。
:::

## 使用方式

<br />

<LSMenu :menu-config-list="MENU_CONFIG_LIST" class="menu-wrap" />

```js
import { ref } from 'vue';

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
      },
      {
        title: '养殖区域可视化',
        name: 'AreaView',
        path: 'area-view',
        key: '2-4',
        cpoPath: 'pondManager/AreaView',
        pCode: 'c24'
      },
      {
        title: '养殖周期管理',
        name: 'CycleManager',
        path: 'cycle-manager',
        key: '2-5',
        cpoPath: 'pondManager/cycle/CycleManager',
        pCode: 'c25',
        leaf: true,
        children: [
          {
            title: '历史周期',
            name: 'HistoryCycle',
            path: 'history-cycle',
            key: '2-5',
            cpoPath: 'pondManager/cycle/HistoryCycle',
            pCode: 'c25',
            leaf: true,
            hideMenu: true,
            children: [
              {
                title: '历史周期查看',
                name: 'HistoryCycleDetail',
                path: 'history-cycle-detail',
                key: '2-5',
                cpoPath: 'pondManager/cycle/HistoryCycleDetail',
                pCode: 'c25',
                hideMenu: true
              }
            ]
          }
        ]
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
    leaf: true,
    children: [
      {
        title: '新增规划',
        name: 'AddPlan',
        path: 'add-plan',
        key: '8',
        cpoPath: 'planManager/Edit',
        pCode: 'c7',
        hideMenu: true
      },
      {
        title: '编辑规划',
        name: 'EditPlan',
        path: 'edit-plan',
        key: '8',
        cpoPath: 'planManager/Edit',
        pCode: 'c7',
        hideMenu: true
      },
      {
        title: '规划详情',
        name: 'PlanDetail',
        path: 'plan-detail',
        key: '8',
        cpoPath: 'planManager/Edit',
        pCode: 'c7',
        hideMenu: true
      }
    ]
  }
];
```

```html
<LSMenu :menu-config-list="MENU_CONFIG_LIST" class="menu-wrap" />
```

## 创建路由数据

::: warning 通过以下方式动态创建路由，适用带权限控制项目
:::

```js
import { useRouterHook } from '组件库';
const router = useRouter();

const { getMenusByAuth }: any = useRouterHook();

const routesModule = import.meta.glob('/src/views/**/*.vue');
const menus = getMenusByAuth(MENU_CONFIG_LIST, routesModule, '/src/views');
router.removeRoute('Layout');
router.addRoute({
  name: 'Layout',
  path: '/',
  component: () => import('@/views/Layout.vue'),
  redirect: menus[0].path,
  children: []
});
(menus || []).forEach((item: any) => {
  router.addRoute('Layout', item);
});

router.push({
  path: location.pathname || '/'
});
```

## API

### 1. Attributes

<ApiIntro :tableColumn="tableColumn" :tableData="tableData" />

#### 1.1 menuConfigList

<ApiIntro :tableColumn="tableColumn" :tableData="tableData2" />

<script setup>
import { ref } from 'vue';
import { tableColumn } from './constant';

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
      },
      {
        title: '养殖区域可视化',
        name: 'AreaView',
        path: 'area-view',
        key: '2-4',
        cpoPath: 'pondManager/AreaView',
        pCode: 'c24'
      },
      {
        title: '养殖周期管理',
        name: 'CycleManager',
        path: 'cycle-manager',
        key: '2-5',
        cpoPath: 'pondManager/cycle/CycleManager',
        pCode: 'c25',
        leaf: true,
        children: [
          {
            title: '历史周期',
            name: 'HistoryCycle',
            path: 'history-cycle',
            key: '2-5',
            cpoPath: 'pondManager/cycle/HistoryCycle',
            pCode: 'c25',
            leaf: true,
            hideMenu: true,
            children: [
              {
                title: '历史周期查看',
                name: 'HistoryCycleDetail',
                path: 'history-cycle-detail',
                key: '2-5',
                cpoPath: 'pondManager/cycle/HistoryCycleDetail',
                pCode: 'c25',
                hideMenu: true
              }
            ]
          }
        ]
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
    leaf: true,
    children: [
      {
        title: '新增规划',
        name: 'AddPlan',
        path: 'add-plan',
        key: '8',
        cpoPath: 'planManager/Edit',
        pCode: 'c7',
        hideMenu: true
      },
      {
        title: '编辑规划',
        name: 'EditPlan',
        path: 'edit-plan',
        key: '8',
        cpoPath: 'planManager/Edit',
        pCode: 'c7',
        hideMenu: true
      },
      {
        title: '规划详情',
        name: 'PlanDetail',
        path: 'plan-detail',
        key: '8',
        cpoPath: 'planManager/Edit',
        pCode: 'c7',
        hideMenu: true
      }
    ]
  }
];

const tableData = ref([
  {
    name: 'menuConfigList',
    desc: '菜单配置列表',
    type: 'array',
    value: '-'
  },
  {
    name: 'needPermission',
    desc: '是否需要权限',
    type: 'boolean',
    value: false
  },
  {
    name: 'permissionList',
    desc: '权限列表，内部存放code码，当needPermission为true时生效',
    type: 'array',
    value: '-'
  }
])

const tableData2 = ref([
  {
    name: 'title',
    desc: '菜单名称',
    type: 'string',
    value: '-'
  },
  {
    name: 'name',
    desc: '菜单路由name',
    type: 'string',
    value: '-'
  },
  {
    name: 'path',
    desc: '菜单路由path',
    type: 'string',
    value: '-'
  },
  {
    name: 'iconConfig',
    desc: '菜单名称前面的图标配置，具体配置参考LSIcon',
    type: 'json',
    value: '-'
  },
  {
    name: 'key',
    desc: '菜单key, 参考el-menu',
    type: 'string',
    value: '-'
  },
  {
    name: 'cpoPath',
    desc: 'view层组件对应路径',
    type: 'string',
    value: '-'
  },
  {
    name:'pCode',
    desc: '权限code',
    type: 'string',
    value: '-'
  },
  {
    name: 'link',
    desc: '外链地址，配置之后就不在走路由跳转',
    type: 'string',
    value: '-'
  },
  {
    name: 'leaf',
    desc: '是否为叶子菜单，如果是叶子菜单，那么改菜单下的children菜单配置不显示',
    type: 'boolean',
    value: 'false'
  },
  {
    name: 'hideMenu',
    desc: '是否隐藏该菜单',
    type: 'boolean',
    value: 'false'
  },
  {
    name: 'children',
    desc: '子菜单配置',
    type: 'array',
    value: '-'
  },
])
</script>

<style lang="scss" scoped>
.menu-wrap {
  border: 1px solid #eee;
  width: 200px;
  padding: 0;
  :deep() ul {
    padding: 0;
    margin: 0;
  }
  :deep() li {
    margin: 0;
  }
}
</style>
