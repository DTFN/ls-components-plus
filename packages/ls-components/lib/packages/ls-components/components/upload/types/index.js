var i = Object.defineProperty;
var p = (t, e) => i(t, "name", { value: e, configurable: !0 });
import { buildProps as o } from "../../_utils/runtime/index.js";
const l = o({
  item: {
    type: Object,
    default: /* @__PURE__ */ p(() => ({}), "default")
  },
  onExceed: {
    type: Function,
    default: null
  },
  beforeUpload: {
    type: Function,
    default: null
  },
  onChange: {
    type: Function,
    default: null
  },
  onSuccess: {
    type: Function,
    default: null
  },
  onError: {
    type: Function,
    default: null
  },
  onRemove: {
    type: Function,
    default: null
  },
  onPreview: {
    type: Function,
    default: null
  },
  onProgress: {
    type: Function,
    default: null
  },
  httpRequest: {
    type: Function,
    default: null
  }
}), c = {
  text: "text",
  picCard: "picture-card",
  pic: "picture"
}, d = ["jpeg", "jpg", "dds", "psd", "pdt", "webp", "xmp", "gif", "bmp", "svg", "tiff", "png", "ico"], m = {
  ready: "ready",
  uploading: "uploading",
  success: "success",
  fail: "fail"
}, s = {
  "3gpp": "audio/3gpp, video/3gpp",
  ac3: "audio/ac3",
  asf: "allpication/vnd.ms-asf",
  au: "audio/basic",
  css: "text/css",
  csv: "text/csv",
  doc: "application/msword",
  docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  dot: "application/msword",
  dotx: "application/vnd.openxmlformats-officedocument.wordprocessingml.template",
  dtd: "application/xml-dtd",
  dwg: "image/vnd.dwg",
  dxf: "image/vnd.dxf",
  gif: "image/gif",
  htm: "text/html",
  html: "text/html",
  jp2: "image/jp2",
  jpe: "image/jpeg",
  jpeg: "image/jpeg",
  jpg: "image/jpeg",
  js: "text/javascript, application/javascript",
  json: "application/json",
  mp2: "audio/mpeg, video/mpeg",
  mp3: "audio/mpeg",
  mp4: "audio/mp4, video/mp4",
  mpeg: "video/mpeg",
  mpg: "video/mpeg",
  mpp: "application/vnd.ms-project",
  ogg: "application/ogg, audio/ogg",
  pdf: "application/pdf",
  png: "image/png",
  pot: "application/vnd.ms-powerpoint",
  potx: "application/vnd.openxmlformats-officedocument.presentationml.template",
  pps: "application/vnd.ms-powerpoint",
  ppsx: "application/vnd.openxmlformats-officedocument.presentationml.slideshow",
  ppt: "application/vnd.ms-powerpoint",
  pptx: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  sldx: "application/vnd.openxmlformats-officedocument.presentationml.slide",
  rtf: "application/rtf, text/rtf",
  svf: "image/vnd.svf",
  tif: "image/tiff",
  tiff: "image/tiff",
  txt: "text/plain",
  wdb: "application/vnd.ms-works",
  wps: "application/vnd.ms-works",
  xhtml: "application/xhtml+xml",
  xlc: "application/vnd.ms-excel",
  xlm: "application/vnd.ms-excel",
  xls: "application/vnd.ms-excel",
  xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  xlsm: "application/vnd.ms-excel.addin.macroEnabled.12",
  xlsb: "application/vnd.ms-excel.sheet.binary.macroEnabled.12",
  xlt: "application/vnd.ms-excel",
  xltx: "application/vnd.openxmlformats-officedocument.spreadsheetml.template",
  xlw: "application/vnd.ms-excel",
  xml: "text/xml, application/xml",
  zip: "aplication/zip"
};
export {
  d as IMG_SUFFIX_LIST,
  m as UPLOAD_STATUS_MAP,
  c as UPLOAD_TYPE_MAP,
  s as fileTypeMap,
  l as lsUploadProps
};
