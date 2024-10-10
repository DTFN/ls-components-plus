---
outline: deep
---

# Tree 权限树

::: warning 基于el-tree二次封装，保留原属性和方法。
:::

## 使用方式

<LSTree
  :data="treeData"
  :is-check-all="true"
  :show-checkbox="true"
  :default-checked-keys="checkedPermissionIds"
  direction="v"
/>

<LSTree
  :data="treeData"
  :is-check-all="true"
  :show-checkbox="true"
  :default-checked-keys="checkedPermissionIds"
  direction="h"
/>

<script setup>
import { ref } from 'vue';
import { isEmpty } from '../.vitepress/utils/';

const treeData = ref([
  {
    id: 20100,
    name: '凭证管理',
    permission: 'm1',
    parentId: 0,
    children: [
      {
        id: 20101,
        name: '新增凭证',
        permission: 'm11',
        parentId: 20100
      },
      {
        id: 20102,
        name: '列表',
        permission: 'm12',
        parentId: 20100,
        children: [
          {
            id: 20103,
            name: '查看详情',
            permission: 'm121',
            parentId: 20102,
            status: 1
          },
          {
            id: 20104,
            name: '编辑',
            permission: 'm122',
            parentId: 20102,
            children: [
              {
                id: 20105,
                name: '凭证详情接口',
                permission: 'Im1221',
                parentId: 20104,
              },
              {
                id: 20106,
                name: '修改凭证接口',
                permission: 'Im1222',
                parentId: 20104,
              },
              {
                id: 20124,
                name: '查看详情接口',
                permission: 'Im1223',
                parentId: 20104,
              }
            ]
          },
          {
            id: 20107,
            name: '删除',
            permission: 'm123',
            parentId: 20102
          },
          {
            id: 20108,
            name: '服务端订阅',
            type: 2,
            permission: 'm124',
            parentId: 20102,
            children: [
              {
                id: 20109,
                name: '订阅列表',
                permission: 'm1241',
                parentId: 20108,
                children: [
                  {
                    id: 20110,
                    name: '新增订阅',
                    permission: 'm12411',
                    parentId: 20109,
                    children: [
                      {
                        id: 20111,
                        name: '消费组列表接口',
                        permission: 'Im124111',
                        parentId: 20110,
                      },
                      {
                        id: 20112,
                        name: '产品列表接口',
                        permission: 'Im124112',
                        parentId: 20110,
                      },
                      {
                        id: 20113,
                        name: '新增接口',
                        permission: 'Im124113',
                        parentId: 20110,
                      }
                    ],
                  },
                  {
                    id: 20114,
                    name: '列表',
                    permission: 'm12412',
                    parentId: 20109,
                    children: [
                      {
                        id: 20115,
                        name: '编辑',
                        permission: 'm124121',
                        parentId: 20114,
                        children: [
                          {
                            id: 20116,
                            name: '消费组列表接口',
                            permission: 'Im1241211',
                            parentId: 20115,
                          },
                          {
                            id: 20117,
                            name: '产品列表接口',
                            permission: 'Im1241212',
                            parentId: 20115,
                          },
                          {
                            id: 20118,
                            name: '详情接口',
                            permission: 'Im1241213',
                            parentId: 20115,
                          },
                          {
                            id: 20119,
                            name: '保存接口',
                            permission: 'Im1241214',
                            parentId: 20115,
                          }
                        ],
                      },
                      {
                        id: 20120,
                        name: '删除',
                        permission: 'm124122',
                        parentId: 20114,
                      }
                    ],
                  }
                ],
              }
            ]
          }
        ]
      }
    ]
  }
]);

const roleData = ref([
  {
    id: 20428,
    permissionId: 20100,
  },
  {
    id: 20432,
    permissionId: 20101,
  },
  {
    id: 20436,
    permissionId: 20102,
  },
  {
    id: 20440,
    permissionId: 20103,
  },
  {
    id: 20444,
    permissionId: 20104,
  },
  {
    id: 20448,
    permissionId: 20105,
  },
  {
    id: 20452,
    permissionId: 20106,
  },
  {
    id: 20456,
    permissionId: 20107,
  },
  {
    id: 20460,
    permissionId: 20108,
  },
  {
    id: 20464,
    permissionId: 20109,
  },
  {
    id: 20468,
    permissionId: 20110,
  }
]);

const checkedPermissionIds = ref();

checkedPermissionIds.value = getTreeCheckedData((roleData.value || []).map((item) => item.permissionId));

// 筛选去掉父级id
function getTreeCheckedData(ids) {
  let newIds = ids || [];
  if (!isEmpty(treeData.value) && !isEmpty(ids)) {
    const lunData = (list) => {
      if (!isEmpty(list)) {
        list.forEach((item) => {
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
</script>
