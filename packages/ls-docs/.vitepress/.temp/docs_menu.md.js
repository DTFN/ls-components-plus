import { useSSRContext, ref, resolveComponent, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from 'vue/server-renderer';
import { t as tableColumn } from './index.CZ5Oz5P9.js';
import { _ as _export_sfc } from './plugin-vue_export-helper.1tPrXgE0.js';
const __pageData = JSON.parse(
  '{"title":"Menu 菜单","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"docs/menu.md","filePath":"docs/menu.md","lastUpdated":1729495650000}'
);
const __default__ = { name: 'docs/menu.md' };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    const MENU_CONFIG_LIST = [
      {
        title: '渔场概览',
        name: 'FisheryOverview',
        path: 'fishery-overview',
        iconConfig: { name: 'House', color: 'red', size: 16 },
        key: '1',
        cpoPath: 'fisheryManager/Overview',
        pCode: 'c1',
        link: 'https://www.lingshu.net/'
      },
      {
        title: '养殖单元管理',
        name: '',
        path: '',
        key: '2',
        cpoPath: '',
        pCode: 'c2',
        children: [
          {
            title: '养殖区域管理',
            name: 'PondGroup',
            path: 'pond-group',
            key: '2-1',
            cpoPath: 'pondManager/Group',
            pCode: 'c21',
            leaf: true,
            children: [
              {
                title: '养殖区域详情',
                name: 'PondGroupDetail',
                path: 'pond-group-detail',
                key: '2-1',
                cpoPath: 'pondManager/GroupDetail',
                pCode: 'c21',
                hideMenu: true
              }
            ]
          },
          {
            title: '养殖池管理',
            name: 'PondManager',
            path: 'pond-manager',
            key: '2-2',
            cpoPath: 'pondManager/Index',
            pCode: 'c22'
          },
          {
            title: '养殖品种',
            name: 'FishCategory',
            path: 'fishCategory',
            key: '2-3',
            cpoPath: 'prodManager/fishCategory/Index',
            pCode: 'c23'
          },
          {
            title: '养殖区域可视化',
            name: 'AreaView',
            path: 'area-view',
            key: '2-4',
            cpoPath: 'pondManager/AreaView',
            pCode: 'c24'
          },
          {
            title: '养殖周期管理',
            name: 'CycleManager',
            path: 'cycle-manager',
            key: '2-5',
            cpoPath: 'pondManager/cycle/CycleManager',
            pCode: 'c25',
            leaf: true,
            children: [
              {
                title: '历史周期',
                name: 'HistoryCycle',
                path: 'history-cycle',
                key: '2-5',
                cpoPath: 'pondManager/cycle/HistoryCycle',
                pCode: 'c25',
                leaf: true,
                hideMenu: true,
                children: [
                  {
                    title: '历史周期查看',
                    name: 'HistoryCycleDetail',
                    path: 'history-cycle-detail',
                    key: '2-5',
                    cpoPath: 'pondManager/cycle/HistoryCycleDetail',
                    pCode: 'c25',
                    hideMenu: true
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        title: '规划管理',
        name: 'PlanManager',
        path: 'plan-manager',
        key: '8',
        cpoPath: 'planManager/Index',
        pCode: 'c7',
        leaf: true,
        children: [
          {
            title: '新增规划',
            name: 'AddPlan',
            path: 'add-plan',
            key: '8',
            cpoPath: 'planManager/Edit',
            pCode: 'c7',
            hideMenu: true
          },
          {
            title: '编辑规划',
            name: 'EditPlan',
            path: 'edit-plan',
            key: '8',
            cpoPath: 'planManager/Edit',
            pCode: 'c7',
            hideMenu: true
          },
          {
            title: '规划详情',
            name: 'PlanDetail',
            path: 'plan-detail',
            key: '8',
            cpoPath: 'planManager/Edit',
            pCode: 'c7',
            hideMenu: true
          }
        ]
      }
    ];
    const tableData = ref([
      {
        name: 'menuConfigList',
        desc: '菜单配置列表',
        type: 'array',
        value: '-'
      },
      {
        name: 'needPermission',
        desc: '是否需要权限',
        type: 'boolean',
        value: false
      },
      {
        name: 'permissionList',
        desc: '权限列表，内部存放code码，当needPermission为true时生效',
        type: 'array',
        value: '-'
      }
    ]);
    const tableData2 = ref([
      {
        name: 'title',
        desc: '菜单名称',
        type: 'string',
        value: '-'
      },
      {
        name: 'name',
        desc: '菜单路由name',
        type: 'string',
        value: '-'
      },
      {
        name: 'path',
        desc: '菜单路由path',
        type: 'string',
        value: '-'
      },
      {
        name: 'iconConfig',
        desc: '菜单名称前面的图标配置，具体配置参考LSIcon',
        type: 'json',
        value: '-'
      },
      {
        name: 'key',
        desc: '菜单key, 参考el-menu',
        type: 'string',
        value: '-'
      },
      {
        name: 'cpoPath',
        desc: 'view层组件对应路径',
        type: 'string',
        value: '-'
      },
      {
        name: 'pCode',
        desc: '权限code',
        type: 'string',
        value: '-'
      },
      {
        name: 'link',
        desc: '外链地址，配置之后就不在走路由跳转',
        type: 'string',
        value: '-'
      },
      {
        name: 'leaf',
        desc: '是否为叶子菜单，如果是叶子菜单，那么改菜单下的children菜单配置不显示',
        type: 'boolean',
        value: 'false'
      },
      {
        name: 'hideMenu',
        desc: '是否隐藏该菜单',
        type: 'boolean',
        value: 'false'
      },
      {
        name: 'children',
        desc: '子菜单配置',
        type: 'array',
        value: '-'
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ArticleMetadata = resolveComponent('ArticleMetadata');
      const _component_LSMenu = resolveComponent('LSMenu');
      const _component_ApiIntro = resolveComponent('ApiIntro');
      _push(
        `<div${ssrRenderAttrs(_attrs)} data-v-783b3c64><h1 id="menu-菜单" tabindex="-1" data-v-783b3c64>Menu 菜单 <a class="header-anchor" href="#menu-菜单" aria-label="Permalink to &quot;Menu 菜单&quot;" data-v-783b3c64>​</a></h1>`
      );
      _push(ssrRenderComponent(_component_ArticleMetadata, null, null, _parent));
      _push(
        `<div class="warning custom-block" data-v-783b3c64><p class="custom-block-title" data-v-783b3c64>基于el-menu二次封装，保留原属性和方法。</p></div><h2 id="使用方式" tabindex="-1" data-v-783b3c64>使用方式 <a class="header-anchor" href="#使用方式" aria-label="Permalink to &quot;使用方式&quot;" data-v-783b3c64>​</a></h2><br data-v-783b3c64>`
      );
      _push(
        ssrRenderComponent(
          _component_LSMenu,
          {
            'menu-config-list': MENU_CONFIG_LIST,
            class: 'menu-wrap'
          },
          null,
          _parent
        )
      );
      _push(`<details class="details custom-block" data-v-783b3c64><summary data-v-783b3c64>点我查看代码</summary><div class="language-js vp-adaptive-theme line-numbers-mode" data-v-783b3c64><button title="Copy Code" class="copy" data-v-783b3c64></button><span class="lang" data-v-783b3c64>js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" data-v-783b3c64><code data-v-783b3c64><span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-783b3c64>import</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64> { ref } </span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-783b3c64>from</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-783b3c64> &#39;vue&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>;</span></span>
<span class="line" data-v-783b3c64></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-783b3c64>const</span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-783b3c64> MENU_CONFIG_LIST</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-783b3c64> =</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64> [</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>  {</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>    title: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-783b3c64>&#39;渔场概览&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>,</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>    name: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-783b3c64>&#39;FisheryOverview&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>,</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>    path: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-783b3c64>&#39;fishery-overview&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>,</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>    iconConfig: { name: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-783b3c64>&#39;House&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>, color: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-783b3c64>&#39;red&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>, size: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-783b3c64>16</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64> },</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>    key: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-783b3c64>&#39;1&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>,</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>    cpoPath: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-783b3c64>&#39;fisheryManager/Overview&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>,</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>    pCode: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-783b3c64>&#39;c1&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>,</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>    link: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-783b3c64>&#39;https://www.lingshu.net/&#39;</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>  },</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>  {</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>    title: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-783b3c64>&#39;养殖单元管理&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>,</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>    name: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-783b3c64>&#39;&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>,</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>    path: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-783b3c64>&#39;&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>,</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>    key: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-783b3c64>&#39;2&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>,</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>    cpoPath: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-783b3c64>&#39;&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>,</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>    pCode: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-783b3c64>&#39;c2&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>,</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>    children: [</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>      {</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>        title: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-783b3c64>&#39;养殖区域管理&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>,</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>        name: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-783b3c64>&#39;PondGroup&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>,</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>        path: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-783b3c64>&#39;pond-group&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>,</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>        key: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-783b3c64>&#39;2-1&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>,</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>        cpoPath: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-783b3c64>&#39;pondManager/Group&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>,</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>        pCode: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-783b3c64>&#39;c21&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>,</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>        leaf: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-783b3c64>true</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>,</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>        children: [</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>          {</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>            title: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-783b3c64>&#39;养殖区域详情&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>,</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>            name: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-783b3c64>&#39;PondGroupDetail&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>,</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>            path: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-783b3c64>&#39;pond-group-detail&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>,</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>            key: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-783b3c64>&#39;2-1&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>,</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>            cpoPath: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-783b3c64>&#39;pondManager/GroupDetail&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>,</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>            pCode: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-783b3c64>&#39;c21&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>,</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>            hideMenu: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-783b3c64>true</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>          }</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>        ]</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>      },</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>      {</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>        title: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-783b3c64>&#39;养殖池管理&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>,</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>        name: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-783b3c64>&#39;PondManager&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>,</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>        path: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-783b3c64>&#39;pond-manager&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>,</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>        key: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-783b3c64>&#39;2-2&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>,</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>        cpoPath: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-783b3c64>&#39;pondManager/Index&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>,</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>        pCode: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-783b3c64>&#39;c22&#39;</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>      },</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>      {</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>        title: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-783b3c64>&#39;养殖品种&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>,</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>        name: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-783b3c64>&#39;FishCategory&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>,</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>        path: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-783b3c64>&#39;fishCategory&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>,</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>        key: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-783b3c64>&#39;2-3&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>,</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>        cpoPath: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-783b3c64>&#39;prodManager/fishCategory/Index&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>,</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>        pCode: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-783b3c64>&#39;c23&#39;</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>      },</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>      {</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>        title: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-783b3c64>&#39;养殖区域可视化&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>,</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>        name: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-783b3c64>&#39;AreaView&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>,</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>        path: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-783b3c64>&#39;area-view&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>,</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>        key: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-783b3c64>&#39;2-4&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>,</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>        cpoPath: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-783b3c64>&#39;pondManager/AreaView&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>,</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>        pCode: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-783b3c64>&#39;c24&#39;</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>      },</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>      {</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>        title: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-783b3c64>&#39;养殖周期管理&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>,</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>        name: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-783b3c64>&#39;CycleManager&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>,</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>        path: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-783b3c64>&#39;cycle-manager&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>,</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>        key: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-783b3c64>&#39;2-5&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>,</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>        cpoPath: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-783b3c64>&#39;pondManager/cycle/CycleManager&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>,</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>        pCode: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-783b3c64>&#39;c25&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>,</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>        leaf: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-783b3c64>true</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>,</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>        children: [</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>          {</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>            title: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-783b3c64>&#39;历史周期&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>,</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>            name: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-783b3c64>&#39;HistoryCycle&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>,</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>            path: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-783b3c64>&#39;history-cycle&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>,</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>            key: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-783b3c64>&#39;2-5&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>,</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>            cpoPath: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-783b3c64>&#39;pondManager/cycle/HistoryCycle&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>,</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>            pCode: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-783b3c64>&#39;c25&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>,</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>            leaf: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-783b3c64>true</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>,</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>            hideMenu: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-783b3c64>true</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>,</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>            children: [</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>              {</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>                title: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-783b3c64>&#39;历史周期查看&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>,</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>                name: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-783b3c64>&#39;HistoryCycleDetail&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>,</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>                path: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-783b3c64>&#39;history-cycle-detail&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>,</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>                key: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-783b3c64>&#39;2-5&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>,</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>                cpoPath: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-783b3c64>&#39;pondManager/cycle/HistoryCycleDetail&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>,</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>                pCode: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-783b3c64>&#39;c25&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>,</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>                hideMenu: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-783b3c64>true</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>              }</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>            ]</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>          }</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>        ]</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>      }</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>    ]</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>  },</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>  {</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>    title: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-783b3c64>&#39;规划管理&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>,</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>    name: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-783b3c64>&#39;PlanManager&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>,</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>    path: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-783b3c64>&#39;plan-manager&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>,</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>    key: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-783b3c64>&#39;8&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>,</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>    cpoPath: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-783b3c64>&#39;planManager/Index&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>,</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>    pCode: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-783b3c64>&#39;c7&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>,</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>    leaf: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-783b3c64>true</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>,</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>    children: [</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>      {</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>        title: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-783b3c64>&#39;新增规划&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>,</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>        name: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-783b3c64>&#39;AddPlan&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>,</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>        path: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-783b3c64>&#39;add-plan&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>,</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>        key: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-783b3c64>&#39;8&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>,</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>        cpoPath: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-783b3c64>&#39;planManager/Edit&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>,</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>        pCode: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-783b3c64>&#39;c7&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>,</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>        hideMenu: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-783b3c64>true</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>      },</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>      {</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>        title: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-783b3c64>&#39;编辑规划&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>,</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>        name: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-783b3c64>&#39;EditPlan&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>,</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>        path: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-783b3c64>&#39;edit-plan&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>,</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>        key: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-783b3c64>&#39;8&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>,</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>        cpoPath: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-783b3c64>&#39;planManager/Edit&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>,</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>        pCode: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-783b3c64>&#39;c7&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>,</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>        hideMenu: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-783b3c64>true</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>      },</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>      {</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>        title: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-783b3c64>&#39;规划详情&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>,</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>        name: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-783b3c64>&#39;PlanDetail&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>,</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>        path: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-783b3c64>&#39;plan-detail&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>,</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>        key: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-783b3c64>&#39;8&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>,</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>        cpoPath: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-783b3c64>&#39;planManager/Edit&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>,</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>        pCode: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-783b3c64>&#39;c7&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>,</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>        hideMenu: </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-783b3c64>true</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>      }</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>    ]</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>  }</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>];</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true" data-v-783b3c64><span class="line-number" data-v-783b3c64>1</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>2</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>3</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>4</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>5</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>6</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>7</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>8</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>9</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>10</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>11</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>12</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>13</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>14</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>15</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>16</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>17</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>18</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>19</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>20</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>21</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>22</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>23</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>24</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>25</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>26</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>27</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>28</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>29</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>30</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>31</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>32</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>33</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>34</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>35</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>36</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>37</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>38</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>39</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>40</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>41</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>42</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>43</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>44</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>45</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>46</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>47</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>48</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>49</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>50</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>51</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>52</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>53</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>54</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>55</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>56</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>57</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>58</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>59</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>60</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>61</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>62</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>63</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>64</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>65</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>66</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>67</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>68</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>69</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>70</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>71</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>72</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>73</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>74</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>75</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>76</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>77</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>78</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>79</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>80</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>81</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>82</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>83</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>84</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>85</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>86</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>87</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>88</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>89</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>90</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>91</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>92</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>93</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>94</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>95</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>96</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>97</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>98</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>99</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>100</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>101</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>102</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>103</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>104</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>105</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>106</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>107</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>108</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>109</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>110</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>111</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>112</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>113</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>114</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>115</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>116</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>117</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>118</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>119</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>120</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>121</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>122</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>123</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>124</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>125</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>126</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>127</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>128</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>129</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>130</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>131</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>132</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>133</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>134</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>135</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>136</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>137</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>138</span><br data-v-783b3c64></div></div><div class="language-html vp-adaptive-theme line-numbers-mode" data-v-783b3c64><button title="Copy Code" class="copy" data-v-783b3c64></button><span class="lang" data-v-783b3c64>html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" data-v-783b3c64><code data-v-783b3c64><span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>&lt;</span><span style="${ssrRenderStyle({ '--shiki-light': '#B31D28', '--shiki-light-font-style': 'italic', '--shiki-dark': '#FDAEB7', '--shiki-dark-font-style': 'italic' })}" data-v-783b3c64>LSMenu</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-783b3c64> :menu-config-list</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-783b3c64>&quot;MENU_CONFIG_LIST&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-783b3c64> class</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>=</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-783b3c64>&quot;menu-wrap&quot;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64> /&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true" data-v-783b3c64><span class="line-number" data-v-783b3c64>1</span><br data-v-783b3c64></div></div></details><h2 id="创建路由数据" tabindex="-1" data-v-783b3c64>创建路由数据 <a class="header-anchor" href="#创建路由数据" aria-label="Permalink to &quot;创建路由数据&quot;" data-v-783b3c64>​</a></h2><div class="warning custom-block" data-v-783b3c64><p class="custom-block-title" data-v-783b3c64>通过以下方式动态创建路由，适用带权限控制项目</p></div><div class="language-js vp-adaptive-theme line-numbers-mode" data-v-783b3c64><button title="Copy Code" class="copy" data-v-783b3c64></button><span class="lang" data-v-783b3c64>js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" data-v-783b3c64><code data-v-783b3c64><span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-783b3c64>import</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64> { useRouterHook } </span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-783b3c64>from</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-783b3c64> &#39;组件库&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>;</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-783b3c64>const</span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-783b3c64> router</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-783b3c64> =</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-783b3c64> useRouter</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>();</span></span>
<span class="line" data-v-783b3c64></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-783b3c64>const</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64> { </span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-783b3c64>getMenusByAuth</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64> }</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-783b3c64>:</span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-783b3c64> any</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-783b3c64> =</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-783b3c64> useRouterHook</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>();</span></span>
<span class="line" data-v-783b3c64></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-783b3c64>const</span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-783b3c64> routesModule</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-783b3c64> =</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-783b3c64> import</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>.</span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-783b3c64>meta</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>.</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-783b3c64>glob</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>(</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-783b3c64>&#39;/src/views/**/*.vue&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>);</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-783b3c64>const</span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-783b3c64> menus</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-783b3c64> =</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-783b3c64> getMenusByAuth</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>(</span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-783b3c64>MENU_CONFIG_LIST</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>, routesModule, </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-783b3c64>&#39;/src/views&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>);</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>router.</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-783b3c64>removeRoute</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>(</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-783b3c64>&#39;Layout&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>);</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>router.</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-783b3c64>addRoute</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>({</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>  name: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-783b3c64>&#39;Layout&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>,</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>  path: </span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-783b3c64>&#39;/&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>,</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-783b3c64>  component</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>: () </span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-783b3c64>=&gt;</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-783b3c64> import</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>(</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-783b3c64>&#39;@/views/Layout.vue&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>),</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>  redirect: menus[</span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-783b3c64>0</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>].path,</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>  children: []</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>});</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>(menus </span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-783b3c64>||</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64> []).</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-783b3c64>forEach</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>((</span><span style="${ssrRenderStyle({ '--shiki-light': '#E36209', '--shiki-dark': '#FFAB70' })}" data-v-783b3c64>item</span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-783b3c64>:</span><span style="${ssrRenderStyle({ '--shiki-light': '#005CC5', '--shiki-dark': '#79B8FF' })}" data-v-783b3c64> any</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>) </span><span style="${ssrRenderStyle({ '--shiki-light': '#D73A49', '--shiki-dark': '#F97583' })}" data-v-783b3c64>=&gt;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64> {</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>  router.</span><span style="${ssrRenderStyle({ '--shiki-light': '#6F42C1', '--shiki-dark': '#B392F0' })}" data-v-783b3c64>addRoute</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>(</span><span style="${ssrRenderStyle({ '--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF' })}" data-v-783b3c64>&#39;Layout&#39;</span><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>, item);</span></span>
<span class="line" data-v-783b3c64><span style="${ssrRenderStyle({ '--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8' })}" data-v-783b3c64>});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true" data-v-783b3c64><span class="line-number" data-v-783b3c64>1</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>2</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>3</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>4</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>5</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>6</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>7</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>8</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>9</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>10</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>11</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>12</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>13</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>14</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>15</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>16</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>17</span><br data-v-783b3c64><span class="line-number" data-v-783b3c64>18</span><br data-v-783b3c64></div></div><h2 id="api" tabindex="-1" data-v-783b3c64>API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;" data-v-783b3c64>​</a></h2><h3 id="_1-attributes" tabindex="-1" data-v-783b3c64>1. Attributes <a class="header-anchor" href="#_1-attributes" aria-label="Permalink to &quot;1. Attributes&quot;" data-v-783b3c64>​</a></h3>`);
      _push(
        ssrRenderComponent(
          _component_ApiIntro,
          {
            tableColumn: unref(tableColumn),
            tableData: tableData.value
          },
          null,
          _parent
        )
      );
      _push(
        `<h4 id="_1-1-menuconfiglist" tabindex="-1" data-v-783b3c64>1.1 menuConfigList <a class="header-anchor" href="#_1-1-menuconfiglist" aria-label="Permalink to &quot;1.1 menuConfigList&quot;" data-v-783b3c64>​</a></h4>`
      );
      _push(
        ssrRenderComponent(
          _component_ApiIntro,
          {
            tableColumn: unref(tableColumn),
            tableData: tableData2.value
          },
          null,
          _parent
        )
      );
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add('docs/menu.md');
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const menu = /* @__PURE__ */ _export_sfc(_sfc_main, [['__scopeId', 'data-v-783b3c64']]);
export { __pageData, menu as default };
