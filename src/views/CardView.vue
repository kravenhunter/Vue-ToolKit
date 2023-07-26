<template>
    <div class="cards">
          <!--     <img  src="@/assets/img/Leopard.jpg" :alt="name" >
            <img  src="../assets/img/Leopard.jpg" :alt="name" > -->
            <AddTabs 
                :names="tabs"
                :selectedTab="selectedTab"
                @changeTab="changeTab"> 
              <div class="page"></div>
                      <Transition name="animals" mode="out-in" >
                            <component :is="activeComponent"></component>       
                      </Transition>  
              </AddTabs>

    </div>
</template>

<script setup>
import {ref,shallowRef} from 'vue'
import AddTabs from '@/components/UI/AddTabs.vue'
import Animals from '@/components/Cards/Animals/Animals.vue'
import Places from '@/components/Cards/Places/Places.vue'
import Products from '@/components/Cards/Products/Products.vue'
import PostCards from '@/components/Cards/Posts/PostCards.vue'
/* const req = required('@/assets/img/Leopard.jpg'); */

const tabs = [
    {name: 'Animals', label: 'Animals', comp: Animals },
    {name: 'Places', label: 'Places', comp: Places},
    {name: 'Products', label: 'Products', comp: Products},
    {name: 'Post Cards', label: 'PostCards', comp: PostCards},
  ];
  const selectedTab = ref('Animals');
  const activeComponent = shallowRef(Animals)
  const changeTab = (tabName) => {
    selectedTab.value = tabs.find(c => c.name === tabName).name;
    activeComponent.value = tabs.find(c => c.name === tabName).comp;
    console.log(tabName);
  }
 
</script>

<style lang="scss" scoped>

.animals-enter-active,
.animals-leave-active {
  transition: opacity 0.5s ease;
}
.animals-enter-from,
.animals-leave-to {
  opacity: 0;
}
.page{
position: relative;
 &-content{
   position: absolute ;
 }
}
</style>