import { buildProps } from '@cpo/_utils/runtime';

type lisType = {
  slotName: string;
  boxBgColor?: string;
  arrowPos?: string;
  linePos?: string;
  lineColor?: string;
  lineLength?: number;
  lineWidth?: number;
  boxPos?: string;
  boxPosVal?: number;
};

export const lsFlowBoxProps = buildProps({
  /**
   * box列表
   * slotName: 内容区域对应的插槽名称
   * boxBgColor: box背景颜色
   * arrowPos: 箭头位置 top bottom left right 不填会重叠
   * linePos: 连线位置 top left 不填会重叠
   * lineColor: 连线颜色
   * lineLength: 连线长度
   * lineWidth: 连线宽度
   * boxPos: box位置  top bottom left right
   * boxPosVal: box距离
   */
  list: {
    type: Array<lisType>,
    default: () => []
  }
});
