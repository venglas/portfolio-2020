<template>
  <Article> 
    <About-header />
    <section class="about">
      <About-presentation />
    </section>
  </Article>
</template>

<script>
import Article from "../components/article/Article";
import AboutHeader from "../components/about-header/AboutHeader";
import AboutPresentation from "../components/about-content/AboutPresentation";

export default {
  components: {
    Article,
    'About-header': AboutHeader,
    'About-presentation': AboutPresentation
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