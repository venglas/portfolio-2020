import home from "../views/Home.vue"
import about from "../views/about.vue"
import portfolio from "../views/portfolio.vue"
import contact from "../views/contact.vue"
import sociales from "../views/sociales.vue"

export default [
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
];