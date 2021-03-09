<template>
  <form
    class="contact-form"
    :class="{ 'contact-form--blocked': wasMailSend }"
    @submit.prevent="saveMail()"
  >
    <div class="contact-form__element-wrapper slide-from-top">
      <label for="name">{{ $t("contact.form.name.label") }}</label>
      <input
        type="text"
        id="name"
        name="name"
        :placeholder="$t('contact.form.name.placeholder')"
        v-model="name"
        required
      />
    </div>

    <div class="contact-form__element-wrapper slide-from-left">
      <label for="email">{{ $t("contact.form.email.label") }}</label>
      <input
        type="email"
        id="email"
        name="email"
        :placeholder="$t('contact.form.email.placeholder')"
        v-model="email"
        required
      />
    </div>

    <div class="contact-form__element-wrapper slide-from-right">
      <label for="subject">{{ $t("contact.form.subject.label") }}</label>
      <input
        type="text"
        id="subject"
        name="subject"
        :placeholder="$t('contact.form.subject.placeholder')"
        v-model="subject"
        required
      />
    </div>

    <div class="contact-form__element-wrapper slide-from-left">
      <label for="message">{{ $t("contact.form.message.label") }}</label>
      <textarea
        id="message"
        name="message"
        :placeholder="$t('contact.form.message.placeholder')"
        v-model="message"
        required
      ></textarea>
    </div>

    <submit-button
      :text="$t('contact.form.buttonText')"
      class="slide-from-bottom"
    />
  </form>
</template>

<script>
import { debounce } from "lodash";
import { mapGetters, mapMutations } from "vuex";
import SubmitButton from "../buttons/submit-button.vue";

export default {
  data() {
    return {
      name: "",
      email: "",
      subject: "",
      message: ""
    };
  },
  components: {
    "submit-button": SubmitButton
  },
  watch: {
    message() {
      if (this.message === "_admin-panel.")
        this.$router.push({ name: "panel" });
    }
  },
  computed: {
    ...mapGetters("api", ["getBaseUrl", "getHeaders", "getApplicationID"]),
    ...mapGetters("app", ["wasMailSend"])
  },
  methods: {
    ...mapMutations("app", ["toggleSuccesModal", "setMailSend"]),
    clearForm() {
      this.name = "";
      this.email = "";
      this.subject = "";
      this.message = "";
    },
    saveMail: debounce(function() {
      console.log("12312312");
      this.axios
        .post(
          `${this.getBaseUrl}/mail`,
          {
            name: this.name,
            email: this.email,
            subject: this.subject,
            message: this.message,
            applicationID: this.getApplicationID
          },
          { headers: this.getHeaders }
        )
        .then(res => {
          if (res.status === 201) {
            this.toggleSuccesModal();
            this.clearForm();
            this.setMailSend();
          }
        })
        .catch(err => console.error(err));
    }, 1000)
  }
};
</script>

<style lang="scss">
.contact-form {
  display: flex;
  flex-direction: column;
  width: 50%;
  min-height: fit-content;

  @media (max-width: 920px) {
    width: 70%;
  }
  @media (max-width: 720px) {
    width: 90%;
    .contact-form__element-wrapper {
      input {
        min-height: 45px;
      }
    }
    input {
      min-height: 45px;
    }
  }
  @media (max-width: 520px) {
    width: 100%;
  }
  &--blocked {
    cursor: not-allowed;
    input,
    textarea {
      background-color: darken($COLOR_bg_base, 15%);
      pointer-events: none;
    }
  }
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
      min-height: 35px;
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
