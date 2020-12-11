import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import i18n from './i18n'

Vue.config.productionTip = false

Vue.use(VueAxios, axios)

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
