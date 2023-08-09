<script setup>
import AddButton from "@/components/UI/AddButton.vue";
import AddInput from "@/components/UI/AddInput.vue";
import useVuelidate from "@vuelidate/core";
import { email, helpers, minLength, sameAs } from "@vuelidate/validators";
import { computed, ref } from "vue";
import { RouterLink } from "vue-router";

// Создаем реактивные пустые поля которые будем валидировать
const firstNameField = ref("");
const lastNameField = ref("");
const emailField = ref("");
const userNameField = ref("");
const adressField = ref("");
const passwordField = ref("");
const confirmPasswordField = ref("");

// Подключаем вычисляемые свойства, так как параметры полей будут вычислятся взависимости от правил
const rules = computed(() => ({
  firstNameField: {
    minLength: helpers.withMessage(`Минимальная длина: 3 символа`, minLength(3)),
  },
  lastNameField: {
    minLength: helpers.withMessage(`Минимальная длина: 3 символа`, minLength(3)),
  },
  emailField: {
    email: helpers.withMessage("Вы ввели неверный email", email),
  },
  userNameField: {
    minLength: helpers.withMessage(`Минимальная длина: 3 символа`, minLength(3)),
  },
  adressField: {
    minLength: helpers.withMessage(`Минимальная длина: 3 символа`, minLength(3)),
  },
  confirmPasswordField: {
    sameAsPassword: helpers.withMessage(`Пароли не совпадают`, sameAs(passwordField)),
  },
}));

// Используем библиотеку Vuelidate, прокидываем правила и поля которые будут вычисляться по правилам
const validation = useVuelidate(rules, { firstNameField, lastNameField, emailField, userNameField, adressField, confirmPasswordField });
const submitForm = (event) => {
  // Функция проверяет все данные
  //   validation.value.$touch()
  // Если при touch есть ошибки, то ничего не делаем
  //   if (validation.value.$error) return
  // Если ошибок нет то вызываем алерт
  // console.log(event);
  alert("Form submitted");
};
</script>

<template>
  <div class="login_form image">
    <!--    <input
      class="input-text"
      :type="type"
      :name="name"
      :id="name"
      :placeholder="placeholder"
      :value="propValue"
      @input="$emit('update:propValue', ($event?.target as HTMLInputElement).value)" />
    <label :for="name" class="input-label">{{ label }}</label> -->
    <form @submit.prevent="submitForm">
      <add-input label="YOUR FIRSTNAME" :colorLabel="true" name="firstName" placeholder="Input your first name" v-model:value="validation.firstNameField.$model" :error="validation.firstNameField.$errors" />
      <add-input label="YOUR LASTNAME" :colorLabel="true" name="lastName" placeholder="Input your last Name" v-model:value="validation.lastNameField.$model" :error="validation.lastNameField.$errors" />

      <add-input label="YOUR EMAIL" :colorLabel="true" name="email" placeholder="Input your email" v-model:value="validation.emailField.$model" :error="validation.emailField.$errors" />
      <add-input label="YOUR USERNAME" :colorLabel="true" name="userName" placeholder="Input your user Name" v-model:value="validation.userNameField.$model" :error="validation.userNameField.$errors" />
      <add-input label="YOUR ADRESS" :colorLabel="true" name="adress" placeholder="Input your adress" v-model:value="validation.adressField.$model" :error="validation.adressField.$errors" />

      <add-input label="Your password" :colorLabel="true" name="password" placeholder="Please input password" v-model:value="passwordField" type="password" />

      <add-input
        label="Confirm password"
        :colorLabel="true"
        name="confirm"
        placeholder="Please confirm password"
        v-model:value="validation.confirmPasswordField.$model"
        :error="validation.confirmPasswordField.$errors"
        type="password"
      />

      <AddButton label="SIGN IN" fontSize="18px" color="light" />
    </form>
    <div class="goto">
      <RouterLink to="/"> -> Go to Log IN</RouterLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login_form .goto a {
  color: var(--primary-light);
}
.login_form {
  display: grid;
  justify-content: center;
  align-content: center;
  justify-items: center;
  row-gap: 30px;
  padding: 30px 0;
}
.image {
  background-size: cover; /*cover / auto / contain */
  max-width: 500px;
  min-height: 600px;
  background-image: linear-gradient(rgb(62, 54, 131), rgba(62, 54, 131, 0.67), rgb(62 54 131 / 92%)), url("@/assets/img/login_img.jpg");
}
</style>
