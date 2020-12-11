<template>
  <ul class="navbar__menu">
    <router-link
      v-for="item in filteredRoutes"
      :key="item.name"
      :to="{ name: item.name, params: { lang: locale } }"
      tag="li"
      class="item"
    >
      {{ item.name }}
    </router-link>
  </ul>
</template>

<script>
import i18n from '../../i18n'

export default {
  computed: {
    locale: () => `${i18n.locale}`,
    routes () {
      return this.$router.options.routes[1].children
    },
    filteredRoutes () {
      return this.routes.filter(route => route.show !== false)
    }
  }
}
</script>

<style lang="scss">
.navbar__menu {
  display: flex;
  width: fit-content;
  height: 100%;
  list-style-type: none;
  margin: 0 1rem;
  @media (max-width: $MAX_mobile) {
    font-size: 1.7rem;
  }
  @media (max-width: $MEDIUM_mobile) {
    flex-direction: column;
    align-items: center;
  }

  .item {
    padding: 0 2rem;
    line-height: $SIZE_navbar;
    height: 100%;
    cursor: pointer;
    transition: text-shadow ease-in-out $TIME_fast-max;
    transition: transform ease-in-out 100ms;
    outline: none;
    text-transform: capitalize;
    @include light-text-shadow();
    &:hover {
      @include light-text-shadow(2.1);
    }
    &:active {
      transform: scale(0.85);
    }
  }
}

.router-active-link {
  &::after {
    content: "";
    display: block;
    margin: -2.5px 0 0 -1rem;
    height: 2.5px;
    background: #000;
    transition: width 0.3s;
    animation-name: active-link;
    animation-duration: $TIME_fast-max;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
  }
  @keyframes active-link {
    from {
      width: 0%;
    }
    to {
      width: calc(100% + 2rem);
    }
  }
}
</style>
