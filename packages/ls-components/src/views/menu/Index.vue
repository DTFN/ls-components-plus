<script setup lang="ts">
const MENU_CONFIG_LIST = [
  {
    title: '渔场概览',
    name: 'FisheryOverview',
    path: 'fishery-overview',
    icon: 'House',
    key: '1',
    cpoPath: 'fisheryManager/Overview',
    pCode: 'c1',
    jumpType: 1,
    link: 'https://www.lingshu.net/'
  },
  {
    title: '生产概览',
    name: 'ProduceOverview',
    path: 'produce-overview',
    // icon: 'Monitor',
    key: '10',
    cpoPath: 'produceOverview/Index',
    pCode: 'c1012'
  },
  {
    title: '养殖单元管理',
    name: '',
    path: '',
    icon: 'location',
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
    title: '资产管理',
    name: '',
    path: '',
    icon: 'Money',
    key: '4',
    cpoPath: '',
    pCode: 'c3',
    children: [
      {
        title: '资产列表',
        name: 'AssetManager',
        path: 'asset-manager',
        key: '4-1',
        cpoPath: 'assetManager/list/Index',
        pCode: 'c31',
        leaf: true,
        children: [
          {
            title: '新增资产',
            name: 'AddAsset',
            path: 'add-asset',
            key: '4-1',
            cpoPath: 'assetManager/list/Edit',
            pCode: 'c31',
            hideMenu: true
          },
          {
            title: '编辑资产',
            name: 'EditAsset',
            path: 'edit-asset',
            key: '4-1',
            cpoPath: 'assetManager/list/Edit',
            pCode: 'c31',
            hideMenu: true
          },
          {
            title: '资产详情',
            name: 'AssetDetail',
            path: 'asset-detail',
            key: '4-1',
            cpoPath: 'assetManager/list/Edit',
            pCode: 'c31',
            hideMenu: true
          }
        ]
      },
      {
        title: '资产统计',
        name: 'AssetStatistics',
        path: 'asset-statistics',
        key: '4-2',
        cpoPath: 'assetManager/statistics/Index',
        pCode: 'c32'
      },
      {
        title: '维修记录',
        name: 'MaintenanceRecords',
        path: 'maintenance-records',
        key: '4-3',
        cpoPath: 'assetManager/maintenance/Index',
        pCode: 'c33'
      }
    ]
  },
  {
    title: '规划管理',
    name: 'PlanManager',
    path: 'plan-manager',
    icon: 'Reading',
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
  },
  {
    title: '生产管理',
    name: '',
    path: '',
    icon: 'Tickets',
    key: '6',
    cpoPath: '',
    pCode: 'c5',
    children: [
      {
        title: '生产查询',
        name: 'Produce',
        path: 'produce',
        key: '6-4',
        cpoPath: 'prodManager/produce/Index',
        pCode: 'c52',
        leaf: true,
        children: [
          {
            title: '生产查询详情',
            name: 'ProduceDetail',
            path: 'produce-detail',
            key: '6-4',
            cpoPath: 'prodManager/produce/Detail',
            pCode: 'c52',
            hideMenu: true
          }
        ]
      },
      {
        title: '鱼苗采购',
        name: 'Purchase',
        path: 'purchase',
        key: '6-5',
        cpoPath: 'prodManager/purchase/Index',
        pCode: 'c56',
        leaf: true
      },
      {
        title: '入池管理',
        name: 'InPoolMng',
        path: 'in-pool-mng',
        key: '6-6',
        cpoPath: 'prodManager/inPoolMng/Index',
        pCode: 'c55',
        leaf: true,
        children: [
          {
            title: '新增入池',
            name: 'InPoolAdd',
            path: 'in-pool-add',
            key: '6-6',
            cpoPath: 'prodManager/inPoolMng/Edit',
            pCode: 'c55',
            hideMenu: true
          },
          {
            title: '编辑入池',
            name: 'InPoolEdit',
            path: 'in-pool-edit',
            key: '6-6',
            cpoPath: 'prodManager/inPoolMng/Edit',
            pCode: 'c55',
            hideMenu: true
          },
          {
            title: '入池详情',
            name: 'InPoolDetail',
            path: 'in-pool-detail',
            key: '6-6',
            cpoPath: 'prodManager/inPoolMng/Edit',
            pCode: 'c55',
            hideMenu: true
          }
        ]
      },
      {
        title: '分池管理',
        name: 'OutPoolMng',
        path: 'out-pool-mng',
        key: '6-7',
        cpoPath: 'prodManager/outPoolMng/Index',
        pCode: 'c57',
        leaf: true,
        children: [
          {
            title: '新增分池',
            name: 'OutPoolAdd',
            path: 'out-pool-add',
            key: '6-7',
            cpoPath: 'prodManager/outPoolMng/Edit',
            pCode: 'c57',
            hideMenu: true
          },
          {
            title: '编辑分池',
            name: 'OutPoolEdit',
            path: 'out-pool-edit',
            key: '6-7',
            cpoPath: 'prodManager/outPoolMng/Edit',
            pCode: 'c57',
            hideMenu: true
          },
          {
            title: '分池详情',
            name: 'OutPoolDetail',
            path: 'out-pool-detail',
            key: '6-7',
            cpoPath: 'prodManager/outPoolMng/Edit',
            pCode: 'c57',
            hideMenu: true
          }
        ]
      },
      {
        title: '打样管理',
        name: 'SampleSalvageMng',
        path: 'sample-salvage-mng',
        key: '6-8',
        cpoPath: 'prodManager/sampleSalvage/Index',
        pCode: 'c58',
        leaf: true,
        children: [
          {
            title: '新增打样',
            name: 'SampleSalvageAdd',
            path: 'sample-salvage-add',
            key: '6-8',
            cpoPath: 'prodManager/sampleSalvage/Edit',
            pCode: 'c58',
            hideMenu: true
          },
          {
            title: '编辑打样',
            name: 'SampleSalvageEdit',
            path: 'sample-salvage-edit',
            key: '6-8',
            cpoPath: 'prodManager/sampleSalvage/Edit',
            pCode: 'c58',
            hideMenu: true
          },
          {
            title: '打样详情',
            name: 'SampleSalvageDetail',
            path: 'sample-salvage-detail',
            key: '6-8',
            cpoPath: 'prodManager/sampleSalvage/Edit',
            pCode: 'c58',
            hideMenu: true
          }
        ]
      },
      {
        title: '损耗管理',
        name: 'LossMng',
        path: 'loss-mng',
        key: '6-9',
        cpoPath: 'prodManager/loss/Index',
        pCode: 'c59',
        leaf: true,
        children: [
          {
            title: '新增损耗',
            name: 'LossAdd',
            path: 'loss-add',
            key: '6-9',
            cpoPath: 'prodManager/loss/Edit',
            pCode: 'c59',
            hideMenu: true
          },
          {
            title: '编辑损耗',
            name: 'LossEdit',
            path: 'loss-edit',
            key: '6-9',
            cpoPath: 'prodManager/loss/Edit',
            pCode: 'c59',
            hideMenu: true
          },
          {
            title: '损耗详情',
            name: 'LossDetail',
            path: 'loss-detail',
            key: '6-9',
            cpoPath: 'prodManager/loss/Edit',
            pCode: 'c59',
            hideMenu: true
          }
        ]
      },
      {
        title: '捕捞管理',
        name: 'Fishs',
        path: 'fishs',
        key: '6-3',
        cpoPath: 'prodManager/fish/Index',
        pCode: 'c53',
        leaf: true,
        children: [
          {
            title: '捕捞详情',
            name: 'FishsDetail',
            path: 'fishs-detail',
            key: '6-3',
            cpoPath: 'prodManager/fish/Edit',
            pCode: 'c53',
            hideMenu: true
          }
        ]
      }
    ]
  },
  {
    title: '任务管理',
    name: '',
    path: '',
    icon: 'Notification',
    key: '7',
    cpoPath: '',
    pCode: 'c6',
    children: [
      {
        title: '任务管理',
        name: 'OwnersWork',
        path: 'owners-work',
        key: '7-1',
        cpoPath: 'workManager/owners/Index',
        pCode: 'c61',
        leaf: true,
        children: [
          {
            title: '任务新增',
            name: 'OwnersWorkAdd',
            path: 'owners-work-add',
            key: '7-1',
            cpoPath: 'workManager/owners/Edit',
            pCode: 'c61',
            hideMenu: true
          },
          {
            title: '任务编辑',
            name: 'OwnersWorkEdit',
            path: 'owners-work-edit',
            key: '7-1',
            cpoPath: 'workManager/owners/Edit',
            pCode: 'c61',
            hideMenu: true
          },
          {
            title: '任务详情',
            name: 'OwnersWorkDetail',
            path: 'owners-work-detail',
            key: '7-1',
            cpoPath: 'workManager/owners/Edit',
            pCode: 'c61',
            hideMenu: true
          }
        ]
      },
      {
        title: '我的任务',
        name: 'OneselfWork',
        path: 'oneself-work',
        key: '7-2',
        cpoPath: 'workManager/oneself/Index',
        pCode: 'c62',
        leaf: true,
        children: [
          {
            title: '任务详情',
            name: 'OneselfWorkDetail',
            path: 'oneself-work-detail',
            key: '7-2',
            cpoPath: 'workManager/oneself/Edit',
            pCode: 'c62',
            hideMenu: true
          }
        ]
      }
    ]
  },
  {
    title: '产能预测',
    name: '',
    path: '',
    icon: 'DataLine',
    key: '9',
    cpoPath: '',
    pCode: 'c8',
    children: [
      {
        title: '预测概览',
        name: 'PredictionOverView',
        path: 'prediction-overview',
        key: '9-1',
        cpoPath: 'capacityPrediction/overview/Index',
        pCode: 'c6111'
      },
      {
        title: '预测列表',
        name: 'PredictionList',
        path: 'prediction-list',
        key: '9-2',
        cpoPath: 'capacityPrediction/list/Index',
        pCode: 'c6112'
      }
    ]
  }
];
</script>

<template>
  <div>
    <LSBreadcrumb />
    <br />
    <LSMenu :menu-config-list="MENU_CONFIG_LIST" style="width: 200px" />
  </div>
</template>

<style lang="scss" scoped></style>
