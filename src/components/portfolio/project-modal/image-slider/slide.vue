<template>
    <div
        class="slide-img"
        :style="styles"
        alt="project image"
    ></div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    image: { type: String }
  },
  computed: {
    ...mapGetters('app', ['getSliderPosition']),
    styles () {
      const img = require(`../../../../assets/img/projects/${this.image}`)
      return { 'background-image': `url(${img})`, transform: `translateX(${this.getSliderPosition}00%)` }
    }
  }
}
</script>

<style lang="scss">
.slide-img {
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100%;
    transition: transform ease-in-out 400ms;
}
</style>
