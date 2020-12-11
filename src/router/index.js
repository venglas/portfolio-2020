import Vue from 'vue'
import VueRouter from 'vue-router'
import i18n from '../i18n'
import routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  linkExactActiveClass: 'router-active-link',
  routes
})

// for set page languages
router.beforeEach((to, from, next) => {
  let language = to.params.lang
  if (!language) language = 'pl'
  i18n.locale = language
  next()
})

export default router
