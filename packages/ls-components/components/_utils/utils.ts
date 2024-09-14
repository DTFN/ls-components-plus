// 判断是否是空可以为0
export function isEmpty(val: any) {
  if (val === null) return true;

  const type: 'string' | 'number' | 'bigint' | 'boolean' | 'symbol' | 'undefined' | 'object' | 'function' = typeof val;

  if (type === 'undefined') return true;

  if (type === 'string') {
    val = val.replace(/^\s*|\s*$/g, '');

    if (val === '') return true;
  }

  if (type === 'number') {
    if (Number.isNaN(val)) return true;
  }

  if (type === 'object') {
    if (Object.keys(val).length === 0) return true;
  }

  if (type === 'boolean') return false;

  return false;
}

// 导出文件
export function exportFile(res: Blob, fileName: string) {
  try {
    const blob = new Blob([res]);
    const blobUrl = URL.createObjectURL(blob);
    const link = document.createElement('a');

    link.style.display = 'none';
    link.href = blobUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(blobUrl);
  } catch (error) {
    console.log(error);
  }
}

// blob 转 url
export function blobUrl(res: any) {
  if (res) {
    const blob = new Blob([res.data]);

    return URL.createObjectURL(blob);
  }

  return null;
}

// 文件名后缀
export function getExtension(filename: string) {
  if (isEmpty(filename)) return '';
  const index = filename.lastIndexOf('.');

  return index >= 0 ? filename.substring(index) : '';
}

// 校验文件类型
export function validateFileType(accept: string, rawFile: File): boolean {
  if (!accept) return true;

  // 文件类型
  const fileType = rawFile.type.toLowerCase();
  // 文件后缀名
  const fileFormat = getExtension(rawFile.name).toLowerCase();

  // 分割 accept 参数，得到 MIME 类型数组
  const acceptedTypes = accept.split(',');

  // 检查 rawFile 的类型是否在接受的 MIME 类型列表中
  const isValidType = acceptedTypes.some(type => {
    // 处理每种 MIME 类型，去除可能的空格 转换成小写
    type = type.trim().toLowerCase();

    if (type.includes('/')) {
      // 如果文件类型匹配（考虑 'image/*' 或 '*/*' 通配符）
      if (type.includes('*')) return fileType.startsWith(type.replace('*', ''));

      return type === fileType;
    }

    // 对比文件后缀
    return fileFormat === type;
  });

  return isValidType;
}

export const loadJs = (list: Array<any> = []) => {
  const pAll: any = [];
  list.forEach((item: any) => {
    pAll.push(
      new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.id = item.id;
        script.src = item.src;
        document.body.appendChild(script);
        script.onload = function () {
          resolve({});
        };
        script.onerror = function () {
          reject({});
        };
      })
    );
  });
  return Promise.all(pAll);
};

export const removeJs = (list: Array<any> = []) => {
  list.forEach((item: any) => {
    const script = document.getElementById(item.id);
    if (script) {
      script.remove();
    }
  });
};

/**
 * 获取随机颜色
 */
export function getRandomHexColor() {
  const hex = Math.floor(Math.random() * 16777215).toString(16);
  return `#${hex.padStart(6, '0')}`;
}

/**
 * 获取月份
 */
export function getMonths() {
  return Array.from({ length: 12 }, (_, index) => `${index + 1}月`);
}

/**
 * 获取小时
 */
export function getHours() {
  return Array.from({ length: 24 }, (_, index) => `${index < 10 ? '0' + index : index}时`);
}

/**
 * 数字保留x小数
 */
export function numberFixed(num: any, len?: number) {
  return Number((Math.ceil(num * 100) / 100).toFixed(len || 1));
}

/**
 * 图表参数计算
 */
export function formatChartAxis(max: any, min: any, fixed?: number) {
  const tMax = max;
  const tMin = min;
  fixed = fixed || 0;
  max = numberFixed(max, fixed);
  min = numberFixed(min, fixed);
  let interval = numberFixed((max - min) / 2, fixed);
  interval = interval == 0 ? 0.1 : interval;
  let dep = Math.ceil((max - min) / interval);
  dep = dep == 0 ? 1 : dep;
  if (min < interval) {
    min = 0;
  }
  let aMax = numberFixed(interval * dep + min, fixed);
  if (aMax < tMax) {
    aMax = numberFixed(aMax + interval, fixed);
  }
  return {
    aMax,
    aMin: min == 0 || min < tMin ? min : numberFixed(min - interval, fixed),
    aInterval: interval
  };
}
