<template>
  <div class="wrap-slot">
    <GridSlot minSize="320px" maxSize="1fr" columnGap="10px" rowGap="10px">
          <div class="grid-container-element">Lorem ipsum dolor sit amet.</div> 
          <div class="grid-container-element">Lorem ipsum dolor sit amet.</div>  
          <div class="grid-container-element">Lorem ipsum dolor sit amet.</div>  
          <div class="grid-container-element">Lorem ipsum dolor sit amet.</div>  
    </GridSlot>
  </div>
</template>

<script setup>
import GridSlot from '@/components/UI/Grid/Test/GridSlot.vue'

</script>

<style lang="scss" scoped>
.grid-container-element{
        background-color: #ffd8a8;
        border: 2px solid #ffa94d;
        border-radius: 5px;
        ;
}

</style>