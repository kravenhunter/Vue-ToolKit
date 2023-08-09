<script setup>
import { validateHelper } from "@/plugins/validateHelper";
import { reactive, ref } from "vue";

const stateFormData = reactive({
  userName: "",
  emailUser: "",
  password: "",
  confirm: "",
});

const validate = validateHelper(stateFormData);
const submitStatus = ref("");

function submit() {
  validate.value.$validate();
  if (!validate.value.$error) {
    alert("submit!");
  } else {
    console.log(validate.value.password.$model);
    console.log(validate.value.confirm.$model);
    console.log(validate.value.$errors[0]);
    alert("not  submit!");
  }
}
</script>

<template>
  <!--     <div class="block">
        <label class="form__label">Your Email</label>
        <input type="text" placeholder="Email" v-model.trim="stateForm.emailUser" required />
        <div class="error" v-if="validateHelper.userName.$error">
          <div
            v-for="element of validateHelper.emailUser.$errors"
            :key="element.$uid"
            class="form-error__message">
            {{ element.$message }}
          </div>
        </div>
        <button class="button" type="submit" @click="submitTest">Submit!</button>
      </div> -->

  <div>
    <form class="form_block" @submit.prevent="submit">
      <div class="form_group_inputs">
        <input class="form__input" v-model.trim="validate.userName.$model" required />
        <label class="form__label">Your Name</label>
        <div class="line"></div>
        <TransitionGroup name="errors">
          <div class="error" v-for="element of validate.userName.$errors" :key="element.$uid">
            {{ element.$message }}
          </div>
        </TransitionGroup>
      </div>

      <div class="form_group_inputs">
        <input class="form__input" v-model.trim="validate.emailUser.$model" required />
        <label class="form__label">Your Email</label>
        <div class="line"></div>
        <TransitionGroup name="errors">
          <div class="error" v-for="element of validate.emailUser.$errors" :key="element.$uid">
            {{ element.$message }}
          </div>
        </TransitionGroup>
      </div>
      <div class="form_group_inputs">
        <input class="form__input" v-model.trim="validate.password.$model" required />
        <label class="form__label">Your password</label>
        <div class="line"></div>
        <TransitionGroup name="errors">
          <div class="error" v-for="element of validate.password.$errors" :key="element.$uid">
            {{ element.$message }}
          </div>
        </TransitionGroup>
      </div>
      <div class="form_group_inputs">
        <input class="form__input" v-model.trim="validate.confirm.$model" required />
        <label class="form__label">Your confirm</label>
        <div class="line"></div>
        <TransitionGroup name="errors">
          <div class="error" v-for="element of validate?.confirm?.$errors" :key="element.$uid">
            {{ element.$message }}
          </div>
        </TransitionGroup>
      </div>

      <!--   <div class="error" v-if="v$.password.confirm.$error">
            <TransitionGroup name="errors">
              <div
                v-for="element of v$.password.confirm.$errors"
                :key="element.$uid"
                class="form-error__message">
                {{ element.$message }}
              </div>
            </TransitionGroup>
          </div> -->
      <add-button label="Submit" fontSize="18px" :disabled="submitStatus === 'PENDING'" />
    </form>
  </div>
</template>

<style lang="scss" scoped>
.form_block {
  display: grid;
  grid-auto-rows: 50px;
  grid-template-columns: 500px;

  row-gap: 40px;
  align-content: start;
}
.form_group_inputs {
  position: relative;
  width: 100%;
  border: 1px solid var(--color-darkBlue);

  //   z-index: 10;
}

.form_group_inputs input {
  width: 100%;
  height: 100%;
  border: none;
  outline: none; /* подчеркивание при активном импуте */
  background: transparent; /* делаем фон  фоном родителя */
  color: var(--color-dark);
  position: absolute;
  bottom: 0;
  padding: 10px;
}

.form_group_inputs label {
  left: 10px;
  top: 20px;
  color: var(--color-darkBlue);
  background: var(--color-light);
  display: block;
  font-weight: 600;
  position: absolute;

  cursor: text;
  transition: 0.4s;
}
.form_group_inputs input:focus + label,
.form_group_inputs input:valid + label {
  top: -8px;
  font-size: 12px;
  padding: 0 7px;
}
.form_group_inputs .line {
  width: 0;
  height: 2px;
  position: absolute;
  bottom: -20px;
  left: -1px;
  background: var(--color-darkBlue);
  transition: 0.4s;
}

/* ~ .line - все соседние элементы  */
.form_group_inputs input:focus ~ .line,
.form_group_inputs input:valid ~ .line {
  width: calc(100% + 2px);
}
.form_group_inputs .error {
  color: var(--color-red);
  font-weight: 600;
  position: absolute;
  left: 15px;
  bottom: -25px;
  z-index: 1;
}

.form .form-error {
  background: var(--danger);
  margin-top: 4px;
  border-radius: 7px;
  font-size: 13px;
  color: #fff;
  padding: 5px;
}

.color_violet {
  color: var(--primary);
}
.color_light {
  color: var(--primary-light);
}
.errors-enter-active,
.errors-leave-active {
  transition: opacity 0.5s ease;
}
.errors-enter-from,
.errors-leave-to {
  opacity: 0;
}

.block {
  display: grid;
  justify-content: center;
  grid-auto-columns: 350px;
  grid-auto-rows: 50px;
  margin: 30px 0;
}
.block input {
  background: transparent;
  border: 1px solid var(--color-darkBlue);
  color: var(--color-dark);
}
</style>
