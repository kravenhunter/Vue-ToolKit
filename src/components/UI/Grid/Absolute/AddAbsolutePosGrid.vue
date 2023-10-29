<template>
  <div class="absolut">
    <br />
    <h2 class="heading-2">Absolute Position Group</h2>
    <div class="wrapper-abs">
      <div class="grid-absolut">
        <div class="wrapper-abs-element">Lorem ipsum dolor sit amet.</div>
        <div class="wrapper-abs-element">Lorem ipsum dolor sit amet.</div>
        <div class="wrapper-abs-element">Lorem ipsum dolor sit amet.</div>
        <div class="wrapper-abs-element">Этот блок абсолютно позиционирован.</div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.wrapper-abs {
  background-color: #fff4e6;
  transition: 0.5s;
  &-element {
    background-color: #ffd8a8;
    border: 2px solid #ffa94d;
    border-radius: 5px;
    padding: 20px;
    transition: 0.5s;
  }
}

.grid-absolut {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 200px;
  grid-gap: 20px;
  position: relative;

  :nth-child(4) {
    grid-column-start: 2;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 3;
    position: absolute;
    top: 40px;
    left: 40px;
  }
}
</style>
