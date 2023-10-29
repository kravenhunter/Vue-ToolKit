<template>
  <div class="cards">
    <AddTabs :names="tabs" :selectedTab="selectedTab" @changeTab="changeTab">
      <div class="page"></div>
      <Transition name="nabbars" mode="out-in">
        <component :is="activeComponent"></component>
      </Transition>
    </AddTabs>
  </div>
</template>

<script setup>
import NavBarSlide from "@/components/Animation/NavBars/Slide/NavBarSlide.vue";
import AddTabs from "@/components/UI/AddTabs.vue";
import { ref, shallowRef } from "vue";

const tabs = [{ name: "Nav-Bar-Slide", label: "Nav-Bar Slide", comp: NavBarSlide }];
const selectedTab = ref("Nav-Bar-Slide");
const activeComponent = shallowRef(NavBarSlide);
const changeTab = (tabName) => {
  selectedTab.value = tabs.find((c) => c.name === tabName).name;
  activeComponent.value = tabs.find((c) => c.name === tabName).comp;
  console.log(tabName);
};
</script>

<style lang="scss" scoped>
.nabbars-enter-active,
.nabbars-leave-active {
  transition: opacity 0.5s ease;
}
.nabbars-enter-from,
.nabbars-leave-to {
  opacity: 0;
}
.page {
  position: relative;
  &-content {
    position: absolute;
  }
}
</style>
