<script setup>
import { ref } from "vue";

// Создаем пропсы и задаем входные параметры
const props = defineProps({
  openSidebar: {
    type: Boolean,
    required: true, // указываем что параметр обязателен
  },
});

// Настроить динамическое извлечение названий файлов vue из папки и также  в роутинге
const links = ref([
  { name: "Adaptive", href: "/adaptive" },
  { name: "Transitions", href: "/transitions" },
  { name: "EditorTab", href: "/editors" },
  { name: "Accordions", href: "/accordions" },
  { name: "Accordions", href: "/accordions" },
  { name: "Animation", href: "/animation" },
  { name: "Animation NavBars", href: "/navbars" },
  { name: "ButtonConfig", href: "/buttonconfig" },
  { name: "CheckBox & Events", href: "/checkbox" },
  { name: "Grid & Events", href: "/grid" },
  /*       {name: 'Flex', href: '/flex'}, */
  { name: "RadioButton", href: "/radiobutton" },
  { name: "ProgressBar", href: "/progressbar" },
  { name: "Forms", href: "/forms" },
  { name: "Tabs-Slots", href: "/tabs" },
  { name: "Tables", href: "/table" },
  { name: "Cards Page", href: "/cards" },
  { name: "Comments", href: "/comments" },
  /*        {name: 'Paralax', href: '/paralax'},
       {name: 'List', href: '/canvas'},
       {name: 'Tougle', href: '/tougle'},
       {name: 'Animation', href: '/anime'},
       {name: 'Images', href: '/image'},
       {name: 'Canvas', href: '/canvas'}, */
]);
</script>

<!-- доп класс sidebar_isopen добавляется тогда когда openSidebar = true-->
<!--можно записать так  {sidebar_isopen: openSidebar === true}] -->
<template>
  <div :class="['sidebar', { sidebar_isopen: openSidebar }]">
    <router-link class="sidebar__link" v-for="link in links" :key="link.name" :to="link.href">{{ link.name }}</router-link>
  </div>
</template>
<style lang="scss" scoped>
.sidebar {
  left: 0;
  top: 62px;
  height: 100%;
  background: #fff;
  position: fixed;
  width: 250px;
  padding: 20px;
  transition: 0.2s;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.07);
  transform: translateX(-250px);
  //sidebar_isopen
  &_isopen {
    transform: translateX(0px);
  }
  &__link {
    display: block;
    border-radius: 12px;
    border: 2px solid #fff;
    transition: 0.2s;
    font-weight: bold;
    margin-bottom: 10px;
    &:hover {
      color: var(--primary-hover);
    }
  }
}
</style>
