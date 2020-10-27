<template>
  <form @submit.prevent="" class="login-form">
    <label for="username">username</label>
    <input type="text" id="username">

    <label for="password">password</label>
    <input type="password" id="password">

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
