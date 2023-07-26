<template>
    <div class="cards">
          <!--     <img  src="@/assets/img/Leopard.jpg" :alt="name" >
            <img  src="../assets/img/Leopard.jpg" :alt="name" > -->
            <AddTabs 
                :names="tabs"
                :selectedTab="selectedTab"
                @changeTab="changeTab"> 
              <div class="page"></div>
                      <Transition name="comments" mode="out-in" >
                            <component :is="activeComponent"></component>       
                      </Transition>  
              </AddTabs>

    </div>
</template>

<script setup>
import {ref,shallowRef} from 'vue'
import AddTabs from '@/components/UI/AddTabs.vue'
import Comments1 from '@/components/Comments/Variant-1/Comments.vue'
//import Comments2 from '@/components/Comments/Variant-2/Comments.vue'
/* const req = required('@/assets/img/Leopard.jpg'); */

const tabs = [
    {name: 'Variant-1', label: 'Variant-One', comp: Comments1 },
   // {name: 'Variant-2', label: 'Variant-2', comp: Comments2},

  ];
  const selectedTab = ref('Variant-1');
  const activeComponent = shallowRef(Comments1)
  const changeTab = (tabName) => {
    selectedTab.value = tabs.find(c => c.name === tabName).name;
    activeComponent.value = tabs.find(c => c.name === tabName).comp;
    console.log(tabName);
  }
 
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
.page{
position: relative;
 &-content{
   position: absolute ;
 }
}
</style>