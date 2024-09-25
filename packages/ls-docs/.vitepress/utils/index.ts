// 判断是否是空可以为0
export const isEmpty = (val: any) => {
  if (val === null) {
    return true;
  }
  const type = typeof val;
  if (type === 'undefined') {
    return true;
  }
  if (type === 'string') {
    val = val.replace(/^\s*|\s*$/g, '');
    if (val === '') {
      return true;
    }
  }

  if (type === 'number') {
    if (isNaN(val)) {
      return true;
    }
  }
  if (type === 'object') {
    if (Object.keys(val).length === 0) {
      return true;
    }
  }
  if (type === 'boolean') {
    return false;
  }
  return false;
};

export const formatNumber = (num: number): string | number => {
  if (isEmpty(Number(num))) {
    return num;
  }
  return Number(num).toLocaleString();
};

export const setLegendOption = () => {
  const cWidth: number = document.body.clientWidth;
  return {
    width: cWidth > 1440 ? 110 : 70
  };
};

export const updateTheme = () => {
  if (!(import.meta as any).env.SSR) {
    if (
      (localStorage && localStorage['vitepress-theme-appearance'] === 'dark') ||
      (!('vitepress-theme-appearance' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
};

export const cpoVue2Origin = () => {
  const env = (import.meta as any).env;
  let url = '';
  if (env.MODE === 'development') {
    url = 'http://localhost:8101';
  } else {
    url = 'http://testing-cpouse.sh.energy-blockchain.com';
  }
  return url;
};

const pattern =
  /[a-zA-Z0-9_\u0392-\u03C9\u00C0-\u00FF\u0600-\u06FF\u0400-\u04FF]+|[\u4E00-\u9FFF\u3400-\u4DBF\uF900-\uFAFF\u3040-\u309F\uAC00-\uD7AF]+/g;

export function countWord(data: string) {
  const m = data.match(pattern);
  let count = 0;
  if (!m) {
    return 0;
  }
  for (let i = 0; i < m.length; i += 1) {
    if (m[i].charCodeAt(0) >= 0x4e00) {
      count += m[i].length;
    } else {
      count += 1;
    }
  }
  return count;
}
