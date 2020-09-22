<template>
  <Article> 
    <About-header />
  </Article>
</template>

<script>
import Article from "../components/article/Article";
import AboutHeader from "../components/about-header/AboutHeader";

export default {
  components: {
    Article,
    'About-header': AboutHeader
  }
}
</script>