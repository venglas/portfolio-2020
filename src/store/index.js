/* eslint-disable */

import Vue from "vue";
import Vuex from "vuex";

import app from "./modules/app";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    contactInfo: false
  },
  mutations: {
    showContactInfo: state => {
      state.contactInfo = true;
    }
  },
  getters: {
    getContactInfo: state => state.contactInfo
  },
  actions: {},
  modules: {
    app
  }
});
