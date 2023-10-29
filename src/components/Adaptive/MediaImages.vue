<script setup>
const getLinkEffect = (num) => `/images/effects/effect${num}.jpg`;
</script>
<template>
  <div class="image_container">
    <h1 class="adaptive_title">Image Optimization</h1>
    <div class="test_image">
      <img class="optimize" :src="getLinkEffect(1)" alt="" />
    </div>

    <div class="image_adaptive section">
      <div class="block" v-for="(value, i) in ([].length = 5)" :key="i">
        <img class="optimize" :src="getLinkEffect(i)" alt="" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.adaptive_title {
  font-size: 4.5vw;
}
.section {
  max-width: 1200px;
  height: 100%;
  padding: 10px;
  margin: auto;
  margin-bottom: 20px;
}

/* Image adaptive */
.test_image {
  width: 100%;
  height: 300px;

  padding: 10px;
  background-color: var(--color-darkBlue);
  margin-bottom: 10px;
}
.optimize {
  object-fit: cover;

  width: 100%;
  height: 100%;
}
.image_adaptive {
  background-color: var(--color-darkBlue);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-content: start;
  gap: 10px;
}

.block {
  width: 100%;
  height: 20vh;
}

@media (max-width: 1000px) {
  .image_adaptive {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 768px) {
  .image_adaptive {
    grid-template-columns: 1fr;
  }
  .block {
    height: 40vw;
  }
  .adaptive_title {
    font-size: 4.5vw;
  }
}
@media (max-width: 480px) {
  .image_adaptive {
    width: 96vw;
  }
  .adaptive_title {
    font-size: 6.5vw;
  }
}
</style>
