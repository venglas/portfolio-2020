<template>
  <transition name="left-slide">
    <nav
      class="navbar navbar--mobile"
      :class="{ 'navbar--mobile-open': getIsMobileMenuOpen }"
      v-if="!getModalShowState"
    >
      <logo />
      <navbar-links v-if="getIsMobileMenuOpen" />
      <hamburger-mobile-menu />
    </nav>
  </transition>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import hamburgerMobileMenu from './hamburger-mobile-menu'
import logo from './logo'
import navbarLinks from './navbar-links'

export default {
  components: {
    'hamburger-mobile-menu': hamburgerMobileMenu,
    logo,
    'navbar-links': navbarLinks
  },
  computed: {
    ...mapGetters('app', ['getIsMobileMenuOpen', 'getModalShowState'])
  },
  methods: {
    ...mapMutations('app', ['toggleMobileMenu'])
  },
  watch: {
    $route () {
      this.toggleMobileMenu()
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  height: $SIZE_navbar_mobile;
  max-height: 442.5px;
  transition: all ease-in-out $TIME_fast;
  z-index: 999;
  position: relative;
  &--mobile {
    position: sticky;
    top: 0;
  }
  &--mobile-open {
    flex-direction: column;
    height: auto;
  }
}
</style>
