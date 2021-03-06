import home from '../views/home.vue'
import about from '../views/about.vue'
import portfolio from '../views/portfolio.vue'
import contact from '../views/contact.vue'
import panel from '../views/panel.vue'
import i18n from '../i18n'

export default [
  {
    path: '/',
    redirect: `/${i18n.locale}`
  },
  {
    path: '/:lang',
    component: {
      render (c) { return c('router-view') }
    },
    children: [
      {
        path: '/',
        name: 'home',
        component: home
      },
      {
        path: 'about',
        name: 'about',
        component: about
      },
      {
        path: 'portfolio',
        name: 'portfolio',
        component: portfolio
      },
      {
        path: 'contact',
        name: 'contact',
        component: contact
      },
      {
        path: 'panel',
        name: 'panel',
        component: panel,
        show: false
      }
    ]
  }
]
