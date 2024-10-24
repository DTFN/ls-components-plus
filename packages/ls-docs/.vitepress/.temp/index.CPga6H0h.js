const isEmpty = val => {
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
const pattern =
  /[a-zA-Z0-9_\u0392-\u03C9\u00C0-\u00FF\u0600-\u06FF\u0400-\u04FF]+|[\u4E00-\u9FFF\u3400-\u4DBF\uF900-\uFAFF\u3040-\u309F\uAC00-\uD7AF]+/g;
function countWord(data) {
  const m = data.match(pattern);
  let count = 0;
  if (!m) {
    return 0;
  }
  for (let i = 0; i < m.length; i += 1) {
    if (m[i].charCodeAt(0) >= 19968) {
      count += m[i].length;
    } else {
      count += 1;
    }
  }
  return count;
}
export { countWord as c, isEmpty as i };
