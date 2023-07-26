<template>
  <div class="navbar">
        <ul class="navigation" :class="toggle">
            <li v-for="el in navBar" :key="el">
                <a href="#">{{ el }}</a></li>
            <span class="toggleMenu"  @click="toggleClick"></span>
        </ul>
  </div>
</template>

<script setup>
import {ref,computed} from 'vue'

const isOpen = ref(false);
const toggle = computed(() => {

    return  {'active': isOpen.value }
})

const navBar = ['Home','About','Team','Services','Contacts']


//Вариант через  Api
const toggleClick = () => {
isOpen.value =  !document.querySelector('.navigation').classList.contains('active')

};

//Вариант с DOM
const toggleMenuClick = () => {
  document.querySelector('.navigation').classList.toggle('active');
 
}

//let toggleMenu = document.querySelector('.toggleMenu');
//let navigation = document.querySelector('.navigation');
//Там можно но в JS  но в script setup не работает 
/* toggleMenu.onclick = function() {
    document.querySelector('.navigation').classList.toggle('active');
} */
</script>

<style lang="scss" scoped>
//@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,900&display=swap');

.navbar{
     margin: 0;
     padding: 0;
     box-sizing: border-box;
     font-family: 'Poppins', sans-serif ;
     display: flex;
     justify-content: center;
     align-items: center;
     min-height: 100vh;
     background: linear-gradient(135deg, #e97e36, #673ab7);
}
.navigation{
    margin: 0;
    padding: 0;
    position: relative;    
    width: 60px;
    height: 60px;
    background: #fff;
    border-radius: 50%;
    border-radius: 60px;
    transition: 0.5s;
    transition-delay: 0.5s;
    box-shadow: 0 10px 15px rgba(0,0,0, 0.05);
    display: flex;
    align-items: center;
    justify-content: space-evenly;

}
.navigation li{
    list-style: none;
    transition: 0.5s;
    transform: scale(0);
}

.navigation.active li{
transition-delay: 0.75s;
display: flex;
transform: scale(1);
}
.navigation li a{
    text-decoration: none;
    color: #333;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    padding: 5px 15px;
    border-radius: 20px;
    transition: 0.5s;
}
.navigation li a:hover{
    background: #ff4181;
    color: #fff;
}
.navigation.active {
    width: 600px;

} 
.navigation .toggleMenu{
    position: absolute;
    width: 60px;
    height: 60px;
    background: #fff;
    border-radius: 50%;
    transition: 0.5s;       
    transition-delay: .4s;
    cursor:pointer;
    display: flex;
    align-items: center;
    justify-content: center;
   
}
.navigation.active .toggleMenu{
    background: #ff4181;
    transition-delay: 0s;
    transform: translateY(60px);
    width: 30px;
    height: 30px;
    box-shadow: 0 10px 15px rgba(0,0,0, 0.05);
}
.navigation .toggleMenu::before{

content: '';
position: absolute;
width: 30px;
height: 3px;
border-radius: 3px;
background: #333;
transform: translateY(-5px);
transition: 0.5s;
transition-delay: 0.5s;
}
.navigation .toggleMenu::after{
content: '';
position: absolute;
width: 30px;
height: 3px;
border-radius: 3px;
background: #333;
transform: translateY(5px);
transition: 0.5s;
transition-delay: 0.5s;
}
.navigation.active .toggleMenu::before{
  transition-delay: 0s;
 background: #fff;
transform: translateY(0px) rotate(45deg) scale(0.6);
}
.navigation.active .toggleMenu::after{
 transition-delay: 0s;
 background: #fff;
transform: translateY(0px) rotate(315deg) scale(0.6);
}
</style>