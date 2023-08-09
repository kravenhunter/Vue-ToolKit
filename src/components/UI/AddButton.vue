<script>
// назначаем имя компонента для регистрации в проекте
export default {
  name: "add-button",
};
</script>

<script setup>
const props = defineProps({
  fontSize: {
    type: String,
    default: "16px",
  },
  label: {
    type: String,
    default: "Button",
  },
  color: {
    type: String,
    default: "primary",
  },
  disabled: {
    type: Boolean,
    reqired: false,
  },
  rounded: {
    type: Boolean,
    reqired: false,
  },
  outlined: {
    type: Boolean,
    reqired: false,
  },
  icon: {
    type: String,
    reqired: false,
  },
  setTarget: {
    type: String,
    default: "default",
  },
});
//Регистрируем кастомное событие @test
const emit = defineEmits(["test"]);
// По клику вызывается emit с событием @test
const clickOnButton = () => {
  emit("test");
};
</script>

<template>
  <!-- <button
     :class="['btn', `btn_${color}`, 
     { btn_rounded: rounded },
     { btn_outlined: outlined }, 
     { btn_icon: icon },
      { btn_large: size === 'large' }]" 
      :disabled="disabled" @click="$emit('test', $event?.target.value)"> -->
  <button
    :set-target="setTarget"
    type="submit"
    :class="['btn', `btn_${color}`, { btn_rounded: rounded }, { btn_outlined: outlined }, { btn_icon: icon }]"
    :disabled="disabled"
    @click="$emit('test', ' $event?.target?.value')"
  >
    <span v-if="icon">
      <font-awesome-icon :icon="`fa-regular fa-${icon}`" />
    </span>
    <span v-else>{{ label }}</span>
  </button>
</template>

<style lang="scss" scoped>
.btn {
  padding: 0.5em 1em;
  border-radius: 0.3em;
  border: none;
  cursor: pointer;
  font-size: v-bind(fontSize);
  font-weight: 600;
  transition: 0.2s;
  &_primary {
    background: var(--primary);
    color: #fff;
    border: 1px solid var(--color-orange);
    &:enabled:hover {
      background: var(--primary-hover);
    }
  }
  &_light {
    background: var(--primary-light);
    color: #080808;
    border: 1px solid var(--primary);
    &:enabled:hover {
      background: var(--primary-hover);
    }
  }
  &_second {
    background: var(--second);
    color: #fff;
    border: 1px solid var(--second);
    &:enabled:hover {
      background: var(--second-hover);
    }
  }
  &_success {
    background: var(--success);
    color: #fff;
    border: 1px solid var(--success);
    &:enabled:hover {
      background: var(--success-hover);
    }
  }
  &_info {
    background: var(--info);
    color: #fff;
    border: 1px solid var(--info);
    &:enabled:hover {
      background: var(--info-hover);
    }
  }
  &_warning {
    background: var(--warning);
    color: #fff;
    border: 1px solid var(--warning);
    &:enabled:hover {
      background: var(--warning-hover);
    }
  }
  &_danger {
    background: var(--danger);
    color: #fff;
    border: 1px solid var(--danger);
    &:enabled:hover {
      background: var(--danger-hover);
    }
  }
  &:disabled {
    opacity: 0.6;
    cursor: default;
  }
  &_rounded {
    border-radius: 15px;
  }
  &_outlined {
    background: transparent;
    color: #000;
    &:hover {
      color: #fff;
    }
  }
  &_icon {
    padding: 0;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
}
</style>
