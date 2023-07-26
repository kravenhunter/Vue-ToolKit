<template>
    <div class="wrapper">
        <div class="accrodion-1" v-for="(el,i) in elements" :key="i">
           <Comp :element="el"  />

        </div>
    </div>    
</template>

<script setup>
import {ref, computed} from 'vue'
import Comp from '@/components/Accordions/Vue/OneComponent.vue'

const elements = ref([
{
          id: 1,
         
          name: 'List One',
          isOpen:false       
         
          },
          {
           
            id: 2,
            
            name: 'List Two',      
            isOpen:false  
          },
          {
          
            id: 3,
           name: 'List Three',      
           isOpen:false  
          },
])

/* const isOpen = ref(false);
const accordionClasses = computed(() => {

        return  { 'is-open': isOpen.value};
}); */

/* const accordionClasses2 = computed(() => {
   
return  { 'is-open': isOpen.value };
}); */

const toggleClick = () => {
    isOpen.value = !isOpen.value
    console.log(' isOpen.value',  isOpen.value);
}
/* const isOpen = ref(false); */
const toggleAccrodion = (id) => {
    console.log('id');
    /* const inx = elements.value.findIndex(el => el.id === id );
    console.log('elements.value', elements.value);
    elements.value[inx].isOpen = !elements.value[inx].isOpen */
    //document.getElementById(id).classList.toggle('active')
   let isOpen =  document.getElementById(id).classList.contains('is-open')
  
   if (!isOpen) {
    document.getElementById(id).classList.add('is-open')
   
   }else{
    document.getElementById(id).classList.remove('is-open')
   }
   //isOpen.value =   !isOpen.value;
  //console.log('inx', inx);
};
</script>

<style lang="scss" scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
}
.wrapper{
   // display: flex;
   // justify-content: center;
   // align-items: center;
    min-height: 100vh;
 //  background: #bedfe8;
}


.accrodion-1{
    width: 800px;
}

</style>