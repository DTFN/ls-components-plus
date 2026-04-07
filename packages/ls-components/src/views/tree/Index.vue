<script setup lang="ts">
import { isEmpty } from '@cpo/_utils/utils';
const treeData = ref([
  {
    id: 200000,
    name: '首页',
    url: '/v1/homepage/**',
    type: 1,
    permission: 'm00',
    method: null,
    sort: 0,
    parentId: 0,
    status: 1,
    children: null
  },
  {
    id: 201000,
    name: '学校管理',
    url: null,
    type: 1,
    permission: 'm01',
    method: null,
    sort: 1,
    parentId: 0,
    status: 1,
    children: [
      {
        id: 201010,
        name: '学校管理',
        url: '/school/**',
        type: 1,
        permission: 'm0101',
        method: null,
        sort: 1,
        parentId: 201000,
        status: 1,
        children: null
      },
      {
        id: 201020,
        name: '食堂管理',
        url: '/canteen/**',
        type: 1,
        permission: 'm0102',
        method: null,
        sort: 2,
        parentId: 201000,
        status: 1,
        children: null
      },
      {
        id: 201030,
        name: '供应商管理',
        url: '/supplier/**',
        type: 1,
        permission: 'm0103',
        method: null,
        sort: 3,
        parentId: 201000,
        status: 1,
        children: null
      },
      {
        id: 201040,
        name: '学生管理',
        url: '/v1/student-management/page,/v1/student-management/detail/**,/v1/term-meal-leave/**',
        type: 1,
        permission: 'm0104',
        method: null,
        sort: 4,
        parentId: 201000,
        status: 1,
        children: [
          {
            id: 201041,
            name: '查看',
            url: '/v1/student-management/page,/v1/student-management/detail/**',
            type: 1,
            permission: 'p010400',
            method: null,
            sort: 1,
            parentId: 201040,
            status: 1,
            children: null
          },
          {
            id: 201042,
            name: '编辑',
            url: '/v1/student-management/modify',
            type: 1,
            permission: 'm010401',
            method: null,
            sort: 2,
            parentId: 201040,
            status: 1,
            children: null
          }
        ]
      },
      {
        id: 201050,
        name: '膳食家委会',
        url: '/v1/dietary-parent-committee/**',
        type: 1,
        permission: 'm0105',
        method: null,
        sort: 5,
        parentId: 201000,
        status: 1,
        children: null
      }
    ]
  },
  {
    id: 202000,
    name: '食材管理',
    url: null,
    type: 1,
    permission: 'm02',
    method: null,
    sort: 2,
    parentId: 0,
    status: 1,
    children: [
      {
        id: 202010,
        name: '产品管理',
        url: '/product/**',
        type: 1,
        permission: 'm0201',
        method: null,
        sort: 1,
        parentId: 202000,
        status: 1,
        children: null
      },
      {
        id: 202020,
        name: '订单管理',
        url: '/order/**',
        type: 1,
        permission: 'm0202',
        method: null,
        sort: 2,
        parentId: 202000,
        status: 1,
        children: null
      },
      {
        id: 202030,
        name: '验收图片',
        url: '/v1/order/check/image/record/**',
        type: 1,
        permission: 'm0203',
        method: null,
        sort: 3,
        parentId: 202000,
        status: 1,
        children: null
      }
    ]
  },
  {
    id: 205000,
    name: '菜谱管理',
    url: null,
    type: 1,
    permission: 'm05',
    method: null,
    sort: 3,
    parentId: 0,
    status: 1,
    children: [
      {
        id: 205010,
        name: '菜谱列表',
        url: '/v1/dish/**',
        type: 1,
        permission: 'm0501',
        method: null,
        sort: 1,
        parentId: 205000,
        status: 1,
        children: null
      },
      {
        id: 205040,
        name: '选餐记录',
        url: '/v1/meal/selection/record/**',
        type: 1,
        permission: 'm0504',
        method: null,
        sort: 2,
        parentId: 205000,
        status: 1,
        children: null
      },
      {
        id: 205030,
        name: '评价列表',
        url: '/v1/dish/meal/type/evaluation/**',
        type: 1,
        permission: 'm0503',
        method: null,
        sort: 3,
        parentId: 205000,
        status: 1,
        children: null
      },
      {
        id: 205020,
        name: '流程监控',
        url: '/v1/workflow/**',
        type: 1,
        permission: 'm0502',
        method: null,
        sort: 4,
        parentId: 205000,
        status: 1,
        children: null
      }
    ]
  },
  {
    id: 203000,
    name: '模型管理',
    url: null,
    type: 1,
    permission: 'm03',
    method: null,
    sort: 4,
    parentId: 0,
    status: 1,
    children: [
      {
        id: 203010,
        name: 'AI巡检预警',
        url: '/inspection/**',
        type: 1,
        permission: 'm0301',
        method: null,
        sort: 1,
        parentId: 203000,
        status: 1,
        children: null
      },
      {
        id: 203020,
        name: '食品安全预警',
        url: '/orderWarn/**',
        type: 1,
        permission: 'm0302',
        method: null,
        sort: 2,
        parentId: 203000,
        status: 1,
        children: null
      },
      {
        id: 203030,
        name: '供应商信用报告',
        url: '/v1/credit/report/**',
        type: 1,
        permission: 'm0303',
        method: null,
        sort: 3,
        parentId: 203000,
        status: 1,
        children: null
      },
      {
        id: 203040,
        name: '数据接入管理',
        url: '/v1/qianjingDataRecord/**',
        type: 1,
        permission: 'm0304',
        method: null,
        sort: 4,
        parentId: 203000,
        status: 1,
        children: null
      }
    ]
  },
  {
    id: 206000,
    name: '问卷管理',
    url: '',
    type: 1,
    permission: 'm06',
    method: null,
    sort: 5,
    parentId: 0,
    status: 1,
    children: [
      {
        id: 206010,
        name: '问卷设计',
        url: '/v1/questionnaire/**,/v1/question/**',
        type: 1,
        permission: 'm0601',
        method: null,
        sort: 0,
        parentId: 206000,
        status: 1,
        children: null
      },
      {
        id: 206020,
        name: '问卷结果',
        url: '/v1/questionnaire/questionnaire-result-**',
        type: 1,
        permission: 'm0602',
        method: null,
        sort: 0,
        parentId: 206000,
        status: 1,
        children: null
      },
      {
        id: 206030,
        name: '问卷统计',
        url: '/v1/questionnaire/stat/**',
        type: 1,
        permission: 'm0603',
        method: null,
        sort: 0,
        parentId: 206000,
        status: 1,
        children: null
      }
    ]
  },
  {
    id: 204000,
    name: '系统管理',
    url: null,
    type: 1,
    permission: 'm04',
    method: null,
    sort: 6,
    parentId: 0,
    status: 1,
    children: [
      {
        id: 204050,
        name: '日志管理',
        url: '/v1/operation-log/**',
        type: 1,
        permission: 'm0405',
        method: null,
        sort: 0,
        parentId: 204000,
        status: 1,
        children: null
      },
      {
        id: 204030,
        name: '参数配置',
        url: '/nutrition/**',
        type: 1,
        permission: 'm0403',
        method: null,
        sort: 1,
        parentId: 204000,
        status: 1,
        children: null
      },
      {
        id: 204040,
        name: '家长注册列表',
        url: '/v1/parentUser/**',
        type: 1,
        permission: 'm0404',
        method: null,
        sort: 2,
        parentId: 204000,
        status: 1,
        children: null
      },
      {
        id: 204010,
        name: '用户管理',
        url: '/v1/admin/user/**',
        type: 1,
        permission: 'm0401',
        method: null,
        sort: 3,
        parentId: 204000,
        status: 1,
        children: null
      },
      {
        id: 204020,
        name: '角色管理',
        url: '/v1/sys/role/**,/v1/sys/permission/**',
        type: 1,
        permission: 'm0402',
        method: null,
        sort: 4,
        parentId: 204000,
        status: 1,
        children: null
      }
    ]
  }
]);

