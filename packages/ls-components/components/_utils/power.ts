/**
 * 权限查询和详情key，用于权限树勾选关联
 */
const POWER_KEY = {
  P: 'p',
  D: 'd'
};

// 执行权限树
export function excutePowerTree(data: any, curData: any, curCheckeds: any) {
  const { parentId, permission } = curData;
  const { checkedKeys, checkedNodes } = curCheckeds;

  if (!curData.children && parentId !== 0) {
    getCurLevelNodes(data, parentId, permission, checkedNodes, checkedKeys.includes(curData.id));
  }

  return checkedNodes;
}

// 获取当前层级的节点
function getCurLevelNodes(data: any, curParentId: any, curPermission: any, checkedNodes: any, isChecked: any) {
  data.forEach((item: any) => {
    if (item.id == curParentId) {
      if (isChecked) {
        if (!curPermission.startsWith(POWER_KEY.P)) {
          setCheckedNodes(item.children || [], checkedNodes, curPermission, isChecked);
        }
      } else {
        setCheckedNodes(item.children || [], checkedNodes, curPermission, isChecked);
      }
    } else if (item.children && item.children.length > 0) {
      getCurLevelNodes(item.children, curParentId, curPermission, checkedNodes, isChecked);
    }
  });
}

// 设置当前层级的节点
function setCheckedNodes(list: any, checkedNodes: any, curPermission: any, isChecked: any) {
  const isP = curPermission.startsWith(POWER_KEY.P);
  const isD = curPermission.startsWith(POWER_KEY.D);

  list.forEach((child: any) => {
    const { permission } = child;

    if (isChecked) {
      if (isD ? permission.startsWith(POWER_KEY.P) : permission.startsWith(POWER_KEY.P) || permission.startsWith(POWER_KEY.D)) {
        checkedNodes.push(child);
      }
    } else {
      checkedNodes.forEach((node: any, i: number) => {
        if ((isP && node.id === child.id) || (isD && node.id === child.id && !node.permission.startsWith(POWER_KEY.P))) {
          checkedNodes.splice(i, 1);
        }
      });
    }
  });
}
