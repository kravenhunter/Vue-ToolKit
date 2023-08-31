<template>
  <div class="cards">
    <!--     <img  src="@/assets/img/Leopard.jpg" :alt="name" >
              <img  src="../assets/img/Leopard.jpg" :alt="name" > -->
    <AddTabs :names="tabs" :selectedTab="selectedTab" @changeTab="changeTab">
      <div class="page"></div>
      <Transition name="accordions" mode="out-in">
        <component :is="activeComponent"></component>
      </Transition>
    </AddTabs>
  </div>
</template>

<script setup>
import AnimateList from "@/components/Transitions/AnimateList.vue";

import AddTabs from "@/components/UI/AddTabs.vue";
import { ref, shallowRef } from "vue";

/* const req = required('@/assets/img/Leopard.jpg'); */

const tabs = [{ name: "AnimateList", label: "Animate List", comp: AnimateList }];
const selectedTab = ref("AnimateList");
const activeComponent = shallowRef(AnimateList);
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
