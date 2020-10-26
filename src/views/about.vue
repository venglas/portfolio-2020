<template>
  <base-article :verticalSpace="space">
    <about-header class="slide-from-top"/>
    <about-presentation />
  </base-article>
</template>

<script>
import { mapGetters } from 'vuex'
import baseArticle from '../components/article/base-article'
import aboutHeader from '../components/about-header/about-header'
import aboutPresentation from '../components/about-content/about-presentation'

export default {
  components: {
    'base-article': baseArticle,
    'about-header': aboutHeader,
    'about-presentation': aboutPresentation
  },
  computed: {
    ...mapGetters('app', ['getWebsiteHeight']),
    space () {
      if (this.getWebsiteHeight < 800) return '2rem'
      return ''
    }
  }
}
</script>
