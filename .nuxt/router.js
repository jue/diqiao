import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _ba5b4c24 = () => interopDefault(import('../pages/detail.vue' /* webpackChunkName: "pages/detail" */))
const _46311446 = () => interopDefault(import('../pages/honor.vue' /* webpackChunkName: "pages/honor" */))
const _1ccad034 = () => interopDefault(import('../pages/knowledge/index.vue' /* webpackChunkName: "pages/knowledge/index" */))
const _33ed726c = () => interopDefault(import('../pages/page.vue' /* webpackChunkName: "pages/page" */))
const _7013be06 = () => interopDefault(import('../pages/plan.vue' /* webpackChunkName: "pages/plan" */))
const _d6dcf77e = () => interopDefault(import('../pages/products.vue' /* webpackChunkName: "pages/products" */))
const _30df0376 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _eceead32 = () => interopDefault(import('../pages/knowledge/list/_slug.vue' /* webpackChunkName: "pages/knowledge/list/_slug" */))
const _a1acd2a4 = () => interopDefault(import('../pages/knowledge/view/_slug.vue' /* webpackChunkName: "pages/knowledge/view/_slug" */))
const _4db379eb = () => interopDefault(import('../pages/news/_slug.vue' /* webpackChunkName: "pages/news/_slug" */))
const _4a8a265c = () => interopDefault(import('../pages/_.vue' /* webpackChunkName: "pages/_" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/detail",
    component: _ba5b4c24,
    name: "detail"
  }, {
    path: "/honor",
    component: _46311446,
    name: "honor"
  }, {
    path: "/knowledge",
    component: _1ccad034,
    name: "knowledge"
  }, {
    path: "/page",
    component: _33ed726c,
    name: "page"
  }, {
    path: "/plan",
    component: _7013be06,
    name: "plan"
  }, {
    path: "/products",
    component: _d6dcf77e,
    name: "products"
  }, {
    path: "/",
    component: _30df0376,
    name: "index"
  }, {
    path: "/knowledge/list/:slug?",
    component: _eceead32,
    name: "knowledge-list-slug"
  }, {
    path: "/knowledge/view/:slug?",
    component: _a1acd2a4,
    name: "knowledge-view-slug"
  }, {
    path: "/news/:slug?",
    component: _4db379eb,
    name: "news-slug"
  }, {
    path: "/*",
    component: _4a8a265c,
    name: "all"
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