const treeData2 = ref([
  {
    id: 20100,
    clientId: 2,
    name: '凭证管理',
    type: 2,
    permission: 'm1',
    sort: 1,
    parentId: 0,
    status: 1,
    children: [
      {
        id: 20101,
        clientId: 2,
        name: '新增凭证',
        url: '/v1/iot/access/credential',
        type: 2,
        permission: 'm11',
        method: 'POST',
        sort: 1,
        parentId: 20100,
        status: 1,
        createdTime: '2024-04-16 00:00:00',
        updatedTime: '2024-05-13 18:09:16',
        createdBy: -1,
        updatedBy: -1
      },
      {
        id: 20102,
        clientId: 2,
        name: '列表1',
        url: '/v1/iot/access/credential/page',
        type: 2,
        permission: 'm12',
        method: 'POST',
        sort: 1,
        parentId: 20100,
        status: 1,
        children: [
          {
            id: 20103,
            clientId: 2,
            name: '查看详情',
            url: '/v1/iot/access/credential/*',
            type: 2,
            permission: 'm121',
            method: 'GET',
            sort: 1,
            parentId: 20102,
            status: 1,
            createdTime: '2024-04-16 00:00:00',
            updatedTime: '2024-05-13 18:09:16',
            createdBy: -1,
            updatedBy: -1
          },
          {
            id: 20104,
            clientId: 2,
            name: '编辑1',
            type: 2,
            permission: 'm122',
            sort: 1,
            parentId: 20102,
            status: 1,
            children: [
              {
                id: 20105,
                clientId: 2,
                name: '凭证详情接口',
                url: '/v1/iot/access/credential',
                type: 2,
                permission: 'Im1221',
                method: 'GET',
                sort: 1,
                parentId: 20104,
                status: 1,
                createdTime: '2024-04-16 00:00:00',
                updatedTime: '2024-05-13 18:09:16',
                createdBy: -1,
                updatedBy: -1
              },
              {
                id: 20106,
                clientId: 2,
                name: '修改凭证接口',
                url: '/v1/iot/access/credential',
                type: 2,
                permission: 'Im1222',
                method: 'PUT',
                sort: 1,
                parentId: 20104,
                status: 1,
                createdTime: '2024-04-16 00:00:00',
                updatedTime: '2024-05-13 18:09:16',
                createdBy: -1,
                updatedBy: -1
              }
            ],
            createdTime: '2024-04-16 00:00:00',
            updatedTime: '2024-05-13 18:09:16',
            createdBy: -1,
            updatedBy: -1
          },
          {
            id: 20107,
            clientId: 2,
            name: '删除',
            url: '/v1/iot/access/credential/*',
            type: 2,
            permission: 'Im123',
            method: 'DELETE',
            sort: 1,
            parentId: 20102,
            status: 1,
            createdTime: '2024-04-16 00:00:00',
            updatedTime: '2024-05-13 18:09:16',
            createdBy: -1,
            updatedBy: -1
          },
          {
            id: 20108,
            clientId: 2,
            name: '服务端订阅',
            type: 2,
            permission: 'm124',
            method: 'DELETE',
            sort: 1,
            parentId: 20102,
            status: 1,
            children: [
              {
                id: 20109,
                clientId: 2,
                name: '订阅列表',
                type: 2,
                permission: 'm1241',
                method: 'DELETE',
                sort: 1,
                parentId: 20108,
                status: 1,
                children: [
                  {
                    id: 20110,
                    clientId: 2,
                    name: '新增订阅',
                    type: 2,
                    permission: 'm12411',
                    method: 'POST',
                    sort: 1,
                    parentId: 20109,
                    status: 1,
                    children: [
                      {
                        id: 20111,
                        clientId: 2,
                        name: '消费组列表接口',
                        url: '/v1/iot/access/consumerGroup/list',
                        type: 2,
                        permission: 'Im124111',
                        method: 'POST',
                        sort: 1,
                        parentId: 20110,
                        status: 1,
                        createdTime: '2024-04-16 00:00:00',
                        updatedTime: '2024-05-13 18:09:16',
                        createdBy: -1,
                        updatedBy: -1
                      },
                      {
                        id: 20112,
                        clientId: 2,
                        name: '产品列表接口',
                        url: '/v1/iot/access/product/nameList',
                        type: 2,
                        permission: 'Im124112',
                        method: 'GET',
                        sort: 1,
                        parentId: 20110,
                        status: 1,
                        createdTime: '2024-04-16 00:00:00',
                        updatedTime: '2024-05-13 18:09:16',
                        createdBy: -1,
                        updatedBy: -1
                      },
                      {
                        id: 20113,
                        clientId: 2,
                        name: '新增接口',
                        url: '/v1/iot/access/consumerGroup/createProductInfo',
                        type: 2,
                        permission: 'Im124113',
                        method: 'POST',
                        sort: 1,
                        parentId: 20110,
                        status: 1,
                        createdTime: '2024-04-16 00:00:00',
                        updatedTime: '2024-05-13 18:09:16',
                        createdBy: -1,
                        updatedBy: -1
                      }
                    ],
                    createdTime: '2024-04-16 00:00:00',
                    updatedTime: '2024-05-13 18:09:16',
                    createdBy: -1,
                    updatedBy: -1
                  },
                  {
                    id: 20114,
                    clientId: 2,
                    name: '列表2',
                    url: '/v1/iot/access/consumerGroup/pageSubscribeProductInfo',
                    type: 2,
                    permission: 'm12412',
                    method: 'POST',
                    sort: 1,
                    parentId: 20109,
                    status: 1,
                    isPenultimate: true,
                    children: [
                      {
                        id: 20115,
                        clientId: 2,
                        name: '编辑',
                        type: 2,
                        permission: 'm124121',
                        method: 'POST',
                        sort: 1,
                        parentId: 20114,
                        status: 1,
                        children: [
                          {
                            id: 20116,
                            clientId: 2,
                            name: '消费组列表接口',
                            url: '/v1/iot/access/consumerGroup/list',
                            type: 2,
                            permission: 'Im1241211',
                            method: 'POST',
                            sort: 1,
                            parentId: 20115,
                            status: 1,
                            createdTime: '2024-04-16 00:00:00',
                            updatedTime: '2024-05-13 18:09:16',
                            createdBy: -1,
                            updatedBy: -1
                          },
                          {
                            id: 20117,
                            clientId: 2,
                            name: '产品列表接口',
                            url: '/v1/iot/access/product/nameList',
                            type: 2,
                            permission: 'Im1241212',
                            method: 'GET',
                            sort: 1,
                            parentId: 20115,
                            status: 1,
                            createdTime: '2024-04-16 00:00:00',
                            updatedTime: '2024-05-13 18:09:16',
                            createdBy: -1,
                            updatedBy: -1
                          },
                          {
                            id: 20118,
                            clientId: 2,
                            name: '详情接口',
                            url: '/v1/iot/access/consumerGroup/subscribeProductInfoDetail/*',
                            type: 2,
                            permission: 'Im1241213',
                            method: 'POST',
                            sort: 1,
                            parentId: 20115,
                            status: 1,
                            createdTime: '2024-04-16 00:00:00',
                            updatedTime: '2024-05-13 18:09:16',
                            createdBy: -1,
                            updatedBy: -1
                          },
                          {
                            id: 20119,
                            clientId: 2,
                            name: '保存接口',
                            url: '/v1/iot/access/consumerGroup/modifyProductInfo',
                            type: 2,
                            permission: 'Im1241214',
                            method: 'POST',
                            sort: 1,
                            parentId: 20115,
                            status: 1,
                            createdTime: '2024-04-16 00:00:00',
                            updatedTime: '2024-05-13 18:09:16',
                            createdBy: -1,
                            updatedBy: -1
                          }
                        ],
                        createdTime: '2024-04-16 00:00:00',
                        updatedTime: '2024-05-13 18:09:16',
                        createdBy: -1,
                        updatedBy: -1
                      },
                      {
                        id: 20120,
                        clientId: 2,
                        name: '删除',
                        url: '/v1/iot/access/consumerGroup/deleteSubscribeProductInfo',
                        type: 2,
                        permission: 'm124122',
                        method: 'POST',
                        sort: 1,
                        parentId: 20114,
                        status: 1,
                        createdTime: '2024-04-16 00:00:00',
                        updatedTime: '2024-05-13 18:09:16',
                        createdBy: -1,
                        updatedBy: -1
                      }
                    ],
                    createdTime: '2024-04-16 00:00:00',
                    updatedTime: '2024-05-13 18:09:16',
                    createdBy: -1,
                    updatedBy: -1
                  }
                ],
                createdTime: '2024-04-16 00:00:00',
                updatedTime: '2024-05-13 18:09:16',
                createdBy: -1,
                updatedBy: -1
              },
              {
                id: 20121,
                clientId: 2,
                name: '消费者组列表',
                type: 2,
                permission: 'm1242',
                method: 'DELETE',
                sort: 1,
                parentId: 20108,
                status: 1,
                children: [
                  {
                    id: 20122,
                    clientId: 2,
                    name: '新增消费组',
                    url: '/v1/iot/access/consumerGroup/createConsumerGroup',
                    type: 2,
                    permission: 'm12421',
                    method: 'POST',
                    sort: 1,
                    parentId: 20121,
                    status: 1,
                    createdTime: '2024-04-16 00:00:00',
                    updatedTime: '2024-05-13 18:09:16',
                    createdBy: -1,
                    updatedBy: -1
                  },
                  {
                    id: 20123,
                    clientId: 2,
                    name: '列表3',
                    url: '/v1/iot/access/consumerGroup/page',
                    type: 2,
                    permission: 'm12423',
                    method: 'POST',
                    sort: 1,
                    parentId: 20121,
                    status: 1,
                    children: [
                      {
                        id: 20125,
                        clientId: 2,
                        name: '删除',
                        url: '/v1/iot/access/consumerGroup/deleteConsumerGroup',
                        type: 2,
                        permission: 'm124231',
                        method: 'POST',
                        sort: 1,
                        parentId: 20123,
                        status: 1,
                        createdTime: '2024-04-16 00:00:00',
                        updatedTime: '2024-05-13 18:09:16',
                        createdBy: -1,
                        updatedBy: -1
                      }
                    ],
                    createdTime: '2024-04-16 00:00:00',
                    updatedTime: '2024-05-13 18:09:16',
                    createdBy: -1,
                    updatedBy: -1
                  }
                ],
                createdTime: '2024-04-16 00:00:00',
                updatedTime: '2024-05-13 18:09:16',
                createdBy: -1,
                updatedBy: -1
              }
            ],
            createdTime: '2024-04-16 00:00:00',
            updatedTime: '2024-05-13 18:09:16',
            createdBy: -1,
            updatedBy: -1
          }
        ],
        createdTime: '2024-04-16 00:00:00',
        updatedTime: '2024-05-13 18:09:16',
        createdBy: -1,
        updatedBy: -1
      }
    ],
    createdTime: '2024-04-16 00:00:00',
    updatedTime: '2024-05-13 18:09:16',
    createdBy: -1,
    updatedBy: -1
  },
  {
    id: 20200,
    clientId: 2,
    name: '设备分类管理',
    type: 2,
    permission: 'm2',
    sort: 1,
    parentId: 0,
    status: 1,
    children: [
      {
        id: 20201,
        clientId: 2,
        name: '新增设备分类',
        url: '/v1/iot/access/category',
        type: 2,
        permission: 'm21',
        method: 'POST',
        sort: 1,
        parentId: 20200,
        status: 1,
        createdTime: '2024-04-16 00:00:00',
        updatedTime: '2024-05-13 18:09:16',
        createdBy: -1,
        updatedBy: -1
      },
      {
        id: 20202,
        clientId: 2,
        name: '列表4',
        url: '/v1/iot/access/category/page',
        type: 2,
        permission: 'm22',
        method: 'POST',
        sort: 1,
        parentId: 20200,
        status: 1,
        isPenultimate: true,
        children: [
          {
            id: 20203,
            clientId: 2,
            name: '查看详情',
            url: '/v1/iot/access/category/*',
            type: 2,
            permission: 'm221',
            method: 'GET',
            sort: 1,
            parentId: 20202,
            status: 1,
            createdTime: '2024-04-16 00:00:00',
            updatedTime: '2024-05-13 18:09:16',
            createdBy: -1,
            updatedBy: -1
          },
          {
            id: 20204,
            clientId: 2,
            name: '编辑',
            type: 2,
            permission: 'm222',
            sort: 1,
            parentId: 20202,
            status: 1,
            children: [
              {
                id: 20205,
                clientId: 2,
                name: '详情',
                url: '/v1/iot/access/category/*',
                type: 2,
                permission: 'Im2221',
                method: 'GET',
                sort: 1,
                parentId: 20204,
                status: 1,
                createdTime: '2024-04-16 00:00:00',
                updatedTime: '2024-05-13 18:09:16',
                createdBy: -1,
                updatedBy: -1
              },
              {
                id: 20206,
                clientId: 2,
                name: '修改',
                url: '/v1/iot/access/category',
                type: 2,
                permission: 'Im2222',
                method: 'PUT',
                sort: 1,
                parentId: 20204,
                status: 1,
                createdTime: '2024-04-16 00:00:00',
                updatedTime: '2024-05-13 18:09:16',
                createdBy: -1,
                updatedBy: -1
              }
            ],
            createdTime: '2024-04-16 00:00:00',
            updatedTime: '2024-05-13 18:09:16',
            createdBy: -1,
            updatedBy: -1
          },
          {
            id: 20207,
            clientId: 2,
            name: '删除',
            url: '/v1/iot/access/category/*',
            type: 2,
            permission: 'm223',
            method: 'DELETE',
            sort: 1,
            parentId: 20202,
            status: 1,
            createdTime: '2024-04-16 00:00:00',
            updatedTime: '2024-05-13 18:09:16',
            createdBy: -1,
            updatedBy: -1
          }
        ],
        createdTime: '2024-04-16 00:00:00',
        updatedTime: '2024-05-13 18:09:16',
        createdBy: -1,
        updatedBy: -1
      }
    ],
    createdTime: '2024-04-16 00:00:00',
    updatedTime: '2024-05-13 18:09:24',
    createdBy: -1,
    updatedBy: -1
  }
]);

