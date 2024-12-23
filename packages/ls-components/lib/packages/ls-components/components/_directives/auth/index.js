const u = {
  permissions: [],
  mounted(e, a) {
    const o = a.dir.permissions, { code: r, show: s } = a.value, d = document.createComment("v-auth"), m = e.getAttribute("aria-labelledby");
    if (e._auths = { comment: d, parentNode: e.parentNode }, m) {
      const t = document.createComment("v-auth2");
      e._auths.elTabId = m, e._auths.comment2 = t;
    }
    if (r && o && !o.includes(r) || typeof s < "u" && !s) {
      if (m) {
        const t = e.parentNode.parentNode.querySelector(`#${m}`);
        t && (e._auths.tabItemNode = t, e._auths.tabItemParentNode = t.parentNode, t.parentNode.insertBefore(e._auths.comment2, t), t.remove());
      }
      e.parentNode.insertBefore(d, e), e.remove();
    }
  },
  updated(e, a) {
    const o = a.dir.permissions, { code: r, show: s } = a.value, { comment: d, parentNode: m, elTabId: t } = e._auths;
    if (r && o && !o.includes(r) || typeof s < "u" && !s) {
      if (t) {
        const { comment2: i } = e._auths, n = m.parentNode.querySelector(`#${t}`);
        n && (e._auths.tabItemNode = n, e._auths.tabItemParentNode = n.parentNode, n.parentNode.insertBefore(i, n), n.remove());
      }
      e.parentNode && (m.insertBefore(d, e), e.remove());
    } else {
      if (t) {
        const { comment2: i, tabItemNode: n, tabItemParentNode: c } = e._auths;
        i.parentNode && n && c && (c.insertBefore(n, i), i.remove());
      }
      d.parentNode && (m.insertBefore(e, d), d.remove());
    }
  },
  unmounted(e) {
    const { comment: a, comment2: o, tabItemNode: r, tabItemParentNode: s } = e._auths;
    a.parentNode && a.remove(), o && o.parentNode && o.remove(), r && r.remove(), s && s.remove();
  }
};
export {
  u as default
};
