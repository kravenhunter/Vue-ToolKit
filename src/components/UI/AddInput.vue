<script setup>
const emit = defineEmits(["update:value"]);
const props = defineProps({
  error: {
    type: Array,
    required: false,
  },
  value: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "text",
  },
  placeholder: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  colorLabel: {
    type: Boolean,
    required: false,
  },
  width: {
    type: String,
    default: "300px",
  },
});
const updateValue = (e) => {
  console.log(e);
  emit("update:value", e.target.value);
};
</script>

<template>
  <div class="form-input" :style="{ width: width }">
    <input class="input-text" :type="type" :name="name" :id="name" :placeholder="placeholder" :value="value" @input="updateValue" />
    <label :for="name" class="input-label" :class="colorLabel ? 'color_light' : 'color_violet'">{{ label }}</label>

    <TransitionGroup name="errors">
      <div class="form-error" v-for="element of error" :key="element.$uid">
        <div class="form-error__message">{{ element.$message }}</div>
      </div>
    </TransitionGroup>
  </div>
</template>

<style lang="scss" scoped>
.form {
  &-input {
    margin-bottom: 30px;
    position: relative;
  }
  &-error {
    background: var(--danger);
    margin-top: 4px;
    border-radius: 7px;
    font-size: 13px;
    color: #fff;
    padding: 5px;
  }
}
.input {
  &-text {
    border: 1px solid var(--primary);
    padding: 0 10px;
    height: 40px;
    border-radius: 7px;
    font-size: 15px;
    width: 100%;
    position: relative;
    z-index: 1;
    &:focus {
      & + .input-label {
        z-index: 1;
        opacity: 1;
        top: -20px;
      }
    }
    &:not(:placeholder-shown) {
      & + .input-label {
        z-index: 1;
        opacity: 1;
        top: -20px;
      }
    }
  }
  &-label {
    font-weight: bold;
    display: block;
    position: absolute;
    top: 20px;
    opacity: 0;
    z-index: -1;
    transition: 0.3s;
    font-size: 13px;
  }
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
</style>
