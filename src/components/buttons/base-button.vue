<template>
    <button
        class="base-button"
        @click="openLink()"
    >
        <slot />
    </button>
</template>

<script>
export default {
  props: {
    href: { type: String }
  },
  methods: {
    openLink () {
      if (this.href) window.open(this.href, '_blank')
    }
  }
}
</script>

<style lang="scss">
.base-button {
    padding: 1.2rem 3rem;
    font-weight: 100;
    font-size: 16px;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: $COLOR_base_button_border;
    border: 2px solid $COLOR_base_button_border;
    outline: none;
    @include smooth-box-shadow(rgba(0, 0, 0, .9));
    cursor: pointer;

    &:hover {
        background-color: $COLOR_base_button_border;
        color: #fff;
    }
}
</style>
