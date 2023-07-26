<template>
<div class="accrodion">
    <div class="label" @click="toggleClick">Content</div>
    <div class="acc-content" :class="toggle">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium inventore in architecto id! Alias, odit saepe. Culpa neque tempore beatae, dolor cum maxime optio doloremque tempora vero ratione omnis impedit possimus eius laboriosam rem aspernatur, sequi eos sapiente, ad ea commodi totam? Aut ipsum harum quia, ea dignissimos atque ducimus a animi, omnis temporibus, tenetur numquam porro ad et voluptates praesentium quod laudantium libero non illo optio maxime! Debitis id consectetur neque molestias! Cumque aperiam, vero tenetur quis deserunt ea doloribus, quia praesentium, accusantium voluptatibus ut perspiciatis qui. Facere cupiditate voluptas sint voluptates dicta deserunt porro tenetur quasi corrupti accusantium.
    </div>
</div>
</template>

<script setup>
import {ref,computed} from 'vue'

const isOpen = ref(false);
const toggle = computed(() => {

    return  {'active': isOpen.value }
})

//Вариант через  Api
const toggleClick = () => {

    isOpen.value =  !document.querySelector('.acc-content').classList.contains('active')
  
};
//Вариант через  DOM
/* const toggleClick = () => {

    document.querySelector('.acc-content').classList.toggle('active');
   // document.querySelector('.acc-content').classList.add('active');  -нужно также удалять класс
}; */
</script>

<style lang="scss" scoped>
.accrodion{
        width: 700px;
        background: #2694af;
        color: #fff;
        padding: 10px;
     
}
.accrodion .label{
        background: #2694af;
        color: #fff;
        margin-bottom: 20px;
}
.accrodion .acc-content{
        background: #fff;
        color: #000;
        overflow: hidden;
        max-height: 0;
        transition: 0.6s; // Включаем анимацию для изчезания блока за счет свойства    max-height: 0;
}
.accrodion .acc-content.active {
    // Включаем анимацию для появления  блока за счет свойства    max-height: 10rem;
        max-height: 10rem;
        transition: 1s ;
}
</style>