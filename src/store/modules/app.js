export default  {
    namespaced: true,
    state: {
        mobileView: false,
        isMobileMenuOpen: false
    },

    mutations: {
        setMobileView: state => state.mobileView = true,
        unsetMobileView: state => state.mobileView = false,

        toggleMobileMenu: state => state.isMobileMenuOpen = !state.isMobileMenuOpen
    },

    getters: {
        getMobileView: state => state.mobileView,
        getIsMobileMenuOpen: state => state.isMobileMenuOpen
    }
};