const roleData = ref([
  {
    id: 20428,
    roleId: 5,
    permissionId: 20100,
    createdTime: '2024-07-02 17:50:17',
    updatedTime: '2024-07-02 17:50:17'
  },
  {
    id: 20432,
    roleId: 5,
    permissionId: 20101,
    createdTime: '2024-07-02 17:50:17',
    updatedTime: '2024-07-02 17:50:17'
  },
  {
    id: 20436,
    roleId: 5,
    permissionId: 20102,
    createdTime: '2024-07-02 17:50:17',
    updatedTime: '2024-07-02 17:50:17'
  },
  {
    id: 20440,
    roleId: 5,
    permissionId: 20103,
    createdTime: '2024-07-02 17:50:17',
    updatedTime: '2024-07-02 17:50:17'
  },
  {
    id: 20444,
    roleId: 5,
    permissionId: 20104,
    createdTime: '2024-07-02 17:50:17',
    updatedTime: '2024-07-02 17:50:17'
  },
  {
    permissionId: 20107
  },
  {
    id: 20448,
    roleId: 5,
    permissionId: 20105,
    createdTime: '2024-07-02 17:50:17',
    updatedTime: '2024-07-02 17:50:17'
  },
  {
    id: 20452,
    roleId: 5,
    permissionId: 20106,
    createdTime: '2024-07-02 17:50:17',
    updatedTime: '2024-07-02 17:50:17'
  },
  {
    id: 20456,
    roleId: 5,
    permissionId: 20107,
    createdTime: '2024-07-02 17:50:17',
    updatedTime: '2024-07-02 17:50:17'
  },
  {
    id: 20460,
    roleId: 5,
    permissionId: 20108,
    createdTime: '2024-07-02 17:50:17',
    updatedTime: '2024-07-02 17:50:17'
  },
  {
    id: 20464,
    roleId: 5,
    permissionId: 20109,
    createdTime: '2024-07-02 17:50:17',
    updatedTime: '2024-07-02 17:50:17'
  },
  {
    id: 20468,
    roleId: 5,
    permissionId: 20110,
    createdTime: '2024-07-02 17:50:17',
    updatedTime: '2024-07-02 17:50:17'
  }
]);

