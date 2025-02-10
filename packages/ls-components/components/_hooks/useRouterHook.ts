import { MenuItemType, ConfigItemType, MenuBaseType } from '@cpo/menu/types';
import { LocationQueryRaw, RouteRecordRaw, useRoute, useRouter } from 'vue-router';

interface JumpParamsType {
  name?: string | symbol;
  path?: string;
  title?: string;
  query?: LocationQueryRaw;
}

export default function () {
  const router = useRouter();
  const route = useRoute();
  const currentRouter = ref(route);

  /**
   * 通用路由跳转
   * @param routeData
   */
  const jumpRouteCom = (routeData: JumpParamsType, type?: number) => {
    const { name, query = {}, path } = routeData || {};

    if (!type) {
      if (name) {
        router.push({
          name,
          query
        });
      }
    } else {
      if (path) {
        router.push({
          path,
          query
        });
      }
    }
  };

  /**
   * 获取路由query参数
   * @returns
   */
  const getRouteQuery = () => {
    return route.query;
  };

  function processMenuItems(item: MenuItemType, routerConfig: MenuItemType[], bcList: { title: string; name: string }[]): void {
    // 添加当前项的面包屑列表
    item.bcList = bcList;

    // 如果当前项有子项，则递归处理子项
    if (item.children) {
      // 如果当前项是叶子节点，则添加到路由配置数组中
      if (item.leaf) {
        routerConfig.push(item);
      }
      item.children.forEach((child: ConfigItemType) => {
        // 为子项创建新的面包屑列表
        const newBcList = [
          ...bcList,
          {
            title: item.title,
            name: item.name
          }
        ];

        // 递归处理子项
        processMenuItems(child, routerConfig, newBcList);
      });
    } else {
      routerConfig.push(item);
    }
  }

  const getRouterConfig = (menuConfigList: any) => {
    let routerConfig: Array<MenuBaseType> = [];

    menuConfigList.forEach((item: MenuBaseType) => processMenuItems(item, routerConfig, []));

    return routerConfig;
  };

  function addMenu(menus: Array<RouteRecordRaw>, config: ConfigItemType, routesModule: Record<string, any>, routePath: string) {
    menus.push({
      path: config.path || '',
      name: config.name,
      component: routesModule[`${routePath}/${config.cpoPath}.vue`],
      meta: Object.assign(
        {
          key: config.key,
          title: config.title,
          bcList: (config.bcList || []).concat({
            title: config.title
          })
        },
        config.meta
      )
    });
  }

  /**
   * 根据权限获取菜单，并生成路由，无权限则全部返回
   * @param menuConfigList
   * @param routesModule
   * @param routePath
   * @param permissionList
   * @returns
   */
  const getMenusByAuth = (
    menuConfigList: any,
    routesModule: Record<string, any>,
    routePath: string,
    permissionList?: Array<string | number>
  ) => {
    const menus: Array<RouteRecordRaw> = [];
    getRouterConfig(menuConfigList).forEach((config: ConfigItemType) => {
      if (permissionList) {
        const pCode: string = config?.pCode?.toString() || '';
        if (permissionList.includes(pCode)) {
          addMenu(menus, config, routesModule, routePath);
        }
      } else {
        addMenu(menus, config, routesModule, routePath);
      }
    });

    return menus;
  };

  return {
    route,
    router,
    currentRouter,
    jumpRouteCom,
    getRouteQuery,
    getMenusByAuth
  };
}
