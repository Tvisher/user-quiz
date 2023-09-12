<template>
  <div
    class="custom-field-item"
    v-for="(field, index) in customFields"
    :key="field.id"
  >
    <span class="editor-descr">{{ field.value || `Поле № ${index + 1}` }}</span>
    <label class="variant-item__label" v-if="field.type === 'phone'">
      <input
        class="variant-item__filed"
        :value="field.answer"
        v-imask="phoneMask"
        @accept="onAcceptPhone($event, field.id)"
      />
    </label>

    <label class="variant-item__label" v-if="field.type === 'email'">
      <input
        class="variant-item__filed"
        :value="field.answer"
        :placeholder="emailPlaceholder"
        @input="emailCheck($event, field.id)"
      />
    </label>

    <label class="variant-item__label" v-if="field.type === 'text'">
      <input
        class="variant-item__filed"
        :value="field.answer"
        :placeholder="textFieldPlaceholder"
        @input="textFieldCheck($event, field.id)"
      />
    </label>

    <label class="variant-item__label" v-if="field.type === 'textarea'">
      <textarea
        class="variant-item__filed"
        :value="field.answer"
        :placeholder="textAreaPlaceholder"
        @input="textFieldCheck($event, field.id)"
      />
    </label>
  </div>
</template>

<script>
import { IMaskDirective } from "vue-imask";
import { mapMutations } from "vuex";

function validateEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export default {
  directives: {
    imask: IMaskDirective,
  },
  props: {
    pollItemId: { type: String },
    optionsData: { type: Object },
  },
  data() {
    return {
      customFields: [],
      phoneMask: {
        mask: "+{7}(000)000-00-00",
        lazy: false,
      },
      emailPlaceholder: "example@mail.ru",
      textFieldPlaceholder: "Ваш ответ",
      textAreaPlaceholder: "Сообщение",
    };
  },
  methods: {
    onAcceptPhone(e, id) {
      const currentField = this.customFields.find((field) => field.id === id);
      const phoneNumber = e.detail.value.trim();
      currentField.answer = phoneNumber;
      const phoneNumberOnlyNums = String(phoneNumber).replace(/[^0-9]/g, "");
      phoneNumberOnlyNums.length < 11
        ? (currentField.filled = false)
        : (currentField.filled = true);
    },
    emailCheck(e, id) {
      const emailValue = e.target.value.trim();
      const currentField = this.customFields.find((field) => field.id === id);
      currentField.answer = emailValue;
      validateEmail(emailValue)
        ? (currentField.filled = true)
        : (currentField.filled = false);
    },

    textFieldCheck(e, id) {
      const textValue = e.target.value.trim();
      const currentField = this.customFields.find((field) => field.id === id);
      currentField.answer = textValue;
      textValue.length > 0
        ? (currentField.filled = true)
        : (currentField.filled = false);
    },
    ...mapMutations(["setUserAnswer"]),
  },
  beforeMount() {
    this.customFields = this.optionsData.optionsList.map((item) => {
      return {
        id: item.id,
        type: item.type,
        value: item.value,
        answer: "",
        filled: false,
      };
    });
  },
  watch: {
    customFields: {
      handler() {
        const allFieldsValid = this.customFields
          .map((item) => item.filled)
          .every((item) => item === true);
        if (allFieldsValid) {
          this.setUserAnswer({
            questionId: this.pollItemId,
            userAnswer: [...this.customFields],
          });
        } else {
          this.setUserAnswer({
            questionId: this.pollItemId,
            userAnswer: [],
          });
        }
      },
      deep: true,
    },
  },
};
</script>

<style lang="scss">
.custom-field-item {
  margin-bottom: 15px;
}
</style>
