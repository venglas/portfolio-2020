import Vue from 'vue'
import VueRouter from 'vue-router'
import home from "../views/Home.vue"
import about from "../views/about.vue"
import portfolio from "../views/portfolio.vue"
import contact from "../views/contact.vue"
import sociales from "../views/sociales.vue"

Vue.use(VueRouter)

  const routes = [
    {
      path: "/:lang",
      component: {
        render (c) { return c('router-view') }
      },
      children: [
        {
          path: "/",
          name: "home",
          component: home
        },
        {
          path: "about",
          name: "about",
          component: about
        },
        {
          path: "portfolio",
          name: "portfolio",
          component: portfolio
        },
        {
          path: "contact",
          name: "contact",
          component: contact
        },
        {
          path: "sociales",
          name: "sociales",
          component: sociales
        }
      ]
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  linkExactActiveClass: 'router-active-link',
  routes
})

export default router
