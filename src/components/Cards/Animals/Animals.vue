<template>
    <div class="wrapper">
    <h2 class="heading-2">Image Cards</h2>
        <div class="animals-container animals-container-fill">
      
                <Animal v-for="animal in animals" 
                :key="animal.name"
                :source="animal.href"
                :name="animal.name"
                :desk="animal.desctiption"
                :image="animal.img"
                />
        </div>
    </div>
</template>

<script setup>
import {ref,shallowRef} from 'vue'
import Animal from '@/components/Cards/Animals/Animal.vue'

const animals = ref(
   [
       {
        name: 'Cheetan',
        href: '/Cheetan',
        img: 'src/assets/img/Leopard.jpg',
        desctiption: 'is the largest cat native  to Africa and central Iran. It is the fastestland  animal, capable of runningat 80 to128 km/h (50 to 80 mph)'
        },
        {
        name: 'Tiget',
        href: '/Tiget',
        img:'src/assets/img/white_tiger.jpg',
        desctiption: 'is the largest cat native  to Africa and central Iran. It is the fastestland  animal, capable of runningat 80 to128 km/h (50 to 80 mph)'
        },
        {
        name: 'Wolf',
        href: '/Wolf',
        img:'src/assets/img/wolves.jpg',
        desctiption: 'is the largest cat native  to Africa and central Iran. It is the fastestland  animal, capable of runningat 80 to128 km/h (50 to 80 mph)'
        },



   ]
)
</script>

<style lang="scss" scoped>
.animals-container {
    font-family: serif;
    display: grid;
    gap: 35px;
    background:whitesmoke;
    &-fill{
        grid-template-columns: repeat(auto-fill, minmax(300px, 370px)); 
       
    }
}
</style>