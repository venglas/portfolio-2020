<template>
  <base-article class="article--panel">
    <login-form v-if="!getLoginInfo.userLogged"/>
    <mails v-else/>
  </base-article>
</template>

<script>
import Mails from '../components/panel/mails.vue'
import LoginForm from '../components/panel/login-form.vue'
import BaseArticle from '../components/article/base-article.vue'
import { mapGetters } from 'vuex'

export default {
  components: { BaseArticle, LoginForm, Mails },
  computed: {
    ...mapGetters('api', ['getLoginInfo'])
  }
}
</script>

<style lang="scss" scoped>
.article--panel {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
