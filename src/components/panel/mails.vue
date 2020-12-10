<template>
  <article>
    <header>Mails</header>
    <ol>
      <li v-for="mail in mails" :key="mail.id">
        <header>
          <div>
            <span class="title">subject</span> <span>{{mail.subject}}</span>
          </div>
          <div>
            <span class="title">date</span> <span>{{mail.date}}</span>
          </div>
        </header>
        <div>
          <p>
            <span class="title">email</span> <span>{{mail.email}}</span>
          </p>
          <p>
            <span class="title">Name</span> <span>{{mail.name}}</span>
          </p>

          <p class="message">
            {{mail.message}}
          </p>
        </div>
      </li>
    </ol>
  </article>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      mails: null
    }
  },
  computed: {
    ...mapGetters('api', ['getBaseUrl', 'getLoginInfo'])
  },
  created () {
    this.axios.get(`${this.getBaseUrl}/mail`,
      {
        id: this.getLoginInfo.id
      },
      { headers: this.getHeaders })
      .then(res => {
        console.log(res)
        // if (res.status === 200) {
        this.mails = res.data
        // }
      })
      .catch(err => console.error(err))
  }
}
</script>

<style lang="scss" scoped>
article{
  overflow-y: scroll;
  height: 100%;
  width: 100%;
  padding-left: 2rem;
  ol {
    width: 100%;
    li {
      border-bottom: 1px solid $COLOR_success_modal_border;
      .title {
        font-weight: 600;
      }
      .message {
        @include space-v-margin-med;
      }
      header {
        @include space-v-margin-med;
      }
    }
  }
}
</style>
