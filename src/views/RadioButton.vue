<template>
   <div class="page-content">
        <h1 class="heading-1">Radiobutton</h1>
        <h2 class="heading-2">Basic</h2>
        <div class="line line_block">
          <p>Selecled Club: {{selectedClub}}</p>
          <div
            v-for="club in footballClubs"
            :key="club.id">
            <add-radiobutton
              :value="club.name"
              :label="club.name"
              :id="club.id"
              name="club"
              v-model:value="selectedClub"/>
          </div>
        </div>
        <h2 class="heading-2">Disabled</h2>
        <div class="line">
          <add-radiobutton
            value="Radiobutton Disabled"
            label="Radiobutton Disabled"
            id="RadiobuttonDisabled"
            name="RadiobuttonDisabled"
            :disabled="disabledRadio"
            v-model:value="disabledRadioChecked"/>


        </div>
</div>
</template>
<script setup>
import { ref } from 'vue'

import AddRadiobutton from '@/components/UI/AddRadiobutton.vue'

const footballClubs = ref([
  {name: 'CSKA Moscow', id: 'f1'},
  {name: 'Spartak Moscow', id: 'f2'},
  {name: 'Real Madrid', id: 'f3'},
  {name: 'Milan', id: 'f4'}
])
const selectedClub = ref('')
const disabledRadio = ref(true)
const disabledRadioChecked = ref(true)
</script>