const checkedPermissionIds = ref([
  200000, 201000, 201010, 201020, 201030, 201040, 201041, 201042, 201050, 202000, 202010, 202020, 202030, 205000, 205010, 205040,
  205030, 205020, 203000, 203010, 203020, 203030, 203040, 206000, 206010, 206020, 206030, 204000, 204050, 204030, 204040, 204010,
  204020
]);
const checkedPermissionIds2 = ref();
setTimeout(() => {
  checkedPermissionIds2.value = getTreeCheckedData((roleData.value || []).map((item: any) => item.permissionId));
  setTimeout(() => {
    checkedPermissionIds2.value = [20101];
  }, 2000);
}, 2000);

// 筛选去掉父级id
function getTreeCheckedData(ids: any) {
  let newIds = ids || [];
  if (!isEmpty(treeData.value) && !isEmpty(ids)) {
    const lunData = (list: any) => {
      if (!isEmpty(list)) {
        list.forEach((item: any) => {
          const { id, children } = item;
          if (!isEmpty(children)) {
            let index = newIds.indexOf(id);
            if (index >= 0) {
              // 有子节点 并且 子节点有勾选 去掉当前父节点id
              newIds.splice(index, 1);
            }
            lunData(children);
          }
        });
      }
    };
    lunData(treeData.value);
  }
  return newIds;
}

