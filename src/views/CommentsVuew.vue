<template>
  <div class="cards">
    <AddTabs :names="tabs" :selectedTab="selectedTab" @changeTab="changeTab">
      <div class="page"></div>
      <Transition name="comments" mode="out-in">
        <component :is="activeComponent"></component>
      </Transition>
    </AddTabs>
  </div>
</template>

<script setup>
import Comments1 from "@/components/Comments/Variant-1/Comments.vue";
import AddTabs from "@/components/UI/AddTabs.vue";
import { ref, shallowRef } from "vue";

const tabs = [{ name: "Variant-1", label: "Variant-One", comp: Comments1 }];
const selectedTab = ref("Variant-1");
const activeComponent = shallowRef(Comments1);
const changeTab = (tabName) => {
  selectedTab.value = tabs.find((c) => c.name === tabName).name;
  activeComponent.value = tabs.find((c) => c.name === tabName).comp;
  console.log(tabName);
};
</script>

<style lang="scss" scoped>
.comments-enter-active,
.comments-leave-active {
  transition: opacity 0.5s ease;
}
.comments-enter-from,
.comments-leave-to {
  opacity: 0;
}
.page {
  position: relative;
  &-content {
    position: absolute;
  }
}
</style>
