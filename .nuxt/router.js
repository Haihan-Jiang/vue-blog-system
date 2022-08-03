import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _fea3424a = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _193492de = () => interopDefault(import('..\\pages\\not-found.vue' /* webpackChunkName: "pages/not-found" */))
const _f3dcfafa = () => interopDefault(import('..\\pages\\premium-active.vue' /* webpackChunkName: "pages/premium-active" */))
const _39bf50c6 = () => interopDefault(import('..\\pages\\tools\\ascii.vue' /* webpackChunkName: "pages/tools/ascii" */))
const _6482d53f = () => interopDefault(import('..\\pages\\tools\\base-series.vue' /* webpackChunkName: "pages/tools/base-series" */))
const _2c0727d2 = () => interopDefault(import('..\\pages\\tools\\brain-fuck.vue' /* webpackChunkName: "pages/tools/brain-fuck" */))
const _26cf1e67 = () => interopDefault(import('..\\pages\\tools\\caesar-cipher.vue' /* webpackChunkName: "pages/tools/caesar-cipher" */))
const _019a7000 = () => interopDefault(import('..\\pages\\tools\\crc-checksum.vue' /* webpackChunkName: "pages/tools/crc-checksum" */))
const _7a2895b8 = () => interopDefault(import('..\\pages\\tools\\jsfuck.vue' /* webpackChunkName: "pages/tools/jsfuck" */))
const _6ab517a4 = () => interopDefault(import('..\\pages\\tools\\message-digest.vue' /* webpackChunkName: "pages/tools/message-digest" */))
const _5e831c5c = () => interopDefault(import('..\\pages\\tools\\morse-code.vue' /* webpackChunkName: "pages/tools/morse-code" */))
const _14ee022f = () => interopDefault(import('..\\pages\\tools\\pigpen.vue' /* webpackChunkName: "pages/tools/pigpen" */))
const _bc76423a = () => interopDefault(import('..\\pages\\tools\\radix-conversion.vue' /* webpackChunkName: "pages/tools/radix-conversion" */))
const _3c20274e = () => interopDefault(import('..\\pages\\tools\\rail-fence-cipher.vue' /* webpackChunkName: "pages/tools/rail-fence-cipher" */))
const _721564de = () => interopDefault(import('..\\pages\\tools\\rot-series.vue' /* webpackChunkName: "pages/tools/rot-series" */))
const _c3ab5250 = () => interopDefault(import('..\\pages\\tools\\serial.vue' /* webpackChunkName: "pages/tools/serial" */))
const _547df673 = () => interopDefault(import('..\\pages\\tools\\temperature-conversion.vue' /* webpackChunkName: "pages/tools/temperature-conversion" */))
const _c05944ce = () => interopDefault(import('..\\pages\\tools\\tyre-param-tool.vue' /* webpackChunkName: "pages/tools/tyre-param-tool" */))
const _6f354155 = () => interopDefault(import('..\\pages\\tools\\url-encoding.vue' /* webpackChunkName: "pages/tools/url-encoding" */))
const _89f1fb6c = () => interopDefault(import('..\\pages\\tools\\vigenereCipher.vue' /* webpackChunkName: "pages/tools/vigenereCipher" */))
const _56152b04 = () => interopDefault(import('..\\pages\\tag\\_tag.vue' /* webpackChunkName: "pages/tag/_tag" */))
const _5bdc8868 = () => interopDefault(import('..\\pages\\_.vue' /* webpackChunkName: "pages/_" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/en",
    component: _fea3424a,
    name: "index___en"
  }, {
    path: "/not-found",
    component: _193492de,
    name: "not-found___zh"
  }, {
    path: "/premium-active",
    component: _f3dcfafa,
    name: "premium-active___zh"
  }, {
    path: "/en/not-found",
    component: _193492de,
    name: "not-found___en"
  }, {
    path: "/en/premium-active",
    component: _f3dcfafa,
    name: "premium-active___en"
  }, {
    path: "/tools/ascii",
    component: _39bf50c6,
    name: "tools-ascii___zh"
  }, {
    path: "/tools/base-series",
    component: _6482d53f,
    name: "tools-base-series___zh"
  }, {
    path: "/tools/brain-fuck",
    component: _2c0727d2,
    name: "tools-brain-fuck___zh"
  }, {
    path: "/tools/caesar-cipher",
    component: _26cf1e67,
    name: "tools-caesar-cipher___zh"
  }, {
    path: "/tools/crc-checksum",
    component: _019a7000,
    name: "tools-crc-checksum___zh"
  }, {
    path: "/tools/jsfuck",
    component: _7a2895b8,
    name: "tools-jsfuck___zh"
  }, {
    path: "/tools/message-digest",
    component: _6ab517a4,
    name: "tools-message-digest___zh"
  }, {
    path: "/tools/morse-code",
    component: _5e831c5c,
    name: "tools-morse-code___zh"
  }, {
    path: "/tools/pigpen",
    component: _14ee022f,
    name: "tools-pigpen___zh"
  }, {
    path: "/tools/radix-conversion",
    component: _bc76423a,
    name: "tools-radix-conversion___zh"
  }, {
    path: "/tools/rail-fence-cipher",
    component: _3c20274e,
    name: "tools-rail-fence-cipher___zh"
  }, {
    path: "/tools/rot-series",
    component: _721564de,
    name: "tools-rot-series___zh"
  }, {
    path: "/tools/serial",
    component: _c3ab5250,
    name: "tools-serial___zh"
  }, {
    path: "/tools/temperature-conversion",
    component: _547df673,
    name: "tools-temperature-conversion___zh"
  }, {
    path: "/tools/tyre-param-tool",
    component: _c05944ce,
    name: "tools-tyre-param-tool___zh"
  }, {
    path: "/tools/url-encoding",
    component: _6f354155,
    name: "tools-url-encoding___zh"
  }, {
    path: "/tools/vigenereCipher",
    component: _89f1fb6c,
    name: "tools-vigenereCipher___zh"
  }, {
    path: "/en/tools/ascii",
    component: _39bf50c6,
    name: "tools-ascii___en"
  }, {
    path: "/en/tools/base-series",
    component: _6482d53f,
    name: "tools-base-series___en"
  }, {
    path: "/en/tools/brain-fuck",
    component: _2c0727d2,
    name: "tools-brain-fuck___en"
  }, {
    path: "/en/tools/caesar-cipher",
    component: _26cf1e67,
    name: "tools-caesar-cipher___en"
  }, {
    path: "/en/tools/crc-checksum",
    component: _019a7000,
    name: "tools-crc-checksum___en"
  }, {
    path: "/en/tools/jsfuck",
    component: _7a2895b8,
    name: "tools-jsfuck___en"
  }, {
    path: "/en/tools/message-digest",
    component: _6ab517a4,
    name: "tools-message-digest___en"
  }, {
    path: "/en/tools/morse-code",
    component: _5e831c5c,
    name: "tools-morse-code___en"
  }, {
    path: "/en/tools/pigpen",
    component: _14ee022f,
    name: "tools-pigpen___en"
  }, {
    path: "/en/tools/radix-conversion",
    component: _bc76423a,
    name: "tools-radix-conversion___en"
  }, {
    path: "/en/tools/rail-fence-cipher",
    component: _3c20274e,
    name: "tools-rail-fence-cipher___en"
  }, {
    path: "/en/tools/rot-series",
    component: _721564de,
    name: "tools-rot-series___en"
  }, {
    path: "/en/tools/serial",
    component: _c3ab5250,
    name: "tools-serial___en"
  }, {
    path: "/en/tools/temperature-conversion",
    component: _547df673,
    name: "tools-temperature-conversion___en"
  }, {
    path: "/en/tools/tyre-param-tool",
    component: _c05944ce,
    name: "tools-tyre-param-tool___en"
  }, {
    path: "/en/tools/url-encoding",
    component: _6f354155,
    name: "tools-url-encoding___en"
  }, {
    path: "/en/tools/vigenereCipher",
    component: _89f1fb6c,
    name: "tools-vigenereCipher___en"
  }, {
    path: "/en/tag/:tag?",
    component: _56152b04,
    name: "tag-tag___en"
  }, {
    path: "/tag/:tag?",
    component: _56152b04,
    name: "tag-tag___zh"
  }, {
    path: "/en/*",
    component: _5bdc8868,
    name: "all___en"
  }, {
    path: "/",
    component: _fea3424a,
    name: "index___zh"
  }, {
    path: "/*",
    component: _5bdc8868,
    name: "all___zh"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
