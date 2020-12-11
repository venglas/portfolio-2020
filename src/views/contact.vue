<template>
  <base-article class="article--contact">
    <header class="header">
        <h1>{{$t('contact.header')}}</h1>
    </header>
    <contact-form />
    <successful-send-modal />
    <social-section />
  </base-article>
</template>

<script>
import SocialSection from '../components/contact/social-section.vue'
import SuccessfulSendModal from '../components/form/successful-send-modal.vue'
import ContactForm from '../components/form/contact-form.vue'
import BaseArticle from '../components/article/base-article.vue'

export default {
  components: {
    'base-article': BaseArticle, ContactForm, SuccessfulSendModal, SocialSection
  }
}
</script>

<style lang="scss" scoped>
.article--contact {
  display: flex;
  align-items: center;
  flex-direction: column;
  .header {
    @include space-v-margin-big;
    h1 {
      color: $COLOR_base_button_border;
      font-size: 2rem;
      font-weight: 500;
      letter-spacing: 1px;
      text-align: center;
    }
  }
}
</style>
