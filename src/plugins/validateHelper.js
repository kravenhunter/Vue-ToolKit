import { useVuelidate } from "@vuelidate/core";
import { alpha, email, helpers, minLength, required, sameAs } from "@vuelidate/validators";
import { computed } from "vue";

// interface ISignInData {
//   firstNameField: string;
//   lastNameField: string;
//   emailField: string;
//   userNameField: string;
//   adressField: string;
//   passwordField: string;
//   confirmPasswordField: string;
// }

const alphabetRegex = helpers.regex(/^[^!@#№%^&*_+]+$/); // (/^[a-zA-Z]*$/)
const alphabetNumbers = helpers.regex(/^[^A-Za-z!@#№%^&*,_+]+$/); // numeric
const minLengthLimit = (number) => helpers.withMessage(`Минимальная длина: ${number} символа`, minLength(number));

export const validateHelper = (state) => {
  const rules = computed(() => {
    return {
      // firstNameField: {
      //   required: helpers.withMessage('Firs tName cannot be empty', required),
      //   regexField: helpers.withMessage('Только слова', alpha),
      //   minLength: minLengthLimit(3),
      // },
      // lastNameField: {
      //   required: helpers.withMessage('Last Name cannot be empty', required),
      //   regexField: helpers.withMessage('Только слова, цифры и символы: () , $', alphabetRegex),
      //   minLength: minLengthLimit(3),
      // },
      userName: {
        required: helpers.withMessage("Firs tName cannot be empty", required),
        regexField: helpers.withMessage("Только слова", alpha),
        minLength: minLengthLimit(3),
      },

      emailUser: {
        required: helpers.withMessage("Email cannot be empty", required),
        regexField: helpers.withMessage(" Не соответствует формату", email),
      },

      password: {
        required,
        minLength: minLength(4),
      },
      confirm: {
        required,

        sameAs: helpers.withMessage("Password doesn't equal", sameAs(state.password)),
      },
    };
  });

  const validate = useVuelidate(rules, state);
  return validate;
};
