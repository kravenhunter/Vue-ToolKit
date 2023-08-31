<template>
  <div class="wrap-loader">
    <div class="loader">
      <span style="--i: 1"></span>
      <span style="--i: 2"></span>
      <span style="--i: 3"></span>
      <span style="--i: 4"></span>
      <span style="--i: 5"></span>
      <span style="--i: 6"></span>
      <span style="--i: 7"></span>
      <span style="--i: 8"></span>
      <span style="--i: 9"></span>
      <span style="--i: 10"></span>
      <span style="--i: 11"></span>
      <span style="--i: 12"></span>
      <span style="--i: 13"></span>
      <span style="--i: 14"></span>
      <span style="--i: 15"></span>
      <span style="--i: 16"></span>
      <span style="--i: 17"></span>
      <span style="--i: 18"></span>
      <span style="--i: 19"></span>
      <span style="--i: 20"></span>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.wrap-loader {
  display: flex;
  justify-content: center;
  align-items: center;
  // min-height: 100vh;
  height: 700px;
  background: #042104;
  animation: animateBg 10s linear infinite;
}
@keyframes animateBg {
  0% {
    filter: hue-rotate(0deg);
  }
  100% {
    filter: hue-rotate(360deg);
  }
}
.wrap-loader .loader {
  position: relative;
  width: 120px;
  height: 120px;
}
.wrap-loader .loader span {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transform: rotate(calc(18deg * var(--i)));
}

.wrap-loader .loader span::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: #00ff0a;
  box-shadow: 0 0 10px #00ff0a, 0 0 20px #00ff0a, 0 0 40px #00ff0a, 0 0 60px #00ff0a, 0 0 80px #00ff0a, 0 0 100px #00ff0a;
  animation: animate 2s linear infinite;
  //добавляем задержку к каждому блоку , всвяязи с чем происходит изчезновение блока с задержой
  animation-delay: calc(0.1s * var(--i));
}

@keyframes animate {
  0% {
    // масштаб объекта- виден
    transform: scale(1);
  }
  80%,
  100% {
    // масштаб объекта- не виден
    transform: scale(0);
  }
}
</style>
