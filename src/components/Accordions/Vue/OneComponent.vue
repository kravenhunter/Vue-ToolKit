<script setup>
import { computed, ref } from "vue";
const props = defineProps({
  element: {
    type: Object,
    default: {},
  },
});
const emits = defineEmits("tooggleFunc");
const isOpen = ref(true);
const accordionClasses = computed(() => {
  return { "is-open": isOpen.value };
});

const toggleAccrodion = () => {
  console.log("id");
  isOpen.value = !isOpen.value;
  //console.log('inx', inx);
};
</script>

<template>
  <div class="contentBox" :class="accordionClasses">
    <div class="label" @click="toggleAccrodion">
      {{ element.name }}
    </div>
    <div class="contentBox-content">
      <div class="accrodion-content">
        <p>
          Some content Here Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, error soluta maxime, aliquam quam quibusdam reiciendis, aliquid debitis magni nihil ad eum blanditiis. Temporibus fuga itaque,
          quam, corporis et ea sequi amet nihil aliquam ipsum accusantium dolore minus debitis voluptates excepturi harum quos molestiae tenetur natus a maiores delectus officiis? Sapiente quod incidunt placeat iure
          possimus molestiae, velit neque voluptatum?
        </p>
        <ul>
          <li><add-button label="Profile" color="dark" /></li>

          <li><add-button label="Admin Panel" color="dark" /></li>
          <li><add-button label="Log Out" color="dark" /></li>
        </ul>
      </div>
    </div>
  </div>
</template>

x

<style lang="scss" scoped>
.contentBox {
  margin: 10px 20px;
}
.label {
  position: relative;
  padding: 10px;
  background: #2694af;
  color: #fff;

  cursor: pointer;
}
.label::before {
  content: "+";
  position: absolute;
  top: 50%;
  right: 20px;
  // выравниваем позицию  и без кручения
  transform: translateY(-50%) rotate(0deg);
  // добавляем анимацию применимую к этому блоку
  transition: all 0.5s ease;
  font-size: 1.5em;
}

.contentBox-content {
  background: #fff;
  max-height: 10rem;
  overflow: hidden;

  /*     overflow: hidden;
  overflow-y: auto;
   ; */

  // добавляем анимацию применимую к этому блоку
  transition: 0.6s;
}
.is-open .contentBox-content {
  max-height: 0;
}
.is-open .label::before {
  //Суть в том что при обращении к этому блоку будет происходит анимация(transition),так оно работает , инчае резкий переход
  // выравниваем позицию  и с кручения
  transform: translateY(-50%) rotate(135deg);
  // добавляем анимацию применимую к этому блоку
  transition: all 0.5s ease;
}
</style>
