/**
 * permissions 为权限编码列表
 * code 为权限编码
 * show 为是否显示
 */
export default {
  permissions: [] as (string | number)[],
  mounted(el: any, binding: any) {
    const permissions = binding.dir.permissions;
    const { code, show } = binding.value;
    const comment = document.createComment('v-auth');
    const tabId = el.getAttribute('aria-labelledby');
    el._auths = { comment, parentNode: el.parentNode };
    if (tabId) {
      const comment2 = document.createComment('v-auth2');
      el._auths.elTabId = tabId;
      el._auths.comment2 = comment2;
    }
    if ((code && permissions && !permissions.includes(code as never)) || (typeof show !== 'undefined' && !show)) {
      el.parentNode.insertBefore(comment, el);
      el.remove();
    }
  },
  updated(el: any, binding: any) {
    const permissions = binding.dir.permissions;
    const { code, show } = binding.value;
    const { comment, parentNode, elTabId } = el._auths;
    if ((code && permissions && !permissions.includes(code as never)) || (typeof show !== 'undefined' && !show)) {
      if (elTabId) {
        const { comment2 } = el._auths;
        const tabItemNode = parentNode.parentNode.querySelector(`#${elTabId}`);
        if (tabItemNode) {
          el._auths.tabItemNode = tabItemNode;
          el._auths.tabItemParentNode = tabItemNode.parentNode;
          tabItemNode.parentNode.insertBefore(comment2, tabItemNode);
          tabItemNode.remove();
        }
      }
      if (el.parentNode) {
        parentNode.insertBefore(comment, el);
        el.remove();
      }
    } else {
      if (elTabId) {
        const { comment2, tabItemNode, tabItemParentNode } = el._auths;
        if (comment2.parentNode && tabItemNode && tabItemParentNode) {
          tabItemParentNode.insertBefore(tabItemNode, comment2);
          comment2.remove();
        }
      }
      if (comment.parentNode) {
        parentNode.insertBefore(el, comment);
        comment.remove();
      }
    }
  },
  unmounted(el: any) {
    const { comment, comment2, tabItemNode, tabItemParentNode } = el._auths;
    if (comment.parentNode) {
      comment.remove();
    }
    if (comment2 && comment2.parentNode) {
      comment2.remove();
    }
    if (tabItemNode) {
      tabItemNode.remove();
    }
    if (tabItemParentNode) {
      tabItemParentNode.remove();
    }
  }
};
