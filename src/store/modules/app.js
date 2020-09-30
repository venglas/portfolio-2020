export default  {
    namespaced: true,
    state: {
        mobileView: false,
        isMobileMenuOpen: false,
        websiteHeight: null,
        about: {
            showedDescriptions: 0
        }
    },

    mutations: {
        setMobileView: state => state.mobileView = true,
        unsetMobileView: state => state.mobileView = false,
        toggleMobileMenu: state => state.isMobileMenuOpen = !state.isMobileMenuOpen,
        setWebsiteHeight: (state, payload) => state.websiteHeight = payload,
        increaseShowedDescriptionCount: state => state.about.showedDescriptions++
    },

    getters: {
        getMobileView: state => state.mobileView,
        getIsMobileMenuOpen: state => state.isMobileMenuOpen,
        getWebsiteHeight: state => state.websiteHeight,
        getAboutShowedDescriptions: state => state.about.showedDescriptions
    }
};