import { isValidJSON } from './utils';

export const numbers01 = /^(?!0+(\.0+)?$)\d+(\.\d{1})?$/; // 大于0的数字且最多支持一位小数
export const numbers01_msg = '输入数值必须大于0且只支持一位小数！';

export const numbers02 = /^(?!0+(\.0+)?$)\d+(\.\d{1,2})?$/; // 大于0的数字且最多支持两位小数
export const numbers02_msg = '输入数值必须大于0且只支持两位小数！';

export const numbers03 = /^[1-9]\d*$/; // 正整数
export const numbers03_msg = '输入数值必须是正整数！';

export const numbers04 = /^[0-9]\d*$/; // 数字
export const numbers04_msg = '输入数值必须是数字！';

export const numbers05 = /^(0|[1-9]\d*)$/; // 非负数，不支持00,000,001,0001
export const numbers05_msg = '输入数值必须是非负整数！';

// 匹配由数字、字母和横杠（-）组成的字符串
export const string01 = /^[A-Za-z0-9\-]+$/;
export const string01_msg = '请输入数字、字母或横杠（-）的组合！';

// 匹配由数字、字母、下划线（_）和横杠（-）组成的字符串
export const string02 = /^[A-Za-z0-9\-_]+$/;
export const string02_msg = '请输入数字、字母、下划线（_）或横杠（-）的组合！';

export const psd = /^(?=.*[a-zA-Z])+(?=.*\d)+(?=.*[~!@#$%^&*\(\)_+\[\]<>.\-=])+.{12,24}$/; // 密码：12-24位数字、字母和符号组成

export const email = /^[.A-Za-z0-9_]+@[a-zA-Z0-9_-]+(.cn|.com|.net|.org|.miit.gov.cn)+$/;

export const mphone =
  /^((\\+?86)|(\\(\\+86\\)))?(13[0-9][0-9]{8}|14[0-9]{9}|15[0-9][0-9]{8}|16[0-9][0-9]{8}||17[0-9][0-9]{8}|18[0-9][0-9]{8}|19[0-9][0-9]{8})$$/;

const emailRule =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const phoneRule = /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1589]))\d{8}$/;

/**
 * 验证数字范围正整数
 */
export const validatorNumberRange = (rule: any, value: any, callback: any) => {
  const rules = numbers03;
  const { max, min } = value || {};
  const { msg, msg2, required } = rule;

  if ((!max || !min) && min !== 0 && max !== 0) {
    if (required) {
      callback(new Error(msg));
    } else {
      callback();
    }
  } else if (!rules.test(max) || !rules.test(min)) {
    if ((max === 0 || min === 0) && msg2) {
      callback(new Error(msg2));
    } else {
      callback(new Error(numbers03_msg));
    }
  } else if (Number(min) >= Number(max)) {
    callback(new Error('最小值必须小于最大值'));
  } else {
    callback();
  }
};

/**
 *  验证数字范围最多两位小数
 */
export const validatorNumberFloat2Range = (rule: any, value: any, callback: any) => {
  const rules = numbers02;
  const { max, min } = value || {};
  const { msg, required } = rule;

  if (!required && !min && !min) {
    callback();
  } else {
    if (!max || !min) {
      callback(new Error(msg));
    } else if (!rules.test(max) || !rules.test(min)) {
      callback(new Error(numbers02_msg));
    } else if (Number(min) >= Number(max)) {
      callback(new Error('最小值必须小于最大值'));
    } else {
      callback();
    }
  }
};

/**
 * 验证数字最多两位小数
 * @param rule
 * @param value
 * @param callback
 */
export const validatorNumberFloat2 = (rule: any, value: any, callback: any) => {
  const rules = numbers02;
  const { msg, required } = rule;
  if (!value) {
    if (required) {
      callback(new Error(msg));
    } else {
      callback();
    }
  } else if (!rules.test(value)) {
    callback(new Error(numbers02_msg));
  } else {
    callback();
  }
};

/**
 * 验证数字正整数, maxVal 为最大值
 * @param rule
 * @param value
 * @param callback
 */
export const validatorNumberInt = (rule: any, value: any, callback: any) => {
  const rules = numbers03;
  const { msg, required, maxVal } = rule;
  if (!value) {
    if (required) {
      callback(new Error(msg));
    } else {
      callback();
    }
  } else if (!rules.test(value)) {
    callback(new Error(numbers03_msg));
  } else if (value > maxVal) {
    callback(new Error(`输入数字不能超过${maxVal}`));
  } else {
    callback();
  }
};

/**
 *  验证json
 * @param rule
 * @param value
 * @param callback
 */
export const validatorJson = (rule: any, value: any, callback: any) => {
  const { msg, required } = rule;
  if (!value) {
    if (required) {
      callback(new Error(msg));
    } else {
      callback();
    }
  } else if (!isValidJSON(value)) {
    callback(new Error('数据格式必须为json格式, 且不能为空json！'));
  } else {
    callback();
  }
};

/**
 * 匹配由数字、字母和横杠（-）组成的字符串
 * @param rule
 * @param value
 * @param callback
 */
export const validatorString01 = (rule: any, value: any, callback: any) => {
  const rules = string01;
  const { msg, required } = rule;
  if (!value) {
    if (required) {
      callback(new Error(msg));
    } else {
      callback();
    }
  } else if (!rules.test(value)) {
    callback(new Error(string01_msg));
  } else {
    callback();
  }
};

/**
 * 匹配由数字、字母、下划线（_）和横杠（-）组成的字符串
 * @param rule
 * @param value
 * @param callback
 */
export const validatorString02 = (rule: any, value: any, callback: any) => {
  const rules = string02;
  const { msg, required } = rule;
  if (!value) {
    if (required) {
      callback(new Error(msg));
    } else {
      callback();
    }
  } else if (!rules.test(value)) {
    callback(new Error(string02_msg));
  } else {
    callback();
  }
};

/**
 *  验证数组
 * @param rule
 * @param value
 * @param callback
 */
export const validateArray = (rule: any, value: any, callback: any) => {
  const rules = /^\[(([0-9]+(\.[0-9]+)?|"[^"]*")(, ?)?)*\]$/;
  const { msg, required } = rule;
  if (!value) {
    if (required) {
      callback(new Error(msg));
    } else {
      callback();
    }
  } else if (!rules.test(value)) {
    callback(new Error('格式错误，请输入array格式参数'));
  } else {
    callback();
  }
};

/**
 *  验证邮箱或手机号，用于账号名
 * @param rule
 * @param value
 * @param callback
 */
export const validatorAccount = (rule: any, value: any, callback: any) => {
  const { msg, required } = rule;
  if (!value) {
    if (required) {
      callback(new Error(msg));
    } else {
      callback();
    }
  } else if (!emailRule.test(value) && !phoneRule.test(value)) {
    callback(new Error('邮箱或手机号格式不正确'));
  } else {
    callback();
  }
};

export default {
  validatorNumberRange,
  validatorNumberFloat2Range,
  validatorNumberInt,
  validatorJson,
  validatorString01,
  validatorString02,
  validateArray,
  validatorAccount
};
