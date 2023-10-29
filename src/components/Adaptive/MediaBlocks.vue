<template>
  <div class="adaptive">
    <h1 class="adaptive_title">@media - Медиа запросы</h1>
    <div class="section_adaptive section">
      <div class="main_section">
        <h1>Main</h1>
      </div>
      <div class="side_bar">Side Bar</div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.adaptive_title {
  font-size: 50px;
  font-weight: 900;
}
.section_adaptive {
  display: grid;
  grid-template-columns: 1fr 300px;
  grid-template-rows: 60vh;
  grid-auto-rows: 100px;
  gap: 15px;
  color: aliceblue;
}
.section_adaptive div {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-darkBlue);
}

@media screen and (max-width: 1200px) {
  .section_adaptive {
    width: 1000px;
    grid-template-columns: 1fr 280px;
  }
}
@media (max-width: 1000px) {
  .section_adaptive {
    width: 768px;
    grid-template-columns: 1fr 250px;
  }
}
@media (max-width: 768px) {
  .adaptive_title {
    font-size: 4.5vw;
  }
  .section_adaptive {
    width: 480px;
    grid-template-columns: 1fr;
  }
}
@media (max-width: 480px) {
  .adaptive_title {
    font-size: 6.5vw;
  }
  .section_adaptive {
    width: 100%;
  }
}
</style>
