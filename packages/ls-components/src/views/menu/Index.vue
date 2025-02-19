<script setup lang="ts">
import { useRouterHook } from '@lingshugroup/web-plus/hooks';
import logo from '@/assets/logo.png';
import vueSvg from '@/assets/vue.svg';
import type { BreadCrumpListType, MenuBaseType } from '@cpo/_types';

const MENU_CONFIG_LIST: MenuBaseType[] = [
  {
    title: '渔场概览-渔场概览-渔场概览',
    name: 'FisheryOverview',
    path: 'fishery-overview',
    iconConfig: { name: 'House', color: 'red', size: 16 },
    key: '1',
    cpoPath: 'fisheryManager/Overview',
    pCode: 'c1',
    link: 'https://www.lingshu.net/',
    defJump: true
  },
  {
    title: '养殖单元管理',
    name: '',
    path: '',
    iconConfig: { type: 2, name: 'img', src: logo, width: 32, height: 16 },
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
        defJump: true,
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
      }
    ]
  },
  {
    title: '养殖周期管理',
    name: 'CycleManager',
    path: 'cycle-manager',
    key: '3',
    iconConfig: { name: 'Upload' },
    cpoPath: 'pondManager/cycle/CycleManager',
    pCode: 'c25',
    children: [
      {
        title: '历史周期',
        name: 'HistoryCycle',
        path: 'history-cycle',
        key: '3-1',
        cpoPath: 'pondManager/cycle/HistoryCycle',
        pCode: 'c25',
        leaf: true,
        hideMenu: true,
        children: [
          {
            title: '历史周期查看',
            name: 'HistoryCycleDetail',
            path: 'history-cycle-detail',
            key: '3-1',
            cpoPath: 'pondManager/cycle/HistoryCycleDetail',
            pCode: 'c25',
            hideMenu: true
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
    iconSlot: 'icon7',
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

const { getRouteQuery, currentRouter } = useRouterHook();

const defineBCList: Ref<BreadCrumpListType> = ref([]);

watch(
  () => currentRouter.value,
  val => {
    const { name }: any = val || {};
    const query = getRouteQuery();
    setDefineBCList(name, query);
  },
  {
    immediate: true,
    deep: true
  }
);

function setDefineBCList(name: string, query: any) {
  if (name === 'Menu') {
    defineBCList.value = [
      {
        title: '产品管理'
      },
      {
        title: '产品详情',
        name: 'Button',
        query
      },
      {
        title: '物模型草稿'
      }
    ];
  } else {
    defineBCList.value = [];
  }
}

function onJump(res: any) {
  console.log(res);
}

const isCollapse = ref(true);

const MENU_CONFIG_LIST2: MenuBaseType[] = [
  {
    title: '渔场概览',
    key: '1',
    children: [
      {
        title: '渔场1-1',
        key: '1-1',
        children: [
          {
            title: '渔场1-1-1',
            key: '1-1-1'
          }
        ]
      }
    ]
  },
  {
    title: '养殖单元管理',
    key: '2',
    children: [
      {
        title: '养殖区域管理-养殖区域管理',
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
const blockIndex: any = ref(0);
const comMenuRef2 = ref();
const defaultActive = ref('1');

function blockClick(val: number) {
  if (val === blockIndex.value) {
    blockIndex.value = -1;
    defaultActive.value = '-1';
  } else {
    blockIndex.value = val;
    defaultActive.value = (val + 1).toString();
    // comMenuRef2.value.lsComMenuRef.open(val + 1);
  }
}

function defineSubClickFunc(item: MenuBaseType) {
  const { key }: any = item;
  blockIndex.value = key?.split('-')[0] - 1;
  defaultActive.value = key;
}

function defineChildClickFunc(item: MenuBaseType) {
  const { key }: any = item;
  blockIndex.value = key?.split('-')[0] - 1;
  defaultActive.value = key;
}
</script>

<template>
  <div>
    <LSBreadcrumb :define-list="defineBCList" separator="$" />
    <br />
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
      <el-radio-button :value="false">expand</el-radio-button>
      <el-radio-button :value="true">collapse</el-radio-button>
    </el-radio-group>
    <LSMenu
      :menu-config-list="MENU_CONFIG_LIST"
      hover-color="blue"
      style="max-width: 225px"
      @on-jump="onJump"
      :collapse="isCollapse"
      :show-tooltip="true"
    >
      <template #icon7>
        <vueSvg />
      </template>
    </LSMenu>

    <hr />

    <div style="position: relative">
      <LSMenu
        ref="comMenuRef2"
        :menu-config-list="MENU_CONFIG_LIST2"
        style="max-width: 225px"
        :collapse="false"
        :is-define-click="true"
        :default-active="defaultActive"
        @define-sub-click="defineSubClickFunc"
        @define-child-click="defineChildClickFunc"
      >
        <template #icon7>
          <vueSvg />
        </template>
      </LSMenu>

      <ul class="block-list">
        <li :class="{ active: blockIndex == 0 }" @click="blockClick(0)">渔场概览</li>
        <li :class="{ active: blockIndex == 1 }" @click="blockClick(1)">养殖单元管理</li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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
    &.active {
      color: #ffffff;
      background-color: blue;
    }
  }
}
</style>
