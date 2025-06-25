<script setup lang="ts">
import { isEmpty } from '@cpo/_utils/utils';
const treeData = ref([
  {
    id: 1,
    name: '权益管理',
    permission: '1',
    parentId: 0,
    children: [
      {
        id: 11,
        name: '权益车辆',
        permission: '11',
        parentId: 1,
        isPenultimate: true,
        children: [
          {
            id: 111,
            name: '导出',
            permission: '111',
            parentId: 11
          },
          {
            id: 112,
            name: '导入',
            permission: '112',
            parentId: 11
          }
        ]
      },
      {
        id: 22,
        name: '权益海报',
        permission: '11',
        parentId: 1
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

const checkedPermissionIds = ref();
setTimeout(() => {
  checkedPermissionIds.value = getTreeCheckedData((roleData.value || []).map((item: any) => item.permissionId));
  // console.log(checkedPermissionIds.value);
  setTimeout(() => {
    checkedPermissionIds.value = [20101];
    // console.log(checkedPermissionIds.value);
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
</script>

<template>
  <div>
    <LSTree :tree-data="treeData" :is-check-all="true" :show-checkbox="true" :default-checked-keys="checkedPermissionIds" />

    <LSTree :tree-data="treeData2" :is-check-all="false" :show-checkbox="true" :default-checked-keys="checkedPermissionIds" />

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