const canPrint = ref(true);

const visible = ref(false);

function handleCheck(data: any, checkeds: any) {
  console.log(data, checkeds);
}
</script>

<template>
  <div>
    <LSTree
      :tree-data="treeData"
      :is-check-all="true"
      :show-checkbox="true"
      :default-checked-keys="checkedPermissionIds"
      @handle-check="handleCheck"
    />

    <LSTree
      :tree-data="treeData2"
      :is-check-all="false"
      :show-checkbox="true"
      :default-checked-keys="checkedPermissionIds2"
      :attrs="{
        'check-on-click-leaf': false
      }"
      @handle-check="handleCheck"
    />

    <br />
    <LSButton @click="visible = true">测试</LSButton>
    <LSDialog v-model="visible" title="基础用法Title">
      <LSTree :tree-data="treeData2" :is-check-all="false" :show-checkbox="true" :default-checked-keys="checkedPermissionIds" />
    </LSDialog>

    <br />

    <LSPrint content="正在测试打印功能" btn-txt="打印" :can-print="canPrint" :icon-config="{ name: 'Printer' }" type="primary">
      <LSTree :tree-data="treeData" :is-check-all="false" :show-checkbox="true" :default-checked-keys="checkedPermissionIds" />
    </LSPrint>

    <LSPrint
      :print-obj="{
        id: '#treeV',
        popTitle: '打印测试2'
      }"
      content="正在测试打印功能2"
      btn-txt="打印3"
      :can-print="true"
      :icon-config="{ name: 'Printer' }"
      type="primary"
    />

    <LSPrint
      content="禁止内嵌打印内容"
      btn-txt="内嵌打印"
      :can-print="canPrint"
      :icon-config="{ name: 'Printer', color: 'red' }"
      type="primary"
    >
      <LSButton> 内嵌打印内容 </LSButton>
    </LSPrint>
  </div>
</template>

<style lang="scss" scoped></style>
