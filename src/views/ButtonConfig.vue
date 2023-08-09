<script setup>
//import ButtonCom from '@/components/Button.vue'
/* import Button from '@/components/Button.vue'

console.log(Button); */
//import AddTest from '@/components/UI/AddTest.vue'

const eventForButton = (event) => {
  console.log(event);
  alert("You clicked danger button");
};
</script>

<template>
  <div class="button_container">
    <!-- <add-test /> Компонент добавляется локально , без регистрации глобально -->

    <h1 class="heading-1">Button Configurations</h1>

    <div class="event_block block">
      <h2 class="heading-2">Events</h2>
      <div class="line">
        <!-- Вешаем на кастомное событие  @test вызов функции eventForButton-->
        <!-- В add-button  зарегистрировано это кастомное событие @test , которое будет ловится и вызывать уже фукнцию eventForButton -->
        <add-button label="@Click" color="danger" @test="eventForButton" />
      </div>
    </div>
    <div class="sizing_block">
      <h2 class="heading-2">Size</h2>
      <div class="flex">
        <add-button label="Button" fontSize="16px" />
        <add-button label="Button" fontSize="18px" />
        <add-button label="Button" fontSize="20px" />
        <add-button label="Button" fontSize="24px" />
      </div>
    </div>
    <div class="disable_block">
      <h2 class="heading-2">Dicabled</h2>
      <div class="line">
        <!-- Разные записи передачи одного и того же значения true через пропсы. Все работает одинаково
            На вкус-->
        <add-button label="Primary" color="primary" disabled />
        <add-button label="Secondary" color="second" :disabled="true" />
      </div>
    </div>
    <div class="colors_block">
      <h2 class="heading-2">Colors</h2>
      <div class="line">
        <add-button label="Primary" color="primary" />
        <add-button label="Secondary" color="second" />
        <add-button label="Success" color="success" />
        <add-button label="Info" color="info" />
        <add-button label="Warning" color="warning" />
        <add-button label="Danger" color="danger" />
      </div>
    </div>
    <div class="rounded_block">
      <h2 class="heading-2">Rounded</h2>
      <div class="line">
        <add-button label="Primary" color="primary" rounded />
        <add-button label="Secondary" color="second" :rounded="true" />
        <add-button label="Success" color="success" rounded />
        <add-button label="Info" color="info" :rounded="true" />
        <add-button label="Warning" color="warning" rounded />
        <add-button label="Danger" color="danger" :rounded="true" />
      </div>
    </div>
    <div class="outlined_block">
      <h2 class="heading-2">Outlined</h2>
      <div class="line">
        <add-button label="Primary" color="primary" outlined />
        <add-button label="Secondary" color="second" :outlined="true" />
        <add-button label="Success" color="success" outlined />
        <add-button label="Info" color="info" :outlined="true" />
        <add-button label="Warning" color="warning" outlined />
        <add-button label="Danger" color="danger" :outlined="true" />
      </div>
    </div>
    <div class="icons_block block">
      <h2 class="heading-2">Icons</h2>
      <div class="line">
        <add-button color="primary" icon="heart" disabled />
        <add-button color="second" icon="hand" />
        <add-button color="success" icon="address-book" outlined />
        <add-button color="info" icon="credit-card" />
        <add-button color="warning" icon="lemon" />
        <add-button color="danger" icon="hourglass" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.flex {
  display: grid;
  grid-template-columns: auto auto auto auto;
  align-items: end;
  column-gap: 10px;
}
.button_container {
  display: grid;
  justify-content: start;
}
.line {
  display: grid;
  grid-auto-columns: 150px;
  row-gap: 10px;
}
</style>
