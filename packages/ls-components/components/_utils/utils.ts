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

/**
 * 动态加载js
 * @param list
 * @returns
 */
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
          script.remove();
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
 * 动态加载css
 * @param list
 * @returns
 */
export const loadCss = (list: Array<any> = []) => {
  const pAll: any = [];
  list.forEach((item: any) => {
    pAll.push(
      new Promise((resolve, reject) => {
        const link = document.createElement('link');
        link.id = item.id;
        link.rel = 'stylesheet';
        link.href = item.src;
        document.body.appendChild(link);
        link.onload = function () {
          resolve({});
        };
        link.onerror = function () {
          link.remove();
          reject({});
        };
      })
    );
  });
  return Promise.all(pAll);
};

export const removeCss = (list: Array<any> = []) => {
  list.forEach((item: any) => {
    const link = document.getElementById(item.id);
    if (link) {
      link.remove();
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
  if (aMax <= tMax) {
    aMax = numberFixed(aMax + interval, fixed);
  }
  return {
    aMax,
    aMin: min == 0 || min < tMin ? min : numberFixed(min - interval, fixed),
    aInterval: interval
  };
}

export function isValidJSON(str: any) {
  try {
    str = JSON.parse(str);
    if (str !== null && typeof str === 'object') {
      return str.constructor === Object;
    } else {
      return false;
    }
  } catch {
    return false;
  }
}

// 合并buffer数据
export function mergeBuffer(bufferArray: any[]) {
  // 创建一个空的 ArrayBuffer 用来存储合并后的数据
  const byteLength = bufferArray.reduce((total: number, bytes: ArrayBuffer) => total + bytes.byteLength, 0); // 总长度
  const mergedBuffer = new ArrayBuffer(byteLength); // 创建
  const view = new Uint8Array(mergedBuffer); // view为最终产物
  let offset = 0;
  // 将所有的二进制字节数组合并到 mergedBuffer 中
  bufferArray.forEach(bytes => {
    view.set(new Uint8Array(bytes.file), offset);
    offset += bytes.byteLength;
  });
  return view;
}

export function fileToBuffer(base64: any) {
  const binaryString = window.atob(base64);
  // 获取二进制字符串的长度
  const length = binaryString.length;
  // 创建一个字节数组
  const bytes = new Uint8Array(length);

  for (let i = 0; i < length; i++) {
    // 将二进制字符串的每个字符转换为对应的ASCII码
    bytes[i] = binaryString.charCodeAt(i);
  }

  return new Uint8Array(bytes).buffer;
}

function getElementFullSize(element: any) {
  if (!element) {
    return {
      width: 0,
      height: 0
    };
  }
  // 获取元素的尺寸（包含 padding 和 border）
  const rect = element.getBoundingClientRect();

  // 获取元素的外边距 (margin)
  const style = window.getComputedStyle(element);
  const marginLeft = parseFloat(style.marginLeft);
  const marginRight = parseFloat(style.marginRight);
  const marginTop = parseFloat(style.marginTop);
  const marginBottom = parseFloat(style.marginBottom);

  // 计算总宽度和高度，包含 margin、padding 和 border
  const totalWidth = rect.width + marginLeft + marginRight;
  const totalHeight = rect.height + marginTop + marginBottom;

  return {
    width: totalWidth,
    height: totalHeight
  };
}

export function elementOutOfBounds(element: any, containerDom?: any) {
  const rect = element.getBoundingClientRect();
  const windowWidth = window.innerWidth;
  // const windowHeight = window.innerHeight;
  const { width: domW } = getElementFullSize(containerDom);

  const { left, right } = rect || {};
  let pos = '';
  if (left < windowWidth - domW && right < (domW || windowWidth)) {
    pos = 'left';
  } else if (right > windowWidth) {
    pos = 'right';
  }
  return pos;
}

/**
 * @param len 随机码长度
 * @returns
 */
export function getRandomNum(len: number) {
  return Math.random()
    .toString(36)
    .substring(2, 2 + len);
}

export default {
  isEmpty,
  exportFile,
  getExtension,
  loadJs,
  removeJs,
  loadCss,
  removeCss,
  getRandomHexColor,
  numberFixed,
  isValidJSON,
  mergeBuffer,
  fileToBuffer
};
