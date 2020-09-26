<template>
  <Article :verticalSpace="space"> 
    <About-header />
    <section class="about">
      <About-presentation />
    </section>
  </Article>
</template>

<script>
import { mapGetters } from "vuex";
import Article from "../components/article/Article";
import AboutHeader from "../components/about-header/AboutHeader";
import AboutPresentation from "../components/about-content/AboutPresentation";

export default {
  components: {
    Article,
    'About-header': AboutHeader,
    'About-presentation': AboutPresentation
  },
  computed: {
    ...mapGetters('app', ["getWebsiteHeight"]),
    space() {
      if (this.getWebsiteHeight < 800) return "2rem";
    }
  }
}
</script>

<style lang="scss">
.about {
  @include space-v-margin-huge;
  @media ( max-height: 800px ) { 
    @include space-v-margin-small;
  }
}
</style>