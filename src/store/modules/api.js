/* eslint-disable quote-props */
export default {
  namespaced: true,
  state: {
    baseURL: 'https://portfolio-2020-api.herokuapp.com',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json;charset=UTF-8'
    },
    applicationID: 'portfolio-1000203hg-9090s-nqpx91-uipnfia-666-daoq18v-bnv',
    loginInfo: {
      session: '',
      id: '',
      userLogged: false
    }
  },
  mutations: {
    setLoginInfo (state, payload) {
      state.loginInfo = payload
    }
  },
  getters: {
    getBaseUrl: state => state.baseURL,
    getHeaders: state => state.headers,
    getApplicationID: state => state.applicationID,
    getLoginInfo: state => state.loginInfo
  }
}
