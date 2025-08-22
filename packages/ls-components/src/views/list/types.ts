type statusMapType = typeof statusMap;

interface valueTypes {
  value: string | number | boolean;
  label: string;
  type?: string;
}

export type nameTypes = keyof statusMapType;

export const ALL_OPTIONS: Array<valueTypes> = [
  {
    value: '',
    label: '全部'
  }
];

// type字段用于table中的颜色设置
export const statusMap: Record<string, Array<valueTypes>> = {
  // 权益状态
  EquityStatusOptions: [
    {
      value: 1,
      label: '上线'
    },
    {
      value: 0,
      label: '下线'
    }
  ],
  // 权益类型
  EquityTypeOptions: [
    {
      value: 0,
      label: '尊享包'
    },
    {
      value: 1,
      label: '增值包'
    }
  ],
  // 协议类型
  ProtocolTypeOptions: [
    {
      value: 1,
      label: '服务协议'
    },
    {
      value: 2,
      label: '隐私政策'
    }
  ],
  // 报告状态
  ReportStatusOptions: [
    {
      value: 2,
      label: '待盖章'
    },
    {
      value: 1,
      label: '通过'
    },
    {
      value: 0,
      label: '不通过'
    }
  ],
  // 享权子状态
  ApplyStatusOptions: [
    {
      value: '4',
      label: '享权处理中'
    },
    {
      value: '5',
      label: '享权驳回'
    },
    {
      value: '6',
      label: '享权完成'
    }
  ],
  // 申请主状态
  ApplyMainStatusOptions: [
    {
      value: 1,
      label: '进行中'
    },
    {
      value: 2,
      label: '已完成'
    }
  ],
  // 申请子状态
  //  0-已提交 1-已受理 2-申请未通过 3-待补充享权材料
  ApplySubStatusOptions: [
    {
      value: 0,
      label: '申请已提交'
    },
    {
      value: 1,
      label: '申请已受理'
    },
    {
      value: 2,
      label: '申请未通过'
    },
    {
      value: 3,
      label: '待补充享权材料'
    }
  ],
  // 受理状态
  AssessStatusOptions: [
    {
      value: true,
      label: '通过'
    },
    {
      value: false,
      label: '驳回'
    }
  ],
  // 数据调取状态
  DataFetchStatusOptions: [
    {
      value: true,
      label: '成功'
    },
    {
      value: false,
      label: '失败'
    }
  ],
  // 事故报告分析状态/定责报告结果状态
  ReportResultStatusOptions: [
    {
      value: 0,
      label: '待盖章'
    },
    {
      value: 1,
      label: '通过'
    },
    {
      value: 2,
      label: '不通过'
    }
  ],

  // 享权材料上传状态
  UploadStatusOptions: [
    {
      value: true,
      label: '已上传'
    },
    {
      value: false,
      label: '未上传'
    }
  ],
  // 成功和失败
  SuccessOrFailOptions: [
    {
      value: 1,
      label: '成功'
    },
    {
      value: 2,
      label: '失败'
    }
  ],
  // 动力类型
  PowerTypeOptions: [
    {
      value: 1,
      label: '燃油'
    },
    {
      value: 2,
      label: '电动'
    },
    {
      value: 3,
      label: '混合动力'
    }
  ],
  // 性别
  SexTypeOptions: [
    {
      value: 0,
      label: '女'
    },
    {
      value: 1,
      label: '男'
    }
  ],
  // 数据存证状态
  ProofStatusOptions: [
    {
      value: 0,
      label: '待上链'
    },
    {
      value: 1,
      label: '成功'
    },
    {
      value: 2,
      label: '失败'
    }
  ],
  // 数据校验结果
  CheckResultOptions: [
    {
      value: 0,
      label: '未通过'
    },
    {
      value: 1,
      label: '通过'
    }
  ],
  // 是否
  booleanOptions: [
    {
      value: true,
      label: '是'
    },
    {
      value: false,
      label: '否'
    }
  ],
  // 享权判定状态 0-驳回 1-通过
  decisionStatusOptions: [
    {
      value: 0,
      label: '驳回'
    },
    {
      value: 1,
      label: '通过'
    }
  ],
  // 权益支付状态 9-打款中 10-已打款
  paymentStatusOptions: [
    {
      value: 9,
      label: '打款中'
    },
    {
      value: 10,
      label: '已打款'
    }
  ],
  insuranceStatusOptions: [
    {
      value: 0,
      label: '待审核'
    },
    {
      value: 1,
      label: '待审核'
    },
    {
      value: 2,
      label: '退保成功'
    },
    {
      value: 3,
      label: '退保失败'
    }
  ],
  platformOptions: [
    {
      value: 1,
      label: '【车主端】'
    },
    {
      value: 2,
      label: '【车企端】'
    },
    {
      value: 3,
      label: '【检测端】'
    },
    {
      value: 4,
      label: '【保司端】'
    }
  ]
};

/**
 * 获取状态数组列表
 * @param name ：在 statusMap 中定义的 name
 * @param autoFillAll 是否自动添加 "全部"
 * @returns 返回数组
 */
export function getStatusList(
  name: nameTypes,
  autoFillAll: boolean = true
): Array<{ label: string; value: string | number | boolean }> {
  if (!autoFillAll) return statusMap[name];

  return [
    {
      value: '', // el-select 限制 value 不能为 undefined null ,添加empty-values设置
      label: '全部'
    },
    ...statusMap[name]
  ];
}

/**
 * 获取状态数组 map 对象
 * @param name ：在 statusMap 中定义的 name
 * @returns 返回对象
 */
export function getStatusMap(name: nameTypes): Record<string, valueTypes> {
  const obj: any = {};
  const arr = statusMap[name];
  arr.forEach((item: any) => {
    // null、undefined、'' 不能作为 key
    if (item.value !== null && item.value !== undefined && item.value !== '') {
      // 初始化
      obj[item.value] = {};
      // 把每个key放进去
      const keys = Object.keys(item);
      keys.forEach(k => {
        obj[item.value][k] = item[k];
      });
    }
    obj.null = {
      label: '-'
    };
  });

  return obj;
}
