<p align="center">
  <img width="260" src="https://offcial-website-res.oss-cn-beijing.aliyuncs.com/dev/logo.png">
</p>

# 前端组件库

适用于 vue3.x

## 链接

[文档地址](https://) [Vue](https://v2.cn.vuejs.org/) [Element](https://element.eleme.cn/#/zh-CN/component/installation)

## 更新记录

## 安装

```shell
npm install @lingshugroup/web-plus
```

## 快速上手

```javascript
import Vue from 'vue';
import LSButton from '@lingshugroup/web/lib/button/index';
import LSMenu from '@lingshugroup/web/lib/menu/index';
import LSModal from '@lingshugroup/web/lib/modal/index';
import LSDetail from '@lingshugroup/web/lib/detail/index';
import LSPreview from '@lingshugroup/web/lib/preview/index';
import LSUpload from '@lingshugroup/web/lib/upload/index';
import LSIcon from '@lingshugroup/web/lib/icon/index';
import LSTable from '@lingshugroup/web/lib/table/index';
import LSChart from '@lingshugroup/web/lib/chart/index';
import LSForm from '@lingshugroup/web/lib/form/index';
import LSList from '@lingshugroup/web/lib/list/index';
import LSPopConfirm from '@lingshugroup/web/lib/popConfirm/index';
import LSConfirm from '@lingshugroup/web/lib/confirm/index';
import LSNotification from '@lingshugroup/web/lib/notice/index';
import LSImage from '@lingshugroup/web/lib/image/index';
import LSMessage from '@lingshugroup/web/lib/message/index';
import LSProLayout from '@lingshugroup/web/lib/proLayout/index';

import '@lingshugroup/web/lib/index/index.css';

Vue.use(LSButton);
Vue.use(LSMenu);
Vue.use(LSModal);
Vue.use(LSDetail);
Vue.use(LSPreview);
Vue.use(LSUpload);
Vue.use(LSIcon);
Vue.use(LSTable);
Vue.use(LSChart);
Vue.use(LSForm);
Vue.use(LSList);
Vue.use(LSPopConfirm);
Vue.use(LSConfirm);
Vue.use(LSNotification);
Vue.use(LSImage);
Vue.use(LSMessage);
Vue.use(LSProLayout);

Vue.prototype.$lsconfirm = LSConfirm;
Vue.prototype.$lsMessage = LSMessage;
Vue.prototype.$lsnotify = LSNotification;
```

## 浏览器要求

现代浏览器

## 补充

基于 `element-ui` 的二次开发（`LSIcon`、`LSChart`、`LSList`、`LSDetail` 除外）

`LSChart` 组件基于 `ECharts` 的二次开发

`node` 版本：14.x

## 协议

[MIT](LICENSE)
