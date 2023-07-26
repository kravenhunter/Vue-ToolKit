
<template>
      <div class="page-content">
  <h1 class="heading-1">Progress</h1>
  <h2 class="heading-2">Progress Bar</h2>
  <div class="line line_block">
    <add-progress-bar maxWidth="400px" :percent="percentBar" :color="percentColor"/>
    <add-button label="Add 10%" @click="addPercentBar"/>
  </div>
  <h2 class="heading-2">Progress Circle</h2>
  <div class="line line_block">
    <add-progress-circle :percent="percentCircle" color="warning"/>
    <add-button label="Add 10%" @click="addPercentCircle"/>
  </div>
</div>
</template>
<script setup>
import {ref} from 'vue'
import AddProgressBar from '@/components/UI/Progress/AddProgressBar.vue'
import AddProgressCircle from '@/components/UI/Progress/AddProgressCircle.vue'
import AddButton from '@/components/UI/AddButton.vue'
const percentBar = ref(0)
const percentColor = ref('warning')
const percentCircle = ref(60)
const addPercentBar = () => {
  percentBar.value += 10
  if (percentBar.value >= 25 && percentBar.value < 50) {
    percentColor.value = 'danger'
    }
   else if(percentBar.value >= 50 && percentBar.value < 75) {
    percentColor.value = 'primary'
   } 
   else if(percentBar.value >=75) {
    percentColor.value = 'success'
   } 
  if (percentBar.value > 100) {
    percentBar.value = 100
  }
}
const addPercentCircle = () => {
  percentCircle.value += 10
 
  if (percentCircle.value > 100) {
    percentCircle.value = 100
  }
}
</script>