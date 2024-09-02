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
