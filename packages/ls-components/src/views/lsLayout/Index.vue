<script setup lang="ts">
import logo from '@/assets/logo.png';

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

const formData = ref({
  username: '',
  password: ''
});
const formItems = ref<FormItemsType[]>([
  {
    type: 'input',
    label: '用户名',
    prop: 'username',
    rules: [
      {
        required: true,
        message: '请输入用户名',
        trigger: 'blur'
      },
      {
        pattern: /^[A-Z0-9]{4,36}$/i,
        message: '4-36位数字字母组合',
        trigger: 'blur'
      }
    ]
  },
  {
    type: 'input',
    label: '密码',
    prop: 'password',
    attrs: {
      'show-password': true,
      maxlength: 24
    },
    rules: [
      {
        required: true,
        message: '请输入用户密码',
        trigger: 'blur'
      },
      {
        pattern: /^[A-Z0-9@]*$/i,
        message: '8-24位数字大小写字母组合',
        trigger: 'blur'
      }
    ]
  }
]);

const tableColumn = [
  {
    label: '参数名称',
    prop: 'code'
  },
  {
    label: '参数描述',
    prop: 'name'
  },
  {
    label: '默认值',
    prop: 'defaultValue'
  }
];
const tableData = ref([
  {
    id: '1',
    code: 'EquipmentTypeEnum',
    name: '机组类型',
    defaultValue: '0'
  },
  {
    id: '2',
    code: 'EquipmentCategoryEnum',
    name: '机组类别',
    defaultValue: '1'
  },
  {
    id: '3',
    code: 'capacity',
    name: '装机容量(MW)',
    defaultValue: '0'
  },
  {
    id: '4',
    code: 'ratedPower',
    name: '额定功率',
    defaultValue: '0'
  },
  {
    id: '5',
    code: 'ProductTypeEnum',
    name: '产品类型',
    defaultValue: '1'
  },
  {
    id: '6',
    code: 'BoilerTypeEnum',
    name: '锅炉类型',
    defaultValue: '1'
  },
  {
    id: '7',
    code: 'boiler_productionCapacity',
    name: '生产能力',
    defaultValue: '1'
  },
  {
    id: '8',
    code: 'TurbineTypeEnum',
    name: '汽轮机类型',
    defaultValue: '0'
  },
  {
    id: '9',
    code: 'PressureParamsTypeEnum',
    name: '汽轮机压力参数',
    defaultValue: '0'
  },
  {
    id: '10',
    code: 'turbine_ratedPower',
    name: '汽轮机额定功率',
    defaultValue: '1'
  },
  {
    id: '11',
    code: 'EquipmentTypeEnum',
    name: '机组类型1',
    defaultValue: '2'
  }
]);
</script>

<template>
  <div>
    <LSLayout header-height="50px" aside-width="220px" :logo="logo" title="Layout 测试">
      <template #aside>
        <LSMenu :menu-config-list="MENU_CONFIG_LIST" style="width: 220px" />
      </template>
      <template #section>
        <div class="ls-main-container">
          <div class="ls-main-title">列表区域</div>
          <div class="ls-search-wrap">
            <LSForm
              ref="FormRef"
              inline
              confirm-text="查询"
              :form-data="formData"
              :form-items="formItems"
              :hide-required-asterisk="true"
            />
          </div>
          <div class="table-wrap">
            <LSTable
              border
              :show-table-index="true"
              :show-pagination="false"
              :show-radio="false"
              :table-column="tableColumn"
              :table-data="tableData"
            >
              <el-table-column prop="operate" label="操作" width="120px"> </el-table-column>
            </LSTable>
          </div>
        </div>
      </template>
    </LSLayout>
  </div>
</template>

<style lang="scss" scoped></style>
