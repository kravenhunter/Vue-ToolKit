<script setup>
import Comp from "@/components/Accordions/Vue/OneComponent.vue";
import UserIcon from "@/components/Icons/UserIcon.vue";
import { ref } from "vue";

const elements = ref([
  {
    id: 1,

    name: "List One",
    isOpen: false,
  },
  {
    id: 2,

    name: "List Two",
    isOpen: false,
  },
  {
    id: 3,
    name: "List Three",
    isOpen: false,
  },
]);

const isSHowMenu = ref(false);

const testShow = ref(true);
const toggleClick = () => {
  isOpen.value = !isOpen.value;
  console.log(" isOpen.value", isOpen.value);
};

const toggleAccrodion = (id) => {
  console.log("id");

  let isOpen = document.getElementById(id).classList.contains("is-open");

  if (!isOpen) {
    document.getElementById(id).classList.add("is-open");
  } else {
    document.getElementById(id).classList.remove("is-open");
  }
};
</script>
<template>
  <div class="wrapper">
    <div class="accrodion-1" v-for="(el, i) in elements" :key="i">
      <Comp :element="el" />
    </div>

    <div class="menu_container">
      <div class="wrap_menu">
        <div class="toggle_auth_menu">
          <div class="icon_btn" @click="isSHowMenu = !isSHowMenu"><UserIcon color="white" size="40" /></div>
          <ul>
            <li><add-button label="Sign In" color="dark" /></li>

            <li><add-button label="Join" color="dark" /></li>
          </ul>
        </div>

        <div class="toggle_test" :class="{ active_menu: isSHowMenu }">
          <ul>
            <li><add-button label="Profile" color="dark" /></li>

            <li><add-button label="Admin Panel" color="dark" /></li>
            <li><add-button label="Log Out" color="dark" /></li>
          </ul>
        </div>
      </div>

      <div class="other_menu_block">
        <div class="other_auth_menu">
          <div class="visible_wrapper">
            <div class="icon_btn" @click="testShow = !testShow"><UserIcon color="white" size="40" /></div>
            <ul>
              <li><add-button label="Sign In" color="dark" /></li>

              <li><add-button label="Join" color="dark" /></li>
            </ul>
          </div>

          <div class="accrod_menu_block" :class="{ is_closed: testShow }">
            <ul>
              <li><add-button label="Profile" color="dark" /></li>

              <li><add-button label="Admin Panel" color="dark" /></li>
              <li><add-button label="Log Out" color="dark" /></li>
            </ul>
          </div>
        </div>

        <p>
          Some content Here Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, error soluta maxime, aliquam quam quibusdam reiciendis, aliquid debitis magni nihil ad eum blanditiis. Temporibus fuga itaque,
          quam, corporis et ea sequi amet nihil aliquam ipsum accusantium dolore minus debitis voluptates excepturi harum quos molestiae tenetur natus a maiores delectus officiis? Sapiente quod incidunt placeat iure
          possimus molestiae, velit neque voluptatum?
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}
.menu_container {
  display: flex;
  gap: 20px;
}
.other_menu_block {
  & .other_auth_menu {
    position: relative;
    display: grid;
    & .visible_wrapper,
    ul {
      display: flex;
      gap: 20px;
    }
    & .visible_wrapper {
      & .icon_btn {
        cursor: pointer;
      }
    }
    & .accrod_menu_block {
      position: absolute;
      top: 50px;
      color: beige;
      background-color: black;

      border: 1px solid var(--color-orange);
      max-height: 40rem;
      overflow: hidden;
      transition: max-height 1s ease;
      & ul {
        display: grid;
        padding: 10px;
      }
      &.is_closed {
        max-height: 0;
        transition: max-height 0.6s ease;
      }
    }
  }
}
.other_menu_block {
  max-width: 300px;
  padding: 1em;
  background-color: black;
  display: grid;
  gap: 20px;
  & p {
    color: black;
    background-color: beige;
  }
}

.wrap_menu {
  position: relative;
  z-index: 50;
}
.wrapper {
  display: grid;
  gap: 20px;
  align-content: start;
  z-index: 50;

  min-height: 100vh;
}

.toggle_test {
  z-index: -100;
  max-width: 200px;
  position: absolute;
  top: -112px;
  padding: 20px;
  background: var(--second);
  color: #fff;

  transition: all 1.3s;
  opacity: 0;
  & ul {
    display: grid;
    gap: 20px;
    & li {
      list-style: none;
    }
  }
  &.active_menu {
    transform: translateY(100%);

    opacity: 1;
    z-index: -10;
  }
}
.toggle_auth_menu {
  max-width: 300px;

  padding: 1em;
  background-color: black;
  display: flex;
  gap: 20px;
  & .icon_btn {
    cursor: pointer;
  }
  & ul {
    display: flex;
    gap: 20px;
  }
}

.accrodion-1 {
  width: 800px;
}
</style>
