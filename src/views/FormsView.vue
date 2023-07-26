<template>
    <div class="cards">
          <!--     <img  src="@/assets/img/Leopard.jpg" :alt="name" >
            <img  src="../assets/img/Leopard.jpg" :alt="name" > -->
            <AddTabs 
                :names="tabs"
                :selectedTab="selectedTab"
                @changeTab="changeTab"> 
              <div class="page"></div>
                      <Transition name="forms" mode="out-in" >
                            <component :is="activeComponent"></component>       
                      </Transition>  
              </AddTabs>

    </div>
</template>

<script setup>
import {ref,shallowRef} from 'vue'
import AddTabs from '@/components/UI/AddTabs.vue'
import Input from '@/components/Forms/Input/Input.vue'
import LoginFormAnim from '@/components/Forms/Login/LoginFormAnim.vue' 
import LoginForm3D from '@/components/Forms/Login/LoginForm3D.vue' 


/* const req = required('@/assets/img/Leopard.jpg'); */

const tabs = [
    {name: 'Registration', label: 'Registration & Validation', comp: Input },
    {name: 'Login-Form', label: 'Login-Form & Animate', comp: LoginFormAnim },   
    {name: 'Login-Form3d', label: 'Login-Form 3D', comp: LoginForm3D },  
  ];
  const selectedTab = ref('Registration');
  const activeComponent = shallowRef(Input)
  const changeTab = (tabName) => {
    selectedTab.value = tabs.find(c => c.name === tabName).name;
    activeComponent.value = tabs.find(c => c.name === tabName).comp;
    console.log(tabName);
  }
 
</script>

<style lang="scss" scoped>

.forms-enter-active,
.forms-leave-active {
  transition: opacity 0.5s ease;
}
.forms-enter-from,
.forms-leave-to {
  opacity: 0;
}
.page{
position: relative;
 &-content{
   position: absolute ;
 }
}
</style>