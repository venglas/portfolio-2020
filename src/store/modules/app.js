export default  {
    namespaced: true,
    state: {
        mobileView: false
    },

    mutations: {
        setMobileView: state => state.mobileView = true,
        unsetMobileView: state => state.mobileView = false
    },

    getters: {
        getMobileView: state => state.mobileView
    }
};