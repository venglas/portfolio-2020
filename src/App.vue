<template>
  <div id="app" class="app">
    <navbar />
    <router-view :class="`router-view router-view--${$route.name}`"/>
    <language-info-modal />
    <language-switcher />
    <app-overlay />
    <project-modal />
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
import navbar from "./components/navbar/navbar";
import languageSwitcher from "./components/language-switcher/language-switcher";
import languageInfoModal from "./components/language-switcher/language-info-modal";
import overlay from "./components/helpers/app-overlay";
import projectModal from "./components/portfolio/project-modal/project-modal";

export default {
  components: {
    navbar,
    "language-switcher": languageSwitcher,
    "language-info-modal": languageInfoModal,
    "app-overlay": appOverlay,
    "project-modal": projectModal
  },
  beforeCreate() {},
  created() {
    window.addEventListener('resize', this.detectMobileView);
    this.detectMobileView();
    this.getWebsiteHeight();
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
  background-color: $COLOR_bg_base;
  font-family: 'Raleway', sans-serif;
  font-size: $SIZE_base-font;
  padding: 0;
  margin: 0;
  overflow: hidden;
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
