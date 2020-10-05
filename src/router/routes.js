import home from "../views/Home.vue"
import about from "../views/About.vue"
import portfolio from "../views/portfolio.vue"
import contact from "../views/contact.vue"
import sociales from "../views/sociales.vue"
import i18n from "../i18n"

export default [
  {
    path: "/",
    redirect: `/${i18n.locale}`
  },
  {
    path: "/:lang",
    component: {
      render(c) { return c('router-view') }
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