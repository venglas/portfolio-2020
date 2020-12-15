<template>
    <div class="hamburger-menu"
        @click="toggleMobileMenu"
        :class="{ open: getIsMobileMenuOpen }"
    >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'

export default {
  data () {
    return { active: false }
  },

  computed: {
    ...mapGetters('app', ['getIsMobileMenuOpen'])
  },

  methods: {
    ...mapMutations('app', ['toggleMobileMenu'])
  }
}
</script>

<style lang="scss" scoped>
.hamburger-menu {
  width: 60px;
  height: 45px;
  margin: 0 2.5rem;
  position: relative;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;
  cursor: pointer;

  span {
    display: block;
    position: absolute;
    height: 9px;
    width: 100%;
    background: #d3531a;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;

    &:nth-child(1) {
      top: 0;
    }
    &:nth-child(2),
    &:nth-child(3) {
      top: 18px;
    }
    &:nth-child(4) {
      top: 36px;
    }
  }
}
.open {
  margin: 2rem 0;
  align-self: flex-end;
  position: absolute;
  bottom: 0;
  transition: none;

  span {
    &:nth-child(1) {
      top: 18px;
      width: 0%;
      left: 50%;
    }
    &:nth-child(2) {
      transform: rotate(45deg);
    }
    &:nth-child(3) {
      transform: rotate(-45deg);
    }
    &:nth-child(4) {
      top: 18px;
      width: 0%;
      left: 50%;
    }
  }
}
</style>
