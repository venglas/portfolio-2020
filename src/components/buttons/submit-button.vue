<template>
  <input type="submit" :value="text" class="submit-button" />
</template>

<script>
export default {
  props: {
    text: {
      type: String
    }
  }
}
</script>

<style lang="scss">
.submit-button {
  height: 35px;
  border: transparent;
  background: #fff;
  color: $COLOR_base_button_border;
  border: 1px solid $COLOR_base_button_border;
  font-size: 1.7rem;
  letter-spacing: 2px;
  cursor: pointer;
  transition: all ease-in-out 400ms;

  &:hover {
    background-color: $COLOR_base_button_border;
    color: #fff;
  }
}
</style>
