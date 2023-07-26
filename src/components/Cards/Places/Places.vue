<template>
  <div class="wrapp-body">
    <div class="wrapp-content">


    <Place v-for="element in spaces" 
                :key="element.name"
                :source="element.href"
                :name="element.name"
                :desk="element.desctiption"
                :image="element.img"
                />
      </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import Place from '@/components/Cards/Places/Place.vue'

const spaces = ref(
   [
       {
        name: 'Fujii',
        href: '/Fujii',
        img: 'src/assets/img/fuji-mountain.jpg',
        desctiption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias inventore atque voluptas!'
        },
        {
        name: 'Road',
        href: '/Road',
        img:'src/assets/img/fog_road_gloomy.jpg',
        desctiption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias inventore atque voluptas!'
        },
        {
        name: 'Venice',
        href: '/Venice',
        img:'src/assets/img/venice.jpg',
        desctiption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias inventore atque voluptas!'
        },

        {
          name: 'Work',
          href: '/Work',
          img: 'src/assets/img/work.png',
          desctiption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias inventore atque voluptas!'
          },
          {
          name: 'Tech',
          href: '/Tech',
          img:'src/assets/img/tech.jpg',
          desctiption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias inventore atque voluptas!'
          },
          {
          name: 'Design',
          href: '/Design',
          img:'src/assets/img/design.png',
          desctiption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias inventore atque voluptas!'
          },
  

   ]
)
</script>

<style lang="scss" scoped>
.wrapp-body{
  font-family: serif;
  box-sizing: border-box;
 
  display: flex;
  
  justify-content: center;
  align-items: center;

}
.wrapp-content{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: 15px;
}
</style>