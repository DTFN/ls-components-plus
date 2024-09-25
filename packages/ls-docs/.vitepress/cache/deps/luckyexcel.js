import { __commonJS, __require } from './chunk-SNAQBZPT.js';

// ../../node_modules/.pnpm/luckyexcel@1.0.1/node_modules/luckyexcel/dist/luckyexcel.umd.js
var require_luckyexcel_umd = __commonJS({
  '../../node_modules/.pnpm/luckyexcel@1.0.1/node_modules/luckyexcel/dist/luckyexcel.umd.js'(exports, module) {
    (function (f) {
      if (typeof exports === 'object' && typeof module !== 'undefined') {
        module.exports = f();
      } else if (typeof define === 'function' && define.amd) {
        define([], f);
      } else {
        var g;
        if (typeof window !== 'undefined') {
          g = window;
        } else if (typeof global !== 'undefined') {
          g = global;
        } else if (typeof self !== 'undefined') {
          g = self;
        } else {
          g = this;
        }
        g.LuckyExcel = f();
      }
    })(function () {
      var define2, module2, exports2;
      return /* @__PURE__ */ (function () {
        function r(e, n, t) {
          function o(i2, f) {
            if (!n[i2]) {
              if (!e[i2]) {
                var c = 'function' == typeof __require && __require;
                if (!f && c) return c(i2, true);
                if (u) return u(i2, true);
                var a = new Error("Cannot find module '" + i2 + "'");
                throw ((a.code = 'MODULE_NOT_FOUND'), a);
              }
              var p = (n[i2] = { exports: {} });
              e[i2][0].call(
                p.exports,
                function (r2) {
                  var n2 = e[i2][1][r2];
                  return o(n2 || r2);
                },
                p,
                p.exports,
                r,
                e,
                n,
                t
              );
            }
            return n[i2].exports;
          }
          for (var u = 'function' == typeof __require && __require, i = 0; i < t.length; i++) o(t[i]);
          return o;
        }
        return r;
      })()(
        {
          1: [
            function (require2, module3, exports3) {
              'use strict';
              exports3.byteLength = byteLength;
              exports3.toByteArray = toByteArray;
              exports3.fromByteArray = fromByteArray;
              var lookup = [];
              var revLookup = [];
              var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
              var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
              for (var i = 0, len = code.length; i < len; ++i) {
                lookup[i] = code[i];
                revLookup[code.charCodeAt(i)] = i;
              }
              revLookup['-'.charCodeAt(0)] = 62;
              revLookup['_'.charCodeAt(0)] = 63;
              function getLens(b64) {
                var len2 = b64.length;
                if (len2 % 4 > 0) {
                  throw new Error('Invalid string. Length must be a multiple of 4');
                }
                var validLen = b64.indexOf('=');
                if (validLen === -1) validLen = len2;
                var placeHoldersLen = validLen === len2 ? 0 : 4 - (validLen % 4);
                return [validLen, placeHoldersLen];
              }
              function byteLength(b64) {
                var lens = getLens(b64);
                var validLen = lens[0];
                var placeHoldersLen = lens[1];
                return ((validLen + placeHoldersLen) * 3) / 4 - placeHoldersLen;
              }
              function _byteLength(b64, validLen, placeHoldersLen) {
                return ((validLen + placeHoldersLen) * 3) / 4 - placeHoldersLen;
              }
              function toByteArray(b64) {
                var tmp;
                var lens = getLens(b64);
                var validLen = lens[0];
                var placeHoldersLen = lens[1];
                var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
                var curByte = 0;
                var len2 = placeHoldersLen > 0 ? validLen - 4 : validLen;
                var i2;
                for (i2 = 0; i2 < len2; i2 += 4) {
                  tmp =
                    (revLookup[b64.charCodeAt(i2)] << 18) |
                    (revLookup[b64.charCodeAt(i2 + 1)] << 12) |
                    (revLookup[b64.charCodeAt(i2 + 2)] << 6) |
                    revLookup[b64.charCodeAt(i2 + 3)];
                  arr[curByte++] = (tmp >> 16) & 255;
                  arr[curByte++] = (tmp >> 8) & 255;
                  arr[curByte++] = tmp & 255;
                }
                if (placeHoldersLen === 2) {
                  tmp = (revLookup[b64.charCodeAt(i2)] << 2) | (revLookup[b64.charCodeAt(i2 + 1)] >> 4);
                  arr[curByte++] = tmp & 255;
                }
                if (placeHoldersLen === 1) {
                  tmp =
                    (revLookup[b64.charCodeAt(i2)] << 10) |
                    (revLookup[b64.charCodeAt(i2 + 1)] << 4) |
                    (revLookup[b64.charCodeAt(i2 + 2)] >> 2);
                  arr[curByte++] = (tmp >> 8) & 255;
                  arr[curByte++] = tmp & 255;
                }
                return arr;
              }
              function tripletToBase64(num) {
                return lookup[(num >> 18) & 63] + lookup[(num >> 12) & 63] + lookup[(num >> 6) & 63] + lookup[num & 63];
              }
              function encodeChunk(uint8, start, end) {
                var tmp;
                var output = [];
                for (var i2 = start; i2 < end; i2 += 3) {
                  tmp = ((uint8[i2] << 16) & 16711680) + ((uint8[i2 + 1] << 8) & 65280) + (uint8[i2 + 2] & 255);
                  output.push(tripletToBase64(tmp));
                }
                return output.join('');
              }
              function fromByteArray(uint8) {
                var tmp;
                var len2 = uint8.length;
                var extraBytes = len2 % 3;
                var parts = [];
                var maxChunkLength = 16383;
                for (var i2 = 0, len22 = len2 - extraBytes; i2 < len22; i2 += maxChunkLength) {
                  parts.push(encodeChunk(uint8, i2, i2 + maxChunkLength > len22 ? len22 : i2 + maxChunkLength));
                }
                if (extraBytes === 1) {
                  tmp = uint8[len2 - 1];
                  parts.push(lookup[tmp >> 2] + lookup[(tmp << 4) & 63] + '==');
                } else if (extraBytes === 2) {
                  tmp = (uint8[len2 - 2] << 8) + uint8[len2 - 1];
                  parts.push(lookup[tmp >> 10] + lookup[(tmp >> 4) & 63] + lookup[(tmp << 2) & 63] + '=');
                }
                return parts.join('');
              }
            },
            {}
          ],
          2: [function (require2, module3, exports3) {}, {}],
          3: [
            function (require2, module3, exports3) {
              (function (Buffer) {
                'use strict';
                var base64 = require2('base64-js');
                var ieee754 = require2('ieee754');
                exports3.Buffer = Buffer;
                exports3.SlowBuffer = SlowBuffer;
                exports3.INSPECT_MAX_BYTES = 50;
                var K_MAX_LENGTH = 2147483647;
                exports3.kMaxLength = K_MAX_LENGTH;
                Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();
                if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' && typeof console.error === 'function') {
                  console.error(
                    'This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.'
                  );
                }
                function typedArraySupport() {
                  try {
                    var arr = new Uint8Array(1);
                    arr.__proto__ = {
                      __proto__: Uint8Array.prototype,
                      foo: function () {
                        return 42;
                      }
                    };
                    return arr.foo() === 42;
                  } catch (e) {
                    return false;
                  }
                }
                Object.defineProperty(Buffer.prototype, 'parent', {
                  enumerable: true,
                  get: function () {
                    if (!Buffer.isBuffer(this)) return void 0;
                    return this.buffer;
                  }
                });
                Object.defineProperty(Buffer.prototype, 'offset', {
                  enumerable: true,
                  get: function () {
                    if (!Buffer.isBuffer(this)) return void 0;
                    return this.byteOffset;
                  }
                });
                function createBuffer(length) {
                  if (length > K_MAX_LENGTH) {
                    throw new RangeError('The value "' + length + '" is invalid for option "size"');
                  }
                  var buf = new Uint8Array(length);
                  buf.__proto__ = Buffer.prototype;
                  return buf;
                }
                function Buffer(arg, encodingOrOffset, length) {
                  if (typeof arg === 'number') {
                    if (typeof encodingOrOffset === 'string') {
                      throw new TypeError('The "string" argument must be of type string. Received type number');
                    }
                    return allocUnsafe(arg);
                  }
                  return from(arg, encodingOrOffset, length);
                }
                if (typeof Symbol !== 'undefined' && Symbol.species != null && Buffer[Symbol.species] === Buffer) {
                  Object.defineProperty(Buffer, Symbol.species, {
                    value: null,
                    configurable: true,
                    enumerable: false,
                    writable: false
                  });
                }
                Buffer.poolSize = 8192;
                function from(value, encodingOrOffset, length) {
                  if (typeof value === 'string') {
                    return fromString(value, encodingOrOffset);
                  }
                  if (ArrayBuffer.isView(value)) {
                    return fromArrayLike(value);
                  }
                  if (value == null) {
                    throw TypeError(
                      'The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' +
                        typeof value
                    );
                  }
                  if (isInstance(value, ArrayBuffer) || (value && isInstance(value.buffer, ArrayBuffer))) {
                    return fromArrayBuffer(value, encodingOrOffset, length);
                  }
                  if (typeof value === 'number') {
                    throw new TypeError('The "value" argument must not be of type number. Received type number');
                  }
                  var valueOf = value.valueOf && value.valueOf();
                  if (valueOf != null && valueOf !== value) {
                    return Buffer.from(valueOf, encodingOrOffset, length);
                  }
                  var b = fromObject(value);
                  if (b) return b;
                  if (
                    typeof Symbol !== 'undefined' &&
                    Symbol.toPrimitive != null &&
                    typeof value[Symbol.toPrimitive] === 'function'
                  ) {
                    return Buffer.from(value[Symbol.toPrimitive]('string'), encodingOrOffset, length);
                  }
                  throw new TypeError(
                    'The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' +
                      typeof value
                  );
                }
                Buffer.from = function (value, encodingOrOffset, length) {
                  return from(value, encodingOrOffset, length);
                };
                Buffer.prototype.__proto__ = Uint8Array.prototype;
                Buffer.__proto__ = Uint8Array;
                function assertSize(size) {
                  if (typeof size !== 'number') {
                    throw new TypeError('"size" argument must be of type number');
                  } else if (size < 0) {
                    throw new RangeError('The value "' + size + '" is invalid for option "size"');
                  }
                }
                function alloc(size, fill, encoding) {
                  assertSize(size);
                  if (size <= 0) {
                    return createBuffer(size);
                  }
                  if (fill !== void 0) {
                    return typeof encoding === 'string' ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
                  }
                  return createBuffer(size);
                }
                Buffer.alloc = function (size, fill, encoding) {
                  return alloc(size, fill, encoding);
                };
                function allocUnsafe(size) {
                  assertSize(size);
                  return createBuffer(size < 0 ? 0 : checked(size) | 0);
                }
                Buffer.allocUnsafe = function (size) {
                  return allocUnsafe(size);
                };
                Buffer.allocUnsafeSlow = function (size) {
                  return allocUnsafe(size);
                };
                function fromString(string, encoding) {
                  if (typeof encoding !== 'string' || encoding === '') {
                    encoding = 'utf8';
                  }
                  if (!Buffer.isEncoding(encoding)) {
                    throw new TypeError('Unknown encoding: ' + encoding);
                  }
                  var length = byteLength(string, encoding) | 0;
                  var buf = createBuffer(length);
                  var actual = buf.write(string, encoding);
                  if (actual !== length) {
                    buf = buf.slice(0, actual);
                  }
                  return buf;
                }
                function fromArrayLike(array) {
                  var length = array.length < 0 ? 0 : checked(array.length) | 0;
                  var buf = createBuffer(length);
                  for (var i = 0; i < length; i += 1) {
                    buf[i] = array[i] & 255;
                  }
                  return buf;
                }
                function fromArrayBuffer(array, byteOffset, length) {
                  if (byteOffset < 0 || array.byteLength < byteOffset) {
                    throw new RangeError('"offset" is outside of buffer bounds');
                  }
                  if (array.byteLength < byteOffset + (length || 0)) {
                    throw new RangeError('"length" is outside of buffer bounds');
                  }
                  var buf;
                  if (byteOffset === void 0 && length === void 0) {
                    buf = new Uint8Array(array);
                  } else if (length === void 0) {
                    buf = new Uint8Array(array, byteOffset);
                  } else {
                    buf = new Uint8Array(array, byteOffset, length);
                  }
                  buf.__proto__ = Buffer.prototype;
                  return buf;
                }
                function fromObject(obj) {
                  if (Buffer.isBuffer(obj)) {
                    var len = checked(obj.length) | 0;
                    var buf = createBuffer(len);
                    if (buf.length === 0) {
                      return buf;
                    }
                    obj.copy(buf, 0, 0, len);
                    return buf;
                  }
                  if (obj.length !== void 0) {
                    if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) {
                      return createBuffer(0);
                    }
                    return fromArrayLike(obj);
                  }
                  if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
                    return fromArrayLike(obj.data);
                  }
                }
                function checked(length) {
                  if (length >= K_MAX_LENGTH) {
                    throw new RangeError(
                      'Attempt to allocate Buffer larger than maximum size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes'
                    );
                  }
                  return length | 0;
                }
                function SlowBuffer(length) {
                  if (+length != length) {
                    length = 0;
                  }
                  return Buffer.alloc(+length);
                }
                Buffer.isBuffer = function isBuffer(b) {
                  return b != null && b._isBuffer === true && b !== Buffer.prototype;
                };
                Buffer.compare = function compare(a, b) {
                  if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength);
                  if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength);
                  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
                    throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                  }
                  if (a === b) return 0;
                  var x = a.length;
                  var y = b.length;
                  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
                    if (a[i] !== b[i]) {
                      x = a[i];
                      y = b[i];
                      break;
                    }
                  }
                  if (x < y) return -1;
                  if (y < x) return 1;
                  return 0;
                };
                Buffer.isEncoding = function isEncoding(encoding) {
                  switch (String(encoding).toLowerCase()) {
                    case 'hex':
                    case 'utf8':
                    case 'utf-8':
                    case 'ascii':
                    case 'latin1':
                    case 'binary':
                    case 'base64':
                    case 'ucs2':
                    case 'ucs-2':
                    case 'utf16le':
                    case 'utf-16le':
                      return true;
                    default:
                      return false;
                  }
                };
                Buffer.concat = function concat(list, length) {
                  if (!Array.isArray(list)) {
                    throw new TypeError('"list" argument must be an Array of Buffers');
                  }
                  if (list.length === 0) {
                    return Buffer.alloc(0);
                  }
                  var i;
                  if (length === void 0) {
                    length = 0;
                    for (i = 0; i < list.length; ++i) {
                      length += list[i].length;
                    }
                  }
                  var buffer = Buffer.allocUnsafe(length);
                  var pos = 0;
                  for (i = 0; i < list.length; ++i) {
                    var buf = list[i];
                    if (isInstance(buf, Uint8Array)) {
                      buf = Buffer.from(buf);
                    }
                    if (!Buffer.isBuffer(buf)) {
                      throw new TypeError('"list" argument must be an Array of Buffers');
                    }
                    buf.copy(buffer, pos);
                    pos += buf.length;
                  }
                  return buffer;
                };
                function byteLength(string, encoding) {
                  if (Buffer.isBuffer(string)) {
                    return string.length;
                  }
                  if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
                    return string.byteLength;
                  }
                  if (typeof string !== 'string') {
                    throw new TypeError(
                      'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof string
                    );
                  }
                  var len = string.length;
                  var mustMatch = arguments.length > 2 && arguments[2] === true;
                  if (!mustMatch && len === 0) return 0;
                  var loweredCase = false;
                  for (;;) {
                    switch (encoding) {
                      case 'ascii':
                      case 'latin1':
                      case 'binary':
                        return len;
                      case 'utf8':
                      case 'utf-8':
                        return utf8ToBytes(string).length;
                      case 'ucs2':
                      case 'ucs-2':
                      case 'utf16le':
                      case 'utf-16le':
                        return len * 2;
                      case 'hex':
                        return len >>> 1;
                      case 'base64':
                        return base64ToBytes(string).length;
                      default:
                        if (loweredCase) {
                          return mustMatch ? -1 : utf8ToBytes(string).length;
                        }
                        encoding = ('' + encoding).toLowerCase();
                        loweredCase = true;
                    }
                  }
                }
                Buffer.byteLength = byteLength;
                function slowToString(encoding, start, end) {
                  var loweredCase = false;
                  if (start === void 0 || start < 0) {
                    start = 0;
                  }
                  if (start > this.length) {
                    return '';
                  }
                  if (end === void 0 || end > this.length) {
                    end = this.length;
                  }
                  if (end <= 0) {
                    return '';
                  }
                  end >>>= 0;
                  start >>>= 0;
                  if (end <= start) {
                    return '';
                  }
                  if (!encoding) encoding = 'utf8';
                  while (true) {
                    switch (encoding) {
                      case 'hex':
                        return hexSlice(this, start, end);
                      case 'utf8':
                      case 'utf-8':
                        return utf8Slice(this, start, end);
                      case 'ascii':
                        return asciiSlice(this, start, end);
                      case 'latin1':
                      case 'binary':
                        return latin1Slice(this, start, end);
                      case 'base64':
                        return base64Slice(this, start, end);
                      case 'ucs2':
                      case 'ucs-2':
                      case 'utf16le':
                      case 'utf-16le':
                        return utf16leSlice(this, start, end);
                      default:
                        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
                        encoding = (encoding + '').toLowerCase();
                        loweredCase = true;
                    }
                  }
                }
                Buffer.prototype._isBuffer = true;
                function swap(b, n, m) {
                  var i = b[n];
                  b[n] = b[m];
                  b[m] = i;
                }
                Buffer.prototype.swap16 = function swap16() {
                  var len = this.length;
                  if (len % 2 !== 0) {
                    throw new RangeError('Buffer size must be a multiple of 16-bits');
                  }
                  for (var i = 0; i < len; i += 2) {
                    swap(this, i, i + 1);
                  }
                  return this;
                };
                Buffer.prototype.swap32 = function swap32() {
                  var len = this.length;
                  if (len % 4 !== 0) {
                    throw new RangeError('Buffer size must be a multiple of 32-bits');
                  }
                  for (var i = 0; i < len; i += 4) {
                    swap(this, i, i + 3);
                    swap(this, i + 1, i + 2);
                  }
                  return this;
                };
                Buffer.prototype.swap64 = function swap64() {
                  var len = this.length;
                  if (len % 8 !== 0) {
                    throw new RangeError('Buffer size must be a multiple of 64-bits');
                  }
                  for (var i = 0; i < len; i += 8) {
                    swap(this, i, i + 7);
                    swap(this, i + 1, i + 6);
                    swap(this, i + 2, i + 5);
                    swap(this, i + 3, i + 4);
                  }
                  return this;
                };
                Buffer.prototype.toString = function toString() {
                  var length = this.length;
                  if (length === 0) return '';
                  if (arguments.length === 0) return utf8Slice(this, 0, length);
                  return slowToString.apply(this, arguments);
                };
                Buffer.prototype.toLocaleString = Buffer.prototype.toString;
                Buffer.prototype.equals = function equals(b) {
                  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer');
                  if (this === b) return true;
                  return Buffer.compare(this, b) === 0;
                };
                Buffer.prototype.inspect = function inspect() {
                  var str = '';
                  var max = exports3.INSPECT_MAX_BYTES;
                  str = this.toString('hex', 0, max)
                    .replace(/(.{2})/g, '$1 ')
                    .trim();
                  if (this.length > max) str += ' ... ';
                  return '<Buffer ' + str + '>';
                };
                Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
                  if (isInstance(target, Uint8Array)) {
                    target = Buffer.from(target, target.offset, target.byteLength);
                  }
                  if (!Buffer.isBuffer(target)) {
                    throw new TypeError(
                      'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof target
                    );
                  }
                  if (start === void 0) {
                    start = 0;
                  }
                  if (end === void 0) {
                    end = target ? target.length : 0;
                  }
                  if (thisStart === void 0) {
                    thisStart = 0;
                  }
                  if (thisEnd === void 0) {
                    thisEnd = this.length;
                  }
                  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
                    throw new RangeError('out of range index');
                  }
                  if (thisStart >= thisEnd && start >= end) {
                    return 0;
                  }
                  if (thisStart >= thisEnd) {
                    return -1;
                  }
                  if (start >= end) {
                    return 1;
                  }
                  start >>>= 0;
                  end >>>= 0;
                  thisStart >>>= 0;
                  thisEnd >>>= 0;
                  if (this === target) return 0;
                  var x = thisEnd - thisStart;
                  var y = end - start;
                  var len = Math.min(x, y);
                  var thisCopy = this.slice(thisStart, thisEnd);
                  var targetCopy = target.slice(start, end);
                  for (var i = 0; i < len; ++i) {
                    if (thisCopy[i] !== targetCopy[i]) {
                      x = thisCopy[i];
                      y = targetCopy[i];
                      break;
                    }
                  }
                  if (x < y) return -1;
                  if (y < x) return 1;
                  return 0;
                };
                function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
                  if (buffer.length === 0) return -1;
                  if (typeof byteOffset === 'string') {
                    encoding = byteOffset;
                    byteOffset = 0;
                  } else if (byteOffset > 2147483647) {
                    byteOffset = 2147483647;
                  } else if (byteOffset < -2147483648) {
                    byteOffset = -2147483648;
                  }
                  byteOffset = +byteOffset;
                  if (numberIsNaN(byteOffset)) {
                    byteOffset = dir ? 0 : buffer.length - 1;
                  }
                  if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
                  if (byteOffset >= buffer.length) {
                    if (dir) return -1;
                    else byteOffset = buffer.length - 1;
                  } else if (byteOffset < 0) {
                    if (dir) byteOffset = 0;
                    else return -1;
                  }
                  if (typeof val === 'string') {
                    val = Buffer.from(val, encoding);
                  }
                  if (Buffer.isBuffer(val)) {
                    if (val.length === 0) {
                      return -1;
                    }
                    return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
                  } else if (typeof val === 'number') {
                    val = val & 255;
                    if (typeof Uint8Array.prototype.indexOf === 'function') {
                      if (dir) {
                        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
                      } else {
                        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
                      }
                    }
                    return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
                  }
                  throw new TypeError('val must be string, number or Buffer');
                }
                function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
                  var indexSize = 1;
                  var arrLength = arr.length;
                  var valLength = val.length;
                  if (encoding !== void 0) {
                    encoding = String(encoding).toLowerCase();
                    if (encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
                      if (arr.length < 2 || val.length < 2) {
                        return -1;
                      }
                      indexSize = 2;
                      arrLength /= 2;
                      valLength /= 2;
                      byteOffset /= 2;
                    }
                  }
                  function read(buf, i2) {
                    if (indexSize === 1) {
                      return buf[i2];
                    } else {
                      return buf.readUInt16BE(i2 * indexSize);
                    }
                  }
                  var i;
                  if (dir) {
                    var foundIndex = -1;
                    for (i = byteOffset; i < arrLength; i++) {
                      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
                        if (foundIndex === -1) foundIndex = i;
                        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
                      } else {
                        if (foundIndex !== -1) i -= i - foundIndex;
                        foundIndex = -1;
                      }
                    }
                  } else {
                    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
                    for (i = byteOffset; i >= 0; i--) {
                      var found = true;
                      for (var j = 0; j < valLength; j++) {
                        if (read(arr, i + j) !== read(val, j)) {
                          found = false;
                          break;
                        }
                      }
                      if (found) return i;
                    }
                  }
                  return -1;
                }
                Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
                  return this.indexOf(val, byteOffset, encoding) !== -1;
                };
                Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
                  return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
                };
                Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
                  return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
                };
                function hexWrite(buf, string, offset, length) {
                  offset = Number(offset) || 0;
                  var remaining = buf.length - offset;
                  if (!length) {
                    length = remaining;
                  } else {
                    length = Number(length);
                    if (length > remaining) {
                      length = remaining;
                    }
                  }
                  var strLen = string.length;
                  if (length > strLen / 2) {
                    length = strLen / 2;
                  }
                  for (var i = 0; i < length; ++i) {
                    var parsed = parseInt(string.substr(i * 2, 2), 16);
                    if (numberIsNaN(parsed)) return i;
                    buf[offset + i] = parsed;
                  }
                  return i;
                }
                function utf8Write(buf, string, offset, length) {
                  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
                }
                function asciiWrite(buf, string, offset, length) {
                  return blitBuffer(asciiToBytes(string), buf, offset, length);
                }
                function latin1Write(buf, string, offset, length) {
                  return asciiWrite(buf, string, offset, length);
                }
                function base64Write(buf, string, offset, length) {
                  return blitBuffer(base64ToBytes(string), buf, offset, length);
                }
                function ucs2Write(buf, string, offset, length) {
                  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
                }
                Buffer.prototype.write = function write(string, offset, length, encoding) {
                  if (offset === void 0) {
                    encoding = 'utf8';
                    length = this.length;
                    offset = 0;
                  } else if (length === void 0 && typeof offset === 'string') {
                    encoding = offset;
                    length = this.length;
                    offset = 0;
                  } else if (isFinite(offset)) {
                    offset = offset >>> 0;
                    if (isFinite(length)) {
                      length = length >>> 0;
                      if (encoding === void 0) encoding = 'utf8';
                    } else {
                      encoding = length;
                      length = void 0;
                    }
                  } else {
                    throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
                  }
                  var remaining = this.length - offset;
                  if (length === void 0 || length > remaining) length = remaining;
                  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
                    throw new RangeError('Attempt to write outside buffer bounds');
                  }
                  if (!encoding) encoding = 'utf8';
                  var loweredCase = false;
                  for (;;) {
                    switch (encoding) {
                      case 'hex':
                        return hexWrite(this, string, offset, length);
                      case 'utf8':
                      case 'utf-8':
                        return utf8Write(this, string, offset, length);
                      case 'ascii':
                        return asciiWrite(this, string, offset, length);
                      case 'latin1':
                      case 'binary':
                        return latin1Write(this, string, offset, length);
                      case 'base64':
                        return base64Write(this, string, offset, length);
                      case 'ucs2':
                      case 'ucs-2':
                      case 'utf16le':
                      case 'utf-16le':
                        return ucs2Write(this, string, offset, length);
                      default:
                        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
                        encoding = ('' + encoding).toLowerCase();
                        loweredCase = true;
                    }
                  }
                };
                Buffer.prototype.toJSON = function toJSON() {
                  return {
                    type: 'Buffer',
                    data: Array.prototype.slice.call(this._arr || this, 0)
                  };
                };
                function base64Slice(buf, start, end) {
                  if (start === 0 && end === buf.length) {
                    return base64.fromByteArray(buf);
                  } else {
                    return base64.fromByteArray(buf.slice(start, end));
                  }
                }
                function utf8Slice(buf, start, end) {
                  end = Math.min(buf.length, end);
                  var res = [];
                  var i = start;
                  while (i < end) {
                    var firstByte = buf[i];
                    var codePoint = null;
                    var bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
                    if (i + bytesPerSequence <= end) {
                      var secondByte, thirdByte, fourthByte, tempCodePoint;
                      switch (bytesPerSequence) {
                        case 1:
                          if (firstByte < 128) {
                            codePoint = firstByte;
                          }
                          break;
                        case 2:
                          secondByte = buf[i + 1];
                          if ((secondByte & 192) === 128) {
                            tempCodePoint = ((firstByte & 31) << 6) | (secondByte & 63);
                            if (tempCodePoint > 127) {
                              codePoint = tempCodePoint;
                            }
                          }
                          break;
                        case 3:
                          secondByte = buf[i + 1];
                          thirdByte = buf[i + 2];
                          if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
                            tempCodePoint = ((firstByte & 15) << 12) | ((secondByte & 63) << 6) | (thirdByte & 63);
                            if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) {
                              codePoint = tempCodePoint;
                            }
                          }
                          break;
                        case 4:
                          secondByte = buf[i + 1];
                          thirdByte = buf[i + 2];
                          fourthByte = buf[i + 3];
                          if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
                            tempCodePoint =
                              ((firstByte & 15) << 18) | ((secondByte & 63) << 12) | ((thirdByte & 63) << 6) | (fourthByte & 63);
                            if (tempCodePoint > 65535 && tempCodePoint < 1114112) {
                              codePoint = tempCodePoint;
                            }
                          }
                      }
                    }
                    if (codePoint === null) {
                      codePoint = 65533;
                      bytesPerSequence = 1;
                    } else if (codePoint > 65535) {
                      codePoint -= 65536;
                      res.push(((codePoint >>> 10) & 1023) | 55296);
                      codePoint = 56320 | (codePoint & 1023);
                    }
                    res.push(codePoint);
                    i += bytesPerSequence;
                  }
                  return decodeCodePointsArray(res);
                }
                var MAX_ARGUMENTS_LENGTH = 4096;
                function decodeCodePointsArray(codePoints) {
                  var len = codePoints.length;
                  if (len <= MAX_ARGUMENTS_LENGTH) {
                    return String.fromCharCode.apply(String, codePoints);
                  }
                  var res = '';
                  var i = 0;
                  while (i < len) {
                    res += String.fromCharCode.apply(String, codePoints.slice(i, (i += MAX_ARGUMENTS_LENGTH)));
                  }
                  return res;
                }
                function asciiSlice(buf, start, end) {
                  var ret = '';
                  end = Math.min(buf.length, end);
                  for (var i = start; i < end; ++i) {
                    ret += String.fromCharCode(buf[i] & 127);
                  }
                  return ret;
                }
                function latin1Slice(buf, start, end) {
                  var ret = '';
                  end = Math.min(buf.length, end);
                  for (var i = start; i < end; ++i) {
                    ret += String.fromCharCode(buf[i]);
                  }
                  return ret;
                }
                function hexSlice(buf, start, end) {
                  var len = buf.length;
                  if (!start || start < 0) start = 0;
                  if (!end || end < 0 || end > len) end = len;
                  var out = '';
                  for (var i = start; i < end; ++i) {
                    out += toHex(buf[i]);
                  }
                  return out;
                }
                function utf16leSlice(buf, start, end) {
                  var bytes = buf.slice(start, end);
                  var res = '';
                  for (var i = 0; i < bytes.length; i += 2) {
                    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
                  }
                  return res;
                }
                Buffer.prototype.slice = function slice(start, end) {
                  var len = this.length;
                  start = ~~start;
                  end = end === void 0 ? len : ~~end;
                  if (start < 0) {
                    start += len;
                    if (start < 0) start = 0;
                  } else if (start > len) {
                    start = len;
                  }
                  if (end < 0) {
                    end += len;
                    if (end < 0) end = 0;
                  } else if (end > len) {
                    end = len;
                  }
                  if (end < start) end = start;
                  var newBuf = this.subarray(start, end);
                  newBuf.__proto__ = Buffer.prototype;
                  return newBuf;
                };
                function checkOffset(offset, ext, length) {
                  if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
                  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
                }
                Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength2, noAssert) {
                  offset = offset >>> 0;
                  byteLength2 = byteLength2 >>> 0;
                  if (!noAssert) checkOffset(offset, byteLength2, this.length);
                  var val = this[offset];
                  var mul = 1;
                  var i = 0;
                  while (++i < byteLength2 && (mul *= 256)) {
                    val += this[offset + i] * mul;
                  }
                  return val;
                };
                Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength2, noAssert) {
                  offset = offset >>> 0;
                  byteLength2 = byteLength2 >>> 0;
                  if (!noAssert) {
                    checkOffset(offset, byteLength2, this.length);
                  }
                  var val = this[offset + --byteLength2];
                  var mul = 1;
                  while (byteLength2 > 0 && (mul *= 256)) {
                    val += this[offset + --byteLength2] * mul;
                  }
                  return val;
                };
                Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
                  offset = offset >>> 0;
                  if (!noAssert) checkOffset(offset, 1, this.length);
                  return this[offset];
                };
                Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
                  offset = offset >>> 0;
                  if (!noAssert) checkOffset(offset, 2, this.length);
                  return this[offset] | (this[offset + 1] << 8);
                };
                Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
                  offset = offset >>> 0;
                  if (!noAssert) checkOffset(offset, 2, this.length);
                  return (this[offset] << 8) | this[offset + 1];
                };
                Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
                  offset = offset >>> 0;
                  if (!noAssert) checkOffset(offset, 4, this.length);
                  return (this[offset] | (this[offset + 1] << 8) | (this[offset + 2] << 16)) + this[offset + 3] * 16777216;
                };
                Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
                  offset = offset >>> 0;
                  if (!noAssert) checkOffset(offset, 4, this.length);
                  return this[offset] * 16777216 + ((this[offset + 1] << 16) | (this[offset + 2] << 8) | this[offset + 3]);
                };
                Buffer.prototype.readIntLE = function readIntLE(offset, byteLength2, noAssert) {
                  offset = offset >>> 0;
                  byteLength2 = byteLength2 >>> 0;
                  if (!noAssert) checkOffset(offset, byteLength2, this.length);
                  var val = this[offset];
                  var mul = 1;
                  var i = 0;
                  while (++i < byteLength2 && (mul *= 256)) {
                    val += this[offset + i] * mul;
                  }
                  mul *= 128;
                  if (val >= mul) val -= Math.pow(2, 8 * byteLength2);
                  return val;
                };
                Buffer.prototype.readIntBE = function readIntBE(offset, byteLength2, noAssert) {
                  offset = offset >>> 0;
                  byteLength2 = byteLength2 >>> 0;
                  if (!noAssert) checkOffset(offset, byteLength2, this.length);
                  var i = byteLength2;
                  var mul = 1;
                  var val = this[offset + --i];
                  while (i > 0 && (mul *= 256)) {
                    val += this[offset + --i] * mul;
                  }
                  mul *= 128;
                  if (val >= mul) val -= Math.pow(2, 8 * byteLength2);
                  return val;
                };
                Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
                  offset = offset >>> 0;
                  if (!noAssert) checkOffset(offset, 1, this.length);
                  if (!(this[offset] & 128)) return this[offset];
                  return (255 - this[offset] + 1) * -1;
                };
                Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
                  offset = offset >>> 0;
                  if (!noAssert) checkOffset(offset, 2, this.length);
                  var val = this[offset] | (this[offset + 1] << 8);
                  return val & 32768 ? val | 4294901760 : val;
                };
                Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
                  offset = offset >>> 0;
                  if (!noAssert) checkOffset(offset, 2, this.length);
                  var val = this[offset + 1] | (this[offset] << 8);
                  return val & 32768 ? val | 4294901760 : val;
                };
                Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
                  offset = offset >>> 0;
                  if (!noAssert) checkOffset(offset, 4, this.length);
                  return this[offset] | (this[offset + 1] << 8) | (this[offset + 2] << 16) | (this[offset + 3] << 24);
                };
                Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
                  offset = offset >>> 0;
                  if (!noAssert) checkOffset(offset, 4, this.length);
                  return (this[offset] << 24) | (this[offset + 1] << 16) | (this[offset + 2] << 8) | this[offset + 3];
                };
                Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
                  offset = offset >>> 0;
                  if (!noAssert) checkOffset(offset, 4, this.length);
                  return ieee754.read(this, offset, true, 23, 4);
                };
                Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
                  offset = offset >>> 0;
                  if (!noAssert) checkOffset(offset, 4, this.length);
                  return ieee754.read(this, offset, false, 23, 4);
                };
                Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
                  offset = offset >>> 0;
                  if (!noAssert) checkOffset(offset, 8, this.length);
                  return ieee754.read(this, offset, true, 52, 8);
                };
                Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
                  offset = offset >>> 0;
                  if (!noAssert) checkOffset(offset, 8, this.length);
                  return ieee754.read(this, offset, false, 52, 8);
                };
                function checkInt(buf, value, offset, ext, max, min) {
                  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
                  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
                  if (offset + ext > buf.length) throw new RangeError('Index out of range');
                }
                Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength2, noAssert) {
                  value = +value;
                  offset = offset >>> 0;
                  byteLength2 = byteLength2 >>> 0;
                  if (!noAssert) {
                    var maxBytes = Math.pow(2, 8 * byteLength2) - 1;
                    checkInt(this, value, offset, byteLength2, maxBytes, 0);
                  }
                  var mul = 1;
                  var i = 0;
                  this[offset] = value & 255;
                  while (++i < byteLength2 && (mul *= 256)) {
                    this[offset + i] = (value / mul) & 255;
                  }
                  return offset + byteLength2;
                };
                Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength2, noAssert) {
                  value = +value;
                  offset = offset >>> 0;
                  byteLength2 = byteLength2 >>> 0;
                  if (!noAssert) {
                    var maxBytes = Math.pow(2, 8 * byteLength2) - 1;
                    checkInt(this, value, offset, byteLength2, maxBytes, 0);
                  }
                  var i = byteLength2 - 1;
                  var mul = 1;
                  this[offset + i] = value & 255;
                  while (--i >= 0 && (mul *= 256)) {
                    this[offset + i] = (value / mul) & 255;
                  }
                  return offset + byteLength2;
                };
                Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
                  value = +value;
                  offset = offset >>> 0;
                  if (!noAssert) checkInt(this, value, offset, 1, 255, 0);
                  this[offset] = value & 255;
                  return offset + 1;
                };
                Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
                  value = +value;
                  offset = offset >>> 0;
                  if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
                  this[offset] = value & 255;
                  this[offset + 1] = value >>> 8;
                  return offset + 2;
                };
                Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
                  value = +value;
                  offset = offset >>> 0;
                  if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
                  this[offset] = value >>> 8;
                  this[offset + 1] = value & 255;
                  return offset + 2;
                };
                Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
                  value = +value;
                  offset = offset >>> 0;
                  if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
                  this[offset + 3] = value >>> 24;
                  this[offset + 2] = value >>> 16;
                  this[offset + 1] = value >>> 8;
                  this[offset] = value & 255;
                  return offset + 4;
                };
                Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
                  value = +value;
                  offset = offset >>> 0;
                  if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
                  this[offset] = value >>> 24;
                  this[offset + 1] = value >>> 16;
                  this[offset + 2] = value >>> 8;
                  this[offset + 3] = value & 255;
                  return offset + 4;
                };
                Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength2, noAssert) {
                  value = +value;
                  offset = offset >>> 0;
                  if (!noAssert) {
                    var limit = Math.pow(2, 8 * byteLength2 - 1);
                    checkInt(this, value, offset, byteLength2, limit - 1, -limit);
                  }
                  var i = 0;
                  var mul = 1;
                  var sub = 0;
                  this[offset] = value & 255;
                  while (++i < byteLength2 && (mul *= 256)) {
                    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
                      sub = 1;
                    }
                    this[offset + i] = (((value / mul) >> 0) - sub) & 255;
                  }
                  return offset + byteLength2;
                };
                Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength2, noAssert) {
                  value = +value;
                  offset = offset >>> 0;
                  if (!noAssert) {
                    var limit = Math.pow(2, 8 * byteLength2 - 1);
                    checkInt(this, value, offset, byteLength2, limit - 1, -limit);
                  }
                  var i = byteLength2 - 1;
                  var mul = 1;
                  var sub = 0;
                  this[offset + i] = value & 255;
                  while (--i >= 0 && (mul *= 256)) {
                    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
                      sub = 1;
                    }
                    this[offset + i] = (((value / mul) >> 0) - sub) & 255;
                  }
                  return offset + byteLength2;
                };
                Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
                  value = +value;
                  offset = offset >>> 0;
                  if (!noAssert) checkInt(this, value, offset, 1, 127, -128);
                  if (value < 0) value = 255 + value + 1;
                  this[offset] = value & 255;
                  return offset + 1;
                };
                Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
                  value = +value;
                  offset = offset >>> 0;
                  if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
                  this[offset] = value & 255;
                  this[offset + 1] = value >>> 8;
                  return offset + 2;
                };
                Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
                  value = +value;
                  offset = offset >>> 0;
                  if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
                  this[offset] = value >>> 8;
                  this[offset + 1] = value & 255;
                  return offset + 2;
                };
                Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
                  value = +value;
                  offset = offset >>> 0;
                  if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
                  this[offset] = value & 255;
                  this[offset + 1] = value >>> 8;
                  this[offset + 2] = value >>> 16;
                  this[offset + 3] = value >>> 24;
                  return offset + 4;
                };
                Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
                  value = +value;
                  offset = offset >>> 0;
                  if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
                  if (value < 0) value = 4294967295 + value + 1;
                  this[offset] = value >>> 24;
                  this[offset + 1] = value >>> 16;
                  this[offset + 2] = value >>> 8;
                  this[offset + 3] = value & 255;
                  return offset + 4;
                };
                function checkIEEE754(buf, value, offset, ext, max, min) {
                  if (offset + ext > buf.length) throw new RangeError('Index out of range');
                  if (offset < 0) throw new RangeError('Index out of range');
                }
                function writeFloat(buf, value, offset, littleEndian, noAssert) {
                  value = +value;
                  offset = offset >>> 0;
                  if (!noAssert) {
                    checkIEEE754(buf, value, offset, 4, 34028234663852886e22, -34028234663852886e22);
                  }
                  ieee754.write(buf, value, offset, littleEndian, 23, 4);
                  return offset + 4;
                }
                Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
                  return writeFloat(this, value, offset, true, noAssert);
                };
                Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
                  return writeFloat(this, value, offset, false, noAssert);
                };
                function writeDouble(buf, value, offset, littleEndian, noAssert) {
                  value = +value;
                  offset = offset >>> 0;
                  if (!noAssert) {
                    checkIEEE754(buf, value, offset, 8, 17976931348623157e292, -17976931348623157e292);
                  }
                  ieee754.write(buf, value, offset, littleEndian, 52, 8);
                  return offset + 8;
                }
                Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
                  return writeDouble(this, value, offset, true, noAssert);
                };
                Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
                  return writeDouble(this, value, offset, false, noAssert);
                };
                Buffer.prototype.copy = function copy(target, targetStart, start, end) {
                  if (!Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer');
                  if (!start) start = 0;
                  if (!end && end !== 0) end = this.length;
                  if (targetStart >= target.length) targetStart = target.length;
                  if (!targetStart) targetStart = 0;
                  if (end > 0 && end < start) end = start;
                  if (end === start) return 0;
                  if (target.length === 0 || this.length === 0) return 0;
                  if (targetStart < 0) {
                    throw new RangeError('targetStart out of bounds');
                  }
                  if (start < 0 || start >= this.length) throw new RangeError('Index out of range');
                  if (end < 0) throw new RangeError('sourceEnd out of bounds');
                  if (end > this.length) end = this.length;
                  if (target.length - targetStart < end - start) {
                    end = target.length - targetStart + start;
                  }
                  var len = end - start;
                  if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') {
                    this.copyWithin(targetStart, start, end);
                  } else if (this === target && start < targetStart && targetStart < end) {
                    for (var i = len - 1; i >= 0; --i) {
                      target[i + targetStart] = this[i + start];
                    }
                  } else {
                    Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
                  }
                  return len;
                };
                Buffer.prototype.fill = function fill(val, start, end, encoding) {
                  if (typeof val === 'string') {
                    if (typeof start === 'string') {
                      encoding = start;
                      start = 0;
                      end = this.length;
                    } else if (typeof end === 'string') {
                      encoding = end;
                      end = this.length;
                    }
                    if (encoding !== void 0 && typeof encoding !== 'string') {
                      throw new TypeError('encoding must be a string');
                    }
                    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
                      throw new TypeError('Unknown encoding: ' + encoding);
                    }
                    if (val.length === 1) {
                      var code = val.charCodeAt(0);
                      if ((encoding === 'utf8' && code < 128) || encoding === 'latin1') {
                        val = code;
                      }
                    }
                  } else if (typeof val === 'number') {
                    val = val & 255;
                  }
                  if (start < 0 || this.length < start || this.length < end) {
                    throw new RangeError('Out of range index');
                  }
                  if (end <= start) {
                    return this;
                  }
                  start = start >>> 0;
                  end = end === void 0 ? this.length : end >>> 0;
                  if (!val) val = 0;
                  var i;
                  if (typeof val === 'number') {
                    for (i = start; i < end; ++i) {
                      this[i] = val;
                    }
                  } else {
                    var bytes = Buffer.isBuffer(val) ? val : Buffer.from(val, encoding);
                    var len = bytes.length;
                    if (len === 0) {
                      throw new TypeError('The value "' + val + '" is invalid for argument "value"');
                    }
                    for (i = 0; i < end - start; ++i) {
                      this[i + start] = bytes[i % len];
                    }
                  }
                  return this;
                };
                var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
                function base64clean(str) {
                  str = str.split('=')[0];
                  str = str.trim().replace(INVALID_BASE64_RE, '');
                  if (str.length < 2) return '';
                  while (str.length % 4 !== 0) {
                    str = str + '=';
                  }
                  return str;
                }
                function toHex(n) {
                  if (n < 16) return '0' + n.toString(16);
                  return n.toString(16);
                }
                function utf8ToBytes(string, units) {
                  units = units || Infinity;
                  var codePoint;
                  var length = string.length;
                  var leadSurrogate = null;
                  var bytes = [];
                  for (var i = 0; i < length; ++i) {
                    codePoint = string.charCodeAt(i);
                    if (codePoint > 55295 && codePoint < 57344) {
                      if (!leadSurrogate) {
                        if (codePoint > 56319) {
                          if ((units -= 3) > -1) bytes.push(239, 191, 189);
                          continue;
                        } else if (i + 1 === length) {
                          if ((units -= 3) > -1) bytes.push(239, 191, 189);
                          continue;
                        }
                        leadSurrogate = codePoint;
                        continue;
                      }
                      if (codePoint < 56320) {
                        if ((units -= 3) > -1) bytes.push(239, 191, 189);
                        leadSurrogate = codePoint;
                        continue;
                      }
                      codePoint = (((leadSurrogate - 55296) << 10) | (codePoint - 56320)) + 65536;
                    } else if (leadSurrogate) {
                      if ((units -= 3) > -1) bytes.push(239, 191, 189);
                    }
                    leadSurrogate = null;
                    if (codePoint < 128) {
                      if ((units -= 1) < 0) break;
                      bytes.push(codePoint);
                    } else if (codePoint < 2048) {
                      if ((units -= 2) < 0) break;
                      bytes.push((codePoint >> 6) | 192, (codePoint & 63) | 128);
                    } else if (codePoint < 65536) {
                      if ((units -= 3) < 0) break;
                      bytes.push((codePoint >> 12) | 224, ((codePoint >> 6) & 63) | 128, (codePoint & 63) | 128);
                    } else if (codePoint < 1114112) {
                      if ((units -= 4) < 0) break;
                      bytes.push(
                        (codePoint >> 18) | 240,
                        ((codePoint >> 12) & 63) | 128,
                        ((codePoint >> 6) & 63) | 128,
                        (codePoint & 63) | 128
                      );
                    } else {
                      throw new Error('Invalid code point');
                    }
                  }
                  return bytes;
                }
                function asciiToBytes(str) {
                  var byteArray = [];
                  for (var i = 0; i < str.length; ++i) {
                    byteArray.push(str.charCodeAt(i) & 255);
                  }
                  return byteArray;
                }
                function utf16leToBytes(str, units) {
                  var c, hi, lo;
                  var byteArray = [];
                  for (var i = 0; i < str.length; ++i) {
                    if ((units -= 2) < 0) break;
                    c = str.charCodeAt(i);
                    hi = c >> 8;
                    lo = c % 256;
                    byteArray.push(lo);
                    byteArray.push(hi);
                  }
                  return byteArray;
                }
                function base64ToBytes(str) {
                  return base64.toByteArray(base64clean(str));
                }
                function blitBuffer(src, dst, offset, length) {
                  for (var i = 0; i < length; ++i) {
                    if (i + offset >= dst.length || i >= src.length) break;
                    dst[i + offset] = src[i];
                  }
                  return i;
                }
                function isInstance(obj, type) {
                  return (
                    obj instanceof type ||
                    (obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name)
                  );
                }
                function numberIsNaN(obj) {
                  return obj !== obj;
                }
              }).call(this, require2('buffer').Buffer);
            },
            { 'base64-js': 1, buffer: 3, ieee754: 6 }
          ],
          4: [
            function (require2, module3, exports3) {
              (function (Buffer) {
                function isArray(arg) {
                  if (Array.isArray) {
                    return Array.isArray(arg);
                  }
                  return objectToString(arg) === '[object Array]';
                }
                exports3.isArray = isArray;
                function isBoolean(arg) {
                  return typeof arg === 'boolean';
                }
                exports3.isBoolean = isBoolean;
                function isNull(arg) {
                  return arg === null;
                }
                exports3.isNull = isNull;
                function isNullOrUndefined(arg) {
                  return arg == null;
                }
                exports3.isNullOrUndefined = isNullOrUndefined;
                function isNumber(arg) {
                  return typeof arg === 'number';
                }
                exports3.isNumber = isNumber;
                function isString(arg) {
                  return typeof arg === 'string';
                }
                exports3.isString = isString;
                function isSymbol(arg) {
                  return typeof arg === 'symbol';
                }
                exports3.isSymbol = isSymbol;
                function isUndefined(arg) {
                  return arg === void 0;
                }
                exports3.isUndefined = isUndefined;
                function isRegExp(re) {
                  return objectToString(re) === '[object RegExp]';
                }
                exports3.isRegExp = isRegExp;
                function isObject(arg) {
                  return typeof arg === 'object' && arg !== null;
                }
                exports3.isObject = isObject;
                function isDate(d) {
                  return objectToString(d) === '[object Date]';
                }
                exports3.isDate = isDate;
                function isError(e) {
                  return objectToString(e) === '[object Error]' || e instanceof Error;
                }
                exports3.isError = isError;
                function isFunction(arg) {
                  return typeof arg === 'function';
                }
                exports3.isFunction = isFunction;
                function isPrimitive(arg) {
                  return (
                    arg === null ||
                    typeof arg === 'boolean' ||
                    typeof arg === 'number' ||
                    typeof arg === 'string' ||
                    typeof arg === 'symbol' || // ES6 symbol
                    typeof arg === 'undefined'
                  );
                }
                exports3.isPrimitive = isPrimitive;
                exports3.isBuffer = Buffer.isBuffer;
                function objectToString(o) {
                  return Object.prototype.toString.call(o);
                }
              }).call(this, { isBuffer: require2('../../is-buffer/index.js') });
            },
            { '../../is-buffer/index.js': 9 }
          ],
          5: [
            function (require2, module3, exports3) {
              var objectCreate = Object.create || objectCreatePolyfill;
              var objectKeys = Object.keys || objectKeysPolyfill;
              var bind = Function.prototype.bind || functionBindPolyfill;
              function EventEmitter() {
                if (!this._events || !Object.prototype.hasOwnProperty.call(this, '_events')) {
                  this._events = objectCreate(null);
                  this._eventsCount = 0;
                }
                this._maxListeners = this._maxListeners || void 0;
              }
              module3.exports = EventEmitter;
              EventEmitter.EventEmitter = EventEmitter;
              EventEmitter.prototype._events = void 0;
              EventEmitter.prototype._maxListeners = void 0;
              var defaultMaxListeners = 10;
              var hasDefineProperty;
              try {
                var o = {};
                if (Object.defineProperty) Object.defineProperty(o, 'x', { value: 0 });
                hasDefineProperty = o.x === 0;
              } catch (err) {
                hasDefineProperty = false;
              }
              if (hasDefineProperty) {
                Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
                  enumerable: true,
                  get: function () {
                    return defaultMaxListeners;
                  },
                  set: function (arg) {
                    if (typeof arg !== 'number' || arg < 0 || arg !== arg)
                      throw new TypeError('"defaultMaxListeners" must be a positive number');
                    defaultMaxListeners = arg;
                  }
                });
              } else {
                EventEmitter.defaultMaxListeners = defaultMaxListeners;
              }
              EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
                if (typeof n !== 'number' || n < 0 || isNaN(n)) throw new TypeError('"n" argument must be a positive number');
                this._maxListeners = n;
                return this;
              };
              function $getMaxListeners(that) {
                if (that._maxListeners === void 0) return EventEmitter.defaultMaxListeners;
                return that._maxListeners;
              }
              EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
                return $getMaxListeners(this);
              };
              function emitNone(handler, isFn, self2) {
                if (isFn) handler.call(self2);
                else {
                  var len = handler.length;
                  var listeners = arrayClone(handler, len);
                  for (var i = 0; i < len; ++i) listeners[i].call(self2);
                }
              }
              function emitOne(handler, isFn, self2, arg1) {
                if (isFn) handler.call(self2, arg1);
                else {
                  var len = handler.length;
                  var listeners = arrayClone(handler, len);
                  for (var i = 0; i < len; ++i) listeners[i].call(self2, arg1);
                }
              }
              function emitTwo(handler, isFn, self2, arg1, arg2) {
                if (isFn) handler.call(self2, arg1, arg2);
                else {
                  var len = handler.length;
                  var listeners = arrayClone(handler, len);
                  for (var i = 0; i < len; ++i) listeners[i].call(self2, arg1, arg2);
                }
              }
              function emitThree(handler, isFn, self2, arg1, arg2, arg3) {
                if (isFn) handler.call(self2, arg1, arg2, arg3);
                else {
                  var len = handler.length;
                  var listeners = arrayClone(handler, len);
                  for (var i = 0; i < len; ++i) listeners[i].call(self2, arg1, arg2, arg3);
                }
              }
              function emitMany(handler, isFn, self2, args) {
                if (isFn) handler.apply(self2, args);
                else {
                  var len = handler.length;
                  var listeners = arrayClone(handler, len);
                  for (var i = 0; i < len; ++i) listeners[i].apply(self2, args);
                }
              }
              EventEmitter.prototype.emit = function emit(type) {
                var er, handler, len, args, i, events;
                var doError = type === 'error';
                events = this._events;
                if (events) doError = doError && events.error == null;
                else if (!doError) return false;
                if (doError) {
                  if (arguments.length > 1) er = arguments[1];
                  if (er instanceof Error) {
                    throw er;
                  } else {
                    var err = new Error('Unhandled "error" event. (' + er + ')');
                    err.context = er;
                    throw err;
                  }
                  return false;
                }
                handler = events[type];
                if (!handler) return false;
                var isFn = typeof handler === 'function';
                len = arguments.length;
                switch (len) {
                  case 1:
                    emitNone(handler, isFn, this);
                    break;
                  case 2:
                    emitOne(handler, isFn, this, arguments[1]);
                    break;
                  case 3:
                    emitTwo(handler, isFn, this, arguments[1], arguments[2]);
                    break;
                  case 4:
                    emitThree(handler, isFn, this, arguments[1], arguments[2], arguments[3]);
                    break;
                  default:
                    args = new Array(len - 1);
                    for (i = 1; i < len; i++) args[i - 1] = arguments[i];
                    emitMany(handler, isFn, this, args);
                }
                return true;
              };
              function _addListener(target, type, listener, prepend) {
                var m;
                var events;
                var existing;
                if (typeof listener !== 'function') throw new TypeError('"listener" argument must be a function');
                events = target._events;
                if (!events) {
                  events = target._events = objectCreate(null);
                  target._eventsCount = 0;
                } else {
                  if (events.newListener) {
                    target.emit('newListener', type, listener.listener ? listener.listener : listener);
                    events = target._events;
                  }
                  existing = events[type];
                }
                if (!existing) {
                  existing = events[type] = listener;
                  ++target._eventsCount;
                } else {
                  if (typeof existing === 'function') {
                    existing = events[type] = prepend ? [listener, existing] : [existing, listener];
                  } else {
                    if (prepend) {
                      existing.unshift(listener);
                    } else {
                      existing.push(listener);
                    }
                  }
                  if (!existing.warned) {
                    m = $getMaxListeners(target);
                    if (m && m > 0 && existing.length > m) {
                      existing.warned = true;
                      var w = new Error(
                        'Possible EventEmitter memory leak detected. ' +
                          existing.length +
                          ' "' +
                          String(type) +
                          '" listeners added. Use emitter.setMaxListeners() to increase limit.'
                      );
                      w.name = 'MaxListenersExceededWarning';
                      w.emitter = target;
                      w.type = type;
                      w.count = existing.length;
                      if (typeof console === 'object' && console.warn) {
                        console.warn('%s: %s', w.name, w.message);
                      }
                    }
                  }
                }
                return target;
              }
              EventEmitter.prototype.addListener = function addListener(type, listener) {
                return _addListener(this, type, listener, false);
              };
              EventEmitter.prototype.on = EventEmitter.prototype.addListener;
              EventEmitter.prototype.prependListener = function prependListener(type, listener) {
                return _addListener(this, type, listener, true);
              };
              function onceWrapper() {
                if (!this.fired) {
                  this.target.removeListener(this.type, this.wrapFn);
                  this.fired = true;
                  switch (arguments.length) {
                    case 0:
                      return this.listener.call(this.target);
                    case 1:
                      return this.listener.call(this.target, arguments[0]);
                    case 2:
                      return this.listener.call(this.target, arguments[0], arguments[1]);
                    case 3:
                      return this.listener.call(this.target, arguments[0], arguments[1], arguments[2]);
                    default:
                      var args = new Array(arguments.length);
                      for (var i = 0; i < args.length; ++i) args[i] = arguments[i];
                      this.listener.apply(this.target, args);
                  }
                }
              }
              function _onceWrap(target, type, listener) {
                var state = { fired: false, wrapFn: void 0, target, type, listener };
                var wrapped = bind.call(onceWrapper, state);
                wrapped.listener = listener;
                state.wrapFn = wrapped;
                return wrapped;
              }
              EventEmitter.prototype.once = function once(type, listener) {
                if (typeof listener !== 'function') throw new TypeError('"listener" argument must be a function');
                this.on(type, _onceWrap(this, type, listener));
                return this;
              };
              EventEmitter.prototype.prependOnceListener = function prependOnceListener(type, listener) {
                if (typeof listener !== 'function') throw new TypeError('"listener" argument must be a function');
                this.prependListener(type, _onceWrap(this, type, listener));
                return this;
              };
              EventEmitter.prototype.removeListener = function removeListener(type, listener) {
                var list, events, position, i, originalListener;
                if (typeof listener !== 'function') throw new TypeError('"listener" argument must be a function');
                events = this._events;
                if (!events) return this;
                list = events[type];
                if (!list) return this;
                if (list === listener || list.listener === listener) {
                  if (--this._eventsCount === 0) this._events = objectCreate(null);
                  else {
                    delete events[type];
                    if (events.removeListener) this.emit('removeListener', type, list.listener || listener);
                  }
                } else if (typeof list !== 'function') {
                  position = -1;
                  for (i = list.length - 1; i >= 0; i--) {
                    if (list[i] === listener || list[i].listener === listener) {
                      originalListener = list[i].listener;
                      position = i;
                      break;
                    }
                  }
                  if (position < 0) return this;
                  if (position === 0) list.shift();
                  else spliceOne(list, position);
                  if (list.length === 1) events[type] = list[0];
                  if (events.removeListener) this.emit('removeListener', type, originalListener || listener);
                }
                return this;
              };
              EventEmitter.prototype.removeAllListeners = function removeAllListeners(type) {
                var listeners, events, i;
                events = this._events;
                if (!events) return this;
                if (!events.removeListener) {
                  if (arguments.length === 0) {
                    this._events = objectCreate(null);
                    this._eventsCount = 0;
                  } else if (events[type]) {
                    if (--this._eventsCount === 0) this._events = objectCreate(null);
                    else delete events[type];
                  }
                  return this;
                }
                if (arguments.length === 0) {
                  var keys = objectKeys(events);
                  var key;
                  for (i = 0; i < keys.length; ++i) {
                    key = keys[i];
                    if (key === 'removeListener') continue;
                    this.removeAllListeners(key);
                  }
                  this.removeAllListeners('removeListener');
                  this._events = objectCreate(null);
                  this._eventsCount = 0;
                  return this;
                }
                listeners = events[type];
                if (typeof listeners === 'function') {
                  this.removeListener(type, listeners);
                } else if (listeners) {
                  for (i = listeners.length - 1; i >= 0; i--) {
                    this.removeListener(type, listeners[i]);
                  }
                }
                return this;
              };
              function _listeners(target, type, unwrap) {
                var events = target._events;
                if (!events) return [];
                var evlistener = events[type];
                if (!evlistener) return [];
                if (typeof evlistener === 'function') return unwrap ? [evlistener.listener || evlistener] : [evlistener];
                return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
              }
              EventEmitter.prototype.listeners = function listeners(type) {
                return _listeners(this, type, true);
              };
              EventEmitter.prototype.rawListeners = function rawListeners(type) {
                return _listeners(this, type, false);
              };
              EventEmitter.listenerCount = function (emitter, type) {
                if (typeof emitter.listenerCount === 'function') {
                  return emitter.listenerCount(type);
                } else {
                  return listenerCount.call(emitter, type);
                }
              };
              EventEmitter.prototype.listenerCount = listenerCount;
              function listenerCount(type) {
                var events = this._events;
                if (events) {
                  var evlistener = events[type];
                  if (typeof evlistener === 'function') {
                    return 1;
                  } else if (evlistener) {
                    return evlistener.length;
                  }
                }
                return 0;
              }
              EventEmitter.prototype.eventNames = function eventNames() {
                return this._eventsCount > 0 ? Reflect.ownKeys(this._events) : [];
              };
              function spliceOne(list, index) {
                for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) list[i] = list[k];
                list.pop();
              }
              function arrayClone(arr, n) {
                var copy = new Array(n);
                for (var i = 0; i < n; ++i) copy[i] = arr[i];
                return copy;
              }
              function unwrapListeners(arr) {
                var ret = new Array(arr.length);
                for (var i = 0; i < ret.length; ++i) {
                  ret[i] = arr[i].listener || arr[i];
                }
                return ret;
              }
              function objectCreatePolyfill(proto) {
                var F = function () {};
                F.prototype = proto;
                return new F();
              }
              function objectKeysPolyfill(obj) {
                var keys = [];
                for (var k in obj)
                  if (Object.prototype.hasOwnProperty.call(obj, k)) {
                    keys.push(k);
                  }
                return k;
              }
              function functionBindPolyfill(context) {
                var fn = this;
                return function () {
                  return fn.apply(context, arguments);
                };
              }
            },
            {}
          ],
          6: [
            function (require2, module3, exports3) {
              exports3.read = function (buffer, offset, isLE, mLen, nBytes) {
                var e, m;
                var eLen = nBytes * 8 - mLen - 1;
                var eMax = (1 << eLen) - 1;
                var eBias = eMax >> 1;
                var nBits = -7;
                var i = isLE ? nBytes - 1 : 0;
                var d = isLE ? -1 : 1;
                var s = buffer[offset + i];
                i += d;
                e = s & ((1 << -nBits) - 1);
                s >>= -nBits;
                nBits += eLen;
                for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}
                m = e & ((1 << -nBits) - 1);
                e >>= -nBits;
                nBits += mLen;
                for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}
                if (e === 0) {
                  e = 1 - eBias;
                } else if (e === eMax) {
                  return m ? NaN : (s ? -1 : 1) * Infinity;
                } else {
                  m = m + Math.pow(2, mLen);
                  e = e - eBias;
                }
                return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
              };
              exports3.write = function (buffer, value, offset, isLE, mLen, nBytes) {
                var e, m, c;
                var eLen = nBytes * 8 - mLen - 1;
                var eMax = (1 << eLen) - 1;
                var eBias = eMax >> 1;
                var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
                var i = isLE ? 0 : nBytes - 1;
                var d = isLE ? 1 : -1;
                var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0;
                value = Math.abs(value);
                if (isNaN(value) || value === Infinity) {
                  m = isNaN(value) ? 1 : 0;
                  e = eMax;
                } else {
                  e = Math.floor(Math.log(value) / Math.LN2);
                  if (value * (c = Math.pow(2, -e)) < 1) {
                    e--;
                    c *= 2;
                  }
                  if (e + eBias >= 1) {
                    value += rt / c;
                  } else {
                    value += rt * Math.pow(2, 1 - eBias);
                  }
                  if (value * c >= 2) {
                    e++;
                    c /= 2;
                  }
                  if (e + eBias >= eMax) {
                    m = 0;
                    e = eMax;
                  } else if (e + eBias >= 1) {
                    m = (value * c - 1) * Math.pow(2, mLen);
                    e = e + eBias;
                  } else {
                    m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
                    e = 0;
                  }
                }
                for (; mLen >= 8; buffer[offset + i] = m & 255, i += d, m /= 256, mLen -= 8) {}
                e = (e << mLen) | m;
                eLen += mLen;
                for (; eLen > 0; buffer[offset + i] = e & 255, i += d, e /= 256, eLen -= 8) {}
                buffer[offset + i - d] |= s * 128;
              };
            },
            {}
          ],
          7: [
            function (require2, module3, exports3) {
              (function (global2) {
                'use strict';
                var Mutation = global2.MutationObserver || global2.WebKitMutationObserver;
                var scheduleDrain;
                {
                  if (Mutation) {
                    var called = 0;
                    var observer = new Mutation(nextTick);
                    var element = global2.document.createTextNode('');
                    observer.observe(element, {
                      characterData: true
                    });
                    scheduleDrain = function () {
                      element.data = called = ++called % 2;
                    };
                  } else if (!global2.setImmediate && typeof global2.MessageChannel !== 'undefined') {
                    var channel = new global2.MessageChannel();
                    channel.port1.onmessage = nextTick;
                    scheduleDrain = function () {
                      channel.port2.postMessage(0);
                    };
                  } else if ('document' in global2 && 'onreadystatechange' in global2.document.createElement('script')) {
                    scheduleDrain = function () {
                      var scriptEl = global2.document.createElement('script');
                      scriptEl.onreadystatechange = function () {
                        nextTick();
                        scriptEl.onreadystatechange = null;
                        scriptEl.parentNode.removeChild(scriptEl);
                        scriptEl = null;
                      };
                      global2.document.documentElement.appendChild(scriptEl);
                    };
                  } else {
                    scheduleDrain = function () {
                      setTimeout(nextTick, 0);
                    };
                  }
                }
                var draining;
                var queue = [];
                function nextTick() {
                  draining = true;
                  var i, oldQueue;
                  var len = queue.length;
                  while (len) {
                    oldQueue = queue;
                    queue = [];
                    i = -1;
                    while (++i < len) {
                      oldQueue[i]();
                    }
                    len = queue.length;
                  }
                  draining = false;
                }
                module3.exports = immediate;
                function immediate(task) {
                  if (queue.push(task) === 1 && !draining) {
                    scheduleDrain();
                  }
                }
              }).call(
                this,
                typeof global !== 'undefined'
                  ? global
                  : typeof self !== 'undefined'
                    ? self
                    : typeof window !== 'undefined'
                      ? window
                      : {}
              );
            },
            {}
          ],
          8: [
            function (require2, module3, exports3) {
              if (typeof Object.create === 'function') {
                module3.exports = function inherits(ctor, superCtor) {
                  if (superCtor) {
                    ctor.super_ = superCtor;
                    ctor.prototype = Object.create(superCtor.prototype, {
                      constructor: {
                        value: ctor,
                        enumerable: false,
                        writable: true,
                        configurable: true
                      }
                    });
                  }
                };
              } else {
                module3.exports = function inherits(ctor, superCtor) {
                  if (superCtor) {
                    ctor.super_ = superCtor;
                    var TempCtor = function () {};
                    TempCtor.prototype = superCtor.prototype;
                    ctor.prototype = new TempCtor();
                    ctor.prototype.constructor = ctor;
                  }
                };
              }
            },
            {}
          ],
          9: [
            function (require2, module3, exports3) {
              module3.exports = function (obj) {
                return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer);
              };
              function isBuffer(obj) {
                return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj);
              }
              function isSlowBuffer(obj) {
                return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0));
              }
            },
            {}
          ],
          10: [
            function (require2, module3, exports3) {
              var toString = {}.toString;
              module3.exports =
                Array.isArray ||
                function (arr) {
                  return toString.call(arr) == '[object Array]';
                };
            },
            {}
          ],
          11: [
            function (require2, module3, exports3) {
              'use strict';
              var utils = require2('./utils');
              var support = require2('./support');
              var _keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
              exports3.encode = function (input) {
                var output = [];
                var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
                var i = 0,
                  len = input.length,
                  remainingBytes = len;
                var isArray = utils.getTypeOf(input) !== 'string';
                while (i < input.length) {
                  remainingBytes = len - i;
                  if (!isArray) {
                    chr1 = input.charCodeAt(i++);
                    chr2 = i < len ? input.charCodeAt(i++) : 0;
                    chr3 = i < len ? input.charCodeAt(i++) : 0;
                  } else {
                    chr1 = input[i++];
                    chr2 = i < len ? input[i++] : 0;
                    chr3 = i < len ? input[i++] : 0;
                  }
                  enc1 = chr1 >> 2;
                  enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
                  enc3 = remainingBytes > 1 ? ((chr2 & 15) << 2) | (chr3 >> 6) : 64;
                  enc4 = remainingBytes > 2 ? chr3 & 63 : 64;
                  output.push(_keyStr.charAt(enc1) + _keyStr.charAt(enc2) + _keyStr.charAt(enc3) + _keyStr.charAt(enc4));
                }
                return output.join('');
              };
              exports3.decode = function (input) {
                var chr1, chr2, chr3;
                var enc1, enc2, enc3, enc4;
                var i = 0,
                  resultIndex = 0;
                var dataUrlPrefix = 'data:';
                if (input.substr(0, dataUrlPrefix.length) === dataUrlPrefix) {
                  throw new Error('Invalid base64 input, it looks like a data url.');
                }
                input = input.replace(/[^A-Za-z0-9\+\/\=]/g, '');
                var totalLength = (input.length * 3) / 4;
                if (input.charAt(input.length - 1) === _keyStr.charAt(64)) {
                  totalLength--;
                }
                if (input.charAt(input.length - 2) === _keyStr.charAt(64)) {
                  totalLength--;
                }
                if (totalLength % 1 !== 0) {
                  throw new Error('Invalid base64 input, bad content length.');
                }
                var output;
                if (support.uint8array) {
                  output = new Uint8Array(totalLength | 0);
                } else {
                  output = new Array(totalLength | 0);
                }
                while (i < input.length) {
                  enc1 = _keyStr.indexOf(input.charAt(i++));
                  enc2 = _keyStr.indexOf(input.charAt(i++));
                  enc3 = _keyStr.indexOf(input.charAt(i++));
                  enc4 = _keyStr.indexOf(input.charAt(i++));
                  chr1 = (enc1 << 2) | (enc2 >> 4);
                  chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
                  chr3 = ((enc3 & 3) << 6) | enc4;
                  output[resultIndex++] = chr1;
                  if (enc3 !== 64) {
                    output[resultIndex++] = chr2;
                  }
                  if (enc4 !== 64) {
                    output[resultIndex++] = chr3;
                  }
                }
                return output;
              };
            },
            { './support': 40, './utils': 42 }
          ],
          12: [
            function (require2, module3, exports3) {
              'use strict';
              var external = require2('./external');
              var DataWorker = require2('./stream/DataWorker');
              var DataLengthProbe = require2('./stream/DataLengthProbe');
              var Crc32Probe = require2('./stream/Crc32Probe');
              var DataLengthProbe = require2('./stream/DataLengthProbe');
              function CompressedObject(compressedSize, uncompressedSize, crc32, compression, data) {
                this.compressedSize = compressedSize;
                this.uncompressedSize = uncompressedSize;
                this.crc32 = crc32;
                this.compression = compression;
                this.compressedContent = data;
              }
              CompressedObject.prototype = {
                /**
                 * Create a worker to get the uncompressed content.
                 * @return {GenericWorker} the worker.
                 */
                getContentWorker: function () {
                  var worker = new DataWorker(external.Promise.resolve(this.compressedContent))
                    .pipe(this.compression.uncompressWorker())
                    .pipe(new DataLengthProbe('data_length'));
                  var that = this;
                  worker.on('end', function () {
                    if (this.streamInfo['data_length'] !== that.uncompressedSize) {
                      throw new Error('Bug : uncompressed data size mismatch');
                    }
                  });
                  return worker;
                },
                /**
                 * Create a worker to get the compressed content.
                 * @return {GenericWorker} the worker.
                 */
                getCompressedWorker: function () {
                  return new DataWorker(external.Promise.resolve(this.compressedContent))
                    .withStreamInfo('compressedSize', this.compressedSize)
                    .withStreamInfo('uncompressedSize', this.uncompressedSize)
                    .withStreamInfo('crc32', this.crc32)
                    .withStreamInfo('compression', this.compression);
                }
              };
              CompressedObject.createWorkerFrom = function (uncompressedWorker, compression, compressionOptions) {
                return uncompressedWorker
                  .pipe(new Crc32Probe())
                  .pipe(new DataLengthProbe('uncompressedSize'))
                  .pipe(compression.compressWorker(compressionOptions))
                  .pipe(new DataLengthProbe('compressedSize'))
                  .withStreamInfo('compression', compression);
              };
              module3.exports = CompressedObject;
            },
            { './external': 16, './stream/Crc32Probe': 35, './stream/DataLengthProbe': 36, './stream/DataWorker': 37 }
          ],
          13: [
            function (require2, module3, exports3) {
              'use strict';
              var GenericWorker = require2('./stream/GenericWorker');
              exports3.STORE = {
                magic: '\0\0',
                compressWorker: function (compressionOptions) {
                  return new GenericWorker('STORE compression');
                },
                uncompressWorker: function () {
                  return new GenericWorker('STORE decompression');
                }
              };
              exports3.DEFLATE = require2('./flate');
            },
            { './flate': 17, './stream/GenericWorker': 38 }
          ],
          14: [
            function (require2, module3, exports3) {
              'use strict';
              var utils = require2('./utils');
              function makeTable() {
                var c,
                  table = [];
                for (var n = 0; n < 256; n++) {
                  c = n;
                  for (var k = 0; k < 8; k++) {
                    c = c & 1 ? 3988292384 ^ (c >>> 1) : c >>> 1;
                  }
                  table[n] = c;
                }
                return table;
              }
              var crcTable = makeTable();
              function crc32(crc, buf, len, pos) {
                var t = crcTable,
                  end = pos + len;
                crc = crc ^ -1;
                for (var i = pos; i < end; i++) {
                  crc = (crc >>> 8) ^ t[(crc ^ buf[i]) & 255];
                }
                return crc ^ -1;
              }
              function crc32str(crc, str, len, pos) {
                var t = crcTable,
                  end = pos + len;
                crc = crc ^ -1;
                for (var i = pos; i < end; i++) {
                  crc = (crc >>> 8) ^ t[(crc ^ str.charCodeAt(i)) & 255];
                }
                return crc ^ -1;
              }
              module3.exports = function crc32wrapper(input, crc) {
                if (typeof input === 'undefined' || !input.length) {
                  return 0;
                }
                var isArray = utils.getTypeOf(input) !== 'string';
                if (isArray) {
                  return crc32(crc | 0, input, input.length, 0);
                } else {
                  return crc32str(crc | 0, input, input.length, 0);
                }
              };
            },
            { './utils': 42 }
          ],
          15: [
            function (require2, module3, exports3) {
              'use strict';
              exports3.base64 = false;
              exports3.binary = false;
              exports3.dir = false;
              exports3.createFolders = true;
              exports3.date = null;
              exports3.compression = null;
              exports3.compressionOptions = null;
              exports3.comment = null;
              exports3.unixPermissions = null;
              exports3.dosPermissions = null;
            },
            {}
          ],
          16: [
            function (require2, module3, exports3) {
              'use strict';
              var ES6Promise = null;
              if (typeof Promise !== 'undefined') {
                ES6Promise = Promise;
              } else {
                ES6Promise = require2('lie');
              }
              module3.exports = {
                Promise: ES6Promise
              };
            },
            { lie: 46 }
          ],
          17: [
            function (require2, module3, exports3) {
              'use strict';
              var USE_TYPEDARRAY =
                typeof Uint8Array !== 'undefined' && typeof Uint16Array !== 'undefined' && typeof Uint32Array !== 'undefined';
              var pako = require2('pako');
              var utils = require2('./utils');
              var GenericWorker = require2('./stream/GenericWorker');
              var ARRAY_TYPE = USE_TYPEDARRAY ? 'uint8array' : 'array';
              exports3.magic = '\b\0';
              function FlateWorker(action, options) {
                GenericWorker.call(this, 'FlateWorker/' + action);
                this._pako = null;
                this._pakoAction = action;
                this._pakoOptions = options;
                this.meta = {};
              }
              utils.inherits(FlateWorker, GenericWorker);
              FlateWorker.prototype.processChunk = function (chunk) {
                this.meta = chunk.meta;
                if (this._pako === null) {
                  this._createPako();
                }
                this._pako.push(utils.transformTo(ARRAY_TYPE, chunk.data), false);
              };
              FlateWorker.prototype.flush = function () {
                GenericWorker.prototype.flush.call(this);
                if (this._pako === null) {
                  this._createPako();
                }
                this._pako.push([], true);
              };
              FlateWorker.prototype.cleanUp = function () {
                GenericWorker.prototype.cleanUp.call(this);
                this._pako = null;
              };
              FlateWorker.prototype._createPako = function () {
                this._pako = new pako[this._pakoAction]({
                  raw: true,
                  level: this._pakoOptions.level || -1
                  // default compression
                });
                var self2 = this;
                this._pako.onData = function (data) {
                  self2.push({
                    data,
                    meta: self2.meta
                  });
                };
              };
              exports3.compressWorker = function (compressionOptions) {
                return new FlateWorker('Deflate', compressionOptions);
              };
              exports3.uncompressWorker = function () {
                return new FlateWorker('Inflate', {});
              };
            },
            { './stream/GenericWorker': 38, './utils': 42, pako: 47 }
          ],
          18: [
            function (require2, module3, exports3) {
              'use strict';
              var utils = require2('../utils');
              var GenericWorker = require2('../stream/GenericWorker');
              var utf8 = require2('../utf8');
              var crc32 = require2('../crc32');
              var signature = require2('../signature');
              var decToHex = function (dec, bytes) {
                var hex = '',
                  i;
                for (i = 0; i < bytes; i++) {
                  hex += String.fromCharCode(dec & 255);
                  dec = dec >>> 8;
                }
                return hex;
              };
              var generateUnixExternalFileAttr = function (unixPermissions, isDir) {
                var result = unixPermissions;
                if (!unixPermissions) {
                  result = isDir ? 16893 : 33204;
                }
                return (result & 65535) << 16;
              };
              var generateDosExternalFileAttr = function (dosPermissions, isDir) {
                return (dosPermissions || 0) & 63;
              };
              var generateZipParts = function (streamInfo, streamedContent, streamingEnded, offset, platform, encodeFileName) {
                var file = streamInfo['file'],
                  compression = streamInfo['compression'],
                  useCustomEncoding = encodeFileName !== utf8.utf8encode,
                  encodedFileName = utils.transformTo('string', encodeFileName(file.name)),
                  utfEncodedFileName = utils.transformTo('string', utf8.utf8encode(file.name)),
                  comment = file.comment,
                  encodedComment = utils.transformTo('string', encodeFileName(comment)),
                  utfEncodedComment = utils.transformTo('string', utf8.utf8encode(comment)),
                  useUTF8ForFileName = utfEncodedFileName.length !== file.name.length,
                  useUTF8ForComment = utfEncodedComment.length !== comment.length,
                  dosTime,
                  dosDate,
                  extraFields = '',
                  unicodePathExtraField = '',
                  unicodeCommentExtraField = '',
                  dir = file.dir,
                  date = file.date;
                var dataInfo = {
                  crc32: 0,
                  compressedSize: 0,
                  uncompressedSize: 0
                };
                if (!streamedContent || streamingEnded) {
                  dataInfo.crc32 = streamInfo['crc32'];
                  dataInfo.compressedSize = streamInfo['compressedSize'];
                  dataInfo.uncompressedSize = streamInfo['uncompressedSize'];
                }
                var bitflag = 0;
                if (streamedContent) {
                  bitflag |= 8;
                }
                if (!useCustomEncoding && (useUTF8ForFileName || useUTF8ForComment)) {
                  bitflag |= 2048;
                }
                var extFileAttr = 0;
                var versionMadeBy = 0;
                if (dir) {
                  extFileAttr |= 16;
                }
                if (platform === 'UNIX') {
                  versionMadeBy = 798;
                  extFileAttr |= generateUnixExternalFileAttr(file.unixPermissions, dir);
                } else {
                  versionMadeBy = 20;
                  extFileAttr |= generateDosExternalFileAttr(file.dosPermissions, dir);
                }
                dosTime = date.getUTCHours();
                dosTime = dosTime << 6;
                dosTime = dosTime | date.getUTCMinutes();
                dosTime = dosTime << 5;
                dosTime = dosTime | (date.getUTCSeconds() / 2);
                dosDate = date.getUTCFullYear() - 1980;
                dosDate = dosDate << 4;
                dosDate = dosDate | (date.getUTCMonth() + 1);
                dosDate = dosDate << 5;
                dosDate = dosDate | date.getUTCDate();
                if (useUTF8ForFileName) {
                  unicodePathExtraField = // Version
                    decToHex(1, 1) + // NameCRC32
                    decToHex(crc32(encodedFileName), 4) + // UnicodeName
                    utfEncodedFileName;
                  extraFields += // Info-ZIP Unicode Path Extra Field
                    'up' + // size
                    decToHex(unicodePathExtraField.length, 2) + // content
                    unicodePathExtraField;
                }
                if (useUTF8ForComment) {
                  unicodeCommentExtraField = // Version
                    decToHex(1, 1) + // CommentCRC32
                    decToHex(crc32(encodedComment), 4) + // UnicodeName
                    utfEncodedComment;
                  extraFields += // Info-ZIP Unicode Path Extra Field
                    'uc' + // size
                    decToHex(unicodeCommentExtraField.length, 2) + // content
                    unicodeCommentExtraField;
                }
                var header = '';
                header += '\n\0';
                header += decToHex(bitflag, 2);
                header += compression.magic;
                header += decToHex(dosTime, 2);
                header += decToHex(dosDate, 2);
                header += decToHex(dataInfo.crc32, 4);
                header += decToHex(dataInfo.compressedSize, 4);
                header += decToHex(dataInfo.uncompressedSize, 4);
                header += decToHex(encodedFileName.length, 2);
                header += decToHex(extraFields.length, 2);
                var fileRecord = signature.LOCAL_FILE_HEADER + header + encodedFileName + extraFields;
                var dirRecord =
                  signature.CENTRAL_FILE_HEADER + // version made by (00: DOS)
                  decToHex(versionMadeBy, 2) + // file header (common to file and central directory)
                  header + // file comment length
                  decToHex(encodedComment.length, 2) + // disk number start
                  '\0\0\0\0' + // external file attributes
                  decToHex(extFileAttr, 4) + // relative offset of local header
                  decToHex(offset, 4) + // file name
                  encodedFileName + // extra field
                  extraFields + // file comment
                  encodedComment;
                return {
                  fileRecord,
                  dirRecord
                };
              };
              var generateCentralDirectoryEnd = function (
                entriesCount,
                centralDirLength,
                localDirLength,
                comment,
                encodeFileName
              ) {
                var dirEnd = '';
                var encodedComment = utils.transformTo('string', encodeFileName(comment));
                dirEnd =
                  signature.CENTRAL_DIRECTORY_END + // number of this disk
                  '\0\0\0\0' + // total number of entries in the central directory on this disk
                  decToHex(entriesCount, 2) + // total number of entries in the central directory
                  decToHex(entriesCount, 2) + // size of the central directory   4 bytes
                  decToHex(centralDirLength, 4) + // offset of start of central directory with respect to the starting disk number
                  decToHex(localDirLength, 4) + // .ZIP file comment length
                  decToHex(encodedComment.length, 2) + // .ZIP file comment
                  encodedComment;
                return dirEnd;
              };
              var generateDataDescriptors = function (streamInfo) {
                var descriptor = '';
                descriptor =
                  signature.DATA_DESCRIPTOR + // crc-32                          4 bytes
                  decToHex(streamInfo['crc32'], 4) + // compressed size                 4 bytes
                  decToHex(streamInfo['compressedSize'], 4) + // uncompressed size               4 bytes
                  decToHex(streamInfo['uncompressedSize'], 4);
                return descriptor;
              };
              function ZipFileWorker(streamFiles, comment, platform, encodeFileName) {
                GenericWorker.call(this, 'ZipFileWorker');
                this.bytesWritten = 0;
                this.zipComment = comment;
                this.zipPlatform = platform;
                this.encodeFileName = encodeFileName;
                this.streamFiles = streamFiles;
                this.accumulate = false;
                this.contentBuffer = [];
                this.dirRecords = [];
                this.currentSourceOffset = 0;
                this.entriesCount = 0;
                this.currentFile = null;
                this._sources = [];
              }
              utils.inherits(ZipFileWorker, GenericWorker);
              ZipFileWorker.prototype.push = function (chunk) {
                var currentFilePercent = chunk.meta.percent || 0;
                var entriesCount = this.entriesCount;
                var remainingFiles = this._sources.length;
                if (this.accumulate) {
                  this.contentBuffer.push(chunk);
                } else {
                  this.bytesWritten += chunk.data.length;
                  GenericWorker.prototype.push.call(this, {
                    data: chunk.data,
                    meta: {
                      currentFile: this.currentFile,
                      percent: entriesCount
                        ? (currentFilePercent + 100 * (entriesCount - remainingFiles - 1)) / entriesCount
                        : 100
                    }
                  });
                }
              };
              ZipFileWorker.prototype.openedSource = function (streamInfo) {
                this.currentSourceOffset = this.bytesWritten;
                this.currentFile = streamInfo['file'].name;
                var streamedContent = this.streamFiles && !streamInfo['file'].dir;
                if (streamedContent) {
                  var record = generateZipParts(
                    streamInfo,
                    streamedContent,
                    false,
                    this.currentSourceOffset,
                    this.zipPlatform,
                    this.encodeFileName
                  );
                  this.push({
                    data: record.fileRecord,
                    meta: { percent: 0 }
                  });
                } else {
                  this.accumulate = true;
                }
              };
              ZipFileWorker.prototype.closedSource = function (streamInfo) {
                this.accumulate = false;
                var streamedContent = this.streamFiles && !streamInfo['file'].dir;
                var record = generateZipParts(
                  streamInfo,
                  streamedContent,
                  true,
                  this.currentSourceOffset,
                  this.zipPlatform,
                  this.encodeFileName
                );
                this.dirRecords.push(record.dirRecord);
                if (streamedContent) {
                  this.push({
                    data: generateDataDescriptors(streamInfo),
                    meta: { percent: 100 }
                  });
                } else {
                  this.push({
                    data: record.fileRecord,
                    meta: { percent: 0 }
                  });
                  while (this.contentBuffer.length) {
                    this.push(this.contentBuffer.shift());
                  }
                }
                this.currentFile = null;
              };
              ZipFileWorker.prototype.flush = function () {
                var localDirLength = this.bytesWritten;
                for (var i = 0; i < this.dirRecords.length; i++) {
                  this.push({
                    data: this.dirRecords[i],
                    meta: { percent: 100 }
                  });
                }
                var centralDirLength = this.bytesWritten - localDirLength;
                var dirEnd = generateCentralDirectoryEnd(
                  this.dirRecords.length,
                  centralDirLength,
                  localDirLength,
                  this.zipComment,
                  this.encodeFileName
                );
                this.push({
                  data: dirEnd,
                  meta: { percent: 100 }
                });
              };
              ZipFileWorker.prototype.prepareNextSource = function () {
                this.previous = this._sources.shift();
                this.openedSource(this.previous.streamInfo);
                if (this.isPaused) {
                  this.previous.pause();
                } else {
                  this.previous.resume();
                }
              };
              ZipFileWorker.prototype.registerPrevious = function (previous) {
                this._sources.push(previous);
                var self2 = this;
                previous.on('data', function (chunk) {
                  self2.processChunk(chunk);
                });
                previous.on('end', function () {
                  self2.closedSource(self2.previous.streamInfo);
                  if (self2._sources.length) {
                    self2.prepareNextSource();
                  } else {
                    self2.end();
                  }
                });
                previous.on('error', function (e) {
                  self2.error(e);
                });
                return this;
              };
              ZipFileWorker.prototype.resume = function () {
                if (!GenericWorker.prototype.resume.call(this)) {
                  return false;
                }
                if (!this.previous && this._sources.length) {
                  this.prepareNextSource();
                  return true;
                }
                if (!this.previous && !this._sources.length && !this.generatedError) {
                  this.end();
                  return true;
                }
              };
              ZipFileWorker.prototype.error = function (e) {
                var sources = this._sources;
                if (!GenericWorker.prototype.error.call(this, e)) {
                  return false;
                }
                for (var i = 0; i < sources.length; i++) {
                  try {
                    sources[i].error(e);
                  } catch (e2) {}
                }
                return true;
              };
              ZipFileWorker.prototype.lock = function () {
                GenericWorker.prototype.lock.call(this);
                var sources = this._sources;
                for (var i = 0; i < sources.length; i++) {
                  sources[i].lock();
                }
              };
              module3.exports = ZipFileWorker;
            },
            { '../crc32': 14, '../signature': 33, '../stream/GenericWorker': 38, '../utf8': 41, '../utils': 42 }
          ],
          19: [
            function (require2, module3, exports3) {
              'use strict';
              var compressions = require2('../compressions');
              var ZipFileWorker = require2('./ZipFileWorker');
              var getCompression = function (fileCompression, zipCompression) {
                var compressionName = fileCompression || zipCompression;
                var compression = compressions[compressionName];
                if (!compression) {
                  throw new Error(compressionName + ' is not a valid compression method !');
                }
                return compression;
              };
              exports3.generateWorker = function (zip, options, comment) {
                var zipFileWorker = new ZipFileWorker(options.streamFiles, comment, options.platform, options.encodeFileName);
                var entriesCount = 0;
                try {
                  zip.forEach(function (relativePath, file) {
                    entriesCount++;
                    var compression = getCompression(file.options.compression, options.compression);
                    var compressionOptions = file.options.compressionOptions || options.compressionOptions || {};
                    var dir = file.dir,
                      date = file.date;
                    file
                      ._compressWorker(compression, compressionOptions)
                      .withStreamInfo('file', {
                        name: relativePath,
                        dir,
                        date,
                        comment: file.comment || '',
                        unixPermissions: file.unixPermissions,
                        dosPermissions: file.dosPermissions
                      })
                      .pipe(zipFileWorker);
                  });
                  zipFileWorker.entriesCount = entriesCount;
                } catch (e) {
                  zipFileWorker.error(e);
                }
                return zipFileWorker;
              };
            },
            { '../compressions': 13, './ZipFileWorker': 18 }
          ],
          20: [
            function (require2, module3, exports3) {
              'use strict';
              function JSZip() {
                if (!(this instanceof JSZip)) {
                  return new JSZip();
                }
                if (arguments.length) {
                  throw new Error(
                    'The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.'
                  );
                }
                this.files = {};
                this.comment = null;
                this.root = '';
                this.clone = function () {
                  var newObj = new JSZip();
                  for (var i in this) {
                    if (typeof this[i] !== 'function') {
                      newObj[i] = this[i];
                    }
                  }
                  return newObj;
                };
              }
              JSZip.prototype = require2('./object');
              JSZip.prototype.loadAsync = require2('./load');
              JSZip.support = require2('./support');
              JSZip.defaults = require2('./defaults');
              JSZip.version = '3.5.0';
              JSZip.loadAsync = function (content, options) {
                return new JSZip().loadAsync(content, options);
              };
              JSZip.external = require2('./external');
              module3.exports = JSZip;
            },
            { './defaults': 15, './external': 16, './load': 21, './object': 25, './support': 40 }
          ],
          21: [
            function (require2, module3, exports3) {
              'use strict';
              var utils = require2('./utils');
              var external = require2('./external');
              var utf8 = require2('./utf8');
              var utils = require2('./utils');
              var ZipEntries = require2('./zipEntries');
              var Crc32Probe = require2('./stream/Crc32Probe');
              var nodejsUtils = require2('./nodejsUtils');
              function checkEntryCRC32(zipEntry) {
                return new external.Promise(function (resolve, reject) {
                  var worker = zipEntry.decompressed.getContentWorker().pipe(new Crc32Probe());
                  worker
                    .on('error', function (e) {
                      reject(e);
                    })
                    .on('end', function () {
                      if (worker.streamInfo.crc32 !== zipEntry.decompressed.crc32) {
                        reject(new Error('Corrupted zip : CRC32 mismatch'));
                      } else {
                        resolve();
                      }
                    })
                    .resume();
                });
              }
              module3.exports = function (data, options) {
                var zip = this;
                options = utils.extend(options || {}, {
                  base64: false,
                  checkCRC32: false,
                  optimizedBinaryString: false,
                  createFolders: false,
                  decodeFileName: utf8.utf8decode
                });
                if (nodejsUtils.isNode && nodejsUtils.isStream(data)) {
                  return external.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file."));
                }
                return utils
                  .prepareContent('the loaded zip file', data, true, options.optimizedBinaryString, options.base64)
                  .then(function (data2) {
                    var zipEntries = new ZipEntries(options);
                    zipEntries.load(data2);
                    return zipEntries;
                  })
                  .then(function checkCRC32(zipEntries) {
                    var promises = [external.Promise.resolve(zipEntries)];
                    var files = zipEntries.files;
                    if (options.checkCRC32) {
                      for (var i = 0; i < files.length; i++) {
                        promises.push(checkEntryCRC32(files[i]));
                      }
                    }
                    return external.Promise.all(promises);
                  })
                  .then(function addFiles(results) {
                    var zipEntries = results.shift();
                    var files = zipEntries.files;
                    for (var i = 0; i < files.length; i++) {
                      var input = files[i];
                      zip.file(input.fileNameStr, input.decompressed, {
                        binary: true,
                        optimizedBinaryString: true,
                        date: input.date,
                        dir: input.dir,
                        comment: input.fileCommentStr.length ? input.fileCommentStr : null,
                        unixPermissions: input.unixPermissions,
                        dosPermissions: input.dosPermissions,
                        createFolders: options.createFolders
                      });
                    }
                    if (zipEntries.zipComment.length) {
                      zip.comment = zipEntries.zipComment;
                    }
                    return zip;
                  });
              };
            },
            { './external': 16, './nodejsUtils': 22, './stream/Crc32Probe': 35, './utf8': 41, './utils': 42, './zipEntries': 43 }
          ],
          22: [
            function (require2, module3, exports3) {
              (function (Buffer) {
                'use strict';
                module3.exports = {
                  /**
                   * True if this is running in Nodejs, will be undefined in a browser.
                   * In a browser, browserify won't include this file and the whole module
                   * will be resolved an empty object.
                   */
                  isNode: typeof Buffer !== 'undefined',
                  /**
                   * Create a new nodejs Buffer from an existing content.
                   * @param {Object} data the data to pass to the constructor.
                   * @param {String} encoding the encoding to use.
                   * @return {Buffer} a new Buffer.
                   */
                  newBufferFrom: function (data, encoding) {
                    if (Buffer.from && Buffer.from !== Uint8Array.from) {
                      return Buffer.from(data, encoding);
                    } else {
                      if (typeof data === 'number') {
                        throw new Error('The "data" argument must not be a number');
                      }
                      return new Buffer(data, encoding);
                    }
                  },
                  /**
                   * Create a new nodejs Buffer with the specified size.
                   * @param {Integer} size the size of the buffer.
                   * @return {Buffer} a new Buffer.
                   */
                  allocBuffer: function (size) {
                    if (Buffer.alloc) {
                      return Buffer.alloc(size);
                    } else {
                      var buf = new Buffer(size);
                      buf.fill(0);
                      return buf;
                    }
                  },
                  /**
                   * Find out if an object is a Buffer.
                   * @param {Object} b the object to test.
                   * @return {Boolean} true if the object is a Buffer, false otherwise.
                   */
                  isBuffer: function (b) {
                    return Buffer.isBuffer(b);
                  },
                  isStream: function (obj) {
                    return (
                      obj && typeof obj.on === 'function' && typeof obj.pause === 'function' && typeof obj.resume === 'function'
                    );
                  }
                };
              }).call(this, require2('buffer').Buffer);
            },
            { buffer: 3 }
          ],
          23: [
            function (require2, module3, exports3) {
              'use strict';
              var utils = require2('../utils');
              var GenericWorker = require2('../stream/GenericWorker');
              function NodejsStreamInputAdapter(filename, stream) {
                GenericWorker.call(this, 'Nodejs stream input adapter for ' + filename);
                this._upstreamEnded = false;
                this._bindStream(stream);
              }
              utils.inherits(NodejsStreamInputAdapter, GenericWorker);
              NodejsStreamInputAdapter.prototype._bindStream = function (stream) {
                var self2 = this;
                this._stream = stream;
                stream.pause();
                stream
                  .on('data', function (chunk) {
                    self2.push({
                      data: chunk,
                      meta: {
                        percent: 0
                      }
                    });
                  })
                  .on('error', function (e) {
                    if (self2.isPaused) {
                      this.generatedError = e;
                    } else {
                      self2.error(e);
                    }
                  })
                  .on('end', function () {
                    if (self2.isPaused) {
                      self2._upstreamEnded = true;
                    } else {
                      self2.end();
                    }
                  });
              };
              NodejsStreamInputAdapter.prototype.pause = function () {
                if (!GenericWorker.prototype.pause.call(this)) {
                  return false;
                }
                this._stream.pause();
                return true;
              };
              NodejsStreamInputAdapter.prototype.resume = function () {
                if (!GenericWorker.prototype.resume.call(this)) {
                  return false;
                }
                if (this._upstreamEnded) {
                  this.end();
                } else {
                  this._stream.resume();
                }
                return true;
              };
              module3.exports = NodejsStreamInputAdapter;
            },
            { '../stream/GenericWorker': 38, '../utils': 42 }
          ],
          24: [
            function (require2, module3, exports3) {
              'use strict';
              var Readable = require2('readable-stream').Readable;
              var utils = require2('../utils');
              utils.inherits(NodejsStreamOutputAdapter, Readable);
              function NodejsStreamOutputAdapter(helper, options, updateCb) {
                Readable.call(this, options);
                this._helper = helper;
                var self2 = this;
                helper
                  .on('data', function (data, meta) {
                    if (!self2.push(data)) {
                      self2._helper.pause();
                    }
                    if (updateCb) {
                      updateCb(meta);
                    }
                  })
                  .on('error', function (e) {
                    self2.emit('error', e);
                  })
                  .on('end', function () {
                    self2.push(null);
                  });
              }
              NodejsStreamOutputAdapter.prototype._read = function () {
                this._helper.resume();
              };
              module3.exports = NodejsStreamOutputAdapter;
            },
            { '../utils': 42, 'readable-stream': 26 }
          ],
          25: [
            function (require2, module3, exports3) {
              'use strict';
              var utf8 = require2('./utf8');
              var utils = require2('./utils');
              var GenericWorker = require2('./stream/GenericWorker');
              var StreamHelper = require2('./stream/StreamHelper');
              var defaults = require2('./defaults');
              var CompressedObject = require2('./compressedObject');
              var ZipObject = require2('./zipObject');
              var generate = require2('./generate');
              var nodejsUtils = require2('./nodejsUtils');
              var NodejsStreamInputAdapter = require2('./nodejs/NodejsStreamInputAdapter');
              var fileAdd = function (name, data, originalOptions) {
                var dataType = utils.getTypeOf(data),
                  parent;
                var o = utils.extend(originalOptions || {}, defaults);
                o.date = o.date || /* @__PURE__ */ new Date();
                if (o.compression !== null) {
                  o.compression = o.compression.toUpperCase();
                }
                if (typeof o.unixPermissions === 'string') {
                  o.unixPermissions = parseInt(o.unixPermissions, 8);
                }
                if (o.unixPermissions && o.unixPermissions & 16384) {
                  o.dir = true;
                }
                if (o.dosPermissions && o.dosPermissions & 16) {
                  o.dir = true;
                }
                if (o.dir) {
                  name = forceTrailingSlash(name);
                }
                if (o.createFolders && (parent = parentFolder(name))) {
                  folderAdd.call(this, parent, true);
                }
                var isUnicodeString = dataType === 'string' && o.binary === false && o.base64 === false;
                if (!originalOptions || typeof originalOptions.binary === 'undefined') {
                  o.binary = !isUnicodeString;
                }
                var isCompressedEmpty = data instanceof CompressedObject && data.uncompressedSize === 0;
                if (isCompressedEmpty || o.dir || !data || data.length === 0) {
                  o.base64 = false;
                  o.binary = true;
                  data = '';
                  o.compression = 'STORE';
                  dataType = 'string';
                }
                var zipObjectContent = null;
                if (data instanceof CompressedObject || data instanceof GenericWorker) {
                  zipObjectContent = data;
                } else if (nodejsUtils.isNode && nodejsUtils.isStream(data)) {
                  zipObjectContent = new NodejsStreamInputAdapter(name, data);
                } else {
                  zipObjectContent = utils.prepareContent(name, data, o.binary, o.optimizedBinaryString, o.base64);
                }
                var object = new ZipObject(name, zipObjectContent, o);
                this.files[name] = object;
              };
              var parentFolder = function (path) {
                if (path.slice(-1) === '/') {
                  path = path.substring(0, path.length - 1);
                }
                var lastSlash = path.lastIndexOf('/');
                return lastSlash > 0 ? path.substring(0, lastSlash) : '';
              };
              var forceTrailingSlash = function (path) {
                if (path.slice(-1) !== '/') {
                  path += '/';
                }
                return path;
              };
              var folderAdd = function (name, createFolders) {
                createFolders = typeof createFolders !== 'undefined' ? createFolders : defaults.createFolders;
                name = forceTrailingSlash(name);
                if (!this.files[name]) {
                  fileAdd.call(this, name, null, {
                    dir: true,
                    createFolders
                  });
                }
                return this.files[name];
              };
              function isRegExp(object) {
                return Object.prototype.toString.call(object) === '[object RegExp]';
              }
              var out = {
                /**
                 * @see loadAsync
                 */
                load: function () {
                  throw new Error('This method has been removed in JSZip 3.0, please check the upgrade guide.');
                },
                /**
                 * Call a callback function for each entry at this folder level.
                 * @param {Function} cb the callback function:
                 * function (relativePath, file) {...}
                 * It takes 2 arguments : the relative path and the file.
                 */
                forEach: function (cb) {
                  var filename, relativePath, file;
                  for (filename in this.files) {
                    if (!this.files.hasOwnProperty(filename)) {
                      continue;
                    }
                    file = this.files[filename];
                    relativePath = filename.slice(this.root.length, filename.length);
                    if (relativePath && filename.slice(0, this.root.length) === this.root) {
                      cb(relativePath, file);
                    }
                  }
                },
                /**
                 * Filter nested files/folders with the specified function.
                 * @param {Function} search the predicate to use :
                 * function (relativePath, file) {...}
                 * It takes 2 arguments : the relative path and the file.
                 * @return {Array} An array of matching elements.
                 */
                filter: function (search) {
                  var result = [];
                  this.forEach(function (relativePath, entry) {
                    if (search(relativePath, entry)) {
                      result.push(entry);
                    }
                  });
                  return result;
                },
                /**
                 * Add a file to the zip file, or search a file.
                 * @param   {string|RegExp} name The name of the file to add (if data is defined),
                 * the name of the file to find (if no data) or a regex to match files.
                 * @param   {String|ArrayBuffer|Uint8Array|Buffer} data  The file data, either raw or base64 encoded
                 * @param   {Object} o     File options
                 * @return  {JSZip|Object|Array} this JSZip object (when adding a file),
                 * a file (when searching by string) or an array of files (when searching by regex).
                 */
                file: function (name, data, o) {
                  if (arguments.length === 1) {
                    if (isRegExp(name)) {
                      var regexp = name;
                      return this.filter(function (relativePath, file) {
                        return !file.dir && regexp.test(relativePath);
                      });
                    } else {
                      var obj = this.files[this.root + name];
                      if (obj && !obj.dir) {
                        return obj;
                      } else {
                        return null;
                      }
                    }
                  } else {
                    name = this.root + name;
                    fileAdd.call(this, name, data, o);
                  }
                  return this;
                },
                /**
                 * Add a directory to the zip file, or search.
                 * @param   {String|RegExp} arg The name of the directory to add, or a regex to search folders.
                 * @return  {JSZip} an object with the new directory as the root, or an array containing matching folders.
                 */
                folder: function (arg) {
                  if (!arg) {
                    return this;
                  }
                  if (isRegExp(arg)) {
                    return this.filter(function (relativePath, file) {
                      return file.dir && arg.test(relativePath);
                    });
                  }
                  var name = this.root + arg;
                  var newFolder = folderAdd.call(this, name);
                  var ret = this.clone();
                  ret.root = newFolder.name;
                  return ret;
                },
                /**
                 * Delete a file, or a directory and all sub-files, from the zip
                 * @param {string} name the name of the file to delete
                 * @return {JSZip} this JSZip object
                 */
                remove: function (name) {
                  name = this.root + name;
                  var file = this.files[name];
                  if (!file) {
                    if (name.slice(-1) !== '/') {
                      name += '/';
                    }
                    file = this.files[name];
                  }
                  if (file && !file.dir) {
                    delete this.files[name];
                  } else {
                    var kids = this.filter(function (relativePath, file2) {
                      return file2.name.slice(0, name.length) === name;
                    });
                    for (var i = 0; i < kids.length; i++) {
                      delete this.files[kids[i].name];
                    }
                  }
                  return this;
                },
                /**
                 * Generate the complete zip file
                 * @param {Object} options the options to generate the zip file :
                 * - compression, "STORE" by default.
                 * - type, "base64" by default. Values are : string, base64, uint8array, arraybuffer, blob.
                 * @return {String|Uint8Array|ArrayBuffer|Buffer|Blob} the zip file
                 */
                generate: function (options) {
                  throw new Error('This method has been removed in JSZip 3.0, please check the upgrade guide.');
                },
                /**
                 * Generate the complete zip file as an internal stream.
                 * @param {Object} options the options to generate the zip file :
                 * - compression, "STORE" by default.
                 * - type, "base64" by default. Values are : string, base64, uint8array, arraybuffer, blob.
                 * @return {StreamHelper} the streamed zip file.
                 */
                generateInternalStream: function (options) {
                  var worker,
                    opts = {};
                  try {
                    opts = utils.extend(options || {}, {
                      streamFiles: false,
                      compression: 'STORE',
                      compressionOptions: null,
                      type: '',
                      platform: 'DOS',
                      comment: null,
                      mimeType: 'application/zip',
                      encodeFileName: utf8.utf8encode
                    });
                    opts.type = opts.type.toLowerCase();
                    opts.compression = opts.compression.toUpperCase();
                    if (opts.type === 'binarystring') {
                      opts.type = 'string';
                    }
                    if (!opts.type) {
                      throw new Error('No output type specified.');
                    }
                    utils.checkSupport(opts.type);
                    if (
                      opts.platform === 'darwin' ||
                      opts.platform === 'freebsd' ||
                      opts.platform === 'linux' ||
                      opts.platform === 'sunos'
                    ) {
                      opts.platform = 'UNIX';
                    }
                    if (opts.platform === 'win32') {
                      opts.platform = 'DOS';
                    }
                    var comment = opts.comment || this.comment || '';
                    worker = generate.generateWorker(this, opts, comment);
                  } catch (e) {
                    worker = new GenericWorker('error');
                    worker.error(e);
                  }
                  return new StreamHelper(worker, opts.type || 'string', opts.mimeType);
                },
                /**
                 * Generate the complete zip file asynchronously.
                 * @see generateInternalStream
                 */
                generateAsync: function (options, onUpdate) {
                  return this.generateInternalStream(options).accumulate(onUpdate);
                },
                /**
                 * Generate the complete zip file asynchronously.
                 * @see generateInternalStream
                 */
                generateNodeStream: function (options, onUpdate) {
                  options = options || {};
                  if (!options.type) {
                    options.type = 'nodebuffer';
                  }
                  return this.generateInternalStream(options).toNodejsStream(onUpdate);
                }
              };
              module3.exports = out;
            },
            {
              './compressedObject': 12,
              './defaults': 15,
              './generate': 19,
              './nodejs/NodejsStreamInputAdapter': 23,
              './nodejsUtils': 22,
              './stream/GenericWorker': 38,
              './stream/StreamHelper': 39,
              './utf8': 41,
              './utils': 42,
              './zipObject': 45
            }
          ],
          26: [
            function (require2, module3, exports3) {
              module3.exports = require2('stream');
            },
            { stream: 80 }
          ],
          27: [
            function (require2, module3, exports3) {
              'use strict';
              var DataReader = require2('./DataReader');
              var utils = require2('../utils');
              function ArrayReader(data) {
                DataReader.call(this, data);
                for (var i = 0; i < this.data.length; i++) {
                  data[i] = data[i] & 255;
                }
              }
              utils.inherits(ArrayReader, DataReader);
              ArrayReader.prototype.byteAt = function (i) {
                return this.data[this.zero + i];
              };
              ArrayReader.prototype.lastIndexOfSignature = function (sig) {
                var sig0 = sig.charCodeAt(0),
                  sig1 = sig.charCodeAt(1),
                  sig2 = sig.charCodeAt(2),
                  sig3 = sig.charCodeAt(3);
                for (var i = this.length - 4; i >= 0; --i) {
                  if (
                    this.data[i] === sig0 &&
                    this.data[i + 1] === sig1 &&
                    this.data[i + 2] === sig2 &&
                    this.data[i + 3] === sig3
                  ) {
                    return i - this.zero;
                  }
                }
                return -1;
              };
              ArrayReader.prototype.readAndCheckSignature = function (sig) {
                var sig0 = sig.charCodeAt(0),
                  sig1 = sig.charCodeAt(1),
                  sig2 = sig.charCodeAt(2),
                  sig3 = sig.charCodeAt(3),
                  data = this.readData(4);
                return sig0 === data[0] && sig1 === data[1] && sig2 === data[2] && sig3 === data[3];
              };
              ArrayReader.prototype.readData = function (size) {
                this.checkOffset(size);
                if (size === 0) {
                  return [];
                }
                var result = this.data.slice(this.zero + this.index, this.zero + this.index + size);
                this.index += size;
                return result;
              };
              module3.exports = ArrayReader;
            },
            { '../utils': 42, './DataReader': 28 }
          ],
          28: [
            function (require2, module3, exports3) {
              'use strict';
              var utils = require2('../utils');
              function DataReader(data) {
                this.data = data;
                this.length = data.length;
                this.index = 0;
                this.zero = 0;
              }
              DataReader.prototype = {
                /**
                 * Check that the offset will not go too far.
                 * @param {string} offset the additional offset to check.
                 * @throws {Error} an Error if the offset is out of bounds.
                 */
                checkOffset: function (offset) {
                  this.checkIndex(this.index + offset);
                },
                /**
                 * Check that the specified index will not be too far.
                 * @param {string} newIndex the index to check.
                 * @throws {Error} an Error if the index is out of bounds.
                 */
                checkIndex: function (newIndex) {
                  if (this.length < this.zero + newIndex || newIndex < 0) {
                    throw new Error(
                      'End of data reached (data length = ' + this.length + ', asked index = ' + newIndex + '). Corrupted zip ?'
                    );
                  }
                },
                /**
                 * Change the index.
                 * @param {number} newIndex The new index.
                 * @throws {Error} if the new index is out of the data.
                 */
                setIndex: function (newIndex) {
                  this.checkIndex(newIndex);
                  this.index = newIndex;
                },
                /**
                 * Skip the next n bytes.
                 * @param {number} n the number of bytes to skip.
                 * @throws {Error} if the new index is out of the data.
                 */
                skip: function (n) {
                  this.setIndex(this.index + n);
                },
                /**
                 * Get the byte at the specified index.
                 * @param {number} i the index to use.
                 * @return {number} a byte.
                 */
                byteAt: function (i) {},
                /**
                 * Get the next number with a given byte size.
                 * @param {number} size the number of bytes to read.
                 * @return {number} the corresponding number.
                 */
                readInt: function (size) {
                  var result = 0,
                    i;
                  this.checkOffset(size);
                  for (i = this.index + size - 1; i >= this.index; i--) {
                    result = (result << 8) + this.byteAt(i);
                  }
                  this.index += size;
                  return result;
                },
                /**
                 * Get the next string with a given byte size.
                 * @param {number} size the number of bytes to read.
                 * @return {string} the corresponding string.
                 */
                readString: function (size) {
                  return utils.transformTo('string', this.readData(size));
                },
                /**
                 * Get raw data without conversion, <size> bytes.
                 * @param {number} size the number of bytes to read.
                 * @return {Object} the raw data, implementation specific.
                 */
                readData: function (size) {},
                /**
                 * Find the last occurrence of a zip signature (4 bytes).
                 * @param {string} sig the signature to find.
                 * @return {number} the index of the last occurrence, -1 if not found.
                 */
                lastIndexOfSignature: function (sig) {},
                /**
                 * Read the signature (4 bytes) at the current position and compare it with sig.
                 * @param {string} sig the expected signature
                 * @return {boolean} true if the signature matches, false otherwise.
                 */
                readAndCheckSignature: function (sig) {},
                /**
                 * Get the next date.
                 * @return {Date} the date.
                 */
                readDate: function () {
                  var dostime = this.readInt(4);
                  return new Date(
                    Date.UTC(
                      ((dostime >> 25) & 127) + 1980,
                      // year
                      ((dostime >> 21) & 15) - 1,
                      // month
                      (dostime >> 16) & 31,
                      // day
                      (dostime >> 11) & 31,
                      // hour
                      (dostime >> 5) & 63,
                      // minute
                      (dostime & 31) << 1
                    )
                  );
                }
              };
              module3.exports = DataReader;
            },
            { '../utils': 42 }
          ],
          29: [
            function (require2, module3, exports3) {
              'use strict';
              var Uint8ArrayReader = require2('./Uint8ArrayReader');
              var utils = require2('../utils');
              function NodeBufferReader(data) {
                Uint8ArrayReader.call(this, data);
              }
              utils.inherits(NodeBufferReader, Uint8ArrayReader);
              NodeBufferReader.prototype.readData = function (size) {
                this.checkOffset(size);
                var result = this.data.slice(this.zero + this.index, this.zero + this.index + size);
                this.index += size;
                return result;
              };
              module3.exports = NodeBufferReader;
            },
            { '../utils': 42, './Uint8ArrayReader': 31 }
          ],
          30: [
            function (require2, module3, exports3) {
              'use strict';
              var DataReader = require2('./DataReader');
              var utils = require2('../utils');
              function StringReader(data) {
                DataReader.call(this, data);
              }
              utils.inherits(StringReader, DataReader);
              StringReader.prototype.byteAt = function (i) {
                return this.data.charCodeAt(this.zero + i);
              };
              StringReader.prototype.lastIndexOfSignature = function (sig) {
                return this.data.lastIndexOf(sig) - this.zero;
              };
              StringReader.prototype.readAndCheckSignature = function (sig) {
                var data = this.readData(4);
                return sig === data;
              };
              StringReader.prototype.readData = function (size) {
                this.checkOffset(size);
                var result = this.data.slice(this.zero + this.index, this.zero + this.index + size);
                this.index += size;
                return result;
              };
              module3.exports = StringReader;
            },
            { '../utils': 42, './DataReader': 28 }
          ],
          31: [
            function (require2, module3, exports3) {
              'use strict';
              var ArrayReader = require2('./ArrayReader');
              var utils = require2('../utils');
              function Uint8ArrayReader(data) {
                ArrayReader.call(this, data);
              }
              utils.inherits(Uint8ArrayReader, ArrayReader);
              Uint8ArrayReader.prototype.readData = function (size) {
                this.checkOffset(size);
                if (size === 0) {
                  return new Uint8Array(0);
                }
                var result = this.data.subarray(this.zero + this.index, this.zero + this.index + size);
                this.index += size;
                return result;
              };
              module3.exports = Uint8ArrayReader;
            },
            { '../utils': 42, './ArrayReader': 27 }
          ],
          32: [
            function (require2, module3, exports3) {
              'use strict';
              var utils = require2('../utils');
              var support = require2('../support');
              var ArrayReader = require2('./ArrayReader');
              var StringReader = require2('./StringReader');
              var NodeBufferReader = require2('./NodeBufferReader');
              var Uint8ArrayReader = require2('./Uint8ArrayReader');
              module3.exports = function (data) {
                var type = utils.getTypeOf(data);
                utils.checkSupport(type);
                if (type === 'string' && !support.uint8array) {
                  return new StringReader(data);
                }
                if (type === 'nodebuffer') {
                  return new NodeBufferReader(data);
                }
                if (support.uint8array) {
                  return new Uint8ArrayReader(utils.transformTo('uint8array', data));
                }
                return new ArrayReader(utils.transformTo('array', data));
              };
            },
            {
              '../support': 40,
              '../utils': 42,
              './ArrayReader': 27,
              './NodeBufferReader': 29,
              './StringReader': 30,
              './Uint8ArrayReader': 31
            }
          ],
          33: [
            function (require2, module3, exports3) {
              'use strict';
              exports3.LOCAL_FILE_HEADER = 'PK';
              exports3.CENTRAL_FILE_HEADER = 'PK';
              exports3.CENTRAL_DIRECTORY_END = 'PK';
              exports3.ZIP64_CENTRAL_DIRECTORY_LOCATOR = 'PK\x07';
              exports3.ZIP64_CENTRAL_DIRECTORY_END = 'PK';
              exports3.DATA_DESCRIPTOR = 'PK\x07\b';
            },
            {}
          ],
          34: [
            function (require2, module3, exports3) {
              'use strict';
              var GenericWorker = require2('./GenericWorker');
              var utils = require2('../utils');
              function ConvertWorker(destType) {
                GenericWorker.call(this, 'ConvertWorker to ' + destType);
                this.destType = destType;
              }
              utils.inherits(ConvertWorker, GenericWorker);
              ConvertWorker.prototype.processChunk = function (chunk) {
                this.push({
                  data: utils.transformTo(this.destType, chunk.data),
                  meta: chunk.meta
                });
              };
              module3.exports = ConvertWorker;
            },
            { '../utils': 42, './GenericWorker': 38 }
          ],
          35: [
            function (require2, module3, exports3) {
              'use strict';
              var GenericWorker = require2('./GenericWorker');
              var crc32 = require2('../crc32');
              var utils = require2('../utils');
              function Crc32Probe() {
                GenericWorker.call(this, 'Crc32Probe');
                this.withStreamInfo('crc32', 0);
              }
              utils.inherits(Crc32Probe, GenericWorker);
              Crc32Probe.prototype.processChunk = function (chunk) {
                this.streamInfo.crc32 = crc32(chunk.data, this.streamInfo.crc32 || 0);
                this.push(chunk);
              };
              module3.exports = Crc32Probe;
            },
            { '../crc32': 14, '../utils': 42, './GenericWorker': 38 }
          ],
          36: [
            function (require2, module3, exports3) {
              'use strict';
              var utils = require2('../utils');
              var GenericWorker = require2('./GenericWorker');
              function DataLengthProbe(propName) {
                GenericWorker.call(this, 'DataLengthProbe for ' + propName);
                this.propName = propName;
                this.withStreamInfo(propName, 0);
              }
              utils.inherits(DataLengthProbe, GenericWorker);
              DataLengthProbe.prototype.processChunk = function (chunk) {
                if (chunk) {
                  var length = this.streamInfo[this.propName] || 0;
                  this.streamInfo[this.propName] = length + chunk.data.length;
                }
                GenericWorker.prototype.processChunk.call(this, chunk);
              };
              module3.exports = DataLengthProbe;
            },
            { '../utils': 42, './GenericWorker': 38 }
          ],
          37: [
            function (require2, module3, exports3) {
              'use strict';
              var utils = require2('../utils');
              var GenericWorker = require2('./GenericWorker');
              var DEFAULT_BLOCK_SIZE = 16 * 1024;
              function DataWorker(dataP) {
                GenericWorker.call(this, 'DataWorker');
                var self2 = this;
                this.dataIsReady = false;
                this.index = 0;
                this.max = 0;
                this.data = null;
                this.type = '';
                this._tickScheduled = false;
                dataP.then(
                  function (data) {
                    self2.dataIsReady = true;
                    self2.data = data;
                    self2.max = (data && data.length) || 0;
                    self2.type = utils.getTypeOf(data);
                    if (!self2.isPaused) {
                      self2._tickAndRepeat();
                    }
                  },
                  function (e) {
                    self2.error(e);
                  }
                );
              }
              utils.inherits(DataWorker, GenericWorker);
              DataWorker.prototype.cleanUp = function () {
                GenericWorker.prototype.cleanUp.call(this);
                this.data = null;
              };
              DataWorker.prototype.resume = function () {
                if (!GenericWorker.prototype.resume.call(this)) {
                  return false;
                }
                if (!this._tickScheduled && this.dataIsReady) {
                  this._tickScheduled = true;
                  utils.delay(this._tickAndRepeat, [], this);
                }
                return true;
              };
              DataWorker.prototype._tickAndRepeat = function () {
                this._tickScheduled = false;
                if (this.isPaused || this.isFinished) {
                  return;
                }
                this._tick();
                if (!this.isFinished) {
                  utils.delay(this._tickAndRepeat, [], this);
                  this._tickScheduled = true;
                }
              };
              DataWorker.prototype._tick = function () {
                if (this.isPaused || this.isFinished) {
                  return false;
                }
                var size = DEFAULT_BLOCK_SIZE;
                var data = null,
                  nextIndex = Math.min(this.max, this.index + size);
                if (this.index >= this.max) {
                  return this.end();
                } else {
                  switch (this.type) {
                    case 'string':
                      data = this.data.substring(this.index, nextIndex);
                      break;
                    case 'uint8array':
                      data = this.data.subarray(this.index, nextIndex);
                      break;
                    case 'array':
                    case 'nodebuffer':
                      data = this.data.slice(this.index, nextIndex);
                      break;
                  }
                  this.index = nextIndex;
                  return this.push({
                    data,
                    meta: {
                      percent: this.max ? (this.index / this.max) * 100 : 0
                    }
                  });
                }
              };
              module3.exports = DataWorker;
            },
            { '../utils': 42, './GenericWorker': 38 }
          ],
          38: [
            function (require2, module3, exports3) {
              'use strict';
              function GenericWorker(name) {
                this.name = name || 'default';
                this.streamInfo = {};
                this.generatedError = null;
                this.extraStreamInfo = {};
                this.isPaused = true;
                this.isFinished = false;
                this.isLocked = false;
                this._listeners = {
                  data: [],
                  end: [],
                  error: []
                };
                this.previous = null;
              }
              GenericWorker.prototype = {
                /**
                 * Push a chunk to the next workers.
                 * @param {Object} chunk the chunk to push
                 */
                push: function (chunk) {
                  this.emit('data', chunk);
                },
                /**
                 * End the stream.
                 * @return {Boolean} true if this call ended the worker, false otherwise.
                 */
                end: function () {
                  if (this.isFinished) {
                    return false;
                  }
                  this.flush();
                  try {
                    this.emit('end');
                    this.cleanUp();
                    this.isFinished = true;
                  } catch (e) {
                    this.emit('error', e);
                  }
                  return true;
                },
                /**
                 * End the stream with an error.
                 * @param {Error} e the error which caused the premature end.
                 * @return {Boolean} true if this call ended the worker with an error, false otherwise.
                 */
                error: function (e) {
                  if (this.isFinished) {
                    return false;
                  }
                  if (this.isPaused) {
                    this.generatedError = e;
                  } else {
                    this.isFinished = true;
                    this.emit('error', e);
                    if (this.previous) {
                      this.previous.error(e);
                    }
                    this.cleanUp();
                  }
                  return true;
                },
                /**
                 * Add a callback on an event.
                 * @param {String} name the name of the event (data, end, error)
                 * @param {Function} listener the function to call when the event is triggered
                 * @return {GenericWorker} the current object for chainability
                 */
                on: function (name, listener) {
                  this._listeners[name].push(listener);
                  return this;
                },
                /**
                 * Clean any references when a worker is ending.
                 */
                cleanUp: function () {
                  this.streamInfo = this.generatedError = this.extraStreamInfo = null;
                  this._listeners = [];
                },
                /**
                 * Trigger an event. This will call registered callback with the provided arg.
                 * @param {String} name the name of the event (data, end, error)
                 * @param {Object} arg the argument to call the callback with.
                 */
                emit: function (name, arg) {
                  if (this._listeners[name]) {
                    for (var i = 0; i < this._listeners[name].length; i++) {
                      this._listeners[name][i].call(this, arg);
                    }
                  }
                },
                /**
                 * Chain a worker with an other.
                 * @param {Worker} next the worker receiving events from the current one.
                 * @return {worker} the next worker for chainability
                 */
                pipe: function (next) {
                  return next.registerPrevious(this);
                },
                /**
                 * Same as `pipe` in the other direction.
                 * Using an API with `pipe(next)` is very easy.
                 * Implementing the API with the point of view of the next one registering
                 * a source is easier, see the ZipFileWorker.
                 * @param {Worker} previous the previous worker, sending events to this one
                 * @return {Worker} the current worker for chainability
                 */
                registerPrevious: function (previous) {
                  if (this.isLocked) {
                    throw new Error("The stream '" + this + "' has already been used.");
                  }
                  this.streamInfo = previous.streamInfo;
                  this.mergeStreamInfo();
                  this.previous = previous;
                  var self2 = this;
                  previous.on('data', function (chunk) {
                    self2.processChunk(chunk);
                  });
                  previous.on('end', function () {
                    self2.end();
                  });
                  previous.on('error', function (e) {
                    self2.error(e);
                  });
                  return this;
                },
                /**
                 * Pause the stream so it doesn't send events anymore.
                 * @return {Boolean} true if this call paused the worker, false otherwise.
                 */
                pause: function () {
                  if (this.isPaused || this.isFinished) {
                    return false;
                  }
                  this.isPaused = true;
                  if (this.previous) {
                    this.previous.pause();
                  }
                  return true;
                },
                /**
                 * Resume a paused stream.
                 * @return {Boolean} true if this call resumed the worker, false otherwise.
                 */
                resume: function () {
                  if (!this.isPaused || this.isFinished) {
                    return false;
                  }
                  this.isPaused = false;
                  var withError = false;
                  if (this.generatedError) {
                    this.error(this.generatedError);
                    withError = true;
                  }
                  if (this.previous) {
                    this.previous.resume();
                  }
                  return !withError;
                },
                /**
                 * Flush any remaining bytes as the stream is ending.
                 */
                flush: function () {},
                /**
                 * Process a chunk. This is usually the method overridden.
                 * @param {Object} chunk the chunk to process.
                 */
                processChunk: function (chunk) {
                  this.push(chunk);
                },
                /**
                 * Add a key/value to be added in the workers chain streamInfo once activated.
                 * @param {String} key the key to use
                 * @param {Object} value the associated value
                 * @return {Worker} the current worker for chainability
                 */
                withStreamInfo: function (key, value) {
                  this.extraStreamInfo[key] = value;
                  this.mergeStreamInfo();
                  return this;
                },
                /**
                 * Merge this worker's streamInfo into the chain's streamInfo.
                 */
                mergeStreamInfo: function () {
                  for (var key in this.extraStreamInfo) {
                    if (!this.extraStreamInfo.hasOwnProperty(key)) {
                      continue;
                    }
                    this.streamInfo[key] = this.extraStreamInfo[key];
                  }
                },
                /**
                 * Lock the stream to prevent further updates on the workers chain.
                 * After calling this method, all calls to pipe will fail.
                 */
                lock: function () {
                  if (this.isLocked) {
                    throw new Error("The stream '" + this + "' has already been used.");
                  }
                  this.isLocked = true;
                  if (this.previous) {
                    this.previous.lock();
                  }
                },
                /**
                 *
                 * Pretty print the workers chain.
                 */
                toString: function () {
                  var me = 'Worker ' + this.name;
                  if (this.previous) {
                    return this.previous + ' -> ' + me;
                  } else {
                    return me;
                  }
                }
              };
              module3.exports = GenericWorker;
            },
            {}
          ],
          39: [
            function (require2, module3, exports3) {
              (function (Buffer) {
                'use strict';
                var utils = require2('../utils');
                var ConvertWorker = require2('./ConvertWorker');
                var GenericWorker = require2('./GenericWorker');
                var base64 = require2('../base64');
                var support = require2('../support');
                var external = require2('../external');
                var NodejsStreamOutputAdapter = null;
                if (support.nodestream) {
                  try {
                    NodejsStreamOutputAdapter = require2('../nodejs/NodejsStreamOutputAdapter');
                  } catch (e) {}
                }
                function transformZipOutput(type, content, mimeType) {
                  switch (type) {
                    case 'blob':
                      return utils.newBlob(utils.transformTo('arraybuffer', content), mimeType);
                    case 'base64':
                      return base64.encode(content);
                    default:
                      return utils.transformTo(type, content);
                  }
                }
                function concat(type, dataArray) {
                  var i,
                    index = 0,
                    res = null,
                    totalLength = 0;
                  for (i = 0; i < dataArray.length; i++) {
                    totalLength += dataArray[i].length;
                  }
                  switch (type) {
                    case 'string':
                      return dataArray.join('');
                    case 'array':
                      return Array.prototype.concat.apply([], dataArray);
                    case 'uint8array':
                      res = new Uint8Array(totalLength);
                      for (i = 0; i < dataArray.length; i++) {
                        res.set(dataArray[i], index);
                        index += dataArray[i].length;
                      }
                      return res;
                    case 'nodebuffer':
                      return Buffer.concat(dataArray);
                    default:
                      throw new Error("concat : unsupported type '" + type + "'");
                  }
                }
                function accumulate(helper, updateCallback) {
                  return new external.Promise(function (resolve, reject) {
                    var dataArray = [];
                    var chunkType = helper._internalType,
                      resultType = helper._outputType,
                      mimeType = helper._mimeType;
                    helper
                      .on('data', function (data, meta) {
                        dataArray.push(data);
                        if (updateCallback) {
                          updateCallback(meta);
                        }
                      })
                      .on('error', function (err) {
                        dataArray = [];
                        reject(err);
                      })
                      .on('end', function () {
                        try {
                          var result = transformZipOutput(resultType, concat(chunkType, dataArray), mimeType);
                          resolve(result);
                        } catch (e) {
                          reject(e);
                        }
                        dataArray = [];
                      })
                      .resume();
                  });
                }
                function StreamHelper(worker, outputType, mimeType) {
                  var internalType = outputType;
                  switch (outputType) {
                    case 'blob':
                    case 'arraybuffer':
                      internalType = 'uint8array';
                      break;
                    case 'base64':
                      internalType = 'string';
                      break;
                  }
                  try {
                    this._internalType = internalType;
                    this._outputType = outputType;
                    this._mimeType = mimeType;
                    utils.checkSupport(internalType);
                    this._worker = worker.pipe(new ConvertWorker(internalType));
                    worker.lock();
                  } catch (e) {
                    this._worker = new GenericWorker('error');
                    this._worker.error(e);
                  }
                }
                StreamHelper.prototype = {
                  /**
                   * Listen a StreamHelper, accumulate its content and concatenate it into a
                   * complete block.
                   * @param {Function} updateCb the update callback.
                   * @return Promise the promise for the accumulation.
                   */
                  accumulate: function (updateCb) {
                    return accumulate(this, updateCb);
                  },
                  /**
                   * Add a listener on an event triggered on a stream.
                   * @param {String} evt the name of the event
                   * @param {Function} fn the listener
                   * @return {StreamHelper} the current helper.
                   */
                  on: function (evt, fn) {
                    var self2 = this;
                    if (evt === 'data') {
                      this._worker.on(evt, function (chunk) {
                        fn.call(self2, chunk.data, chunk.meta);
                      });
                    } else {
                      this._worker.on(evt, function () {
                        utils.delay(fn, arguments, self2);
                      });
                    }
                    return this;
                  },
                  /**
                   * Resume the flow of chunks.
                   * @return {StreamHelper} the current helper.
                   */
                  resume: function () {
                    utils.delay(this._worker.resume, [], this._worker);
                    return this;
                  },
                  /**
                   * Pause the flow of chunks.
                   * @return {StreamHelper} the current helper.
                   */
                  pause: function () {
                    this._worker.pause();
                    return this;
                  },
                  /**
                   * Return a nodejs stream for this helper.
                   * @param {Function} updateCb the update callback.
                   * @return {NodejsStreamOutputAdapter} the nodejs stream.
                   */
                  toNodejsStream: function (updateCb) {
                    utils.checkSupport('nodestream');
                    if (this._outputType !== 'nodebuffer') {
                      throw new Error(this._outputType + ' is not supported by this method');
                    }
                    return new NodejsStreamOutputAdapter(
                      this,
                      {
                        objectMode: this._outputType !== 'nodebuffer'
                      },
                      updateCb
                    );
                  }
                };
                module3.exports = StreamHelper;
              }).call(this, require2('buffer').Buffer);
            },
            {
              '../base64': 11,
              '../external': 16,
              '../nodejs/NodejsStreamOutputAdapter': 24,
              '../support': 40,
              '../utils': 42,
              './ConvertWorker': 34,
              './GenericWorker': 38,
              buffer: 3
            }
          ],
          40: [
            function (require2, module3, exports3) {
              (function (Buffer) {
                'use strict';
                exports3.base64 = true;
                exports3.array = true;
                exports3.string = true;
                exports3.arraybuffer = typeof ArrayBuffer !== 'undefined' && typeof Uint8Array !== 'undefined';
                exports3.nodebuffer = typeof Buffer !== 'undefined';
                exports3.uint8array = typeof Uint8Array !== 'undefined';
                if (typeof ArrayBuffer === 'undefined') {
                  exports3.blob = false;
                } else {
                  var buffer = new ArrayBuffer(0);
                  try {
                    exports3.blob =
                      new Blob([buffer], {
                        type: 'application/zip'
                      }).size === 0;
                  } catch (e) {
                    try {
                      var Builder = self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder;
                      var builder = new Builder();
                      builder.append(buffer);
                      exports3.blob = builder.getBlob('application/zip').size === 0;
                    } catch (e2) {
                      exports3.blob = false;
                    }
                  }
                }
                try {
                  exports3.nodestream = !!require2('readable-stream').Readable;
                } catch (e) {
                  exports3.nodestream = false;
                }
              }).call(this, require2('buffer').Buffer);
            },
            { buffer: 3, 'readable-stream': 26 }
          ],
          41: [
            function (require2, module3, exports3) {
              'use strict';
              var utils = require2('./utils');
              var support = require2('./support');
              var nodejsUtils = require2('./nodejsUtils');
              var GenericWorker = require2('./stream/GenericWorker');
              var _utf8len = new Array(256);
              for (var i = 0; i < 256; i++) {
                _utf8len[i] = i >= 252 ? 6 : i >= 248 ? 5 : i >= 240 ? 4 : i >= 224 ? 3 : i >= 192 ? 2 : 1;
              }
              _utf8len[254] = _utf8len[254] = 1;
              var string2buf = function (str) {
                var buf,
                  c,
                  c2,
                  m_pos,
                  i2,
                  str_len = str.length,
                  buf_len = 0;
                for (m_pos = 0; m_pos < str_len; m_pos++) {
                  c = str.charCodeAt(m_pos);
                  if ((c & 64512) === 55296 && m_pos + 1 < str_len) {
                    c2 = str.charCodeAt(m_pos + 1);
                    if ((c2 & 64512) === 56320) {
                      c = 65536 + ((c - 55296) << 10) + (c2 - 56320);
                      m_pos++;
                    }
                  }
                  buf_len += c < 128 ? 1 : c < 2048 ? 2 : c < 65536 ? 3 : 4;
                }
                if (support.uint8array) {
                  buf = new Uint8Array(buf_len);
                } else {
                  buf = new Array(buf_len);
                }
                for (i2 = 0, m_pos = 0; i2 < buf_len; m_pos++) {
                  c = str.charCodeAt(m_pos);
                  if ((c & 64512) === 55296 && m_pos + 1 < str_len) {
                    c2 = str.charCodeAt(m_pos + 1);
                    if ((c2 & 64512) === 56320) {
                      c = 65536 + ((c - 55296) << 10) + (c2 - 56320);
                      m_pos++;
                    }
                  }
                  if (c < 128) {
                    buf[i2++] = c;
                  } else if (c < 2048) {
                    buf[i2++] = 192 | (c >>> 6);
                    buf[i2++] = 128 | (c & 63);
                  } else if (c < 65536) {
                    buf[i2++] = 224 | (c >>> 12);
                    buf[i2++] = 128 | ((c >>> 6) & 63);
                    buf[i2++] = 128 | (c & 63);
                  } else {
                    buf[i2++] = 240 | (c >>> 18);
                    buf[i2++] = 128 | ((c >>> 12) & 63);
                    buf[i2++] = 128 | ((c >>> 6) & 63);
                    buf[i2++] = 128 | (c & 63);
                  }
                }
                return buf;
              };
              var utf8border = function (buf, max) {
                var pos;
                max = max || buf.length;
                if (max > buf.length) {
                  max = buf.length;
                }
                pos = max - 1;
                while (pos >= 0 && (buf[pos] & 192) === 128) {
                  pos--;
                }
                if (pos < 0) {
                  return max;
                }
                if (pos === 0) {
                  return max;
                }
                return pos + _utf8len[buf[pos]] > max ? pos : max;
              };
              var buf2string = function (buf) {
                var str, i2, out, c, c_len;
                var len = buf.length;
                var utf16buf = new Array(len * 2);
                for (out = 0, i2 = 0; i2 < len; ) {
                  c = buf[i2++];
                  if (c < 128) {
                    utf16buf[out++] = c;
                    continue;
                  }
                  c_len = _utf8len[c];
                  if (c_len > 4) {
                    utf16buf[out++] = 65533;
                    i2 += c_len - 1;
                    continue;
                  }
                  c &= c_len === 2 ? 31 : c_len === 3 ? 15 : 7;
                  while (c_len > 1 && i2 < len) {
                    c = (c << 6) | (buf[i2++] & 63);
                    c_len--;
                  }
                  if (c_len > 1) {
                    utf16buf[out++] = 65533;
                    continue;
                  }
                  if (c < 65536) {
                    utf16buf[out++] = c;
                  } else {
                    c -= 65536;
                    utf16buf[out++] = 55296 | ((c >> 10) & 1023);
                    utf16buf[out++] = 56320 | (c & 1023);
                  }
                }
                if (utf16buf.length !== out) {
                  if (utf16buf.subarray) {
                    utf16buf = utf16buf.subarray(0, out);
                  } else {
                    utf16buf.length = out;
                  }
                }
                return utils.applyFromCharCode(utf16buf);
              };
              exports3.utf8encode = function utf8encode(str) {
                if (support.nodebuffer) {
                  return nodejsUtils.newBufferFrom(str, 'utf-8');
                }
                return string2buf(str);
              };
              exports3.utf8decode = function utf8decode(buf) {
                if (support.nodebuffer) {
                  return utils.transformTo('nodebuffer', buf).toString('utf-8');
                }
                buf = utils.transformTo(support.uint8array ? 'uint8array' : 'array', buf);
                return buf2string(buf);
              };
              function Utf8DecodeWorker() {
                GenericWorker.call(this, 'utf-8 decode');
                this.leftOver = null;
              }
              utils.inherits(Utf8DecodeWorker, GenericWorker);
              Utf8DecodeWorker.prototype.processChunk = function (chunk) {
                var data = utils.transformTo(support.uint8array ? 'uint8array' : 'array', chunk.data);
                if (this.leftOver && this.leftOver.length) {
                  if (support.uint8array) {
                    var previousData = data;
                    data = new Uint8Array(previousData.length + this.leftOver.length);
                    data.set(this.leftOver, 0);
                    data.set(previousData, this.leftOver.length);
                  } else {
                    data = this.leftOver.concat(data);
                  }
                  this.leftOver = null;
                }
                var nextBoundary = utf8border(data);
                var usableData = data;
                if (nextBoundary !== data.length) {
                  if (support.uint8array) {
                    usableData = data.subarray(0, nextBoundary);
                    this.leftOver = data.subarray(nextBoundary, data.length);
                  } else {
                    usableData = data.slice(0, nextBoundary);
                    this.leftOver = data.slice(nextBoundary, data.length);
                  }
                }
                this.push({
                  data: exports3.utf8decode(usableData),
                  meta: chunk.meta
                });
              };
              Utf8DecodeWorker.prototype.flush = function () {
                if (this.leftOver && this.leftOver.length) {
                  this.push({
                    data: exports3.utf8decode(this.leftOver),
                    meta: {}
                  });
                  this.leftOver = null;
                }
              };
              exports3.Utf8DecodeWorker = Utf8DecodeWorker;
              function Utf8EncodeWorker() {
                GenericWorker.call(this, 'utf-8 encode');
              }
              utils.inherits(Utf8EncodeWorker, GenericWorker);
              Utf8EncodeWorker.prototype.processChunk = function (chunk) {
                this.push({
                  data: exports3.utf8encode(chunk.data),
                  meta: chunk.meta
                });
              };
              exports3.Utf8EncodeWorker = Utf8EncodeWorker;
            },
            { './nodejsUtils': 22, './stream/GenericWorker': 38, './support': 40, './utils': 42 }
          ],
          42: [
            function (require2, module3, exports3) {
              'use strict';
              var support = require2('./support');
              var base64 = require2('./base64');
              var nodejsUtils = require2('./nodejsUtils');
              var setImmediate = require2('set-immediate-shim');
              var external = require2('./external');
              function string2binary(str) {
                var result = null;
                if (support.uint8array) {
                  result = new Uint8Array(str.length);
                } else {
                  result = new Array(str.length);
                }
                return stringToArrayLike(str, result);
              }
              exports3.newBlob = function (part, type) {
                exports3.checkSupport('blob');
                try {
                  return new Blob([part], {
                    type
                  });
                } catch (e) {
                  try {
                    var Builder = self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder;
                    var builder = new Builder();
                    builder.append(part);
                    return builder.getBlob(type);
                  } catch (e2) {
                    throw new Error("Bug : can't construct the Blob.");
                  }
                }
              };
              function identity(input) {
                return input;
              }
              function stringToArrayLike(str, array) {
                for (var i = 0; i < str.length; ++i) {
                  array[i] = str.charCodeAt(i) & 255;
                }
                return array;
              }
              var arrayToStringHelper = {
                /**
                 * Transform an array of int into a string, chunk by chunk.
                 * See the performances notes on arrayLikeToString.
                 * @param {Array|ArrayBuffer|Uint8Array|Buffer} array the array to transform.
                 * @param {String} type the type of the array.
                 * @param {Integer} chunk the chunk size.
                 * @return {String} the resulting string.
                 * @throws Error if the chunk is too big for the stack.
                 */
                stringifyByChunk: function (array, type, chunk) {
                  var result = [],
                    k = 0,
                    len = array.length;
                  if (len <= chunk) {
                    return String.fromCharCode.apply(null, array);
                  }
                  while (k < len) {
                    if (type === 'array' || type === 'nodebuffer') {
                      result.push(String.fromCharCode.apply(null, array.slice(k, Math.min(k + chunk, len))));
                    } else {
                      result.push(String.fromCharCode.apply(null, array.subarray(k, Math.min(k + chunk, len))));
                    }
                    k += chunk;
                  }
                  return result.join('');
                },
                /**
                 * Call String.fromCharCode on every item in the array.
                 * This is the naive implementation, which generate A LOT of intermediate string.
                 * This should be used when everything else fail.
                 * @param {Array|ArrayBuffer|Uint8Array|Buffer} array the array to transform.
                 * @return {String} the result.
                 */
                stringifyByChar: function (array) {
                  var resultStr = '';
                  for (var i = 0; i < array.length; i++) {
                    resultStr += String.fromCharCode(array[i]);
                  }
                  return resultStr;
                },
                applyCanBeUsed: {
                  /**
                   * true if the browser accepts to use String.fromCharCode on Uint8Array
                   */
                  uint8array: (function () {
                    try {
                      return support.uint8array && String.fromCharCode.apply(null, new Uint8Array(1)).length === 1;
                    } catch (e) {
                      return false;
                    }
                  })(),
                  /**
                   * true if the browser accepts to use String.fromCharCode on nodejs Buffer.
                   */
                  nodebuffer: (function () {
                    try {
                      return support.nodebuffer && String.fromCharCode.apply(null, nodejsUtils.allocBuffer(1)).length === 1;
                    } catch (e) {
                      return false;
                    }
                  })()
                }
              };
              function arrayLikeToString(array) {
                var chunk = 65536,
                  type = exports3.getTypeOf(array),
                  canUseApply = true;
                if (type === 'uint8array') {
                  canUseApply = arrayToStringHelper.applyCanBeUsed.uint8array;
                } else if (type === 'nodebuffer') {
                  canUseApply = arrayToStringHelper.applyCanBeUsed.nodebuffer;
                }
                if (canUseApply) {
                  while (chunk > 1) {
                    try {
                      return arrayToStringHelper.stringifyByChunk(array, type, chunk);
                    } catch (e) {
                      chunk = Math.floor(chunk / 2);
                    }
                  }
                }
                return arrayToStringHelper.stringifyByChar(array);
              }
              exports3.applyFromCharCode = arrayLikeToString;
              function arrayLikeToArrayLike(arrayFrom, arrayTo) {
                for (var i = 0; i < arrayFrom.length; i++) {
                  arrayTo[i] = arrayFrom[i];
                }
                return arrayTo;
              }
              var transform = {};
              transform['string'] = {
                string: identity,
                array: function (input) {
                  return stringToArrayLike(input, new Array(input.length));
                },
                arraybuffer: function (input) {
                  return transform['string']['uint8array'](input).buffer;
                },
                uint8array: function (input) {
                  return stringToArrayLike(input, new Uint8Array(input.length));
                },
                nodebuffer: function (input) {
                  return stringToArrayLike(input, nodejsUtils.allocBuffer(input.length));
                }
              };
              transform['array'] = {
                string: arrayLikeToString,
                array: identity,
                arraybuffer: function (input) {
                  return new Uint8Array(input).buffer;
                },
                uint8array: function (input) {
                  return new Uint8Array(input);
                },
                nodebuffer: function (input) {
                  return nodejsUtils.newBufferFrom(input);
                }
              };
              transform['arraybuffer'] = {
                string: function (input) {
                  return arrayLikeToString(new Uint8Array(input));
                },
                array: function (input) {
                  return arrayLikeToArrayLike(new Uint8Array(input), new Array(input.byteLength));
                },
                arraybuffer: identity,
                uint8array: function (input) {
                  return new Uint8Array(input);
                },
                nodebuffer: function (input) {
                  return nodejsUtils.newBufferFrom(new Uint8Array(input));
                }
              };
              transform['uint8array'] = {
                string: arrayLikeToString,
                array: function (input) {
                  return arrayLikeToArrayLike(input, new Array(input.length));
                },
                arraybuffer: function (input) {
                  return input.buffer;
                },
                uint8array: identity,
                nodebuffer: function (input) {
                  return nodejsUtils.newBufferFrom(input);
                }
              };
              transform['nodebuffer'] = {
                string: arrayLikeToString,
                array: function (input) {
                  return arrayLikeToArrayLike(input, new Array(input.length));
                },
                arraybuffer: function (input) {
                  return transform['nodebuffer']['uint8array'](input).buffer;
                },
                uint8array: function (input) {
                  return arrayLikeToArrayLike(input, new Uint8Array(input.length));
                },
                nodebuffer: identity
              };
              exports3.transformTo = function (outputType, input) {
                if (!input) {
                  input = '';
                }
                if (!outputType) {
                  return input;
                }
                exports3.checkSupport(outputType);
                var inputType = exports3.getTypeOf(input);
                var result = transform[inputType][outputType](input);
                return result;
              };
              exports3.getTypeOf = function (input) {
                if (typeof input === 'string') {
                  return 'string';
                }
                if (Object.prototype.toString.call(input) === '[object Array]') {
                  return 'array';
                }
                if (support.nodebuffer && nodejsUtils.isBuffer(input)) {
                  return 'nodebuffer';
                }
                if (support.uint8array && input instanceof Uint8Array) {
                  return 'uint8array';
                }
                if (support.arraybuffer && input instanceof ArrayBuffer) {
                  return 'arraybuffer';
                }
              };
              exports3.checkSupport = function (type) {
                var supported = support[type.toLowerCase()];
                if (!supported) {
                  throw new Error(type + ' is not supported by this platform');
                }
              };
              exports3.MAX_VALUE_16BITS = 65535;
              exports3.MAX_VALUE_32BITS = -1;
              exports3.pretty = function (str) {
                var res = '',
                  code,
                  i;
                for (i = 0; i < (str || '').length; i++) {
                  code = str.charCodeAt(i);
                  res += '\\x' + (code < 16 ? '0' : '') + code.toString(16).toUpperCase();
                }
                return res;
              };
              exports3.delay = function (callback, args, self2) {
                setImmediate(function () {
                  callback.apply(self2 || null, args || []);
                });
              };
              exports3.inherits = function (ctor, superCtor) {
                var Obj = function () {};
                Obj.prototype = superCtor.prototype;
                ctor.prototype = new Obj();
              };
              exports3.extend = function () {
                var result = {},
                  i,
                  attr;
                for (i = 0; i < arguments.length; i++) {
                  for (attr in arguments[i]) {
                    if (arguments[i].hasOwnProperty(attr) && typeof result[attr] === 'undefined') {
                      result[attr] = arguments[i][attr];
                    }
                  }
                }
                return result;
              };
              exports3.prepareContent = function (name, inputData, isBinary, isOptimizedBinaryString, isBase64) {
                var promise = external.Promise.resolve(inputData).then(function (data) {
                  var isBlob =
                    support.blob &&
                    (data instanceof Blob ||
                      ['[object File]', '[object Blob]'].indexOf(Object.prototype.toString.call(data)) !== -1);
                  if (isBlob && typeof FileReader !== 'undefined') {
                    return new external.Promise(function (resolve, reject) {
                      var reader = new FileReader();
                      reader.onload = function (e) {
                        resolve(e.target.result);
                      };
                      reader.onerror = function (e) {
                        reject(e.target.error);
                      };
                      reader.readAsArrayBuffer(data);
                    });
                  } else {
                    return data;
                  }
                });
                return promise.then(function (data) {
                  var dataType = exports3.getTypeOf(data);
                  if (!dataType) {
                    return external.Promise.reject(
                      new Error(
                        "Can't read the data of '" +
                          name +
                          "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"
                      )
                    );
                  }
                  if (dataType === 'arraybuffer') {
                    data = exports3.transformTo('uint8array', data);
                  } else if (dataType === 'string') {
                    if (isBase64) {
                      data = base64.decode(data);
                    } else if (isBinary) {
                      if (isOptimizedBinaryString !== true) {
                        data = string2binary(data);
                      }
                    }
                  }
                  return data;
                });
              };
            },
            { './base64': 11, './external': 16, './nodejsUtils': 22, './support': 40, 'set-immediate-shim': 79 }
          ],
          43: [
            function (require2, module3, exports3) {
              'use strict';
              var readerFor = require2('./reader/readerFor');
              var utils = require2('./utils');
              var sig = require2('./signature');
              var ZipEntry = require2('./zipEntry');
              var utf8 = require2('./utf8');
              var support = require2('./support');
              function ZipEntries(loadOptions) {
                this.files = [];
                this.loadOptions = loadOptions;
              }
              ZipEntries.prototype = {
                /**
                 * Check that the reader is on the specified signature.
                 * @param {string} expectedSignature the expected signature.
                 * @throws {Error} if it is an other signature.
                 */
                checkSignature: function (expectedSignature) {
                  if (!this.reader.readAndCheckSignature(expectedSignature)) {
                    this.reader.index -= 4;
                    var signature = this.reader.readString(4);
                    throw new Error(
                      'Corrupted zip or bug: unexpected signature (' +
                        utils.pretty(signature) +
                        ', expected ' +
                        utils.pretty(expectedSignature) +
                        ')'
                    );
                  }
                },
                /**
                 * Check if the given signature is at the given index.
                 * @param {number} askedIndex the index to check.
                 * @param {string} expectedSignature the signature to expect.
                 * @return {boolean} true if the signature is here, false otherwise.
                 */
                isSignature: function (askedIndex, expectedSignature) {
                  var currentIndex = this.reader.index;
                  this.reader.setIndex(askedIndex);
                  var signature = this.reader.readString(4);
                  var result = signature === expectedSignature;
                  this.reader.setIndex(currentIndex);
                  return result;
                },
                /**
                 * Read the end of the central directory.
                 */
                readBlockEndOfCentral: function () {
                  this.diskNumber = this.reader.readInt(2);
                  this.diskWithCentralDirStart = this.reader.readInt(2);
                  this.centralDirRecordsOnThisDisk = this.reader.readInt(2);
                  this.centralDirRecords = this.reader.readInt(2);
                  this.centralDirSize = this.reader.readInt(4);
                  this.centralDirOffset = this.reader.readInt(4);
                  this.zipCommentLength = this.reader.readInt(2);
                  var zipComment = this.reader.readData(this.zipCommentLength);
                  var decodeParamType = support.uint8array ? 'uint8array' : 'array';
                  var decodeContent = utils.transformTo(decodeParamType, zipComment);
                  this.zipComment = this.loadOptions.decodeFileName(decodeContent);
                },
                /**
                 * Read the end of the Zip 64 central directory.
                 * Not merged with the method readEndOfCentral :
                 * The end of central can coexist with its Zip64 brother,
                 * I don't want to read the wrong number of bytes !
                 */
                readBlockZip64EndOfCentral: function () {
                  this.zip64EndOfCentralSize = this.reader.readInt(8);
                  this.reader.skip(4);
                  this.diskNumber = this.reader.readInt(4);
                  this.diskWithCentralDirStart = this.reader.readInt(4);
                  this.centralDirRecordsOnThisDisk = this.reader.readInt(8);
                  this.centralDirRecords = this.reader.readInt(8);
                  this.centralDirSize = this.reader.readInt(8);
                  this.centralDirOffset = this.reader.readInt(8);
                  this.zip64ExtensibleData = {};
                  var extraDataSize = this.zip64EndOfCentralSize - 44,
                    index = 0,
                    extraFieldId,
                    extraFieldLength,
                    extraFieldValue;
                  while (index < extraDataSize) {
                    extraFieldId = this.reader.readInt(2);
                    extraFieldLength = this.reader.readInt(4);
                    extraFieldValue = this.reader.readData(extraFieldLength);
                    this.zip64ExtensibleData[extraFieldId] = {
                      id: extraFieldId,
                      length: extraFieldLength,
                      value: extraFieldValue
                    };
                  }
                },
                /**
                 * Read the end of the Zip 64 central directory locator.
                 */
                readBlockZip64EndOfCentralLocator: function () {
                  this.diskWithZip64CentralDirStart = this.reader.readInt(4);
                  this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8);
                  this.disksCount = this.reader.readInt(4);
                  if (this.disksCount > 1) {
                    throw new Error('Multi-volumes zip are not supported');
                  }
                },
                /**
                 * Read the local files, based on the offset read in the central part.
                 */
                readLocalFiles: function () {
                  var i, file;
                  for (i = 0; i < this.files.length; i++) {
                    file = this.files[i];
                    this.reader.setIndex(file.localHeaderOffset);
                    this.checkSignature(sig.LOCAL_FILE_HEADER);
                    file.readLocalPart(this.reader);
                    file.handleUTF8();
                    file.processAttributes();
                  }
                },
                /**
                 * Read the central directory.
                 */
                readCentralDir: function () {
                  var file;
                  this.reader.setIndex(this.centralDirOffset);
                  while (this.reader.readAndCheckSignature(sig.CENTRAL_FILE_HEADER)) {
                    file = new ZipEntry(
                      {
                        zip64: this.zip64
                      },
                      this.loadOptions
                    );
                    file.readCentralPart(this.reader);
                    this.files.push(file);
                  }
                  if (this.centralDirRecords !== this.files.length) {
                    if (this.centralDirRecords !== 0 && this.files.length === 0) {
                      throw new Error(
                        'Corrupted zip or bug: expected ' +
                          this.centralDirRecords +
                          ' records in central dir, got ' +
                          this.files.length
                      );
                    } else {
                    }
                  }
                },
                /**
                 * Read the end of central directory.
                 */
                readEndOfCentral: function () {
                  var offset = this.reader.lastIndexOfSignature(sig.CENTRAL_DIRECTORY_END);
                  if (offset < 0) {
                    var isGarbage = !this.isSignature(0, sig.LOCAL_FILE_HEADER);
                    if (isGarbage) {
                      throw new Error(
                        "Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html"
                      );
                    } else {
                      throw new Error("Corrupted zip: can't find end of central directory");
                    }
                  }
                  this.reader.setIndex(offset);
                  var endOfCentralDirOffset = offset;
                  this.checkSignature(sig.CENTRAL_DIRECTORY_END);
                  this.readBlockEndOfCentral();
                  if (
                    this.diskNumber === utils.MAX_VALUE_16BITS ||
                    this.diskWithCentralDirStart === utils.MAX_VALUE_16BITS ||
                    this.centralDirRecordsOnThisDisk === utils.MAX_VALUE_16BITS ||
                    this.centralDirRecords === utils.MAX_VALUE_16BITS ||
                    this.centralDirSize === utils.MAX_VALUE_32BITS ||
                    this.centralDirOffset === utils.MAX_VALUE_32BITS
                  ) {
                    this.zip64 = true;
                    offset = this.reader.lastIndexOfSignature(sig.ZIP64_CENTRAL_DIRECTORY_LOCATOR);
                    if (offset < 0) {
                      throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");
                    }
                    this.reader.setIndex(offset);
                    this.checkSignature(sig.ZIP64_CENTRAL_DIRECTORY_LOCATOR);
                    this.readBlockZip64EndOfCentralLocator();
                    if (!this.isSignature(this.relativeOffsetEndOfZip64CentralDir, sig.ZIP64_CENTRAL_DIRECTORY_END)) {
                      this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(sig.ZIP64_CENTRAL_DIRECTORY_END);
                      if (this.relativeOffsetEndOfZip64CentralDir < 0) {
                        throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");
                      }
                    }
                    this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir);
                    this.checkSignature(sig.ZIP64_CENTRAL_DIRECTORY_END);
                    this.readBlockZip64EndOfCentral();
                  }
                  var expectedEndOfCentralDirOffset = this.centralDirOffset + this.centralDirSize;
                  if (this.zip64) {
                    expectedEndOfCentralDirOffset += 20;
                    expectedEndOfCentralDirOffset += 12 + this.zip64EndOfCentralSize;
                  }
                  var extraBytes = endOfCentralDirOffset - expectedEndOfCentralDirOffset;
                  if (extraBytes > 0) {
                    if (this.isSignature(endOfCentralDirOffset, sig.CENTRAL_FILE_HEADER)) {
                    } else {
                      this.reader.zero = extraBytes;
                    }
                  } else if (extraBytes < 0) {
                    throw new Error('Corrupted zip: missing ' + Math.abs(extraBytes) + ' bytes.');
                  }
                },
                prepareReader: function (data) {
                  this.reader = readerFor(data);
                },
                /**
                 * Read a zip file and create ZipEntries.
                 * @param {String|ArrayBuffer|Uint8Array|Buffer} data the binary string representing a zip file.
                 */
                load: function (data) {
                  this.prepareReader(data);
                  this.readEndOfCentral();
                  this.readCentralDir();
                  this.readLocalFiles();
                }
              };
              module3.exports = ZipEntries;
            },
            { './reader/readerFor': 32, './signature': 33, './support': 40, './utf8': 41, './utils': 42, './zipEntry': 44 }
          ],
          44: [
            function (require2, module3, exports3) {
              'use strict';
              var readerFor = require2('./reader/readerFor');
              var utils = require2('./utils');
              var CompressedObject = require2('./compressedObject');
              var crc32fn = require2('./crc32');
              var utf8 = require2('./utf8');
              var compressions = require2('./compressions');
              var support = require2('./support');
              var MADE_BY_DOS = 0;
              var MADE_BY_UNIX = 3;
              var findCompression = function (compressionMethod) {
                for (var method in compressions) {
                  if (!compressions.hasOwnProperty(method)) {
                    continue;
                  }
                  if (compressions[method].magic === compressionMethod) {
                    return compressions[method];
                  }
                }
                return null;
              };
              function ZipEntry(options, loadOptions) {
                this.options = options;
                this.loadOptions = loadOptions;
              }
              ZipEntry.prototype = {
                /**
                 * say if the file is encrypted.
                 * @return {boolean} true if the file is encrypted, false otherwise.
                 */
                isEncrypted: function () {
                  return (this.bitFlag & 1) === 1;
                },
                /**
                 * say if the file has utf-8 filename/comment.
                 * @return {boolean} true if the filename/comment is in utf-8, false otherwise.
                 */
                useUTF8: function () {
                  return (this.bitFlag & 2048) === 2048;
                },
                /**
                 * Read the local part of a zip file and add the info in this object.
                 * @param {DataReader} reader the reader to use.
                 */
                readLocalPart: function (reader) {
                  var compression, localExtraFieldsLength;
                  reader.skip(22);
                  this.fileNameLength = reader.readInt(2);
                  localExtraFieldsLength = reader.readInt(2);
                  this.fileName = reader.readData(this.fileNameLength);
                  reader.skip(localExtraFieldsLength);
                  if (this.compressedSize === -1 || this.uncompressedSize === -1) {
                    throw new Error(
                      "Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)"
                    );
                  }
                  compression = findCompression(this.compressionMethod);
                  if (compression === null) {
                    throw new Error(
                      'Corrupted zip : compression ' +
                        utils.pretty(this.compressionMethod) +
                        ' unknown (inner file : ' +
                        utils.transformTo('string', this.fileName) +
                        ')'
                    );
                  }
                  this.decompressed = new CompressedObject(
                    this.compressedSize,
                    this.uncompressedSize,
                    this.crc32,
                    compression,
                    reader.readData(this.compressedSize)
                  );
                },
                /**
                 * Read the central part of a zip file and add the info in this object.
                 * @param {DataReader} reader the reader to use.
                 */
                readCentralPart: function (reader) {
                  this.versionMadeBy = reader.readInt(2);
                  reader.skip(2);
                  this.bitFlag = reader.readInt(2);
                  this.compressionMethod = reader.readString(2);
                  this.date = reader.readDate();
                  this.crc32 = reader.readInt(4);
                  this.compressedSize = reader.readInt(4);
                  this.uncompressedSize = reader.readInt(4);
                  var fileNameLength = reader.readInt(2);
                  this.extraFieldsLength = reader.readInt(2);
                  this.fileCommentLength = reader.readInt(2);
                  this.diskNumberStart = reader.readInt(2);
                  this.internalFileAttributes = reader.readInt(2);
                  this.externalFileAttributes = reader.readInt(4);
                  this.localHeaderOffset = reader.readInt(4);
                  if (this.isEncrypted()) {
                    throw new Error('Encrypted zip are not supported');
                  }
                  reader.skip(fileNameLength);
                  this.readExtraFields(reader);
                  this.parseZIP64ExtraField(reader);
                  this.fileComment = reader.readData(this.fileCommentLength);
                },
                /**
                 * Parse the external file attributes and get the unix/dos permissions.
                 */
                processAttributes: function () {
                  this.unixPermissions = null;
                  this.dosPermissions = null;
                  var madeBy = this.versionMadeBy >> 8;
                  this.dir = this.externalFileAttributes & 16 ? true : false;
                  if (madeBy === MADE_BY_DOS) {
                    this.dosPermissions = this.externalFileAttributes & 63;
                  }
                  if (madeBy === MADE_BY_UNIX) {
                    this.unixPermissions = (this.externalFileAttributes >> 16) & 65535;
                  }
                  if (!this.dir && this.fileNameStr.slice(-1) === '/') {
                    this.dir = true;
                  }
                },
                /**
                 * Parse the ZIP64 extra field and merge the info in the current ZipEntry.
                 * @param {DataReader} reader the reader to use.
                 */
                parseZIP64ExtraField: function (reader) {
                  if (!this.extraFields[1]) {
                    return;
                  }
                  var extraReader = readerFor(this.extraFields[1].value);
                  if (this.uncompressedSize === utils.MAX_VALUE_32BITS) {
                    this.uncompressedSize = extraReader.readInt(8);
                  }
                  if (this.compressedSize === utils.MAX_VALUE_32BITS) {
                    this.compressedSize = extraReader.readInt(8);
                  }
                  if (this.localHeaderOffset === utils.MAX_VALUE_32BITS) {
                    this.localHeaderOffset = extraReader.readInt(8);
                  }
                  if (this.diskNumberStart === utils.MAX_VALUE_32BITS) {
                    this.diskNumberStart = extraReader.readInt(4);
                  }
                },
                /**
                 * Read the central part of a zip file and add the info in this object.
                 * @param {DataReader} reader the reader to use.
                 */
                readExtraFields: function (reader) {
                  var end = reader.index + this.extraFieldsLength,
                    extraFieldId,
                    extraFieldLength,
                    extraFieldValue;
                  if (!this.extraFields) {
                    this.extraFields = {};
                  }
                  while (reader.index + 4 < end) {
                    extraFieldId = reader.readInt(2);
                    extraFieldLength = reader.readInt(2);
                    extraFieldValue = reader.readData(extraFieldLength);
                    this.extraFields[extraFieldId] = {
                      id: extraFieldId,
                      length: extraFieldLength,
                      value: extraFieldValue
                    };
                  }
                  reader.setIndex(end);
                },
                /**
                 * Apply an UTF8 transformation if needed.
                 */
                handleUTF8: function () {
                  var decodeParamType = support.uint8array ? 'uint8array' : 'array';
                  if (this.useUTF8()) {
                    this.fileNameStr = utf8.utf8decode(this.fileName);
                    this.fileCommentStr = utf8.utf8decode(this.fileComment);
                  } else {
                    var upath = this.findExtraFieldUnicodePath();
                    if (upath !== null) {
                      this.fileNameStr = upath;
                    } else {
                      var fileNameByteArray = utils.transformTo(decodeParamType, this.fileName);
                      this.fileNameStr = this.loadOptions.decodeFileName(fileNameByteArray);
                    }
                    var ucomment = this.findExtraFieldUnicodeComment();
                    if (ucomment !== null) {
                      this.fileCommentStr = ucomment;
                    } else {
                      var commentByteArray = utils.transformTo(decodeParamType, this.fileComment);
                      this.fileCommentStr = this.loadOptions.decodeFileName(commentByteArray);
                    }
                  }
                },
                /**
                 * Find the unicode path declared in the extra field, if any.
                 * @return {String} the unicode path, null otherwise.
                 */
                findExtraFieldUnicodePath: function () {
                  var upathField = this.extraFields[28789];
                  if (upathField) {
                    var extraReader = readerFor(upathField.value);
                    if (extraReader.readInt(1) !== 1) {
                      return null;
                    }
                    if (crc32fn(this.fileName) !== extraReader.readInt(4)) {
                      return null;
                    }
                    return utf8.utf8decode(extraReader.readData(upathField.length - 5));
                  }
                  return null;
                },
                /**
                 * Find the unicode comment declared in the extra field, if any.
                 * @return {String} the unicode comment, null otherwise.
                 */
                findExtraFieldUnicodeComment: function () {
                  var ucommentField = this.extraFields[25461];
                  if (ucommentField) {
                    var extraReader = readerFor(ucommentField.value);
                    if (extraReader.readInt(1) !== 1) {
                      return null;
                    }
                    if (crc32fn(this.fileComment) !== extraReader.readInt(4)) {
                      return null;
                    }
                    return utf8.utf8decode(extraReader.readData(ucommentField.length - 5));
                  }
                  return null;
                }
              };
              module3.exports = ZipEntry;
            },
            {
              './compressedObject': 12,
              './compressions': 13,
              './crc32': 14,
              './reader/readerFor': 32,
              './support': 40,
              './utf8': 41,
              './utils': 42
            }
          ],
          45: [
            function (require2, module3, exports3) {
              'use strict';
              var StreamHelper = require2('./stream/StreamHelper');
              var DataWorker = require2('./stream/DataWorker');
              var utf8 = require2('./utf8');
              var CompressedObject = require2('./compressedObject');
              var GenericWorker = require2('./stream/GenericWorker');
              var ZipObject = function (name, data, options) {
                this.name = name;
                this.dir = options.dir;
                this.date = options.date;
                this.comment = options.comment;
                this.unixPermissions = options.unixPermissions;
                this.dosPermissions = options.dosPermissions;
                this._data = data;
                this._dataBinary = options.binary;
                this.options = {
                  compression: options.compression,
                  compressionOptions: options.compressionOptions
                };
              };
              ZipObject.prototype = {
                /**
                 * Create an internal stream for the content of this object.
                 * @param {String} type the type of each chunk.
                 * @return StreamHelper the stream.
                 */
                internalStream: function (type) {
                  var result = null,
                    outputType = 'string';
                  try {
                    if (!type) {
                      throw new Error('No output type specified.');
                    }
                    outputType = type.toLowerCase();
                    var askUnicodeString = outputType === 'string' || outputType === 'text';
                    if (outputType === 'binarystring' || outputType === 'text') {
                      outputType = 'string';
                    }
                    result = this._decompressWorker();
                    var isUnicodeString = !this._dataBinary;
                    if (isUnicodeString && !askUnicodeString) {
                      result = result.pipe(new utf8.Utf8EncodeWorker());
                    }
                    if (!isUnicodeString && askUnicodeString) {
                      result = result.pipe(new utf8.Utf8DecodeWorker());
                    }
                  } catch (e) {
                    result = new GenericWorker('error');
                    result.error(e);
                  }
                  return new StreamHelper(result, outputType, '');
                },
                /**
                 * Prepare the content in the asked type.
                 * @param {String} type the type of the result.
                 * @param {Function} onUpdate a function to call on each internal update.
                 * @return Promise the promise of the result.
                 */
                async: function (type, onUpdate) {
                  return this.internalStream(type).accumulate(onUpdate);
                },
                /**
                 * Prepare the content as a nodejs stream.
                 * @param {String} type the type of each chunk.
                 * @param {Function} onUpdate a function to call on each internal update.
                 * @return Stream the stream.
                 */
                nodeStream: function (type, onUpdate) {
                  return this.internalStream(type || 'nodebuffer').toNodejsStream(onUpdate);
                },
                /**
                 * Return a worker for the compressed content.
                 * @private
                 * @param {Object} compression the compression object to use.
                 * @param {Object} compressionOptions the options to use when compressing.
                 * @return Worker the worker.
                 */
                _compressWorker: function (compression, compressionOptions) {
                  if (this._data instanceof CompressedObject && this._data.compression.magic === compression.magic) {
                    return this._data.getCompressedWorker();
                  } else {
                    var result = this._decompressWorker();
                    if (!this._dataBinary) {
                      result = result.pipe(new utf8.Utf8EncodeWorker());
                    }
                    return CompressedObject.createWorkerFrom(result, compression, compressionOptions);
                  }
                },
                /**
                 * Return a worker for the decompressed content.
                 * @private
                 * @return Worker the worker.
                 */
                _decompressWorker: function () {
                  if (this._data instanceof CompressedObject) {
                    return this._data.getContentWorker();
                  } else if (this._data instanceof GenericWorker) {
                    return this._data;
                  } else {
                    return new DataWorker(this._data);
                  }
                }
              };
              var removedMethods = ['asText', 'asBinary', 'asNodeBuffer', 'asUint8Array', 'asArrayBuffer'];
              var removedFn = function () {
                throw new Error('This method has been removed in JSZip 3.0, please check the upgrade guide.');
              };
              for (var i = 0; i < removedMethods.length; i++) {
                ZipObject.prototype[removedMethods[i]] = removedFn;
              }
              module3.exports = ZipObject;
            },
            {
              './compressedObject': 12,
              './stream/DataWorker': 37,
              './stream/GenericWorker': 38,
              './stream/StreamHelper': 39,
              './utf8': 41
            }
          ],
          46: [
            function (require2, module3, exports3) {
              'use strict';
              var immediate = require2('immediate');
              function INTERNAL() {}
              var handlers = {};
              var REJECTED = ['REJECTED'];
              var FULFILLED = ['FULFILLED'];
              var PENDING = ['PENDING'];
              module3.exports = Promise2;
              function Promise2(resolver) {
                if (typeof resolver !== 'function') {
                  throw new TypeError('resolver must be a function');
                }
                this.state = PENDING;
                this.queue = [];
                this.outcome = void 0;
                if (resolver !== INTERNAL) {
                  safelyResolveThenable(this, resolver);
                }
              }
              Promise2.prototype['finally'] = function (callback) {
                if (typeof callback !== 'function') {
                  return this;
                }
                var p = this.constructor;
                return this.then(resolve2, reject2);
                function resolve2(value) {
                  function yes() {
                    return value;
                  }
                  return p.resolve(callback()).then(yes);
                }
                function reject2(reason) {
                  function no() {
                    throw reason;
                  }
                  return p.resolve(callback()).then(no);
                }
              };
              Promise2.prototype['catch'] = function (onRejected) {
                return this.then(null, onRejected);
              };
              Promise2.prototype.then = function (onFulfilled, onRejected) {
                if (
                  (typeof onFulfilled !== 'function' && this.state === FULFILLED) ||
                  (typeof onRejected !== 'function' && this.state === REJECTED)
                ) {
                  return this;
                }
                var promise = new this.constructor(INTERNAL);
                if (this.state !== PENDING) {
                  var resolver = this.state === FULFILLED ? onFulfilled : onRejected;
                  unwrap(promise, resolver, this.outcome);
                } else {
                  this.queue.push(new QueueItem(promise, onFulfilled, onRejected));
                }
                return promise;
              };
              function QueueItem(promise, onFulfilled, onRejected) {
                this.promise = promise;
                if (typeof onFulfilled === 'function') {
                  this.onFulfilled = onFulfilled;
                  this.callFulfilled = this.otherCallFulfilled;
                }
                if (typeof onRejected === 'function') {
                  this.onRejected = onRejected;
                  this.callRejected = this.otherCallRejected;
                }
              }
              QueueItem.prototype.callFulfilled = function (value) {
                handlers.resolve(this.promise, value);
              };
              QueueItem.prototype.otherCallFulfilled = function (value) {
                unwrap(this.promise, this.onFulfilled, value);
              };
              QueueItem.prototype.callRejected = function (value) {
                handlers.reject(this.promise, value);
              };
              QueueItem.prototype.otherCallRejected = function (value) {
                unwrap(this.promise, this.onRejected, value);
              };
              function unwrap(promise, func, value) {
                immediate(function () {
                  var returnValue;
                  try {
                    returnValue = func(value);
                  } catch (e) {
                    return handlers.reject(promise, e);
                  }
                  if (returnValue === promise) {
                    handlers.reject(promise, new TypeError('Cannot resolve promise with itself'));
                  } else {
                    handlers.resolve(promise, returnValue);
                  }
                });
              }
              handlers.resolve = function (self2, value) {
                var result = tryCatch(getThen, value);
                if (result.status === 'error') {
                  return handlers.reject(self2, result.value);
                }
                var thenable = result.value;
                if (thenable) {
                  safelyResolveThenable(self2, thenable);
                } else {
                  self2.state = FULFILLED;
                  self2.outcome = value;
                  var i = -1;
                  var len = self2.queue.length;
                  while (++i < len) {
                    self2.queue[i].callFulfilled(value);
                  }
                }
                return self2;
              };
              handlers.reject = function (self2, error) {
                self2.state = REJECTED;
                self2.outcome = error;
                var i = -1;
                var len = self2.queue.length;
                while (++i < len) {
                  self2.queue[i].callRejected(error);
                }
                return self2;
              };
              function getThen(obj) {
                var then = obj && obj.then;
                if (obj && (typeof obj === 'object' || typeof obj === 'function') && typeof then === 'function') {
                  return function appyThen() {
                    then.apply(obj, arguments);
                  };
                }
              }
              function safelyResolveThenable(self2, thenable) {
                var called = false;
                function onError(value) {
                  if (called) {
                    return;
                  }
                  called = true;
                  handlers.reject(self2, value);
                }
                function onSuccess(value) {
                  if (called) {
                    return;
                  }
                  called = true;
                  handlers.resolve(self2, value);
                }
                function tryToUnwrap() {
                  thenable(onSuccess, onError);
                }
                var result = tryCatch(tryToUnwrap);
                if (result.status === 'error') {
                  onError(result.value);
                }
              }
              function tryCatch(func, value) {
                var out = {};
                try {
                  out.value = func(value);
                  out.status = 'success';
                } catch (e) {
                  out.status = 'error';
                  out.value = e;
                }
                return out;
              }
              Promise2.resolve = resolve;
              function resolve(value) {
                if (value instanceof this) {
                  return value;
                }
                return handlers.resolve(new this(INTERNAL), value);
              }
              Promise2.reject = reject;
              function reject(reason) {
                var promise = new this(INTERNAL);
                return handlers.reject(promise, reason);
              }
              Promise2.all = all;
              function all(iterable) {
                var self2 = this;
                if (Object.prototype.toString.call(iterable) !== '[object Array]') {
                  return this.reject(new TypeError('must be an array'));
                }
                var len = iterable.length;
                var called = false;
                if (!len) {
                  return this.resolve([]);
                }
                var values = new Array(len);
                var resolved = 0;
                var i = -1;
                var promise = new this(INTERNAL);
                while (++i < len) {
                  allResolver(iterable[i], i);
                }
                return promise;
                function allResolver(value, i2) {
                  self2.resolve(value).then(resolveFromAll, function (error) {
                    if (!called) {
                      called = true;
                      handlers.reject(promise, error);
                    }
                  });
                  function resolveFromAll(outValue) {
                    values[i2] = outValue;
                    if (++resolved === len && !called) {
                      called = true;
                      handlers.resolve(promise, values);
                    }
                  }
                }
              }
              Promise2.race = race;
              function race(iterable) {
                var self2 = this;
                if (Object.prototype.toString.call(iterable) !== '[object Array]') {
                  return this.reject(new TypeError('must be an array'));
                }
                var len = iterable.length;
                var called = false;
                if (!len) {
                  return this.resolve([]);
                }
                var i = -1;
                var promise = new this(INTERNAL);
                while (++i < len) {
                  resolver(iterable[i]);
                }
                return promise;
                function resolver(value) {
                  self2.resolve(value).then(
                    function (response) {
                      if (!called) {
                        called = true;
                        handlers.resolve(promise, response);
                      }
                    },
                    function (error) {
                      if (!called) {
                        called = true;
                        handlers.reject(promise, error);
                      }
                    }
                  );
                }
              }
            },
            { immediate: 7 }
          ],
          47: [
            function (require2, module3, exports3) {
              'use strict';
              var assign = require2('./lib/utils/common').assign;
              var deflate = require2('./lib/deflate');
              var inflate = require2('./lib/inflate');
              var constants = require2('./lib/zlib/constants');
              var pako = {};
              assign(pako, deflate, inflate, constants);
              module3.exports = pako;
            },
            { './lib/deflate': 48, './lib/inflate': 49, './lib/utils/common': 50, './lib/zlib/constants': 53 }
          ],
          48: [
            function (require2, module3, exports3) {
              'use strict';
              var zlib_deflate = require2('./zlib/deflate');
              var utils = require2('./utils/common');
              var strings = require2('./utils/strings');
              var msg = require2('./zlib/messages');
              var ZStream = require2('./zlib/zstream');
              var toString = Object.prototype.toString;
              var Z_NO_FLUSH = 0;
              var Z_FINISH = 4;
              var Z_OK = 0;
              var Z_STREAM_END = 1;
              var Z_SYNC_FLUSH = 2;
              var Z_DEFAULT_COMPRESSION = -1;
              var Z_DEFAULT_STRATEGY = 0;
              var Z_DEFLATED = 8;
              function Deflate(options) {
                if (!(this instanceof Deflate)) return new Deflate(options);
                this.options = utils.assign(
                  {
                    level: Z_DEFAULT_COMPRESSION,
                    method: Z_DEFLATED,
                    chunkSize: 16384,
                    windowBits: 15,
                    memLevel: 8,
                    strategy: Z_DEFAULT_STRATEGY,
                    to: ''
                  },
                  options || {}
                );
                var opt = this.options;
                if (opt.raw && opt.windowBits > 0) {
                  opt.windowBits = -opt.windowBits;
                } else if (opt.gzip && opt.windowBits > 0 && opt.windowBits < 16) {
                  opt.windowBits += 16;
                }
                this.err = 0;
                this.msg = '';
                this.ended = false;
                this.chunks = [];
                this.strm = new ZStream();
                this.strm.avail_out = 0;
                var status = zlib_deflate.deflateInit2(
                  this.strm,
                  opt.level,
                  opt.method,
                  opt.windowBits,
                  opt.memLevel,
                  opt.strategy
                );
                if (status !== Z_OK) {
                  throw new Error(msg[status]);
                }
                if (opt.header) {
                  zlib_deflate.deflateSetHeader(this.strm, opt.header);
                }
                if (opt.dictionary) {
                  var dict;
                  if (typeof opt.dictionary === 'string') {
                    dict = strings.string2buf(opt.dictionary);
                  } else if (toString.call(opt.dictionary) === '[object ArrayBuffer]') {
                    dict = new Uint8Array(opt.dictionary);
                  } else {
                    dict = opt.dictionary;
                  }
                  status = zlib_deflate.deflateSetDictionary(this.strm, dict);
                  if (status !== Z_OK) {
                    throw new Error(msg[status]);
                  }
                  this._dict_set = true;
                }
              }
              Deflate.prototype.push = function (data, mode) {
                var strm = this.strm;
                var chunkSize = this.options.chunkSize;
                var status, _mode;
                if (this.ended) {
                  return false;
                }
                _mode = mode === ~~mode ? mode : mode === true ? Z_FINISH : Z_NO_FLUSH;
                if (typeof data === 'string') {
                  strm.input = strings.string2buf(data);
                } else if (toString.call(data) === '[object ArrayBuffer]') {
                  strm.input = new Uint8Array(data);
                } else {
                  strm.input = data;
                }
                strm.next_in = 0;
                strm.avail_in = strm.input.length;
                do {
                  if (strm.avail_out === 0) {
                    strm.output = new utils.Buf8(chunkSize);
                    strm.next_out = 0;
                    strm.avail_out = chunkSize;
                  }
                  status = zlib_deflate.deflate(strm, _mode);
                  if (status !== Z_STREAM_END && status !== Z_OK) {
                    this.onEnd(status);
                    this.ended = true;
                    return false;
                  }
                  if (strm.avail_out === 0 || (strm.avail_in === 0 && (_mode === Z_FINISH || _mode === Z_SYNC_FLUSH))) {
                    if (this.options.to === 'string') {
                      this.onData(strings.buf2binstring(utils.shrinkBuf(strm.output, strm.next_out)));
                    } else {
                      this.onData(utils.shrinkBuf(strm.output, strm.next_out));
                    }
                  }
                } while ((strm.avail_in > 0 || strm.avail_out === 0) && status !== Z_STREAM_END);
                if (_mode === Z_FINISH) {
                  status = zlib_deflate.deflateEnd(this.strm);
                  this.onEnd(status);
                  this.ended = true;
                  return status === Z_OK;
                }
                if (_mode === Z_SYNC_FLUSH) {
                  this.onEnd(Z_OK);
                  strm.avail_out = 0;
                  return true;
                }
                return true;
              };
              Deflate.prototype.onData = function (chunk) {
                this.chunks.push(chunk);
              };
              Deflate.prototype.onEnd = function (status) {
                if (status === Z_OK) {
                  if (this.options.to === 'string') {
                    this.result = this.chunks.join('');
                  } else {
                    this.result = utils.flattenChunks(this.chunks);
                  }
                }
                this.chunks = [];
                this.err = status;
                this.msg = this.strm.msg;
              };
              function deflate(input, options) {
                var deflator = new Deflate(options);
                deflator.push(input, true);
                if (deflator.err) {
                  throw deflator.msg || msg[deflator.err];
                }
                return deflator.result;
              }
              function deflateRaw(input, options) {
                options = options || {};
                options.raw = true;
                return deflate(input, options);
              }
              function gzip(input, options) {
                options = options || {};
                options.gzip = true;
                return deflate(input, options);
              }
              exports3.Deflate = Deflate;
              exports3.deflate = deflate;
              exports3.deflateRaw = deflateRaw;
              exports3.gzip = gzip;
            },
            { './utils/common': 50, './utils/strings': 51, './zlib/deflate': 55, './zlib/messages': 60, './zlib/zstream': 62 }
          ],
          49: [
            function (require2, module3, exports3) {
              'use strict';
              var zlib_inflate = require2('./zlib/inflate');
              var utils = require2('./utils/common');
              var strings = require2('./utils/strings');
              var c = require2('./zlib/constants');
              var msg = require2('./zlib/messages');
              var ZStream = require2('./zlib/zstream');
              var GZheader = require2('./zlib/gzheader');
              var toString = Object.prototype.toString;
              function Inflate(options) {
                if (!(this instanceof Inflate)) return new Inflate(options);
                this.options = utils.assign(
                  {
                    chunkSize: 16384,
                    windowBits: 0,
                    to: ''
                  },
                  options || {}
                );
                var opt = this.options;
                if (opt.raw && opt.windowBits >= 0 && opt.windowBits < 16) {
                  opt.windowBits = -opt.windowBits;
                  if (opt.windowBits === 0) {
                    opt.windowBits = -15;
                  }
                }
                if (opt.windowBits >= 0 && opt.windowBits < 16 && !(options && options.windowBits)) {
                  opt.windowBits += 32;
                }
                if (opt.windowBits > 15 && opt.windowBits < 48) {
                  if ((opt.windowBits & 15) === 0) {
                    opt.windowBits |= 15;
                  }
                }
                this.err = 0;
                this.msg = '';
                this.ended = false;
                this.chunks = [];
                this.strm = new ZStream();
                this.strm.avail_out = 0;
                var status = zlib_inflate.inflateInit2(this.strm, opt.windowBits);
                if (status !== c.Z_OK) {
                  throw new Error(msg[status]);
                }
                this.header = new GZheader();
                zlib_inflate.inflateGetHeader(this.strm, this.header);
                if (opt.dictionary) {
                  if (typeof opt.dictionary === 'string') {
                    opt.dictionary = strings.string2buf(opt.dictionary);
                  } else if (toString.call(opt.dictionary) === '[object ArrayBuffer]') {
                    opt.dictionary = new Uint8Array(opt.dictionary);
                  }
                  if (opt.raw) {
                    status = zlib_inflate.inflateSetDictionary(this.strm, opt.dictionary);
                    if (status !== c.Z_OK) {
                      throw new Error(msg[status]);
                    }
                  }
                }
              }
              Inflate.prototype.push = function (data, mode) {
                var strm = this.strm;
                var chunkSize = this.options.chunkSize;
                var dictionary = this.options.dictionary;
                var status, _mode;
                var next_out_utf8, tail, utf8str;
                var allowBufError = false;
                if (this.ended) {
                  return false;
                }
                _mode = mode === ~~mode ? mode : mode === true ? c.Z_FINISH : c.Z_NO_FLUSH;
                if (typeof data === 'string') {
                  strm.input = strings.binstring2buf(data);
                } else if (toString.call(data) === '[object ArrayBuffer]') {
                  strm.input = new Uint8Array(data);
                } else {
                  strm.input = data;
                }
                strm.next_in = 0;
                strm.avail_in = strm.input.length;
                do {
                  if (strm.avail_out === 0) {
                    strm.output = new utils.Buf8(chunkSize);
                    strm.next_out = 0;
                    strm.avail_out = chunkSize;
                  }
                  status = zlib_inflate.inflate(strm, c.Z_NO_FLUSH);
                  if (status === c.Z_NEED_DICT && dictionary) {
                    status = zlib_inflate.inflateSetDictionary(this.strm, dictionary);
                  }
                  if (status === c.Z_BUF_ERROR && allowBufError === true) {
                    status = c.Z_OK;
                    allowBufError = false;
                  }
                  if (status !== c.Z_STREAM_END && status !== c.Z_OK) {
                    this.onEnd(status);
                    this.ended = true;
                    return false;
                  }
                  if (strm.next_out) {
                    if (
                      strm.avail_out === 0 ||
                      status === c.Z_STREAM_END ||
                      (strm.avail_in === 0 && (_mode === c.Z_FINISH || _mode === c.Z_SYNC_FLUSH))
                    ) {
                      if (this.options.to === 'string') {
                        next_out_utf8 = strings.utf8border(strm.output, strm.next_out);
                        tail = strm.next_out - next_out_utf8;
                        utf8str = strings.buf2string(strm.output, next_out_utf8);
                        strm.next_out = tail;
                        strm.avail_out = chunkSize - tail;
                        if (tail) {
                          utils.arraySet(strm.output, strm.output, next_out_utf8, tail, 0);
                        }
                        this.onData(utf8str);
                      } else {
                        this.onData(utils.shrinkBuf(strm.output, strm.next_out));
                      }
                    }
                  }
                  if (strm.avail_in === 0 && strm.avail_out === 0) {
                    allowBufError = true;
                  }
                } while ((strm.avail_in > 0 || strm.avail_out === 0) && status !== c.Z_STREAM_END);
                if (status === c.Z_STREAM_END) {
                  _mode = c.Z_FINISH;
                }
                if (_mode === c.Z_FINISH) {
                  status = zlib_inflate.inflateEnd(this.strm);
                  this.onEnd(status);
                  this.ended = true;
                  return status === c.Z_OK;
                }
                if (_mode === c.Z_SYNC_FLUSH) {
                  this.onEnd(c.Z_OK);
                  strm.avail_out = 0;
                  return true;
                }
                return true;
              };
              Inflate.prototype.onData = function (chunk) {
                this.chunks.push(chunk);
              };
              Inflate.prototype.onEnd = function (status) {
                if (status === c.Z_OK) {
                  if (this.options.to === 'string') {
                    this.result = this.chunks.join('');
                  } else {
                    this.result = utils.flattenChunks(this.chunks);
                  }
                }
                this.chunks = [];
                this.err = status;
                this.msg = this.strm.msg;
              };
              function inflate(input, options) {
                var inflator = new Inflate(options);
                inflator.push(input, true);
                if (inflator.err) {
                  throw inflator.msg || msg[inflator.err];
                }
                return inflator.result;
              }
              function inflateRaw(input, options) {
                options = options || {};
                options.raw = true;
                return inflate(input, options);
              }
              exports3.Inflate = Inflate;
              exports3.inflate = inflate;
              exports3.inflateRaw = inflateRaw;
              exports3.ungzip = inflate;
            },
            {
              './utils/common': 50,
              './utils/strings': 51,
              './zlib/constants': 53,
              './zlib/gzheader': 56,
              './zlib/inflate': 58,
              './zlib/messages': 60,
              './zlib/zstream': 62
            }
          ],
          50: [
            function (require2, module3, exports3) {
              'use strict';
              var TYPED_OK =
                typeof Uint8Array !== 'undefined' && typeof Uint16Array !== 'undefined' && typeof Int32Array !== 'undefined';
              function _has(obj, key) {
                return Object.prototype.hasOwnProperty.call(obj, key);
              }
              exports3.assign = function (obj) {
                var sources = Array.prototype.slice.call(arguments, 1);
                while (sources.length) {
                  var source = sources.shift();
                  if (!source) {
                    continue;
                  }
                  if (typeof source !== 'object') {
                    throw new TypeError(source + 'must be non-object');
                  }
                  for (var p in source) {
                    if (_has(source, p)) {
                      obj[p] = source[p];
                    }
                  }
                }
                return obj;
              };
              exports3.shrinkBuf = function (buf, size) {
                if (buf.length === size) {
                  return buf;
                }
                if (buf.subarray) {
                  return buf.subarray(0, size);
                }
                buf.length = size;
                return buf;
              };
              var fnTyped = {
                arraySet: function (dest, src, src_offs, len, dest_offs) {
                  if (src.subarray && dest.subarray) {
                    dest.set(src.subarray(src_offs, src_offs + len), dest_offs);
                    return;
                  }
                  for (var i = 0; i < len; i++) {
                    dest[dest_offs + i] = src[src_offs + i];
                  }
                },
                // Join array of chunks to single array.
                flattenChunks: function (chunks) {
                  var i, l, len, pos, chunk, result;
                  len = 0;
                  for (i = 0, l = chunks.length; i < l; i++) {
                    len += chunks[i].length;
                  }
                  result = new Uint8Array(len);
                  pos = 0;
                  for (i = 0, l = chunks.length; i < l; i++) {
                    chunk = chunks[i];
                    result.set(chunk, pos);
                    pos += chunk.length;
                  }
                  return result;
                }
              };
              var fnUntyped = {
                arraySet: function (dest, src, src_offs, len, dest_offs) {
                  for (var i = 0; i < len; i++) {
                    dest[dest_offs + i] = src[src_offs + i];
                  }
                },
                // Join array of chunks to single array.
                flattenChunks: function (chunks) {
                  return [].concat.apply([], chunks);
                }
              };
              exports3.setTyped = function (on) {
                if (on) {
                  exports3.Buf8 = Uint8Array;
                  exports3.Buf16 = Uint16Array;
                  exports3.Buf32 = Int32Array;
                  exports3.assign(exports3, fnTyped);
                } else {
                  exports3.Buf8 = Array;
                  exports3.Buf16 = Array;
                  exports3.Buf32 = Array;
                  exports3.assign(exports3, fnUntyped);
                }
              };
              exports3.setTyped(TYPED_OK);
            },
            {}
          ],
          51: [
            function (require2, module3, exports3) {
              'use strict';
              var utils = require2('./common');
              var STR_APPLY_OK = true;
              var STR_APPLY_UIA_OK = true;
              try {
                String.fromCharCode.apply(null, [0]);
              } catch (__) {
                STR_APPLY_OK = false;
              }
              try {
                String.fromCharCode.apply(null, new Uint8Array(1));
              } catch (__) {
                STR_APPLY_UIA_OK = false;
              }
              var _utf8len = new utils.Buf8(256);
              for (var q = 0; q < 256; q++) {
                _utf8len[q] = q >= 252 ? 6 : q >= 248 ? 5 : q >= 240 ? 4 : q >= 224 ? 3 : q >= 192 ? 2 : 1;
              }
              _utf8len[254] = _utf8len[254] = 1;
              exports3.string2buf = function (str) {
                var buf,
                  c,
                  c2,
                  m_pos,
                  i,
                  str_len = str.length,
                  buf_len = 0;
                for (m_pos = 0; m_pos < str_len; m_pos++) {
                  c = str.charCodeAt(m_pos);
                  if ((c & 64512) === 55296 && m_pos + 1 < str_len) {
                    c2 = str.charCodeAt(m_pos + 1);
                    if ((c2 & 64512) === 56320) {
                      c = 65536 + ((c - 55296) << 10) + (c2 - 56320);
                      m_pos++;
                    }
                  }
                  buf_len += c < 128 ? 1 : c < 2048 ? 2 : c < 65536 ? 3 : 4;
                }
                buf = new utils.Buf8(buf_len);
                for (i = 0, m_pos = 0; i < buf_len; m_pos++) {
                  c = str.charCodeAt(m_pos);
                  if ((c & 64512) === 55296 && m_pos + 1 < str_len) {
                    c2 = str.charCodeAt(m_pos + 1);
                    if ((c2 & 64512) === 56320) {
                      c = 65536 + ((c - 55296) << 10) + (c2 - 56320);
                      m_pos++;
                    }
                  }
                  if (c < 128) {
                    buf[i++] = c;
                  } else if (c < 2048) {
                    buf[i++] = 192 | (c >>> 6);
                    buf[i++] = 128 | (c & 63);
                  } else if (c < 65536) {
                    buf[i++] = 224 | (c >>> 12);
                    buf[i++] = 128 | ((c >>> 6) & 63);
                    buf[i++] = 128 | (c & 63);
                  } else {
                    buf[i++] = 240 | (c >>> 18);
                    buf[i++] = 128 | ((c >>> 12) & 63);
                    buf[i++] = 128 | ((c >>> 6) & 63);
                    buf[i++] = 128 | (c & 63);
                  }
                }
                return buf;
              };
              function buf2binstring(buf, len) {
                if (len < 65534) {
                  if ((buf.subarray && STR_APPLY_UIA_OK) || (!buf.subarray && STR_APPLY_OK)) {
                    return String.fromCharCode.apply(null, utils.shrinkBuf(buf, len));
                  }
                }
                var result = '';
                for (var i = 0; i < len; i++) {
                  result += String.fromCharCode(buf[i]);
                }
                return result;
              }
              exports3.buf2binstring = function (buf) {
                return buf2binstring(buf, buf.length);
              };
              exports3.binstring2buf = function (str) {
                var buf = new utils.Buf8(str.length);
                for (var i = 0, len = buf.length; i < len; i++) {
                  buf[i] = str.charCodeAt(i);
                }
                return buf;
              };
              exports3.buf2string = function (buf, max) {
                var i, out, c, c_len;
                var len = max || buf.length;
                var utf16buf = new Array(len * 2);
                for (out = 0, i = 0; i < len; ) {
                  c = buf[i++];
                  if (c < 128) {
                    utf16buf[out++] = c;
                    continue;
                  }
                  c_len = _utf8len[c];
                  if (c_len > 4) {
                    utf16buf[out++] = 65533;
                    i += c_len - 1;
                    continue;
                  }
                  c &= c_len === 2 ? 31 : c_len === 3 ? 15 : 7;
                  while (c_len > 1 && i < len) {
                    c = (c << 6) | (buf[i++] & 63);
                    c_len--;
                  }
                  if (c_len > 1) {
                    utf16buf[out++] = 65533;
                    continue;
                  }
                  if (c < 65536) {
                    utf16buf[out++] = c;
                  } else {
                    c -= 65536;
                    utf16buf[out++] = 55296 | ((c >> 10) & 1023);
                    utf16buf[out++] = 56320 | (c & 1023);
                  }
                }
                return buf2binstring(utf16buf, out);
              };
              exports3.utf8border = function (buf, max) {
                var pos;
                max = max || buf.length;
                if (max > buf.length) {
                  max = buf.length;
                }
                pos = max - 1;
                while (pos >= 0 && (buf[pos] & 192) === 128) {
                  pos--;
                }
                if (pos < 0) {
                  return max;
                }
                if (pos === 0) {
                  return max;
                }
                return pos + _utf8len[buf[pos]] > max ? pos : max;
              };
            },
            { './common': 50 }
          ],
          52: [
            function (require2, module3, exports3) {
              'use strict';
              function adler32(adler, buf, len, pos) {
                var s1 = (adler & 65535) | 0,
                  s2 = ((adler >>> 16) & 65535) | 0,
                  n = 0;
                while (len !== 0) {
                  n = len > 2e3 ? 2e3 : len;
                  len -= n;
                  do {
                    s1 = (s1 + buf[pos++]) | 0;
                    s2 = (s2 + s1) | 0;
                  } while (--n);
                  s1 %= 65521;
                  s2 %= 65521;
                }
                return s1 | (s2 << 16) | 0;
              }
              module3.exports = adler32;
            },
            {}
          ],
          53: [
            function (require2, module3, exports3) {
              'use strict';
              module3.exports = {
                /* Allowed flush values; see deflate() and inflate() below for details */
                Z_NO_FLUSH: 0,
                Z_PARTIAL_FLUSH: 1,
                Z_SYNC_FLUSH: 2,
                Z_FULL_FLUSH: 3,
                Z_FINISH: 4,
                Z_BLOCK: 5,
                Z_TREES: 6,
                /* Return codes for the compression/decompression functions. Negative values
                 * are errors, positive values are used for special but normal events.
                 */
                Z_OK: 0,
                Z_STREAM_END: 1,
                Z_NEED_DICT: 2,
                Z_ERRNO: -1,
                Z_STREAM_ERROR: -2,
                Z_DATA_ERROR: -3,
                //Z_MEM_ERROR:     -4,
                Z_BUF_ERROR: -5,
                //Z_VERSION_ERROR: -6,
                /* compression levels */
                Z_NO_COMPRESSION: 0,
                Z_BEST_SPEED: 1,
                Z_BEST_COMPRESSION: 9,
                Z_DEFAULT_COMPRESSION: -1,
                Z_FILTERED: 1,
                Z_HUFFMAN_ONLY: 2,
                Z_RLE: 3,
                Z_FIXED: 4,
                Z_DEFAULT_STRATEGY: 0,
                /* Possible values of the data_type field (though see inflate()) */
                Z_BINARY: 0,
                Z_TEXT: 1,
                //Z_ASCII:                1, // = Z_TEXT (deprecated)
                Z_UNKNOWN: 2,
                /* The deflate compression method */
                Z_DEFLATED: 8
                //Z_NULL:                 null // Use -1 or null inline, depending on var type
              };
            },
            {}
          ],
          54: [
            function (require2, module3, exports3) {
              'use strict';
              function makeTable() {
                var c,
                  table = [];
                for (var n = 0; n < 256; n++) {
                  c = n;
                  for (var k = 0; k < 8; k++) {
                    c = c & 1 ? 3988292384 ^ (c >>> 1) : c >>> 1;
                  }
                  table[n] = c;
                }
                return table;
              }
              var crcTable = makeTable();
              function crc32(crc, buf, len, pos) {
                var t = crcTable,
                  end = pos + len;
                crc ^= -1;
                for (var i = pos; i < end; i++) {
                  crc = (crc >>> 8) ^ t[(crc ^ buf[i]) & 255];
                }
                return crc ^ -1;
              }
              module3.exports = crc32;
            },
            {}
          ],
          55: [
            function (require2, module3, exports3) {
              'use strict';
              var utils = require2('../utils/common');
              var trees = require2('./trees');
              var adler32 = require2('./adler32');
              var crc32 = require2('./crc32');
              var msg = require2('./messages');
              var Z_NO_FLUSH = 0;
              var Z_PARTIAL_FLUSH = 1;
              var Z_FULL_FLUSH = 3;
              var Z_FINISH = 4;
              var Z_BLOCK = 5;
              var Z_OK = 0;
              var Z_STREAM_END = 1;
              var Z_STREAM_ERROR = -2;
              var Z_DATA_ERROR = -3;
              var Z_BUF_ERROR = -5;
              var Z_DEFAULT_COMPRESSION = -1;
              var Z_FILTERED = 1;
              var Z_HUFFMAN_ONLY = 2;
              var Z_RLE = 3;
              var Z_FIXED = 4;
              var Z_DEFAULT_STRATEGY = 0;
              var Z_UNKNOWN = 2;
              var Z_DEFLATED = 8;
              var MAX_MEM_LEVEL = 9;
              var MAX_WBITS = 15;
              var DEF_MEM_LEVEL = 8;
              var LENGTH_CODES = 29;
              var LITERALS = 256;
              var L_CODES = LITERALS + 1 + LENGTH_CODES;
              var D_CODES = 30;
              var BL_CODES = 19;
              var HEAP_SIZE = 2 * L_CODES + 1;
              var MAX_BITS = 15;
              var MIN_MATCH = 3;
              var MAX_MATCH = 258;
              var MIN_LOOKAHEAD = MAX_MATCH + MIN_MATCH + 1;
              var PRESET_DICT = 32;
              var INIT_STATE = 42;
              var EXTRA_STATE = 69;
              var NAME_STATE = 73;
              var COMMENT_STATE = 91;
              var HCRC_STATE = 103;
              var BUSY_STATE = 113;
              var FINISH_STATE = 666;
              var BS_NEED_MORE = 1;
              var BS_BLOCK_DONE = 2;
              var BS_FINISH_STARTED = 3;
              var BS_FINISH_DONE = 4;
              var OS_CODE = 3;
              function err(strm, errorCode) {
                strm.msg = msg[errorCode];
                return errorCode;
              }
              function rank(f) {
                return (f << 1) - (f > 4 ? 9 : 0);
              }
              function zero(buf) {
                var len = buf.length;
                while (--len >= 0) {
                  buf[len] = 0;
                }
              }
              function flush_pending(strm) {
                var s = strm.state;
                var len = s.pending;
                if (len > strm.avail_out) {
                  len = strm.avail_out;
                }
                if (len === 0) {
                  return;
                }
                utils.arraySet(strm.output, s.pending_buf, s.pending_out, len, strm.next_out);
                strm.next_out += len;
                s.pending_out += len;
                strm.total_out += len;
                strm.avail_out -= len;
                s.pending -= len;
                if (s.pending === 0) {
                  s.pending_out = 0;
                }
              }
              function flush_block_only(s, last) {
                trees._tr_flush_block(s, s.block_start >= 0 ? s.block_start : -1, s.strstart - s.block_start, last);
                s.block_start = s.strstart;
                flush_pending(s.strm);
              }
              function put_byte(s, b) {
                s.pending_buf[s.pending++] = b;
              }
              function putShortMSB(s, b) {
                s.pending_buf[s.pending++] = (b >>> 8) & 255;
                s.pending_buf[s.pending++] = b & 255;
              }
              function read_buf(strm, buf, start, size) {
                var len = strm.avail_in;
                if (len > size) {
                  len = size;
                }
                if (len === 0) {
                  return 0;
                }
                strm.avail_in -= len;
                utils.arraySet(buf, strm.input, strm.next_in, len, start);
                if (strm.state.wrap === 1) {
                  strm.adler = adler32(strm.adler, buf, len, start);
                } else if (strm.state.wrap === 2) {
                  strm.adler = crc32(strm.adler, buf, len, start);
                }
                strm.next_in += len;
                strm.total_in += len;
                return len;
              }
              function longest_match(s, cur_match) {
                var chain_length = s.max_chain_length;
                var scan = s.strstart;
                var match;
                var len;
                var best_len = s.prev_length;
                var nice_match = s.nice_match;
                var limit = s.strstart > s.w_size - MIN_LOOKAHEAD ? s.strstart - (s.w_size - MIN_LOOKAHEAD) : 0;
                var _win = s.window;
                var wmask = s.w_mask;
                var prev = s.prev;
                var strend = s.strstart + MAX_MATCH;
                var scan_end1 = _win[scan + best_len - 1];
                var scan_end = _win[scan + best_len];
                if (s.prev_length >= s.good_match) {
                  chain_length >>= 2;
                }
                if (nice_match > s.lookahead) {
                  nice_match = s.lookahead;
                }
                do {
                  match = cur_match;
                  if (
                    _win[match + best_len] !== scan_end ||
                    _win[match + best_len - 1] !== scan_end1 ||
                    _win[match] !== _win[scan] ||
                    _win[++match] !== _win[scan + 1]
                  ) {
                    continue;
                  }
                  scan += 2;
                  match++;
                  do {} while (
                    _win[++scan] === _win[++match] &&
                    _win[++scan] === _win[++match] &&
                    _win[++scan] === _win[++match] &&
                    _win[++scan] === _win[++match] &&
                    _win[++scan] === _win[++match] &&
                    _win[++scan] === _win[++match] &&
                    _win[++scan] === _win[++match] &&
                    _win[++scan] === _win[++match] &&
                    scan < strend
                  );
                  len = MAX_MATCH - (strend - scan);
                  scan = strend - MAX_MATCH;
                  if (len > best_len) {
                    s.match_start = cur_match;
                    best_len = len;
                    if (len >= nice_match) {
                      break;
                    }
                    scan_end1 = _win[scan + best_len - 1];
                    scan_end = _win[scan + best_len];
                  }
                } while ((cur_match = prev[cur_match & wmask]) > limit && --chain_length !== 0);
                if (best_len <= s.lookahead) {
                  return best_len;
                }
                return s.lookahead;
              }
              function fill_window(s) {
                var _w_size = s.w_size;
                var p, n, m, more, str;
                do {
                  more = s.window_size - s.lookahead - s.strstart;
                  if (s.strstart >= _w_size + (_w_size - MIN_LOOKAHEAD)) {
                    utils.arraySet(s.window, s.window, _w_size, _w_size, 0);
                    s.match_start -= _w_size;
                    s.strstart -= _w_size;
                    s.block_start -= _w_size;
                    n = s.hash_size;
                    p = n;
                    do {
                      m = s.head[--p];
                      s.head[p] = m >= _w_size ? m - _w_size : 0;
                    } while (--n);
                    n = _w_size;
                    p = n;
                    do {
                      m = s.prev[--p];
                      s.prev[p] = m >= _w_size ? m - _w_size : 0;
                    } while (--n);
                    more += _w_size;
                  }
                  if (s.strm.avail_in === 0) {
                    break;
                  }
                  n = read_buf(s.strm, s.window, s.strstart + s.lookahead, more);
                  s.lookahead += n;
                  if (s.lookahead + s.insert >= MIN_MATCH) {
                    str = s.strstart - s.insert;
                    s.ins_h = s.window[str];
                    s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[str + 1]) & s.hash_mask;
                    while (s.insert) {
                      s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[str + MIN_MATCH - 1]) & s.hash_mask;
                      s.prev[str & s.w_mask] = s.head[s.ins_h];
                      s.head[s.ins_h] = str;
                      str++;
                      s.insert--;
                      if (s.lookahead + s.insert < MIN_MATCH) {
                        break;
                      }
                    }
                  }
                } while (s.lookahead < MIN_LOOKAHEAD && s.strm.avail_in !== 0);
              }
              function deflate_stored(s, flush) {
                var max_block_size = 65535;
                if (max_block_size > s.pending_buf_size - 5) {
                  max_block_size = s.pending_buf_size - 5;
                }
                for (;;) {
                  if (s.lookahead <= 1) {
                    fill_window(s);
                    if (s.lookahead === 0 && flush === Z_NO_FLUSH) {
                      return BS_NEED_MORE;
                    }
                    if (s.lookahead === 0) {
                      break;
                    }
                  }
                  s.strstart += s.lookahead;
                  s.lookahead = 0;
                  var max_start = s.block_start + max_block_size;
                  if (s.strstart === 0 || s.strstart >= max_start) {
                    s.lookahead = s.strstart - max_start;
                    s.strstart = max_start;
                    flush_block_only(s, false);
                    if (s.strm.avail_out === 0) {
                      return BS_NEED_MORE;
                    }
                  }
                  if (s.strstart - s.block_start >= s.w_size - MIN_LOOKAHEAD) {
                    flush_block_only(s, false);
                    if (s.strm.avail_out === 0) {
                      return BS_NEED_MORE;
                    }
                  }
                }
                s.insert = 0;
                if (flush === Z_FINISH) {
                  flush_block_only(s, true);
                  if (s.strm.avail_out === 0) {
                    return BS_FINISH_STARTED;
                  }
                  return BS_FINISH_DONE;
                }
                if (s.strstart > s.block_start) {
                  flush_block_only(s, false);
                  if (s.strm.avail_out === 0) {
                    return BS_NEED_MORE;
                  }
                }
                return BS_NEED_MORE;
              }
              function deflate_fast(s, flush) {
                var hash_head;
                var bflush;
                for (;;) {
                  if (s.lookahead < MIN_LOOKAHEAD) {
                    fill_window(s);
                    if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH) {
                      return BS_NEED_MORE;
                    }
                    if (s.lookahead === 0) {
                      break;
                    }
                  }
                  hash_head = 0;
                  if (s.lookahead >= MIN_MATCH) {
                    s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
                    hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
                    s.head[s.ins_h] = s.strstart;
                  }
                  if (hash_head !== 0 && s.strstart - hash_head <= s.w_size - MIN_LOOKAHEAD) {
                    s.match_length = longest_match(s, hash_head);
                  }
                  if (s.match_length >= MIN_MATCH) {
                    bflush = trees._tr_tally(s, s.strstart - s.match_start, s.match_length - MIN_MATCH);
                    s.lookahead -= s.match_length;
                    if (s.match_length <= s.max_lazy_match && s.lookahead >= MIN_MATCH) {
                      s.match_length--;
                      do {
                        s.strstart++;
                        s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
                        hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
                        s.head[s.ins_h] = s.strstart;
                      } while (--s.match_length !== 0);
                      s.strstart++;
                    } else {
                      s.strstart += s.match_length;
                      s.match_length = 0;
                      s.ins_h = s.window[s.strstart];
                      s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[s.strstart + 1]) & s.hash_mask;
                    }
                  } else {
                    bflush = trees._tr_tally(s, 0, s.window[s.strstart]);
                    s.lookahead--;
                    s.strstart++;
                  }
                  if (bflush) {
                    flush_block_only(s, false);
                    if (s.strm.avail_out === 0) {
                      return BS_NEED_MORE;
                    }
                  }
                }
                s.insert = s.strstart < MIN_MATCH - 1 ? s.strstart : MIN_MATCH - 1;
                if (flush === Z_FINISH) {
                  flush_block_only(s, true);
                  if (s.strm.avail_out === 0) {
                    return BS_FINISH_STARTED;
                  }
                  return BS_FINISH_DONE;
                }
                if (s.last_lit) {
                  flush_block_only(s, false);
                  if (s.strm.avail_out === 0) {
                    return BS_NEED_MORE;
                  }
                }
                return BS_BLOCK_DONE;
              }
              function deflate_slow(s, flush) {
                var hash_head;
                var bflush;
                var max_insert;
                for (;;) {
                  if (s.lookahead < MIN_LOOKAHEAD) {
                    fill_window(s);
                    if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH) {
                      return BS_NEED_MORE;
                    }
                    if (s.lookahead === 0) {
                      break;
                    }
                  }
                  hash_head = 0;
                  if (s.lookahead >= MIN_MATCH) {
                    s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
                    hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
                    s.head[s.ins_h] = s.strstart;
                  }
                  s.prev_length = s.match_length;
                  s.prev_match = s.match_start;
                  s.match_length = MIN_MATCH - 1;
                  if (hash_head !== 0 && s.prev_length < s.max_lazy_match && s.strstart - hash_head <= s.w_size - MIN_LOOKAHEAD) {
                    s.match_length = longest_match(s, hash_head);
                    if (
                      s.match_length <= 5 &&
                      (s.strategy === Z_FILTERED || (s.match_length === MIN_MATCH && s.strstart - s.match_start > 4096))
                    ) {
                      s.match_length = MIN_MATCH - 1;
                    }
                  }
                  if (s.prev_length >= MIN_MATCH && s.match_length <= s.prev_length) {
                    max_insert = s.strstart + s.lookahead - MIN_MATCH;
                    bflush = trees._tr_tally(s, s.strstart - 1 - s.prev_match, s.prev_length - MIN_MATCH);
                    s.lookahead -= s.prev_length - 1;
                    s.prev_length -= 2;
                    do {
                      if (++s.strstart <= max_insert) {
                        s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
                        hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
                        s.head[s.ins_h] = s.strstart;
                      }
                    } while (--s.prev_length !== 0);
                    s.match_available = 0;
                    s.match_length = MIN_MATCH - 1;
                    s.strstart++;
                    if (bflush) {
                      flush_block_only(s, false);
                      if (s.strm.avail_out === 0) {
                        return BS_NEED_MORE;
                      }
                    }
                  } else if (s.match_available) {
                    bflush = trees._tr_tally(s, 0, s.window[s.strstart - 1]);
                    if (bflush) {
                      flush_block_only(s, false);
                    }
                    s.strstart++;
                    s.lookahead--;
                    if (s.strm.avail_out === 0) {
                      return BS_NEED_MORE;
                    }
                  } else {
                    s.match_available = 1;
                    s.strstart++;
                    s.lookahead--;
                  }
                }
                if (s.match_available) {
                  bflush = trees._tr_tally(s, 0, s.window[s.strstart - 1]);
                  s.match_available = 0;
                }
                s.insert = s.strstart < MIN_MATCH - 1 ? s.strstart : MIN_MATCH - 1;
                if (flush === Z_FINISH) {
                  flush_block_only(s, true);
                  if (s.strm.avail_out === 0) {
                    return BS_FINISH_STARTED;
                  }
                  return BS_FINISH_DONE;
                }
                if (s.last_lit) {
                  flush_block_only(s, false);
                  if (s.strm.avail_out === 0) {
                    return BS_NEED_MORE;
                  }
                }
                return BS_BLOCK_DONE;
              }
              function deflate_rle(s, flush) {
                var bflush;
                var prev;
                var scan, strend;
                var _win = s.window;
                for (;;) {
                  if (s.lookahead <= MAX_MATCH) {
                    fill_window(s);
                    if (s.lookahead <= MAX_MATCH && flush === Z_NO_FLUSH) {
                      return BS_NEED_MORE;
                    }
                    if (s.lookahead === 0) {
                      break;
                    }
                  }
                  s.match_length = 0;
                  if (s.lookahead >= MIN_MATCH && s.strstart > 0) {
                    scan = s.strstart - 1;
                    prev = _win[scan];
                    if (prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan]) {
                      strend = s.strstart + MAX_MATCH;
                      do {} while (
                        prev === _win[++scan] &&
                        prev === _win[++scan] &&
                        prev === _win[++scan] &&
                        prev === _win[++scan] &&
                        prev === _win[++scan] &&
                        prev === _win[++scan] &&
                        prev === _win[++scan] &&
                        prev === _win[++scan] &&
                        scan < strend
                      );
                      s.match_length = MAX_MATCH - (strend - scan);
                      if (s.match_length > s.lookahead) {
                        s.match_length = s.lookahead;
                      }
                    }
                  }
                  if (s.match_length >= MIN_MATCH) {
                    bflush = trees._tr_tally(s, 1, s.match_length - MIN_MATCH);
                    s.lookahead -= s.match_length;
                    s.strstart += s.match_length;
                    s.match_length = 0;
                  } else {
                    bflush = trees._tr_tally(s, 0, s.window[s.strstart]);
                    s.lookahead--;
                    s.strstart++;
                  }
                  if (bflush) {
                    flush_block_only(s, false);
                    if (s.strm.avail_out === 0) {
                      return BS_NEED_MORE;
                    }
                  }
                }
                s.insert = 0;
                if (flush === Z_FINISH) {
                  flush_block_only(s, true);
                  if (s.strm.avail_out === 0) {
                    return BS_FINISH_STARTED;
                  }
                  return BS_FINISH_DONE;
                }
                if (s.last_lit) {
                  flush_block_only(s, false);
                  if (s.strm.avail_out === 0) {
                    return BS_NEED_MORE;
                  }
                }
                return BS_BLOCK_DONE;
              }
              function deflate_huff(s, flush) {
                var bflush;
                for (;;) {
                  if (s.lookahead === 0) {
                    fill_window(s);
                    if (s.lookahead === 0) {
                      if (flush === Z_NO_FLUSH) {
                        return BS_NEED_MORE;
                      }
                      break;
                    }
                  }
                  s.match_length = 0;
                  bflush = trees._tr_tally(s, 0, s.window[s.strstart]);
                  s.lookahead--;
                  s.strstart++;
                  if (bflush) {
                    flush_block_only(s, false);
                    if (s.strm.avail_out === 0) {
                      return BS_NEED_MORE;
                    }
                  }
                }
                s.insert = 0;
                if (flush === Z_FINISH) {
                  flush_block_only(s, true);
                  if (s.strm.avail_out === 0) {
                    return BS_FINISH_STARTED;
                  }
                  return BS_FINISH_DONE;
                }
                if (s.last_lit) {
                  flush_block_only(s, false);
                  if (s.strm.avail_out === 0) {
                    return BS_NEED_MORE;
                  }
                }
                return BS_BLOCK_DONE;
              }
              function Config(good_length, max_lazy, nice_length, max_chain, func) {
                this.good_length = good_length;
                this.max_lazy = max_lazy;
                this.nice_length = nice_length;
                this.max_chain = max_chain;
                this.func = func;
              }
              var configuration_table;
              configuration_table = [
                /*      good lazy nice chain */
                new Config(0, 0, 0, 0, deflate_stored),
                /* 0 store only */
                new Config(4, 4, 8, 4, deflate_fast),
                /* 1 max speed, no lazy matches */
                new Config(4, 5, 16, 8, deflate_fast),
                /* 2 */
                new Config(4, 6, 32, 32, deflate_fast),
                /* 3 */
                new Config(4, 4, 16, 16, deflate_slow),
                /* 4 lazy matches */
                new Config(8, 16, 32, 32, deflate_slow),
                /* 5 */
                new Config(8, 16, 128, 128, deflate_slow),
                /* 6 */
                new Config(8, 32, 128, 256, deflate_slow),
                /* 7 */
                new Config(32, 128, 258, 1024, deflate_slow),
                /* 8 */
                new Config(32, 258, 258, 4096, deflate_slow)
                /* 9 max compression */
              ];
              function lm_init(s) {
                s.window_size = 2 * s.w_size;
                zero(s.head);
                s.max_lazy_match = configuration_table[s.level].max_lazy;
                s.good_match = configuration_table[s.level].good_length;
                s.nice_match = configuration_table[s.level].nice_length;
                s.max_chain_length = configuration_table[s.level].max_chain;
                s.strstart = 0;
                s.block_start = 0;
                s.lookahead = 0;
                s.insert = 0;
                s.match_length = s.prev_length = MIN_MATCH - 1;
                s.match_available = 0;
                s.ins_h = 0;
              }
              function DeflateState() {
                this.strm = null;
                this.status = 0;
                this.pending_buf = null;
                this.pending_buf_size = 0;
                this.pending_out = 0;
                this.pending = 0;
                this.wrap = 0;
                this.gzhead = null;
                this.gzindex = 0;
                this.method = Z_DEFLATED;
                this.last_flush = -1;
                this.w_size = 0;
                this.w_bits = 0;
                this.w_mask = 0;
                this.window = null;
                this.window_size = 0;
                this.prev = null;
                this.head = null;
                this.ins_h = 0;
                this.hash_size = 0;
                this.hash_bits = 0;
                this.hash_mask = 0;
                this.hash_shift = 0;
                this.block_start = 0;
                this.match_length = 0;
                this.prev_match = 0;
                this.match_available = 0;
                this.strstart = 0;
                this.match_start = 0;
                this.lookahead = 0;
                this.prev_length = 0;
                this.max_chain_length = 0;
                this.max_lazy_match = 0;
                this.level = 0;
                this.strategy = 0;
                this.good_match = 0;
                this.nice_match = 0;
                this.dyn_ltree = new utils.Buf16(HEAP_SIZE * 2);
                this.dyn_dtree = new utils.Buf16((2 * D_CODES + 1) * 2);
                this.bl_tree = new utils.Buf16((2 * BL_CODES + 1) * 2);
                zero(this.dyn_ltree);
                zero(this.dyn_dtree);
                zero(this.bl_tree);
                this.l_desc = null;
                this.d_desc = null;
                this.bl_desc = null;
                this.bl_count = new utils.Buf16(MAX_BITS + 1);
                this.heap = new utils.Buf16(2 * L_CODES + 1);
                zero(this.heap);
                this.heap_len = 0;
                this.heap_max = 0;
                this.depth = new utils.Buf16(2 * L_CODES + 1);
                zero(this.depth);
                this.l_buf = 0;
                this.lit_bufsize = 0;
                this.last_lit = 0;
                this.d_buf = 0;
                this.opt_len = 0;
                this.static_len = 0;
                this.matches = 0;
                this.insert = 0;
                this.bi_buf = 0;
                this.bi_valid = 0;
              }
              function deflateResetKeep(strm) {
                var s;
                if (!strm || !strm.state) {
                  return err(strm, Z_STREAM_ERROR);
                }
                strm.total_in = strm.total_out = 0;
                strm.data_type = Z_UNKNOWN;
                s = strm.state;
                s.pending = 0;
                s.pending_out = 0;
                if (s.wrap < 0) {
                  s.wrap = -s.wrap;
                }
                s.status = s.wrap ? INIT_STATE : BUSY_STATE;
                strm.adler = s.wrap === 2 ? 0 : 1;
                s.last_flush = Z_NO_FLUSH;
                trees._tr_init(s);
                return Z_OK;
              }
              function deflateReset(strm) {
                var ret = deflateResetKeep(strm);
                if (ret === Z_OK) {
                  lm_init(strm.state);
                }
                return ret;
              }
              function deflateSetHeader(strm, head) {
                if (!strm || !strm.state) {
                  return Z_STREAM_ERROR;
                }
                if (strm.state.wrap !== 2) {
                  return Z_STREAM_ERROR;
                }
                strm.state.gzhead = head;
                return Z_OK;
              }
              function deflateInit2(strm, level, method, windowBits, memLevel, strategy) {
                if (!strm) {
                  return Z_STREAM_ERROR;
                }
                var wrap = 1;
                if (level === Z_DEFAULT_COMPRESSION) {
                  level = 6;
                }
                if (windowBits < 0) {
                  wrap = 0;
                  windowBits = -windowBits;
                } else if (windowBits > 15) {
                  wrap = 2;
                  windowBits -= 16;
                }
                if (
                  memLevel < 1 ||
                  memLevel > MAX_MEM_LEVEL ||
                  method !== Z_DEFLATED ||
                  windowBits < 8 ||
                  windowBits > 15 ||
                  level < 0 ||
                  level > 9 ||
                  strategy < 0 ||
                  strategy > Z_FIXED
                ) {
                  return err(strm, Z_STREAM_ERROR);
                }
                if (windowBits === 8) {
                  windowBits = 9;
                }
                var s = new DeflateState();
                strm.state = s;
                s.strm = strm;
                s.wrap = wrap;
                s.gzhead = null;
                s.w_bits = windowBits;
                s.w_size = 1 << s.w_bits;
                s.w_mask = s.w_size - 1;
                s.hash_bits = memLevel + 7;
                s.hash_size = 1 << s.hash_bits;
                s.hash_mask = s.hash_size - 1;
                s.hash_shift = ~~((s.hash_bits + MIN_MATCH - 1) / MIN_MATCH);
                s.window = new utils.Buf8(s.w_size * 2);
                s.head = new utils.Buf16(s.hash_size);
                s.prev = new utils.Buf16(s.w_size);
                s.lit_bufsize = 1 << (memLevel + 6);
                s.pending_buf_size = s.lit_bufsize * 4;
                s.pending_buf = new utils.Buf8(s.pending_buf_size);
                s.d_buf = 1 * s.lit_bufsize;
                s.l_buf = (1 + 2) * s.lit_bufsize;
                s.level = level;
                s.strategy = strategy;
                s.method = method;
                return deflateReset(strm);
              }
              function deflateInit(strm, level) {
                return deflateInit2(strm, level, Z_DEFLATED, MAX_WBITS, DEF_MEM_LEVEL, Z_DEFAULT_STRATEGY);
              }
              function deflate(strm, flush) {
                var old_flush, s;
                var beg, val;
                if (!strm || !strm.state || flush > Z_BLOCK || flush < 0) {
                  return strm ? err(strm, Z_STREAM_ERROR) : Z_STREAM_ERROR;
                }
                s = strm.state;
                if (!strm.output || (!strm.input && strm.avail_in !== 0) || (s.status === FINISH_STATE && flush !== Z_FINISH)) {
                  return err(strm, strm.avail_out === 0 ? Z_BUF_ERROR : Z_STREAM_ERROR);
                }
                s.strm = strm;
                old_flush = s.last_flush;
                s.last_flush = flush;
                if (s.status === INIT_STATE) {
                  if (s.wrap === 2) {
                    strm.adler = 0;
                    put_byte(s, 31);
                    put_byte(s, 139);
                    put_byte(s, 8);
                    if (!s.gzhead) {
                      put_byte(s, 0);
                      put_byte(s, 0);
                      put_byte(s, 0);
                      put_byte(s, 0);
                      put_byte(s, 0);
                      put_byte(s, s.level === 9 ? 2 : s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ? 4 : 0);
                      put_byte(s, OS_CODE);
                      s.status = BUSY_STATE;
                    } else {
                      put_byte(
                        s,
                        (s.gzhead.text ? 1 : 0) +
                          (s.gzhead.hcrc ? 2 : 0) +
                          (!s.gzhead.extra ? 0 : 4) +
                          (!s.gzhead.name ? 0 : 8) +
                          (!s.gzhead.comment ? 0 : 16)
                      );
                      put_byte(s, s.gzhead.time & 255);
                      put_byte(s, (s.gzhead.time >> 8) & 255);
                      put_byte(s, (s.gzhead.time >> 16) & 255);
                      put_byte(s, (s.gzhead.time >> 24) & 255);
                      put_byte(s, s.level === 9 ? 2 : s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ? 4 : 0);
                      put_byte(s, s.gzhead.os & 255);
                      if (s.gzhead.extra && s.gzhead.extra.length) {
                        put_byte(s, s.gzhead.extra.length & 255);
                        put_byte(s, (s.gzhead.extra.length >> 8) & 255);
                      }
                      if (s.gzhead.hcrc) {
                        strm.adler = crc32(strm.adler, s.pending_buf, s.pending, 0);
                      }
                      s.gzindex = 0;
                      s.status = EXTRA_STATE;
                    }
                  } else {
                    var header = (Z_DEFLATED + ((s.w_bits - 8) << 4)) << 8;
                    var level_flags = -1;
                    if (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2) {
                      level_flags = 0;
                    } else if (s.level < 6) {
                      level_flags = 1;
                    } else if (s.level === 6) {
                      level_flags = 2;
                    } else {
                      level_flags = 3;
                    }
                    header |= level_flags << 6;
                    if (s.strstart !== 0) {
                      header |= PRESET_DICT;
                    }
                    header += 31 - (header % 31);
                    s.status = BUSY_STATE;
                    putShortMSB(s, header);
                    if (s.strstart !== 0) {
                      putShortMSB(s, strm.adler >>> 16);
                      putShortMSB(s, strm.adler & 65535);
                    }
                    strm.adler = 1;
                  }
                }
                if (s.status === EXTRA_STATE) {
                  if (s.gzhead.extra) {
                    beg = s.pending;
                    while (s.gzindex < (s.gzhead.extra.length & 65535)) {
                      if (s.pending === s.pending_buf_size) {
                        if (s.gzhead.hcrc && s.pending > beg) {
                          strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
                        }
                        flush_pending(strm);
                        beg = s.pending;
                        if (s.pending === s.pending_buf_size) {
                          break;
                        }
                      }
                      put_byte(s, s.gzhead.extra[s.gzindex] & 255);
                      s.gzindex++;
                    }
                    if (s.gzhead.hcrc && s.pending > beg) {
                      strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
                    }
                    if (s.gzindex === s.gzhead.extra.length) {
                      s.gzindex = 0;
                      s.status = NAME_STATE;
                    }
                  } else {
                    s.status = NAME_STATE;
                  }
                }
                if (s.status === NAME_STATE) {
                  if (s.gzhead.name) {
                    beg = s.pending;
                    do {
                      if (s.pending === s.pending_buf_size) {
                        if (s.gzhead.hcrc && s.pending > beg) {
                          strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
                        }
                        flush_pending(strm);
                        beg = s.pending;
                        if (s.pending === s.pending_buf_size) {
                          val = 1;
                          break;
                        }
                      }
                      if (s.gzindex < s.gzhead.name.length) {
                        val = s.gzhead.name.charCodeAt(s.gzindex++) & 255;
                      } else {
                        val = 0;
                      }
                      put_byte(s, val);
                    } while (val !== 0);
                    if (s.gzhead.hcrc && s.pending > beg) {
                      strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
                    }
                    if (val === 0) {
                      s.gzindex = 0;
                      s.status = COMMENT_STATE;
                    }
                  } else {
                    s.status = COMMENT_STATE;
                  }
                }
                if (s.status === COMMENT_STATE) {
                  if (s.gzhead.comment) {
                    beg = s.pending;
                    do {
                      if (s.pending === s.pending_buf_size) {
                        if (s.gzhead.hcrc && s.pending > beg) {
                          strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
                        }
                        flush_pending(strm);
                        beg = s.pending;
                        if (s.pending === s.pending_buf_size) {
                          val = 1;
                          break;
                        }
                      }
                      if (s.gzindex < s.gzhead.comment.length) {
                        val = s.gzhead.comment.charCodeAt(s.gzindex++) & 255;
                      } else {
                        val = 0;
                      }
                      put_byte(s, val);
                    } while (val !== 0);
                    if (s.gzhead.hcrc && s.pending > beg) {
                      strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
                    }
                    if (val === 0) {
                      s.status = HCRC_STATE;
                    }
                  } else {
                    s.status = HCRC_STATE;
                  }
                }
                if (s.status === HCRC_STATE) {
                  if (s.gzhead.hcrc) {
                    if (s.pending + 2 > s.pending_buf_size) {
                      flush_pending(strm);
                    }
                    if (s.pending + 2 <= s.pending_buf_size) {
                      put_byte(s, strm.adler & 255);
                      put_byte(s, (strm.adler >> 8) & 255);
                      strm.adler = 0;
                      s.status = BUSY_STATE;
                    }
                  } else {
                    s.status = BUSY_STATE;
                  }
                }
                if (s.pending !== 0) {
                  flush_pending(strm);
                  if (strm.avail_out === 0) {
                    s.last_flush = -1;
                    return Z_OK;
                  }
                } else if (strm.avail_in === 0 && rank(flush) <= rank(old_flush) && flush !== Z_FINISH) {
                  return err(strm, Z_BUF_ERROR);
                }
                if (s.status === FINISH_STATE && strm.avail_in !== 0) {
                  return err(strm, Z_BUF_ERROR);
                }
                if (strm.avail_in !== 0 || s.lookahead !== 0 || (flush !== Z_NO_FLUSH && s.status !== FINISH_STATE)) {
                  var bstate =
                    s.strategy === Z_HUFFMAN_ONLY
                      ? deflate_huff(s, flush)
                      : s.strategy === Z_RLE
                        ? deflate_rle(s, flush)
                        : configuration_table[s.level].func(s, flush);
                  if (bstate === BS_FINISH_STARTED || bstate === BS_FINISH_DONE) {
                    s.status = FINISH_STATE;
                  }
                  if (bstate === BS_NEED_MORE || bstate === BS_FINISH_STARTED) {
                    if (strm.avail_out === 0) {
                      s.last_flush = -1;
                    }
                    return Z_OK;
                  }
                  if (bstate === BS_BLOCK_DONE) {
                    if (flush === Z_PARTIAL_FLUSH) {
                      trees._tr_align(s);
                    } else if (flush !== Z_BLOCK) {
                      trees._tr_stored_block(s, 0, 0, false);
                      if (flush === Z_FULL_FLUSH) {
                        zero(s.head);
                        if (s.lookahead === 0) {
                          s.strstart = 0;
                          s.block_start = 0;
                          s.insert = 0;
                        }
                      }
                    }
                    flush_pending(strm);
                    if (strm.avail_out === 0) {
                      s.last_flush = -1;
                      return Z_OK;
                    }
                  }
                }
                if (flush !== Z_FINISH) {
                  return Z_OK;
                }
                if (s.wrap <= 0) {
                  return Z_STREAM_END;
                }
                if (s.wrap === 2) {
                  put_byte(s, strm.adler & 255);
                  put_byte(s, (strm.adler >> 8) & 255);
                  put_byte(s, (strm.adler >> 16) & 255);
                  put_byte(s, (strm.adler >> 24) & 255);
                  put_byte(s, strm.total_in & 255);
                  put_byte(s, (strm.total_in >> 8) & 255);
                  put_byte(s, (strm.total_in >> 16) & 255);
                  put_byte(s, (strm.total_in >> 24) & 255);
                } else {
                  putShortMSB(s, strm.adler >>> 16);
                  putShortMSB(s, strm.adler & 65535);
                }
                flush_pending(strm);
                if (s.wrap > 0) {
                  s.wrap = -s.wrap;
                }
                return s.pending !== 0 ? Z_OK : Z_STREAM_END;
              }
              function deflateEnd(strm) {
                var status;
                if (!strm || !strm.state) {
                  return Z_STREAM_ERROR;
                }
                status = strm.state.status;
                if (
                  status !== INIT_STATE &&
                  status !== EXTRA_STATE &&
                  status !== NAME_STATE &&
                  status !== COMMENT_STATE &&
                  status !== HCRC_STATE &&
                  status !== BUSY_STATE &&
                  status !== FINISH_STATE
                ) {
                  return err(strm, Z_STREAM_ERROR);
                }
                strm.state = null;
                return status === BUSY_STATE ? err(strm, Z_DATA_ERROR) : Z_OK;
              }
              function deflateSetDictionary(strm, dictionary) {
                var dictLength = dictionary.length;
                var s;
                var str, n;
                var wrap;
                var avail;
                var next;
                var input;
                var tmpDict;
                if (!strm || !strm.state) {
                  return Z_STREAM_ERROR;
                }
                s = strm.state;
                wrap = s.wrap;
                if (wrap === 2 || (wrap === 1 && s.status !== INIT_STATE) || s.lookahead) {
                  return Z_STREAM_ERROR;
                }
                if (wrap === 1) {
                  strm.adler = adler32(strm.adler, dictionary, dictLength, 0);
                }
                s.wrap = 0;
                if (dictLength >= s.w_size) {
                  if (wrap === 0) {
                    zero(s.head);
                    s.strstart = 0;
                    s.block_start = 0;
                    s.insert = 0;
                  }
                  tmpDict = new utils.Buf8(s.w_size);
                  utils.arraySet(tmpDict, dictionary, dictLength - s.w_size, s.w_size, 0);
                  dictionary = tmpDict;
                  dictLength = s.w_size;
                }
                avail = strm.avail_in;
                next = strm.next_in;
                input = strm.input;
                strm.avail_in = dictLength;
                strm.next_in = 0;
                strm.input = dictionary;
                fill_window(s);
                while (s.lookahead >= MIN_MATCH) {
                  str = s.strstart;
                  n = s.lookahead - (MIN_MATCH - 1);
                  do {
                    s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[str + MIN_MATCH - 1]) & s.hash_mask;
                    s.prev[str & s.w_mask] = s.head[s.ins_h];
                    s.head[s.ins_h] = str;
                    str++;
                  } while (--n);
                  s.strstart = str;
                  s.lookahead = MIN_MATCH - 1;
                  fill_window(s);
                }
                s.strstart += s.lookahead;
                s.block_start = s.strstart;
                s.insert = s.lookahead;
                s.lookahead = 0;
                s.match_length = s.prev_length = MIN_MATCH - 1;
                s.match_available = 0;
                strm.next_in = next;
                strm.input = input;
                strm.avail_in = avail;
                s.wrap = wrap;
                return Z_OK;
              }
              exports3.deflateInit = deflateInit;
              exports3.deflateInit2 = deflateInit2;
              exports3.deflateReset = deflateReset;
              exports3.deflateResetKeep = deflateResetKeep;
              exports3.deflateSetHeader = deflateSetHeader;
              exports3.deflate = deflate;
              exports3.deflateEnd = deflateEnd;
              exports3.deflateSetDictionary = deflateSetDictionary;
              exports3.deflateInfo = 'pako deflate (from Nodeca project)';
            },
            { '../utils/common': 50, './adler32': 52, './crc32': 54, './messages': 60, './trees': 61 }
          ],
          56: [
            function (require2, module3, exports3) {
              'use strict';
              function GZheader() {
                this.text = 0;
                this.time = 0;
                this.xflags = 0;
                this.os = 0;
                this.extra = null;
                this.extra_len = 0;
                this.name = '';
                this.comment = '';
                this.hcrc = 0;
                this.done = false;
              }
              module3.exports = GZheader;
            },
            {}
          ],
          57: [
            function (require2, module3, exports3) {
              'use strict';
              var BAD = 30;
              var TYPE = 12;
              module3.exports = function inflate_fast(strm, start) {
                var state;
                var _in;
                var last;
                var _out;
                var beg;
                var end;
                var dmax;
                var wsize;
                var whave;
                var wnext;
                var s_window;
                var hold;
                var bits;
                var lcode;
                var dcode;
                var lmask;
                var dmask;
                var here;
                var op;
                var len;
                var dist;
                var from;
                var from_source;
                var input, output;
                state = strm.state;
                _in = strm.next_in;
                input = strm.input;
                last = _in + (strm.avail_in - 5);
                _out = strm.next_out;
                output = strm.output;
                beg = _out - (start - strm.avail_out);
                end = _out + (strm.avail_out - 257);
                dmax = state.dmax;
                wsize = state.wsize;
                whave = state.whave;
                wnext = state.wnext;
                s_window = state.window;
                hold = state.hold;
                bits = state.bits;
                lcode = state.lencode;
                dcode = state.distcode;
                lmask = (1 << state.lenbits) - 1;
                dmask = (1 << state.distbits) - 1;
                top: do {
                  if (bits < 15) {
                    hold += input[_in++] << bits;
                    bits += 8;
                    hold += input[_in++] << bits;
                    bits += 8;
                  }
                  here = lcode[hold & lmask];
                  dolen: for (;;) {
                    op = here >>> 24;
                    hold >>>= op;
                    bits -= op;
                    op = (here >>> 16) & 255;
                    if (op === 0) {
                      output[_out++] = here & 65535;
                    } else if (op & 16) {
                      len = here & 65535;
                      op &= 15;
                      if (op) {
                        if (bits < op) {
                          hold += input[_in++] << bits;
                          bits += 8;
                        }
                        len += hold & ((1 << op) - 1);
                        hold >>>= op;
                        bits -= op;
                      }
                      if (bits < 15) {
                        hold += input[_in++] << bits;
                        bits += 8;
                        hold += input[_in++] << bits;
                        bits += 8;
                      }
                      here = dcode[hold & dmask];
                      dodist: for (;;) {
                        op = here >>> 24;
                        hold >>>= op;
                        bits -= op;
                        op = (here >>> 16) & 255;
                        if (op & 16) {
                          dist = here & 65535;
                          op &= 15;
                          if (bits < op) {
                            hold += input[_in++] << bits;
                            bits += 8;
                            if (bits < op) {
                              hold += input[_in++] << bits;
                              bits += 8;
                            }
                          }
                          dist += hold & ((1 << op) - 1);
                          if (dist > dmax) {
                            strm.msg = 'invalid distance too far back';
                            state.mode = BAD;
                            break top;
                          }
                          hold >>>= op;
                          bits -= op;
                          op = _out - beg;
                          if (dist > op) {
                            op = dist - op;
                            if (op > whave) {
                              if (state.sane) {
                                strm.msg = 'invalid distance too far back';
                                state.mode = BAD;
                                break top;
                              }
                            }
                            from = 0;
                            from_source = s_window;
                            if (wnext === 0) {
                              from += wsize - op;
                              if (op < len) {
                                len -= op;
                                do {
                                  output[_out++] = s_window[from++];
                                } while (--op);
                                from = _out - dist;
                                from_source = output;
                              }
                            } else if (wnext < op) {
                              from += wsize + wnext - op;
                              op -= wnext;
                              if (op < len) {
                                len -= op;
                                do {
                                  output[_out++] = s_window[from++];
                                } while (--op);
                                from = 0;
                                if (wnext < len) {
                                  op = wnext;
                                  len -= op;
                                  do {
                                    output[_out++] = s_window[from++];
                                  } while (--op);
                                  from = _out - dist;
                                  from_source = output;
                                }
                              }
                            } else {
                              from += wnext - op;
                              if (op < len) {
                                len -= op;
                                do {
                                  output[_out++] = s_window[from++];
                                } while (--op);
                                from = _out - dist;
                                from_source = output;
                              }
                            }
                            while (len > 2) {
                              output[_out++] = from_source[from++];
                              output[_out++] = from_source[from++];
                              output[_out++] = from_source[from++];
                              len -= 3;
                            }
                            if (len) {
                              output[_out++] = from_source[from++];
                              if (len > 1) {
                                output[_out++] = from_source[from++];
                              }
                            }
                          } else {
                            from = _out - dist;
                            do {
                              output[_out++] = output[from++];
                              output[_out++] = output[from++];
                              output[_out++] = output[from++];
                              len -= 3;
                            } while (len > 2);
                            if (len) {
                              output[_out++] = output[from++];
                              if (len > 1) {
                                output[_out++] = output[from++];
                              }
                            }
                          }
                        } else if ((op & 64) === 0) {
                          here = dcode[(here & 65535) + (hold & ((1 << op) - 1))];
                          continue dodist;
                        } else {
                          strm.msg = 'invalid distance code';
                          state.mode = BAD;
                          break top;
                        }
                        break;
                      }
                    } else if ((op & 64) === 0) {
                      here = lcode[(here & 65535) + (hold & ((1 << op) - 1))];
                      continue dolen;
                    } else if (op & 32) {
                      state.mode = TYPE;
                      break top;
                    } else {
                      strm.msg = 'invalid literal/length code';
                      state.mode = BAD;
                      break top;
                    }
                    break;
                  }
                } while (_in < last && _out < end);
                len = bits >> 3;
                _in -= len;
                bits -= len << 3;
                hold &= (1 << bits) - 1;
                strm.next_in = _in;
                strm.next_out = _out;
                strm.avail_in = _in < last ? 5 + (last - _in) : 5 - (_in - last);
                strm.avail_out = _out < end ? 257 + (end - _out) : 257 - (_out - end);
                state.hold = hold;
                state.bits = bits;
                return;
              };
            },
            {}
          ],
          58: [
            function (require2, module3, exports3) {
              'use strict';
              var utils = require2('../utils/common');
              var adler32 = require2('./adler32');
              var crc32 = require2('./crc32');
              var inflate_fast = require2('./inffast');
              var inflate_table = require2('./inftrees');
              var CODES = 0;
              var LENS = 1;
              var DISTS = 2;
              var Z_FINISH = 4;
              var Z_BLOCK = 5;
              var Z_TREES = 6;
              var Z_OK = 0;
              var Z_STREAM_END = 1;
              var Z_NEED_DICT = 2;
              var Z_STREAM_ERROR = -2;
              var Z_DATA_ERROR = -3;
              var Z_MEM_ERROR = -4;
              var Z_BUF_ERROR = -5;
              var Z_DEFLATED = 8;
              var HEAD = 1;
              var FLAGS = 2;
              var TIME = 3;
              var OS = 4;
              var EXLEN = 5;
              var EXTRA = 6;
              var NAME = 7;
              var COMMENT = 8;
              var HCRC = 9;
              var DICTID = 10;
              var DICT = 11;
              var TYPE = 12;
              var TYPEDO = 13;
              var STORED = 14;
              var COPY_ = 15;
              var COPY = 16;
              var TABLE = 17;
              var LENLENS = 18;
              var CODELENS = 19;
              var LEN_ = 20;
              var LEN = 21;
              var LENEXT = 22;
              var DIST = 23;
              var DISTEXT = 24;
              var MATCH = 25;
              var LIT = 26;
              var CHECK = 27;
              var LENGTH = 28;
              var DONE = 29;
              var BAD = 30;
              var MEM = 31;
              var SYNC = 32;
              var ENOUGH_LENS = 852;
              var ENOUGH_DISTS = 592;
              var MAX_WBITS = 15;
              var DEF_WBITS = MAX_WBITS;
              function zswap32(q) {
                return ((q >>> 24) & 255) + ((q >>> 8) & 65280) + ((q & 65280) << 8) + ((q & 255) << 24);
              }
              function InflateState() {
                this.mode = 0;
                this.last = false;
                this.wrap = 0;
                this.havedict = false;
                this.flags = 0;
                this.dmax = 0;
                this.check = 0;
                this.total = 0;
                this.head = null;
                this.wbits = 0;
                this.wsize = 0;
                this.whave = 0;
                this.wnext = 0;
                this.window = null;
                this.hold = 0;
                this.bits = 0;
                this.length = 0;
                this.offset = 0;
                this.extra = 0;
                this.lencode = null;
                this.distcode = null;
                this.lenbits = 0;
                this.distbits = 0;
                this.ncode = 0;
                this.nlen = 0;
                this.ndist = 0;
                this.have = 0;
                this.next = null;
                this.lens = new utils.Buf16(320);
                this.work = new utils.Buf16(288);
                this.lendyn = null;
                this.distdyn = null;
                this.sane = 0;
                this.back = 0;
                this.was = 0;
              }
              function inflateResetKeep(strm) {
                var state;
                if (!strm || !strm.state) {
                  return Z_STREAM_ERROR;
                }
                state = strm.state;
                strm.total_in = strm.total_out = state.total = 0;
                strm.msg = '';
                if (state.wrap) {
                  strm.adler = state.wrap & 1;
                }
                state.mode = HEAD;
                state.last = 0;
                state.havedict = 0;
                state.dmax = 32768;
                state.head = null;
                state.hold = 0;
                state.bits = 0;
                state.lencode = state.lendyn = new utils.Buf32(ENOUGH_LENS);
                state.distcode = state.distdyn = new utils.Buf32(ENOUGH_DISTS);
                state.sane = 1;
                state.back = -1;
                return Z_OK;
              }
              function inflateReset(strm) {
                var state;
                if (!strm || !strm.state) {
                  return Z_STREAM_ERROR;
                }
                state = strm.state;
                state.wsize = 0;
                state.whave = 0;
                state.wnext = 0;
                return inflateResetKeep(strm);
              }
              function inflateReset2(strm, windowBits) {
                var wrap;
                var state;
                if (!strm || !strm.state) {
                  return Z_STREAM_ERROR;
                }
                state = strm.state;
                if (windowBits < 0) {
                  wrap = 0;
                  windowBits = -windowBits;
                } else {
                  wrap = (windowBits >> 4) + 1;
                  if (windowBits < 48) {
                    windowBits &= 15;
                  }
                }
                if (windowBits && (windowBits < 8 || windowBits > 15)) {
                  return Z_STREAM_ERROR;
                }
                if (state.window !== null && state.wbits !== windowBits) {
                  state.window = null;
                }
                state.wrap = wrap;
                state.wbits = windowBits;
                return inflateReset(strm);
              }
              function inflateInit2(strm, windowBits) {
                var ret;
                var state;
                if (!strm) {
                  return Z_STREAM_ERROR;
                }
                state = new InflateState();
                strm.state = state;
                state.window = null;
                ret = inflateReset2(strm, windowBits);
                if (ret !== Z_OK) {
                  strm.state = null;
                }
                return ret;
              }
              function inflateInit(strm) {
                return inflateInit2(strm, DEF_WBITS);
              }
              var virgin = true;
              var lenfix, distfix;
              function fixedtables(state) {
                if (virgin) {
                  var sym;
                  lenfix = new utils.Buf32(512);
                  distfix = new utils.Buf32(32);
                  sym = 0;
                  while (sym < 144) {
                    state.lens[sym++] = 8;
                  }
                  while (sym < 256) {
                    state.lens[sym++] = 9;
                  }
                  while (sym < 280) {
                    state.lens[sym++] = 7;
                  }
                  while (sym < 288) {
                    state.lens[sym++] = 8;
                  }
                  inflate_table(LENS, state.lens, 0, 288, lenfix, 0, state.work, { bits: 9 });
                  sym = 0;
                  while (sym < 32) {
                    state.lens[sym++] = 5;
                  }
                  inflate_table(DISTS, state.lens, 0, 32, distfix, 0, state.work, { bits: 5 });
                  virgin = false;
                }
                state.lencode = lenfix;
                state.lenbits = 9;
                state.distcode = distfix;
                state.distbits = 5;
              }
              function updatewindow(strm, src, end, copy) {
                var dist;
                var state = strm.state;
                if (state.window === null) {
                  state.wsize = 1 << state.wbits;
                  state.wnext = 0;
                  state.whave = 0;
                  state.window = new utils.Buf8(state.wsize);
                }
                if (copy >= state.wsize) {
                  utils.arraySet(state.window, src, end - state.wsize, state.wsize, 0);
                  state.wnext = 0;
                  state.whave = state.wsize;
                } else {
                  dist = state.wsize - state.wnext;
                  if (dist > copy) {
                    dist = copy;
                  }
                  utils.arraySet(state.window, src, end - copy, dist, state.wnext);
                  copy -= dist;
                  if (copy) {
                    utils.arraySet(state.window, src, end - copy, copy, 0);
                    state.wnext = copy;
                    state.whave = state.wsize;
                  } else {
                    state.wnext += dist;
                    if (state.wnext === state.wsize) {
                      state.wnext = 0;
                    }
                    if (state.whave < state.wsize) {
                      state.whave += dist;
                    }
                  }
                }
                return 0;
              }
              function inflate(strm, flush) {
                var state;
                var input, output;
                var next;
                var put;
                var have, left;
                var hold;
                var bits;
                var _in, _out;
                var copy;
                var from;
                var from_source;
                var here = 0;
                var here_bits, here_op, here_val;
                var last_bits, last_op, last_val;
                var len;
                var ret;
                var hbuf = new utils.Buf8(4);
                var opts;
                var n;
                var order =
                  /* permutation of code lengths */
                  [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
                if (!strm || !strm.state || !strm.output || (!strm.input && strm.avail_in !== 0)) {
                  return Z_STREAM_ERROR;
                }
                state = strm.state;
                if (state.mode === TYPE) {
                  state.mode = TYPEDO;
                }
                put = strm.next_out;
                output = strm.output;
                left = strm.avail_out;
                next = strm.next_in;
                input = strm.input;
                have = strm.avail_in;
                hold = state.hold;
                bits = state.bits;
                _in = have;
                _out = left;
                ret = Z_OK;
                inf_leave: for (;;) {
                  switch (state.mode) {
                    case HEAD:
                      if (state.wrap === 0) {
                        state.mode = TYPEDO;
                        break;
                      }
                      while (bits < 16) {
                        if (have === 0) {
                          break inf_leave;
                        }
                        have--;
                        hold += input[next++] << bits;
                        bits += 8;
                      }
                      if (state.wrap & 2 && hold === 35615) {
                        state.check = 0;
                        hbuf[0] = hold & 255;
                        hbuf[1] = (hold >>> 8) & 255;
                        state.check = crc32(state.check, hbuf, 2, 0);
                        hold = 0;
                        bits = 0;
                        state.mode = FLAGS;
                        break;
                      }
                      state.flags = 0;
                      if (state.head) {
                        state.head.done = false;
                      }
                      if (!(state.wrap & 1) /* check if zlib header allowed */ || (((hold & 255) << 8) + (hold >> 8)) % 31) {
                        strm.msg = 'incorrect header check';
                        state.mode = BAD;
                        break;
                      }
                      if ((hold & 15) !== Z_DEFLATED) {
                        strm.msg = 'unknown compression method';
                        state.mode = BAD;
                        break;
                      }
                      hold >>>= 4;
                      bits -= 4;
                      len = (hold & 15) + 8;
                      if (state.wbits === 0) {
                        state.wbits = len;
                      } else if (len > state.wbits) {
                        strm.msg = 'invalid window size';
                        state.mode = BAD;
                        break;
                      }
                      state.dmax = 1 << len;
                      strm.adler = state.check = 1;
                      state.mode = hold & 512 ? DICTID : TYPE;
                      hold = 0;
                      bits = 0;
                      break;
                    case FLAGS:
                      while (bits < 16) {
                        if (have === 0) {
                          break inf_leave;
                        }
                        have--;
                        hold += input[next++] << bits;
                        bits += 8;
                      }
                      state.flags = hold;
                      if ((state.flags & 255) !== Z_DEFLATED) {
                        strm.msg = 'unknown compression method';
                        state.mode = BAD;
                        break;
                      }
                      if (state.flags & 57344) {
                        strm.msg = 'unknown header flags set';
                        state.mode = BAD;
                        break;
                      }
                      if (state.head) {
                        state.head.text = (hold >> 8) & 1;
                      }
                      if (state.flags & 512) {
                        hbuf[0] = hold & 255;
                        hbuf[1] = (hold >>> 8) & 255;
                        state.check = crc32(state.check, hbuf, 2, 0);
                      }
                      hold = 0;
                      bits = 0;
                      state.mode = TIME;
                    case TIME:
                      while (bits < 32) {
                        if (have === 0) {
                          break inf_leave;
                        }
                        have--;
                        hold += input[next++] << bits;
                        bits += 8;
                      }
                      if (state.head) {
                        state.head.time = hold;
                      }
                      if (state.flags & 512) {
                        hbuf[0] = hold & 255;
                        hbuf[1] = (hold >>> 8) & 255;
                        hbuf[2] = (hold >>> 16) & 255;
                        hbuf[3] = (hold >>> 24) & 255;
                        state.check = crc32(state.check, hbuf, 4, 0);
                      }
                      hold = 0;
                      bits = 0;
                      state.mode = OS;
                    case OS:
                      while (bits < 16) {
                        if (have === 0) {
                          break inf_leave;
                        }
                        have--;
                        hold += input[next++] << bits;
                        bits += 8;
                      }
                      if (state.head) {
                        state.head.xflags = hold & 255;
                        state.head.os = hold >> 8;
                      }
                      if (state.flags & 512) {
                        hbuf[0] = hold & 255;
                        hbuf[1] = (hold >>> 8) & 255;
                        state.check = crc32(state.check, hbuf, 2, 0);
                      }
                      hold = 0;
                      bits = 0;
                      state.mode = EXLEN;
                    case EXLEN:
                      if (state.flags & 1024) {
                        while (bits < 16) {
                          if (have === 0) {
                            break inf_leave;
                          }
                          have--;
                          hold += input[next++] << bits;
                          bits += 8;
                        }
                        state.length = hold;
                        if (state.head) {
                          state.head.extra_len = hold;
                        }
                        if (state.flags & 512) {
                          hbuf[0] = hold & 255;
                          hbuf[1] = (hold >>> 8) & 255;
                          state.check = crc32(state.check, hbuf, 2, 0);
                        }
                        hold = 0;
                        bits = 0;
                      } else if (state.head) {
                        state.head.extra = null;
                      }
                      state.mode = EXTRA;
                    case EXTRA:
                      if (state.flags & 1024) {
                        copy = state.length;
                        if (copy > have) {
                          copy = have;
                        }
                        if (copy) {
                          if (state.head) {
                            len = state.head.extra_len - state.length;
                            if (!state.head.extra) {
                              state.head.extra = new Array(state.head.extra_len);
                            }
                            utils.arraySet(
                              state.head.extra,
                              input,
                              next,
                              // extra field is limited to 65536 bytes
                              // - no need for additional size check
                              copy,
                              /*len + copy > state.head.extra_max - len ? state.head.extra_max : copy,*/
                              len
                            );
                          }
                          if (state.flags & 512) {
                            state.check = crc32(state.check, input, copy, next);
                          }
                          have -= copy;
                          next += copy;
                          state.length -= copy;
                        }
                        if (state.length) {
                          break inf_leave;
                        }
                      }
                      state.length = 0;
                      state.mode = NAME;
                    case NAME:
                      if (state.flags & 2048) {
                        if (have === 0) {
                          break inf_leave;
                        }
                        copy = 0;
                        do {
                          len = input[next + copy++];
                          if (state.head && len && state.length < 65536) {
                            state.head.name += String.fromCharCode(len);
                          }
                        } while (len && copy < have);
                        if (state.flags & 512) {
                          state.check = crc32(state.check, input, copy, next);
                        }
                        have -= copy;
                        next += copy;
                        if (len) {
                          break inf_leave;
                        }
                      } else if (state.head) {
                        state.head.name = null;
                      }
                      state.length = 0;
                      state.mode = COMMENT;
                    case COMMENT:
                      if (state.flags & 4096) {
                        if (have === 0) {
                          break inf_leave;
                        }
                        copy = 0;
                        do {
                          len = input[next + copy++];
                          if (state.head && len && state.length < 65536) {
                            state.head.comment += String.fromCharCode(len);
                          }
                        } while (len && copy < have);
                        if (state.flags & 512) {
                          state.check = crc32(state.check, input, copy, next);
                        }
                        have -= copy;
                        next += copy;
                        if (len) {
                          break inf_leave;
                        }
                      } else if (state.head) {
                        state.head.comment = null;
                      }
                      state.mode = HCRC;
                    case HCRC:
                      if (state.flags & 512) {
                        while (bits < 16) {
                          if (have === 0) {
                            break inf_leave;
                          }
                          have--;
                          hold += input[next++] << bits;
                          bits += 8;
                        }
                        if (hold !== (state.check & 65535)) {
                          strm.msg = 'header crc mismatch';
                          state.mode = BAD;
                          break;
                        }
                        hold = 0;
                        bits = 0;
                      }
                      if (state.head) {
                        state.head.hcrc = (state.flags >> 9) & 1;
                        state.head.done = true;
                      }
                      strm.adler = state.check = 0;
                      state.mode = TYPE;
                      break;
                    case DICTID:
                      while (bits < 32) {
                        if (have === 0) {
                          break inf_leave;
                        }
                        have--;
                        hold += input[next++] << bits;
                        bits += 8;
                      }
                      strm.adler = state.check = zswap32(hold);
                      hold = 0;
                      bits = 0;
                      state.mode = DICT;
                    case DICT:
                      if (state.havedict === 0) {
                        strm.next_out = put;
                        strm.avail_out = left;
                        strm.next_in = next;
                        strm.avail_in = have;
                        state.hold = hold;
                        state.bits = bits;
                        return Z_NEED_DICT;
                      }
                      strm.adler = state.check = 1;
                      state.mode = TYPE;
                    case TYPE:
                      if (flush === Z_BLOCK || flush === Z_TREES) {
                        break inf_leave;
                      }
                    case TYPEDO:
                      if (state.last) {
                        hold >>>= bits & 7;
                        bits -= bits & 7;
                        state.mode = CHECK;
                        break;
                      }
                      while (bits < 3) {
                        if (have === 0) {
                          break inf_leave;
                        }
                        have--;
                        hold += input[next++] << bits;
                        bits += 8;
                      }
                      state.last = hold & 1;
                      hold >>>= 1;
                      bits -= 1;
                      switch (hold & 3) {
                        case 0:
                          state.mode = STORED;
                          break;
                        case 1:
                          fixedtables(state);
                          state.mode = LEN_;
                          if (flush === Z_TREES) {
                            hold >>>= 2;
                            bits -= 2;
                            break inf_leave;
                          }
                          break;
                        case 2:
                          state.mode = TABLE;
                          break;
                        case 3:
                          strm.msg = 'invalid block type';
                          state.mode = BAD;
                      }
                      hold >>>= 2;
                      bits -= 2;
                      break;
                    case STORED:
                      hold >>>= bits & 7;
                      bits -= bits & 7;
                      while (bits < 32) {
                        if (have === 0) {
                          break inf_leave;
                        }
                        have--;
                        hold += input[next++] << bits;
                        bits += 8;
                      }
                      if ((hold & 65535) !== ((hold >>> 16) ^ 65535)) {
                        strm.msg = 'invalid stored block lengths';
                        state.mode = BAD;
                        break;
                      }
                      state.length = hold & 65535;
                      hold = 0;
                      bits = 0;
                      state.mode = COPY_;
                      if (flush === Z_TREES) {
                        break inf_leave;
                      }
                    case COPY_:
                      state.mode = COPY;
                    case COPY:
                      copy = state.length;
                      if (copy) {
                        if (copy > have) {
                          copy = have;
                        }
                        if (copy > left) {
                          copy = left;
                        }
                        if (copy === 0) {
                          break inf_leave;
                        }
                        utils.arraySet(output, input, next, copy, put);
                        have -= copy;
                        next += copy;
                        left -= copy;
                        put += copy;
                        state.length -= copy;
                        break;
                      }
                      state.mode = TYPE;
                      break;
                    case TABLE:
                      while (bits < 14) {
                        if (have === 0) {
                          break inf_leave;
                        }
                        have--;
                        hold += input[next++] << bits;
                        bits += 8;
                      }
                      state.nlen = (hold & 31) + 257;
                      hold >>>= 5;
                      bits -= 5;
                      state.ndist = (hold & 31) + 1;
                      hold >>>= 5;
                      bits -= 5;
                      state.ncode = (hold & 15) + 4;
                      hold >>>= 4;
                      bits -= 4;
                      if (state.nlen > 286 || state.ndist > 30) {
                        strm.msg = 'too many length or distance symbols';
                        state.mode = BAD;
                        break;
                      }
                      state.have = 0;
                      state.mode = LENLENS;
                    case LENLENS:
                      while (state.have < state.ncode) {
                        while (bits < 3) {
                          if (have === 0) {
                            break inf_leave;
                          }
                          have--;
                          hold += input[next++] << bits;
                          bits += 8;
                        }
                        state.lens[order[state.have++]] = hold & 7;
                        hold >>>= 3;
                        bits -= 3;
                      }
                      while (state.have < 19) {
                        state.lens[order[state.have++]] = 0;
                      }
                      state.lencode = state.lendyn;
                      state.lenbits = 7;
                      opts = { bits: state.lenbits };
                      ret = inflate_table(CODES, state.lens, 0, 19, state.lencode, 0, state.work, opts);
                      state.lenbits = opts.bits;
                      if (ret) {
                        strm.msg = 'invalid code lengths set';
                        state.mode = BAD;
                        break;
                      }
                      state.have = 0;
                      state.mode = CODELENS;
                    case CODELENS:
                      while (state.have < state.nlen + state.ndist) {
                        for (;;) {
                          here = state.lencode[hold & ((1 << state.lenbits) - 1)];
                          here_bits = here >>> 24;
                          here_op = (here >>> 16) & 255;
                          here_val = here & 65535;
                          if (here_bits <= bits) {
                            break;
                          }
                          if (have === 0) {
                            break inf_leave;
                          }
                          have--;
                          hold += input[next++] << bits;
                          bits += 8;
                        }
                        if (here_val < 16) {
                          hold >>>= here_bits;
                          bits -= here_bits;
                          state.lens[state.have++] = here_val;
                        } else {
                          if (here_val === 16) {
                            n = here_bits + 2;
                            while (bits < n) {
                              if (have === 0) {
                                break inf_leave;
                              }
                              have--;
                              hold += input[next++] << bits;
                              bits += 8;
                            }
                            hold >>>= here_bits;
                            bits -= here_bits;
                            if (state.have === 0) {
                              strm.msg = 'invalid bit length repeat';
                              state.mode = BAD;
                              break;
                            }
                            len = state.lens[state.have - 1];
                            copy = 3 + (hold & 3);
                            hold >>>= 2;
                            bits -= 2;
                          } else if (here_val === 17) {
                            n = here_bits + 3;
                            while (bits < n) {
                              if (have === 0) {
                                break inf_leave;
                              }
                              have--;
                              hold += input[next++] << bits;
                              bits += 8;
                            }
                            hold >>>= here_bits;
                            bits -= here_bits;
                            len = 0;
                            copy = 3 + (hold & 7);
                            hold >>>= 3;
                            bits -= 3;
                          } else {
                            n = here_bits + 7;
                            while (bits < n) {
                              if (have === 0) {
                                break inf_leave;
                              }
                              have--;
                              hold += input[next++] << bits;
                              bits += 8;
                            }
                            hold >>>= here_bits;
                            bits -= here_bits;
                            len = 0;
                            copy = 11 + (hold & 127);
                            hold >>>= 7;
                            bits -= 7;
                          }
                          if (state.have + copy > state.nlen + state.ndist) {
                            strm.msg = 'invalid bit length repeat';
                            state.mode = BAD;
                            break;
                          }
                          while (copy--) {
                            state.lens[state.have++] = len;
                          }
                        }
                      }
                      if (state.mode === BAD) {
                        break;
                      }
                      if (state.lens[256] === 0) {
                        strm.msg = 'invalid code -- missing end-of-block';
                        state.mode = BAD;
                        break;
                      }
                      state.lenbits = 9;
                      opts = { bits: state.lenbits };
                      ret = inflate_table(LENS, state.lens, 0, state.nlen, state.lencode, 0, state.work, opts);
                      state.lenbits = opts.bits;
                      if (ret) {
                        strm.msg = 'invalid literal/lengths set';
                        state.mode = BAD;
                        break;
                      }
                      state.distbits = 6;
                      state.distcode = state.distdyn;
                      opts = { bits: state.distbits };
                      ret = inflate_table(DISTS, state.lens, state.nlen, state.ndist, state.distcode, 0, state.work, opts);
                      state.distbits = opts.bits;
                      if (ret) {
                        strm.msg = 'invalid distances set';
                        state.mode = BAD;
                        break;
                      }
                      state.mode = LEN_;
                      if (flush === Z_TREES) {
                        break inf_leave;
                      }
                    case LEN_:
                      state.mode = LEN;
                    case LEN:
                      if (have >= 6 && left >= 258) {
                        strm.next_out = put;
                        strm.avail_out = left;
                        strm.next_in = next;
                        strm.avail_in = have;
                        state.hold = hold;
                        state.bits = bits;
                        inflate_fast(strm, _out);
                        put = strm.next_out;
                        output = strm.output;
                        left = strm.avail_out;
                        next = strm.next_in;
                        input = strm.input;
                        have = strm.avail_in;
                        hold = state.hold;
                        bits = state.bits;
                        if (state.mode === TYPE) {
                          state.back = -1;
                        }
                        break;
                      }
                      state.back = 0;
                      for (;;) {
                        here = state.lencode[hold & ((1 << state.lenbits) - 1)];
                        here_bits = here >>> 24;
                        here_op = (here >>> 16) & 255;
                        here_val = here & 65535;
                        if (here_bits <= bits) {
                          break;
                        }
                        if (have === 0) {
                          break inf_leave;
                        }
                        have--;
                        hold += input[next++] << bits;
                        bits += 8;
                      }
                      if (here_op && (here_op & 240) === 0) {
                        last_bits = here_bits;
                        last_op = here_op;
                        last_val = here_val;
                        for (;;) {
                          here = state.lencode[last_val + ((hold & ((1 << (last_bits + last_op)) - 1)) >> last_bits)];
                          here_bits = here >>> 24;
                          here_op = (here >>> 16) & 255;
                          here_val = here & 65535;
                          if (last_bits + here_bits <= bits) {
                            break;
                          }
                          if (have === 0) {
                            break inf_leave;
                          }
                          have--;
                          hold += input[next++] << bits;
                          bits += 8;
                        }
                        hold >>>= last_bits;
                        bits -= last_bits;
                        state.back += last_bits;
                      }
                      hold >>>= here_bits;
                      bits -= here_bits;
                      state.back += here_bits;
                      state.length = here_val;
                      if (here_op === 0) {
                        state.mode = LIT;
                        break;
                      }
                      if (here_op & 32) {
                        state.back = -1;
                        state.mode = TYPE;
                        break;
                      }
                      if (here_op & 64) {
                        strm.msg = 'invalid literal/length code';
                        state.mode = BAD;
                        break;
                      }
                      state.extra = here_op & 15;
                      state.mode = LENEXT;
                    case LENEXT:
                      if (state.extra) {
                        n = state.extra;
                        while (bits < n) {
                          if (have === 0) {
                            break inf_leave;
                          }
                          have--;
                          hold += input[next++] << bits;
                          bits += 8;
                        }
                        state.length += hold & ((1 << state.extra) - 1);
                        hold >>>= state.extra;
                        bits -= state.extra;
                        state.back += state.extra;
                      }
                      state.was = state.length;
                      state.mode = DIST;
                    case DIST:
                      for (;;) {
                        here = state.distcode[hold & ((1 << state.distbits) - 1)];
                        here_bits = here >>> 24;
                        here_op = (here >>> 16) & 255;
                        here_val = here & 65535;
                        if (here_bits <= bits) {
                          break;
                        }
                        if (have === 0) {
                          break inf_leave;
                        }
                        have--;
                        hold += input[next++] << bits;
                        bits += 8;
                      }
                      if ((here_op & 240) === 0) {
                        last_bits = here_bits;
                        last_op = here_op;
                        last_val = here_val;
                        for (;;) {
                          here = state.distcode[last_val + ((hold & ((1 << (last_bits + last_op)) - 1)) >> last_bits)];
                          here_bits = here >>> 24;
                          here_op = (here >>> 16) & 255;
                          here_val = here & 65535;
                          if (last_bits + here_bits <= bits) {
                            break;
                          }
                          if (have === 0) {
                            break inf_leave;
                          }
                          have--;
                          hold += input[next++] << bits;
                          bits += 8;
                        }
                        hold >>>= last_bits;
                        bits -= last_bits;
                        state.back += last_bits;
                      }
                      hold >>>= here_bits;
                      bits -= here_bits;
                      state.back += here_bits;
                      if (here_op & 64) {
                        strm.msg = 'invalid distance code';
                        state.mode = BAD;
                        break;
                      }
                      state.offset = here_val;
                      state.extra = here_op & 15;
                      state.mode = DISTEXT;
                    case DISTEXT:
                      if (state.extra) {
                        n = state.extra;
                        while (bits < n) {
                          if (have === 0) {
                            break inf_leave;
                          }
                          have--;
                          hold += input[next++] << bits;
                          bits += 8;
                        }
                        state.offset += hold & ((1 << state.extra) - 1);
                        hold >>>= state.extra;
                        bits -= state.extra;
                        state.back += state.extra;
                      }
                      if (state.offset > state.dmax) {
                        strm.msg = 'invalid distance too far back';
                        state.mode = BAD;
                        break;
                      }
                      state.mode = MATCH;
                    case MATCH:
                      if (left === 0) {
                        break inf_leave;
                      }
                      copy = _out - left;
                      if (state.offset > copy) {
                        copy = state.offset - copy;
                        if (copy > state.whave) {
                          if (state.sane) {
                            strm.msg = 'invalid distance too far back';
                            state.mode = BAD;
                            break;
                          }
                        }
                        if (copy > state.wnext) {
                          copy -= state.wnext;
                          from = state.wsize - copy;
                        } else {
                          from = state.wnext - copy;
                        }
                        if (copy > state.length) {
                          copy = state.length;
                        }
                        from_source = state.window;
                      } else {
                        from_source = output;
                        from = put - state.offset;
                        copy = state.length;
                      }
                      if (copy > left) {
                        copy = left;
                      }
                      left -= copy;
                      state.length -= copy;
                      do {
                        output[put++] = from_source[from++];
                      } while (--copy);
                      if (state.length === 0) {
                        state.mode = LEN;
                      }
                      break;
                    case LIT:
                      if (left === 0) {
                        break inf_leave;
                      }
                      output[put++] = state.length;
                      left--;
                      state.mode = LEN;
                      break;
                    case CHECK:
                      if (state.wrap) {
                        while (bits < 32) {
                          if (have === 0) {
                            break inf_leave;
                          }
                          have--;
                          hold |= input[next++] << bits;
                          bits += 8;
                        }
                        _out -= left;
                        strm.total_out += _out;
                        state.total += _out;
                        if (_out) {
                          strm.adler = state.check =
                            /*UPDATE(state.check, put - _out, _out);*/
                            state.flags
                              ? crc32(state.check, output, _out, put - _out)
                              : adler32(state.check, output, _out, put - _out);
                        }
                        _out = left;
                        if ((state.flags ? hold : zswap32(hold)) !== state.check) {
                          strm.msg = 'incorrect data check';
                          state.mode = BAD;
                          break;
                        }
                        hold = 0;
                        bits = 0;
                      }
                      state.mode = LENGTH;
                    case LENGTH:
                      if (state.wrap && state.flags) {
                        while (bits < 32) {
                          if (have === 0) {
                            break inf_leave;
                          }
                          have--;
                          hold += input[next++] << bits;
                          bits += 8;
                        }
                        if (hold !== (state.total & 4294967295)) {
                          strm.msg = 'incorrect length check';
                          state.mode = BAD;
                          break;
                        }
                        hold = 0;
                        bits = 0;
                      }
                      state.mode = DONE;
                    case DONE:
                      ret = Z_STREAM_END;
                      break inf_leave;
                    case BAD:
                      ret = Z_DATA_ERROR;
                      break inf_leave;
                    case MEM:
                      return Z_MEM_ERROR;
                    case SYNC:
                    default:
                      return Z_STREAM_ERROR;
                  }
                }
                strm.next_out = put;
                strm.avail_out = left;
                strm.next_in = next;
                strm.avail_in = have;
                state.hold = hold;
                state.bits = bits;
                if (state.wsize || (_out !== strm.avail_out && state.mode < BAD && (state.mode < CHECK || flush !== Z_FINISH))) {
                  if (updatewindow(strm, strm.output, strm.next_out, _out - strm.avail_out)) {
                    state.mode = MEM;
                    return Z_MEM_ERROR;
                  }
                }
                _in -= strm.avail_in;
                _out -= strm.avail_out;
                strm.total_in += _in;
                strm.total_out += _out;
                state.total += _out;
                if (state.wrap && _out) {
                  strm.adler = state.check =
                    /*UPDATE(state.check, strm.next_out - _out, _out);*/
                    state.flags
                      ? crc32(state.check, output, _out, strm.next_out - _out)
                      : adler32(state.check, output, _out, strm.next_out - _out);
                }
                strm.data_type =
                  state.bits +
                  (state.last ? 64 : 0) +
                  (state.mode === TYPE ? 128 : 0) +
                  (state.mode === LEN_ || state.mode === COPY_ ? 256 : 0);
                if (((_in === 0 && _out === 0) || flush === Z_FINISH) && ret === Z_OK) {
                  ret = Z_BUF_ERROR;
                }
                return ret;
              }
              function inflateEnd(strm) {
                if (!strm || !strm.state) {
                  return Z_STREAM_ERROR;
                }
                var state = strm.state;
                if (state.window) {
                  state.window = null;
                }
                strm.state = null;
                return Z_OK;
              }
              function inflateGetHeader(strm, head) {
                var state;
                if (!strm || !strm.state) {
                  return Z_STREAM_ERROR;
                }
                state = strm.state;
                if ((state.wrap & 2) === 0) {
                  return Z_STREAM_ERROR;
                }
                state.head = head;
                head.done = false;
                return Z_OK;
              }
              function inflateSetDictionary(strm, dictionary) {
                var dictLength = dictionary.length;
                var state;
                var dictid;
                var ret;
                if (!strm || !strm.state) {
                  return Z_STREAM_ERROR;
                }
                state = strm.state;
                if (state.wrap !== 0 && state.mode !== DICT) {
                  return Z_STREAM_ERROR;
                }
                if (state.mode === DICT) {
                  dictid = 1;
                  dictid = adler32(dictid, dictionary, dictLength, 0);
                  if (dictid !== state.check) {
                    return Z_DATA_ERROR;
                  }
                }
                ret = updatewindow(strm, dictionary, dictLength, dictLength);
                if (ret) {
                  state.mode = MEM;
                  return Z_MEM_ERROR;
                }
                state.havedict = 1;
                return Z_OK;
              }
              exports3.inflateReset = inflateReset;
              exports3.inflateReset2 = inflateReset2;
              exports3.inflateResetKeep = inflateResetKeep;
              exports3.inflateInit = inflateInit;
              exports3.inflateInit2 = inflateInit2;
              exports3.inflate = inflate;
              exports3.inflateEnd = inflateEnd;
              exports3.inflateGetHeader = inflateGetHeader;
              exports3.inflateSetDictionary = inflateSetDictionary;
              exports3.inflateInfo = 'pako inflate (from Nodeca project)';
            },
            { '../utils/common': 50, './adler32': 52, './crc32': 54, './inffast': 57, './inftrees': 59 }
          ],
          59: [
            function (require2, module3, exports3) {
              'use strict';
              var utils = require2('../utils/common');
              var MAXBITS = 15;
              var ENOUGH_LENS = 852;
              var ENOUGH_DISTS = 592;
              var CODES = 0;
              var LENS = 1;
              var DISTS = 2;
              var lbase = [
                /* Length codes 257..285 base */
                3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258,
                0, 0
              ];
              var lext = [
                /* Length codes 257..285 extra */
                16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21,
                16, 72, 78
              ];
              var dbase = [
                /* Distance codes 0..29 base */
                1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145,
                8193, 12289, 16385, 24577, 0, 0
              ];
              var dext = [
                /* Distance codes 0..29 extra */
                16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28,
                29, 29, 64, 64
              ];
              module3.exports = function inflate_table(type, lens, lens_index, codes, table, table_index, work, opts) {
                var bits = opts.bits;
                var len = 0;
                var sym = 0;
                var min = 0,
                  max = 0;
                var root = 0;
                var curr = 0;
                var drop = 0;
                var left = 0;
                var used = 0;
                var huff = 0;
                var incr;
                var fill;
                var low;
                var mask;
                var next;
                var base = null;
                var base_index = 0;
                var end;
                var count = new utils.Buf16(MAXBITS + 1);
                var offs = new utils.Buf16(MAXBITS + 1);
                var extra = null;
                var extra_index = 0;
                var here_bits, here_op, here_val;
                for (len = 0; len <= MAXBITS; len++) {
                  count[len] = 0;
                }
                for (sym = 0; sym < codes; sym++) {
                  count[lens[lens_index + sym]]++;
                }
                root = bits;
                for (max = MAXBITS; max >= 1; max--) {
                  if (count[max] !== 0) {
                    break;
                  }
                }
                if (root > max) {
                  root = max;
                }
                if (max === 0) {
                  table[table_index++] = (1 << 24) | (64 << 16) | 0;
                  table[table_index++] = (1 << 24) | (64 << 16) | 0;
                  opts.bits = 1;
                  return 0;
                }
                for (min = 1; min < max; min++) {
                  if (count[min] !== 0) {
                    break;
                  }
                }
                if (root < min) {
                  root = min;
                }
                left = 1;
                for (len = 1; len <= MAXBITS; len++) {
                  left <<= 1;
                  left -= count[len];
                  if (left < 0) {
                    return -1;
                  }
                }
                if (left > 0 && (type === CODES || max !== 1)) {
                  return -1;
                }
                offs[1] = 0;
                for (len = 1; len < MAXBITS; len++) {
                  offs[len + 1] = offs[len] + count[len];
                }
                for (sym = 0; sym < codes; sym++) {
                  if (lens[lens_index + sym] !== 0) {
                    work[offs[lens[lens_index + sym]]++] = sym;
                  }
                }
                if (type === CODES) {
                  base = extra = work;
                  end = 19;
                } else if (type === LENS) {
                  base = lbase;
                  base_index -= 257;
                  extra = lext;
                  extra_index -= 257;
                  end = 256;
                } else {
                  base = dbase;
                  extra = dext;
                  end = -1;
                }
                huff = 0;
                sym = 0;
                len = min;
                next = table_index;
                curr = root;
                drop = 0;
                low = -1;
                used = 1 << root;
                mask = used - 1;
                if ((type === LENS && used > ENOUGH_LENS) || (type === DISTS && used > ENOUGH_DISTS)) {
                  return 1;
                }
                for (;;) {
                  here_bits = len - drop;
                  if (work[sym] < end) {
                    here_op = 0;
                    here_val = work[sym];
                  } else if (work[sym] > end) {
                    here_op = extra[extra_index + work[sym]];
                    here_val = base[base_index + work[sym]];
                  } else {
                    here_op = 32 + 64;
                    here_val = 0;
                  }
                  incr = 1 << (len - drop);
                  fill = 1 << curr;
                  min = fill;
                  do {
                    fill -= incr;
                    table[next + (huff >> drop) + fill] = (here_bits << 24) | (here_op << 16) | here_val | 0;
                  } while (fill !== 0);
                  incr = 1 << (len - 1);
                  while (huff & incr) {
                    incr >>= 1;
                  }
                  if (incr !== 0) {
                    huff &= incr - 1;
                    huff += incr;
                  } else {
                    huff = 0;
                  }
                  sym++;
                  if (--count[len] === 0) {
                    if (len === max) {
                      break;
                    }
                    len = lens[lens_index + work[sym]];
                  }
                  if (len > root && (huff & mask) !== low) {
                    if (drop === 0) {
                      drop = root;
                    }
                    next += min;
                    curr = len - drop;
                    left = 1 << curr;
                    while (curr + drop < max) {
                      left -= count[curr + drop];
                      if (left <= 0) {
                        break;
                      }
                      curr++;
                      left <<= 1;
                    }
                    used += 1 << curr;
                    if ((type === LENS && used > ENOUGH_LENS) || (type === DISTS && used > ENOUGH_DISTS)) {
                      return 1;
                    }
                    low = huff & mask;
                    table[low] = (root << 24) | (curr << 16) | (next - table_index) | 0;
                  }
                }
                if (huff !== 0) {
                  table[next + huff] = ((len - drop) << 24) | (64 << 16) | 0;
                }
                opts.bits = root;
                return 0;
              };
            },
            { '../utils/common': 50 }
          ],
          60: [
            function (require2, module3, exports3) {
              'use strict';
              module3.exports = {
                2: 'need dictionary',
                /* Z_NEED_DICT       2  */
                1: 'stream end',
                /* Z_STREAM_END      1  */
                0: '',
                /* Z_OK              0  */
                '-1': 'file error',
                /* Z_ERRNO         (-1) */
                '-2': 'stream error',
                /* Z_STREAM_ERROR  (-2) */
                '-3': 'data error',
                /* Z_DATA_ERROR    (-3) */
                '-4': 'insufficient memory',
                /* Z_MEM_ERROR     (-4) */
                '-5': 'buffer error',
                /* Z_BUF_ERROR     (-5) */
                '-6': 'incompatible version'
                /* Z_VERSION_ERROR (-6) */
              };
            },
            {}
          ],
          61: [
            function (require2, module3, exports3) {
              'use strict';
              var utils = require2('../utils/common');
              var Z_FIXED = 4;
              var Z_BINARY = 0;
              var Z_TEXT = 1;
              var Z_UNKNOWN = 2;
              function zero(buf) {
                var len = buf.length;
                while (--len >= 0) {
                  buf[len] = 0;
                }
              }
              var STORED_BLOCK = 0;
              var STATIC_TREES = 1;
              var DYN_TREES = 2;
              var MIN_MATCH = 3;
              var MAX_MATCH = 258;
              var LENGTH_CODES = 29;
              var LITERALS = 256;
              var L_CODES = LITERALS + 1 + LENGTH_CODES;
              var D_CODES = 30;
              var BL_CODES = 19;
              var HEAP_SIZE = 2 * L_CODES + 1;
              var MAX_BITS = 15;
              var Buf_size = 16;
              var MAX_BL_BITS = 7;
              var END_BLOCK = 256;
              var REP_3_6 = 16;
              var REPZ_3_10 = 17;
              var REPZ_11_138 = 18;
              var extra_lbits =
                /* extra bits for each length code */
                [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0];
              var extra_dbits =
                /* extra bits for each distance code */
                [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13];
              var extra_blbits =
                /* extra bits for each bit length code */
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7];
              var bl_order = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
              var DIST_CODE_LEN = 512;
              var static_ltree = new Array((L_CODES + 2) * 2);
              zero(static_ltree);
              var static_dtree = new Array(D_CODES * 2);
              zero(static_dtree);
              var _dist_code = new Array(DIST_CODE_LEN);
              zero(_dist_code);
              var _length_code = new Array(MAX_MATCH - MIN_MATCH + 1);
              zero(_length_code);
              var base_length = new Array(LENGTH_CODES);
              zero(base_length);
              var base_dist = new Array(D_CODES);
              zero(base_dist);
              function StaticTreeDesc(static_tree, extra_bits, extra_base, elems, max_length) {
                this.static_tree = static_tree;
                this.extra_bits = extra_bits;
                this.extra_base = extra_base;
                this.elems = elems;
                this.max_length = max_length;
                this.has_stree = static_tree && static_tree.length;
              }
              var static_l_desc;
              var static_d_desc;
              var static_bl_desc;
              function TreeDesc(dyn_tree, stat_desc) {
                this.dyn_tree = dyn_tree;
                this.max_code = 0;
                this.stat_desc = stat_desc;
              }
              function d_code(dist) {
                return dist < 256 ? _dist_code[dist] : _dist_code[256 + (dist >>> 7)];
              }
              function put_short(s, w) {
                s.pending_buf[s.pending++] = w & 255;
                s.pending_buf[s.pending++] = (w >>> 8) & 255;
              }
              function send_bits(s, value, length) {
                if (s.bi_valid > Buf_size - length) {
                  s.bi_buf |= (value << s.bi_valid) & 65535;
                  put_short(s, s.bi_buf);
                  s.bi_buf = value >> (Buf_size - s.bi_valid);
                  s.bi_valid += length - Buf_size;
                } else {
                  s.bi_buf |= (value << s.bi_valid) & 65535;
                  s.bi_valid += length;
                }
              }
              function send_code(s, c, tree) {
                send_bits(
                  s,
                  tree[c * 2],
                  tree[c * 2 + 1]
                  /*.Len*/
                );
              }
              function bi_reverse(code, len) {
                var res = 0;
                do {
                  res |= code & 1;
                  code >>>= 1;
                  res <<= 1;
                } while (--len > 0);
                return res >>> 1;
              }
              function bi_flush(s) {
                if (s.bi_valid === 16) {
                  put_short(s, s.bi_buf);
                  s.bi_buf = 0;
                  s.bi_valid = 0;
                } else if (s.bi_valid >= 8) {
                  s.pending_buf[s.pending++] = s.bi_buf & 255;
                  s.bi_buf >>= 8;
                  s.bi_valid -= 8;
                }
              }
              function gen_bitlen(s, desc) {
                var tree = desc.dyn_tree;
                var max_code = desc.max_code;
                var stree = desc.stat_desc.static_tree;
                var has_stree = desc.stat_desc.has_stree;
                var extra = desc.stat_desc.extra_bits;
                var base = desc.stat_desc.extra_base;
                var max_length = desc.stat_desc.max_length;
                var h;
                var n, m;
                var bits;
                var xbits;
                var f;
                var overflow = 0;
                for (bits = 0; bits <= MAX_BITS; bits++) {
                  s.bl_count[bits] = 0;
                }
                tree[s.heap[s.heap_max] * 2 + 1] = 0;
                for (h = s.heap_max + 1; h < HEAP_SIZE; h++) {
                  n = s.heap[h];
                  bits = tree[tree[n * 2 + 1] * 2 + 1] + 1;
                  if (bits > max_length) {
                    bits = max_length;
                    overflow++;
                  }
                  tree[n * 2 + 1] = bits;
                  if (n > max_code) {
                    continue;
                  }
                  s.bl_count[bits]++;
                  xbits = 0;
                  if (n >= base) {
                    xbits = extra[n - base];
                  }
                  f = tree[n * 2];
                  s.opt_len += f * (bits + xbits);
                  if (has_stree) {
                    s.static_len += f * (stree[n * 2 + 1] + xbits);
                  }
                }
                if (overflow === 0) {
                  return;
                }
                do {
                  bits = max_length - 1;
                  while (s.bl_count[bits] === 0) {
                    bits--;
                  }
                  s.bl_count[bits]--;
                  s.bl_count[bits + 1] += 2;
                  s.bl_count[max_length]--;
                  overflow -= 2;
                } while (overflow > 0);
                for (bits = max_length; bits !== 0; bits--) {
                  n = s.bl_count[bits];
                  while (n !== 0) {
                    m = s.heap[--h];
                    if (m > max_code) {
                      continue;
                    }
                    if (tree[m * 2 + 1] !== bits) {
                      s.opt_len += (bits - tree[m * 2 + 1]) * tree[m * 2];
                      tree[m * 2 + 1] = bits;
                    }
                    n--;
                  }
                }
              }
              function gen_codes(tree, max_code, bl_count) {
                var next_code = new Array(MAX_BITS + 1);
                var code = 0;
                var bits;
                var n;
                for (bits = 1; bits <= MAX_BITS; bits++) {
                  next_code[bits] = code = (code + bl_count[bits - 1]) << 1;
                }
                for (n = 0; n <= max_code; n++) {
                  var len = tree[n * 2 + 1];
                  if (len === 0) {
                    continue;
                  }
                  tree[n * 2] = bi_reverse(next_code[len]++, len);
                }
              }
              function tr_static_init() {
                var n;
                var bits;
                var length;
                var code;
                var dist;
                var bl_count = new Array(MAX_BITS + 1);
                length = 0;
                for (code = 0; code < LENGTH_CODES - 1; code++) {
                  base_length[code] = length;
                  for (n = 0; n < 1 << extra_lbits[code]; n++) {
                    _length_code[length++] = code;
                  }
                }
                _length_code[length - 1] = code;
                dist = 0;
                for (code = 0; code < 16; code++) {
                  base_dist[code] = dist;
                  for (n = 0; n < 1 << extra_dbits[code]; n++) {
                    _dist_code[dist++] = code;
                  }
                }
                dist >>= 7;
                for (; code < D_CODES; code++) {
                  base_dist[code] = dist << 7;
                  for (n = 0; n < 1 << (extra_dbits[code] - 7); n++) {
                    _dist_code[256 + dist++] = code;
                  }
                }
                for (bits = 0; bits <= MAX_BITS; bits++) {
                  bl_count[bits] = 0;
                }
                n = 0;
                while (n <= 143) {
                  static_ltree[n * 2 + 1] = 8;
                  n++;
                  bl_count[8]++;
                }
                while (n <= 255) {
                  static_ltree[n * 2 + 1] = 9;
                  n++;
                  bl_count[9]++;
                }
                while (n <= 279) {
                  static_ltree[n * 2 + 1] = 7;
                  n++;
                  bl_count[7]++;
                }
                while (n <= 287) {
                  static_ltree[n * 2 + 1] = 8;
                  n++;
                  bl_count[8]++;
                }
                gen_codes(static_ltree, L_CODES + 1, bl_count);
                for (n = 0; n < D_CODES; n++) {
                  static_dtree[n * 2 + 1] = 5;
                  static_dtree[n * 2] = bi_reverse(n, 5);
                }
                static_l_desc = new StaticTreeDesc(static_ltree, extra_lbits, LITERALS + 1, L_CODES, MAX_BITS);
                static_d_desc = new StaticTreeDesc(static_dtree, extra_dbits, 0, D_CODES, MAX_BITS);
                static_bl_desc = new StaticTreeDesc(new Array(0), extra_blbits, 0, BL_CODES, MAX_BL_BITS);
              }
              function init_block(s) {
                var n;
                for (n = 0; n < L_CODES; n++) {
                  s.dyn_ltree[n * 2] = 0;
                }
                for (n = 0; n < D_CODES; n++) {
                  s.dyn_dtree[n * 2] = 0;
                }
                for (n = 0; n < BL_CODES; n++) {
                  s.bl_tree[n * 2] = 0;
                }
                s.dyn_ltree[END_BLOCK * 2] = 1;
                s.opt_len = s.static_len = 0;
                s.last_lit = s.matches = 0;
              }
              function bi_windup(s) {
                if (s.bi_valid > 8) {
                  put_short(s, s.bi_buf);
                } else if (s.bi_valid > 0) {
                  s.pending_buf[s.pending++] = s.bi_buf;
                }
                s.bi_buf = 0;
                s.bi_valid = 0;
              }
              function copy_block(s, buf, len, header) {
                bi_windup(s);
                if (header) {
                  put_short(s, len);
                  put_short(s, ~len);
                }
                utils.arraySet(s.pending_buf, s.window, buf, len, s.pending);
                s.pending += len;
              }
              function smaller(tree, n, m, depth) {
                var _n2 = n * 2;
                var _m2 = m * 2;
                return tree[_n2] < tree[_m2] || (tree[_n2] === tree[_m2] && depth[n] <= depth[m]);
              }
              function pqdownheap(s, tree, k) {
                var v = s.heap[k];
                var j = k << 1;
                while (j <= s.heap_len) {
                  if (j < s.heap_len && smaller(tree, s.heap[j + 1], s.heap[j], s.depth)) {
                    j++;
                  }
                  if (smaller(tree, v, s.heap[j], s.depth)) {
                    break;
                  }
                  s.heap[k] = s.heap[j];
                  k = j;
                  j <<= 1;
                }
                s.heap[k] = v;
              }
              function compress_block(s, ltree, dtree) {
                var dist;
                var lc;
                var lx = 0;
                var code;
                var extra;
                if (s.last_lit !== 0) {
                  do {
                    dist = (s.pending_buf[s.d_buf + lx * 2] << 8) | s.pending_buf[s.d_buf + lx * 2 + 1];
                    lc = s.pending_buf[s.l_buf + lx];
                    lx++;
                    if (dist === 0) {
                      send_code(s, lc, ltree);
                    } else {
                      code = _length_code[lc];
                      send_code(s, code + LITERALS + 1, ltree);
                      extra = extra_lbits[code];
                      if (extra !== 0) {
                        lc -= base_length[code];
                        send_bits(s, lc, extra);
                      }
                      dist--;
                      code = d_code(dist);
                      send_code(s, code, dtree);
                      extra = extra_dbits[code];
                      if (extra !== 0) {
                        dist -= base_dist[code];
                        send_bits(s, dist, extra);
                      }
                    }
                  } while (lx < s.last_lit);
                }
                send_code(s, END_BLOCK, ltree);
              }
              function build_tree(s, desc) {
                var tree = desc.dyn_tree;
                var stree = desc.stat_desc.static_tree;
                var has_stree = desc.stat_desc.has_stree;
                var elems = desc.stat_desc.elems;
                var n, m;
                var max_code = -1;
                var node;
                s.heap_len = 0;
                s.heap_max = HEAP_SIZE;
                for (n = 0; n < elems; n++) {
                  if (tree[n * 2] !== 0) {
                    s.heap[++s.heap_len] = max_code = n;
                    s.depth[n] = 0;
                  } else {
                    tree[n * 2 + 1] = 0;
                  }
                }
                while (s.heap_len < 2) {
                  node = s.heap[++s.heap_len] = max_code < 2 ? ++max_code : 0;
                  tree[node * 2] = 1;
                  s.depth[node] = 0;
                  s.opt_len--;
                  if (has_stree) {
                    s.static_len -= stree[node * 2 + 1];
                  }
                }
                desc.max_code = max_code;
                for (n = s.heap_len >> 1; n >= 1; n--) {
                  pqdownheap(s, tree, n);
                }
                node = elems;
                do {
                  n =
                    s.heap[1];
                    /*SMALLEST*/
                  s.heap[1] = s.heap[s.heap_len--];
                  /*SMALLEST*/
                  pqdownheap(
                    s,
                    tree,
                    1
                    /*SMALLEST*/
                  );
                  m =
                    s.heap[1];
                    /*SMALLEST*/
                  s.heap[--s.heap_max] = n;
                  s.heap[--s.heap_max] = m;
                  tree[node * 2] = tree[n * 2] + tree[m * 2];
                  s.depth[node] = (s.depth[n] >= s.depth[m] ? s.depth[n] : s.depth[m]) + 1;
                  tree[n * 2 + 1] = tree[m * 2 + 1] = node;
                  s.heap[1] =
                  /*SMALLEST*/
                    node++;
                  pqdownheap(
                    s,
                    tree,
                    1
                    /*SMALLEST*/
                  );
                } while (s.heap_len >= 2);
                s.heap[--s.heap_max] =
                  s.heap[1];
                  /*SMALLEST*/
                gen_bitlen(s, desc);
                gen_codes(tree, max_code, s.bl_count);
              }
              function scan_tree(s, tree, max_code) {
                var n;
                var prevlen = -1;
                var curlen;
                var nextlen = tree[0 * 2 + 1];
                var count = 0;
                var max_count = 7;
                var min_count = 4;
                if (nextlen === 0) {
                  max_count = 138;
                  min_count = 3;
                }
                tree[(max_code + 1) * 2 + 1] = 65535;
                for (n = 0; n <= max_code; n++) {
                  curlen = nextlen;
                  nextlen = tree[(n + 1) * 2 + 1];
                  if (++count < max_count && curlen === nextlen) {
                    continue;
                  } else if (count < min_count) {
                    s.bl_tree[curlen * 2] += count;
                  } else if (curlen !== 0) {
                    if (curlen !== prevlen) {
                      s.bl_tree[curlen * 2]++;
                    }
                    s.bl_tree[REP_3_6 * 2]++;
                  } else if (count <= 10) {
                    s.bl_tree[REPZ_3_10 * 2]++;
                  } else {
                    s.bl_tree[REPZ_11_138 * 2]++;
                  }
                  count = 0;
                  prevlen = curlen;
                  if (nextlen === 0) {
                    max_count = 138;
                    min_count = 3;
                  } else if (curlen === nextlen) {
                    max_count = 6;
                    min_count = 3;
                  } else {
                    max_count = 7;
                    min_count = 4;
                  }
                }
              }
              function send_tree(s, tree, max_code) {
                var n;
                var prevlen = -1;
                var curlen;
                var nextlen = tree[0 * 2 + 1];
                var count = 0;
                var max_count = 7;
                var min_count = 4;
                if (nextlen === 0) {
                  max_count = 138;
                  min_count = 3;
                }
                for (n = 0; n <= max_code; n++) {
                  curlen = nextlen;
                  nextlen = tree[(n + 1) * 2 + 1];
                  if (++count < max_count && curlen === nextlen) {
                    continue;
                  } else if (count < min_count) {
                    do {
                      send_code(s, curlen, s.bl_tree);
                    } while (--count !== 0);
                  } else if (curlen !== 0) {
                    if (curlen !== prevlen) {
                      send_code(s, curlen, s.bl_tree);
                      count--;
                    }
                    send_code(s, REP_3_6, s.bl_tree);
                    send_bits(s, count - 3, 2);
                  } else if (count <= 10) {
                    send_code(s, REPZ_3_10, s.bl_tree);
                    send_bits(s, count - 3, 3);
                  } else {
                    send_code(s, REPZ_11_138, s.bl_tree);
                    send_bits(s, count - 11, 7);
                  }
                  count = 0;
                  prevlen = curlen;
                  if (nextlen === 0) {
                    max_count = 138;
                    min_count = 3;
                  } else if (curlen === nextlen) {
                    max_count = 6;
                    min_count = 3;
                  } else {
                    max_count = 7;
                    min_count = 4;
                  }
                }
              }
              function build_bl_tree(s) {
                var max_blindex;
                scan_tree(s, s.dyn_ltree, s.l_desc.max_code);
                scan_tree(s, s.dyn_dtree, s.d_desc.max_code);
                build_tree(s, s.bl_desc);
                for (max_blindex = BL_CODES - 1; max_blindex >= 3; max_blindex--) {
                  if (s.bl_tree[bl_order[max_blindex] * 2 + 1] !== 0) {
                    break;
                  }
                }
                s.opt_len += 3 * (max_blindex + 1) + 5 + 5 + 4;
                return max_blindex;
              }
              function send_all_trees(s, lcodes, dcodes, blcodes) {
                var rank;
                send_bits(s, lcodes - 257, 5);
                send_bits(s, dcodes - 1, 5);
                send_bits(s, blcodes - 4, 4);
                for (rank = 0; rank < blcodes; rank++) {
                  send_bits(s, s.bl_tree[bl_order[rank] * 2 + 1], 3);
                }
                send_tree(s, s.dyn_ltree, lcodes - 1);
                send_tree(s, s.dyn_dtree, dcodes - 1);
              }
              function detect_data_type(s) {
                var black_mask = 4093624447;
                var n;
                for (n = 0; n <= 31; n++, black_mask >>>= 1) {
                  if (black_mask & 1 && s.dyn_ltree[n * 2] !== 0) {
                    return Z_BINARY;
                  }
                }
                if (s.dyn_ltree[9 * 2] !== 0 || s.dyn_ltree[10 * 2] !== 0 || s.dyn_ltree[13 * 2] !== 0) {
                  return Z_TEXT;
                }
                for (n = 32; n < LITERALS; n++) {
                  if (s.dyn_ltree[n * 2] !== 0) {
                    return Z_TEXT;
                  }
                }
                return Z_BINARY;
              }
              var static_init_done = false;
              function _tr_init(s) {
                if (!static_init_done) {
                  tr_static_init();
                  static_init_done = true;
                }
                s.l_desc = new TreeDesc(s.dyn_ltree, static_l_desc);
                s.d_desc = new TreeDesc(s.dyn_dtree, static_d_desc);
                s.bl_desc = new TreeDesc(s.bl_tree, static_bl_desc);
                s.bi_buf = 0;
                s.bi_valid = 0;
                init_block(s);
              }
              function _tr_stored_block(s, buf, stored_len, last) {
                send_bits(s, (STORED_BLOCK << 1) + (last ? 1 : 0), 3);
                copy_block(s, buf, stored_len, true);
              }
              function _tr_align(s) {
                send_bits(s, STATIC_TREES << 1, 3);
                send_code(s, END_BLOCK, static_ltree);
                bi_flush(s);
              }
              function _tr_flush_block(s, buf, stored_len, last) {
                var opt_lenb, static_lenb;
                var max_blindex = 0;
                if (s.level > 0) {
                  if (s.strm.data_type === Z_UNKNOWN) {
                    s.strm.data_type = detect_data_type(s);
                  }
                  build_tree(s, s.l_desc);
                  build_tree(s, s.d_desc);
                  max_blindex = build_bl_tree(s);
                  opt_lenb = (s.opt_len + 3 + 7) >>> 3;
                  static_lenb = (s.static_len + 3 + 7) >>> 3;
                  if (static_lenb <= opt_lenb) {
                    opt_lenb = static_lenb;
                  }
                } else {
                  opt_lenb = static_lenb = stored_len + 5;
                }
                if (stored_len + 4 <= opt_lenb && buf !== -1) {
                  _tr_stored_block(s, buf, stored_len, last);
                } else if (s.strategy === Z_FIXED || static_lenb === opt_lenb) {
                  send_bits(s, (STATIC_TREES << 1) + (last ? 1 : 0), 3);
                  compress_block(s, static_ltree, static_dtree);
                } else {
                  send_bits(s, (DYN_TREES << 1) + (last ? 1 : 0), 3);
                  send_all_trees(s, s.l_desc.max_code + 1, s.d_desc.max_code + 1, max_blindex + 1);
                  compress_block(s, s.dyn_ltree, s.dyn_dtree);
                }
                init_block(s);
                if (last) {
                  bi_windup(s);
                }
              }
              function _tr_tally(s, dist, lc) {
                s.pending_buf[s.d_buf + s.last_lit * 2] = (dist >>> 8) & 255;
                s.pending_buf[s.d_buf + s.last_lit * 2 + 1] = dist & 255;
                s.pending_buf[s.l_buf + s.last_lit] = lc & 255;
                s.last_lit++;
                if (dist === 0) {
                  s.dyn_ltree[lc * 2]++;
                } else {
                  s.matches++;
                  dist--;
                  s.dyn_ltree[(_length_code[lc] + LITERALS + 1) * 2]++;
                  s.dyn_dtree[d_code(dist) * 2]++;
                }
                return s.last_lit === s.lit_bufsize - 1;
              }
              exports3._tr_init = _tr_init;
              exports3._tr_stored_block = _tr_stored_block;
              exports3._tr_flush_block = _tr_flush_block;
              exports3._tr_tally = _tr_tally;
              exports3._tr_align = _tr_align;
            },
            { '../utils/common': 50 }
          ],
          62: [
            function (require2, module3, exports3) {
              'use strict';
              function ZStream() {
                this.input = null;
                this.next_in = 0;
                this.avail_in = 0;
                this.total_in = 0;
                this.output = null;
                this.next_out = 0;
                this.avail_out = 0;
                this.total_out = 0;
                this.msg = '';
                this.state = null;
                this.data_type = 2;
                this.adler = 0;
              }
              module3.exports = ZStream;
            },
            {}
          ],
          63: [
            function (require2, module3, exports3) {
              (function (process) {
                'use strict';
                if (
                  typeof process === 'undefined' ||
                  !process.version ||
                  process.version.indexOf('v0.') === 0 ||
                  (process.version.indexOf('v1.') === 0 && process.version.indexOf('v1.8.') !== 0)
                ) {
                  module3.exports = { nextTick };
                } else {
                  module3.exports = process;
                }
                function nextTick(fn, arg1, arg2, arg3) {
                  if (typeof fn !== 'function') {
                    throw new TypeError('"callback" argument must be a function');
                  }
                  var len = arguments.length;
                  var args, i;
                  switch (len) {
                    case 0:
                    case 1:
                      return process.nextTick(fn);
                    case 2:
                      return process.nextTick(function afterTickOne() {
                        fn.call(null, arg1);
                      });
                    case 3:
                      return process.nextTick(function afterTickTwo() {
                        fn.call(null, arg1, arg2);
                      });
                    case 4:
                      return process.nextTick(function afterTickThree() {
                        fn.call(null, arg1, arg2, arg3);
                      });
                    default:
                      args = new Array(len - 1);
                      i = 0;
                      while (i < args.length) {
                        args[i++] = arguments[i];
                      }
                      return process.nextTick(function afterTick() {
                        fn.apply(null, args);
                      });
                  }
                }
              }).call(this, require2('_process'));
            },
            { _process: 64 }
          ],
          64: [
            function (require2, module3, exports3) {
              var process = (module3.exports = {});
              var cachedSetTimeout;
              var cachedClearTimeout;
              function defaultSetTimout() {
                throw new Error('setTimeout has not been defined');
              }
              function defaultClearTimeout() {
                throw new Error('clearTimeout has not been defined');
              }
              (function () {
                try {
                  if (typeof setTimeout === 'function') {
                    cachedSetTimeout = setTimeout;
                  } else {
                    cachedSetTimeout = defaultSetTimout;
                  }
                } catch (e) {
                  cachedSetTimeout = defaultSetTimout;
                }
                try {
                  if (typeof clearTimeout === 'function') {
                    cachedClearTimeout = clearTimeout;
                  } else {
                    cachedClearTimeout = defaultClearTimeout;
                  }
                } catch (e) {
                  cachedClearTimeout = defaultClearTimeout;
                }
              })();
              function runTimeout(fun) {
                if (cachedSetTimeout === setTimeout) {
                  return setTimeout(fun, 0);
                }
                if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
                  cachedSetTimeout = setTimeout;
                  return setTimeout(fun, 0);
                }
                try {
                  return cachedSetTimeout(fun, 0);
                } catch (e) {
                  try {
                    return cachedSetTimeout.call(null, fun, 0);
                  } catch (e2) {
                    return cachedSetTimeout.call(this, fun, 0);
                  }
                }
              }
              function runClearTimeout(marker) {
                if (cachedClearTimeout === clearTimeout) {
                  return clearTimeout(marker);
                }
                if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
                  cachedClearTimeout = clearTimeout;
                  return clearTimeout(marker);
                }
                try {
                  return cachedClearTimeout(marker);
                } catch (e) {
                  try {
                    return cachedClearTimeout.call(null, marker);
                  } catch (e2) {
                    return cachedClearTimeout.call(this, marker);
                  }
                }
              }
              var queue = [];
              var draining = false;
              var currentQueue;
              var queueIndex = -1;
              function cleanUpNextTick() {
                if (!draining || !currentQueue) {
                  return;
                }
                draining = false;
                if (currentQueue.length) {
                  queue = currentQueue.concat(queue);
                } else {
                  queueIndex = -1;
                }
                if (queue.length) {
                  drainQueue();
                }
              }
              function drainQueue() {
                if (draining) {
                  return;
                }
                var timeout = runTimeout(cleanUpNextTick);
                draining = true;
                var len = queue.length;
                while (len) {
                  currentQueue = queue;
                  queue = [];
                  while (++queueIndex < len) {
                    if (currentQueue) {
                      currentQueue[queueIndex].run();
                    }
                  }
                  queueIndex = -1;
                  len = queue.length;
                }
                currentQueue = null;
                draining = false;
                runClearTimeout(timeout);
              }
              process.nextTick = function (fun) {
                var args = new Array(arguments.length - 1);
                if (arguments.length > 1) {
                  for (var i = 1; i < arguments.length; i++) {
                    args[i - 1] = arguments[i];
                  }
                }
                queue.push(new Item(fun, args));
                if (queue.length === 1 && !draining) {
                  runTimeout(drainQueue);
                }
              };
              function Item(fun, array) {
                this.fun = fun;
                this.array = array;
              }
              Item.prototype.run = function () {
                this.fun.apply(null, this.array);
              };
              process.title = 'browser';
              process.browser = true;
              process.env = {};
              process.argv = [];
              process.version = '';
              process.versions = {};
              function noop() {}
              process.on = noop;
              process.addListener = noop;
              process.once = noop;
              process.off = noop;
              process.removeListener = noop;
              process.removeAllListeners = noop;
              process.emit = noop;
              process.prependListener = noop;
              process.prependOnceListener = noop;
              process.listeners = function (name) {
                return [];
              };
              process.binding = function (name) {
                throw new Error('process.binding is not supported');
              };
              process.cwd = function () {
                return '/';
              };
              process.chdir = function (dir) {
                throw new Error('process.chdir is not supported');
              };
              process.umask = function () {
                return 0;
              };
            },
            {}
          ],
          65: [
            function (require2, module3, exports3) {
              module3.exports = require2('./lib/_stream_duplex.js');
            },
            { './lib/_stream_duplex.js': 66 }
          ],
          66: [
            function (require2, module3, exports3) {
              'use strict';
              var pna = require2('process-nextick-args');
              var objectKeys =
                Object.keys ||
                function (obj) {
                  var keys2 = [];
                  for (var key in obj) {
                    keys2.push(key);
                  }
                  return keys2;
                };
              module3.exports = Duplex;
              var util = Object.create(require2('core-util-is'));
              util.inherits = require2('inherits');
              var Readable = require2('./_stream_readable');
              var Writable = require2('./_stream_writable');
              util.inherits(Duplex, Readable);
              {
                var keys = objectKeys(Writable.prototype);
                for (var v = 0; v < keys.length; v++) {
                  var method = keys[v];
                  if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
                }
              }
              function Duplex(options) {
                if (!(this instanceof Duplex)) return new Duplex(options);
                Readable.call(this, options);
                Writable.call(this, options);
                if (options && options.readable === false) this.readable = false;
                if (options && options.writable === false) this.writable = false;
                this.allowHalfOpen = true;
                if (options && options.allowHalfOpen === false) this.allowHalfOpen = false;
                this.once('end', onend);
              }
              Object.defineProperty(Duplex.prototype, 'writableHighWaterMark', {
                // making it explicit this property is not enumerable
                // because otherwise some prototype manipulation in
                // userland will fail
                enumerable: false,
                get: function () {
                  return this._writableState.highWaterMark;
                }
              });
              function onend() {
                if (this.allowHalfOpen || this._writableState.ended) return;
                pna.nextTick(onEndNT, this);
              }
              function onEndNT(self2) {
                self2.end();
              }
              Object.defineProperty(Duplex.prototype, 'destroyed', {
                get: function () {
                  if (this._readableState === void 0 || this._writableState === void 0) {
                    return false;
                  }
                  return this._readableState.destroyed && this._writableState.destroyed;
                },
                set: function (value) {
                  if (this._readableState === void 0 || this._writableState === void 0) {
                    return;
                  }
                  this._readableState.destroyed = value;
                  this._writableState.destroyed = value;
                }
              });
              Duplex.prototype._destroy = function (err, cb) {
                this.push(null);
                this.end();
                pna.nextTick(cb, err);
              };
            },
            { './_stream_readable': 68, './_stream_writable': 70, 'core-util-is': 4, inherits: 8, 'process-nextick-args': 63 }
          ],
          67: [
            function (require2, module3, exports3) {
              'use strict';
              module3.exports = PassThrough;
              var Transform = require2('./_stream_transform');
              var util = Object.create(require2('core-util-is'));
              util.inherits = require2('inherits');
              util.inherits(PassThrough, Transform);
              function PassThrough(options) {
                if (!(this instanceof PassThrough)) return new PassThrough(options);
                Transform.call(this, options);
              }
              PassThrough.prototype._transform = function (chunk, encoding, cb) {
                cb(null, chunk);
              };
            },
            { './_stream_transform': 69, 'core-util-is': 4, inherits: 8 }
          ],
          68: [
            function (require2, module3, exports3) {
              (function (process, global2) {
                'use strict';
                var pna = require2('process-nextick-args');
                module3.exports = Readable;
                var isArray = require2('isarray');
                var Duplex;
                Readable.ReadableState = ReadableState;
                var EE = require2('events').EventEmitter;
                var EElistenerCount = function (emitter, type) {
                  return emitter.listeners(type).length;
                };
                var Stream = require2('./internal/streams/stream');
                var Buffer = require2('safe-buffer').Buffer;
                var OurUint8Array = global2.Uint8Array || function () {};
                function _uint8ArrayToBuffer(chunk) {
                  return Buffer.from(chunk);
                }
                function _isUint8Array(obj) {
                  return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
                }
                var util = Object.create(require2('core-util-is'));
                util.inherits = require2('inherits');
                var debugUtil = require2('util');
                var debug = void 0;
                if (debugUtil && debugUtil.debuglog) {
                  debug = debugUtil.debuglog('stream');
                } else {
                  debug = function () {};
                }
                var BufferList = require2('./internal/streams/BufferList');
                var destroyImpl = require2('./internal/streams/destroy');
                var StringDecoder;
                util.inherits(Readable, Stream);
                var kProxyEvents = ['error', 'close', 'destroy', 'pause', 'resume'];
                function prependListener(emitter, event, fn) {
                  if (typeof emitter.prependListener === 'function') return emitter.prependListener(event, fn);
                  if (!emitter._events || !emitter._events[event]) emitter.on(event, fn);
                  else if (isArray(emitter._events[event])) emitter._events[event].unshift(fn);
                  else emitter._events[event] = [fn, emitter._events[event]];
                }
                function ReadableState(options, stream) {
                  Duplex = Duplex || require2('./_stream_duplex');
                  options = options || {};
                  var isDuplex = stream instanceof Duplex;
                  this.objectMode = !!options.objectMode;
                  if (isDuplex) this.objectMode = this.objectMode || !!options.readableObjectMode;
                  var hwm = options.highWaterMark;
                  var readableHwm = options.readableHighWaterMark;
                  var defaultHwm = this.objectMode ? 16 : 16 * 1024;
                  if (hwm || hwm === 0) this.highWaterMark = hwm;
                  else if (isDuplex && (readableHwm || readableHwm === 0)) this.highWaterMark = readableHwm;
                  else this.highWaterMark = defaultHwm;
                  this.highWaterMark = Math.floor(this.highWaterMark);
                  this.buffer = new BufferList();
                  this.length = 0;
                  this.pipes = null;
                  this.pipesCount = 0;
                  this.flowing = null;
                  this.ended = false;
                  this.endEmitted = false;
                  this.reading = false;
                  this.sync = true;
                  this.needReadable = false;
                  this.emittedReadable = false;
                  this.readableListening = false;
                  this.resumeScheduled = false;
                  this.destroyed = false;
                  this.defaultEncoding = options.defaultEncoding || 'utf8';
                  this.awaitDrain = 0;
                  this.readingMore = false;
                  this.decoder = null;
                  this.encoding = null;
                  if (options.encoding) {
                    if (!StringDecoder) StringDecoder = require2('string_decoder/').StringDecoder;
                    this.decoder = new StringDecoder(options.encoding);
                    this.encoding = options.encoding;
                  }
                }
                function Readable(options) {
                  Duplex = Duplex || require2('./_stream_duplex');
                  if (!(this instanceof Readable)) return new Readable(options);
                  this._readableState = new ReadableState(options, this);
                  this.readable = true;
                  if (options) {
                    if (typeof options.read === 'function') this._read = options.read;
                    if (typeof options.destroy === 'function') this._destroy = options.destroy;
                  }
                  Stream.call(this);
                }
                Object.defineProperty(Readable.prototype, 'destroyed', {
                  get: function () {
                    if (this._readableState === void 0) {
                      return false;
                    }
                    return this._readableState.destroyed;
                  },
                  set: function (value) {
                    if (!this._readableState) {
                      return;
                    }
                    this._readableState.destroyed = value;
                  }
                });
                Readable.prototype.destroy = destroyImpl.destroy;
                Readable.prototype._undestroy = destroyImpl.undestroy;
                Readable.prototype._destroy = function (err, cb) {
                  this.push(null);
                  cb(err);
                };
                Readable.prototype.push = function (chunk, encoding) {
                  var state = this._readableState;
                  var skipChunkCheck;
                  if (!state.objectMode) {
                    if (typeof chunk === 'string') {
                      encoding = encoding || state.defaultEncoding;
                      if (encoding !== state.encoding) {
                        chunk = Buffer.from(chunk, encoding);
                        encoding = '';
                      }
                      skipChunkCheck = true;
                    }
                  } else {
                    skipChunkCheck = true;
                  }
                  return readableAddChunk(this, chunk, encoding, false, skipChunkCheck);
                };
                Readable.prototype.unshift = function (chunk) {
                  return readableAddChunk(this, chunk, null, true, false);
                };
                function readableAddChunk(stream, chunk, encoding, addToFront, skipChunkCheck) {
                  var state = stream._readableState;
                  if (chunk === null) {
                    state.reading = false;
                    onEofChunk(stream, state);
                  } else {
                    var er;
                    if (!skipChunkCheck) er = chunkInvalid(state, chunk);
                    if (er) {
                      stream.emit('error', er);
                    } else if (state.objectMode || (chunk && chunk.length > 0)) {
                      if (typeof chunk !== 'string' && !state.objectMode && Object.getPrototypeOf(chunk) !== Buffer.prototype) {
                        chunk = _uint8ArrayToBuffer(chunk);
                      }
                      if (addToFront) {
                        if (state.endEmitted) stream.emit('error', new Error('stream.unshift() after end event'));
                        else addChunk(stream, state, chunk, true);
                      } else if (state.ended) {
                        stream.emit('error', new Error('stream.push() after EOF'));
                      } else {
                        state.reading = false;
                        if (state.decoder && !encoding) {
                          chunk = state.decoder.write(chunk);
                          if (state.objectMode || chunk.length !== 0) addChunk(stream, state, chunk, false);
                          else maybeReadMore(stream, state);
                        } else {
                          addChunk(stream, state, chunk, false);
                        }
                      }
                    } else if (!addToFront) {
                      state.reading = false;
                    }
                  }
                  return needMoreData(state);
                }
                function addChunk(stream, state, chunk, addToFront) {
                  if (state.flowing && state.length === 0 && !state.sync) {
                    stream.emit('data', chunk);
                    stream.read(0);
                  } else {
                    state.length += state.objectMode ? 1 : chunk.length;
                    if (addToFront) state.buffer.unshift(chunk);
                    else state.buffer.push(chunk);
                    if (state.needReadable) emitReadable(stream);
                  }
                  maybeReadMore(stream, state);
                }
                function chunkInvalid(state, chunk) {
                  var er;
                  if (!_isUint8Array(chunk) && typeof chunk !== 'string' && chunk !== void 0 && !state.objectMode) {
                    er = new TypeError('Invalid non-string/buffer chunk');
                  }
                  return er;
                }
                function needMoreData(state) {
                  return !state.ended && (state.needReadable || state.length < state.highWaterMark || state.length === 0);
                }
                Readable.prototype.isPaused = function () {
                  return this._readableState.flowing === false;
                };
                Readable.prototype.setEncoding = function (enc) {
                  if (!StringDecoder) StringDecoder = require2('string_decoder/').StringDecoder;
                  this._readableState.decoder = new StringDecoder(enc);
                  this._readableState.encoding = enc;
                  return this;
                };
                var MAX_HWM = 8388608;
                function computeNewHighWaterMark(n) {
                  if (n >= MAX_HWM) {
                    n = MAX_HWM;
                  } else {
                    n--;
                    n |= n >>> 1;
                    n |= n >>> 2;
                    n |= n >>> 4;
                    n |= n >>> 8;
                    n |= n >>> 16;
                    n++;
                  }
                  return n;
                }
                function howMuchToRead(n, state) {
                  if (n <= 0 || (state.length === 0 && state.ended)) return 0;
                  if (state.objectMode) return 1;
                  if (n !== n) {
                    if (state.flowing && state.length) return state.buffer.head.data.length;
                    else return state.length;
                  }
                  if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);
                  if (n <= state.length) return n;
                  if (!state.ended) {
                    state.needReadable = true;
                    return 0;
                  }
                  return state.length;
                }
                Readable.prototype.read = function (n) {
                  debug('read', n);
                  n = parseInt(n, 10);
                  var state = this._readableState;
                  var nOrig = n;
                  if (n !== 0) state.emittedReadable = false;
                  if (n === 0 && state.needReadable && (state.length >= state.highWaterMark || state.ended)) {
                    debug('read: emitReadable', state.length, state.ended);
                    if (state.length === 0 && state.ended) endReadable(this);
                    else emitReadable(this);
                    return null;
                  }
                  n = howMuchToRead(n, state);
                  if (n === 0 && state.ended) {
                    if (state.length === 0) endReadable(this);
                    return null;
                  }
                  var doRead = state.needReadable;
                  debug('need readable', doRead);
                  if (state.length === 0 || state.length - n < state.highWaterMark) {
                    doRead = true;
                    debug('length less than watermark', doRead);
                  }
                  if (state.ended || state.reading) {
                    doRead = false;
                    debug('reading or ended', doRead);
                  } else if (doRead) {
                    debug('do read');
                    state.reading = true;
                    state.sync = true;
                    if (state.length === 0) state.needReadable = true;
                    this._read(state.highWaterMark);
                    state.sync = false;
                    if (!state.reading) n = howMuchToRead(nOrig, state);
                  }
                  var ret;
                  if (n > 0) ret = fromList(n, state);
                  else ret = null;
                  if (ret === null) {
                    state.needReadable = true;
                    n = 0;
                  } else {
                    state.length -= n;
                  }
                  if (state.length === 0) {
                    if (!state.ended) state.needReadable = true;
                    if (nOrig !== n && state.ended) endReadable(this);
                  }
                  if (ret !== null) this.emit('data', ret);
                  return ret;
                };
                function onEofChunk(stream, state) {
                  if (state.ended) return;
                  if (state.decoder) {
                    var chunk = state.decoder.end();
                    if (chunk && chunk.length) {
                      state.buffer.push(chunk);
                      state.length += state.objectMode ? 1 : chunk.length;
                    }
                  }
                  state.ended = true;
                  emitReadable(stream);
                }
                function emitReadable(stream) {
                  var state = stream._readableState;
                  state.needReadable = false;
                  if (!state.emittedReadable) {
                    debug('emitReadable', state.flowing);
                    state.emittedReadable = true;
                    if (state.sync) pna.nextTick(emitReadable_, stream);
                    else emitReadable_(stream);
                  }
                }
                function emitReadable_(stream) {
                  debug('emit readable');
                  stream.emit('readable');
                  flow(stream);
                }
                function maybeReadMore(stream, state) {
                  if (!state.readingMore) {
                    state.readingMore = true;
                    pna.nextTick(maybeReadMore_, stream, state);
                  }
                }
                function maybeReadMore_(stream, state) {
                  var len = state.length;
                  while (!state.reading && !state.flowing && !state.ended && state.length < state.highWaterMark) {
                    debug('maybeReadMore read 0');
                    stream.read(0);
                    if (len === state.length) break;
                    else len = state.length;
                  }
                  state.readingMore = false;
                }
                Readable.prototype._read = function (n) {
                  this.emit('error', new Error('_read() is not implemented'));
                };
                Readable.prototype.pipe = function (dest, pipeOpts) {
                  var src = this;
                  var state = this._readableState;
                  switch (state.pipesCount) {
                    case 0:
                      state.pipes = dest;
                      break;
                    case 1:
                      state.pipes = [state.pipes, dest];
                      break;
                    default:
                      state.pipes.push(dest);
                      break;
                  }
                  state.pipesCount += 1;
                  debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);
                  var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;
                  var endFn = doEnd ? onend : unpipe;
                  if (state.endEmitted) pna.nextTick(endFn);
                  else src.once('end', endFn);
                  dest.on('unpipe', onunpipe);
                  function onunpipe(readable, unpipeInfo) {
                    debug('onunpipe');
                    if (readable === src) {
                      if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
                        unpipeInfo.hasUnpiped = true;
                        cleanup();
                      }
                    }
                  }
                  function onend() {
                    debug('onend');
                    dest.end();
                  }
                  var ondrain = pipeOnDrain(src);
                  dest.on('drain', ondrain);
                  var cleanedUp = false;
                  function cleanup() {
                    debug('cleanup');
                    dest.removeListener('close', onclose);
                    dest.removeListener('finish', onfinish);
                    dest.removeListener('drain', ondrain);
                    dest.removeListener('error', onerror);
                    dest.removeListener('unpipe', onunpipe);
                    src.removeListener('end', onend);
                    src.removeListener('end', unpipe);
                    src.removeListener('data', ondata);
                    cleanedUp = true;
                    if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
                  }
                  var increasedAwaitDrain = false;
                  src.on('data', ondata);
                  function ondata(chunk) {
                    debug('ondata');
                    increasedAwaitDrain = false;
                    var ret = dest.write(chunk);
                    if (false === ret && !increasedAwaitDrain) {
                      if (
                        ((state.pipesCount === 1 && state.pipes === dest) ||
                          (state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1)) &&
                        !cleanedUp
                      ) {
                        debug('false write response, pause', src._readableState.awaitDrain);
                        src._readableState.awaitDrain++;
                        increasedAwaitDrain = true;
                      }
                      src.pause();
                    }
                  }
                  function onerror(er) {
                    debug('onerror', er);
                    unpipe();
                    dest.removeListener('error', onerror);
                    if (EElistenerCount(dest, 'error') === 0) dest.emit('error', er);
                  }
                  prependListener(dest, 'error', onerror);
                  function onclose() {
                    dest.removeListener('finish', onfinish);
                    unpipe();
                  }
                  dest.once('close', onclose);
                  function onfinish() {
                    debug('onfinish');
                    dest.removeListener('close', onclose);
                    unpipe();
                  }
                  dest.once('finish', onfinish);
                  function unpipe() {
                    debug('unpipe');
                    src.unpipe(dest);
                  }
                  dest.emit('pipe', src);
                  if (!state.flowing) {
                    debug('pipe resume');
                    src.resume();
                  }
                  return dest;
                };
                function pipeOnDrain(src) {
                  return function () {
                    var state = src._readableState;
                    debug('pipeOnDrain', state.awaitDrain);
                    if (state.awaitDrain) state.awaitDrain--;
                    if (state.awaitDrain === 0 && EElistenerCount(src, 'data')) {
                      state.flowing = true;
                      flow(src);
                    }
                  };
                }
                Readable.prototype.unpipe = function (dest) {
                  var state = this._readableState;
                  var unpipeInfo = { hasUnpiped: false };
                  if (state.pipesCount === 0) return this;
                  if (state.pipesCount === 1) {
                    if (dest && dest !== state.pipes) return this;
                    if (!dest) dest = state.pipes;
                    state.pipes = null;
                    state.pipesCount = 0;
                    state.flowing = false;
                    if (dest) dest.emit('unpipe', this, unpipeInfo);
                    return this;
                  }
                  if (!dest) {
                    var dests = state.pipes;
                    var len = state.pipesCount;
                    state.pipes = null;
                    state.pipesCount = 0;
                    state.flowing = false;
                    for (var i = 0; i < len; i++) {
                      dests[i].emit('unpipe', this, unpipeInfo);
                    }
                    return this;
                  }
                  var index = indexOf(state.pipes, dest);
                  if (index === -1) return this;
                  state.pipes.splice(index, 1);
                  state.pipesCount -= 1;
                  if (state.pipesCount === 1) state.pipes = state.pipes[0];
                  dest.emit('unpipe', this, unpipeInfo);
                  return this;
                };
                Readable.prototype.on = function (ev, fn) {
                  var res = Stream.prototype.on.call(this, ev, fn);
                  if (ev === 'data') {
                    if (this._readableState.flowing !== false) this.resume();
                  } else if (ev === 'readable') {
                    var state = this._readableState;
                    if (!state.endEmitted && !state.readableListening) {
                      state.readableListening = state.needReadable = true;
                      state.emittedReadable = false;
                      if (!state.reading) {
                        pna.nextTick(nReadingNextTick, this);
                      } else if (state.length) {
                        emitReadable(this);
                      }
                    }
                  }
                  return res;
                };
                Readable.prototype.addListener = Readable.prototype.on;
                function nReadingNextTick(self2) {
                  debug('readable nexttick read 0');
                  self2.read(0);
                }
                Readable.prototype.resume = function () {
                  var state = this._readableState;
                  if (!state.flowing) {
                    debug('resume');
                    state.flowing = true;
                    resume(this, state);
                  }
                  return this;
                };
                function resume(stream, state) {
                  if (!state.resumeScheduled) {
                    state.resumeScheduled = true;
                    pna.nextTick(resume_, stream, state);
                  }
                }
                function resume_(stream, state) {
                  if (!state.reading) {
                    debug('resume read 0');
                    stream.read(0);
                  }
                  state.resumeScheduled = false;
                  state.awaitDrain = 0;
                  stream.emit('resume');
                  flow(stream);
                  if (state.flowing && !state.reading) stream.read(0);
                }
                Readable.prototype.pause = function () {
                  debug('call pause flowing=%j', this._readableState.flowing);
                  if (false !== this._readableState.flowing) {
                    debug('pause');
                    this._readableState.flowing = false;
                    this.emit('pause');
                  }
                  return this;
                };
                function flow(stream) {
                  var state = stream._readableState;
                  debug('flow', state.flowing);
                  while (state.flowing && stream.read() !== null) {}
                }
                Readable.prototype.wrap = function (stream) {
                  var _this = this;
                  var state = this._readableState;
                  var paused = false;
                  stream.on('end', function () {
                    debug('wrapped end');
                    if (state.decoder && !state.ended) {
                      var chunk = state.decoder.end();
                      if (chunk && chunk.length) _this.push(chunk);
                    }
                    _this.push(null);
                  });
                  stream.on('data', function (chunk) {
                    debug('wrapped data');
                    if (state.decoder) chunk = state.decoder.write(chunk);
                    if (state.objectMode && (chunk === null || chunk === void 0)) return;
                    else if (!state.objectMode && (!chunk || !chunk.length)) return;
                    var ret = _this.push(chunk);
                    if (!ret) {
                      paused = true;
                      stream.pause();
                    }
                  });
                  for (var i in stream) {
                    if (this[i] === void 0 && typeof stream[i] === 'function') {
                      this[i] = /* @__PURE__ */ (function (method) {
                        return function () {
                          return stream[method].apply(stream, arguments);
                        };
                      })(i);
                    }
                  }
                  for (var n = 0; n < kProxyEvents.length; n++) {
                    stream.on(kProxyEvents[n], this.emit.bind(this, kProxyEvents[n]));
                  }
                  this._read = function (n2) {
                    debug('wrapped _read', n2);
                    if (paused) {
                      paused = false;
                      stream.resume();
                    }
                  };
                  return this;
                };
                Object.defineProperty(Readable.prototype, 'readableHighWaterMark', {
                  // making it explicit this property is not enumerable
                  // because otherwise some prototype manipulation in
                  // userland will fail
                  enumerable: false,
                  get: function () {
                    return this._readableState.highWaterMark;
                  }
                });
                Readable._fromList = fromList;
                function fromList(n, state) {
                  if (state.length === 0) return null;
                  var ret;
                  if (state.objectMode) ret = state.buffer.shift();
                  else if (!n || n >= state.length) {
                    if (state.decoder) ret = state.buffer.join('');
                    else if (state.buffer.length === 1) ret = state.buffer.head.data;
                    else ret = state.buffer.concat(state.length);
                    state.buffer.clear();
                  } else {
                    ret = fromListPartial(n, state.buffer, state.decoder);
                  }
                  return ret;
                }
                function fromListPartial(n, list, hasStrings) {
                  var ret;
                  if (n < list.head.data.length) {
                    ret = list.head.data.slice(0, n);
                    list.head.data = list.head.data.slice(n);
                  } else if (n === list.head.data.length) {
                    ret = list.shift();
                  } else {
                    ret = hasStrings ? copyFromBufferString(n, list) : copyFromBuffer(n, list);
                  }
                  return ret;
                }
                function copyFromBufferString(n, list) {
                  var p = list.head;
                  var c = 1;
                  var ret = p.data;
                  n -= ret.length;
                  while ((p = p.next)) {
                    var str = p.data;
                    var nb = n > str.length ? str.length : n;
                    if (nb === str.length) ret += str;
                    else ret += str.slice(0, n);
                    n -= nb;
                    if (n === 0) {
                      if (nb === str.length) {
                        ++c;
                        if (p.next) list.head = p.next;
                        else list.head = list.tail = null;
                      } else {
                        list.head = p;
                        p.data = str.slice(nb);
                      }
                      break;
                    }
                    ++c;
                  }
                  list.length -= c;
                  return ret;
                }
                function copyFromBuffer(n, list) {
                  var ret = Buffer.allocUnsafe(n);
                  var p = list.head;
                  var c = 1;
                  p.data.copy(ret);
                  n -= p.data.length;
                  while ((p = p.next)) {
                    var buf = p.data;
                    var nb = n > buf.length ? buf.length : n;
                    buf.copy(ret, ret.length - n, 0, nb);
                    n -= nb;
                    if (n === 0) {
                      if (nb === buf.length) {
                        ++c;
                        if (p.next) list.head = p.next;
                        else list.head = list.tail = null;
                      } else {
                        list.head = p;
                        p.data = buf.slice(nb);
                      }
                      break;
                    }
                    ++c;
                  }
                  list.length -= c;
                  return ret;
                }
                function endReadable(stream) {
                  var state = stream._readableState;
                  if (state.length > 0) throw new Error('"endReadable()" called on non-empty stream');
                  if (!state.endEmitted) {
                    state.ended = true;
                    pna.nextTick(endReadableNT, state, stream);
                  }
                }
                function endReadableNT(state, stream) {
                  if (!state.endEmitted && state.length === 0) {
                    state.endEmitted = true;
                    stream.readable = false;
                    stream.emit('end');
                  }
                }
                function indexOf(xs, x) {
                  for (var i = 0, l = xs.length; i < l; i++) {
                    if (xs[i] === x) return i;
                  }
                  return -1;
                }
              }).call(
                this,
                require2('_process'),
                typeof global !== 'undefined'
                  ? global
                  : typeof self !== 'undefined'
                    ? self
                    : typeof window !== 'undefined'
                      ? window
                      : {}
              );
            },
            {
              './_stream_duplex': 66,
              './internal/streams/BufferList': 71,
              './internal/streams/destroy': 72,
              './internal/streams/stream': 73,
              _process: 64,
              'core-util-is': 4,
              events: 5,
              inherits: 8,
              isarray: 10,
              'process-nextick-args': 63,
              'safe-buffer': 78,
              'string_decoder/': 81,
              util: 2
            }
          ],
          69: [
            function (require2, module3, exports3) {
              'use strict';
              module3.exports = Transform;
              var Duplex = require2('./_stream_duplex');
              var util = Object.create(require2('core-util-is'));
              util.inherits = require2('inherits');
              util.inherits(Transform, Duplex);
              function afterTransform(er, data) {
                var ts = this._transformState;
                ts.transforming = false;
                var cb = ts.writecb;
                if (!cb) {
                  return this.emit('error', new Error('write callback called multiple times'));
                }
                ts.writechunk = null;
                ts.writecb = null;
                if (data != null) this.push(data);
                cb(er);
                var rs = this._readableState;
                rs.reading = false;
                if (rs.needReadable || rs.length < rs.highWaterMark) {
                  this._read(rs.highWaterMark);
                }
              }
              function Transform(options) {
                if (!(this instanceof Transform)) return new Transform(options);
                Duplex.call(this, options);
                this._transformState = {
                  afterTransform: afterTransform.bind(this),
                  needTransform: false,
                  transforming: false,
                  writecb: null,
                  writechunk: null,
                  writeencoding: null
                };
                this._readableState.needReadable = true;
                this._readableState.sync = false;
                if (options) {
                  if (typeof options.transform === 'function') this._transform = options.transform;
                  if (typeof options.flush === 'function') this._flush = options.flush;
                }
                this.on('prefinish', prefinish);
              }
              function prefinish() {
                var _this = this;
                if (typeof this._flush === 'function') {
                  this._flush(function (er, data) {
                    done(_this, er, data);
                  });
                } else {
                  done(this, null, null);
                }
              }
              Transform.prototype.push = function (chunk, encoding) {
                this._transformState.needTransform = false;
                return Duplex.prototype.push.call(this, chunk, encoding);
              };
              Transform.prototype._transform = function (chunk, encoding, cb) {
                throw new Error('_transform() is not implemented');
              };
              Transform.prototype._write = function (chunk, encoding, cb) {
                var ts = this._transformState;
                ts.writecb = cb;
                ts.writechunk = chunk;
                ts.writeencoding = encoding;
                if (!ts.transforming) {
                  var rs = this._readableState;
                  if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
                }
              };
              Transform.prototype._read = function (n) {
                var ts = this._transformState;
                if (ts.writechunk !== null && ts.writecb && !ts.transforming) {
                  ts.transforming = true;
                  this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
                } else {
                  ts.needTransform = true;
                }
              };
              Transform.prototype._destroy = function (err, cb) {
                var _this2 = this;
                Duplex.prototype._destroy.call(this, err, function (err2) {
                  cb(err2);
                  _this2.emit('close');
                });
              };
              function done(stream, er, data) {
                if (er) return stream.emit('error', er);
                if (data != null) stream.push(data);
                if (stream._writableState.length) throw new Error('Calling transform done when ws.length != 0');
                if (stream._transformState.transforming) throw new Error('Calling transform done when still transforming');
                return stream.push(null);
              }
            },
            { './_stream_duplex': 66, 'core-util-is': 4, inherits: 8 }
          ],
          70: [
            function (require2, module3, exports3) {
              (function (process, global2, setImmediate) {
                'use strict';
                var pna = require2('process-nextick-args');
                module3.exports = Writable;
                function WriteReq(chunk, encoding, cb) {
                  this.chunk = chunk;
                  this.encoding = encoding;
                  this.callback = cb;
                  this.next = null;
                }
                function CorkedRequest(state) {
                  var _this = this;
                  this.next = null;
                  this.entry = null;
                  this.finish = function () {
                    onCorkedFinish(_this, state);
                  };
                }
                var asyncWrite =
                  !process.browser && ['v0.10', 'v0.9.'].indexOf(process.version.slice(0, 5)) > -1 ? setImmediate : pna.nextTick;
                var Duplex;
                Writable.WritableState = WritableState;
                var util = Object.create(require2('core-util-is'));
                util.inherits = require2('inherits');
                var internalUtil = {
                  deprecate: require2('util-deprecate')
                };
                var Stream = require2('./internal/streams/stream');
                var Buffer = require2('safe-buffer').Buffer;
                var OurUint8Array = global2.Uint8Array || function () {};
                function _uint8ArrayToBuffer(chunk) {
                  return Buffer.from(chunk);
                }
                function _isUint8Array(obj) {
                  return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
                }
                var destroyImpl = require2('./internal/streams/destroy');
                util.inherits(Writable, Stream);
                function nop() {}
                function WritableState(options, stream) {
                  Duplex = Duplex || require2('./_stream_duplex');
                  options = options || {};
                  var isDuplex = stream instanceof Duplex;
                  this.objectMode = !!options.objectMode;
                  if (isDuplex) this.objectMode = this.objectMode || !!options.writableObjectMode;
                  var hwm = options.highWaterMark;
                  var writableHwm = options.writableHighWaterMark;
                  var defaultHwm = this.objectMode ? 16 : 16 * 1024;
                  if (hwm || hwm === 0) this.highWaterMark = hwm;
                  else if (isDuplex && (writableHwm || writableHwm === 0)) this.highWaterMark = writableHwm;
                  else this.highWaterMark = defaultHwm;
                  this.highWaterMark = Math.floor(this.highWaterMark);
                  this.finalCalled = false;
                  this.needDrain = false;
                  this.ending = false;
                  this.ended = false;
                  this.finished = false;
                  this.destroyed = false;
                  var noDecode = options.decodeStrings === false;
                  this.decodeStrings = !noDecode;
                  this.defaultEncoding = options.defaultEncoding || 'utf8';
                  this.length = 0;
                  this.writing = false;
                  this.corked = 0;
                  this.sync = true;
                  this.bufferProcessing = false;
                  this.onwrite = function (er) {
                    onwrite(stream, er);
                  };
                  this.writecb = null;
                  this.writelen = 0;
                  this.bufferedRequest = null;
                  this.lastBufferedRequest = null;
                  this.pendingcb = 0;
                  this.prefinished = false;
                  this.errorEmitted = false;
                  this.bufferedRequestCount = 0;
                  this.corkedRequestsFree = new CorkedRequest(this);
                }
                WritableState.prototype.getBuffer = function getBuffer() {
                  var current = this.bufferedRequest;
                  var out = [];
                  while (current) {
                    out.push(current);
                    current = current.next;
                  }
                  return out;
                };
                (function () {
                  try {
                    Object.defineProperty(WritableState.prototype, 'buffer', {
                      get: internalUtil.deprecate(
                        function () {
                          return this.getBuffer();
                        },
                        '_writableState.buffer is deprecated. Use _writableState.getBuffer instead.',
                        'DEP0003'
                      )
                    });
                  } catch (_) {}
                })();
                var realHasInstance;
                if (
                  typeof Symbol === 'function' &&
                  Symbol.hasInstance &&
                  typeof Function.prototype[Symbol.hasInstance] === 'function'
                ) {
                  realHasInstance = Function.prototype[Symbol.hasInstance];
                  Object.defineProperty(Writable, Symbol.hasInstance, {
                    value: function (object) {
                      if (realHasInstance.call(this, object)) return true;
                      if (this !== Writable) return false;
                      return object && object._writableState instanceof WritableState;
                    }
                  });
                } else {
                  realHasInstance = function (object) {
                    return object instanceof this;
                  };
                }
                function Writable(options) {
                  Duplex = Duplex || require2('./_stream_duplex');
                  if (!realHasInstance.call(Writable, this) && !(this instanceof Duplex)) {
                    return new Writable(options);
                  }
                  this._writableState = new WritableState(options, this);
                  this.writable = true;
                  if (options) {
                    if (typeof options.write === 'function') this._write = options.write;
                    if (typeof options.writev === 'function') this._writev = options.writev;
                    if (typeof options.destroy === 'function') this._destroy = options.destroy;
                    if (typeof options.final === 'function') this._final = options.final;
                  }
                  Stream.call(this);
                }
                Writable.prototype.pipe = function () {
                  this.emit('error', new Error('Cannot pipe, not readable'));
                };
                function writeAfterEnd(stream, cb) {
                  var er = new Error('write after end');
                  stream.emit('error', er);
                  pna.nextTick(cb, er);
                }
                function validChunk(stream, state, chunk, cb) {
                  var valid = true;
                  var er = false;
                  if (chunk === null) {
                    er = new TypeError('May not write null values to stream');
                  } else if (typeof chunk !== 'string' && chunk !== void 0 && !state.objectMode) {
                    er = new TypeError('Invalid non-string/buffer chunk');
                  }
                  if (er) {
                    stream.emit('error', er);
                    pna.nextTick(cb, er);
                    valid = false;
                  }
                  return valid;
                }
                Writable.prototype.write = function (chunk, encoding, cb) {
                  var state = this._writableState;
                  var ret = false;
                  var isBuf = !state.objectMode && _isUint8Array(chunk);
                  if (isBuf && !Buffer.isBuffer(chunk)) {
                    chunk = _uint8ArrayToBuffer(chunk);
                  }
                  if (typeof encoding === 'function') {
                    cb = encoding;
                    encoding = null;
                  }
                  if (isBuf) encoding = 'buffer';
                  else if (!encoding) encoding = state.defaultEncoding;
                  if (typeof cb !== 'function') cb = nop;
                  if (state.ended) writeAfterEnd(this, cb);
                  else if (isBuf || validChunk(this, state, chunk, cb)) {
                    state.pendingcb++;
                    ret = writeOrBuffer(this, state, isBuf, chunk, encoding, cb);
                  }
                  return ret;
                };
                Writable.prototype.cork = function () {
                  var state = this._writableState;
                  state.corked++;
                };
                Writable.prototype.uncork = function () {
                  var state = this._writableState;
                  if (state.corked) {
                    state.corked--;
                    if (!state.writing && !state.corked && !state.finished && !state.bufferProcessing && state.bufferedRequest)
                      clearBuffer(this, state);
                  }
                };
                Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
                  if (typeof encoding === 'string') encoding = encoding.toLowerCase();
                  if (
                    !(
                      [
                        'hex',
                        'utf8',
                        'utf-8',
                        'ascii',
                        'binary',
                        'base64',
                        'ucs2',
                        'ucs-2',
                        'utf16le',
                        'utf-16le',
                        'raw'
                      ].indexOf((encoding + '').toLowerCase()) > -1
                    )
                  )
                    throw new TypeError('Unknown encoding: ' + encoding);
                  this._writableState.defaultEncoding = encoding;
                  return this;
                };
                function decodeChunk(state, chunk, encoding) {
                  if (!state.objectMode && state.decodeStrings !== false && typeof chunk === 'string') {
                    chunk = Buffer.from(chunk, encoding);
                  }
                  return chunk;
                }
                Object.defineProperty(Writable.prototype, 'writableHighWaterMark', {
                  // making it explicit this property is not enumerable
                  // because otherwise some prototype manipulation in
                  // userland will fail
                  enumerable: false,
                  get: function () {
                    return this._writableState.highWaterMark;
                  }
                });
                function writeOrBuffer(stream, state, isBuf, chunk, encoding, cb) {
                  if (!isBuf) {
                    var newChunk = decodeChunk(state, chunk, encoding);
                    if (chunk !== newChunk) {
                      isBuf = true;
                      encoding = 'buffer';
                      chunk = newChunk;
                    }
                  }
                  var len = state.objectMode ? 1 : chunk.length;
                  state.length += len;
                  var ret = state.length < state.highWaterMark;
                  if (!ret) state.needDrain = true;
                  if (state.writing || state.corked) {
                    var last = state.lastBufferedRequest;
                    state.lastBufferedRequest = {
                      chunk,
                      encoding,
                      isBuf,
                      callback: cb,
                      next: null
                    };
                    if (last) {
                      last.next = state.lastBufferedRequest;
                    } else {
                      state.bufferedRequest = state.lastBufferedRequest;
                    }
                    state.bufferedRequestCount += 1;
                  } else {
                    doWrite(stream, state, false, len, chunk, encoding, cb);
                  }
                  return ret;
                }
                function doWrite(stream, state, writev, len, chunk, encoding, cb) {
                  state.writelen = len;
                  state.writecb = cb;
                  state.writing = true;
                  state.sync = true;
                  if (writev) stream._writev(chunk, state.onwrite);
                  else stream._write(chunk, encoding, state.onwrite);
                  state.sync = false;
                }
                function onwriteError(stream, state, sync, er, cb) {
                  --state.pendingcb;
                  if (sync) {
                    pna.nextTick(cb, er);
                    pna.nextTick(finishMaybe, stream, state);
                    stream._writableState.errorEmitted = true;
                    stream.emit('error', er);
                  } else {
                    cb(er);
                    stream._writableState.errorEmitted = true;
                    stream.emit('error', er);
                    finishMaybe(stream, state);
                  }
                }
                function onwriteStateUpdate(state) {
                  state.writing = false;
                  state.writecb = null;
                  state.length -= state.writelen;
                  state.writelen = 0;
                }
                function onwrite(stream, er) {
                  var state = stream._writableState;
                  var sync = state.sync;
                  var cb = state.writecb;
                  onwriteStateUpdate(state);
                  if (er) onwriteError(stream, state, sync, er, cb);
                  else {
                    var finished = needFinish(state);
                    if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
                      clearBuffer(stream, state);
                    }
                    if (sync) {
                      asyncWrite(afterWrite, stream, state, finished, cb);
                    } else {
                      afterWrite(stream, state, finished, cb);
                    }
                  }
                }
                function afterWrite(stream, state, finished, cb) {
                  if (!finished) onwriteDrain(stream, state);
                  state.pendingcb--;
                  cb();
                  finishMaybe(stream, state);
                }
                function onwriteDrain(stream, state) {
                  if (state.length === 0 && state.needDrain) {
                    state.needDrain = false;
                    stream.emit('drain');
                  }
                }
                function clearBuffer(stream, state) {
                  state.bufferProcessing = true;
                  var entry = state.bufferedRequest;
                  if (stream._writev && entry && entry.next) {
                    var l = state.bufferedRequestCount;
                    var buffer = new Array(l);
                    var holder = state.corkedRequestsFree;
                    holder.entry = entry;
                    var count = 0;
                    var allBuffers = true;
                    while (entry) {
                      buffer[count] = entry;
                      if (!entry.isBuf) allBuffers = false;
                      entry = entry.next;
                      count += 1;
                    }
                    buffer.allBuffers = allBuffers;
                    doWrite(stream, state, true, state.length, buffer, '', holder.finish);
                    state.pendingcb++;
                    state.lastBufferedRequest = null;
                    if (holder.next) {
                      state.corkedRequestsFree = holder.next;
                      holder.next = null;
                    } else {
                      state.corkedRequestsFree = new CorkedRequest(state);
                    }
                    state.bufferedRequestCount = 0;
                  } else {
                    while (entry) {
                      var chunk = entry.chunk;
                      var encoding = entry.encoding;
                      var cb = entry.callback;
                      var len = state.objectMode ? 1 : chunk.length;
                      doWrite(stream, state, false, len, chunk, encoding, cb);
                      entry = entry.next;
                      state.bufferedRequestCount--;
                      if (state.writing) {
                        break;
                      }
                    }
                    if (entry === null) state.lastBufferedRequest = null;
                  }
                  state.bufferedRequest = entry;
                  state.bufferProcessing = false;
                }
                Writable.prototype._write = function (chunk, encoding, cb) {
                  cb(new Error('_write() is not implemented'));
                };
                Writable.prototype._writev = null;
                Writable.prototype.end = function (chunk, encoding, cb) {
                  var state = this._writableState;
                  if (typeof chunk === 'function') {
                    cb = chunk;
                    chunk = null;
                    encoding = null;
                  } else if (typeof encoding === 'function') {
                    cb = encoding;
                    encoding = null;
                  }
                  if (chunk !== null && chunk !== void 0) this.write(chunk, encoding);
                  if (state.corked) {
                    state.corked = 1;
                    this.uncork();
                  }
                  if (!state.ending && !state.finished) endWritable(this, state, cb);
                };
                function needFinish(state) {
                  return (
                    state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing
                  );
                }
                function callFinal(stream, state) {
                  stream._final(function (err) {
                    state.pendingcb--;
                    if (err) {
                      stream.emit('error', err);
                    }
                    state.prefinished = true;
                    stream.emit('prefinish');
                    finishMaybe(stream, state);
                  });
                }
                function prefinish(stream, state) {
                  if (!state.prefinished && !state.finalCalled) {
                    if (typeof stream._final === 'function') {
                      state.pendingcb++;
                      state.finalCalled = true;
                      pna.nextTick(callFinal, stream, state);
                    } else {
                      state.prefinished = true;
                      stream.emit('prefinish');
                    }
                  }
                }
                function finishMaybe(stream, state) {
                  var need = needFinish(state);
                  if (need) {
                    prefinish(stream, state);
                    if (state.pendingcb === 0) {
                      state.finished = true;
                      stream.emit('finish');
                    }
                  }
                  return need;
                }
                function endWritable(stream, state, cb) {
                  state.ending = true;
                  finishMaybe(stream, state);
                  if (cb) {
                    if (state.finished) pna.nextTick(cb);
                    else stream.once('finish', cb);
                  }
                  state.ended = true;
                  stream.writable = false;
                }
                function onCorkedFinish(corkReq, state, err) {
                  var entry = corkReq.entry;
                  corkReq.entry = null;
                  while (entry) {
                    var cb = entry.callback;
                    state.pendingcb--;
                    cb(err);
                    entry = entry.next;
                  }
                  if (state.corkedRequestsFree) {
                    state.corkedRequestsFree.next = corkReq;
                  } else {
                    state.corkedRequestsFree = corkReq;
                  }
                }
                Object.defineProperty(Writable.prototype, 'destroyed', {
                  get: function () {
                    if (this._writableState === void 0) {
                      return false;
                    }
                    return this._writableState.destroyed;
                  },
                  set: function (value) {
                    if (!this._writableState) {
                      return;
                    }
                    this._writableState.destroyed = value;
                  }
                });
                Writable.prototype.destroy = destroyImpl.destroy;
                Writable.prototype._undestroy = destroyImpl.undestroy;
                Writable.prototype._destroy = function (err, cb) {
                  this.end();
                  cb(err);
                };
              }).call(
                this,
                require2('_process'),
                typeof global !== 'undefined'
                  ? global
                  : typeof self !== 'undefined'
                    ? self
                    : typeof window !== 'undefined'
                      ? window
                      : {},
                require2('timers').setImmediate
              );
            },
            {
              './_stream_duplex': 66,
              './internal/streams/destroy': 72,
              './internal/streams/stream': 73,
              _process: 64,
              'core-util-is': 4,
              inherits: 8,
              'process-nextick-args': 63,
              'safe-buffer': 78,
              timers: 82,
              'util-deprecate': 83
            }
          ],
          71: [
            function (require2, module3, exports3) {
              'use strict';
              function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                  throw new TypeError('Cannot call a class as a function');
                }
              }
              var Buffer = require2('safe-buffer').Buffer;
              var util = require2('util');
              function copyBuffer(src, target, offset) {
                src.copy(target, offset);
              }
              module3.exports = (function () {
                function BufferList() {
                  _classCallCheck(this, BufferList);
                  this.head = null;
                  this.tail = null;
                  this.length = 0;
                }
                BufferList.prototype.push = function push(v) {
                  var entry = { data: v, next: null };
                  if (this.length > 0) this.tail.next = entry;
                  else this.head = entry;
                  this.tail = entry;
                  ++this.length;
                };
                BufferList.prototype.unshift = function unshift(v) {
                  var entry = { data: v, next: this.head };
                  if (this.length === 0) this.tail = entry;
                  this.head = entry;
                  ++this.length;
                };
                BufferList.prototype.shift = function shift() {
                  if (this.length === 0) return;
                  var ret = this.head.data;
                  if (this.length === 1) this.head = this.tail = null;
                  else this.head = this.head.next;
                  --this.length;
                  return ret;
                };
                BufferList.prototype.clear = function clear() {
                  this.head = this.tail = null;
                  this.length = 0;
                };
                BufferList.prototype.join = function join(s) {
                  if (this.length === 0) return '';
                  var p = this.head;
                  var ret = '' + p.data;
                  while ((p = p.next)) {
                    ret += s + p.data;
                  }
                  return ret;
                };
                BufferList.prototype.concat = function concat(n) {
                  if (this.length === 0) return Buffer.alloc(0);
                  if (this.length === 1) return this.head.data;
                  var ret = Buffer.allocUnsafe(n >>> 0);
                  var p = this.head;
                  var i = 0;
                  while (p) {
                    copyBuffer(p.data, ret, i);
                    i += p.data.length;
                    p = p.next;
                  }
                  return ret;
                };
                return BufferList;
              })();
              if (util && util.inspect && util.inspect.custom) {
                module3.exports.prototype[util.inspect.custom] = function () {
                  var obj = util.inspect({ length: this.length });
                  return this.constructor.name + ' ' + obj;
                };
              }
            },
            { 'safe-buffer': 78, util: 2 }
          ],
          72: [
            function (require2, module3, exports3) {
              'use strict';
              var pna = require2('process-nextick-args');
              function destroy(err, cb) {
                var _this = this;
                var readableDestroyed = this._readableState && this._readableState.destroyed;
                var writableDestroyed = this._writableState && this._writableState.destroyed;
                if (readableDestroyed || writableDestroyed) {
                  if (cb) {
                    cb(err);
                  } else if (err && (!this._writableState || !this._writableState.errorEmitted)) {
                    pna.nextTick(emitErrorNT, this, err);
                  }
                  return this;
                }
                if (this._readableState) {
                  this._readableState.destroyed = true;
                }
                if (this._writableState) {
                  this._writableState.destroyed = true;
                }
                this._destroy(err || null, function (err2) {
                  if (!cb && err2) {
                    pna.nextTick(emitErrorNT, _this, err2);
                    if (_this._writableState) {
                      _this._writableState.errorEmitted = true;
                    }
                  } else if (cb) {
                    cb(err2);
                  }
                });
                return this;
              }
              function undestroy() {
                if (this._readableState) {
                  this._readableState.destroyed = false;
                  this._readableState.reading = false;
                  this._readableState.ended = false;
                  this._readableState.endEmitted = false;
                }
                if (this._writableState) {
                  this._writableState.destroyed = false;
                  this._writableState.ended = false;
                  this._writableState.ending = false;
                  this._writableState.finished = false;
                  this._writableState.errorEmitted = false;
                }
              }
              function emitErrorNT(self2, err) {
                self2.emit('error', err);
              }
              module3.exports = {
                destroy,
                undestroy
              };
            },
            { 'process-nextick-args': 63 }
          ],
          73: [
            function (require2, module3, exports3) {
              module3.exports = require2('events').EventEmitter;
            },
            { events: 5 }
          ],
          74: [
            function (require2, module3, exports3) {
              module3.exports = require2('./readable').PassThrough;
            },
            { './readable': 75 }
          ],
          75: [
            function (require2, module3, exports3) {
              exports3 = module3.exports = require2('./lib/_stream_readable.js');
              exports3.Stream = exports3;
              exports3.Readable = exports3;
              exports3.Writable = require2('./lib/_stream_writable.js');
              exports3.Duplex = require2('./lib/_stream_duplex.js');
              exports3.Transform = require2('./lib/_stream_transform.js');
              exports3.PassThrough = require2('./lib/_stream_passthrough.js');
            },
            {
              './lib/_stream_duplex.js': 66,
              './lib/_stream_passthrough.js': 67,
              './lib/_stream_readable.js': 68,
              './lib/_stream_transform.js': 69,
              './lib/_stream_writable.js': 70
            }
          ],
          76: [
            function (require2, module3, exports3) {
              module3.exports = require2('./readable').Transform;
            },
            { './readable': 75 }
          ],
          77: [
            function (require2, module3, exports3) {
              module3.exports = require2('./lib/_stream_writable.js');
            },
            { './lib/_stream_writable.js': 70 }
          ],
          78: [
            function (require2, module3, exports3) {
              var buffer = require2('buffer');
              var Buffer = buffer.Buffer;
              function copyProps(src, dst) {
                for (var key in src) {
                  dst[key] = src[key];
                }
              }
              if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {
                module3.exports = buffer;
              } else {
                copyProps(buffer, exports3);
                exports3.Buffer = SafeBuffer;
              }
              function SafeBuffer(arg, encodingOrOffset, length) {
                return Buffer(arg, encodingOrOffset, length);
              }
              copyProps(Buffer, SafeBuffer);
              SafeBuffer.from = function (arg, encodingOrOffset, length) {
                if (typeof arg === 'number') {
                  throw new TypeError('Argument must not be a number');
                }
                return Buffer(arg, encodingOrOffset, length);
              };
              SafeBuffer.alloc = function (size, fill, encoding) {
                if (typeof size !== 'number') {
                  throw new TypeError('Argument must be a number');
                }
                var buf = Buffer(size);
                if (fill !== void 0) {
                  if (typeof encoding === 'string') {
                    buf.fill(fill, encoding);
                  } else {
                    buf.fill(fill);
                  }
                } else {
                  buf.fill(0);
                }
                return buf;
              };
              SafeBuffer.allocUnsafe = function (size) {
                if (typeof size !== 'number') {
                  throw new TypeError('Argument must be a number');
                }
                return Buffer(size);
              };
              SafeBuffer.allocUnsafeSlow = function (size) {
                if (typeof size !== 'number') {
                  throw new TypeError('Argument must be a number');
                }
                return buffer.SlowBuffer(size);
              };
            },
            { buffer: 3 }
          ],
          79: [
            function (require2, module3, exports3) {
              (function (setImmediate) {
                'use strict';
                module3.exports =
                  typeof setImmediate === 'function'
                    ? setImmediate
                    : function setImmediate2() {
                        var args = [].slice.apply(arguments);
                        args.splice(1, 0, 0);
                        setTimeout.apply(null, args);
                      };
              }).call(this, require2('timers').setImmediate);
            },
            { timers: 82 }
          ],
          80: [
            function (require2, module3, exports3) {
              module3.exports = Stream;
              var EE = require2('events').EventEmitter;
              var inherits = require2('inherits');
              inherits(Stream, EE);
              Stream.Readable = require2('readable-stream/readable.js');
              Stream.Writable = require2('readable-stream/writable.js');
              Stream.Duplex = require2('readable-stream/duplex.js');
              Stream.Transform = require2('readable-stream/transform.js');
              Stream.PassThrough = require2('readable-stream/passthrough.js');
              Stream.Stream = Stream;
              function Stream() {
                EE.call(this);
              }
              Stream.prototype.pipe = function (dest, options) {
                var source = this;
                function ondata(chunk) {
                  if (dest.writable) {
                    if (false === dest.write(chunk) && source.pause) {
                      source.pause();
                    }
                  }
                }
                source.on('data', ondata);
                function ondrain() {
                  if (source.readable && source.resume) {
                    source.resume();
                  }
                }
                dest.on('drain', ondrain);
                if (!dest._isStdio && (!options || options.end !== false)) {
                  source.on('end', onend);
                  source.on('close', onclose);
                }
                var didOnEnd = false;
                function onend() {
                  if (didOnEnd) return;
                  didOnEnd = true;
                  dest.end();
                }
                function onclose() {
                  if (didOnEnd) return;
                  didOnEnd = true;
                  if (typeof dest.destroy === 'function') dest.destroy();
                }
                function onerror(er) {
                  cleanup();
                  if (EE.listenerCount(this, 'error') === 0) {
                    throw er;
                  }
                }
                source.on('error', onerror);
                dest.on('error', onerror);
                function cleanup() {
                  source.removeListener('data', ondata);
                  dest.removeListener('drain', ondrain);
                  source.removeListener('end', onend);
                  source.removeListener('close', onclose);
                  source.removeListener('error', onerror);
                  dest.removeListener('error', onerror);
                  source.removeListener('end', cleanup);
                  source.removeListener('close', cleanup);
                  dest.removeListener('close', cleanup);
                }
                source.on('end', cleanup);
                source.on('close', cleanup);
                dest.on('close', cleanup);
                dest.emit('pipe', source);
                return dest;
              };
            },
            {
              events: 5,
              inherits: 8,
              'readable-stream/duplex.js': 65,
              'readable-stream/passthrough.js': 74,
              'readable-stream/readable.js': 75,
              'readable-stream/transform.js': 76,
              'readable-stream/writable.js': 77
            }
          ],
          81: [
            function (require2, module3, exports3) {
              'use strict';
              var Buffer = require2('safe-buffer').Buffer;
              var isEncoding =
                Buffer.isEncoding ||
                function (encoding) {
                  encoding = '' + encoding;
                  switch (encoding && encoding.toLowerCase()) {
                    case 'hex':
                    case 'utf8':
                    case 'utf-8':
                    case 'ascii':
                    case 'binary':
                    case 'base64':
                    case 'ucs2':
                    case 'ucs-2':
                    case 'utf16le':
                    case 'utf-16le':
                    case 'raw':
                      return true;
                    default:
                      return false;
                  }
                };
              function _normalizeEncoding(enc) {
                if (!enc) return 'utf8';
                var retried;
                while (true) {
                  switch (enc) {
                    case 'utf8':
                    case 'utf-8':
                      return 'utf8';
                    case 'ucs2':
                    case 'ucs-2':
                    case 'utf16le':
                    case 'utf-16le':
                      return 'utf16le';
                    case 'latin1':
                    case 'binary':
                      return 'latin1';
                    case 'base64':
                    case 'ascii':
                    case 'hex':
                      return enc;
                    default:
                      if (retried) return;
                      enc = ('' + enc).toLowerCase();
                      retried = true;
                  }
                }
              }
              function normalizeEncoding(enc) {
                var nenc = _normalizeEncoding(enc);
                if (typeof nenc !== 'string' && (Buffer.isEncoding === isEncoding || !isEncoding(enc)))
                  throw new Error('Unknown encoding: ' + enc);
                return nenc || enc;
              }
              exports3.StringDecoder = StringDecoder;
              function StringDecoder(encoding) {
                this.encoding = normalizeEncoding(encoding);
                var nb;
                switch (this.encoding) {
                  case 'utf16le':
                    this.text = utf16Text;
                    this.end = utf16End;
                    nb = 4;
                    break;
                  case 'utf8':
                    this.fillLast = utf8FillLast;
                    nb = 4;
                    break;
                  case 'base64':
                    this.text = base64Text;
                    this.end = base64End;
                    nb = 3;
                    break;
                  default:
                    this.write = simpleWrite;
                    this.end = simpleEnd;
                    return;
                }
                this.lastNeed = 0;
                this.lastTotal = 0;
                this.lastChar = Buffer.allocUnsafe(nb);
              }
              StringDecoder.prototype.write = function (buf) {
                if (buf.length === 0) return '';
                var r;
                var i;
                if (this.lastNeed) {
                  r = this.fillLast(buf);
                  if (r === void 0) return '';
                  i = this.lastNeed;
                  this.lastNeed = 0;
                } else {
                  i = 0;
                }
                if (i < buf.length) return r ? r + this.text(buf, i) : this.text(buf, i);
                return r || '';
              };
              StringDecoder.prototype.end = utf8End;
              StringDecoder.prototype.text = utf8Text;
              StringDecoder.prototype.fillLast = function (buf) {
                if (this.lastNeed <= buf.length) {
                  buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
                  return this.lastChar.toString(this.encoding, 0, this.lastTotal);
                }
                buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
                this.lastNeed -= buf.length;
              };
              function utf8CheckByte(byte) {
                if (byte <= 127) return 0;
                else if (byte >> 5 === 6) return 2;
                else if (byte >> 4 === 14) return 3;
                else if (byte >> 3 === 30) return 4;
                return byte >> 6 === 2 ? -1 : -2;
              }
              function utf8CheckIncomplete(self2, buf, i) {
                var j = buf.length - 1;
                if (j < i) return 0;
                var nb = utf8CheckByte(buf[j]);
                if (nb >= 0) {
                  if (nb > 0) self2.lastNeed = nb - 1;
                  return nb;
                }
                if (--j < i || nb === -2) return 0;
                nb = utf8CheckByte(buf[j]);
                if (nb >= 0) {
                  if (nb > 0) self2.lastNeed = nb - 2;
                  return nb;
                }
                if (--j < i || nb === -2) return 0;
                nb = utf8CheckByte(buf[j]);
                if (nb >= 0) {
                  if (nb > 0) {
                    if (nb === 2) nb = 0;
                    else self2.lastNeed = nb - 3;
                  }
                  return nb;
                }
                return 0;
              }
              function utf8CheckExtraBytes(self2, buf, p) {
                if ((buf[0] & 192) !== 128) {
                  self2.lastNeed = 0;
                  return '�';
                }
                if (self2.lastNeed > 1 && buf.length > 1) {
                  if ((buf[1] & 192) !== 128) {
                    self2.lastNeed = 1;
                    return '�';
                  }
                  if (self2.lastNeed > 2 && buf.length > 2) {
                    if ((buf[2] & 192) !== 128) {
                      self2.lastNeed = 2;
                      return '�';
                    }
                  }
                }
              }
              function utf8FillLast(buf) {
                var p = this.lastTotal - this.lastNeed;
                var r = utf8CheckExtraBytes(this, buf, p);
                if (r !== void 0) return r;
                if (this.lastNeed <= buf.length) {
                  buf.copy(this.lastChar, p, 0, this.lastNeed);
                  return this.lastChar.toString(this.encoding, 0, this.lastTotal);
                }
                buf.copy(this.lastChar, p, 0, buf.length);
                this.lastNeed -= buf.length;
              }
              function utf8Text(buf, i) {
                var total = utf8CheckIncomplete(this, buf, i);
                if (!this.lastNeed) return buf.toString('utf8', i);
                this.lastTotal = total;
                var end = buf.length - (total - this.lastNeed);
                buf.copy(this.lastChar, 0, end);
                return buf.toString('utf8', i, end);
              }
              function utf8End(buf) {
                var r = buf && buf.length ? this.write(buf) : '';
                if (this.lastNeed) return r + '�';
                return r;
              }
              function utf16Text(buf, i) {
                if ((buf.length - i) % 2 === 0) {
                  var r = buf.toString('utf16le', i);
                  if (r) {
                    var c = r.charCodeAt(r.length - 1);
                    if (c >= 55296 && c <= 56319) {
                      this.lastNeed = 2;
                      this.lastTotal = 4;
                      this.lastChar[0] = buf[buf.length - 2];
                      this.lastChar[1] = buf[buf.length - 1];
                      return r.slice(0, -1);
                    }
                  }
                  return r;
                }
                this.lastNeed = 1;
                this.lastTotal = 2;
                this.lastChar[0] = buf[buf.length - 1];
                return buf.toString('utf16le', i, buf.length - 1);
              }
              function utf16End(buf) {
                var r = buf && buf.length ? this.write(buf) : '';
                if (this.lastNeed) {
                  var end = this.lastTotal - this.lastNeed;
                  return r + this.lastChar.toString('utf16le', 0, end);
                }
                return r;
              }
              function base64Text(buf, i) {
                var n = (buf.length - i) % 3;
                if (n === 0) return buf.toString('base64', i);
                this.lastNeed = 3 - n;
                this.lastTotal = 3;
                if (n === 1) {
                  this.lastChar[0] = buf[buf.length - 1];
                } else {
                  this.lastChar[0] = buf[buf.length - 2];
                  this.lastChar[1] = buf[buf.length - 1];
                }
                return buf.toString('base64', i, buf.length - n);
              }
              function base64End(buf) {
                var r = buf && buf.length ? this.write(buf) : '';
                if (this.lastNeed) return r + this.lastChar.toString('base64', 0, 3 - this.lastNeed);
                return r;
              }
              function simpleWrite(buf) {
                return buf.toString(this.encoding);
              }
              function simpleEnd(buf) {
                return buf && buf.length ? this.write(buf) : '';
              }
            },
            { 'safe-buffer': 78 }
          ],
          82: [
            function (require2, module3, exports3) {
              (function (setImmediate, clearImmediate) {
                var nextTick = require2('process/browser.js').nextTick;
                var apply = Function.prototype.apply;
                var slice = Array.prototype.slice;
                var immediateIds = {};
                var nextImmediateId = 0;
                exports3.setTimeout = function () {
                  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
                };
                exports3.setInterval = function () {
                  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
                };
                exports3.clearTimeout = exports3.clearInterval = function (timeout) {
                  timeout.close();
                };
                function Timeout(id, clearFn) {
                  this._id = id;
                  this._clearFn = clearFn;
                }
                Timeout.prototype.unref = Timeout.prototype.ref = function () {};
                Timeout.prototype.close = function () {
                  this._clearFn.call(window, this._id);
                };
                exports3.enroll = function (item, msecs) {
                  clearTimeout(item._idleTimeoutId);
                  item._idleTimeout = msecs;
                };
                exports3.unenroll = function (item) {
                  clearTimeout(item._idleTimeoutId);
                  item._idleTimeout = -1;
                };
                exports3._unrefActive = exports3.active = function (item) {
                  clearTimeout(item._idleTimeoutId);
                  var msecs = item._idleTimeout;
                  if (msecs >= 0) {
                    item._idleTimeoutId = setTimeout(function onTimeout() {
                      if (item._onTimeout) item._onTimeout();
                    }, msecs);
                  }
                };
                exports3.setImmediate =
                  typeof setImmediate === 'function'
                    ? setImmediate
                    : function (fn) {
                        var id = nextImmediateId++;
                        var args = arguments.length < 2 ? false : slice.call(arguments, 1);
                        immediateIds[id] = true;
                        nextTick(function onNextTick() {
                          if (immediateIds[id]) {
                            if (args) {
                              fn.apply(null, args);
                            } else {
                              fn.call(null);
                            }
                            exports3.clearImmediate(id);
                          }
                        });
                        return id;
                      };
                exports3.clearImmediate =
                  typeof clearImmediate === 'function'
                    ? clearImmediate
                    : function (id) {
                        delete immediateIds[id];
                      };
              }).call(this, require2('timers').setImmediate, require2('timers').clearImmediate);
            },
            { 'process/browser.js': 64, timers: 82 }
          ],
          83: [
            function (require2, module3, exports3) {
              (function (global2) {
                module3.exports = deprecate;
                function deprecate(fn, msg) {
                  if (config('noDeprecation')) {
                    return fn;
                  }
                  var warned = false;
                  function deprecated() {
                    if (!warned) {
                      if (config('throwDeprecation')) {
                        throw new Error(msg);
                      } else if (config('traceDeprecation')) {
                        console.trace(msg);
                      } else {
                        console.warn(msg);
                      }
                      warned = true;
                    }
                    return fn.apply(this, arguments);
                  }
                  return deprecated;
                }
                function config(name) {
                  try {
                    if (!global2.localStorage) return false;
                  } catch (_) {
                    return false;
                  }
                  var val = global2.localStorage[name];
                  if (null == val) return false;
                  return String(val).toLowerCase() === 'true';
                }
              }).call(
                this,
                typeof global !== 'undefined'
                  ? global
                  : typeof self !== 'undefined'
                    ? self
                    : typeof window !== 'undefined'
                      ? window
                      : {}
              );
            },
            {}
          ],
          84: [
            function (require2, module3, exports3) {
              'use strict';
              var __importDefault = function (mod) {
                return mod && mod.__esModule
                  ? mod
                  : {
                      default: mod
                    };
              };
              Object.defineProperty(exports3, '__esModule', {
                value: true
              });
              exports3.HandleZip = void 0;
              var jszip_1 = __importDefault(require2('jszip'));
              var method_1 = require2('./common/method');
              var HandleZip =
                /** @class */
                (function () {
                  function HandleZip2(file) {
                    this.uploadFile = file;
                  }
                  HandleZip2.prototype.unzipFile = function (successFunc, errorFunc) {
                    jszip_1['default'].loadAsync(this.uploadFile).then(
                      function (zip) {
                        var fileList = {},
                          lastIndex = Object.keys(zip.files).length,
                          index = 0;
                        zip.forEach(function (relativePath, zipEntry) {
                          var fileName = zipEntry.name;
                          var fileNameArr = fileName.split('.');
                          var suffix = fileNameArr[fileNameArr.length - 1].toLowerCase();
                          var fileType = 'string';
                          if (
                            suffix in
                            {
                              png: 1,
                              jpeg: 1,
                              jpg: 1,
                              gif: 1,
                              bmp: 1,
                              tif: 1,
                              webp: 1
                            }
                          ) {
                            fileType = 'base64';
                          } else if (suffix == 'emf') {
                            fileType = 'arraybuffer';
                          }
                          zipEntry.async(fileType).then(function (data) {
                            if (fileType == 'base64') {
                              data = 'data:image/' + suffix + ';base64,' + data;
                            }
                            fileList[zipEntry.name] = data;
                            if (lastIndex == index + 1) {
                              successFunc(fileList);
                            }
                            index++;
                          });
                        });
                      },
                      function (e) {
                        errorFunc(e);
                      }
                    );
                  };
                  HandleZip2.prototype.unzipFileByUrl = function (url, successFunc, errorFunc) {
                    var new_zip = new jszip_1['default']();
                    method_1.getBinaryContent(url, function (err, data) {
                      if (err) {
                        throw err;
                      }
                      jszip_1['default'].loadAsync(data).then(
                        function (zip) {
                          var fileList = {},
                            lastIndex = Object.keys(zip.files).length,
                            index = 0;
                          zip.forEach(function (relativePath, zipEntry) {
                            var fileName = zipEntry.name;
                            var fileNameArr = fileName.split('.');
                            var suffix = fileNameArr[fileNameArr.length - 1].toLowerCase();
                            var fileType = 'string';
                            if (
                              suffix in
                              {
                                png: 1,
                                jpeg: 1,
                                jpg: 1,
                                gif: 1,
                                bmp: 1,
                                tif: 1,
                                webp: 1
                              }
                            ) {
                              fileType = 'base64';
                            } else if (suffix == 'emf') {
                              fileType = 'arraybuffer';
                            }
                            zipEntry.async(fileType).then(function (data2) {
                              if (fileType == 'base64') {
                                data2 = 'data:image/' + suffix + ';base64,' + data2;
                              }
                              fileList[zipEntry.name] = data2;
                              if (lastIndex == index + 1) {
                                successFunc(fileList);
                              }
                              index++;
                            });
                          });
                        },
                        function (e) {
                          errorFunc(e);
                        }
                      );
                    });
                  };
                  HandleZip2.prototype.newZipFile = function () {
                    var zip = new jszip_1['default']();
                    this.workBook = zip;
                  };
                  HandleZip2.prototype.addToZipFile = function (title, content) {
                    if (this.workBook == null) {
                      var zip = new jszip_1['default']();
                      this.workBook = zip;
                    }
                    this.workBook.file(title, content);
                  };
                  return HandleZip2;
                })();
              exports3.HandleZip = HandleZip;
            },
            { './common/method': 93, jszip: 20 }
          ],
          85: [
            function (require2, module3, exports3) {
              'use strict';
              Object.defineProperty(exports3, '__esModule', {
                value: true
              });
              exports3.LuckyImageBase =
                exports3.LuckysheetCalcChain =
                exports3.LuckySheetConfigMerge =
                exports3.LuckySheetborderInfoCellValueStyle =
                exports3.LuckySheetborderInfoCellValue =
                exports3.LuckySheetborderInfoCellForImp =
                exports3.LuckyConfig =
                exports3.LuckyInlineString =
                exports3.LuckySheetCellFormat =
                exports3.LuckySheetCelldataValue =
                exports3.LuckySheetCelldataBase =
                exports3.LuckyFileInfo =
                exports3.LuckySheetBase =
                exports3.LuckyFileBase =
                  void 0;
              var LuckyFileBase =
                /** @class */
                /* @__PURE__ */ (function () {
                  function LuckyFileBase2() {}
                  return LuckyFileBase2;
                })();
              exports3.LuckyFileBase = LuckyFileBase;
              var LuckySheetBase =
                /** @class */
                /* @__PURE__ */ (function () {
                  function LuckySheetBase2() {}
                  return LuckySheetBase2;
                })();
              exports3.LuckySheetBase = LuckySheetBase;
              var LuckyFileInfo =
                /** @class */
                /* @__PURE__ */ (function () {
                  function LuckyFileInfo2() {}
                  return LuckyFileInfo2;
                })();
              exports3.LuckyFileInfo = LuckyFileInfo;
              var LuckySheetCelldataBase =
                /** @class */
                /* @__PURE__ */ (function () {
                  function LuckySheetCelldataBase2() {}
                  return LuckySheetCelldataBase2;
                })();
              exports3.LuckySheetCelldataBase = LuckySheetCelldataBase;
              var LuckySheetCelldataValue =
                /** @class */
                /* @__PURE__ */ (function () {
                  function LuckySheetCelldataValue2() {}
                  return LuckySheetCelldataValue2;
                })();
              exports3.LuckySheetCelldataValue = LuckySheetCelldataValue;
              var LuckySheetCellFormat =
                /** @class */
                /* @__PURE__ */ (function () {
                  function LuckySheetCellFormat2() {}
                  return LuckySheetCellFormat2;
                })();
              exports3.LuckySheetCellFormat = LuckySheetCellFormat;
              var LuckyInlineString =
                /** @class */
                /* @__PURE__ */ (function () {
                  function LuckyInlineString2() {}
                  return LuckyInlineString2;
                })();
              exports3.LuckyInlineString = LuckyInlineString;
              var LuckyConfig =
                /** @class */
                /* @__PURE__ */ (function () {
                  function LuckyConfig2() {}
                  return LuckyConfig2;
                })();
              exports3.LuckyConfig = LuckyConfig;
              var LuckySheetborderInfoCellForImp =
                /** @class */
                /* @__PURE__ */ (function () {
                  function LuckySheetborderInfoCellForImp2() {}
                  return LuckySheetborderInfoCellForImp2;
                })();
              exports3.LuckySheetborderInfoCellForImp = LuckySheetborderInfoCellForImp;
              var LuckySheetborderInfoCellValue =
                /** @class */
                /* @__PURE__ */ (function () {
                  function LuckySheetborderInfoCellValue2() {}
                  return LuckySheetborderInfoCellValue2;
                })();
              exports3.LuckySheetborderInfoCellValue = LuckySheetborderInfoCellValue;
              var LuckySheetborderInfoCellValueStyle =
                /** @class */
                /* @__PURE__ */ (function () {
                  function LuckySheetborderInfoCellValueStyle2() {}
                  return LuckySheetborderInfoCellValueStyle2;
                })();
              exports3.LuckySheetborderInfoCellValueStyle = LuckySheetborderInfoCellValueStyle;
              var LuckySheetConfigMerge =
                /** @class */
                /* @__PURE__ */ (function () {
                  function LuckySheetConfigMerge2() {}
                  return LuckySheetConfigMerge2;
                })();
              exports3.LuckySheetConfigMerge = LuckySheetConfigMerge;
              var LuckysheetCalcChain =
                /** @class */
                /* @__PURE__ */ (function () {
                  function LuckysheetCalcChain2() {}
                  return LuckysheetCalcChain2;
                })();
              exports3.LuckysheetCalcChain = LuckysheetCalcChain;
              var LuckyImageBase =
                /** @class */
                /* @__PURE__ */ (function () {
                  function LuckyImageBase2() {}
                  return LuckyImageBase2;
                })();
              exports3.LuckyImageBase = LuckyImageBase;
            },
            {}
          ],
          86: [
            function (require2, module3, exports3) {
              'use strict';
              var __extends = /* @__PURE__ */ (function () {
                var _extendStatics = function extendStatics(d, b) {
                  _extendStatics =
                    Object.setPrototypeOf ||
                    ({
                      __proto__: []
                    } instanceof Array &&
                      function (d2, b2) {
                        d2.__proto__ = b2;
                      }) ||
                    function (d2, b2) {
                      for (var p in b2) {
                        if (b2.hasOwnProperty(p)) d2[p] = b2[p];
                      }
                    };
                  return _extendStatics(d, b);
                };
                return function (d, b) {
                  _extendStatics(d, b);
                  function __() {
                    this.constructor = d;
                  }
                  d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
                };
              })();
              Object.defineProperty(exports3, '__esModule', {
                value: true
              });
              exports3.LuckySheetCelldata = void 0;
              var ReadXml_1 = require2('./ReadXml');
              var method_1 = require2('../common/method');
              var constant_1 = require2('../common/constant');
              var LuckyBase_1 = require2('./LuckyBase');
              var LuckySheetCelldata =
                /** @class */
                (function (_super) {
                  __extends(LuckySheetCelldata2, _super);
                  function LuckySheetCelldata2(cell, styles, sharedStrings, mergeCells, sheetFile, ReadXml) {
                    var _this =
                      //Private
                      _super.call(this) || this;
                    _this.cell = cell;
                    _this.sheetFile = sheetFile;
                    _this.styles = styles;
                    _this.sharedStrings = sharedStrings;
                    _this.readXml = ReadXml;
                    _this.mergeCells = mergeCells;
                    var attrList = cell.attributeList;
                    var r = attrList.r,
                      s = attrList.s,
                      t = attrList.t;
                    var range = method_1.getcellrange(r);
                    _this.r = range.row[0];
                    _this.c = range.column[0];
                    _this.v = _this.generateValue(s, t);
                    return _this;
                  }
                  LuckySheetCelldata2.prototype.generateValue = function (s, t) {
                    var _this = this;
                    var v = this.cell.getInnerElements('v');
                    var f = this.cell.getInnerElements('f');
                    if (v == null) {
                      v = this.cell.getInnerElements('t');
                    }
                    var cellXfs = this.styles['cellXfs'];
                    var cellStyleXfs = this.styles['cellStyleXfs'];
                    var cellStyles = this.styles['cellStyles'];
                    var fonts = this.styles['fonts'];
                    var fills = this.styles['fills'];
                    var borders = this.styles['borders'];
                    var numfmts = this.styles['numfmts'];
                    var clrScheme = this.styles['clrScheme'];
                    var sharedStrings = this.sharedStrings;
                    var cellValue = new LuckyBase_1.LuckySheetCelldataValue();
                    if (f != null) {
                      var formula = f[0],
                        attrList = formula.attributeList;
                      var t_1 = attrList.t,
                        ref = attrList.ref,
                        si = attrList.si;
                      var formulaValue = f[0].value;
                      if (t_1 == 'shared') {
                        this._fomulaRef = ref;
                        this._formulaType = t_1;
                        this._formulaSi = si;
                      }
                      if (ref != null || (formulaValue != null && formulaValue.length > 0)) {
                        formulaValue = method_1.escapeCharacter(formulaValue);
                        cellValue.f = '=' + formulaValue;
                      }
                    }
                    var familyFont = null;
                    var quotePrefix;
                    if (s != null) {
                      var sNum = parseInt(s);
                      var cellXf = cellXfs[sNum];
                      var xfId = cellXf.attributeList.xfId;
                      var numFmtId = void 0,
                        fontId = void 0,
                        fillId = void 0,
                        borderId = void 0;
                      var horizontal = void 0,
                        vertical = void 0,
                        wrapText = void 0,
                        textRotation = void 0,
                        shrinkToFit = void 0,
                        indent = void 0,
                        applyProtection = void 0;
                      if (xfId != null) {
                        var cellStyleXf = cellStyleXfs[parseInt(xfId)];
                        var attrList = cellStyleXf.attributeList;
                        var applyNumberFormat_1 = attrList.applyNumberFormat;
                        var applyFont_1 = attrList.applyFont;
                        var applyFill_1 = attrList.applyFill;
                        var applyBorder_1 = attrList.applyBorder;
                        var applyAlignment_1 = attrList.applyAlignment;
                        applyProtection = attrList.applyProtection;
                        quotePrefix = attrList.quotePrefix;
                        if (applyNumberFormat_1 != '0' && attrList.numFmtId != null) {
                          numFmtId = attrList.numFmtId;
                        }
                        if (applyFont_1 != '0' && attrList.fontId != null) {
                          fontId = attrList.fontId;
                        }
                        if (applyFill_1 != '0' && attrList.fillId != null) {
                          fillId = attrList.fillId;
                        }
                        if (applyBorder_1 != '0' && attrList.borderId != null) {
                          borderId = attrList.borderId;
                        }
                        if (applyAlignment_1 != null && applyAlignment_1 != '0') {
                          var alignment = cellStyleXf.getInnerElements('alignment');
                          if (alignment != null) {
                            var attrList_1 = alignment[0].attributeList;
                            if (attrList_1.horizontal != null) {
                              horizontal = attrList_1.horizontal;
                            }
                            if (attrList_1.vertical != null) {
                              vertical = attrList_1.vertical;
                            }
                            if (attrList_1.wrapText != null) {
                              wrapText = attrList_1.wrapText;
                            }
                            if (attrList_1.textRotation != null) {
                              textRotation = attrList_1.textRotation;
                            }
                            if (attrList_1.shrinkToFit != null) {
                              shrinkToFit = attrList_1.shrinkToFit;
                            }
                            if (attrList_1.indent != null) {
                              indent = attrList_1.indent;
                            }
                          }
                        }
                      }
                      var applyNumberFormat = cellXf.attributeList.applyNumberFormat;
                      var applyFont = cellXf.attributeList.applyFont;
                      var applyFill = cellXf.attributeList.applyFill;
                      var applyBorder = cellXf.attributeList.applyBorder;
                      var applyAlignment = cellXf.attributeList.applyAlignment;
                      if (cellXf.attributeList.applyProtection != null) {
                        applyProtection = cellXf.attributeList.applyProtection;
                      }
                      if (cellXf.attributeList.quotePrefix != null) {
                        quotePrefix = cellXf.attributeList.quotePrefix;
                      }
                      if (applyNumberFormat != '0' && cellXf.attributeList.numFmtId != null) {
                        numFmtId = cellXf.attributeList.numFmtId;
                      }
                      if (applyFont != '0') {
                        fontId = cellXf.attributeList.fontId;
                      }
                      if (applyFill != '0') {
                        fillId = cellXf.attributeList.fillId;
                      }
                      if (applyBorder != '0') {
                        borderId = cellXf.attributeList.borderId;
                      }
                      if (applyAlignment != '0') {
                        var alignment = cellXf.getInnerElements('alignment');
                        if (alignment != null && alignment.length > 0) {
                          var attrList = alignment[0].attributeList;
                          if (attrList.horizontal != null) {
                            horizontal = attrList.horizontal;
                          }
                          if (attrList.vertical != null) {
                            vertical = attrList.vertical;
                          }
                          if (attrList.wrapText != null) {
                            wrapText = attrList.wrapText;
                          }
                          if (attrList.textRotation != null) {
                            textRotation = attrList.textRotation;
                          }
                          if (attrList.shrinkToFit != null) {
                            shrinkToFit = attrList.shrinkToFit;
                          }
                          if (attrList.indent != null) {
                            indent = attrList.indent;
                          }
                        }
                      }
                      if (numFmtId != void 0) {
                        var numf = numfmts[parseInt(numFmtId)];
                        var cellFormat = new LuckyBase_1.LuckySheetCellFormat();
                        cellFormat.fa = method_1.escapeCharacter(numf);
                        cellFormat.t = t;
                        cellValue.ct = cellFormat;
                      }
                      if (fillId != void 0) {
                        var fillIdNum = parseInt(fillId);
                        var fill = fills[fillIdNum];
                        var bg = this.getBackgroundByFill(fill, clrScheme);
                        if (bg != null) {
                          cellValue.bg = bg;
                        }
                      }
                      if (fontId != void 0) {
                        var fontIdNum = parseInt(fontId);
                        var font = fonts[fontIdNum];
                        if (font != null) {
                          var sz = font.getInnerElements('sz');
                          var colors = font.getInnerElements('color');
                          var family = font.getInnerElements('name');
                          var familyOverrides = font.getInnerElements('family');
                          var charset = font.getInnerElements('charset');
                          var bolds = font.getInnerElements('b');
                          var italics = font.getInnerElements('i');
                          var strikes = font.getInnerElements('strike');
                          var underlines = font.getInnerElements('u');
                          if (sz != null && sz.length > 0) {
                            var fs = sz[0].attributeList.val;
                            if (fs != null) {
                              cellValue.fs = parseInt(fs);
                            }
                          }
                          if (colors != null && colors.length > 0) {
                            var color = colors[0];
                            var fc = ReadXml_1.getColor(color, this.styles, 't');
                            if (fc != null) {
                              cellValue.fc = fc;
                            }
                          }
                          if (familyOverrides != null && familyOverrides.length > 0) {
                            var val = familyOverrides[0].attributeList.val;
                            if (val != null) {
                              familyFont = constant_1.fontFamilys[val];
                            }
                          }
                          if (family != null && family.length > 0) {
                            var val = family[0].attributeList.val;
                            if (val != null) {
                              cellValue.ff = val;
                            }
                          }
                          if (bolds != null && bolds.length > 0) {
                            var bold = bolds[0].attributeList.val;
                            if (bold == '0') {
                              cellValue.bl = 0;
                            } else {
                              cellValue.bl = 1;
                            }
                          }
                          if (italics != null && italics.length > 0) {
                            var italic = italics[0].attributeList.val;
                            if (italic == '0') {
                              cellValue.it = 0;
                            } else {
                              cellValue.it = 1;
                            }
                          }
                          if (strikes != null && strikes.length > 0) {
                            var strike = strikes[0].attributeList.val;
                            if (strike == '0') {
                              cellValue.cl = 0;
                            } else {
                              cellValue.cl = 1;
                            }
                          }
                          if (underlines != null && underlines.length > 0) {
                            var underline = underlines[0].attributeList.val;
                            if (underline == 'single') {
                              cellValue.un = 1;
                            } else if (underline == 'double') {
                              cellValue.un = 2;
                            } else if (underline == 'singleAccounting') {
                              cellValue.un = 3;
                            } else if (underline == 'doubleAccounting') {
                              cellValue.un = 4;
                            } else {
                              cellValue.un = 0;
                            }
                          }
                        }
                      }
                      if (horizontal != void 0) {
                        if (horizontal == 'center') {
                          cellValue.ht = 0;
                        } else if (horizontal == 'centerContinuous') {
                          cellValue.ht = 0;
                        } else if (horizontal == 'left') {
                          cellValue.ht = 1;
                        } else if (horizontal == 'right') {
                          cellValue.ht = 2;
                        } else if (horizontal == 'distributed') {
                          cellValue.ht = 0;
                        } else if (horizontal == 'fill') {
                          cellValue.ht = 1;
                        } else if (horizontal == 'general') {
                          cellValue.ht = 1;
                        } else if (horizontal == 'justify') {
                          cellValue.ht = 0;
                        } else {
                          cellValue.ht = 1;
                        }
                      }
                      if (vertical != void 0) {
                        if (vertical == 'bottom') {
                          cellValue.vt = 2;
                        } else if (vertical == 'center') {
                          cellValue.vt = 0;
                        } else if (vertical == 'distributed') {
                          cellValue.vt = 0;
                        } else if (vertical == 'justify') {
                          cellValue.vt = 0;
                        } else if (vertical == 'top') {
                          cellValue.vt = 1;
                        } else {
                          cellValue.vt = 1;
                        }
                      }
                      if (wrapText != void 0) {
                        if (wrapText == '1') {
                          cellValue.tb = 2;
                        } else {
                          cellValue.tb = 1;
                        }
                      } else {
                        cellValue.tb = 1;
                      }
                      if (textRotation != void 0) {
                        if (textRotation == '255') {
                          cellValue.tr = 3;
                        } else {
                          cellValue.tr = 0;
                          cellValue.rt = parseInt(textRotation);
                        }
                      }
                      if (shrinkToFit != void 0) {
                      }
                      if (indent != void 0) {
                      }
                      if (borderId != void 0) {
                        var borderIdNum = parseInt(borderId);
                        var border = borders[borderIdNum];
                        var borderObject = new LuckyBase_1.LuckySheetborderInfoCellForImp();
                        borderObject.rangeType = 'cell';
                        var borderCellValue = new LuckyBase_1.LuckySheetborderInfoCellValue();
                        borderCellValue.row_index = this.r;
                        borderCellValue.col_index = this.c;
                        var lefts = border.getInnerElements('left');
                        var rights = border.getInnerElements('right');
                        var tops = border.getInnerElements('top');
                        var bottoms = border.getInnerElements('bottom');
                        var diagonals = border.getInnerElements('diagonal');
                        var starts = border.getInnerElements('start');
                        var ends = border.getInnerElements('end');
                        var left = this.getBorderInfo(lefts);
                        var right = this.getBorderInfo(rights);
                        var top_1 = this.getBorderInfo(tops);
                        var bottom = this.getBorderInfo(bottoms);
                        var diagonal = this.getBorderInfo(diagonals);
                        var start = this.getBorderInfo(starts);
                        var end = this.getBorderInfo(ends);
                        var isAdd = false;
                        if (start != null && start.color != null) {
                          borderCellValue.l = start;
                          isAdd = true;
                        }
                        if (end != null && end.color != null) {
                          borderCellValue.r = end;
                          isAdd = true;
                        }
                        if (left != null && left.color != null) {
                          borderCellValue.l = left;
                          isAdd = true;
                        }
                        if (right != null && right.color != null) {
                          borderCellValue.r = right;
                          isAdd = true;
                        }
                        if (top_1 != null && top_1.color != null) {
                          borderCellValue.t = top_1;
                          isAdd = true;
                        }
                        if (bottom != null && bottom.color != null) {
                          borderCellValue.b = bottom;
                          isAdd = true;
                        }
                        if (isAdd) {
                          borderObject.value = borderCellValue;
                          this._borderObject = borderObject;
                        }
                      }
                    } else {
                      cellValue.tb = 1;
                    }
                    if (v != null) {
                      var value = v[0].value;
                      if (/&#\d+;/.test(value)) {
                        value = this.htmlDecode(value);
                      }
                      if (t == constant_1.ST_CellType['SharedString']) {
                        var siIndex = parseInt(v[0].value);
                        var sharedSI = sharedStrings[siIndex];
                        var rFlag = sharedSI.getInnerElements('r');
                        if (rFlag == null) {
                          var tFlag = sharedSI.getInnerElements('t');
                          if (tFlag != null) {
                            var text_1 = '';
                            tFlag.forEach(function (t2) {
                              text_1 += t2.value;
                            });
                            text_1 = method_1.escapeCharacter(text_1);
                            if (familyFont == 'Roman' && text_1.length > 0) {
                              var textArray = text_1.split('');
                              var preWordType = null,
                                wordText = '',
                                preWholef = null;
                              var wholef = 'Times New Roman';
                              if (cellValue.ff != null) {
                                wholef = cellValue.ff;
                              }
                              var cellFormat = cellValue.ct;
                              if (cellFormat == null) {
                                cellFormat = new LuckyBase_1.LuckySheetCellFormat();
                              }
                              if (cellFormat.s == null) {
                                cellFormat.s = [];
                              }
                              for (var i = 0; i < textArray.length; i++) {
                                var w = textArray[i];
                                var type = null,
                                  ff = wholef;
                                if (method_1.isChinese(w)) {
                                  type = 'c';
                                  ff = '宋体';
                                } else if (method_1.isJapanese(w)) {
                                  type = 'j';
                                  ff = 'Yu Gothic';
                                } else if (method_1.isKoera(w)) {
                                  type = 'k';
                                  ff = 'Malgun Gothic';
                                } else {
                                  type = 'e';
                                }
                                if ((type != preWordType && preWordType != null) || i == textArray.length - 1) {
                                  var InlineString = new LuckyBase_1.LuckyInlineString();
                                  InlineString.ff = preWholef;
                                  if (cellValue.fc != null) {
                                    InlineString.fc = cellValue.fc;
                                  }
                                  if (cellValue.fs != null) {
                                    InlineString.fs = cellValue.fs;
                                  }
                                  if (cellValue.cl != null) {
                                    InlineString.cl = cellValue.cl;
                                  }
                                  if (cellValue.un != null) {
                                    InlineString.un = cellValue.un;
                                  }
                                  if (cellValue.bl != null) {
                                    InlineString.bl = cellValue.bl;
                                  }
                                  if (cellValue.it != null) {
                                    InlineString.it = cellValue.it;
                                  }
                                  if (i == textArray.length - 1) {
                                    if (type == preWordType) {
                                      InlineString.ff = ff;
                                      InlineString.v = wordText + w;
                                    } else {
                                      InlineString.ff = preWholef;
                                      InlineString.v = wordText;
                                      cellFormat.s.push(InlineString);
                                      var InlineStringLast = new LuckyBase_1.LuckyInlineString();
                                      InlineStringLast.ff = ff;
                                      InlineStringLast.v = w;
                                      if (cellValue.fc != null) {
                                        InlineStringLast.fc = cellValue.fc;
                                      }
                                      if (cellValue.fs != null) {
                                        InlineStringLast.fs = cellValue.fs;
                                      }
                                      if (cellValue.cl != null) {
                                        InlineStringLast.cl = cellValue.cl;
                                      }
                                      if (cellValue.un != null) {
                                        InlineStringLast.un = cellValue.un;
                                      }
                                      if (cellValue.bl != null) {
                                        InlineStringLast.bl = cellValue.bl;
                                      }
                                      if (cellValue.it != null) {
                                        InlineStringLast.it = cellValue.it;
                                      }
                                      cellFormat.s.push(InlineStringLast);
                                      break;
                                    }
                                  } else {
                                    InlineString.v = wordText;
                                  }
                                  cellFormat.s.push(InlineString);
                                  wordText = w;
                                } else {
                                  wordText += w;
                                }
                                preWordType = type;
                                preWholef = ff;
                              }
                              cellFormat.t = 'inlineStr';
                              cellValue.ct = cellFormat;
                            } else {
                              text_1 = this.replaceSpecialWrap(text_1);
                              if (text_1.indexOf('\r\n') > -1 || text_1.indexOf('\n') > -1) {
                                var InlineString = new LuckyBase_1.LuckyInlineString();
                                InlineString.v = text_1;
                                var cellFormat = cellValue.ct;
                                if (cellFormat == null) {
                                  cellFormat = new LuckyBase_1.LuckySheetCellFormat();
                                }
                                if (cellValue.ff != null) {
                                  InlineString.ff = cellValue.ff;
                                }
                                if (cellValue.fc != null) {
                                  InlineString.fc = cellValue.fc;
                                }
                                if (cellValue.fs != null) {
                                  InlineString.fs = cellValue.fs;
                                }
                                if (cellValue.cl != null) {
                                  InlineString.cl = cellValue.cl;
                                }
                                if (cellValue.un != null) {
                                  InlineString.un = cellValue.un;
                                }
                                if (cellValue.bl != null) {
                                  InlineString.bl = cellValue.bl;
                                }
                                if (cellValue.it != null) {
                                  InlineString.it = cellValue.it;
                                }
                                cellFormat.t = 'inlineStr';
                                cellFormat.s = [InlineString];
                                cellValue.ct = cellFormat;
                              } else {
                                cellValue.v = text_1;
                                quotePrefix = '1';
                              }
                            }
                          }
                        } else {
                          var styles_1 = [];
                          rFlag.forEach(function (r) {
                            var tFlag2 = r.getInnerElements('t');
                            var rPr = r.getInnerElements('rPr');
                            var InlineString2 = new LuckyBase_1.LuckyInlineString();
                            if (tFlag2 != null && tFlag2.length > 0) {
                              var text = tFlag2[0].value;
                              text = _this.replaceSpecialWrap(text);
                              text = method_1.escapeCharacter(text);
                              InlineString2.v = text;
                            }
                            if (rPr != null && rPr.length > 0) {
                              var frpr = rPr[0];
                              var sz2 = ReadXml_1.getlineStringAttr(frpr, 'sz'),
                                rFont = ReadXml_1.getlineStringAttr(frpr, 'rFont'),
                                family2 = ReadXml_1.getlineStringAttr(frpr, 'family'),
                                charset2 = ReadXml_1.getlineStringAttr(frpr, 'charset'),
                                scheme = ReadXml_1.getlineStringAttr(frpr, 'scheme'),
                                b = ReadXml_1.getlineStringAttr(frpr, 'b'),
                                i2 = ReadXml_1.getlineStringAttr(frpr, 'i'),
                                u = ReadXml_1.getlineStringAttr(frpr, 'u'),
                                strike2 = ReadXml_1.getlineStringAttr(frpr, 'strike'),
                                vertAlign = ReadXml_1.getlineStringAttr(frpr, 'vertAlign'),
                                color2 = void 0;
                              var cEle = frpr.getInnerElements('color');
                              if (cEle != null && cEle.length > 0) {
                                color2 = ReadXml_1.getColor(cEle[0], _this.styles, 't');
                              }
                              var ff2 = void 0;
                              if (rFont != null) {
                                ff2 = rFont;
                              }
                              if (ff2 != null) {
                                InlineString2.ff = ff2;
                              } else if (cellValue.ff != null) {
                                InlineString2.ff = cellValue.ff;
                              }
                              if (color2 != null) {
                                InlineString2.fc = color2;
                              } else if (cellValue.fc != null) {
                                InlineString2.fc = cellValue.fc;
                              }
                              if (sz2 != null) {
                                InlineString2.fs = parseInt(sz2);
                              } else if (cellValue.fs != null) {
                                InlineString2.fs = cellValue.fs;
                              }
                              if (strike2 != null) {
                                InlineString2.cl = parseInt(strike2);
                              } else if (cellValue.cl != null) {
                                InlineString2.cl = cellValue.cl;
                              }
                              if (u != null) {
                                InlineString2.un = parseInt(u);
                              } else if (cellValue.un != null) {
                                InlineString2.un = cellValue.un;
                              }
                              if (b != null) {
                                InlineString2.bl = parseInt(b);
                              } else if (cellValue.bl != null) {
                                InlineString2.bl = cellValue.bl;
                              }
                              if (i2 != null) {
                                InlineString2.it = parseInt(i2);
                              } else if (cellValue.it != null) {
                                InlineString2.it = cellValue.it;
                              }
                              if (vertAlign != null) {
                                InlineString2.va = parseInt(vertAlign);
                              }
                            } else {
                              if (InlineString2.ff == null && cellValue.ff != null) {
                                InlineString2.ff = cellValue.ff;
                              }
                              if (InlineString2.fc == null && cellValue.fc != null) {
                                InlineString2.fc = cellValue.fc;
                              }
                              if (InlineString2.fs == null && cellValue.fs != null) {
                                InlineString2.fs = cellValue.fs;
                              }
                              if (InlineString2.cl == null && cellValue.cl != null) {
                                InlineString2.cl = cellValue.cl;
                              }
                              if (InlineString2.un == null && cellValue.un != null) {
                                InlineString2.un = cellValue.un;
                              }
                              if (InlineString2.bl == null && cellValue.bl != null) {
                                InlineString2.bl = cellValue.bl;
                              }
                              if (InlineString2.it == null && cellValue.it != null) {
                                InlineString2.it = cellValue.it;
                              }
                            }
                            styles_1.push(InlineString2);
                          });
                          var cellFormat = cellValue.ct;
                          if (cellFormat == null) {
                            cellFormat = new LuckyBase_1.LuckySheetCellFormat();
                          }
                          cellFormat.t = 'inlineStr';
                          cellFormat.s = styles_1;
                          cellValue.ct = cellFormat;
                        }
                      } else {
                        value = method_1.escapeCharacter(value);
                        cellValue.v = value;
                      }
                    }
                    if (quotePrefix != null) {
                      cellValue.qp = parseInt(quotePrefix);
                    }
                    return cellValue;
                  };
                  LuckySheetCelldata2.prototype.replaceSpecialWrap = function (text) {
                    text = text
                      .replace(/_x000D_/g, '')
                      .replace(/&#13;&#10;/g, '\r\n')
                      .replace(/&#13;/g, '\r')
                      .replace(/&#10;/g, '\n');
                    return text;
                  };
                  LuckySheetCelldata2.prototype.getBackgroundByFill = function (fill, clrScheme) {
                    var patternFills = fill.getInnerElements('patternFill');
                    if (patternFills != null) {
                      var patternFill = patternFills[0];
                      var fgColors = patternFill.getInnerElements('fgColor');
                      var bgColors = patternFill.getInnerElements('bgColor');
                      var fg = void 0,
                        bg = void 0;
                      if (fgColors != null) {
                        var fgColor = fgColors[0];
                        fg = ReadXml_1.getColor(fgColor, this.styles);
                      }
                      if (bgColors != null) {
                        var bgColor = bgColors[0];
                        bg = ReadXml_1.getColor(bgColor, this.styles);
                      }
                      if (fg != null) {
                        return fg;
                      } else if (bg != null) {
                        return bg;
                      }
                    } else {
                      var gradientfills = fill.getInnerElements('gradientFill');
                      if (gradientfills != null) {
                        return null;
                      }
                    }
                  };
                  LuckySheetCelldata2.prototype.getBorderInfo = function (borders) {
                    if (borders == null) {
                      return null;
                    }
                    var border = borders[0],
                      attrList = border.attributeList;
                    var clrScheme = this.styles['clrScheme'];
                    var style = attrList.style;
                    if (style == null || style == 'none') {
                      return null;
                    }
                    var colors = border.getInnerElements('color');
                    var colorRet = '#000000';
                    if (colors != null) {
                      var color = colors[0];
                      colorRet = ReadXml_1.getColor(color, this.styles, 'b');
                      if (colorRet == null) {
                        colorRet = '#000000';
                      }
                    }
                    var ret = new LuckyBase_1.LuckySheetborderInfoCellValueStyle();
                    ret.style = constant_1.borderTypes[style];
                    ret.color = colorRet;
                    return ret;
                  };
                  LuckySheetCelldata2.prototype.htmlDecode = function (str) {
                    return str.replace(/&#(x)?([^&]{1,5});?/g, function ($, $1, $2) {
                      return String.fromCharCode(parseInt($2, $1 ? 16 : 10));
                    });
                  };
                  return LuckySheetCelldata2;
                })(LuckyBase_1.LuckySheetCelldataBase);
              exports3.LuckySheetCelldata = LuckySheetCelldata;
            },
            { '../common/constant': 91, '../common/method': 93, './LuckyBase': 85, './ReadXml': 90 }
          ],
          87: [
            function (require2, module3, exports3) {
              'use strict';
              var __extends = /* @__PURE__ */ (function () {
                var _extendStatics = function extendStatics(d, b) {
                  _extendStatics =
                    Object.setPrototypeOf ||
                    ({
                      __proto__: []
                    } instanceof Array &&
                      function (d2, b2) {
                        d2.__proto__ = b2;
                      }) ||
                    function (d2, b2) {
                      for (var p in b2) {
                        if (b2.hasOwnProperty(p)) d2[p] = b2[p];
                      }
                    };
                  return _extendStatics(d, b);
                };
                return function (d, b) {
                  _extendStatics(d, b);
                  function __() {
                    this.constructor = d;
                  }
                  d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
                };
              })();
              Object.defineProperty(exports3, '__esModule', {
                value: true
              });
              exports3.LuckyFile = void 0;
              var LuckySheet_1 = require2('./LuckySheet');
              var constant_1 = require2('../common/constant');
              var ReadXml_1 = require2('./ReadXml');
              var method_1 = require2('../common/method');
              var LuckyBase_1 = require2('./LuckyBase');
              var LuckyImage_1 = require2('./LuckyImage');
              var LuckyFile =
                /** @class */
                (function (_super) {
                  __extends(LuckyFile2, _super);
                  function LuckyFile2(files, fileName) {
                    var _this = _super.call(this) || this;
                    _this.columnWidthSet = [];
                    _this.rowHeightSet = [];
                    _this.files = files;
                    _this.fileName = fileName;
                    _this.readXml = new ReadXml_1.ReadXml(files);
                    _this.getSheetNameList();
                    _this.sharedStrings = _this.readXml.getElementsByTagName('sst/si', constant_1.sharedStringsFile);
                    _this.calcChain = _this.readXml.getElementsByTagName('calcChain/c', constant_1.calcChainFile);
                    _this.styles = {};
                    _this.styles['cellXfs'] = _this.readXml.getElementsByTagName('cellXfs/xf', constant_1.stylesFile);
                    _this.styles['cellStyleXfs'] = _this.readXml.getElementsByTagName('cellStyleXfs/xf', constant_1.stylesFile);
                    _this.styles['cellStyles'] = _this.readXml.getElementsByTagName(
                      'cellStyles/cellStyle',
                      constant_1.stylesFile
                    );
                    _this.styles['fonts'] = _this.readXml.getElementsByTagName('fonts/font', constant_1.stylesFile);
                    _this.styles['fills'] = _this.readXml.getElementsByTagName('fills/fill', constant_1.stylesFile);
                    _this.styles['borders'] = _this.readXml.getElementsByTagName('borders/border', constant_1.stylesFile);
                    _this.styles['clrScheme'] = _this.readXml.getElementsByTagName(
                      'a:clrScheme/a:dk1|a:lt1|a:dk2|a:lt2|a:accent1|a:accent2|a:accent3|a:accent4|a:accent5|a:accent6|a:hlink|a:folHlink',
                      constant_1.theme1File
                    );
                    _this.styles['indexedColors'] = _this.readXml.getElementsByTagName(
                      'colors/indexedColors/rgbColor',
                      constant_1.stylesFile
                    );
                    _this.styles['mruColors'] = _this.readXml.getElementsByTagName(
                      'colors/mruColors/color',
                      constant_1.stylesFile
                    );
                    _this.imageList = new LuckyImage_1.ImageList(files);
                    var numfmts = _this.readXml.getElementsByTagName('numFmt/numFmt', constant_1.stylesFile);
                    var numFmtDefaultC = JSON.parse(JSON.stringify(constant_1.numFmtDefault));
                    for (var i = 0; i < numfmts.length; i++) {
                      var attrList = numfmts[i].attributeList;
                      var numfmtid = method_1.getXmlAttibute(attrList, 'numFmtId', '49');
                      var formatcode = method_1.getXmlAttibute(attrList, 'formatCode', '@');
                      if (!(numfmtid in constant_1.numFmtDefault)) {
                        numFmtDefaultC[numfmtid] = formatcode;
                      }
                    }
                    _this.styles['numfmts'] = numFmtDefaultC;
                    return _this;
                  }
                  LuckyFile2.prototype.getSheetNameList = function () {
                    var workbookRelList = this.readXml.getElementsByTagName(
                      'Relationships/Relationship',
                      constant_1.workbookRels
                    );
                    if (workbookRelList == null) {
                      return;
                    }
                    var regex = new RegExp('worksheets/[^/]*?.xml');
                    var sheetNames = {};
                    for (var i = 0; i < workbookRelList.length; i++) {
                      var rel = workbookRelList[i],
                        attrList = rel.attributeList;
                      var id = attrList['Id'],
                        target = attrList['Target'];
                      if (regex.test(target)) {
                        if (target.startsWith('/xl')) {
                          sheetNames[id] = target.substr(1);
                        } else {
                          sheetNames[id] = 'xl/' + target;
                        }
                      }
                    }
                    this.sheetNameList = sheetNames;
                  };
                  LuckyFile2.prototype.getSheetFileBysheetId = function (sheetId) {
                    return this.sheetNameList[sheetId];
                  };
                  LuckyFile2.prototype.getWorkBookInfo = function () {
                    var Company = this.readXml.getElementsByTagName('Company', constant_1.appFile);
                    var AppVersion = this.readXml.getElementsByTagName('AppVersion', constant_1.appFile);
                    var creator = this.readXml.getElementsByTagName('dc:creator', constant_1.coreFile);
                    var lastModifiedBy = this.readXml.getElementsByTagName('cp:lastModifiedBy', constant_1.coreFile);
                    var created = this.readXml.getElementsByTagName('dcterms:created', constant_1.coreFile);
                    var modified = this.readXml.getElementsByTagName('dcterms:modified', constant_1.coreFile);
                    this.info = new LuckyBase_1.LuckyFileInfo();
                    this.info.name = this.fileName;
                    this.info.creator = creator.length > 0 ? creator[0].value : '';
                    this.info.lastmodifiedby = lastModifiedBy.length > 0 ? lastModifiedBy[0].value : '';
                    this.info.createdTime = created.length > 0 ? created[0].value : '';
                    this.info.modifiedTime = modified.length > 0 ? modified[0].value : '';
                    this.info.company = Company.length > 0 ? Company[0].value : '';
                    this.info.appversion = AppVersion.length > 0 ? AppVersion[0].value : '';
                  };
                  LuckyFile2.prototype.getSheetsFull = function (isInitialCell) {
                    if (isInitialCell === void 0) {
                      isInitialCell = true;
                    }
                    var sheets = this.readXml.getElementsByTagName('sheets/sheet', constant_1.workBookFile);
                    var sheetList = {};
                    for (var key in sheets) {
                      var sheet = sheets[key];
                      sheetList[sheet.attributeList.name] = sheet.attributeList['sheetId'];
                    }
                    this.sheets = [];
                    var order = 0;
                    for (var key in sheets) {
                      var sheet = sheets[key];
                      var sheetName = sheet.attributeList.name;
                      var sheetId = sheet.attributeList['sheetId'];
                      var rid = sheet.attributeList['r:id'];
                      var sheetFile = this.getSheetFileBysheetId(rid);
                      var drawing = this.readXml.getElementsByTagName('worksheet/drawing', sheetFile),
                        drawingFile = void 0,
                        drawingRelsFile = void 0;
                      if (drawing != null && drawing.length > 0) {
                        var attrList = drawing[0].attributeList;
                        var rid_1 = method_1.getXmlAttibute(attrList, 'r:id', null);
                        if (rid_1 != null) {
                          drawingFile = this.getDrawingFile(rid_1, sheetFile);
                          drawingRelsFile = this.getDrawingRelsFile(drawingFile);
                        }
                      }
                      if (sheetFile != null) {
                        var sheet_1 = new LuckySheet_1.LuckySheet(sheetName, sheetId, order, isInitialCell, {
                          sheetFile,
                          readXml: this.readXml,
                          sheetList,
                          styles: this.styles,
                          sharedStrings: this.sharedStrings,
                          calcChain: this.calcChain,
                          imageList: this.imageList,
                          drawingFile,
                          drawingRelsFile
                        });
                        this.columnWidthSet = [];
                        this.rowHeightSet = [];
                        this.imagePositionCaculation(sheet_1);
                        this.sheets.push(sheet_1);
                        order++;
                      }
                    }
                  };
                  LuckyFile2.prototype.extendArray = function (index, sets, def, hidden, lens) {
                    if (index < sets.length) {
                      return;
                    }
                    var startIndex = sets.length,
                      endIndex = index;
                    var allGap = 0;
                    if (startIndex > 0) {
                      allGap = sets[startIndex - 1];
                    }
                    for (var i = startIndex; i <= endIndex; i++) {
                      var gap = def,
                        istring = i.toString();
                      if (istring in hidden) {
                        gap = 0;
                      } else if (istring in lens) {
                        gap = lens[istring];
                      }
                      allGap += Math.round(gap + 1);
                      sets.push(allGap);
                    }
                  };
                  LuckyFile2.prototype.imagePositionCaculation = function (sheet) {
                    var images = sheet.images,
                      defaultColWidth = sheet.defaultColWidth,
                      defaultRowHeight = sheet.defaultRowHeight;
                    var colhidden = {};
                    if (sheet.config.colhidden) {
                      colhidden = sheet.config.colhidden;
                    }
                    var columnlen = {};
                    if (sheet.config.columnlen) {
                      columnlen = sheet.config.columnlen;
                    }
                    var rowhidden = {};
                    if (sheet.config.rowhidden) {
                      rowhidden = sheet.config.rowhidden;
                    }
                    var rowlen = {};
                    if (sheet.config.rowlen) {
                      rowlen = sheet.config.rowlen;
                    }
                    for (var key in images) {
                      var imageObject = images[key];
                      var fromCol = imageObject.fromCol;
                      var fromColOff = imageObject.fromColOff;
                      var fromRow = imageObject.fromRow;
                      var fromRowOff = imageObject.fromRowOff;
                      var toCol = imageObject.toCol;
                      var toColOff = imageObject.toColOff;
                      var toRow = imageObject.toRow;
                      var toRowOff = imageObject.toRowOff;
                      var x_n = 0,
                        y_n = 0;
                      var cx_n = 0,
                        cy_n = 0;
                      if (fromCol >= this.columnWidthSet.length) {
                        this.extendArray(fromCol, this.columnWidthSet, defaultColWidth, colhidden, columnlen);
                      }
                      if (fromCol == 0) {
                        x_n = 0;
                      } else {
                        x_n = this.columnWidthSet[fromCol - 1];
                      }
                      x_n = x_n + fromColOff;
                      if (fromRow >= this.rowHeightSet.length) {
                        this.extendArray(fromRow, this.rowHeightSet, defaultRowHeight, rowhidden, rowlen);
                      }
                      if (fromRow == 0) {
                        y_n = 0;
                      } else {
                        y_n = this.rowHeightSet[fromRow - 1];
                      }
                      y_n = y_n + fromRowOff;
                      if (toCol >= this.columnWidthSet.length) {
                        this.extendArray(toCol, this.columnWidthSet, defaultColWidth, colhidden, columnlen);
                      }
                      if (toCol == 0) {
                        cx_n = 0;
                      } else {
                        cx_n = this.columnWidthSet[toCol - 1];
                      }
                      cx_n = cx_n + toColOff - x_n;
                      if (toRow >= this.rowHeightSet.length) {
                        this.extendArray(toRow, this.rowHeightSet, defaultRowHeight, rowhidden, rowlen);
                      }
                      if (toRow == 0) {
                        cy_n = 0;
                      } else {
                        cy_n = this.rowHeightSet[toRow - 1];
                      }
                      cy_n = cy_n + toRowOff - y_n;
                      console.log(defaultColWidth, colhidden, columnlen);
                      console.log(fromCol, this.columnWidthSet[fromCol], fromColOff);
                      console.log(toCol, this.columnWidthSet[toCol], toColOff, JSON.stringify(this.columnWidthSet));
                      imageObject.originWidth = cx_n;
                      imageObject.originHeight = cy_n;
                      imageObject.crop.height = cy_n;
                      imageObject.crop.width = cx_n;
                      imageObject['default'].height = cy_n;
                      imageObject['default'].left = x_n;
                      imageObject['default'].top = y_n;
                      imageObject['default'].width = cx_n;
                    }
                    console.log(this.columnWidthSet, this.rowHeightSet);
                  };
                  LuckyFile2.prototype.getDrawingFile = function (rid, sheetFile) {
                    var sheetRelsPath = 'xl/worksheets/_rels/';
                    var sheetFileArr = sheetFile.split('/');
                    var sheetRelsName = sheetFileArr[sheetFileArr.length - 1];
                    var sheetRelsFile = sheetRelsPath + sheetRelsName + '.rels';
                    var drawing = this.readXml.getElementsByTagName('Relationships/Relationship', sheetRelsFile);
                    if (drawing.length > 0) {
                      for (var i = 0; i < drawing.length; i++) {
                        var relationship = drawing[i];
                        var attrList = relationship.attributeList;
                        var relationshipId = method_1.getXmlAttibute(attrList, 'Id', null);
                        if (relationshipId == rid) {
                          var target = method_1.getXmlAttibute(attrList, 'Target', null);
                          if (target != null) {
                            return target.replace(/\.\.\//g, '');
                          }
                        }
                      }
                    }
                    return null;
                  };
                  LuckyFile2.prototype.getDrawingRelsFile = function (drawingFile) {
                    var drawingRelsPath = 'xl/drawings/_rels/';
                    var drawingFileArr = drawingFile.split('/');
                    var drawingRelsName = drawingFileArr[drawingFileArr.length - 1];
                    var drawingRelsFile = drawingRelsPath + drawingRelsName + '.rels';
                    return drawingRelsFile;
                  };
                  LuckyFile2.prototype.getSheetsWithoutCell = function () {
                    this.getSheetsFull(false);
                  };
                  LuckyFile2.prototype.Parse = function () {
                    this.getWorkBookInfo();
                    this.getSheetsFull();
                    return this.toJsonString(this);
                  };
                  LuckyFile2.prototype.toJsonString = function (file) {
                    var LuckyOutPutFile = new LuckyBase_1.LuckyFileBase();
                    LuckyOutPutFile.info = file.info;
                    LuckyOutPutFile.sheets = [];
                    file.sheets.forEach(function (sheet) {
                      var sheetout = new LuckyBase_1.LuckySheetBase();
                      if (sheet.name != null) {
                        sheetout.name = sheet.name;
                      }
                      if (sheet.color != null) {
                        sheetout.color = sheet.color;
                      }
                      if (sheet.config != null) {
                        sheetout.config = sheet.config;
                      }
                      if (sheet.index != null) {
                        sheetout.index = sheet.index;
                      }
                      if (sheet.status != null) {
                        sheetout.status = sheet.status;
                      }
                      if (sheet.order != null) {
                        sheetout.order = sheet.order;
                      }
                      if (sheet.row != null) {
                        sheetout.row = sheet.row;
                      }
                      if (sheet.column != null) {
                        sheetout.column = sheet.column;
                      }
                      if (sheet.luckysheet_select_save != null) {
                        sheetout.luckysheet_select_save = sheet.luckysheet_select_save;
                      }
                      if (sheet.scrollLeft != null) {
                        sheetout.scrollLeft = sheet.scrollLeft;
                      }
                      if (sheet.scrollTop != null) {
                        sheetout.scrollTop = sheet.scrollTop;
                      }
                      if (sheet.zoomRatio != null) {
                        sheetout.zoomRatio = sheet.zoomRatio;
                      }
                      if (sheet.showGridLines != null) {
                        sheetout.showGridLines = sheet.showGridLines;
                      }
                      if (sheet.defaultColWidth != null) {
                        sheetout.defaultColWidth = sheet.defaultColWidth;
                      }
                      if (sheet.defaultRowHeight != null) {
                        sheetout.defaultRowHeight = sheet.defaultRowHeight;
                      }
                      if (sheet.celldata != null) {
                        sheetout.celldata = [];
                        sheet.celldata.forEach(function (cell) {
                          var cellout = new LuckyBase_1.LuckySheetCelldataBase();
                          cellout.r = cell.r;
                          cellout.c = cell.c;
                          cellout.v = cell.v;
                          sheetout.celldata.push(cellout);
                        });
                      }
                      if (sheet.chart != null) {
                        sheetout.chart = sheet.chart;
                      }
                      if (sheet.isPivotTable != null) {
                        sheetout.isPivotTable = sheet.isPivotTable;
                      }
                      if (sheet.pivotTable != null) {
                        sheetout.pivotTable = sheet.pivotTable;
                      }
                      if (sheet.luckysheet_conditionformat_save != null) {
                        sheetout.luckysheet_conditionformat_save = sheet.luckysheet_conditionformat_save;
                      }
                      if (sheet.freezen != null) {
                        sheetout.freezen = sheet.freezen;
                      }
                      if (sheet.calcChain != null) {
                        sheetout.calcChain = sheet.calcChain;
                      }
                      if (sheet.images != null) {
                        sheetout.images = sheet.images;
                      }
                      LuckyOutPutFile.sheets.push(sheetout);
                    });
                    return JSON.stringify(LuckyOutPutFile);
                  };
                  return LuckyFile2;
                })(LuckyBase_1.LuckyFileBase);
              exports3.LuckyFile = LuckyFile;
            },
            {
              '../common/constant': 91,
              '../common/method': 93,
              './LuckyBase': 85,
              './LuckyImage': 88,
              './LuckySheet': 89,
              './ReadXml': 90
            }
          ],
          88: [
            function (require2, module3, exports3) {
              'use strict';
              var __extends = /* @__PURE__ */ (function () {
                var _extendStatics = function extendStatics(d, b) {
                  _extendStatics =
                    Object.setPrototypeOf ||
                    ({
                      __proto__: []
                    } instanceof Array &&
                      function (d2, b2) {
                        d2.__proto__ = b2;
                      }) ||
                    function (d2, b2) {
                      for (var p in b2) {
                        if (b2.hasOwnProperty(p)) d2[p] = b2[p];
                      }
                    };
                  return _extendStatics(d, b);
                };
                return function (d, b) {
                  _extendStatics(d, b);
                  function __() {
                    this.constructor = d;
                  }
                  d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
                };
              })();
              Object.defineProperty(exports3, '__esModule', {
                value: true
              });
              exports3.ImageList = void 0;
              var LuckyBase_1 = require2('./LuckyBase');
              var emf_1 = require2('../common/emf');
              var ImageList =
                /** @class */
                (function () {
                  function ImageList2(files) {
                    if (files == null) {
                      return;
                    }
                    this.images = {};
                    for (var fileKey in files) {
                      if (fileKey.indexOf('xl/media/') > -1) {
                        var fileNameArr = fileKey.split('.');
                        var suffix = fileNameArr[fileNameArr.length - 1].toLowerCase();
                        if (
                          suffix in
                          {
                            png: 1,
                            jpeg: 1,
                            jpg: 1,
                            gif: 1,
                            bmp: 1,
                            tif: 1,
                            webp: 1,
                            emf: 1
                          }
                        ) {
                          if (suffix == 'emf') {
                            var pNum = 0;
                            var scale = 1;
                            var wrt = new emf_1.ToContext2D(pNum, scale);
                            var inp, out, stt;
                            emf_1.FromEMF.K = [];
                            inp = emf_1.FromEMF.C;
                            out = emf_1.FromEMF.K;
                            stt = 4;
                            for (var p in inp) {
                              out[inp[p]] = p.slice(stt);
                            }
                            emf_1.FromEMF.Parse(files[fileKey], wrt);
                            this.images[fileKey] = wrt.canvas.toDataURL('image/png');
                          } else {
                            this.images[fileKey] = files[fileKey];
                          }
                        }
                      }
                    }
                  }
                  ImageList2.prototype.getImageByName = function (pathName) {
                    if (pathName in this.images) {
                      var base64 = this.images[pathName];
                      return new Image(pathName, base64);
                    }
                    return null;
                  };
                  return ImageList2;
                })();
              exports3.ImageList = ImageList;
              var Image =
                /** @class */
                (function (_super) {
                  __extends(Image2, _super);
                  function Image2(pathName, base64) {
                    var _this = _super.call(this) || this;
                    _this.src = base64;
                    return _this;
                  }
                  Image2.prototype.setDefault = function () {};
                  return Image2;
                })(LuckyBase_1.LuckyImageBase);
            },
            { '../common/emf': 92, './LuckyBase': 85 }
          ],
          89: [
            function (require2, module3, exports3) {
              'use strict';
              var __extends = /* @__PURE__ */ (function () {
                var _extendStatics = function extendStatics(d, b) {
                  _extendStatics =
                    Object.setPrototypeOf ||
                    ({
                      __proto__: []
                    } instanceof Array &&
                      function (d2, b2) {
                        d2.__proto__ = b2;
                      }) ||
                    function (d2, b2) {
                      for (var p in b2) {
                        if (b2.hasOwnProperty(p)) d2[p] = b2[p];
                      }
                    };
                  return _extendStatics(d, b);
                };
                return function (d, b) {
                  _extendStatics(d, b);
                  function __() {
                    this.constructor = d;
                  }
                  d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
                };
              })();
              Object.defineProperty(exports3, '__esModule', {
                value: true
              });
              exports3.LuckySheet = void 0;
              var LuckyCell_1 = require2('./LuckyCell');
              var method_1 = require2('../common/method');
              var ReadXml_1 = require2('./ReadXml');
              var LuckyBase_1 = require2('./LuckyBase');
              var LuckySheet =
                /** @class */
                (function (_super) {
                  __extends(LuckySheet2, _super);
                  function LuckySheet2(sheetName, sheetId, sheetOrder, isInitialCell, allFileOption) {
                    if (isInitialCell === void 0) {
                      isInitialCell = false;
                    }
                    var _this =
                      //Private
                      _super.call(this) || this;
                    _this.isInitialCell = isInitialCell;
                    _this.readXml = allFileOption.readXml;
                    _this.sheetFile = allFileOption.sheetFile;
                    _this.styles = allFileOption.styles;
                    _this.sharedStrings = allFileOption.sharedStrings;
                    _this.calcChainEles = allFileOption.calcChain;
                    _this.sheetList = allFileOption.sheetList;
                    _this.imageList = allFileOption.imageList;
                    _this.name = sheetName;
                    _this.index = sheetId;
                    _this.order = sheetOrder.toString();
                    _this.config = new LuckyBase_1.LuckyConfig();
                    _this.celldata = [];
                    _this.mergeCells = _this.readXml.getElementsByTagName('mergeCells/mergeCell', _this.sheetFile);
                    var clrScheme = _this.styles['clrScheme'];
                    var sheetView = _this.readXml.getElementsByTagName('sheetViews/sheetView', _this.sheetFile);
                    var showGridLines = '1',
                      tabSelected = '0',
                      zoomScale = '100',
                      activeCell = 'A1';
                    if (sheetView.length > 0) {
                      var attrList = sheetView[0].attributeList;
                      showGridLines = method_1.getXmlAttibute(attrList, 'showGridLines', '1');
                      tabSelected = method_1.getXmlAttibute(attrList, 'tabSelected', '0');
                      zoomScale = method_1.getXmlAttibute(attrList, 'zoomScale', '100');
                      var selections = sheetView[0].getInnerElements('selection');
                      if (selections != null && selections.length > 0) {
                        activeCell = method_1.getXmlAttibute(selections[0].attributeList, 'activeCell', 'A1');
                        var range = method_1.getcellrange(activeCell, _this.sheetList, sheetId);
                        _this.luckysheet_select_save = [];
                        _this.luckysheet_select_save.push(range);
                      }
                    }
                    _this.showGridLines = showGridLines;
                    _this.status = tabSelected;
                    _this.zoomRatio = parseInt(zoomScale) / 100;
                    var tabColors = _this.readXml.getElementsByTagName('sheetPr/tabColor', _this.sheetFile);
                    if (tabColors != null && tabColors.length > 0) {
                      var tabColor = tabColors[0],
                        attrList = tabColor.attributeList;
                      var tc = ReadXml_1.getColor(tabColor, _this.styles, 'b');
                      _this.color = tc;
                    }
                    var sheetFormatPr = _this.readXml.getElementsByTagName('sheetFormatPr', _this.sheetFile);
                    var defaultColWidth, defaultRowHeight;
                    if (sheetFormatPr.length > 0) {
                      var attrList = sheetFormatPr[0].attributeList;
                      defaultColWidth = method_1.getXmlAttibute(attrList, 'defaultColWidth', '9.21');
                      defaultRowHeight = method_1.getXmlAttibute(attrList, 'defaultRowHeight', '19');
                    }
                    _this.defaultColWidth = method_1.getColumnWidthPixel(parseFloat(defaultColWidth));
                    _this.defaultRowHeight = method_1.getRowHeightPixel(parseFloat(defaultRowHeight));
                    _this.generateConfigColumnLenAndHidden();
                    var cellOtherInfo = _this.generateConfigRowLenAndHiddenAddCell();
                    if (_this.formulaRefList != null) {
                      for (var key in _this.formulaRefList) {
                        var funclist = _this.formulaRefList[key];
                        var mainFunc = funclist['mainRef'],
                          mainCellValue = mainFunc.cellValue;
                        var formulaTxt = mainFunc.fv;
                        var mainR = mainCellValue.r,
                          mainC = mainCellValue.c;
                        for (var name_1 in funclist) {
                          if (name_1 == 'mainRef') {
                            continue;
                          }
                          var funcValue = funclist[name_1],
                            cellValue = funcValue.cellValue;
                          if (cellValue == null) {
                            continue;
                          }
                          var r = cellValue.r,
                            c = cellValue.c;
                          var func = formulaTxt;
                          var offsetRow = r - mainR,
                            offsetCol = c - mainC;
                          if (offsetRow > 0) {
                            func = '=' + method_1.fromulaRef.functionCopy(func, 'down', offsetRow);
                          } else if (offsetRow < 0) {
                            func = '=' + method_1.fromulaRef.functionCopy(func, 'up', Math.abs(offsetRow));
                          }
                          if (offsetCol > 0) {
                            func = '=' + method_1.fromulaRef.functionCopy(func, 'right', offsetCol);
                          } else if (offsetCol < 0) {
                            func = '=' + method_1.fromulaRef.functionCopy(func, 'left', Math.abs(offsetCol));
                          }
                          cellValue.v.f = func;
                        }
                      }
                    }
                    if (_this.calcChain == null) {
                      _this.calcChain = [];
                    }
                    var formulaListExist = {};
                    for (var c = 0; c < _this.calcChainEles.length; c++) {
                      var calcChainEle = _this.calcChainEles[c],
                        attrList = calcChainEle.attributeList;
                      if (attrList.i != sheetId) {
                        continue;
                      }
                      var r = attrList.r,
                        i = attrList.i,
                        l = attrList.l,
                        s = attrList.s,
                        a = attrList.a,
                        t = attrList.t;
                      var range = method_1.getcellrange(r);
                      var chain = new LuckyBase_1.LuckysheetCalcChain();
                      chain.r = range.row[0];
                      chain.c = range.column[0];
                      chain.index = _this.index;
                      _this.calcChain.push(chain);
                      formulaListExist['r' + r + 'c' + c] = null;
                    }
                    for (var key in cellOtherInfo.formulaList) {
                      if (!(key in formulaListExist)) {
                        var formulaListItem = cellOtherInfo.formulaList[key];
                        var chain = new LuckyBase_1.LuckysheetCalcChain();
                        chain.r = formulaListItem.r;
                        chain.c = formulaListItem.c;
                        chain.index = _this.index;
                        _this.calcChain.push(chain);
                      }
                    }
                    if (_this.mergeCells != null) {
                      for (var i = 0; i < _this.mergeCells.length; i++) {
                        var merge = _this.mergeCells[i],
                          attrList = merge.attributeList;
                        var ref = attrList.ref;
                        if (ref == null) {
                          continue;
                        }
                        var range = method_1.getcellrange(ref, _this.sheetList, sheetId);
                        var mergeValue = new LuckyBase_1.LuckySheetConfigMerge();
                        mergeValue.r = range.row[0];
                        mergeValue.c = range.column[0];
                        mergeValue.rs = range.row[1] - range.row[0] + 1;
                        mergeValue.cs = range.column[1] - range.column[0] + 1;
                        if (_this.config.merge == null) {
                          _this.config.merge = {};
                        }
                        _this.config.merge[range.row[0] + '_' + range.column[0]] = mergeValue;
                      }
                    }
                    var drawingFile = allFileOption.drawingFile,
                      drawingRelsFile = allFileOption.drawingRelsFile;
                    if (drawingFile != null && drawingRelsFile != null) {
                      var twoCellAnchors = _this.readXml.getElementsByTagName('xdr:twoCellAnchor', drawingFile);
                      if (twoCellAnchors != null && twoCellAnchors.length > 0) {
                        for (var i = 0; i < twoCellAnchors.length; i++) {
                          var twoCellAnchor = twoCellAnchors[i];
                          var editAs = method_1.getXmlAttibute(twoCellAnchor.attributeList, 'editAs', 'twoCell');
                          var xdrFroms = twoCellAnchor.getInnerElements('xdr:from'),
                            xdrTos = twoCellAnchor.getInnerElements('xdr:to');
                          var xdr_blipfills = twoCellAnchor.getInnerElements('a:blip');
                          if (xdrFroms != null && xdr_blipfills != null && xdrFroms.length > 0 && xdr_blipfills.length > 0) {
                            var xdrFrom = xdrFroms[0],
                              xdrTo = xdrTos[0],
                              xdr_blipfill = xdr_blipfills[0];
                            var rembed = method_1.getXmlAttibute(xdr_blipfill.attributeList, 'r:embed', null);
                            var imageObject = _this.getBase64ByRid(rembed, drawingRelsFile);
                            var x_n = 0,
                              y_n = 0;
                            var cx_n = 0,
                              cy_n = 0;
                            imageObject.fromCol = _this.getXdrValue(xdrFrom.getInnerElements('xdr:col'));
                            imageObject.fromColOff = method_1.getPxByEMUs(
                              _this.getXdrValue(xdrFrom.getInnerElements('xdr:colOff'))
                            );
                            imageObject.fromRow = _this.getXdrValue(xdrFrom.getInnerElements('xdr:row'));
                            imageObject.fromRowOff = method_1.getPxByEMUs(
                              _this.getXdrValue(xdrFrom.getInnerElements('xdr:rowOff'))
                            );
                            imageObject.toCol = _this.getXdrValue(xdrTo.getInnerElements('xdr:col'));
                            imageObject.toColOff = method_1.getPxByEMUs(_this.getXdrValue(xdrTo.getInnerElements('xdr:colOff')));
                            imageObject.toRow = _this.getXdrValue(xdrTo.getInnerElements('xdr:row'));
                            imageObject.toRowOff = method_1.getPxByEMUs(_this.getXdrValue(xdrTo.getInnerElements('xdr:rowOff')));
                            imageObject.originWidth = cx_n;
                            imageObject.originHeight = cy_n;
                            if (editAs == 'absolute') {
                              imageObject.type = '3';
                            } else if (editAs == 'oneCell') {
                              imageObject.type = '2';
                            } else {
                              imageObject.type = '1';
                            }
                            imageObject.isFixedPos = false;
                            imageObject.fixedLeft = 0;
                            imageObject.fixedTop = 0;
                            var imageBorder = {
                              color: '#000',
                              radius: 0,
                              style: 'solid',
                              width: 0
                            };
                            imageObject.border = imageBorder;
                            var imageCrop = {
                              height: cy_n,
                              offsetLeft: 0,
                              offsetTop: 0,
                              width: cx_n
                            };
                            imageObject.crop = imageCrop;
                            var imageDefault = {
                              height: cy_n,
                              left: x_n,
                              top: y_n,
                              width: cx_n
                            };
                            imageObject['default'] = imageDefault;
                            if (_this.images == null) {
                              _this.images = {};
                            }
                            _this.images[method_1.generateRandomIndex('image')] = imageObject;
                          }
                        }
                      }
                    }
                    return _this;
                  }
                  LuckySheet2.prototype.getXdrValue = function (ele) {
                    if (ele == null || ele.length == 0) {
                      return null;
                    }
                    return parseInt(ele[0].value);
                  };
                  LuckySheet2.prototype.getBase64ByRid = function (rid, drawingRelsFile) {
                    var Relationships = this.readXml.getElementsByTagName('Relationships/Relationship', drawingRelsFile);
                    if (Relationships != null && Relationships.length > 0) {
                      for (var i = 0; i < Relationships.length; i++) {
                        var Relationship = Relationships[i];
                        var attrList = Relationship.attributeList;
                        var Id = method_1.getXmlAttibute(attrList, 'Id', null);
                        var src = method_1.getXmlAttibute(attrList, 'Target', null);
                        if (Id == rid) {
                          src = src.replace(/\.\.\//g, '');
                          src = 'xl/' + src;
                          var imgage = this.imageList.getImageByName(src);
                          return imgage;
                        }
                      }
                    }
                    return null;
                  };
                  LuckySheet2.prototype.generateConfigColumnLenAndHidden = function () {
                    var cols = this.readXml.getElementsByTagName('cols/col', this.sheetFile);
                    for (var i = 0; i < cols.length; i++) {
                      var col = cols[i],
                        attrList = col.attributeList;
                      var min = method_1.getXmlAttibute(attrList, 'min', null);
                      var max = method_1.getXmlAttibute(attrList, 'max', null);
                      var width = method_1.getXmlAttibute(attrList, 'width', null);
                      var hidden = method_1.getXmlAttibute(attrList, 'hidden', null);
                      var customWidth = method_1.getXmlAttibute(attrList, 'customWidth', null);
                      if (min == null || max == null) {
                        continue;
                      }
                      var minNum = parseInt(min) - 1,
                        maxNum = parseInt(max) - 1,
                        widthNum = parseFloat(width);
                      for (var m = minNum; m <= maxNum; m++) {
                        if (width != null) {
                          if (this.config.columnlen == null) {
                            this.config.columnlen = {};
                          }
                          this.config.columnlen[m] = method_1.getColumnWidthPixel(widthNum);
                        }
                        if (hidden == '1') {
                          if (this.config.colhidden == null) {
                            this.config.colhidden = {};
                          }
                          this.config.colhidden[m] = 0;
                          if (this.config.columnlen) {
                            delete this.config.columnlen[m];
                          }
                        }
                        if (customWidth != null) {
                          if (this.config.customWidth == null) {
                            this.config.customWidth = {};
                          }
                          this.config.customWidth[m] = 1;
                        }
                      }
                    }
                  };
                  LuckySheet2.prototype.generateConfigRowLenAndHiddenAddCell = function () {
                    var rows = this.readXml.getElementsByTagName('sheetData/row', this.sheetFile);
                    var cellOtherInfo = {};
                    var formulaList = {};
                    cellOtherInfo.formulaList = formulaList;
                    for (var i = 0; i < rows.length; i++) {
                      var row = rows[i],
                        attrList = row.attributeList;
                      var rowNo = method_1.getXmlAttibute(attrList, 'r', null);
                      var height = method_1.getXmlAttibute(attrList, 'ht', null);
                      var hidden = method_1.getXmlAttibute(attrList, 'hidden', null);
                      var customHeight = method_1.getXmlAttibute(attrList, 'customHeight', null);
                      if (rowNo == null) {
                        continue;
                      }
                      var rowNoNum = parseInt(rowNo) - 1;
                      if (height != null) {
                        var heightNum = parseFloat(height);
                        if (this.config.rowlen == null) {
                          this.config.rowlen = {};
                        }
                        this.config.rowlen[rowNoNum] = method_1.getRowHeightPixel(heightNum);
                      }
                      if (hidden == '1') {
                        if (this.config.rowhidden == null) {
                          this.config.rowhidden = {};
                        }
                        this.config.rowhidden[rowNoNum] = 0;
                        if (this.config.rowlen) {
                          delete this.config.rowlen[rowNoNum];
                        }
                      }
                      if (customHeight != null) {
                        if (this.config.customHeight == null) {
                          this.config.customHeight = {};
                        }
                        this.config.customHeight[rowNoNum] = 1;
                      }
                      if (this.isInitialCell) {
                        var cells = row.getInnerElements('c');
                        for (var key in cells) {
                          var cell = cells[key];
                          var cellValue = new LuckyCell_1.LuckySheetCelldata(
                            cell,
                            this.styles,
                            this.sharedStrings,
                            this.mergeCells,
                            this.sheetFile,
                            this.readXml
                          );
                          if (cellValue._borderObject != null) {
                            if (this.config.borderInfo == null) {
                              this.config.borderInfo = [];
                            }
                            this.config.borderInfo.push(cellValue._borderObject);
                            delete cellValue._borderObject;
                          }
                          if (cellValue._formulaType == 'shared') {
                            if (this.formulaRefList == null) {
                              this.formulaRefList = {};
                            }
                            if (this.formulaRefList[cellValue._formulaSi] == null) {
                              this.formulaRefList[cellValue._formulaSi] = {};
                            }
                            var fv = void 0;
                            if (cellValue.v != null) {
                              fv = cellValue.v.f;
                            }
                            var refValue = {
                              t: cellValue._formulaType,
                              ref: cellValue._fomulaRef,
                              si: cellValue._formulaSi,
                              fv,
                              cellValue
                            };
                            if (cellValue._fomulaRef != null) {
                              this.formulaRefList[cellValue._formulaSi]['mainRef'] = refValue;
                            } else {
                              this.formulaRefList[cellValue._formulaSi][cellValue.r + '_' + cellValue.c] = refValue;
                            }
                          }
                          if (cellValue.v != null && cellValue.v.f != null) {
                            var formulaCell = {
                              r: cellValue.r,
                              c: cellValue.c
                            };
                            cellOtherInfo.formulaList['r' + cellValue.r + 'c' + cellValue.c] = formulaCell;
                          }
                          this.celldata.push(cellValue);
                        }
                      }
                    }
                    return cellOtherInfo;
                  };
                  return LuckySheet2;
                })(LuckyBase_1.LuckySheetBase);
              exports3.LuckySheet = LuckySheet;
            },
            { '../common/method': 93, './LuckyBase': 85, './LuckyCell': 86, './ReadXml': 90 }
          ],
          90: [
            function (require2, module3, exports3) {
              'use strict';
              var __extends = /* @__PURE__ */ (function () {
                var _extendStatics = function extendStatics(d, b) {
                  _extendStatics =
                    Object.setPrototypeOf ||
                    ({
                      __proto__: []
                    } instanceof Array &&
                      function (d2, b2) {
                        d2.__proto__ = b2;
                      }) ||
                    function (d2, b2) {
                      for (var p in b2) {
                        if (b2.hasOwnProperty(p)) d2[p] = b2[p];
                      }
                    };
                  return _extendStatics(d, b);
                };
                return function (d, b) {
                  _extendStatics(d, b);
                  function __() {
                    this.constructor = d;
                  }
                  d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
                };
              })();
              Object.defineProperty(exports3, '__esModule', {
                value: true
              });
              exports3.getlineStringAttr = exports3.getColor = exports3.Element = exports3.ReadXml = void 0;
              var constant_1 = require2('../common/constant');
              var method_1 = require2('../common/method');
              var xmloperation =
                /** @class */
                (function () {
                  function xmloperation2() {}
                  xmloperation2.prototype.getElementsByOneTag = function (tag, file) {
                    var readTagReg;
                    if (tag.indexOf('|') > -1) {
                      var tags = tag.split('|'),
                        tagsRegTxt = '';
                      for (var i = 0; i < tags.length; i++) {
                        var t = tags[i];
                        tagsRegTxt +=
                          '|<' +
                          t +
                          ' [^>]+?[^/]>[\\s\\S]*?</' +
                          t +
                          '>|<' +
                          t +
                          ' [^>]+?/>|<' +
                          t +
                          '>[\\s\\S]*?</' +
                          t +
                          '>|<' +
                          t +
                          '/>';
                      }
                      tagsRegTxt = tagsRegTxt.substr(1, tagsRegTxt.length);
                      readTagReg = new RegExp(tagsRegTxt, 'g');
                    } else {
                      readTagReg = new RegExp(
                        '<' +
                          tag +
                          ' [^>]+?[^/]>[\\s\\S]*?</' +
                          tag +
                          '>|<' +
                          tag +
                          ' [^>]+?/>|<' +
                          tag +
                          '>[\\s\\S]*?</' +
                          tag +
                          '>|<' +
                          tag +
                          '/>',
                        'g'
                      );
                    }
                    var ret = file.match(readTagReg);
                    if (ret == null) {
                      return [];
                    } else {
                      return ret;
                    }
                  };
                  return xmloperation2;
                })();
              var ReadXml =
                /** @class */
                (function (_super) {
                  __extends(ReadXml2, _super);
                  function ReadXml2(files) {
                    var _this = _super.call(this) || this;
                    _this.originFile = files;
                    return _this;
                  }
                  ReadXml2.prototype.getElementsByTagName = function (path, fileName) {
                    var file = this.getFileByName(fileName);
                    var pathArr = path.split('/'),
                      ret;
                    for (var key in pathArr) {
                      var path_1 = pathArr[key];
                      if (ret == void 0) {
                        ret = this.getElementsByOneTag(path_1, file);
                      } else {
                        if (ret instanceof Array) {
                          var items = [];
                          for (var key_1 in ret) {
                            var item = ret[key_1];
                            items = items.concat(this.getElementsByOneTag(path_1, item));
                          }
                          ret = items;
                        } else {
                          ret = this.getElementsByOneTag(path_1, ret);
                        }
                      }
                    }
                    var elements = [];
                    for (var i = 0; i < ret.length; i++) {
                      var ele = new Element(ret[i]);
                      elements.push(ele);
                    }
                    return elements;
                  };
                  ReadXml2.prototype.getFileByName = function (name) {
                    for (var fileKey in this.originFile) {
                      if (fileKey.indexOf(name) > -1) {
                        return this.originFile[fileKey];
                      }
                    }
                    return '';
                  };
                  return ReadXml2;
                })(xmloperation);
              exports3.ReadXml = ReadXml;
              var Element =
                /** @class */
                (function (_super) {
                  __extends(Element2, _super);
                  function Element2(str) {
                    var _this = _super.call(this) || this;
                    _this.elementString = str;
                    _this.setValue();
                    var readAttrReg = new RegExp('[a-zA-Z0-9_:]*?=".*?"', 'g');
                    var attrList = _this.container.match(readAttrReg);
                    _this.attributeList = {};
                    if (attrList != null) {
                      for (var key in attrList) {
                        var attrFull = attrList[key];
                        if (attrFull.length == 0) {
                          continue;
                        }
                        var attrKey = attrFull.substr(0, attrFull.indexOf('='));
                        var attrValue = attrFull.substr(attrFull.indexOf('=') + 1);
                        if (attrKey == null || attrValue == null || attrKey.length == 0 || attrValue.length == 0) {
                          continue;
                        }
                        _this.attributeList[attrKey] = attrValue.substr(1, attrValue.length - 2);
                      }
                    }
                    return _this;
                  }
                  Element2.prototype.get = function (name) {
                    return this.attributeList[name];
                  };
                  Element2.prototype.getInnerElements = function (tag) {
                    var ret = this.getElementsByOneTag(tag, this.elementString);
                    var elements = [];
                    for (var i = 0; i < ret.length; i++) {
                      var ele = new Element2(ret[i]);
                      elements.push(ele);
                    }
                    if (elements.length == 0) {
                      return null;
                    }
                    return elements;
                  };
                  Element2.prototype.setValue = function () {
                    var str = this.elementString;
                    if (str.substr(str.length - 2, 2) == '/>') {
                      this.value = '';
                      this.container = str;
                    } else {
                      var firstTag = this.getFirstTag();
                      var firstTagReg = new RegExp(
                        '(<' +
                          firstTag +
                          ' [^>]+?[^/]>)([\\s\\S]*?)</' +
                          firstTag +
                          '>|(<' +
                          firstTag +
                          '>)([\\s\\S]*?)</' +
                          firstTag +
                          '>',
                        'g'
                      );
                      var result = firstTagReg.exec(str);
                      if (result != null) {
                        if (result[1] != null) {
                          this.container = result[1];
                          this.value = result[2];
                        } else {
                          this.container = result[3];
                          this.value = result[4];
                        }
                      }
                    }
                  };
                  Element2.prototype.getFirstTag = function () {
                    var str = this.elementString;
                    var firstTag = str.substr(0, str.indexOf(' '));
                    if (firstTag == '' || firstTag.indexOf('>') > -1) {
                      firstTag = str.substr(0, str.indexOf('>'));
                    }
                    firstTag = firstTag.substr(1, firstTag.length);
                    return firstTag;
                  };
                  return Element2;
                })(xmloperation);
              exports3.Element = Element;
              function combineIndexedColor(indexedColorsInner, indexedColors) {
                var ret = {};
                if (indexedColorsInner == null || indexedColorsInner.length == 0) {
                  return indexedColors;
                }
                for (var key in indexedColors) {
                  var value = indexedColors[key],
                    kn = parseInt(key);
                  var inner = indexedColorsInner[kn];
                  if (inner == null) {
                    ret[key] = value;
                  } else {
                    var rgb = inner.attributeList.rgb;
                    ret[key] = rgb;
                  }
                }
                return ret;
              }
              function getColor(color, styles, type) {
                if (type === void 0) {
                  type = 'g';
                }
                var attrList = color.attributeList;
                var clrScheme = styles['clrScheme'];
                var indexedColorsInner = styles['indexedColors'];
                var mruColorsInner = styles['mruColors'];
                var indexedColorsList = combineIndexedColor(indexedColorsInner, constant_1.indexedColors);
                var indexed = attrList.indexed,
                  rgb = attrList.rgb,
                  theme = attrList.theme,
                  tint = attrList.tint;
                var bg;
                if (indexed != null) {
                  var indexedNum = parseInt(indexed);
                  bg = indexedColorsList[indexedNum];
                  if (bg != null) {
                    bg = bg.substring(bg.length - 6, bg.length);
                    bg = '#' + bg;
                  }
                } else if (rgb != null) {
                  rgb = rgb.substring(rgb.length - 6, rgb.length);
                  bg = '#' + rgb;
                } else if (theme != null) {
                  var themeNum = parseInt(theme);
                  if (themeNum == 0) {
                    themeNum = 1;
                  } else if (themeNum == 1) {
                    themeNum = 0;
                  } else if (themeNum == 2) {
                    themeNum = 3;
                  } else if (themeNum == 3) {
                    themeNum = 2;
                  }
                  var clrSchemeElement = clrScheme[themeNum];
                  if (clrSchemeElement != null) {
                    var clrs = clrSchemeElement.getInnerElements('a:sysClr|a:srgbClr');
                    if (clrs != null) {
                      var clr = clrs[0];
                      var clrAttrList = clr.attributeList;
                      if (clr.container.indexOf('sysClr') > -1) {
                        if (clrAttrList.lastClr != null) {
                          bg = '#' + clrAttrList.lastClr;
                        } else if (clrAttrList.val != null) {
                          bg = '#' + clrAttrList.val;
                        }
                      } else if (clr.container.indexOf('srgbClr') > -1) {
                        bg = '#' + clrAttrList.val;
                      }
                    }
                  }
                }
                if (tint != null) {
                  var tintNum = parseFloat(tint);
                  if (bg != null) {
                    bg = method_1.LightenDarkenColor(bg, tintNum);
                  }
                }
                return bg;
              }
              exports3.getColor = getColor;
              function getlineStringAttr(frpr, attr) {
                var attrEle = frpr.getInnerElements(attr),
                  value;
                if (attrEle != null && attrEle.length > 0) {
                  if (attr == 'b' || attr == 'i' || attr == 'strike') {
                    value = '1';
                  } else if (attr == 'u') {
                    var v = attrEle[0].attributeList.val;
                    if (v == 'double') {
                      value = '2';
                    } else if (v == 'singleAccounting') {
                      value = '3';
                    } else if (v == 'doubleAccounting') {
                      value = '4';
                    } else {
                      value = '1';
                    }
                  } else if (attr == 'vertAlign') {
                    var v = attrEle[0].attributeList.val;
                    if (v == 'subscript') {
                      value = '1';
                    } else if (v == 'superscript') {
                      value = '2';
                    }
                  } else {
                    value = attrEle[0].attributeList.val;
                  }
                }
                return value;
              }
              exports3.getlineStringAttr = getlineStringAttr;
            },
            { '../common/constant': 91, '../common/method': 93 }
          ],
          91: [
            function (require2, module3, exports3) {
              'use strict';
              Object.defineProperty(exports3, '__esModule', {
                value: true
              });
              exports3.fontFamilys =
                exports3.borderTypes =
                exports3.OEM_CHARSET =
                exports3.indexedColors =
                exports3.numFmtDefault =
                exports3.BuiltInCellStyles =
                exports3.ST_CellType =
                exports3.workbookRels =
                exports3.theme1File =
                exports3.worksheetFilePath =
                exports3.sharedStringsFile =
                exports3.stylesFile =
                exports3.calcChainFile =
                exports3.workBookFile =
                exports3.contentTypesFile =
                exports3.appFile =
                exports3.coreFile =
                exports3.columeHeader_word_index =
                exports3.columeHeader_word =
                  void 0;
              exports3.columeHeader_word = [
                'A',
                'B',
                'C',
                'D',
                'E',
                'F',
                'G',
                'H',
                'I',
                'J',
                'K',
                'L',
                'M',
                'N',
                'O',
                'P',
                'Q',
                'R',
                'S',
                'T',
                'U',
                'V',
                'W',
                'X',
                'Y',
                'Z'
              ];
              exports3.columeHeader_word_index = {
                A: 0,
                B: 1,
                C: 2,
                D: 3,
                E: 4,
                F: 5,
                G: 6,
                H: 7,
                I: 8,
                J: 9,
                K: 10,
                L: 11,
                M: 12,
                N: 13,
                O: 14,
                P: 15,
                Q: 16,
                R: 17,
                S: 18,
                T: 19,
                U: 20,
                V: 21,
                W: 22,
                X: 23,
                Y: 24,
                Z: 25
              };
              exports3.coreFile = 'docProps/core.xml';
              exports3.appFile = 'docProps/app.xml';
              exports3.contentTypesFile = '[Content_Types].xml';
              exports3.workBookFile = 'xl/workbook.xml';
              exports3.calcChainFile = 'xl/calcChain.xml';
              exports3.stylesFile = 'xl/styles.xml';
              exports3.sharedStringsFile = 'xl/sharedStrings.xml';
              exports3.worksheetFilePath = 'xl/worksheets/';
              exports3.theme1File = 'xl/theme/theme1.xml';
              exports3.workbookRels = 'xl/_rels/workbook.xml.rels';
              exports3.ST_CellType = {
                Boolean: 'b',
                Date: 'd',
                Error: 'e',
                InlineString: 'inlineStr',
                Number: 'n',
                SharedString: 's',
                String: 'str'
              };
              exports3.BuiltInCellStyles = {
                0: 'Normal'
              };
              exports3.numFmtDefault = {
                0: 'General',
                1: '0',
                2: '0.00',
                3: '#,##0',
                4: '#,##0.00',
                9: '0%',
                10: '0.00%',
                11: '0.00E+00',
                12: '# ?/?',
                13: '# ??/??',
                14: 'm/d/yy',
                15: 'd-mmm-yy',
                16: 'd-mmm',
                17: 'mmm-yy',
                18: 'h:mm AM/PM',
                19: 'h:mm:ss AM/PM',
                20: 'h:mm',
                21: 'h:mm:ss',
                22: 'm/d/yy h:mm',
                37: '#,##0 ;(#,##0)',
                38: '#,##0 ;[Red](#,##0)',
                39: '#,##0.00;(#,##0.00)',
                40: '#,##0.00;[Red](#,##0.00)',
                45: 'mm:ss',
                46: '[h]:mm:ss',
                47: 'mmss.0',
                48: '##0.0E+0',
                49: '@'
              };
              exports3.indexedColors = {
                0: '00000000',
                1: '00FFFFFF',
                2: '00FF0000',
                3: '0000FF00',
                4: '000000FF',
                5: '00FFFF00',
                6: '00FF00FF',
                7: '0000FFFF',
                8: '00000000',
                9: '00FFFFFF',
                10: '00FF0000',
                11: '0000FF00',
                12: '000000FF',
                13: '00FFFF00',
                14: '00FF00FF',
                15: '0000FFFF',
                16: '00800000',
                17: '00008000',
                18: '00000080',
                19: '00808000',
                20: '00800080',
                21: '00008080',
                22: '00C0C0C0',
                23: '00808080',
                24: '009999FF',
                25: '00993366',
                26: '00FFFFCC',
                27: '00CCFFFF',
                28: '00660066',
                29: '00FF8080',
                30: '000066CC',
                31: '00CCCCFF',
                32: '00000080',
                33: '00FF00FF',
                34: '00FFFF00',
                35: '0000FFFF',
                36: '00800080',
                37: '00800000',
                38: '00008080',
                39: '000000FF',
                40: '0000CCFF',
                41: '00CCFFFF',
                42: '00CCFFCC',
                43: '00FFFF99',
                44: '0099CCFF',
                45: '00FF99CC',
                46: '00CC99FF',
                47: '00FFCC99',
                48: '003366FF',
                49: '0033CCCC',
                50: '0099CC00',
                51: '00FFCC00',
                52: '00FF9900',
                53: '00FF6600',
                54: '00666699',
                55: '00969696',
                56: '00003366',
                57: '00339966',
                58: '00003300',
                59: '00333300',
                60: '00993300',
                61: '00993366',
                62: '00333399',
                63: '00333333',
                64: null,
                65: null
              };
              exports3.OEM_CHARSET = {
                0: 'ANSI_CHARSET',
                1: 'DEFAULT_CHARSET',
                2: 'SYMBOL_CHARSET',
                77: 'MAC_CHARSET',
                128: 'SHIFTJIS_CHARSET',
                129: 'HANGUL_CHARSET',
                130: 'JOHAB_CHARSET',
                134: 'GB2312_CHARSET',
                136: 'CHINESEBIG5_CHARSET',
                161: 'GREEK_CHARSET',
                162: 'TURKISH_CHARSET',
                163: 'VIETNAMESE_CHARSET',
                177: 'HEBREW_CHARSET',
                178: 'ARABIC_CHARSET',
                186: 'BALTIC_CHARSET',
                204: 'RUSSIAN_CHARSET',
                222: 'THAI_CHARSET',
                238: 'EASTEUROPE_CHARSET',
                255: 'OEM_CHARSET'
              };
              exports3.borderTypes = {
                none: 0,
                thin: 1,
                hair: 2,
                dotted: 3,
                dashed: 4,
                dashDot: 5,
                dashDotDot: 6,
                double: 7,
                medium: 8,
                mediumDashed: 9,
                mediumDashDot: 10,
                mediumDashDotDot: 11,
                slantDashDot: 12,
                thick: 13
              };
              exports3.fontFamilys = {
                0: 'defualt',
                1: 'Roman',
                2: 'Swiss',
                3: 'Modern',
                4: 'Script',
                5: 'Decorative'
              };
            },
            {}
          ],
          92: [
            function (require2, module3, exports3) {
              'use strict';
              Object.defineProperty(exports3, '__esModule', {
                value: true
              });
              exports3.ToContext2D = exports3.FromEMF = exports3.UDOC = void 0;
              exports3.UDOC = {};
              exports3.UDOC.G = {
                concat: function concat(p, r) {
                  for (var i = 0; i < r.cmds.length; i++) {
                    p.cmds.push(r.cmds[i]);
                  }
                  for (var i = 0; i < r.crds.length; i++) {
                    p.crds.push(r.crds[i]);
                  }
                },
                getBB: function getBB(ps) {
                  var x0 = 1e99,
                    y0 = 1e99,
                    x1 = -x0,
                    y1 = -y0;
                  for (var i = 0; i < ps.length; i += 2) {
                    var x = ps[i],
                      y = ps[i + 1];
                    if (x < x0) x0 = x;
                    else if (x > x1) x1 = x;
                    if (y < y0) y0 = y;
                    else if (y > y1) y1 = y;
                  }
                  return [x0, y0, x1, y1];
                },
                rectToPath: function rectToPath(r) {
                  return {
                    cmds: ['M', 'L', 'L', 'L', 'Z'],
                    crds: [r[0], r[1], r[2], r[1], r[2], r[3], r[0], r[3]]
                  };
                },
                // a inside b
                insideBox: function insideBox(a, b) {
                  return b[0] <= a[0] && b[1] <= a[1] && a[2] <= b[2] && a[3] <= b[3];
                },
                isBox: function isBox(p, bb) {
                  var sameCrd8 = function sameCrd82(pcrd, crds2) {
                    for (var o = 0; o < 8; o += 2) {
                      var eq = true;
                      for (var j = 0; j < 8; j++) {
                        if (Math.abs(crds2[j] - pcrd[(j + o) & 7]) >= 2) {
                          eq = false;
                          break;
                        }
                      }
                      if (eq) return true;
                    }
                    return false;
                  };
                  if (p.cmds.length > 10) return false;
                  var cmds = p.cmds.join(''),
                    crds = p.crds;
                  var sameRect = false;
                  if ((cmds == 'MLLLZ' && crds.length == 8) || (cmds == 'MLLLLZ' && crds.length == 10)) {
                    if (crds.length == 10) crds = crds.slice(0, 8);
                    var x0 = bb[0],
                      y0 = bb[1],
                      x1 = bb[2],
                      y1 = bb[3];
                    if (!sameRect) sameRect = sameCrd8(crds, [x0, y0, x1, y0, x1, y1, x0, y1]);
                    if (!sameRect) sameRect = sameCrd8(crds, [x0, y1, x1, y1, x1, y0, x0, y0]);
                  }
                  return sameRect;
                },
                boxArea: function boxArea(a) {
                  var w = a[2] - a[0],
                    h = a[3] - a[1];
                  return w * h;
                },
                newPath: function newPath(gst) {
                  gst.pth = {
                    cmds: [],
                    crds: []
                  };
                },
                moveTo: function moveTo(gst, x, y) {
                  var p = exports3.UDOC.M.multPoint(gst.ctm, [x, y]);
                  gst.pth.cmds.push('M');
                  gst.pth.crds.push(p[0], p[1]);
                  gst.cpos = p;
                },
                lineTo: function lineTo(gst, x, y) {
                  var p = exports3.UDOC.M.multPoint(gst.ctm, [x, y]);
                  if (gst.cpos[0] == p[0] && gst.cpos[1] == p[1]) return;
                  gst.pth.cmds.push('L');
                  gst.pth.crds.push(p[0], p[1]);
                  gst.cpos = p;
                },
                curveTo: function curveTo(gst, x1, y1, x2, y2, x3, y3) {
                  var p;
                  p = exports3.UDOC.M.multPoint(gst.ctm, [x1, y1]);
                  x1 = p[0];
                  y1 = p[1];
                  p = exports3.UDOC.M.multPoint(gst.ctm, [x2, y2]);
                  x2 = p[0];
                  y2 = p[1];
                  p = exports3.UDOC.M.multPoint(gst.ctm, [x3, y3]);
                  x3 = p[0];
                  y3 = p[1];
                  gst.cpos = p;
                  gst.pth.cmds.push('C');
                  gst.pth.crds.push(x1, y1, x2, y2, x3, y3);
                },
                closePath: function closePath(gst) {
                  gst.pth.cmds.push('Z');
                },
                arc: function arc(gst, x, y, r, a0, a1, neg) {
                  if (neg)
                    while (a1 > a0) {
                      a1 -= 2 * Math.PI;
                    }
                  else
                    while (a1 < a0) {
                      a1 += 2 * Math.PI;
                    }
                  var th = (a1 - a0) / 4;
                  var x0 = Math.cos(th / 2),
                    y0 = -Math.sin(th / 2);
                  var x1 = (4 - x0) / 3,
                    y1 = y0 == 0 ? y0 : ((1 - x0) * (3 - x0)) / (3 * y0);
                  var x2 = x1,
                    y2 = -y1;
                  var x3 = x0,
                    y3 = -y0;
                  var p0 = [x0, y0],
                    p1 = [x1, y1],
                    p2 = [x2, y2],
                    p3 = [x3, y3];
                  var pth = {
                    cmds: [gst.pth.cmds.length == 0 ? 'M' : 'L', 'C', 'C', 'C', 'C'],
                    crds: [x0, y0, x1, y1, x2, y2, x3, y3]
                  };
                  var rot = [1, 0, 0, 1, 0, 0];
                  exports3.UDOC.M.rotate(rot, -th);
                  for (var i = 0; i < 3; i++) {
                    p1 = exports3.UDOC.M.multPoint(rot, p1);
                    p2 = exports3.UDOC.M.multPoint(rot, p2);
                    p3 = exports3.UDOC.M.multPoint(rot, p3);
                    pth.crds.push(p1[0], p1[1], p2[0], p2[1], p3[0], p3[1]);
                  }
                  var sc = [r, 0, 0, r, x, y];
                  exports3.UDOC.M.rotate(rot, -a0 + th / 2);
                  exports3.UDOC.M.concat(rot, sc);
                  exports3.UDOC.M.multArray(rot, pth.crds);
                  exports3.UDOC.M.multArray(gst.ctm, pth.crds);
                  exports3.UDOC.G.concat(gst.pth, pth);
                  var y = pth.crds.pop();
                  x = pth.crds.pop();
                  gst.cpos = [x, y];
                },
                toPoly: function toPoly(p) {
                  if (p.cmds[0] != 'M' || p.cmds[p.cmds.length - 1] != 'Z') return null;
                  for (var i = 1; i < p.cmds.length - 1; i++) {
                    if (p.cmds[i] != 'L') return null;
                  }
                  var out = [],
                    cl = p.crds.length;
                  if (p.crds[0] == p.crds[cl - 2] && p.crds[1] == p.crds[cl - 1]) cl -= 2;
                  for (var i = 0; i < cl; i += 2) {
                    out.push([p.crds[i], p.crds[i + 1]]);
                  }
                  if (exports3.UDOC.G.polyArea(p.crds) < 0) out.reverse();
                  return out;
                },
                fromPoly: function fromPoly(p) {
                  var o = {
                    cmds: [],
                    crds: []
                  };
                  for (var i = 0; i < p.length; i++) {
                    o.crds.push(p[i][0], p[i][1]);
                    o.cmds.push(i == 0 ? 'M' : 'L');
                  }
                  o.cmds.push('Z');
                  return o;
                },
                polyArea: function polyArea(p) {
                  if (p.length < 6) return 0;
                  var l = p.length - 2;
                  var sum = (p[0] - p[l]) * (p[l + 1] + p[1]);
                  for (var i = 0; i < l; i += 2) {
                    sum += (p[i + 2] - p[i]) * (p[i + 1] + p[i + 3]);
                  }
                  return -sum * 0.5;
                },
                polyClip: function polyClip(p0, p1) {
                  var cp1, cp2, s, e;
                  var inside = function inside2(p) {
                    return (cp2[0] - cp1[0]) * (p[1] - cp1[1]) > (cp2[1] - cp1[1]) * (p[0] - cp1[0]);
                  };
                  var isc = function isc2() {
                    var dc = [cp1[0] - cp2[0], cp1[1] - cp2[1]],
                      dp = [s[0] - e[0], s[1] - e[1]],
                      n1 = cp1[0] * cp2[1] - cp1[1] * cp2[0],
                      n2 = s[0] * e[1] - s[1] * e[0],
                      n3 = 1 / (dc[0] * dp[1] - dc[1] * dp[0]);
                    return [(n1 * dp[0] - n2 * dc[0]) * n3, (n1 * dp[1] - n2 * dc[1]) * n3];
                  };
                  var out = p0;
                  cp1 = p1[p1.length - 1];
                  for (var j in p1) {
                    var cp2 = p1[j];
                    var inp = out;
                    out = [];
                    s = inp[inp.length - 1];
                    for (var i in inp) {
                      var e = inp[i];
                      if (inside(e)) {
                        if (!inside(s)) {
                          out.push(isc());
                        }
                        out.push(e);
                      } else if (inside(s)) {
                        out.push(isc());
                      }
                      s = e;
                    }
                    cp1 = cp2;
                  }
                  return out;
                }
              };
              exports3.UDOC.M = {
                getScale: function getScale(m) {
                  return Math.sqrt(Math.abs(m[0] * m[3] - m[1] * m[2]));
                },
                translate: function translate(m, x, y) {
                  exports3.UDOC.M.concat(m, [1, 0, 0, 1, x, y]);
                },
                rotate: function rotate(m, a) {
                  exports3.UDOC.M.concat(m, [Math.cos(a), -Math.sin(a), Math.sin(a), Math.cos(a), 0, 0]);
                },
                scale: function scale(m, x, y) {
                  exports3.UDOC.M.concat(m, [x, 0, 0, y, 0, 0]);
                },
                concat: function concat(m, w) {
                  var a = m[0],
                    b = m[1],
                    c = m[2],
                    d = m[3],
                    tx = m[4],
                    ty = m[5];
                  m[0] = a * w[0] + b * w[2];
                  m[1] = a * w[1] + b * w[3];
                  m[2] = c * w[0] + d * w[2];
                  m[3] = c * w[1] + d * w[3];
                  m[4] = tx * w[0] + ty * w[2] + w[4];
                  m[5] = tx * w[1] + ty * w[3] + w[5];
                },
                invert: function invert(m) {
                  var a = m[0],
                    b = m[1],
                    c = m[2],
                    d = m[3],
                    tx = m[4],
                    ty = m[5],
                    adbc = a * d - b * c;
                  m[0] = d / adbc;
                  m[1] = -b / adbc;
                  m[2] = -c / adbc;
                  m[3] = a / adbc;
                  m[4] = (c * ty - d * tx) / adbc;
                  m[5] = (b * tx - a * ty) / adbc;
                },
                multPoint: function multPoint(m, p) {
                  var x = p[0],
                    y = p[1];
                  return [x * m[0] + y * m[2] + m[4], x * m[1] + y * m[3] + m[5]];
                },
                multArray: function multArray(m, a) {
                  for (var i = 0; i < a.length; i += 2) {
                    var x = a[i],
                      y = a[i + 1];
                    a[i] = x * m[0] + y * m[2] + m[4];
                    a[i + 1] = x * m[1] + y * m[3] + m[5];
                  }
                }
              };
              exports3.UDOC.C = {
                srgbGamma: function srgbGamma(x) {
                  return x < 31308e-7 ? 12.92 * x : 1.055 * Math.pow(x, 1 / 2.4) - 0.055;
                },
                cmykToRgb: function cmykToRgb(clr) {
                  var c = clr[0],
                    m = clr[1],
                    y = clr[2],
                    k = clr[3];
                  var r =
                    255 +
                    c *
                      (-4.387332384609988 * c +
                        54.48615194189176 * m +
                        18.82290502165302 * y +
                        212.25662451639585 * k +
                        -285.2331026137004) +
                    m * (1.7149763477362134 * m - 5.6096736904047315 * y + -17.873870861415444 * k - 5.497006427196366) +
                    y * (-2.5217340131683033 * y - 21.248923337353073 * k + 17.5119270841813) +
                    k * (-21.86122147463605 * k - 189.48180835922747);
                  var g =
                    255 +
                    c *
                      (8.841041422036149 * c +
                        60.118027045597366 * m +
                        6.871425592049007 * y +
                        31.159100130055922 * k +
                        -79.2970844816548) +
                    m * (-15.310361306967817 * m + 17.575251261109482 * y + 131.35250912493976 * k - 190.9453302588951) +
                    y * (4.444339102852739 * y + 9.8632861493405 * k - 24.86741582555878) +
                    k * (-20.737325471181034 * k - 187.80453709719578);
                  var b =
                    255 +
                    c *
                      (0.8842522430003296 * c +
                        8.078677503112928 * m +
                        30.89978309703729 * y -
                        0.23883238689178934 * k +
                        -14.183576799673286) +
                    m * (10.49593273432072 * m + 63.02378494754052 * y + 50.606957656360734 * k - 112.23884253719248) +
                    y * (0.03296041114873217 * y + 115.60384449646641 * k + -193.58209356861505) +
                    k * (-22.33816807309886 * k - 180.12613974708367);
                  return [
                    Math.max(0, Math.min(1, r / 255)),
                    Math.max(0, Math.min(1, g / 255)),
                    Math.max(0, Math.min(1, b / 255))
                  ];
                },
                labToRgb: function labToRgb(lab) {
                  var k = 903.3,
                    e = 8856e-6,
                    L = lab[0],
                    a = lab[1],
                    b = lab[2];
                  var fy = (L + 16) / 116,
                    fy3 = fy * fy * fy;
                  var fz = fy - b / 200,
                    fz3 = fz * fz * fz;
                  var fx = a / 500 + fy,
                    fx3 = fx * fx * fx;
                  var zr = fz3 > e ? fz3 : (116 * fz - 16) / k;
                  var yr = fy3 > e ? fy3 : (116 * fy - 16) / k;
                  var xr = fx3 > e ? fx3 : (116 * fx - 16) / k;
                  var X = xr * 96.72,
                    Y = yr * 100,
                    Z = zr * 81.427,
                    xyz = [X / 100, Y / 100, Z / 100];
                  var x2s = [
                    3.1338561, -1.6168667, -0.4906146, -0.9787684, 1.9161415, 0.033454, 0.0719453, -0.2289914, 1.4052427
                  ];
                  var rgb = [
                    x2s[0] * xyz[0] + x2s[1] * xyz[1] + x2s[2] * xyz[2],
                    x2s[3] * xyz[0] + x2s[4] * xyz[1] + x2s[5] * xyz[2],
                    x2s[6] * xyz[0] + x2s[7] * xyz[1] + x2s[8] * xyz[2]
                  ];
                  for (var i = 0; i < 3; i++) {
                    rgb[i] = Math.max(0, Math.min(1, exports3.UDOC.C.srgbGamma(rgb[i])));
                  }
                  return rgb;
                }
              };
              exports3.UDOC.getState = function (crds) {
                return {
                  font: exports3.UDOC.getFont(),
                  dd: {
                    flat: 1
                  },
                  space: '/DeviceGray',
                  // fill
                  ca: 1,
                  colr: [0, 0, 0],
                  sspace: '/DeviceGray',
                  // stroke
                  CA: 1,
                  COLR: [0, 0, 0],
                  bmode: '/Normal',
                  SA: false,
                  OPM: 0,
                  AIS: false,
                  OP: false,
                  op: false,
                  SMask: '/None',
                  lwidth: 1,
                  lcap: 0,
                  ljoin: 0,
                  mlimit: 10,
                  SM: 0.1,
                  doff: 0,
                  dash: [],
                  ctm: [1, 0, 0, 1, 0, 0],
                  cpos: [0, 0],
                  pth: {
                    cmds: [],
                    crds: []
                  },
                  cpth: crds ? exports3.UDOC.G.rectToPath(crds) : null
                  // clipping path
                };
              };
              exports3.UDOC.getFont = function () {
                return {
                  Tc: 0,
                  Tw: 0,
                  Th: 100,
                  Tl: 0,
                  Tf: 'Helvetica-Bold',
                  Tfs: 1,
                  Tmode: 0,
                  Trise: 0,
                  Tk: 0,
                  Tal: 0,
                  Tun: 0,
                  Tm: [1, 0, 0, 1, 0, 0],
                  Tlm: [1, 0, 0, 1, 0, 0],
                  Trm: [1, 0, 0, 1, 0, 0]
                };
              };
              exports3.FromEMF = function () {};
              exports3.FromEMF.Parse = function (buff, genv) {
                buff = new Uint8Array(buff);
                var off = 0;
                var prms = {
                    fill: false,
                    strk: false,
                    bb: [0, 0, 1, 1],
                    wbb: [0, 0, 1, 1],
                    fnt: {
                      nam: 'Arial',
                      hgh: 25,
                      und: false,
                      orn: 0
                    },
                    tclr: [0, 0, 0],
                    talg: 0
                  },
                  gst,
                  tab = [],
                  sts = [];
                var rI = exports3.FromEMF.B.readShort,
                  rU = exports3.FromEMF.B.readUshort,
                  rI32 = exports3.FromEMF.B.readInt,
                  rU32 = exports3.FromEMF.B.readUint,
                  rF32 = exports3.FromEMF.B.readFloat;
                var opn = 0;
                while (true) {
                  var fnc = rU32(buff, off);
                  off += 4;
                  var fnm = exports3.FromEMF.K[fnc];
                  var siz = rU32(buff, off);
                  off += 4;
                  var loff = off;
                  var obj = null,
                    oid = 0;
                  if (false) {
                  } else if (fnm == 'EOF') {
                    break;
                  } else if (fnm == 'HEADER') {
                    prms.bb = exports3.FromEMF._readBox(buff, loff);
                    loff += 16;
                    genv.StartPage(prms.bb[0], prms.bb[1], prms.bb[2], prms.bb[3]);
                    gst = exports3.UDOC.getState(prms.bb);
                  } else if (fnm == 'SAVEDC') sts.push(JSON.stringify(gst), JSON.stringify(prms));
                  else if (fnm == 'RESTOREDC') {
                    var dif = rI32(buff, loff);
                    loff += 4;
                    while (dif < -1) {
                      sts.pop();
                      sts.pop();
                    }
                    prms = JSON.parse(sts.pop());
                    gst = JSON.parse(sts.pop());
                  } else if (fnm == 'SELECTCLIPPATH') {
                    gst.cpth = JSON.parse(JSON.stringify(gst.pth));
                  } else if (
                    ['SETMAPMODE', 'SETPOLYFILLMODE', 'SETBKMODE', 'SETICMMODE', 'SETROP2', 'EXTSELECTCLIPRGN'].indexOf(fnm) != -1
                  ) {
                  } else if (fnm == 'SETMITERLIMIT') gst.mlimit = rU32(buff, loff);
                  else if (fnm == 'SETTEXTCOLOR') prms.tclr = [buff[loff] / 255, buff[loff + 1] / 255, buff[loff + 2] / 255];
                  else if (fnm == 'SETTEXTALIGN') prms.talg = rU32(buff, loff);
                  else if (fnm == 'SETVIEWPORTEXTEX' || fnm == 'SETVIEWPORTORGEX') {
                    if (prms.vbb == null) prms.vbb = [];
                    var coff = fnm == 'SETVIEWPORTORGEX' ? 0 : 2;
                    prms.vbb[coff] = rI32(buff, loff);
                    loff += 4;
                    prms.vbb[coff + 1] = rI32(buff, loff);
                    loff += 4;
                    if (fnm == 'SETVIEWPORTEXTEX') exports3.FromEMF._updateCtm(prms, gst);
                  } else if (fnm == 'SETWINDOWEXTEX' || fnm == 'SETWINDOWORGEX') {
                    var coff = fnm == 'SETWINDOWORGEX' ? 0 : 2;
                    prms.wbb[coff] = rI32(buff, loff);
                    loff += 4;
                    prms.wbb[coff + 1] = rI32(buff, loff);
                    loff += 4;
                    if (fnm == 'SETWINDOWEXTEX') exports3.FromEMF._updateCtm(prms, gst);
                  } else if (fnm == 'COMMENT') {
                    var ds = rU32(buff, loff);
                    loff += 4;
                  } else if (fnm == 'SELECTOBJECT') {
                    var ind = rU32(buff, loff);
                    loff += 4;
                    if (ind == 2147483648) {
                      prms.fill = true;
                      gst.colr = [1, 1, 1];
                    } else if (ind == 2147483653) {
                      prms.fill = false;
                    } else if (ind == 2147483655) {
                      prms.strk = true;
                      prms.lwidth = 1;
                      gst.COLR = [0, 0, 0];
                    } else if (ind == 2147483656) {
                      prms.strk = false;
                    } else if (ind == 2147483661) {
                    } else if (ind == 2147483662) {
                    } else {
                      var co = tab[ind];
                      if (co.t == 'b') {
                        prms.fill = co.stl != 1;
                        if (co.stl == 0) {
                        } else if (co.stl == 1) {
                        } else throw co.stl + ' e';
                        gst.colr = co.clr;
                      } else if (co.t == 'p') {
                        prms.strk = co.stl != 5;
                        gst.lwidth = co.wid;
                        gst.COLR = co.clr;
                      } else if (co.t == 'f') {
                        prms.fnt = co;
                        gst.font.Tf = co.nam;
                        gst.font.Tfs = Math.abs(co.hgh);
                        gst.font.Tun = co.und;
                      } else throw 'e';
                    }
                  } else if (fnm == 'DELETEOBJECT') {
                    var ind = rU32(buff, loff);
                    loff += 4;
                    if (tab[ind] != null) tab[ind] = null;
                    else throw 'e';
                  } else if (fnm == 'CREATEBRUSHINDIRECT') {
                    oid = rU32(buff, loff);
                    loff += 4;
                    obj = {
                      t: 'b'
                    };
                    obj.stl = rU32(buff, loff);
                    loff += 4;
                    obj.clr = [buff[loff] / 255, buff[loff + 1] / 255, buff[loff + 2] / 255];
                    loff += 4;
                    obj.htc = rU32(buff, loff);
                    loff += 4;
                  } else if (fnm == 'CREATEPEN' || fnm == 'EXTCREATEPEN') {
                    oid = rU32(buff, loff);
                    loff += 4;
                    obj = {
                      t: 'p'
                    };
                    if (fnm == 'EXTCREATEPEN') {
                      loff += 16;
                      obj.stl = rU32(buff, loff);
                      loff += 4;
                      obj.wid = rU32(buff, loff);
                      loff += 4;
                      loff += 4;
                    } else {
                      obj.stl = rU32(buff, loff);
                      loff += 4;
                      obj.wid = rU32(buff, loff);
                      loff += 4;
                      loff += 4;
                    }
                    obj.clr = [buff[loff] / 255, buff[loff + 1] / 255, buff[loff + 2] / 255];
                    loff += 4;
                  } else if (fnm == 'EXTCREATEFONTINDIRECTW') {
                    oid = rU32(buff, loff);
                    loff += 4;
                    obj = {
                      t: 'f',
                      nam: ''
                    };
                    obj.hgh = rI32(buff, loff);
                    loff += 4;
                    loff += 4 * 2;
                    obj.orn = rI32(buff, loff) / 10;
                    loff += 4;
                    var wgh = rU32(buff, loff);
                    loff += 4;
                    obj.und = buff[loff + 1];
                    obj.stk = buff[loff + 2];
                    loff += 4 * 2;
                    while (rU(buff, loff) != 0) {
                      obj.nam += String.fromCharCode(rU(buff, loff));
                      loff += 2;
                    }
                    if (wgh > 500) obj.nam += '-Bold';
                  } else if (fnm == 'EXTTEXTOUTW') {
                    loff += 16;
                    var mod = rU32(buff, loff);
                    loff += 4;
                    var scx = rF32(buff, loff);
                    loff += 4;
                    var scy = rF32(buff, loff);
                    loff += 4;
                    var rfx = rI32(buff, loff);
                    loff += 4;
                    var rfy = rI32(buff, loff);
                    loff += 4;
                    gst.font.Tm = [1, 0, 0, -1, 0, 0];
                    exports3.UDOC.M.rotate(gst.font.Tm, (prms.fnt.orn * Math.PI) / 180);
                    exports3.UDOC.M.translate(gst.font.Tm, rfx, rfy);
                    var alg = prms.talg;
                    if ((alg & 6) == 6) gst.font.Tal = 2;
                    else if ((alg & 7) == 0) gst.font.Tal = 0;
                    else throw alg + ' e';
                    if ((alg & 24) == 24) {
                    } else if ((alg & 24) == 0) exports3.UDOC.M.translate(gst.font.Tm, 0, gst.font.Tfs);
                    else throw 'e';
                    var crs = rU32(buff, loff);
                    loff += 4;
                    var ofs = rU32(buff, loff);
                    loff += 4;
                    var ops = rU32(buff, loff);
                    loff += 4;
                    loff += 16;
                    var ofD = rU32(buff, loff);
                    loff += 4;
                    ofs += off - 8;
                    var str = '';
                    for (var i = 0; i < crs; i++) {
                      var cc = rU(buff, ofs + i * 2);
                      str += String.fromCharCode(cc);
                    }
                    var oclr = gst.colr;
                    gst.colr = prms.tclr;
                    genv.PutText(gst, str, str.length * gst.font.Tfs * 0.5);
                    gst.colr = oclr;
                  } else if (fnm == 'BEGINPATH') {
                    exports3.UDOC.G.newPath(gst);
                  } else if (fnm == 'ENDPATH') {
                  } else if (fnm == 'CLOSEFIGURE') exports3.UDOC.G.closePath(gst);
                  else if (fnm == 'MOVETOEX') {
                    exports3.UDOC.G.moveTo(gst, rI32(buff, loff), rI32(buff, loff + 4));
                  } else if (fnm == 'LINETO') {
                    if (gst.pth.cmds.length == 0) {
                      var im = gst.ctm.slice(0);
                      exports3.UDOC.M.invert(im);
                      var p = exports3.UDOC.M.multPoint(im, gst.cpos);
                      exports3.UDOC.G.moveTo(gst, p[0], p[1]);
                    }
                    exports3.UDOC.G.lineTo(gst, rI32(buff, loff), rI32(buff, loff + 4));
                  } else if (
                    fnm == 'POLYGON' ||
                    fnm == 'POLYGON16' ||
                    fnm == 'POLYLINE' ||
                    fnm == 'POLYLINE16' ||
                    fnm == 'POLYLINETO' ||
                    fnm == 'POLYLINETO16'
                  ) {
                    loff += 16;
                    var ndf = fnm.startsWith('POLYGON'),
                      isTo = fnm.indexOf('TO') != -1;
                    var cnt = rU32(buff, loff);
                    loff += 4;
                    if (!isTo) exports3.UDOC.G.newPath(gst);
                    loff = exports3.FromEMF._drawPoly(buff, loff, cnt, gst, fnm.endsWith('16') ? 2 : 4, ndf, isTo);
                    if (!isTo) exports3.FromEMF._draw(genv, gst, prms, ndf);
                  } else if (fnm == 'POLYPOLYGON16') {
                    loff += 16;
                    var ndf = fnm.startsWith('POLYPOLYGON'),
                      isTo = fnm.indexOf('TO') != -1;
                    var nop = rU32(buff, loff);
                    loff += 4;
                    loff += 4;
                    var pi = loff;
                    loff += nop * 4;
                    if (!isTo) exports3.UDOC.G.newPath(gst);
                    for (var i = 0; i < nop; i++) {
                      var ppp = rU(buff, pi + i * 4);
                      loff = exports3.FromEMF._drawPoly(buff, loff, ppp, gst, fnm.endsWith('16') ? 2 : 4, ndf, isTo);
                    }
                    if (!isTo) exports3.FromEMF._draw(genv, gst, prms, ndf);
                  } else if (fnm == 'POLYBEZIER' || fnm == 'POLYBEZIER16' || fnm == 'POLYBEZIERTO' || fnm == 'POLYBEZIERTO16') {
                    loff += 16;
                    var is16 = fnm.endsWith('16'),
                      rC = is16 ? rI : rI32,
                      nl = is16 ? 2 : 4;
                    var cnt = rU32(buff, loff);
                    loff += 4;
                    if (fnm.indexOf('TO') == -1) {
                      exports3.UDOC.G.moveTo(gst, rC(buff, loff), rC(buff, loff + nl));
                      loff += 2 * nl;
                      cnt--;
                    }
                    while (cnt > 0) {
                      exports3.UDOC.G.curveTo(
                        gst,
                        rC(buff, loff),
                        rC(buff, loff + nl),
                        rC(buff, loff + 2 * nl),
                        rC(buff, loff + 3 * nl),
                        rC(buff, loff + 4 * nl),
                        rC(buff, loff + 5 * nl)
                      );
                      loff += 6 * nl;
                      cnt -= 3;
                    }
                  } else if (fnm == 'RECTANGLE' || fnm == 'ELLIPSE') {
                    exports3.UDOC.G.newPath(gst);
                    var bx = exports3.FromEMF._readBox(buff, loff);
                    if (fnm == 'RECTANGLE') {
                      exports3.UDOC.G.moveTo(gst, bx[0], bx[1]);
                      exports3.UDOC.G.lineTo(gst, bx[2], bx[1]);
                      exports3.UDOC.G.lineTo(gst, bx[2], bx[3]);
                      exports3.UDOC.G.lineTo(gst, bx[0], bx[3]);
                    } else {
                      var x = (bx[0] + bx[2]) / 2,
                        y = (bx[1] + bx[3]) / 2;
                      exports3.UDOC.G.arc(gst, x, y, (bx[2] - bx[0]) / 2, 0, 2 * Math.PI, false);
                    }
                    exports3.UDOC.G.closePath(gst);
                    exports3.FromEMF._draw(genv, gst, prms, true);
                  } else if (fnm == 'FILLPATH') genv.Fill(gst, false);
                  else if (fnm == 'STROKEPATH') genv.Stroke(gst);
                  else if (fnm == 'STROKEANDFILLPATH') {
                    genv.Fill(gst, false);
                    genv.Stroke(gst);
                  } else if (fnm == 'SETWORLDTRANSFORM' || fnm == 'MODIFYWORLDTRANSFORM') {
                    var mat = [];
                    for (var i = 0; i < 6; i++) {
                      mat.push(rF32(buff, loff + i * 4));
                    }
                    loff += 24;
                    if (fnm == 'SETWORLDTRANSFORM') gst.ctm = mat;
                    else {
                      var mod = rU32(buff, loff);
                      loff += 4;
                      if (mod == 2) {
                        var om = gst.ctm;
                        gst.ctm = mat;
                        exports3.UDOC.M.concat(gst.ctm, om);
                      } else throw 'e';
                    }
                  } else if (fnm == 'SETSTRETCHBLTMODE') {
                    var sm = rU32(buff, loff);
                    loff += 4;
                  } else if (fnm == 'STRETCHDIBITS') {
                    var bx = exports3.FromEMF._readBox(buff, loff);
                    loff += 16;
                    var xD = rI32(buff, loff);
                    loff += 4;
                    var yD = rI32(buff, loff);
                    loff += 4;
                    var xS = rI32(buff, loff);
                    loff += 4;
                    var yS = rI32(buff, loff);
                    loff += 4;
                    var wS = rI32(buff, loff);
                    loff += 4;
                    var hS = rI32(buff, loff);
                    loff += 4;
                    var ofH = rU32(buff, loff) + off - 8;
                    loff += 4;
                    var szH = rU32(buff, loff);
                    loff += 4;
                    var ofB = rU32(buff, loff) + off - 8;
                    loff += 4;
                    var szB = rU32(buff, loff);
                    loff += 4;
                    var usg = rU32(buff, loff);
                    loff += 4;
                    if (usg != 0) throw 'e';
                    var bop = rU32(buff, loff);
                    loff += 4;
                    var wD = rI32(buff, loff);
                    loff += 4;
                    var hD = rI32(buff, loff);
                    loff += 4;
                    var hl = rU32(buff, ofH);
                    ofH += 4;
                    var w = rU32(buff, ofH);
                    ofH += 4;
                    var h = rU32(buff, ofH);
                    ofH += 4;
                    if (w != wS || h != hS) throw 'e';
                    var ps = rU(buff, ofH);
                    ofH += 2;
                    var bc = rU(buff, ofH);
                    ofH += 2;
                    if (bc != 8 && bc != 24 && bc != 32) throw bc + ' e';
                    var cpr = rU32(buff, ofH);
                    ofH += 4;
                    if (cpr != 0) throw cpr + ' e';
                    var sz = rU32(buff, ofH);
                    ofH += 4;
                    var xpm = rU32(buff, ofH);
                    ofH += 4;
                    var ypm = rU32(buff, ofH);
                    ofH += 4;
                    var cu = rU32(buff, ofH);
                    ofH += 4;
                    var ci = rU32(buff, ofH);
                    ofH += 4;
                    var rl = Math.floor(((w * ps * bc + 31) & ~31) / 8);
                    var img = new Uint8Array(w * h * 4);
                    if (bc == 8) {
                      for (var y = 0; y < h; y++) {
                        for (var x = 0; x < w; x++) {
                          var qi = (y * w + x) << 2,
                            ind = buff[ofB + (h - 1 - y) * rl + x] << 2;
                          img[qi] = buff[ofH + ind + 2];
                          img[qi + 1] = buff[ofH + ind + 1];
                          img[qi + 2] = buff[ofH + ind + 0];
                          img[qi + 3] = 255;
                        }
                      }
                    }
                    if (bc == 24) {
                      for (var y = 0; y < h; y++) {
                        for (var x = 0; x < w; x++) {
                          var qi = (y * w + x) << 2,
                            ti = ofB + (h - 1 - y) * rl + x * 3;
                          img[qi] = buff[ti + 2];
                          img[qi + 1] = buff[ti + 1];
                          img[qi + 2] = buff[ti + 0];
                          img[qi + 3] = 255;
                        }
                      }
                    }
                    if (bc == 32) {
                      for (var y = 0; y < h; y++) {
                        for (var x = 0; x < w; x++) {
                          var qi = (y * w + x) << 2,
                            ti = ofB + (h - 1 - y) * rl + x * 4;
                          img[qi] = buff[ti + 2];
                          img[qi + 1] = buff[ti + 1];
                          img[qi + 2] = buff[ti + 0];
                          img[qi + 3] = buff[ti + 3];
                        }
                      }
                    }
                    var ctm = gst.ctm.slice(0);
                    gst.ctm = [1, 0, 0, 1, 0, 0];
                    exports3.UDOC.M.scale(gst.ctm, wD, -hD);
                    exports3.UDOC.M.translate(gst.ctm, xD, yD + hD);
                    exports3.UDOC.M.concat(gst.ctm, ctm);
                    genv.PutImage(gst, img, w, h);
                    gst.ctm = ctm;
                  } else {
                    console.log(fnm, siz);
                  }
                  if (obj != null) tab[oid] = obj;
                  off += siz - 8;
                }
                genv.ShowPage();
                genv.Done();
              };
              exports3.FromEMF._readBox = function (buff, off) {
                var b = [];
                for (var i = 0; i < 4; i++) {
                  b[i] = exports3.FromEMF.B.readInt(buff, off + i * 4);
                }
                return b;
              };
              exports3.FromEMF._updateCtm = function (prms, gst) {
                var mat = [1, 0, 0, 1, 0, 0];
                var wbb = prms.wbb,
                  bb = prms.bb,
                  vbb = prms.vbb && prms.vbb.length == 4 ? prms.vbb : prms.bb;
                exports3.UDOC.M.translate(mat, -wbb[0], -wbb[1]);
                exports3.UDOC.M.scale(mat, 1 / wbb[2], 1 / wbb[3]);
                exports3.UDOC.M.scale(mat, vbb[2], vbb[3]);
                gst.ctm = mat;
              };
              exports3.FromEMF._draw = function (genv, gst, prms, needFill) {
                if (prms.fill && needFill) genv.Fill(gst, false);
                if (prms.strk && gst.lwidth != 0) genv.Stroke(gst);
              };
              exports3.FromEMF._drawPoly = function (buff, off, ppp, gst, nl, clos, justLine) {
                var rS = nl == 2 ? exports3.FromEMF.B.readShort : exports3.FromEMF.B.readInt;
                for (var j = 0; j < ppp; j++) {
                  var px = rS(buff, off);
                  off += nl;
                  var py = rS(buff, off);
                  off += nl;
                  if (j == 0 && !justLine) exports3.UDOC.G.moveTo(gst, px, py);
                  else exports3.UDOC.G.lineTo(gst, px, py);
                }
                if (clos) exports3.UDOC.G.closePath(gst);
                return off;
              };
              exports3.FromEMF.B = {
                uint8: new Uint8Array(4),
                readShort: function readShort(buff, p) {
                  var u8 = exports3.FromEMF.B.uint8;
                  u8[0] = buff[p];
                  u8[1] = buff[p + 1];
                  return exports3.FromEMF.B.int16[0];
                },
                readUshort: function readUshort(buff, p) {
                  var u8 = exports3.FromEMF.B.uint8;
                  u8[0] = buff[p];
                  u8[1] = buff[p + 1];
                  return exports3.FromEMF.B.uint16[0];
                },
                readInt: function readInt(buff, p) {
                  var u8 = exports3.FromEMF.B.uint8;
                  u8[0] = buff[p];
                  u8[1] = buff[p + 1];
                  u8[2] = buff[p + 2];
                  u8[3] = buff[p + 3];
                  return exports3.FromEMF.B.int32[0];
                },
                readUint: function readUint(buff, p) {
                  var u8 = exports3.FromEMF.B.uint8;
                  u8[0] = buff[p];
                  u8[1] = buff[p + 1];
                  u8[2] = buff[p + 2];
                  u8[3] = buff[p + 3];
                  return exports3.FromEMF.B.uint32[0];
                },
                readFloat: function readFloat(buff, p) {
                  var u8 = exports3.FromEMF.B.uint8;
                  u8[0] = buff[p];
                  u8[1] = buff[p + 1];
                  u8[2] = buff[p + 2];
                  u8[3] = buff[p + 3];
                  return exports3.FromEMF.B.flot32[0];
                },
                readASCII: function readASCII(buff, p, l) {
                  var s = '';
                  for (var i = 0; i < l; i++) {
                    s += String.fromCharCode(buff[p + i]);
                  }
                  return s;
                }
              };
              exports3.FromEMF.B.int16 = new Int16Array(exports3.FromEMF.B.uint8.buffer);
              exports3.FromEMF.B.uint16 = new Uint16Array(exports3.FromEMF.B.uint8.buffer);
              exports3.FromEMF.B.int32 = new Int32Array(exports3.FromEMF.B.uint8.buffer);
              exports3.FromEMF.B.uint32 = new Uint32Array(exports3.FromEMF.B.uint8.buffer);
              exports3.FromEMF.B.flot32 = new Float32Array(exports3.FromEMF.B.uint8.buffer);
              exports3.FromEMF.C = {
                EMR_HEADER: 1,
                EMR_POLYBEZIER: 2,
                EMR_POLYGON: 3,
                EMR_POLYLINE: 4,
                EMR_POLYBEZIERTO: 5,
                EMR_POLYLINETO: 6,
                EMR_POLYPOLYLINE: 7,
                EMR_POLYPOLYGON: 8,
                EMR_SETWINDOWEXTEX: 9,
                EMR_SETWINDOWORGEX: 10,
                EMR_SETVIEWPORTEXTEX: 11,
                EMR_SETVIEWPORTORGEX: 12,
                EMR_SETBRUSHORGEX: 13,
                EMR_EOF: 14,
                EMR_SETPIXELV: 15,
                EMR_SETMAPPERFLAGS: 16,
                EMR_SETMAPMODE: 17,
                EMR_SETBKMODE: 18,
                EMR_SETPOLYFILLMODE: 19,
                EMR_SETROP2: 20,
                EMR_SETSTRETCHBLTMODE: 21,
                EMR_SETTEXTALIGN: 22,
                EMR_SETCOLORADJUSTMENT: 23,
                EMR_SETTEXTCOLOR: 24,
                EMR_SETBKCOLOR: 25,
                EMR_OFFSETCLIPRGN: 26,
                EMR_MOVETOEX: 27,
                EMR_SETMETARGN: 28,
                EMR_EXCLUDECLIPRECT: 29,
                EMR_INTERSECTCLIPRECT: 30,
                EMR_SCALEVIEWPORTEXTEX: 31,
                EMR_SCALEWINDOWEXTEX: 32,
                EMR_SAVEDC: 33,
                EMR_RESTOREDC: 34,
                EMR_SETWORLDTRANSFORM: 35,
                EMR_MODIFYWORLDTRANSFORM: 36,
                EMR_SELECTOBJECT: 37,
                EMR_CREATEPEN: 38,
                EMR_CREATEBRUSHINDIRECT: 39,
                EMR_DELETEOBJECT: 40,
                EMR_ANGLEARC: 41,
                EMR_ELLIPSE: 42,
                EMR_RECTANGLE: 43,
                EMR_ROUNDRECT: 44,
                EMR_ARC: 45,
                EMR_CHORD: 46,
                EMR_PIE: 47,
                EMR_SELECTPALETTE: 48,
                EMR_CREATEPALETTE: 49,
                EMR_SETPALETTEENTRIES: 50,
                EMR_RESIZEPALETTE: 51,
                EMR_REALIZEPALETTE: 52,
                EMR_EXTFLOODFILL: 53,
                EMR_LINETO: 54,
                EMR_ARCTO: 55,
                EMR_POLYDRAW: 56,
                EMR_SETARCDIRECTION: 57,
                EMR_SETMITERLIMIT: 58,
                EMR_BEGINPATH: 59,
                EMR_ENDPATH: 60,
                EMR_CLOSEFIGURE: 61,
                EMR_FILLPATH: 62,
                EMR_STROKEANDFILLPATH: 63,
                EMR_STROKEPATH: 64,
                EMR_FLATTENPATH: 65,
                EMR_WIDENPATH: 66,
                EMR_SELECTCLIPPATH: 67,
                EMR_ABORTPATH: 68,
                EMR_COMMENT: 70,
                EMR_FILLRGN: 71,
                EMR_FRAMERGN: 72,
                EMR_INVERTRGN: 73,
                EMR_PAINTRGN: 74,
                EMR_EXTSELECTCLIPRGN: 75,
                EMR_BITBLT: 76,
                EMR_STRETCHBLT: 77,
                EMR_MASKBLT: 78,
                EMR_PLGBLT: 79,
                EMR_SETDIBITSTODEVICE: 80,
                EMR_STRETCHDIBITS: 81,
                EMR_EXTCREATEFONTINDIRECTW: 82,
                EMR_EXTTEXTOUTA: 83,
                EMR_EXTTEXTOUTW: 84,
                EMR_POLYBEZIER16: 85,
                EMR_POLYGON16: 86,
                EMR_POLYLINE16: 87,
                EMR_POLYBEZIERTO16: 88,
                EMR_POLYLINETO16: 89,
                EMR_POLYPOLYLINE16: 90,
                EMR_POLYPOLYGON16: 91,
                EMR_POLYDRAW16: 92,
                EMR_CREATEMONOBRUSH: 93,
                EMR_CREATEDIBPATTERNBRUSHPT: 94,
                EMR_EXTCREATEPEN: 95,
                EMR_POLYTEXTOUTA: 96,
                EMR_POLYTEXTOUTW: 97,
                EMR_SETICMMODE: 98,
                EMR_CREATECOLORSPACE: 99,
                EMR_SETCOLORSPACE: 100,
                EMR_DELETECOLORSPACE: 101,
                EMR_GLSRECORD: 102,
                EMR_GLSBOUNDEDRECORD: 103,
                EMR_PIXELFORMAT: 104,
                EMR_DRAWESCAPE: 105,
                EMR_EXTESCAPE: 106,
                EMR_SMALLTEXTOUT: 108,
                EMR_FORCEUFIMAPPING: 109,
                EMR_NAMEDESCAPE: 110,
                EMR_COLORCORRECTPALETTE: 111,
                EMR_SETICMPROFILEA: 112,
                EMR_SETICMPROFILEW: 113,
                EMR_ALPHABLEND: 114,
                EMR_SETLAYOUT: 115,
                EMR_TRANSPARENTBLT: 116,
                EMR_GRADIENTFILL: 118,
                EMR_SETLINKEDUFIS: 119,
                EMR_SETTEXTJUSTIFICATION: 120,
                EMR_COLORMATCHTOTARGETW: 121,
                EMR_CREATECOLORSPACEW: 122
              };
              exports3.FromEMF.K = [];
              exports3.ToContext2D = function (needPage, scale) {
                this.canvas = document.createElement('canvas');
                this.ctx = this.canvas.getContext('2d');
                this.bb = null;
                this.currPage = 0;
                this.needPage = needPage;
                this.scale = scale;
              };
              exports3.ToContext2D.prototype.StartPage = function (x, y, w, h) {
                if (this.currPage != this.needPage) return;
                this.bb = [x, y, w, h];
                var scl = this.scale,
                  dpr = window.devicePixelRatio;
                var cnv = this.canvas,
                  ctx = this.ctx;
                cnv.width = Math.round(w * scl);
                cnv.height = Math.round(h * scl);
                ctx.translate(0, h * scl);
                ctx.scale(scl, -scl);
                cnv.setAttribute('style', 'border:1px solid; width:' + cnv.width / dpr + 'px; height:' + cnv.height / dpr + 'px');
              };
              exports3.ToContext2D.prototype.Fill = function (gst, evenOdd) {
                if (this.currPage != this.needPage) return;
                var ctx = this.ctx;
                ctx.beginPath();
                this._setStyle(gst, ctx);
                this._draw(gst.pth, ctx);
                ctx.fill();
              };
              exports3.ToContext2D.prototype.Stroke = function (gst) {
                if (this.currPage != this.needPage) return;
                var ctx = this.ctx;
                ctx.beginPath();
                this._setStyle(gst, ctx);
                this._draw(gst.pth, ctx);
                ctx.stroke();
              };
              exports3.ToContext2D.prototype.PutText = function (gst, str, stw) {
                if (this.currPage != this.needPage) return;
                var scl = this._scale(gst.ctm);
                var ctx = this.ctx;
                this._setStyle(gst, ctx);
                ctx.save();
                var m = [1, 0, 0, -1, 0, 0];
                this._concat(m, gst.font.Tm);
                this._concat(m, gst.ctm);
                ctx.transform(m[0], m[1], m[2], m[3], m[4], m[5]);
                ctx.fillText(str, 0, 0);
                ctx.restore();
              };
              exports3.ToContext2D.prototype.PutImage = function (gst, buff, w, h, msk) {
                if (this.currPage != this.needPage) return;
                var ctx = this.ctx;
                if (buff.length == w * h * 4) {
                  buff = buff.slice(0);
                  if (msk && msk.length == w * h * 4)
                    for (var i = 0; i < buff.length; i += 4) {
                      buff[i + 3] = msk[i + 1];
                    }
                  var cnv = document.createElement('canvas'),
                    cctx = cnv.getContext('2d');
                  cnv.width = w;
                  cnv.height = h;
                  var imgd = cctx.createImageData(w, h);
                  for (var i = 0; i < buff.length; i++) {
                    imgd.data[i] = buff[i];
                  }
                  cctx.putImageData(imgd, 0, 0);
                  ctx.save();
                  var m = [1, 0, 0, 1, 0, 0];
                  this._concat(m, [1 / w, 0, 0, -1 / h, 0, 1]);
                  this._concat(m, gst.ctm);
                  ctx.transform(m[0], m[1], m[2], m[3], m[4], m[5]);
                  ctx.drawImage(cnv, 0, 0);
                  ctx.restore();
                }
              };
              exports3.ToContext2D.prototype.ShowPage = function () {
                this.currPage++;
              };
              exports3.ToContext2D.prototype.Done = function () {};
              function _flt(n) {
                return '' + parseFloat(n.toFixed(2));
              }
              exports3.ToContext2D.prototype._setStyle = function (gst, ctx) {
                var scl = this._scale(gst.ctm);
                ctx.fillStyle = this._getFill(gst.colr, gst.ca, ctx);
                ctx.strokeStyle = this._getFill(gst.COLR, gst.CA, ctx);
                ctx.lineCap = ['butt', 'round', 'square'][gst.lcap];
                ctx.lineJoin = ['miter', 'round', 'bevel'][gst.ljoin];
                ctx.lineWidth = gst.lwidth * scl;
                var dsh = gst.dash.slice(0);
                for (var i = 0; i < dsh.length; i++) {
                  dsh[i] = _flt(dsh[i] * scl);
                }
                ctx.setLineDash(dsh);
                ctx.miterLimit = gst.mlimit * scl;
                var fn = gst.font.Tf,
                  ln = fn.toLowerCase();
                var p0 = ln.indexOf('bold') != -1 ? 'bold ' : '';
                var p1 = ln.indexOf('italic') != -1 || ln.indexOf('oblique') != -1 ? 'italic ' : '';
                ctx.font = p0 + p1 + gst.font.Tfs + 'px "' + fn + '"';
              };
              exports3.ToContext2D.prototype._getFill = function (colr, ca, ctx) {
                if (colr.typ == null) return this._colr(colr, ca);
                else {
                  var grd = colr,
                    crd = grd.crds,
                    mat = grd.mat,
                    scl = this._scale(mat),
                    gf;
                  if (grd.typ == 'lin') {
                    var p0 = this._multPoint(mat, crd.slice(0, 2)),
                      p1 = this._multPoint(mat, crd.slice(2));
                    gf = ctx.createLinearGradient(p0[0], p0[1], p1[0], p1[1]);
                  } else if (grd.typ == 'rad') {
                    var p0 = this._multPoint(mat, crd.slice(0, 2)),
                      p1 = this._multPoint(mat, crd.slice(3));
                    gf = ctx.createRadialGradient(p0[0], p0[1], crd[2] * scl, p1[0], p1[1], crd[5] * scl);
                  }
                  for (var i = 0; i < grd.grad.length; i++) {
                    gf.addColorStop(grd.grad[i][0], this._colr(grd.grad[i][1], ca));
                  }
                  return gf;
                }
              };
              exports3.ToContext2D.prototype._colr = function (c, a) {
                return (
                  'rgba(' + Math.round(c[0] * 255) + ',' + Math.round(c[1] * 255) + ',' + Math.round(c[2] * 255) + ',' + a + ')'
                );
              };
              exports3.ToContext2D.prototype._scale = function (m) {
                return Math.sqrt(Math.abs(m[0] * m[3] - m[1] * m[2]));
              };
              exports3.ToContext2D.prototype._concat = function (m, w) {
                var a = m[0],
                  b = m[1],
                  c = m[2],
                  d = m[3],
                  tx = m[4],
                  ty = m[5];
                m[0] = a * w[0] + b * w[2];
                m[1] = a * w[1] + b * w[3];
                m[2] = c * w[0] + d * w[2];
                m[3] = c * w[1] + d * w[3];
                m[4] = tx * w[0] + ty * w[2] + w[4];
                m[5] = tx * w[1] + ty * w[3] + w[5];
              };
              (exports3.ToContext2D.prototype._multPoint = function (m, p) {
                var x = p[0],
                  y = p[1];
                return [x * m[0] + y * m[2] + m[4], x * m[1] + y * m[3] + m[5]];
              }),
                (exports3.ToContext2D.prototype._draw = function (path, ctx) {
                  var c = 0,
                    crds = path.crds;
                  for (var j = 0; j < path.cmds.length; j++) {
                    var cmd = path.cmds[j];
                    if (cmd == 'M') {
                      ctx.moveTo(crds[c], crds[c + 1]);
                      c += 2;
                    } else if (cmd == 'L') {
                      ctx.lineTo(crds[c], crds[c + 1]);
                      c += 2;
                    } else if (cmd == 'C') {
                      ctx.bezierCurveTo(crds[c], crds[c + 1], crds[c + 2], crds[c + 3], crds[c + 4], crds[c + 5]);
                      c += 6;
                    } else if (cmd == 'Q') {
                      ctx.quadraticCurveTo(crds[c], crds[c + 1], crds[c + 2], crds[c + 3]);
                      c += 4;
                    } else if (cmd == 'Z') {
                      ctx.closePath();
                    }
                  }
                });
            },
            {}
          ],
          93: [
            function (require2, module3, exports3) {
              'use strict';
              Object.defineProperty(exports3, '__esModule', {
                value: true
              });
              exports3.getBinaryContent =
                exports3.isContainMultiType =
                exports3.isKoera =
                exports3.isJapanese =
                exports3.isChinese =
                exports3.fromulaRef =
                exports3.escapeCharacter =
                exports3.generateRandomIndex =
                exports3.LightenDarkenColor =
                exports3.getRowHeightPixel =
                exports3.getColumnWidthPixel =
                exports3.getXmlAttibute =
                exports3.getPxByEMUs =
                exports3.getptToPxRatioByDPI =
                exports3.getcellrange =
                exports3.getRangetxt =
                  void 0;
              var constant_1 = require2('./constant');
              function getRangetxt(range, sheettxt) {
                var row0 = range['row'][0],
                  row1 = range['row'][1];
                var column0 = range['column'][0],
                  column1 = range['column'][1];
                if (row0 == null && row1 == null) {
                  return sheettxt + chatatABC(column0) + ':' + chatatABC(column1);
                } else if (column0 == null && column1 == null) {
                  return sheettxt + (row0 + 1) + ':' + (row1 + 1);
                } else {
                  if (column0 == column1 && row0 == row1) {
                    return sheettxt + chatatABC(column0) + (row0 + 1);
                  } else {
                    return sheettxt + chatatABC(column0) + (row0 + 1) + ':' + chatatABC(column1) + (row1 + 1);
                  }
                }
              }
              exports3.getRangetxt = getRangetxt;
              function getcellrange(txt, sheets, sheetId) {
                if (sheets === void 0) {
                  sheets = {};
                }
                if (sheetId === void 0) {
                  sheetId = '1';
                }
                var val = txt.split('!');
                var sheettxt = '',
                  rangetxt = '',
                  sheetIndex = -1;
                if (val.length > 1) {
                  sheettxt = val[0];
                  rangetxt = val[1];
                  var si = sheets[sheettxt];
                  if (si == null) {
                    sheetIndex = parseInt(sheetId);
                  } else {
                    sheetIndex = parseInt(si);
                  }
                } else {
                  sheetIndex = parseInt(sheetId);
                  rangetxt = val[0];
                }
                if (rangetxt.indexOf(':') == -1) {
                  var row = parseInt(rangetxt.replace(/[^0-9]/g, '')) - 1;
                  var col = ABCatNum(rangetxt.replace(/[^A-Za-z]/g, ''));
                  if (!isNaN(row) && !isNaN(col)) {
                    return {
                      row: [row, row],
                      column: [col, col],
                      sheetIndex: sheetIndex
                    };
                  } else {
                    return null;
                  }
                } else {
                  var rangetxtArray = rangetxt.split(':');
                  var row = [],
                    col = [];
                  row[0] = parseInt(rangetxtArray[0].replace(/[^0-9]/g, '')) - 1;
                  row[1] = parseInt(rangetxtArray[1].replace(/[^0-9]/g, '')) - 1;
                  if (row[0] > row[1]) {
                    return null;
                  }
                  col[0] = ABCatNum(rangetxtArray[0].replace(/[^A-Za-z]/g, ''));
                  col[1] = ABCatNum(rangetxtArray[1].replace(/[^A-Za-z]/g, ''));
                  if (col[0] > col[1]) {
                    return null;
                  }
                  return {
                    row: row,
                    column: col,
                    sheetIndex: sheetIndex
                  };
                }
              }
              exports3.getcellrange = getcellrange;
              function ABCatNum(abc) {
                abc = abc.toUpperCase();
                var abc_len = abc.length;
                if (abc_len == 0) {
                  return NaN;
                }
                var abc_array = abc.split('');
                var wordlen = constant_1.columeHeader_word.length;
                var ret = 0;
                for (var i = abc_len - 1; i >= 0; i--) {
                  if (i == abc_len - 1) {
                    ret += constant_1.columeHeader_word_index[abc_array[i]];
                  } else {
                    ret += Math.pow(wordlen, abc_len - i - 1) * (constant_1.columeHeader_word_index[abc_array[i]] + 1);
                  }
                }
                return ret;
              }
              function chatatABC(index) {
                var wordlen = constant_1.columeHeader_word.length;
                if (index < wordlen) {
                  return constant_1.columeHeader_word[index];
                } else {
                  var last = 0,
                    pre = 0,
                    ret = '';
                  var i = 1,
                    n = 0;
                  while (index >= (wordlen / (wordlen - 1)) * (Math.pow(wordlen, i++) - 1)) {
                    n = i;
                  }
                  var index_ab = index - (wordlen / (wordlen - 1)) * (Math.pow(wordlen, n - 1) - 1);
                  last = index_ab + 1;
                  for (var x = n; x > 0; x--) {
                    var last1 = last,
                      x1 = x;
                    if (x == 1) {
                      last1 = last1 % wordlen;
                      if (last1 == 0) {
                        last1 = 26;
                      }
                      return ret + constant_1.columeHeader_word[last1 - 1];
                    }
                    last1 = Math.ceil(last1 / Math.pow(wordlen, x - 1));
                    ret += constant_1.columeHeader_word[last1 - 1];
                    if (x > 1) {
                      last = last - (last1 - 1) * wordlen;
                    }
                  }
                }
              }
              function getptToPxRatioByDPI() {
                return 72 / 96;
              }
              exports3.getptToPxRatioByDPI = getptToPxRatioByDPI;
              function getPxByEMUs(emus) {
                if (emus == null) {
                  return 0;
                }
                var inch = emus / 914400;
                var pt = inch * 72;
                var px = pt / getptToPxRatioByDPI();
                return px;
              }
              exports3.getPxByEMUs = getPxByEMUs;
              function getXmlAttibute(dom, attr, d) {
                var value = dom[attr];
                value = value == null ? d : value;
                return value;
              }
              exports3.getXmlAttibute = getXmlAttibute;
              function getColumnWidthPixel(columnWidth) {
                var pix = Math.round((columnWidth - 0.83) * 8 + 5);
                return pix;
              }
              exports3.getColumnWidthPixel = getColumnWidthPixel;
              function getRowHeightPixel(rowHeight) {
                var pix = Math.round(rowHeight / getptToPxRatioByDPI());
                return pix;
              }
              exports3.getRowHeightPixel = getRowHeightPixel;
              function LightenDarkenColor(sixColor, tint) {
                var hex = sixColor.substring(sixColor.length - 6, sixColor.length);
                var rgbArray = hexToRgbArray('#' + hex);
                var hslArray = rgbToHsl(rgbArray[0], rgbArray[1], rgbArray[2]);
                if (tint > 0) {
                  hslArray[2] = hslArray[2] * (1 - tint) + tint;
                } else if (tint < 0) {
                  hslArray[2] = hslArray[2] * (1 + tint);
                } else {
                  return '#' + hex;
                }
                var newRgbArray = hslToRgb(hslArray[0], hslArray[1], hslArray[2]);
                return rgbToHex('RGB(' + newRgbArray.join(',') + ')');
              }
              exports3.LightenDarkenColor = LightenDarkenColor;
              function rgbToHex(rgb) {
                var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
                if (/^(rgb|RGB)/.test(rgb)) {
                  var aColor = rgb.replace(/(?:\(|\)|rgb|RGB)*/g, '').split(',');
                  var strHex = '#';
                  for (var i = 0; i < aColor.length; i++) {
                    var hex = Number(aColor[i]).toString(16);
                    if (hex.length < 2) {
                      hex = '0' + hex;
                    }
                    strHex += hex;
                  }
                  if (strHex.length !== 7) {
                    strHex = rgb;
                  }
                  return strHex;
                } else if (reg.test(rgb)) {
                  var aNum = rgb.replace(/#/, '').split('');
                  if (aNum.length === 6) {
                    return rgb;
                  } else if (aNum.length === 3) {
                    var numHex = '#';
                    for (var i = 0; i < aNum.length; i += 1) {
                      numHex += aNum[i] + aNum[i];
                    }
                    return numHex;
                  }
                }
                return rgb;
              }
              function hexToRgb(hex) {
                var sColor = hex.toLowerCase();
                var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
                if (sColor && reg.test(sColor)) {
                  if (sColor.length === 4) {
                    var sColorNew = '#';
                    for (var i = 1; i < 4; i += 1) {
                      sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
                    }
                    sColor = sColorNew;
                  }
                  var sColorChange = [];
                  for (var i = 1; i < 7; i += 2) {
                    sColorChange.push(parseInt('0x' + sColor.slice(i, i + 2)));
                  }
                  return 'RGB(' + sColorChange.join(',') + ')';
                }
                return sColor;
              }
              function hexToRgbArray(hex) {
                var sColor = hex.toLowerCase();
                var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
                if (sColor && reg.test(sColor)) {
                  if (sColor.length === 4) {
                    var sColorNew = '#';
                    for (var i = 1; i < 4; i += 1) {
                      sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
                    }
                    sColor = sColorNew;
                  }
                  var sColorChange = [];
                  for (var i = 1; i < 7; i += 2) {
                    sColorChange.push(parseInt('0x' + sColor.slice(i, i + 2)));
                  }
                  return sColorChange;
                }
                return null;
              }
              function hslToRgb(h, s, l) {
                var r, g, b;
                if (s == 0) {
                  r = g = b = l;
                } else {
                  var hue2rgb = function hue2rgb2(p2, q2, t) {
                    if (t < 0) t += 1;
                    if (t > 1) t -= 1;
                    if (t < 1 / 6) return p2 + (q2 - p2) * 6 * t;
                    if (t < 1 / 2) return q2;
                    if (t < 2 / 3) return p2 + (q2 - p2) * (2 / 3 - t) * 6;
                    return p2;
                  };
                  var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
                  var p = 2 * l - q;
                  r = hue2rgb(p, q, h + 1 / 3);
                  g = hue2rgb(p, q, h);
                  b = hue2rgb(p, q, h - 1 / 3);
                }
                return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
              }
              function rgbToHsl(r, g, b) {
                (r /= 255), (g /= 255), (b /= 255);
                var max = Math.max(r, g, b),
                  min = Math.min(r, g, b);
                var h,
                  s,
                  l = (max + min) / 2;
                if (max == min) {
                  h = s = 0;
                } else {
                  var d = max - min;
                  s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
                  switch (max) {
                    case r:
                      h = (g - b) / d + (g < b ? 6 : 0);
                      break;
                    case g:
                      h = (b - r) / d + 2;
                      break;
                    case b:
                      h = (r - g) / d + 4;
                      break;
                  }
                  h /= 6;
                }
                return [h, s, l];
              }
              function generateRandomIndex(prefix) {
                if (prefix == null) {
                  prefix = 'Sheet';
                }
                var userAgent = window.navigator.userAgent.replace(/[^a-zA-Z0-9]/g, '').split('');
                var mid = '';
                for (var i = 0; i < 5; i++) {
                  mid += userAgent[Math.round(Math.random() * (userAgent.length - 1))];
                }
                var time = /* @__PURE__ */ new Date().getTime();
                return prefix + '_' + mid + '_' + time;
              }
              exports3.generateRandomIndex = generateRandomIndex;
              function escapeCharacter(str) {
                if (str == null || str.length == 0) {
                  return str;
                }
                return str
                  .replace(/&amp;/g, '&')
                  .replace(/&quot;/g, '"')
                  .replace(/&lt;/g, '<')
                  .replace(/&gt;/g, '>')
                  .replace(/&nbsp;/g, ' ')
                  .replace(/&apos;/g, "'")
                  .replace(/&iexcl;/g, '¡')
                  .replace(/&cent;/g, '¢')
                  .replace(/&pound;/g, '£')
                  .replace(/&curren;/g, '¤')
                  .replace(/&yen;/g, '¥')
                  .replace(/&brvbar;/g, '¦')
                  .replace(/&sect;/g, '§')
                  .replace(/&uml;/g, '¨')
                  .replace(/&copy;/g, '©')
                  .replace(/&ordf;/g, 'ª')
                  .replace(/&laquo;/g, '«')
                  .replace(/&not;/g, '¬')
                  .replace(/&shy;/g, '­')
                  .replace(/&reg;/g, '®')
                  .replace(/&macr;/g, '¯')
                  .replace(/&deg;/g, '°')
                  .replace(/&plusmn;/g, '±')
                  .replace(/&sup2;/g, '²')
                  .replace(/&sup3;/g, '³')
                  .replace(/&acute;/g, '´')
                  .replace(/&micro;/g, 'µ')
                  .replace(/&para;/g, '¶')
                  .replace(/&middot;/g, '·')
                  .replace(/&cedil;/g, '¸')
                  .replace(/&sup1;/g, '¹')
                  .replace(/&ordm;/g, 'º')
                  .replace(/&raquo;/g, '»')
                  .replace(/&frac14;/g, '¼')
                  .replace(/&frac12;/g, '½')
                  .replace(/&frac34;/g, '¾')
                  .replace(/&iquest;/g, '¿')
                  .replace(/&times;/g, '×')
                  .replace(/&divide;/g, '÷')
                  .replace(/&Agrave;/g, 'À')
                  .replace(/&Aacute;/g, 'Á')
                  .replace(/&Acirc;/g, 'Â')
                  .replace(/&Atilde;/g, 'Ã')
                  .replace(/&Auml;/g, 'Ä')
                  .replace(/&Aring;/g, 'Å')
                  .replace(/&AElig;/g, 'Æ')
                  .replace(/&Ccedil;/g, 'Ç')
                  .replace(/&Egrave;/g, 'È')
                  .replace(/&Eacute;/g, 'É')
                  .replace(/&Ecirc;/g, 'Ê')
                  .replace(/&Euml;/g, 'Ë')
                  .replace(/&Igrave;/g, 'Ì')
                  .replace(/&Iacute;/g, 'Í')
                  .replace(/&Icirc;/g, 'Î')
                  .replace(/&Iuml;/g, 'Ï')
                  .replace(/&ETH;/g, 'Ð')
                  .replace(/&Ntilde;/g, 'Ñ')
                  .replace(/&Ograve;/g, 'Ò')
                  .replace(/&Oacute;/g, 'Ó')
                  .replace(/&Ocirc;/g, 'Ô')
                  .replace(/&Otilde;/g, 'Õ')
                  .replace(/&Ouml;/g, 'Ö')
                  .replace(/&Oslash;/g, 'Ø')
                  .replace(/&Ugrave;/g, 'Ù')
                  .replace(/&Uacute;/g, 'Ú')
                  .replace(/&Ucirc;/g, 'Û')
                  .replace(/&Uuml;/g, 'Ü')
                  .replace(/&Yacute;/g, 'Ý')
                  .replace(/&THORN;/g, 'Þ')
                  .replace(/&szlig;/g, 'ß')
                  .replace(/&agrave;/g, 'à')
                  .replace(/&aacute;/g, 'á')
                  .replace(/&acirc;/g, 'â')
                  .replace(/&atilde;/g, 'ã')
                  .replace(/&auml;/g, 'ä')
                  .replace(/&aring;/g, 'å')
                  .replace(/&aelig;/g, 'æ')
                  .replace(/&ccedil;/g, 'ç')
                  .replace(/&egrave;/g, 'è')
                  .replace(/&eacute;/g, 'é')
                  .replace(/&ecirc;/g, 'ê')
                  .replace(/&euml;/g, 'ë')
                  .replace(/&igrave;/g, 'ì')
                  .replace(/&iacute;/g, 'í')
                  .replace(/&icirc;/g, 'î')
                  .replace(/&iuml;/g, 'ï')
                  .replace(/&eth;/g, 'ð')
                  .replace(/&ntilde;/g, 'ñ')
                  .replace(/&ograve;/g, 'ò')
                  .replace(/&oacute;/g, 'ó')
                  .replace(/&ocirc;/g, 'ô')
                  .replace(/&otilde;/g, 'õ')
                  .replace(/&ouml;/g, 'ö')
                  .replace(/&oslash;/g, 'ø')
                  .replace(/&ugrave;/g, 'ù')
                  .replace(/&uacute;/g, 'ú')
                  .replace(/&ucirc;/g, 'û')
                  .replace(/&uuml;/g, 'ü')
                  .replace(/&yacute;/g, 'ý')
                  .replace(/&thorn;/g, 'þ')
                  .replace(/&yuml;/g, 'ÿ');
              }
              exports3.escapeCharacter = escapeCharacter;
              var fromulaRef =
                /** @class */
                (function () {
                  function fromulaRef2() {}
                  fromulaRef2.trim = function (str) {
                    if (str == null) {
                      str = '';
                    }
                    return str.replace(/(^\s*)|(\s*$)/g, '');
                  };
                  fromulaRef2.functionCopy = function (txt, mode, step) {
                    var _this = this;
                    if (_this.operatorjson == null) {
                      var arr = _this.operator.split('|'),
                        op = {};
                      for (var i_1 = 0; i_1 < arr.length; i_1++) {
                        op[arr[i_1].toString()] = 1;
                      }
                      _this.operatorjson = op;
                    }
                    if (mode == null) {
                      mode = 'down';
                    }
                    if (step == null) {
                      step = 1;
                    }
                    if (txt.substr(0, 1) == '=') {
                      txt = txt.substr(1);
                    }
                    var funcstack = txt.split('');
                    var i = 0,
                      str = '',
                      function_str = '',
                      ispassby = true;
                    var matchConfig = {
                      bracket: 0,
                      comma: 0,
                      squote: 0,
                      dquote: 0
                    };
                    while (i < funcstack.length) {
                      var s = funcstack[i];
                      if (s == '(' && matchConfig.dquote == 0) {
                        matchConfig.bracket += 1;
                        if (str.length > 0) {
                          function_str += str + '(';
                        } else {
                          function_str += '(';
                        }
                        str = '';
                      } else if (s == ')' && matchConfig.dquote == 0) {
                        matchConfig.bracket -= 1;
                        function_str += _this.functionCopy(str, mode, step) + ')';
                        str = '';
                      } else if (s == '"' && matchConfig.squote == 0) {
                        if (matchConfig.dquote > 0) {
                          function_str += str + '"';
                          matchConfig.dquote -= 1;
                          str = '';
                        } else {
                          matchConfig.dquote += 1;
                          str += '"';
                        }
                      } else if (s == ',' && matchConfig.dquote == 0) {
                        function_str += _this.functionCopy(str, mode, step) + ',';
                        str = '';
                      } else if (s == '&' && matchConfig.dquote == 0) {
                        if (str.length > 0) {
                          function_str += _this.functionCopy(str, mode, step) + '&';
                          str = '';
                        } else {
                          function_str += '&';
                        }
                      } else if (s in _this.operatorjson && matchConfig.dquote == 0) {
                        var s_next = '';
                        if (i + 1 < funcstack.length) {
                          s_next = funcstack[i + 1];
                        }
                        var p = i - 1,
                          s_pre = null;
                        if (p >= 0) {
                          do {
                            s_pre = funcstack[p--];
                          } while (p >= 0 && s_pre == ' ');
                        }
                        if (s + s_next in _this.operatorjson) {
                          if (str.length > 0) {
                            function_str += _this.functionCopy(str, mode, step) + s + s_next;
                            str = '';
                          } else {
                            function_str += s + s_next;
                          }
                          i++;
                        } else if (
                          !/[^0-9]/.test(s_next) &&
                          s == '-' &&
                          (s_pre == '(' || s_pre == null || s_pre == ',' || s_pre == ' ' || s_pre in _this.operatorjson)
                        ) {
                          str += s;
                        } else {
                          if (str.length > 0) {
                            function_str += _this.functionCopy(str, mode, step) + s;
                            str = '';
                          } else {
                            function_str += s;
                          }
                        }
                      } else {
                        str += s;
                      }
                      if (i == funcstack.length - 1) {
                        if (_this.iscelldata(_this.trim(str))) {
                          if (mode == 'down') {
                            function_str += _this.downparam(_this.trim(str), step);
                          } else if (mode == 'up') {
                            function_str += _this.upparam(_this.trim(str), step);
                          } else if (mode == 'left') {
                            function_str += _this.leftparam(_this.trim(str), step);
                          } else if (mode == 'right') {
                            function_str += _this.rightparam(_this.trim(str), step);
                          }
                        } else {
                          function_str += _this.trim(str);
                        }
                      }
                      i++;
                    }
                    return function_str;
                  };
                  fromulaRef2.downparam = function (txt, step) {
                    return this.updateparam('d', txt, step);
                  };
                  fromulaRef2.upparam = function (txt, step) {
                    return this.updateparam('u', txt, step);
                  };
                  fromulaRef2.leftparam = function (txt, step) {
                    return this.updateparam('l', txt, step);
                  };
                  fromulaRef2.rightparam = function (txt, step) {
                    return this.updateparam('r', txt, step);
                  };
                  fromulaRef2.updateparam = function (orient, txt, step) {
                    var _this = this;
                    var val = txt.split('!'),
                      rangetxt,
                      prefix = '';
                    if (val.length > 1) {
                      rangetxt = val[1];
                      prefix = val[0] + '!';
                    } else {
                      rangetxt = val[0];
                    }
                    if (rangetxt.indexOf(':') == -1) {
                      var row = parseInt(rangetxt.replace(/[^0-9]/g, ''));
                      var col = ABCatNum(rangetxt.replace(/[^A-Za-z]/g, ''));
                      var freezonFuc = _this.isfreezonFuc(rangetxt);
                      var $row = freezonFuc[0] ? '$' : '',
                        $col = freezonFuc[1] ? '$' : '';
                      if (orient == 'u' && !freezonFuc[0]) {
                        row -= step;
                      } else if (orient == 'r' && !freezonFuc[1]) {
                        col += step;
                      } else if (orient == 'l' && !freezonFuc[1]) {
                        col -= step;
                      } else if (!freezonFuc[0]) {
                        row += step;
                      }
                      if (row < 0 || col < 0) {
                        return _this.error.r;
                      }
                      if (!isNaN(row) && !isNaN(col)) {
                        return prefix + $col + chatatABC(col) + $row + row;
                      } else if (!isNaN(row)) {
                        return prefix + $row + row;
                      } else if (!isNaN(col)) {
                        return prefix + $col + chatatABC(col);
                      } else {
                        return txt;
                      }
                    } else {
                      rangetxt = rangetxt.split(':');
                      var row = [],
                        col = [];
                      row[0] = parseInt(rangetxt[0].replace(/[^0-9]/g, ''));
                      row[1] = parseInt(rangetxt[1].replace(/[^0-9]/g, ''));
                      if (row[0] > row[1]) {
                        return txt;
                      }
                      col[0] = ABCatNum(rangetxt[0].replace(/[^A-Za-z]/g, ''));
                      col[1] = ABCatNum(rangetxt[1].replace(/[^A-Za-z]/g, ''));
                      if (col[0] > col[1]) {
                        return txt;
                      }
                      var freezonFuc0 = _this.isfreezonFuc(rangetxt[0]);
                      var freezonFuc1 = _this.isfreezonFuc(rangetxt[1]);
                      var $row0 = freezonFuc0[0] ? '$' : '',
                        $col0 = freezonFuc0[1] ? '$' : '';
                      var $row1 = freezonFuc1[0] ? '$' : '',
                        $col1 = freezonFuc1[1] ? '$' : '';
                      if (orient == 'u') {
                        if (!freezonFuc0[0]) {
                          row[0] -= step;
                        }
                        if (!freezonFuc1[0]) {
                          row[1] -= step;
                        }
                      } else if (orient == 'r') {
                        if (!freezonFuc0[1]) {
                          col[0] += step;
                        }
                        if (!freezonFuc1[1]) {
                          col[1] += step;
                        }
                      } else if (orient == 'l') {
                        if (!freezonFuc0[1]) {
                          col[0] -= step;
                        }
                        if (!freezonFuc1[1]) {
                          col[1] -= step;
                        }
                      } else {
                        if (!freezonFuc0[0]) {
                          row[0] += step;
                        }
                        if (!freezonFuc1[0]) {
                          row[1] += step;
                        }
                      }
                      if (row[0] < 0 || col[0] < 0) {
                        return _this.error.r;
                      }
                      if (isNaN(col[0]) && isNaN(col[1])) {
                        return prefix + $row0 + row[0] + ':' + $row1 + row[1];
                      } else if (isNaN(row[0]) && isNaN(row[1])) {
                        return prefix + $col0 + chatatABC(col[0]) + ':' + $col1 + chatatABC(col[1]);
                      } else {
                        return (
                          prefix + $col0 + chatatABC(col[0]) + $row0 + row[0] + ':' + $col1 + chatatABC(col[1]) + $row1 + row[1]
                        );
                      }
                    }
                  };
                  fromulaRef2.iscelldata = function (txt) {
                    var val = txt.split('!'),
                      rangetxt;
                    if (val.length > 1) {
                      rangetxt = val[1];
                    } else {
                      rangetxt = val[0];
                    }
                    var reg_cell = /^(([a-zA-Z]+)|([$][a-zA-Z]+))(([0-9]+)|([$][0-9]+))$/g;
                    var reg_cellRange =
                      /^(((([a-zA-Z]+)|([$][a-zA-Z]+))(([0-9]+)|([$][0-9]+)))|((([a-zA-Z]+)|([$][a-zA-Z]+))))$/g;
                    if (rangetxt.indexOf(':') == -1) {
                      var row = parseInt(rangetxt.replace(/[^0-9]/g, '')) - 1;
                      var col = ABCatNum(rangetxt.replace(/[^A-Za-z]/g, ''));
                      if (!isNaN(row) && !isNaN(col) && rangetxt.toString().match(reg_cell)) {
                        return true;
                      } else if (!isNaN(row)) {
                        return false;
                      } else if (!isNaN(col)) {
                        return false;
                      } else {
                        return false;
                      }
                    } else {
                      reg_cellRange =
                        /^(((([a-zA-Z]+)|([$][a-zA-Z]+))(([0-9]+)|([$][0-9]+)))|((([a-zA-Z]+)|([$][a-zA-Z]+)))|((([0-9]+)|([$][0-9]+s))))$/g;
                      rangetxt = rangetxt.split(':');
                      var row = [],
                        col = [];
                      row[0] = parseInt(rangetxt[0].replace(/[^0-9]/g, '')) - 1;
                      row[1] = parseInt(rangetxt[1].replace(/[^0-9]/g, '')) - 1;
                      if (row[0] > row[1]) {
                        return false;
                      }
                      col[0] = ABCatNum(rangetxt[0].replace(/[^A-Za-z]/g, ''));
                      col[1] = ABCatNum(rangetxt[1].replace(/[^A-Za-z]/g, ''));
                      if (col[0] > col[1]) {
                        return false;
                      }
                      if (rangetxt[0].toString().match(reg_cellRange) && rangetxt[1].toString().match(reg_cellRange)) {
                        return true;
                      } else {
                        return false;
                      }
                    }
                  };
                  fromulaRef2.isfreezonFuc = function (txt) {
                    var row = txt.replace(/[^0-9]/g, '');
                    var col = txt.replace(/[^A-Za-z]/g, '');
                    var row$ = txt.substr(txt.indexOf(row) - 1, 1);
                    var col$ = txt.substr(txt.indexOf(col) - 1, 1);
                    var ret = [false, false];
                    if (row$ == '$') {
                      ret[0] = true;
                    }
                    if (col$ == '$') {
                      ret[1] = true;
                    }
                    return ret;
                  };
                  fromulaRef2.operator = '==|!=|<>|<=|>=|=|+|-|>|<|/|*|%|&|^';
                  fromulaRef2.error = {
                    v: '#VALUE!',
                    n: '#NAME?',
                    na: '#N/A',
                    r: '#REF!',
                    d: '#DIV/0!',
                    nm: '#NUM!',
                    nl: '#NULL!',
                    sp: '#SPILL!'
                    //数组范围有其它值
                  };
                  fromulaRef2.operatorjson = null;
                  return fromulaRef2;
                })();
              exports3.fromulaRef = fromulaRef;
              function isChinese(temp) {
                var re = /[^\u4e00-\u9fa5]/;
                var reg =
                  /[\u3002|\uff1f|\uff01|\uff0c|\u3001|\uff1b|\uff1a|\u201c|\u201d|\u2018|\u2019|\uff08|\uff09|\u300a|\u300b|\u3008|\u3009|\u3010|\u3011|\u300e|\u300f|\u300c|\u300d|\ufe43|\ufe44|\u3014|\u3015|\u2026|\u2014|\uff5e|\ufe4f|\uffe5]/;
                if (reg.test(temp)) return true;
                if (re.test(temp)) return false;
                return true;
              }
              exports3.isChinese = isChinese;
              function isJapanese(temp) {
                var re = /[^\u0800-\u4e00]/;
                if (re.test(temp)) return false;
                return true;
              }
              exports3.isJapanese = isJapanese;
              function isKoera(chr) {
                if ((chr > 12592 && chr < 12687) || (chr >= 44032 && chr <= 55203)) {
                  return true;
                }
                return false;
              }
              exports3.isKoera = isKoera;
              function isContainMultiType(str) {
                var isUnicode = false;
                if (escape(str).indexOf('%u') > -1) {
                  isUnicode = true;
                }
                var isNot = false;
                var reg = /[0-9a-z]/gi;
                if (reg.test(str)) {
                  isNot = true;
                }
                var reEnSign = /[\x00-\xff]+/g;
                if (reEnSign.test(str)) {
                  isNot = true;
                }
                if (isUnicode && isNot) {
                  return true;
                }
                return false;
              }
              exports3.isContainMultiType = isContainMultiType;
              function getBinaryContent(path, options) {
                var promise, resolve, reject;
                var callback;
                if (!options) {
                  options = {};
                }
                var createStandardXHR = function createStandardXHR2() {
                  try {
                    return new window.XMLHttpRequest();
                  } catch (e) {}
                };
                var createActiveXHR = function createActiveXHR2() {
                  try {
                    return new window.ActiveXObject('Microsoft.XMLHTTP');
                  } catch (e) {}
                };
                var createXHR =
                  typeof window !== 'undefined' && window.ActiveXObject
                    ? /* Microsoft failed to properly
                       * implement the XMLHttpRequest in IE7 (can't request local files),
                       * so we use the ActiveXObject when it is available
                       * Additionally XMLHttpRequest can be disabled in IE7/IE8 so
                       * we need a fallback.
                       */
                      function () {
                        return createStandardXHR() || createActiveXHR();
                      }
                    : // For all other browsers, use the standard XMLHttpRequest object
                      createStandardXHR;
                if (typeof options === 'function') {
                  callback = options;
                  options = {};
                } else if (typeof options.callback === 'function') {
                  callback = options.callback;
                }
                resolve = function resolve2(data) {
                  callback(null, data);
                };
                reject = function reject2(err) {
                  callback(err, null);
                };
                try {
                  var xhr = createXHR();
                  xhr.open('GET', path, true);
                  if ('responseType' in xhr) {
                    xhr.responseType = 'arraybuffer';
                  }
                  if (xhr.overrideMimeType) {
                    xhr.overrideMimeType('text/plain; charset=x-user-defined');
                  }
                  xhr.onreadystatechange = function (event) {
                    if (xhr.readyState === 4) {
                      if (xhr.status === 200 || xhr.status === 0) {
                        try {
                          resolve(
                            (function (xhr2) {
                              return xhr2.response || xhr2.responseText;
                            })(xhr)
                          );
                        } catch (err) {
                          reject(new Error(err));
                        }
                      } else {
                        reject(new Error('Ajax error for ' + path + ' : ' + this.status + ' ' + this.statusText));
                      }
                    }
                  };
                  if (options.progress) {
                    xhr.onprogress = function (e) {
                      options.progress({
                        path,
                        originalEvent: e,
                        percent: (e.loaded / e.total) * 100,
                        loaded: e.loaded,
                        total: e.total
                      });
                    };
                  }
                  xhr.send();
                } catch (e) {
                  reject(new Error(e), null);
                }
                return promise;
              }
              exports3.getBinaryContent = getBinaryContent;
            },
            { './constant': 91 }
          ],
          94: [
            function (require2, module3, exports3) {
              'use strict';
              Object.defineProperty(exports3, '__esModule', {
                value: true
              });
              exports3.LuckyExcel = void 0;
              var LuckyFile_1 = require2('./ToLuckySheet/LuckyFile');
              var HandleZip_1 = require2('./HandleZip');
              var LuckyExcel =
                /** @class */
                (function () {
                  function LuckyExcel2() {}
                  LuckyExcel2.transformExcelToLucky = function (excelFile, callBack) {
                    var handleZip = new HandleZip_1.HandleZip(excelFile);
                    handleZip.unzipFile(
                      function (files) {
                        var luckyFile = new LuckyFile_1.LuckyFile(files, excelFile.name);
                        var luckysheetfile = luckyFile.Parse();
                        var exportJson = JSON.parse(luckysheetfile);
                        if (callBack != void 0) {
                          callBack(exportJson, luckysheetfile);
                        }
                      },
                      function (err) {
                        console.error(err);
                      }
                    );
                  };
                  LuckyExcel2.transformExcelToLuckyByUrl = function (url, name, callBack) {
                    var handleZip = new HandleZip_1.HandleZip();
                    handleZip.unzipFileByUrl(
                      url,
                      function (files) {
                        var luckyFile = new LuckyFile_1.LuckyFile(files, name);
                        var luckysheetfile = luckyFile.Parse();
                        var exportJson = JSON.parse(luckysheetfile);
                        if (callBack != void 0) {
                          callBack(exportJson, luckysheetfile);
                        }
                      },
                      function (err) {
                        console.error(err);
                      }
                    );
                  };
                  LuckyExcel2.transformLuckyToExcel = function (LuckyFile, callBack) {};
                  return LuckyExcel2;
                })();
              exports3.LuckyExcel = LuckyExcel;
            },
            { './HandleZip': 84, './ToLuckySheet/LuckyFile': 87 }
          ],
          95: [
            function (require2, module3, exports3) {
              'use strict';
              var main_1 = require2('./main');
              module3.exports = main_1.LuckyExcel;
            },
            { './main': 94 }
          ]
        },
        {},
        [95]
      )(95);
    });
  }
});
export default require_luckyexcel_umd();
/*! Bundled license information:

luckyexcel/dist/luckyexcel.umd.js:
  (*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   *)
  (*!
   * Determine if an object is a Buffer
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   *)
*/
//# sourceMappingURL=luckyexcel.js.map
