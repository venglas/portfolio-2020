<template>
  <section class="social-section">
    <octagon-wrapper class="social-section__octagon">
      <a :href="companyLink" target="_blank" >
        <img src="../../assets/img/icons/github.png" class="img" alt="">
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
  @include space-v-margin-huge;
  &__octagon {
    width: 10rem;
    height: 10rem;
    @include space-padding-small;
    .img {
      width: 100%;
      height: auto;
      filter: invert(1);
    }
  }
}
</style>
