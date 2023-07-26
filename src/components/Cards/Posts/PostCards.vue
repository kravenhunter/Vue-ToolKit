<template>
    <div class="wrapp-body">
      <div class="wrapp-content">
 
  
      <PostCard v-for="element in posts" 
                  :key="element.name"
                   :post="element" 
                  />
        </div>
    </div>
  </template>
  
  <script setup>
  import {ref} from 'vue'
  import PostCard from '@/components/Cards/Posts/PostCard.vue'
  
  const posts = ref(
     [
         {
          name: 'Work',
          href: '/Work',
          title: 'How To Create UX Design by Adobe XD',
          img: 'src/assets/img/work.png',  
          profileImg: 'src/assets/img/profile2.jpg',
          author: 'Marques Brown',      
          date:'12 FEB 2023', 
          desctiption: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, facere impedit. Doloribus optio cumque fuga cum aliquam. Sed, laboriosam ipsam!'
          },
          {
          name: 'Tech',
          title: 'How To Create UX Design by Adobe XD',
          href: '/Tech',
          img:'src/assets/img/tech.jpg',
          profileImg: 'src/assets/img/profile.jpg',
          author: 'Marques Brown',
          date:'12 FEB 2023',
          desctiption: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, facere impedit. Doloribus optio cumque fuga cum aliquam. Sed, laboriosam ipsam!'
          },
          {
          name: 'Design',
          title: 'How To Create UX Design by Adobe XD',
          href: '/Design',
          img:'src/assets/img/design.png',
          profileImg: 'src/assets/img/profile3.jpeg',
          author: 'Marques Brown',
          date:'12 FEB 2023',
          desctiption: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, facere impedit. Doloribus optio cumque fuga cum aliquam. Sed, laboriosam ipsam!'
          },
  
  
  
     ]
  )
  </script>
  
  <style lang="scss" scoped>
  .wrapp-body{
    font-family: sans-serif;
  }
  .wrapp-content{
  /*           display: flex;
            flex-wrap: wrap
            width: 100%; */
      display: grid;
      justify-content: center;
      grid-template-columns: repeat(auto-fill, minmax(200px, 400px));
      grid-template-rows: 580px;
      gap: 15px;

  }
  </style>