<template>
  <div class="wrapper-autofill">
    <h2 class="heading-2">Правильный Грид LayOut 1</h2>

    <div class="grid-container grid-container-fill">
      <div class="grid-container-element header">Header</div>
      <div class="grid-container-element bodyBlock">
        <div class="grid-container-element sidebar">SideBar</div>
        <div class="grid-container-element contentblock">
          <div class="grid-container-element article">
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam dicta optio repellat fugit molestias debitis voluptatum ullam. Ab, omnis harum.</span>
          </div>

          <div class="grid-container-element info">
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam dicta optio repellat fugit molestias debitis voluptatum ullam. Ab, omnis harum.</span>
          </div>
        </div>
      </div>

      <div class="grid-container-element footer">Footer</div>
    </div>
    <div class="testwrap">
      <div class="test">Lorem ipsum dolor</div>
      <div class="test">Lorem ipsum dolor</div>
      <div class="test">Lorem ipsum dolor</div>
      <div class="test">Lorem ipsum dolor</div>
      <div class="test">Lorem ipsum dolor</div>
      <div class="test">Lorem ipsum dolor</div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.testwrap {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}
.contentblock span {
  display: block;
  width: 200px;
}

.grid-container {
  display: grid;
  background-color: #fff4e6;

  &-element {
    background-color: #ffd8a8;
    border: 2px solid #ffa94d;
    border-radius: 5px;

    //color: #fff;
  }
}
.grid-container-fill {
  /* grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
           grid-template-rows: repeat(4, 65px);
           grid-column-gap: 2rem;
           grid-row-gap: 1rem; */

  column-gap: 5px;
  row-gap: 1rem;
  // 2 строки
  grid-template-rows:
    [headerBlock] 100px
    [bodyBlock] auto
    [footer] 100px;
  grid-template-columns:
    [left-gutter] 1fr
    [sidebar] minmax(300px, 4fr)
    [contentBlock] minmax(300px, 8fr)
    [rigth-gutter] 1fr;
}

.header {
  // координаты блока
  // блок header распологается в строке headerBlock
  grid-row: headerBlock;
  // блок header распологается в колонках  от sidebar до  contentBlock
  grid-column: left-gutter / right-gutter;
}

.bodyBlock {
  grid-row: bodyBlock;
  grid-column: left-gutter / right-gutter;

  display: grid;
  //блоки равномерно растягиваются по размеру
  //если блок становится меньше 500 идет перенос на другую строку
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
}

.footer {
  grid-row: footer;
  grid-column: left-gutter / right-gutter;
}

.contentblock {
  display: grid;
  //  так как окончатльный размер блока bodyBlock  500px ток нужно правильно расчитать размер блока contentblock чтобы при сжимании
  // происходил перенос
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
}
</style>
