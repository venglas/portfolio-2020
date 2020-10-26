<template>
    <div
        class="overlay"
        @click="closeModals()"
        v-if="getOverlayState"
    ></div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapGetters('app', ['getOverlayState'])
  },
  methods: {
    ...mapMutations('app', ['hideProjectModal', 'hideOverlay']),
    closeModals () {
      this.hideProjectModal()
      this.hideOverlay()
    }
  }
}
</script>

<style lang="scss" scoped>
.overlay {
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: $SIZE_z-med;
    background-color: rgba(0, 0, 0, .6);
}
</style>
