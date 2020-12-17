export default {
  namespaced: true,
  state: {
    mobileView: false,
    isMobileMenuOpen: false,
    websiteHeight: null,
    showOverlay: false,
    iphoneClient: false,
    scrollPosition: 0,
    about: {
      showedDescriptions: 0,
      infoAboutDescriptionOnHover: true
    },
    projects: {
      modal: {
        show: false,
        fullInfo: {},
        slider: {
          position: 0
        }
      }
    },
    contact: {
      succesModal: false,
      wasMailSend: false
    }
  },

  mutations: {
    setMobileView: state => { state.mobileView = true },
    unsetMobileView: state => { state.mobileView = false },
    toggleMobileMenu: state => { state.isMobileMenuOpen = !state.isMobileMenuOpen },
    setWebsiteHeight: (state, payload) => { state.websiteHeight = payload },
    increaseShowedDescriptionCount: state => { state.about.showedDescriptions++ },
    turnOffInfoAboutDescriptionOnHover: state => { state.about.infoAboutDescriptionOnHover = false },
    setSliderPosition: (state, payload) => { state.projects.modal.slider.position = payload },
    showProjectModal: state => { state.projects.modal.show = true },
    hideProjectModal: state => { state.projects.modal.show = false },
    setProjectModalInfo: (state, payload) => { state.projects.modal.fullInfo = payload },
    showOverlay: state => { state.showOverlay = true },
    hideOverlay: state => { state.showOverlay = false },
    setIphoneClient: state => { state.iphoneClient = true },
    toggleSuccesModal: state => { state.contact.succesModal = !state.contact.succesModal },
    setMailSend: state => { state.contact.wasMailSend = true },
    setScrollPosition: (state, payload) => { state.scrollPosition = payload }
  },

  getters: {
    getMobileView: state => state.mobileView,
    getIsMobileMenuOpen: state => state.isMobileMenuOpen,
    getWebsiteHeight: state => state.websiteHeight,
    getAboutShowedDescriptions: state => state.about.showedDescriptions,
    getInfoAboutDescriptionOnHover: state => state.about.infoAboutDescriptionOnHover,
    getSliderPosition: state => state.projects.modal.slider.position,
    getModalShowState: state => state.projects.modal.show,
    getModalFullInfo: state => state.projects.modal.fullInfo,
    getOverlayState: state => state.showOverlay,
    isIphoneClient: state => state.iphoneClient,
    getSuccesModalState: state => state.contact.succesModal,
    wasMailSend: state => state.contact.wasMailSend,
    getScrollPosition: state => state.scrollPosition
  }
}
