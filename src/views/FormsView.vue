<script setup>
import Input from "@/components/Forms/Input/Input.vue";
import GoogleForm from "@/components/Forms/Login/GoogleForm.vue";
import LoginForm3D from "@/components/Forms/Login/LoginForm3D.vue";
import LoginFormAnim from "@/components/Forms/Login/LoginFormAnim.vue";
import LoginFormPurple from "@/components/Forms/Login/LoginFormPurple.vue";
import ModalForm from "@/components/Forms/Login/ModalForm.vue";
import AddTabs from "@/components/UI/AddTabs.vue";
import { ref, shallowRef } from "vue";

/* const req = required('@/assets/img/Leopard.jpg'); */

const tabs = [
  { name: "ModalForm", label: "Modal Form", comp: ModalForm },
  { name: "Registration", label: "Registration & Validation", comp: Input },
  { name: "Login-Form", label: "Form & Animate", comp: LoginFormAnim },
  { name: "Login-Form3d", label: "Form 3D", comp: LoginForm3D },
  { name: "Login-FormPurple", label: "Form Purple", comp: LoginFormPurple },
  { name: "GoogleForm", label: "Google Form", comp: GoogleForm },
];
const selectedTab = ref("ModalForm");
const activeComponent = shallowRef(tabs.find((c) => c.name === selectedTab.value).comp);
const changeTab = (tabName) => {
  selectedTab.value = tabs.find((c) => c.name === tabName).name;
  activeComponent.value = tabs.find((c) => c.name === tabName).comp;
  console.log(tabName);
};
</script>

<template>
  <div class="cards">
    <!--     <img  src="@/assets/img/Leopard.jpg" :alt="name" >
            <img  src="../assets/img/Leopard.jpg" :alt="name" > -->
    <AddTabs :names="tabs" :selectedTab="selectedTab" @changeTab="changeTab">
      <div class="page"></div>
      <Transition name="forms" mode="out-in">
        <component :is="activeComponent"></component>
      </Transition>
    </AddTabs>
  </div>
</template>

<style lang="scss" scoped>
.forms-enter-active,
.forms-leave-active {
  transition: opacity 0.5s ease;
}
.forms-enter-from,
.forms-leave-to {
  opacity: 0;
}
.page {
  position: relative;
  &-content {
    position: absolute;
  }
}
</style>
