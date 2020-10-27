<template>
  <section class="social-section">
    <octagon-wrapper class="social-section__octagon">
      <a href="https://github.com/venglas" target="_blank" >
        <img src="../../assets/img/icons/github.png" class="img" alt="">
      </a>
    </octagon-wrapper>

    <octagon-wrapper class="social-section__octagon">
      <a href="https://www.linkedin.com/in/bartek-bober-71b785151/" target="_blank" >
        <img src="../../assets/img/icons/linkedin.png" class="img img--linkedin" alt="">
      </a>
    </octagon-wrapper>
  </section>
</template>

<script>
import OctagonWrapper from '../about-header/octagon-wrapper.vue'

export default {
  data () {
    return {}
  },
  components: { OctagonWrapper },
  computed: {},
  methods: {}
}
</script>

<style lang="scss">
.social-section {
  display: flex;
  @include space-v-margin-huge;
  &__octagon {
    width: 10rem;
    height: 10rem;
    text-align: center;
    cursor: pointer;
    @include space-padding-small;
    @include space-h-margin-small;
    .img {
      width: 100%;
      height: auto;
      filter: invert(1);
      &--linkedin {
        width: 80%;
      }
    }
  }
}
</style>
