<template>
  <form @submit.prevent="login()" class="login-form">
    <label for="username">username</label>
    <input type="text" id="username" v-model="username">

    <label for="password">password</label>
    <input type="password" id="password" v-model="password">

    <input type="submit" value="login">
  </form>
</template>

<style lang="scss">
.login-form {
  width: 250px;
  display: flex;
  flex-direction: column;

  input {
    height: 3.5rem;
    @include space-v-margin-small;
  }
}
</style>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  computed: {
    ...mapGetters('api', ['getBaseUrl', 'getHeaders'])
  },
  methods: {
    ...mapMutations('api', ['setLoginInfo']),
    login () {
      this.axios.post(`${this.getBaseUrl}/login`,
        {
          username: this.username,
          password: this.password
        },
        { headers: this.getHeaders })
        .then(res => {
          console.log(res)
          if (res.status === 201) {
            this.setLoginInfo({
              id: res.data._id,
              session: res.data.session,
              userLogged: true
            })
          }
        })
        .catch(err => console.error(err))
    }
  }
}
</script>
