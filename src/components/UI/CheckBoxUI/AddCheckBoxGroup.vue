<template>
  <div v-for="option in options" :key="option.id">
    <add-checkbox
      :label="option.name"
      :id="option.id"
      :name="name"
      :value="option.name"
      :checked="box.includes(option.id)" 
      group
      @updateCheckboxGroup="check"
    />
  </div>
  <!-- Включаем чек0бокс или отключаем его проверкой :checked="value.includes(option.id)"
  Создаем событие updateCheckboxGroup для перехвата его в AddCheckBox и вызова функции check-->
</template>
<script setup>
  import AddCheckbox from '@/components/UI/CheckBoxUI/AddCheckbox.vue'
  // Перехватываем эмитом v-model:value="selectedHeroes"

  const emit = defineEmits(['update:box'])
  const props = defineProps({
    box: {
      type: Array,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    options: {
      type: Array,
      required: true,
      // Делаем проверку на валидность входных данных
      validator: (value) => {
        const hasNameKey = value.every((option) => Object.keys(option).includes('name'))
        const hasIdKey = value.every((option) => Object.keys(option).includes('id'))
          //Валидатор будет true  для тех объектов , которые содержат поля name , id остальные не будет пропускать  
        return hasNameKey && hasIdKey
      }
    }
  })
  const check = (events) => {
// Принимаем переданные параметри из эмита из AddCheckBox
/* if (props.group) {
      emits('updateCheckboxGroup', {optionId: props.id, checked: event.target.checked}) */
// создали новый массив и записываем в него только объекты с checked =true
    let updateValue = [...props.box]
    if (events.checked) {
      updateValue.push(events.optionId)
    } else {
        // если params.checked != true , то вырезаем Героя из массива
      updateValue.splice(updateValue.indexOf(events.optionId), 1)
    }
    // вызываем нужный v-model - событие  и передаем ему массив  ->  <add-checkbox-group v-model:value="selectedHeroes" name="heroes" :options="listOfHeroes"/>
    emit('update:box', updateValue)
  }
</script>