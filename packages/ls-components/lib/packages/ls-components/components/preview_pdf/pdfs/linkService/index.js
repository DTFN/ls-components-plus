var r = Object.defineProperty;
var g = (t, e, a) => e in t ? r(t, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : t[e] = a;
var s = (t, e) => r(t, "name", { value: e, configurable: !0 });
var o = (t, e, a) => g(t, typeof e != "symbol" ? e + "" : e, a);
const n = class n {
  constructor() {
    o(this, "externalLinkEnabled");
    this.externalLinkEnabled = !0;
  }
  /**
   * @type {number}
   */
  get pagesCount() {
    return 0;
  }
  /**
   * @type {number}
   */
  get page() {
    return 0;
  }
  /**
   * @param {number} _value
   */
  set page(e) {
  }
  /**
   * @type {number}
   */
  get rotation() {
    return 0;
  }
  /**
   * @param {number} _value
   */
  set rotation(e) {
  }
  /**
   * @type {boolean}
   */
  get isInPresentationMode() {
    return !1;
  }
  /**
   * @param {string|Array} _dest - The named, or explicit, PDF destination.
   */
  async goToDestination(e) {
  }
  /**
   * @param {number|string} _val - The page number, or page label.
   */
  goToPage(e) {
  }
  /**
   * @param {HTMLAnchorElement} link
   * @param {string} url
   * @param {boolean} [_newWindow]
   */
  addLinkAttributes(e, a, i = !1) {
  }
  /**
   * @param _dest - The PDF destination object.
   * @returns {string} The hyperlink to the PDF object.
   */
  getDestinationHash(e) {
    return "#";
  }
  /**
   * @param _hash - The PDF parameters/hash.
   * @returns {string} The hyperlink to the PDF object.
   */
  getAnchorUrl(e) {
    return "#";
  }
  /**
   * @param {string} _hash
   */
  setHash(e) {
  }
  /**
   * @param {string} _action
   */
  executeNamedAction(e) {
  }
  /**
   * @param {Object} _action
   */
  executeSetOCGState(e) {
  }
  /**
   * @param {number} _pageNum - page number.
   * @param {Object} _pageRef - reference to the page.
   */
  cachePageRef(e, a) {
  }
};
s(n, "SimpleLinkService");
let u = n;
export {
  u as SimpleLinkService
};
