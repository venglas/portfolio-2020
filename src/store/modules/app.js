export default  {
    namespaced: true,
    state: {
        mobileView: false,
        isMobileMenuOpen: false,
        websiteHeight: null
    },

    mutations: {
        setMobileView: state => state.mobileView = true,
        unsetMobileView: state => state.mobileView = false,
        toggleMobileMenu: state => state.isMobileMenuOpen = !state.isMobileMenuOpen,
        setWebsiteHeight: (state, payload) => state.websiteHeight = payload
    },

    getters: {
        getMobileView: state => state.mobileView,
        getIsMobileMenuOpen: state => state.isMobileMenuOpen,
        getWebsiteHeight: state => state.websiteHeight
    }
};