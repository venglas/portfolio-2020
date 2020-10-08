<template>
  <div id="app" class="app">
    <Navbar />
    <router-view :class="`router-view router-view--${$route.name}`"/>
    <Language-info-modal />
    <Language-switcher />
    <Overlay />
    <Project-modal />
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
import Navbar from "./components/navbar/Navbar";
import LanguageSwitcher from "./components/language-switcher/LanguageSwitcher";
import LanguageInfoModal from "./components/language-switcher/InfoModal";
import Overlay from "./components/helpers/Overlay";
import ProjectModal from "./components/portfolio/project-modal/ProjectModal";

export default {
  components: {
    Navbar,
    "Language-switcher": LanguageSwitcher,
    "Language-info-modal": LanguageInfoModal,
    Overlay,
    "Project-modal": ProjectModal
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
  font-family: 'Raleway', sans-serif;
  font-size: $SIZE_base-font;
  padding: 0;
  margin: 0;
}
.app {
  height: 100vh;
  overflow-y: hidden;
  @media (max-width: $BP_second) {
    overflow-y: scroll;
  }
}
.router-view {
  height: calc(100vh - #{$SIZE_navbar});
  width: 100%;
  z-index: $SIZE_router-view-index;
  top: $SIZE_navbar;
  &--home {
    animation-name: router-enter;
    animation-duration: $TIME_fast;
    animation-timing-function: ease-in;
    animation-play-state: infinite;
  }
}

@keyframes router-enter {
  from {transform: translateY(100%);}
  to {transform: translateY(0%);}
}
</style>
