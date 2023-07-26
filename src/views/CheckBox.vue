<template>
   <div class="page-content">
    <h1 class="heading-1">CheckBoxes</h1>
    <h2 class="heading-2">Checkbox Active</h2>
    <span>{{ checkboxActive }}</span>
      <div class="line">
    <!--Прокидываем реактивный элементcheckboxActive через пропс  v-model:checked="checkboxActive"
    Обязательено, для передачи изменений в checked нужно указываеть его как v-model:checked="checkboxActive"
    иначе emit не сможет найти куда передать изменения если укажем просто :checked="checkboxActive"-->
        <add-checkBox
          label="Checkbox Active"
          id="checkboxActive"
          name="checkboxActive"
          value="I like it"
          v-model:checked="checkboxActive"/> 
      </div>
      <h2 class="heading-2">Checkbox Disabled</h2>
      <div class="line">
        <add-checkBox
          label="Checkbox Disabled"
          id="checkboxDisabled"
          name="checkboxDisabled"
          value="I like it"
          :disabled="checkboxDisabled"
          v-model:checked="checkboxDisabledChecked"/>
      </div>
      <h2 class="heading-2">Checkbox Group</h2>
      <div class="line line_block">
        <p>Selected Heroes: {{selectedHeroes}}</p>
        <!--Чтобы массив selectedHeroes реактивно пересчитывался закидываем его во v-model:value="selectedHeroes"
        Но когда цепляем реактивную меременную value к v-model она должна существовать в props дочернего компонента  -->
        <add-checkbox-group v-model:box="selectedHeroes" name="heroes" :options="listOfHeroes"/>
      </div>
      <h2 class="heading-2">Switch</h2>
      <div class="line line_block">
        <p>Switch: {{switchProfessional}}</p>
        <add-checkBox
          label="I'm a professional"
          id="switch"
          name="switch"
          value="I'm a professional"
          type="switch"
          v-model:checked="switchProfessional"/>
      </div>
</div>
</template> 
<script setup>
/* import Button from '@/components/Button.vue'

console.log(Button); */
import AddCheckBox from '@/components/UI/CheckBoxUI/AddCheckBox.vue'
import AddCheckboxGroup from '@/components/UI/CheckBoxUI/AddCheckboxGroup.vue'
import {ref} from 'vue'

const checkboxActive = ref(true)

const checkboxDisabled = ref(true)

const checkboxDisabledChecked = ref(true)

// Создаем реаквтивный список данный
const listOfHeroes = ref([
    {name: 'Spider Man', id: 'h1'},
    {name: 'Batman', id: 'h2'},
    {name: 'Tor', id: 'h3'},
    {name: 'Loki', id: 'h4'},
  ])
  //selectedHeroes - список будет хранить выбранных героев
  const selectedHeroes = ref(['h1', 'h3'])
  const switchProfessional = ref(false)

</script>