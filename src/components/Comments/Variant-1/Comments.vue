<template>
    <div class="wrapp-contaioner">
      <Comment v-for="element in comments" 
                  :key="element.id"
                   :comment="element" 
                  />
       
    </div>
  </template>
  
  <script setup>
  import {ref, onMounted} from 'vue'
  import Comment from '@/components/Comments/Variant-1/Comment.vue'
  
  const comments = ref(
     [
         {
          id: 1,
          profileImg: 'src/assets/img/profile2.jpg',
          author: 'Marques Brown',      
          date:'Jan 2023', 
          comment: ' Yeah! I like that video.Thanks!!'
          },
          {
           
            id: 2,
            profileImg: 'src/assets/img/profile.jpg',
          author: 'Marques Brown',      
          date:'Jan 2023', 
          comment: ' Yeah! I like that video.Thanks!!'
          },
          {
          
            id: 3,
           profileImg: 'src/assets/img/profile3.jpeg',
          author: 'Marques Brown',      
          date:'Jan 2023', 
          comment: ' Yeah! I like that video.Thanks!!'
          },
  
  
  
     ]
  )

  onMounted(()=> {
    console.log('Conmments');
  });
  </script>
  
  <style lang="scss" scoped>
  .wrapp-contaioner{
    font-family: sans-serif;
    display: grid;
    grid-template-columns: repeat(1,800px);
    gap: 20px;
    justify-content: center;
    align-items: center;
    margin-top: 5px;
  }

  </style>