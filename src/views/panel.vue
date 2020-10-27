<template>
  <base-article class="article--panel">
    <login-form />
  </base-article>
</template>

<script>
import LoginForm from '../components/panel/login-form.vue'
import BaseArticle from '../components/article/base-article.vue'

export default {
  components: { BaseArticle, LoginForm }
}
</script>

<style lang="scss" scoped>
.article--panel {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
