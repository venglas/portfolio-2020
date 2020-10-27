<template>
  <form class="contact-form" @submit.prevent="saveMail()">
    <div class="contact-form__element-wrapper slide-from-top">
      <label for="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Your name..."
        v-model="name"
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
        v-model="email"
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
        v-model="subject"
        required
      />
    </div>

    <div class="contact-form__element-wrapper slide-from-left">
      <label for="message">Message</label>
      <textarea
        id="message"
        name="message"
        placeholder="Your message..."
        v-model="message"
        required
      ></textarea>
    </div>

    <submit-button text="Submit" class="slide-from-bottom" />
  </form>
</template>

<script>

import { debounce } from 'lodash'
import { mapGetters, mapMutations } from 'vuex'
import SubmitButton from '../buttons/submit-button.vue'

export default {
  data () {
    return {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  },
  components: {
    'submit-button': SubmitButton
  },
  computed: {
    ...mapGetters('api', ['getBaseUrl', 'getHeaders', 'getApplicationID'])
  },
  methods: {
    ...mapMutations('app', ['toggleSuccesModal']),
    clearForm () {
      this.name = ''
      this.email = ''
      this.subject = ''
      this.message = ''
    },
    saveMail: debounce(function () {
      this.axios.post(`${this.getBaseUrl}/mail`,
        {
          name: this.name,
          email: this.email,
          subject: this.subject,
          message: this.message,
          applicationID: this.getApplicationID
        },
        { headers: this.getHeaders })
        .then(res => {
          if (res.status === 201) {
            this.toggleSuccesModal()
            this.clearForm()
          }
        })
        .catch(err => console.error(err))
    }, 1000)
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
