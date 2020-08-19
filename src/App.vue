<template>
  <div id="app" class="app">
    <Navbar />
    <router-view class="router-view"/>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
import Navbar from "./components/navbar/Navbar";

export default {
  name: "App",
  data() {
    return {
      visitedRoutes: [],
      showInfoRequiredRoutes: {
        PORTFOLIO: "portfolio",
        CONTACT: "contact",
        ABOUT: "about",
        portfolio: 0,
        contact: 0,
        about: 0
      }
    }
  },
  components: {
    Navbar
  },
  computed: {
    ...mapGetters(['getContactInfo'])
  },
  beforeCreate() {},
  watch: {
    '$route'() {
      if (this.$route.name === this.showInfoRequiredRoutes.PORTFOLIO || this.$route.name === this.showInfoRequiredRoutes.CONTACT)
      this.visitedRoutes.push(this.$route.name);
      if( this.$route.name === this.showInfoRequiredRoutes.PORTFOLIO ) this.showInfoRequiredRoutes.portfolio++;
      if( this.$route.name === this.showInfoRequiredRoutes.CONTACT ) this.showInfoRequiredRoutes.contact++;
      if( this.$route.name === this.showInfoRequiredRoutes.ABOUT ) this.showInfoRequiredRoutes.about++;
      if( this.showInfoRequiredRoutes.portfolio > 0 && this.showInfoRequiredRoutes.contact > 0 && this.showInfoRequiredRoutes.about > 0 && !this.getContactInfo ) {
        this.showContactInfo();
      };
    }
  },
  methods: {
    ...mapMutations(['showContactInfo'])
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
  background-color: red;
  height: calc(100vh - #{$SIZE_navbar});
  width: 100%;
  z-index: $SIZE_router-view-index;
  top: $SIZE_navbar;
  animation-name: routerEnter;
  animation-duration: $TIME_fast;
  animation-timing-function: ease-in-out;
  animation-play-state: infinite;
}

@keyframes routerEnter {
  from {transform: translateY(100%);}
  to {transform: translateY(0%);}
}
</style>
