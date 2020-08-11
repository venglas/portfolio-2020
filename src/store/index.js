import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    contactInfo: false
  },
  mutations: {
    showContactInfo: state => state.contactInfo = true
  },
  getters: {
    getContactInfo: state => state.contactInfo
  },
  actions: {
  },
  modules: {
  }
})
