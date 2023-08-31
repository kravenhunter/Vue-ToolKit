<template>
  <div class="cards">
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

<script setup>
import MusicAqualizer from "@/components/Animation/Aqualizer/MusicAqualizer.vue";
import ClockDark from "@/components/Animation/Clocks/ClockDark.vue";
import Loader1 from "@/components/Animation/Loader/Loader.vue";
import Loader2 from "@/components/Animation/Loader/Loader2.vue";
import Loader3 from "@/components/Animation/Loader/Loader3.vue";
import Loader4 from "@/components/Animation/Loader/Loader4.vue";
import ParalaxWood from "@/components/Animation/ParalaxEffects/Wood/ParalaxWood.vue";
import Test from "@/components/Animation/Test/Test.vue";
import AddTabs from "@/components/UI/AddTabs.vue";
import { ref, shallowRef } from "vue";
/* const req = required('@/assets/img/Leopard.jpg'); */

const tabs = [
  { name: "MusicAqualizer", label: "Music Aqualizer", comp: MusicAqualizer },
  { name: "ClockDark", label: "Dark Clock", comp: ClockDark },
  /*   {name: 'ClockWhite', label: 'White Clock', comp: ClockWhite }, */
  { name: "Loader1", label: "Loader-1", comp: Loader1 },
  { name: "Loader2", label: "Loader-2", comp: Loader2 },
  { name: "Loader3", label: "Loader-3", comp: Loader3 },
  { name: "Loader4", label: "Loader-4", comp: Loader4 },
  { name: "ParalaxWood", label: "Paralax Wood", comp: ParalaxWood },
  { name: "Test", label: "Test Mark", comp: Test },
];
const selectedTab = ref("MusicAqualizer");
const activeComponent = shallowRef(MusicAqualizer);
const changeTab = (tabName) => {
  selectedTab.value = tabs.find((c) => c.name === tabName).name;
  activeComponent.value = tabs.find((c) => c.name === tabName).comp;
};
</script>

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
