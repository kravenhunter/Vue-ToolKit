<template>
  <div class="main_container">
    <!--   <LoginDarkForm /> -->
    <div class="spinner">
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
      <span style="--i: 21"></span>
      <span style="--i: 22"></span>
      <span style="--i: 23"></span>
      <span style="--i: 24"></span>
      <span style="--i: 25"></span>
      <span style="--i: 26"></span>
      <span style="--i: 27"></span>
      <span style="--i: 28"></span>
      <span style="--i: 29"></span>
      <span style="--i: 30"></span>
      <span style="--i: 31"></span>
      <span style="--i: 32"></span>
      <span style="--i: 33"></span>
      <span style="--i: 34"></span>
      <span style="--i: 35"></span>
      <span style="--i: 36"></span>
      <span style="--i: 37"></span>
      <span style="--i: 38"></span>
      <span style="--i: 39"></span>
      <span style="--i: 40"></span>
      <span style="--i: 40"></span>
      <span style="--i: 41"></span>
      <span style="--i: 42"></span>
      <span style="--i: 43"></span>
      <span style="--i: 44"></span>
      <span style="--i: 45"></span>
    </div>
  </div>
</template>
<script setup></script>

<style lang="scss" scoped>
.main_container {
  background-color: rgba(43, 48, 53);
  display: grid;
  justify-content: center;
  align-content: center;
  width: 100%;
  height: 50vh;
  animation: animateBg 5s linear infinite;
}
@keyframes animateBg {
  0% {
    filter: hue-rotate(0deg);
  }
  100% {
    filter: hue-rotate(360deg);
  }
}
.main_container {
  & .spinner {
    position: relative;

    width: 120px;
    height: 120px;

    & span {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      transform: rotate(calc(8deg * var(--i)));
    }

    & span::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 3px;
      height: 15px;
      border-radius: 5%;
      rotate: calc(-45deg);
      background-color: #dee2e6;
      /*   box-shadow: 0 0 10px #dee2e6, 0 0 20px #dee2e6, 0 0 40px #dee2e6, 0 0 60px #dee2e6, 0 0 80px #dee2e6, 0 0 100px #dee2e6; */
      box-shadow: 0 0 5px #dee2e6;
      animation: animate 4.5s linear infinite;
      /*     
       animation: animate 0.5s linear infinite;*/
      animation-delay: calc(0.1s * var(--i));
    }
  }
}
@keyframes animate {
  0% {
    transform: scale(1);
  }

  60%,
  100% {
    transform: scale(0);
  }
}
</style>
