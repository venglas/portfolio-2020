<template>
  <div class="success-modal" v-if="getSuccesModalState">
    <header>
      <h2>Wysłano wiadomość</h2>
    </header>

    <base-button class="btn" @click.native="toggleSuccesModal()">OK</base-button>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import BaseButton from '../buttons/base-button.vue'
export default {
  data () {
    return {}
  },
  components: { BaseButton },
  computed: {
    ...mapGetters('app', ['getSuccesModalState'])
  },
  methods: {
    ...mapMutations('app', ['toggleSuccesModal'])
  }
}
</script>

<style lang="scss">
.success-modal {
  width: 45rem;
  height: 25rem;
  background-color: #fff;
  border: 1px solid $COLOR_success_modal_border;
  color: $COLOR_success_modal_text;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  @include smooth-box-shadow;
  .btn {
    transition: all ease-in-out $TIME_fast;
  }
  @include center;
}
</style>
