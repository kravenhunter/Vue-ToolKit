<template>
    <div class="wrapper">
        <div class="accrodion-1">
<!--             <div class="message"  :class="accordionClasses">
                <div class="message-header" @click="toggleClick">
                   Label
                </div>
                <div class="message-body">
                    <div class="message-content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                           Dolores, error soluta maxime, aliquam quam quibusdam reiciendis,
                           aliquid debitis magni nihil ad eum blanditiis. Temporibus fuga itaque,
                           quam, corporis et ea sequi amet nihil aliquam ipsum accusantium dolore
                           minus debitis voluptates excepturi harum quos molestiae tenetur natus
                           a maiores delectus officiis? Sapiente quod incidunt placeat iure possimus
                           molestiae, velit neque voluptatum?</p>
                    </div>
                </div>
            </div> -->
            <div class="contentBox" v-for=" el in elements" :key="el.id" :id="el.id" :class="accordionClasses2">
                <div class="label" @click="toggleAccrodion(el.id)"  >
                    {{el.name}}
                </div>
                <div class="contentBox-content" >
                    <div class="accrodion-content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                           Dolores, error soluta maxime, aliquam quam quibusdam reiciendis,
                           aliquid debitis magni nihil ad eum blanditiis. Temporibus fuga itaque,
                           quam, corporis et ea sequi amet nihil aliquam ipsum accusantium dolore
                           minus debitis voluptates excepturi harum quos molestiae tenetur natus
                           a maiores delectus officiis? Sapiente quod incidunt placeat iure possimus
                           molestiae, velit neque voluptatum?</p>
                    </div>
                </div>
            </div>

<!--                 <div class="contentBox"  :class="accordionClasses">
                        <div class="label" @click="toggleClick"   >
                           Label
                        </div>
                        <div class="contentBox-content" >
                            <div class="accrodion-content">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Dolores, error soluta maxime, aliquam quam quibusdam reiciendis,
                                aliquid debitis magni nihil ad eum blanditiis. Temporibus fuga itaque,
                                quam, corporis et ea sequi amet nihil aliquam ipsum accusantium dolore
                                minus debitis voluptates excepturi harum quos molestiae tenetur natus
                                a maiores delectus officiis? Sapiente quod incidunt placeat iure possimus
                                molestiae, velit neque voluptatum?</p>
                            </div>
                        </div>
                     </div> -->

        </div>
    </div>    
</template>

<script setup>
import {ref, computed} from 'vue'
const elements = ref([
{
          id: 1,
         
          name: 'List One',
          isOpen:false       
         
          },
          {
           
            id: 2,
            
            name: 'List Two',      
            isOpen:false  
          },
          {
          
            id: 3,
           name: 'List Three',      
           isOpen:false  
          },
])

const isOpen = ref(false);
const accordionClasses = computed(() => {

        return  { 'is-open': isOpen.value};
});

const accordionClasses2 = computed(() => {
   
return  { 'is-open': isOpen.value };
});

const toggleClick = () => {
    isOpen.value = !isOpen.value
    console.log(' isOpen.value',  isOpen.value);
}
/* const isOpen = ref(false); */
const toggleAccrodion = (id) => {
    console.log('id');
    /* const inx = elements.value.findIndex(el => el.id === id );
    console.log('elements.value', elements.value);
    elements.value[inx].isOpen = !elements.value[inx].isOpen */
    //document.getElementById(id).classList.toggle('active')
   let isOpen =  document.getElementById(id).classList.contains('is-open')
  
   if (!isOpen) {
    document.getElementById(id).classList.add('is-open')
   
   }else{
    document.getElementById(id).classList.remove('is-open')
   }
   //isOpen.value =   !isOpen.value;
  //console.log('inx', inx);
};
</script>

<style lang="scss" scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
}
.wrapper{
   // display: flex;
   // justify-content: center;
   // align-items: center;
    min-height: 100vh;
 //  background: #bedfe8;
}
.message{
    max-width: 500px;
    &-header{
        background: #2694af;
        color: #fff;
        cursor: pointer;
    }
    &-body{
        padding: 0;
        max-height: 10rem;
        overflow: hidden;
        transition: 0.3s ease all;
    }
    &-content{
        padding: 20px;
    }
}

.is-closed .message-body{
    max-height: 0;
}
.accrodion-1{
    width: 800px;
}
.contentBox{
  
   
   margin: 10px 20px;
}
.label{
  position: relative;
   padding: 10px;
   background: #2694af;
   color: #fff;
  
   cursor: pointer;
}
.label::before{
    content: '+';
    position: absolute;
    top: 50%;
    right: 20px;
    // выравниваем позицию  и без кручения
    transform: translateY(-50%)  rotate(0deg);
    // добавляем анимацию применимую к этому блоку
    transition: all 0.5s ease ;
    font-size: 1.5em ;

}

.contentBox-content{
  
   background: #fff;
   max-height: 10rem;
    overflow: hidden;
 
/*     overflow: hidden;
   overflow-y: auto;
    ; */

     // добавляем анимацию применимую к этому блоку
    transition: 0.6s ;
}
.is-open .contentBox-content{
    max-height: 0;
}
.is-open .label::before{

    //Суть в том что при обращении к этому блоку будет происходит анимация(transition),так оно работает , инчае резкий переход
     // выравниваем позицию  и с кручения
    transform: translateY(-50%)  rotate(135deg);
     // добавляем анимацию применимую к этому блоку
    transition: all 0.5s ease ;
}

</style>