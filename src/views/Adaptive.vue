<script setup>
import MediaBlocks from "@/components/Adaptive/MediaBlocks.vue";
import MediaImages from "@/components/Adaptive/MediaImages.vue";
import MediaLayout from "@/components/Adaptive/MediaLayout.vue";
import AddTabs from "@/components/UI/AddTabs.vue";
import { ref, shallowRef } from "vue";

const tabs = [
  { name: "Blocks", label: "Media Blocks", comp: MediaBlocks },
  { name: "Images", label: "Media Images", comp: MediaImages },
  { name: "Layout", label: "Media Layout", comp: MediaLayout },
];
const selectedTab = ref("Blocks");

const activeComponent = shallowRef(tabs.find((c) => c.name === selectedTab.value).comp);
const changeTab = (tabName) => {
  selectedTab.value = tabs.find((c) => c.name === tabName).name;
  activeComponent.value = tabs.find((c) => c.name === tabName).comp;
};
</script>

<template>
  <div class="adaptive">
    <!--     <img  src="@/assets/img/Leopard.jpg" :alt="name" >
            <img  src="../assets/img/Leopard.jpg" :alt="name" > -->
    <AddTabs :names="tabs" :selectedTab="selectedTab" @changeTab="changeTab">
      <div class="page"></div>
      <Transition name="animation" mode="out-in">
        <component :is="activeComponent"></component>
      </Transition>
    </AddTabs>
  </div>
</template>

<style lang="scss" scoped>
.animation-enter-active,
.animation-leave-active {
  transition: opacity 0.5s ease;
}
.animation-enter-from,
.animation-leave-to {
  opacity: 0;
}
.page {
  position: relative;
  &-content {
    position: absolute;
  }
}
</style>
