<template>
    <div class="wrapp-body">
      <div class="wrapp-content">
            <Product v-for="element in products" 
                        :key="element.name"
                        :product="element"
                        :bgColor="element.byColor"
                        />
        </div>
    </div>
  </template>
  
  <script setup>
  import {ref} from 'vue'
  import Product from '@/components/Cards/Products/Product.vue'
  
  const products = ref(
     [
         {
          name: 'VideoRegostrator',
          href: '/VideoRegostrator',
          img: 'src/assets/img/BLVC22007_06.jpg',
          price: '$100',
          byColor: '#2183a2',
          desctiption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias inventore atque voluptas!'
          },
          {
          name: 'SystemClock',
          href: '/SystemClock',
          img:'src/assets/img/clock2.jpg',
          price: '$500',
          byColor: '#3b3e6e',
          desctiption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias inventore atque voluptas!'
          },
          {
          name: 'HandClock',
          href: '/HandClock',
          img:'src/assets/img/clock_1.jpg',
          price: '$200',
          byColor: '#0b0b0b',
          desctiption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias inventore atque voluptas!'
          },
          {
          name: 'System Count Work Time',
          href: '/SystemCountWorkTime',
          img:'src/assets/img/D22F01_1.jpg',
          price: '$400',
          byColor: '#ff9f43',
          desctiption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias inventore atque voluptas!'
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
      grid-template-columns: repeat(auto-fill, minmax(295px, 300px));
      grid-template-rows: 550px;
      gap: 15px;

  }
 
   
  </style>