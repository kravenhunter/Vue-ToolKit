<script setup>
import LoginDarkForm from "@/components/Forms/Login/LoginDarkForm.vue";
import { ref } from "vue";
import Spinner from "./Spinners/Spinner.vue";
const isSpin = ref(false);
</script>
<template>
  <div class="main_container">
    <LoginDarkForm @fom-emit="(val) => (isSpin = val)" />
    <Spinner v-if="isSpin" :fullscreen="true" />
  </div>
</template>

<style lang="scss">
.main_container {
  position: relative;
  width: 936px;
}
</style>
