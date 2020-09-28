<template>
  <div id="app" class="app">
    <Navbar />
    <router-view :class="`router-view router-view--${$route.name}`"/>
    <Language-info-modal />
    <Language-switcher />
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
import Navbar from "./components/navbar/Navbar";
import LanguageSwitcher from "./components/language-switcher/LanguageSwitcher";
import LanguageInfoModal from "./components/language-switcher/InfoModal";

export default {
  name: "App",
  data() {
    return {}
  },
  components: {
    Navbar,
    "Language-switcher": LanguageSwitcher,
    "Language-info-modal": LanguageInfoModal
  },
  computed: {
    // ...mapGetters(['getContactInfo'])
  },
  beforeCreate() {},
  created() {
    window.addEventListener('resize', this.detectMobileView);
    this.detectMobileView();
    this.getWebsiteHeight()
  },
  methods: {
    ...mapMutations('app', ['setMobileView', 'unsetMobileView', 'setWebsiteHeight']),

    detectMobileView() {
      if( window.innerWidth < 720) this.setMobileView();
      else this.unsetMobileView();
    },
    getWebsiteHeight() {
      this.setWebsiteHeight(window.innerHeight);
    }
  }
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
:root {
  font-size: 10px;
}
body {
  color: $COLOR_font-base;
  font-family: 'Roboto', sans-serif;
  font-size: $SIZE_base-font;
  padding: 0;
  margin: 0;
}
.app {
  height: 100vh;
  overflow-y: hidden;
}
.router-view {
  height: calc(100vh - #{$SIZE_navbar});
  width: 100%;
  z-index: $SIZE_router-view-index;
  top: $SIZE_navbar;
  &--home {
    animation-name: routerEnter;
    animation-duration: $TIME_fast;
    animation-timing-function: ease-in;
    animation-play-state: infinite;
  }
}

@keyframes routerEnter {
  from {transform: translateY(100%);}
  to {transform: translateY(0%);}
}
</style>
