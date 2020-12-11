/* eslint-disable */

import Vue from "vue";
import Vuex from "vuex";

import app from "./modules/app";
import api from "./modules/api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    contactInfo: false
  },
  mutations: {},
  getters: {},
  actions: {},
  modules: {
    app,
    api
  }
});
