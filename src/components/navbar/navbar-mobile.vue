<template>
  <transition name="left-slide">
    <nav
      class="navbar navbar--mobile"
      :class="{ 'navbar--mobile-open': getIsMobileMenuOpen }"
      v-if="!getModalShowState"
    >
      <logo />
      <navbar-links v-if="showMenu" class="links" />
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
  data () {
    return {
      showMenu: false
    }
  },
  computed: {
    ...mapGetters('app', ['getIsMobileMenuOpen', 'getModalShowState'])
  },
  methods: {
    ...mapMutations('app', ['toggleMobileMenu'])
  },
  watch: {
    $route () {
      const { preventToggleMenu } = this.$route.params
      if (!preventToggleMenu) this.toggleMobileMenu()
    },
    getIsMobileMenuOpen () {
      setTimeout(() => {
        this.showMenu = this.getIsMobileMenuOpen
      }, 200)
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  height: $SIZE_navbar_mobile;
  min-height: 0;
  transition: all ease-in-out $TIME_fast;
  z-index: 999;
  position: relative;
  .links {
    opacity: 0;
  }
  &--mobile {
    position: sticky;
    top: 0;
  }
  &--mobile-open {
    flex-direction: column;
    min-height: 442.5px;
    @media (max-width: $MAX_mobile) {
      min-height: 200px;
    }
    @media (max-width: $MEDIUM_mobile) {
      min-height: 442.5px;
    }
    .links {
      opacity: 1;
    }
  }
}
</style>
