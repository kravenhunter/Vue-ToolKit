<template>
  <div class="card">
    <img class="card-img" :src="image" :alt="name" />
    <div class="intro">
      <h1>{{ name }}</h1>
      <p>
        The <span>{{ name }}</span> {{ desk }}
      </p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  source: {
    type: String,
    reqired: true,
  },
  name: {
    type: String,
    reqired: true,
  },
  desk: {
    type: String,
    reqired: true,
  },
  image: {
    type: String,
    reqired: true,
  },
});
</script>

<style lang="scss" scoped>
.card {
  height: 300px;

  box-shadow: 5px 5px 20px black;
  position: relative;
  overflow: hidden;

  :hover {
    cursor: pointer;
  }
}
img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 5px;
  transition: 0.5s;
}
.intro {
  height: 70px;
  padding: 6px;
  box-sizing: border-box;
  position: absolute;
  background: rgb(27, 27, 27, 0.5);
  color: white;
  bottom: 0;
  transition: 0.5s;
}
.card:hover .intro {
  height: 220px;
  bottom: 0;
  background: black;
}
h1 {
  margin: 10px;
  font-size: 20px;
}
p {
  font-size: 20px;
  margin: 20px;
  visibility: hidden;
  opacity: 0;
}
span {
  font-weight: bold;
}

.card:hover p {
  opacity: 1;
  visibility: visible;
}
.card:hover img {
  transform: scale(1.1) rotate(-3deg);
}
</style>
