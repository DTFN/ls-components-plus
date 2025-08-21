import type { App } from 'vue';
import type { RouteMeta } from 'vue-router';
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';
import routes from './routes';

const mode = import.meta.env.VITE_ROUTER_MODE;
const publicPath = import.meta.env.VITE_PUBLIC_PATH;

const router = createRouter({
  history: mode === 'hash' ? createWebHashHistory(publicPath) : createWebHistory(publicPath),
  routes,
  scrollBehavior() {
    return { top: 0 };
  }
});

function updateMeta(meta: RouteMeta) {
  const { title } = meta;
  const globalTitle = import.meta.env.VITE_GLOB_APP_TITLE;

  if (title) {
    document.title = `${globalTitle}-${title}`;
  } else {
    document.title = globalTitle;
  }
}

router.beforeEach((to: any, _from: any, next: any) => {
  if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
  }

  // 进入页面时滚动到顶部
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });

  updateMeta(to.meta);

  next();
});

export function setupRouter(app: App<Element>) {
  app.use(router);
}

export default router;
