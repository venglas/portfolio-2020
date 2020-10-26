<template>
  <form class="contact-form" @submit.prevent>
    <div class="contact-form__element-wrapper slide-from-top">
      <label for="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Your name..."
        required
      />
    </div>

    <div class="contact-form__element-wrapper slide-from-left">
      <label for="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Your email..."
        required
      />
    </div>

    <div class="contact-form__element-wrapper slide-from-right">
      <label for="subject">Subject</label>
      <input
        type="text"
        id="subject"
        name="subject"
        placeholder="Subject..."
        required
      />
    </div>

    <div class="contact-form__element-wrapper slide-from-left">
      <label for="message">Message</label>
      <textarea
        id="message"
        name="message"
        placeholder="Your message..."
        required
      ></textarea>
    </div>

    <submit-button text="Submit" class="slide-from-bottom"/>
  </form>
</template>

<script>
import SubmitButton from '../buttons/submit-button.vue'
export default {
  components: {
    'submit-button': SubmitButton
  }
}
</script>

<style lang="scss">
.contact-form {
  display: flex;
  flex-direction: column;
  width: 50%;

  &__element-wrapper {
    display: flex;
    flex-direction: column;

    label {
      color: $COLOR_base_label_text;
      font-weight: 500;
    }

    label,
    input,
    textarea {
      @include space-v-margin-small;
      @include space-h-padding-small;
    }

    textarea {
      height: 100px;
      @include space-padding-small;
    }

    input {
      height: 35px;
    }

    input,
    textarea {
      outline: none;
      border: transparent;
      transition: border ease-in-out $TIME_fast;

      &:focus {
        border-bottom: 1px solid $COLOR_base_input_border;
      }
    }
  }
}
</style>
