<template>
  <div class="cards">
    <AddTabs :names="tabs" :selectedTab="selectedTab" @changeTab="changeTab">
      <div class="page"></div>
      <Transition name="accordions" mode="out-in">
        <component :is="activeComponent"></component>
      </Transition>
    </AddTabs>
  </div>
</template>

<script setup>
import AccordionSingle from "@/components/Accordions/JS/AccordionSingle.vue";
import AccodnionsJS from "@/components/Accordions/JS/Accordions.vue";
import AccodnionsVue from "@/components/Accordions/Vue/Accrodions.vue";
import AddTabs from "@/components/UI/AddTabs.vue";
import { ref, shallowRef } from "vue";

/* const req = required('@/assets/img/Leopard.jpg'); */

const tabs = [
  { name: "JS Accordion-Single", label: "JS Accordion-Single", comp: AccordionSingle },
  { name: "JS Accordion-Massive", label: "JS Accordion-Massive", comp: AccodnionsJS },
  { name: "Vue Accordion", label: "Vue Accordion", comp: AccodnionsVue },
];
const selectedTab = ref("JS Accordion-Single");
const activeComponent = shallowRef(AccordionSingle);
const changeTab = (tabName) => {
  selectedTab.value = tabs.find((c) => c.name === tabName).name;
  activeComponent.value = tabs.find((c) => c.name === tabName).comp;
  console.log(tabName);
};
</script>

<style lang="scss" scoped>
.accordions-enter-active,
.accordions-leave-active {
  transition: opacity 0.5s ease;
}
.accordions-enter-from,
.accordions-leave-to {
  opacity: 0;
}
.page {
  position: relative;
  &-content {
    position: absolute;
  }
}
</style>
