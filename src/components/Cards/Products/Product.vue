<template>
  <div class="product">
    <div class="intro">
      <div class="intro-img">
        <img :src="product.img" :alt="product.name" />
      </div>
      <h3>{{ product.name }}</h3>
      <p>{{ product.desctiption }}</p>
      <h6>{{ product.price }}</h6>
      <ul>
        <li><font-awesome-icon icon="fa-regular fa-star-half-stroke" class="checked fa" /></li>
        <li><font-awesome-icon icon="fa-regular fa-star-half-alt" class="checked fa" /></li>
        <li><font-awesome-icon icon="fa-regular fa-star" class="checked fa" /></li>
      </ul>
    </div>
    <button class="btn">Buy Now</button>
  </div>
</template>

<script setup>
const props = defineProps({
  product: {
    type: Object,
    default: {},
  },
  bgColor: {
    type: String,
    default: "#2183a2",
  },
});
</script>

<style lang="scss" scoped>
.product {
  border-radius: 20px;
  background: #fff;
  text-align: center;
  display: grid;
  gap: 5px;
  box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.5);
  transition: 0.5s ease-in-out;
  &:hover {
    transform: translateY(20px);
  }
  h3 {
    text-align: center;
    font-size: 25px;
    margin: 0;
    padding-top: 10px;
  }
  h6 {
    text-align: center;
    font-size: 22px;
    width: 100%;
    margin: 0;
    padding-top: 10px;
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    padding-top: 0;
  }
}
.fa {
  font-size: 27px;
  transition: 0.4s;
  &:hover {
    transform: scale(1.3);
    transition: 0.6s;
  }
}

.checked {
  color: #ff9f43;
}
.intro {
  padding: 2rem 1rem 0rem 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  &-img {
    width: 200px;
    height: 200px;
  }

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }
}
.btn {
  background: v-bind(bgColor);
  text-align: center;
  font-size: 25px;
  color: #fff;
  width: 100%;
  padding: 15px;
  border: 0;
  outline: none;
  cursor: pointer;
  margin-top: 5px;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
}
</style>
