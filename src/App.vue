<template>
  <div class="container">
    <div class="sidebar-toggle" @click="toggleMenu">&#5125;</div>
    <layout-header />
    <!-- можно так  <layout-sidebar  v-if="isOpenMenu"/>-->
    <!-- создаем property openSidebar которое хранит булевое значение isOpenMenu
      оно будет передаваться в layout-sidebar -->
    <layout-sidebar :openSidebar="isOpenMenu" />
    <!-- Отображаем content_full когда isOpenMenu !== true-->
    <div :class="['content', { content_full: !isOpenMenu }]">
      <div>
        <ul class="list">
          <li>
            <router-link :to="{ name: 'home' }">Home</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'about' }">About</router-link>
          </li>
        </ul>
      </div>
      <!-- Анимация из коробки  Vue 3 -->
      <!--     <router-view v-slot="{ Component, route }">
          
              <transition name="fade" mode="out-in">
                <component :is="Component" :key="route.path" />
              </transition>
          </router-view> -->

      <!-- Используем  библиотеку Animate.css  -->
      <div class="page"></div>
      <router-view v-slot="{ Component, route }">
        <transition :enter-active-class="route.meta.enterClass" :leave-active-class="route.meta.leaveClass">
          <component :is="Component" :key="route.path" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script setup>
// import HelloWorld from '@/components/HelloWorld.vue'
import { RouterView, RouterLink } from "vue-router";
import LayoutHeader from "@/components/layout/Header.vue";
import LayoutSidebar from "@/components/layout/SideBar.vue";
import { ref, onMounted } from "vue";
// Либа для плавного скролла
import { gsap } from "gsap-trial";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother.js";
import { ScrollTrigger } from "gsap-trial/ScrollTrigger.js";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
const arr = ref([]);

// Создаем межденый скрол
onMounted(async () => {
  let resData = await fetch("https://jsonplaceholder.typicode.com/posts");
  arr.value = await resData.json();

  console.log("app arr", arr.value);
  ScrollSmoother.create({
    //wrapper: "#smooth-wrapper",
    //content: " #smooth-content",
    wrapper: "#app",
    content: ".container",
  });
});

const isOpenMenu = ref(false);
const toggleMenu = () => {
  isOpenMenu.value = !isOpenMenu.value;
  // обращаемся к противоположному значение если isOpenMenu.value = афдыу
  // то значит теперь isOpenMenu.value = true  и наоборот при вызове функции toggleMenu она перезаписывает
  // isOpenMenu противоположным значением
};
</script>

<style lang="scss">
@import "@/styles/global.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
//Вход-выход неактивных компонентов
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateX(-30%); // При анимации изчезновения сдвигает  на 30% длины блок а потом удалять из видимости
}
//Вход активных компонентов
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s, transform 0.5s;
  //transition: opacity 0.5s, ease-out;
}
.page {
  position: relative;
  &-content {
    position: absolute;
  }
}

.list {
  list-style: none;
  display: flex;
  flex-wrap: wrap;

  li {
    margin-left: 5%;
  }
}
.content {
  max-width: 1400px;
  margin-left: 250px;
  padding: 30px;
  transition: 0.2s;
  &_full {
    margin-left: 0;
  }
}
.sidebar-toggle {
  position: fixed;
  left: 0;
  width: 15px;
  background: var(--primary);
  height: 100%;
  top: 62px;
  z-index: 1;
  cursor: pointer;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

// медиа запрос для мобильной версии
@media screen and (max-width: 1023px) {
  .content {
    margin-left: 0;
  }
}
</style>
