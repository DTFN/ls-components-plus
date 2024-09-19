import { buildProps } from '@cpo/_utils/runtime';

export const lsBellMessageProps = buildProps({
  // 全部已读接口
  readAllApi: {
    type: Function as PropType<() => Promise<any>>,
    default: null
  },
  // 读取单条记录接口
  readApi: {
    type: Function as PropType<(id: number | string) => Promise<any>>,
    default: null
  },
  // 消息列表接口
  msgPageApi: {
    type: Function as PropType<(page: number, pageSize: number) => Promise<any>>,
    default: null
  }
});

export const emitNames = ['updateNotice'];
