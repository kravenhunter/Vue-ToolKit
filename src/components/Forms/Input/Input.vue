<script setup>
import AddButton from "@/components/UI/AddButton.vue";
import AddInput from "@/components/UI/AddInput.vue";
import useVuelidate from "@vuelidate/core";
import { email, helpers, maxLength, minLength, numeric, sameAs } from "@vuelidate/validators";
import { computed, ref } from "vue";
// Создаем реактивные пустые поля которые будем валидировать
const nameField = ref("");
const emailField = ref("");
const luckyField = ref("");
const passwordField = ref("");
const confirmPasswordField = ref("");
const frontendField = ref("");
const mustBeFrontend = (value) => value.includes("frontend");

// Подключаем вычисляемые свойства, так как параметры полей будут вычислятся взависимости от правил
const rules = computed(() => ({
  nameField: {
    minLength: helpers.withMessage(`Минимальная длина: 3 символа`, minLength(3)),
  },
  emailField: {
    email: helpers.withMessage("Вы ввели неверный email", email),
  },
  luckyField: {
    maxLength: helpers.withMessage(`Максимальная длина: 2 символа`, maxLength(3)),
    numeric: helpers.withMessage("Вы можете ввести только цифры", numeric),
  },
  confirmPasswordField: {
    sameAsPassword: helpers.withMessage(`Пароли не совпадают`, sameAs(passwordField.value)),
  },
  frontendField: {
    frontendField: helpers.withMessage("Строка должна содержать слово frontend", mustBeFrontend),
  },
}));
// Используем библиотеку Vuelidate, прокидываем правила и поля которые будут вычисляться по правилам
const validation = useVuelidate(rules, { nameField, emailField, luckyField, confirmPasswordField, frontendField });
const submitForm = (event) => {
  // Функция проверяет все данные
  validation.value.$touch();
  // Если при touch есть ошибки, то ничего не делаем
  if (validation.value.$error) return;
  // Если ошибок нет то вызываем алерт
  // console.log(event);
  alert("Form submitted");
};
</script>

<template>
  <div class="page-content">
    <h1 class="heading-1">Inputs</h1>

    <form @submit.prevent="submitForm">
      <add-input label="Your name" name="name" placeholder="Input your name" v-model:value="validation.nameField.$model" :error="validation.nameField.$errors" />

      <add-input label="Your email" name="email" placeholder="Input your email" v-model:value="validation.emailField.$model" :error="validation.emailField.$errors" />

      <add-input label="Your lucky number" name="lucky" placeholder="Input your lucky number" v-model:value="validation.luckyField.$model" :error="validation.luckyField.$errors" />

      <add-input label="Your password" name="password" placeholder="Please input password" v-model:value="passwordField" type="password" />

      <add-input label="Confirm password" name="confirm" placeholder="Please confirm password" v-model:value="validation.confirmPasswordField.$model" :error="validation.confirmPasswordField.$errors" type="password" />

      <add-input label="Frontend string" name="frontend" placeholder="Input string with frontend" v-model:value="validation.frontendField.$model" :error="validation.frontendField.$errors" />

      <add-button label="Submit" color="primary" />
    </form>
  </div>
</template>
