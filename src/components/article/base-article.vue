<template>
    <article class="article" :style="{ width: articleWidth, margin: space }" :class="{ 'iphone-client': isIphoneClient }">
        <slot />
    </article>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    fullWidth: { type: Boolean, default: false },
    verticalSpace: { type: String, default: '' }
  },
  computed: {
    ...mapGetters('app', ['isIphoneClient']),
    articleWidth () {
      return this.fullWidth ? '100%' : ''
    },
    space () {
      return this.verticalSpace ? `${this.verticalSpace} auto` : ''
    }
  }
}
</script>

<style lang="scss">
.article {
  width: 75%;
  margin: 5rem auto;
  @media (max-width: $BP_first) {
    width: 90%;
  }
}
</style>
