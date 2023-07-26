<template>

      <div class="container">
          <AddTabs 
          :names="tabs"
          :selectedTab="selectedTab"
          @changeTab="changeTab"> 
            <div class="page"></div>
                <Transition name="sl" mode="out-in" >
                      <component :is="activeComponent"></component>       
                </Transition>  
          </AddTabs>
        
      <!--       
            <label>
              <input type="radio" v-model="activeComponent" :value="CompA"> A
            </label>
              <label>
                  <input type="radio" v-model="activeComponent" :value="CompB"> B
                </label>
            <Transition name="fade" mode="out-in">
                <component :is="activeComponent"></component>
              </Transition> -->

          
      </div>

</template>

<script setup>
import {ref,shallowRef, watchEffect} from 'vue'
/* import AddCheckboxGroup from '@/components/UI/CheckBoxUI/AddCheckboxGroup.vue' */
import AddTabs from '@/components/UI/AddTabs.vue'
import AddAutoFill from '@/components/UI/Grid/Autofill/AddAutoFill.vue'
import AddPositionsGrid from '@/components/UI/Grid/GridRadio/AddPositionsGrid.vue'
import AddAbsolutePosGrid from '@/components/UI/Grid/Absolute/AddAbsolutePosGrid.vue'
import Layout1 from '@/components/UI/Grid/Test/AddTestGrid.vue'
import Layout2 from '@/components/UI/Grid/Test/AddTestAutofill.vue'
import TestGridSlot from '@/components/UI/Grid/Test/TestGridSlot.vue'
import GhildsPosition from '@/components/UI/Grid/Test/ElementPosition.vue'

const tabs = [
    {name: 'AddAutoFill', label: 'Grid AutoFill Blocks', comp: AddAutoFill },
    {name: 'AddPositionsGrid', label: 'Position Group', comp: AddPositionsGrid},
    {name: 'AddAbsolutePosGrid', label: 'Absolute Position Group', comp: AddAbsolutePosGrid},
    {name: 'Layout1', label: 'Layout 1', comp: Layout1},
    {name: 'Layout2', label: 'Layout 2', comp: Layout2},
    {name: 'GridSlot', label: 'Grid Slot', comp: TestGridSlot},
    {name: 'GhildsPosition', label: 'Grid Ghilds Position', comp: GhildsPosition}
  ];
  const selectedTab = ref('AddAutoFill');
  const activeComponent = shallowRef(AddAutoFill)
  const changeTab = (tabName) => {
    selectedTab.value = tabs.find(c => c.name === tabName).name;
    activeComponent.value = tabs.find(c => c.name === tabName).comp;
    console.log(tabName);
  };


/* const selectedVerticalRadioGrid = ref('auto')
const selectedHorizontRadioGrid = ref('auto') */
/*   watchEffect(() => {

    console.log('watchEffect -> selectedGrid', selectedVerticalRadioGrid.value);
    console.log('watchEffect -> selectedRadioGrid', selectedHorizontRadioGrid.value);
  }
   
  ) */

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
.page{
position: relative;
 &-content{
 
   position: absolute ;
 }
}
</style>