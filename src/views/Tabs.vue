<template>
  <div class="page-content">
    <h1 class="heading-1">Tabs</h1>
    <add-tabs :names="tabs" :selectedTab="selectedTab" @changeTab="changeTab">
      <!-- Так как  в AddTabls внутри указан slot то  <div v-if="selectedTab === 'About'"> попадает на его место
    Указывая тег  <slot ></slot> мы указываем  фреймворку куда должен вставляться вложенный контентв в   AddTabls
   П.С Внутрь компонента можно вложить другой компонент  и он будет отображаться если внутри родительского компонента
   вложен <slot ></slot>б кпримеру так < <AddTabls> <AddButton /></AddTabls>
  -->
      <div v-if="selectedTab === 'About'">Lorem ipsum dolor sit amet.</div>
      <div v-if="selectedTab === 'Vue'">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, id.</div>
      <div v-if="selectedTab === 'React'">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, atque. Laborum iusto odit minus incidunt.</div>
    </add-tabs>
  </div>
</template>
<script setup>
import AddTabs from "@/components/UI/AddTabs.vue";
import { ref } from "vue";
const tabs = [
  { name: "About", label: "О проекте" },
  { name: "Vue", label: "Про Vue" },
  { name: "React", label: "Про React" },
];
const selectedTab = ref("Vue");
const changeTab = (tabName) => {
  selectedTab.value = tabName;
};
</script>
