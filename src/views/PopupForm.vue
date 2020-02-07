<template>
  <div class="order__page">
    <form class="order__form" @submit.prevent="submitHandler">
      <router-link to="/"><span class="order__form__close"></span></router-link>
      <h2 class="order__form__title">Заявка на карту</h2>
      <div class="order__form__input">
        <input
          type="text"
          v-model="$v.name.$model"
          :class="{
            input__invalid:
              ($v.name.$dirty && !$v.name.required) ||
              ($v.name.$dirty && !$v.name.minLength)
          }"
          required
        />
        <label>ФИО</label>
        <span
          class="input__error"
          :class="{
            input__error__error:
              ($v.name.$dirty && !$v.name.required) ||
              ($v.name.$dirty && !$v.name.minLength),
            input__error__done: $v.name.required && $v.name.minLength
          }"
        ></span>
      </div>
      <div class="order__form__input">
        <input
          type="text"
          v-model="$v.email.$model"
          :class="{
            input__invalid:
              ($v.email.$dirty && !$v.email.required) ||
              ($v.email.$dirty && !$v.email.email)
          }"
          required
        />
        <label>Электронный адрес</label>
        <span
          class="input__error"
          :class="{
            input__error__error:
              ($v.email.$dirty && !$v.email.required) ||
              ($v.email.$dirty && !$v.email.email),
            input__error__done: $v.email.email && $v.email.required
          }"
        ></span>
      </div>
      <div class="order__form__input">
        <input
          type="number"
          v-model="$v.phoneNumber.$model"
          :class="{
            input__invalid:
              ($v.phoneNumber.$dirty && !$v.phoneNumber.required) ||
              ($v.phoneNumber.$dirty && !$v.phoneNumber.minLength)
          }"
          required
        />
        <label>Номер телефона</label>
        <span
          class="input__error"
          :class="{
            input__error__error:
              ($v.phoneNumber.$dirty && !$v.phoneNumber.required) ||
              ($v.phoneNumber.$dirty && !$v.phoneNumber.minLength),
            input__error__done:
              $v.phoneNumber.minLength && $v.phoneNumber.required
          }"
        ></span>
      </div>
      <div class="order__form__select">
        <span class="select__label">Гражданство</span>
        <span class="select__icon"></span>
        Российская федерация
        <div class="order__form__options">
          <div class="option">
            <input
              type="radio"
              class="order__form__radio"
              name="country"
              id="country-belorus"
            />
            <label for="country-belorus">Белорусь</label>
          </div>
          <div class="option">
            <input
              type="radio"
              class="order__form__radio"
              name="country"
              id="country-ukraine"
            />
            <label for="country-ukraine">Украина</label>
          </div>
          <div class="option">
            <input
              type="radio"
              class="order__form__radio"
              name="country"
              id="country-kazakhstan"
            />
            <label for="country-kazakhstan">Казахстан</label>
          </div>
        </div>
      </div>
      <div class="order__checked">
        <input type="checkbox" name="bem" id="bem" />
        <label for="bem">
          Я соглашаюсь на
          <a href="#">обработку</a> моих персональных данных
        </label>
      </div>
      <Button
        class="btn__order"
        msg="Заказать сейчас"
        :disable="isDisabled"
        :type="'submit'"
        @click="submitHandler"
      />
    </form>
    <Done
      v-if="isDone"
      :name="name"
      :email="email"
      :phoneNumber="phoneNumber"
    />
  </div>
</template>

<style lang="scss">
@import "@/assets/style.scss";
</style>

<script>
import { email, required, minLength } from "vuelidate/lib/validators";
import Button from "@/components/UI/Button/Button.vue";
import Done from "@/components/Blocks/Done/Done.vue";
export default {
  name: "PopupForm",
  data() {
    return {
      name: "",
      email: "",
      phoneNumber: "",
      isDone: false
    };
  },
  validations: {
    name: { required, minLength: minLength(6) },
    email: { required, email },
    phoneNumber: { required, minLength: minLength(9) }
  },
  methods: {
    submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      this.isDone = true;
      let timerId = setTimeout(() => this.$router.push("/"), 3000);
      timerId();
      clearTimeout(timerId);
    }
  },
  computed: {
    isDisabled() {
      return this.$v.$anyDirty && this.$v.$invalid ? true : false;
    }
  },
  components: {
    Button,
    Done
  }
};
</script>
