export default {
  namespaced: true,
  state: {
    baseURL: 'http://localhost:3000',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json;charset=UTF-8'
    },
    applicationID: 'portfolio-1000203hg-9090s-nqpx91-uipnfia-666-daoq18v-bnv'
  },
  mutations: {},
  getters: {
    getBaseUrl: state => state.baseURL,
    getHeaders: state => state.headers,
    getApplicationID: state => state.applicationID
  }
}
