import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0c56d00e = () => interopDefault(import('..\\pages\\account\\index.vue' /* webpackChunkName: "pages/account/index" */))
const _548a55ec = () => interopDefault(import('..\\pages\\admin\\index.vue' /* webpackChunkName: "pages/admin/index" */))
const _71bcb0f0 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _12335a21 = () => interopDefault(import('..\\pages\\signup.vue' /* webpackChunkName: "pages/signup" */))
const _2ba55513 = () => interopDefault(import('..\\pages\\account\\favorites.vue' /* webpackChunkName: "pages/account/favorites" */))
const _df2221ca = () => interopDefault(import('..\\pages\\account\\reservations.vue' /* webpackChunkName: "pages/account/reservations" */))
const _7dcdb947 = () => interopDefault(import('..\\pages\\admin\\account.vue' /* webpackChunkName: "pages/admin/account" */))
const _1e31f903 = () => interopDefault(import('..\\pages\\admin\\login.vue' /* webpackChunkName: "pages/admin/login" */))
const _5cd5976f = () => interopDefault(import('..\\pages\\admin\\travels\\index.vue' /* webpackChunkName: "pages/admin/travels/index" */))
const _1a267e7d = () => interopDefault(import('..\\pages\\admin\\travels\\new.vue' /* webpackChunkName: "pages/admin/travels/new" */))
const _6b59f9ea = () => interopDefault(import('..\\pages\\admin\\travels\\_id\\index.vue' /* webpackChunkName: "pages/admin/travels/_id/index" */))
const _ff71da3e = () => interopDefault(import('..\\pages\\admin\\travels\\_id\\edit.vue' /* webpackChunkName: "pages/admin/travels/_id/edit" */))
const _033fd57e = () => interopDefault(import('..\\pages\\admin\\travels\\_id\\reservations.vue' /* webpackChunkName: "pages/admin/travels/_id/reservations" */))
const _e83413b2 = () => interopDefault(import('..\\pages\\travel\\_id.vue' /* webpackChunkName: "pages/travel/_id" */))
const _afd5e44e = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/account",
    component: _0c56d00e,
    name: "account"
  }, {
    path: "/admin",
    component: _548a55ec,
    name: "admin"
  }, {
    path: "/login",
    component: _71bcb0f0,
    name: "login"
  }, {
    path: "/signup",
    component: _12335a21,
    name: "signup"
  }, {
    path: "/account/favorites",
    component: _2ba55513,
    name: "account-favorites"
  }, {
    path: "/account/reservations",
    component: _df2221ca,
    name: "account-reservations"
  }, {
    path: "/admin/account",
    component: _7dcdb947,
    name: "admin-account"
  }, {
    path: "/admin/login",
    component: _1e31f903,
    name: "admin-login"
  }, {
    path: "/admin/travels",
    component: _5cd5976f,
    name: "admin-travels"
  }, {
    path: "/admin/travels/new",
    component: _1a267e7d,
    name: "admin-travels-new"
  }, {
    path: "/admin/travels/:id",
    component: _6b59f9ea,
    name: "admin-travels-id"
  }, {
    path: "/admin/travels/:id/edit",
    component: _ff71da3e,
    name: "admin-travels-id-edit"
  }, {
    path: "/admin/travels/:id/reservations",
    component: _033fd57e,
    name: "admin-travels-id-reservations"
  }, {
    path: "/travel/:id?",
    component: _e83413b2,
    name: "travel-id"
  }, {
    path: "/",
    component: _afd5e44e,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
