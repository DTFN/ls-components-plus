// 下拉选择框选项获取
export default function () {
  function getList(api: any, params: any = {}, value: Ref<any[]>, dealItem: Function | null = null, isRecords: boolean = true) {
    let newParams = {
      ...params,
    }

    if (isRecords) {
      newParams = {
        currentPage: 1,
        pageSize: 1000,
        ...params,
      }
    }
    api(newParams).then((res: any) => {
      const data: any[] = (isRecords ? res.records : res) || []
      const list: any[] = []

      if (data && data.length) {
        data.forEach((item: any) => {
          if (dealItem) {
            const newItem = dealItem(item)

            if (newItem)
              list.push(newItem)
          }
          else {
            const { id, name } = item

            list.push({
              value: id,
              label: name,
            })
          }
        })
      }

      value.value = list
    })
  }

  return {
    getList,
  }
}
