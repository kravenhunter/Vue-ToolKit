<template>
  <div class="wrap-body">
    <div class="darkclock">
      <div class="hour">
        <div class="hr"></div>
      </div>
      <div class="min">
        <div class="mn"></div>
      </div>
      <div class="sec">
        <div class="sc"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  const deg = 6; // сдвиг на 6 px
  const hr = document.querySelector(".hr");
  const mn = document.querySelector(".mn");
  const sc = document.querySelector(".sc");

  setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30; // 30 * 1(hr) you get 30 degree,. if you have 6hr just multiply 6 by 30 and you have 180 degree , so half a circle
    let mm = day.getMinutes() * deg; // расчитываем положение минутной стрелки со сдвигом на 6 позиций
    let ss = day.getSeconds() * deg;
    hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
  });
});

// document.querySelector('.hr').style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
// document.querySelector('.mn').style.transform = `rotateZ(${mm}deg)`;
// document.querySelector('.sc').style.transform = `rotateZ(${ss}deg)`;
</script>

<style lang="scss" scoped>
.wrap-body {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 720px;
  height: 620px;
  background: #091921;
}
.darkclock {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 350px;
  height: 350px;
  background: url("@/assets/img/clock.png");
  background-size: cover;
  border: 4px solid #091921;
  border-radius: 50%;
  box-shadow: 0 -15px 15px rgba(255, 255, 255, 0.05), inset 0 -15px 15px rgba(255, 255, 255, 0.05), 0 15px 15px rgba(0, 0, 0, 0.3), inset 0 15px 15px rgba(0, 0, 0, 0.3);
}
.darkclock:before {
  content: "";
  position: absolute;
  width: 15px;
  height: 15px;
  background: #fff;
  border-radius: 50%;
  z-index: 10000;
}
.darkclock .hour,
.darkclock .min,
.darkclock .sec {
  position: absolute;
}
.darkclock .hour,
.hr {
  width: 160px;
  height: 160px;
}
.darkclock .min,
.mn {
  width: 190px;
  height: 190px;
}
.darkclock .sec,
.sc {
  width: 230px;
  height: 230px;
}
.hr,
.mn,
.sc {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  border-radius: 50%;
  padding-bottom: 65px;
}
.hr:before {
  content: "";
  position: absolute;
  width: 8px;
  height: 80px;
  background: #ff105e;
  z-index: 10;
  border-radius: 6px 6px 0 0;
}
.mn:before {
  content: "";
  position: absolute;
  width: 4px;
  height: 90px;
  background: #fff;
  z-index: 11;
  border-radius: 6px 6px 0 0;
}
.sc:before {
  content: "";
  position: absolute;
  width: 2px;
  height: 150px;
  background: #fff;
  z-index: 12;
  border-radius: 6px 6px 0 0;
}
</style>
