<template>
    <div class="cards">
          <!--     <img  src="@/assets/img/Leopard.jpg" :alt="name" >
            <img  src="../assets/img/Leopard.jpg" :alt="name" > -->
            <AddTabs 
                :names="tabs"
                :selectedTab="selectedTab"
                @changeTab="changeTab"> 
              <div class="page"></div>
                      <Transition name="animation" mode="out-in" >
                            <component :is="activeComponent"></component>       
                      </Transition>  
              </AddTabs>

    </div>
</template>

<script setup>
import {ref,shallowRef} from 'vue'
import AddTabs from '@/components/UI/AddTabs.vue'
import Loader1 from '@/components/Animation/Loader/Loader.vue'
import Loader2 from '@/components/Animation/Loader/Loader2.vue'
import ClockDark from '@/components/Animation/Clocks/ClockDark.vue'
import ClockWhite from '@/components/Animation/Clocks/ClockWhite.vue'
import ParalaxWood from '@/components/Animation/ParalaxEffects/Wood/ParalaxWood.vue'
import Test from '@/components/Animation/Test/Test.vue'
/* const req = required('@/assets/img/Leopard.jpg'); */

const tabs = [
    {name: 'ClockDark', label: 'Dark Clock', comp: ClockDark },
  /*   {name: 'ClockWhite', label: 'White Clock', comp: ClockWhite }, */
    {name: 'Loader1', label: 'Loader-1', comp: Loader1 },
    {name: 'Loader2', label: 'Loader-2', comp: Loader2 },
    {name: 'ParalaxWood', label: 'Paralax Wood', comp: ParalaxWood },
    {name: 'Test', label: 'Test Mark', comp: Test },
  ];
  const selectedTab = ref('ClockDark');
  const activeComponent = shallowRef(ClockDark)
  const changeTab = (tabName) => {
    selectedTab.value = tabs.find(c => c.name === tabName).name;
    activeComponent.value = tabs.find(c => c.name === tabName).comp;
  
  }
 
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
.page{
position: relative;
 &-content{
   position: absolute ;
 }
}
</style>