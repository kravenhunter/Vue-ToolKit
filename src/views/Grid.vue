<template>
  <div class="container">
    <AddTabs :names="tabs" :selectedTab="selectedTab" @changeTab="changeTab">
      <div class="page"></div>
      <Transition name="sl" mode="out-in">
        <component :is="activeComponent"></component>
      </Transition>
    </AddTabs>
  </div>
</template>

<script setup>
import { ref, shallowRef } from "vue";

import AddTabs from "@/components/UI/AddTabs.vue";
import AddAbsolutePosGrid from "@/components/UI/Grid/Absolute/AddAbsolutePosGrid.vue";
import AddAutoFill from "@/components/UI/Grid/Autofill/AddAutoFill.vue";
import AddPositionsGrid from "@/components/UI/Grid/GridRadio/AddPositionsGrid.vue";
import RightPositionGrid from "@/components/UI/Grid/Test/AddRightPositionGrid.vue";
import RightPositionGrid2 from "@/components/UI/Grid/Test/AddRightPositionGrid2.vue";
import GhildsPosition from "@/components/UI/Grid/Test/ElementPosition.vue";
import TestGridSlot from "@/components/UI/Grid/Test/TestGridSlot.vue";

const tabs = [
  { name: "AddAutoFill", label: "Grid AutoFill Blocks", comp: AddAutoFill },
  { name: "AddPositionsGrid", label: "Position Group", comp: AddPositionsGrid },
  { name: "AddAbsolutePosGrid", label: "Absolute Position Group", comp: AddAbsolutePosGrid },
  { name: "RightPositionGrid", label: "Right Position Grid 1", comp: RightPositionGrid },
  { name: "RightPositionGrid2", label: "LayRight Position Gridout 2", comp: RightPositionGrid2 },
  { name: "GridSlot", label: "Grid Slot", comp: TestGridSlot },
  { name: "GhildsPosition", label: "Grid Ghilds Position", comp: GhildsPosition },
];
const selectedTab = ref("AddAutoFill");
const activeComponent = shallowRef(AddAutoFill);
const changeTab = (tabName) => {
  selectedTab.value = tabs.find((c) => c.name === tabName).name;
  activeComponent.value = tabs.find((c) => c.name === tabName).comp;
  console.log(tabName);
};
</script>

<style lang="scss" scoped>
.sl-enter-active,
.sl-leave-active {
  transition: opacity 0.5s ease;
}
.sl-enter-from,
.sl-leave-to {
  opacity: 0;
}
.page {
  position: relative;
  &-content {
    position: absolute;
  }
}
</style>
