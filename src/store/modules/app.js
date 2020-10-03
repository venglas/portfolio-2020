export default  {
    namespaced: true,
    state: {
        mobileView: false,
        isMobileMenuOpen: false,
        websiteHeight: null,
        about: {
            showedDescriptions: 0,
            infoAboutDescriptionOnHover: true
        }
    },

    mutations: {
        setMobileView: state => state.mobileView = true,
        unsetMobileView: state => state.mobileView = false,
        toggleMobileMenu: state => state.isMobileMenuOpen = !state.isMobileMenuOpen,
        setWebsiteHeight: (state, payload) => state.websiteHeight = payload,
        increaseShowedDescriptionCount: state => state.about.showedDescriptions++,
        turnOffInfoAboutDescriptionOnHover: state => state.about.infoAboutDescriptionOnHover = false
    },

    getters: {
        getMobileView: state => state.mobileView,
        getIsMobileMenuOpen: state => state.isMobileMenuOpen,
        getWebsiteHeight: state => state.websiteHeight,
        getAboutShowedDescriptions: state => state.about.showedDescriptions,
        getInfoAboutDescriptionOnHover: state => state.about.infoAboutDescriptionOnHover
    }
};