import axios from 'axios';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
import { ElMessage } from 'element-plus';

/**
 * 需要重定向到登录页的错误code
 * 5002：当前登录已过期
 */
const RESTLOGIN_CODE = [5002];

/**
 * patch封装
 */
export function patch(api: string, data: any = {}, method: string = 'PATCH'): Promise<any> {
  return request(api, data, method, getHeader());
}

/**
 * put封装
 */
export function put(api: string, data: any = {}, method: string = 'PUT'): Promise<any> {
  return request(api, data, method, getHeader());
}

/**
 * post封装
 */
export function post(api: string, data: any = {}, method: string = 'POST'): Promise<any> {
  return request(api, data, method, getHeader());
}

/**
 * get封装
 */
export function get(api: string, data: any = {}, method: string = 'GET', config?: any): Promise<any> {
  return request(api, data, method, getHeader(), config);
}

/**
 * delete封装
 */
export function del(api: string, data: any = {}, method: string = 'DELETE'): Promise<any> {
  return request(api, data, method, getHeader());
}

export function delBody(api: string, data: any = {}, method: string = 'DEL_BODY'): Promise<any> {
  return request(api, data, method, getHeader());
}

/**
 * 上传文件
 */
export function upload(api: string, data: any = {}, method: string = 'POST'): Promise<any> {
  return request(api, data, method, getHeader('multipart/form-data'));
}

// 添加响应拦截器
// 1.网络错误处理
// 2.授权错误处理
// 3.普通错误处理
// 4.代码异常处理
axios.interceptors.response.use(
  (response: any) => {
    return response;
  },
  () => {
    return null;
  }
);

export function getHeader(ContentType: string = 'application/json') {
  return {
    'Content-Type': ContentType || 'application/json',
    username: 'blue2',
    Authorization:
      'Bearer eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiIyMiIsInN1YiI6ImJsdWUyIiwiaWF0IjoxNzM3MDA2NzI3LCJleHAiOjE3MzcwMDg1Mjd9.inkmOw2D80nBv-3P7E6NOJVcQoH56F6NSFo4fsh1aeO1WaAiJmEGz_gqaVB0bhBPxBgSn5vGn51R05p4ayb1cQ',
    Token:
      'Bearer eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiIyMiIsInN1YiI6ImJsdWUyIiwiaWF0IjoxNzM3MDA2NzI3LCJleHAiOjE3MzcwMDg1Mjd9.inkmOw2D80nBv-3P7E6NOJVcQoH56F6NSFo4fsh1aeO1WaAiJmEGz_gqaVB0bhBPxBgSn5vGn51R05p4ayb1cQ'
  };
}

let loginCount = 0;

export function request(api: string, params: any = {}, method: string, header: any, config?: any): Promise<any> {
  return new Promise((resolve, reject) => {
    const data: string = method.toLocaleLowerCase() === 'get' || method.toLocaleLowerCase() === 'delete' ? 'params' : 'data';

    method = method == 'DEL_BODY' ? 'DELETE' : method;

    const baseUrl: string = 'http://tds-connector4.test.sh.energy-blockchain.com';
    const fullUrl: string = /^https?/.test(api) ? api : baseUrl + api;

    // 请求
    axios({
      url: fullUrl,
      [data]: params,
      method: method,
      headers: header,
      signal: config?.signal
    })
      .then((result: any = {}) => {
        const { data: { code = '', msg = '', data = {} } = {} } = result || {};

        if (code === 200 || code == 'SUCCESS') {
          resolve(data);
        } else {
          if (RESTLOGIN_CODE.includes(code)) {
            // 登录过期，跳转到登录页
            if (loginCount) return;
            loginCount++;
          } else {
            if (code == 403) {
              msg && ElMessage.error(msg);
            }
            const { data } = result || {};

            reject(data);
          }
        }
      })
      .catch(err => {
        reject(err);
      });
  });
}

// blob转url
function blobToDataUrl(blob: any) {
  return new Promise(resolve => {
    let reader = new FileReader();

    reader.onload = function (e) {
      resolve(e.target?.result);
    };
    reader.readAsDataURL(blob);
  });
}

/**
 * 下载文件
 */
export const downLoadFile = (
  filename: string = '',
  api: string,
  params: any = {},
  data: any = {},
  method: string = 'post',
  exportName: boolean = true,
  type: string = 'download'
) => {
  return new Promise((resolve, reject) => {
    const baseUrl: string = '';
    const fullUrl: string = /^https?/.test(api) ? api : baseUrl + api;
    axios({
      url: fullUrl,
      params,
      data,
      method,
      headers: getHeader(),
      responseType: 'blob' // 表明返回服务器返回的数据类型
    }).then(
      async response => {
        if (!response || !response.data) {
          reject({});
          return;
        }
        if (response?.data?.type === 'application/json') {
          // 下载接口返回失败
          const file = new FileReader();

          file.readAsText(response.data, 'utf-8');

          file.onload = function () {
            const obj = JSON.parse(file.result as string);

            reject(obj);
          };
        } else {
          if (type === 'download') {
            let fileName = '';
            let blob = new Blob([response.data], {
              type: response.headers['content-type']
            });

            // 无固定明导出
            if (exportName) {
              let content = response.headers['file-name'];

              if (content) {
                fileName = decodeURIComponent(content);
              } else {
                fileName = filename;
              }
            } else {
              fileName = filename;
            }
            let link = document.createElement('a');

            link.href = window.URL.createObjectURL(blob);
            link.download = fileName;
            link.click();
            // 释放内存
            window.URL.revokeObjectURL(link.href);

            resolve(response.data);
          } else {
            const imageUrl = await blobToDataUrl(response.data);
            // const imageUrl = URL.createObjectURL(response.data);
            resolve(imageUrl);
          }
        }
      },
      err => {
        reject(err);
      }
    );
  });
};
