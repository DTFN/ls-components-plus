var g = Object.defineProperty;
var c = (e, o) => g(e, "name", { value: o, configurable: !0 });
const f = "internal-link", p = "link", b = "file-attachment", y = "form-text", A = "form-select", h = "form-checkbox", T = "form-radio", k = "form-button", O = ["click", "dblclick", "mouseover", "input", "change"];
function u(e, o, n) {
  const t = [];
  if (n)
    for (const s of n)
      s[e] === o && t.push(s);
  return t;
}
c(u, "getAnnotationsByKey");
function i(e, o) {
  return { type: e, data: o };
}
c(i, "buildAnnotationData");
function r(e, o) {
  switch (e.type) {
    case "textarea":
    case "text":
      return i(y, {
        fieldName: e.name,
        value: e.value
      });
    case "select-one":
    case "select-multiple":
      const n = [];
      for (const s of e.options)
        n.push({
          value: s.value,
          label: s.label
        });
      const t = [];
      for (const s of e.selectedOptions)
        t.push({
          value: s.value,
          label: s.label
        });
      return i(A, {
        fieldName: e.name,
        value: t,
        options: n
      });
    case "checkbox":
      return i(h, {
        fieldName: e.name,
        checked: e.checked
      });
    case "radio":
      return i(T, {
        fieldName: e.name,
        ...o
      });
    case "button":
      return i(k, {
        fieldName: e.name,
        ...o
      });
  }
}
c(r, "inputAnnotation");
function x(e) {
  return i(b, e.file);
}
c(x, "fileAnnotation");
async function B(e, o) {
  if (e.dest) {
    let n;
    if (typeof e.dest == "string" ? n = await o.getDestination(e.dest) : n = e.dest, !Array.isArray(n))
      return console.warn(`Destination "${n}" is not a valid destination (dest="${e.dest}")`), i(f, {
        referencedPage: null,
        offset: null
      });
    let t = null;
    n.length === 5 && (t = {
      left: e.dest[2],
      bottom: e.dest[3]
    });
    const [s] = n;
    if (Number.isInteger(s))
      return i(f, {
        referencedPage: Number(s) + 1,
        offset: t
      });
    if (typeof s == "object") {
      const a = await o.getPageIndex(s);
      return i(f, {
        referencedPage: a + 1,
        offset: t
      });
    } else
      return console.warn(`Destination "${s}" is not a valid destination (dest="${e.dest}")`), i(f, {
        referencedPage: null,
        offset: null
      });
  } else if (e.url)
    return i(p, {
      url: e.url,
      unsafeUrl: e.unsafeUrl
    });
}
c(B, "linkAnnotation");
function N(e) {
  const o = e.getElementsByTagName("span");
  for (const n of o) {
    let t = n.textContent;
    const s = JSON.parse(n.dataset.l10nArgs ?? "{}");
    if (t)
      for (const a in s) t = t.replace(`{{${a}}}`, s[a]);
    n.textContent = t;
  }
}
c(N, "mergePopupArgs");
function E(e, o, n) {
  var s;
  let t = e.target.parentNode;
  if (t.tagName === "DIV" && (t = t.firstChild), t.className === "linkAnnotation" && e.type === "click") {
    const a = (s = t.dataset) == null ? void 0 : s.annotationId;
    if (a) return B(u("id", a, n)[0], o);
  } else if (t.className.includes("popupAnnotation") || t.className.includes("textAnnotation"))
    N(t);
  else if (t.className.includes("fileAttachmentAnnotation")) {
    N(t);
    const a = t.dataset.annotationId;
    if (a && e.type === "dblclick") return x(u("id", a, n)[0]);
  } else if (t.className.includes("textWidgetAnnotation") && e.type === "input") {
    let a = t.getElementsByTagName("input")[0];
    return a || (a = t.getElementsByTagName("textarea")[0]), r(a);
  } else {
    if (t.className.includes("choiceWidgetAnnotation") && e.type === "input")
      return r(t.getElementsByTagName("select")[0]);
    if (t.className.includes("buttonWidgetAnnotation checkBox") && e.type === "change")
      return r(t.getElementsByTagName("input")[0]);
    if (t.className.includes("buttonWidgetAnnotation radioButton") && e.type === "change") {
      const a = t.dataset.annotationId;
      if (a) {
        const l = u("id", a, n)[0], d = [];
        for (const m of u("fieldName", l.fieldName, n))
          m.buttonValue && d.push(m.buttonValue);
        return r(t.getElementsByTagName("input")[0], {
          value: l.buttonValue,
          defaultValue: l.fieldValue,
          options: d
        });
      }
    } else if (t.className.includes("buttonWidgetAnnotation pushButton") && e.type === "click") {
      const a = t.dataset.annotationId;
      if (a) {
        const l = u("id", a, n)[0];
        return l.resetForm ? r({ name: l.fieldName, type: "button" }, { actions: l.actions, reset: !0 }) : r({ name: l.fieldName, type: "button" }, { actions: l.actions, reset: !1 });
      }
    }
  }
}
c(E, "annotationEventsHandler");
export {
  O as EVENTS_TO_HANDLER,
  E as annotationEventsHandler
};
