/**
 * @file Promise.withResolvers polyfill
 * @description pdfjs-dist@4.8.69 内部大量使用 Promise.withResolvers()，
 * 该 API 在 Chrome < 119 等老版本浏览器中不存在，需在加载 pdfjs-dist 前注入 polyfill。
 */

export const PROMISE_WITH_RESOLVERS_POLYFILL = `
if (typeof Promise.withResolvers !== 'function') {
  Promise.withResolvers = function withResolvers() {
    let resolve, reject;
    const promise = new Promise((res, rej) => { resolve = res; reject = rej; });
    return { promise, resolve, reject };
  };
}
`

interface PromiseWithResolvers<T> {
  promise: Promise<T>
  resolve: (value: T | PromiseLike<T>) => void
  reject: (reason?: any) => void
}

declare global {
  interface PromiseConstructor {
    withResolvers: <T>() => PromiseWithResolvers<T>
  }
}

function installPromiseWithResolversPolyfill() {
  if (typeof Promise.withResolvers === 'function')
    return

  Promise.withResolvers = function withResolvers<T>(): PromiseWithResolvers<T> {
    let resolve!: (value: T | PromiseLike<T>) => void
    let reject!: (reason?: any) => void

    const promise = new Promise<T>((res, rej) => {
      resolve = res
      reject = rej
    })

    return { promise, resolve, reject }
  }
}

installPromiseWithResolversPolyfill()
