<script setup>
import BurgerMenuIcon from "@/components/UI/BurgerMenuIcon.vue";
const getLinkEffect = (num) => `/images/effects/effect${num}.jpg`;
</script>

<template>
  <div class="layout_container">
    <div class="layout_block">
      <h1 class="adaptive_title">Layout Optimization</h1>
      <div class="layout section_layout">
        <div class="header">
          <h2>LOGO</h2>
          <ul class="list">
            <li>Main</li>
            <li>Products</li>
            <li>About</li>
            <li>Contacts</li>
          </ul>
          <h2>TelePhone: 1324-132-48</h2>
          <div class="burger">
            <BurgerMenuIcon color="white" />
          </div>
        </div>
        <!-- CONTENT -->
        <div class="content_adaptive">
          <div class="cart" v-for="(value, i) in ([].length = 5)" :key="i">
            <img class="cart_image" :src="getLinkEffect(i)" alt="" />
            <div>
              <h1 class="title">Заголовок</h1>
              <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et debitis fuga, suscipit non quidem nostrum aut recusandae commodi maxime exercitationem nisi repellendus iure</p>
            </div>
          </div>
          <div class="cart">
            <img class="cart_image" :src="getLinkEffect(2)" alt="" />
            <div class="decriptions">
              <h1 class="title">Заголовок</h1>
              <p class="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et debitis fuga, suscipit non quidem nostrum aut recusandae commodi maxime exercitationem nisi repellendus iure cumque nam, explicabo sequi amet
                quas perspiciatis deleniti! Quas ipsam autem harum. Nobis animi beatae inventore nisi quo dignissimos facere alias ab ducimus ex, ipsa nesciunt temporibus.
              </p>
            </div>
          </div>
        </div>

        <div class="sidebar">
          <h3>News</h3>
          <div class="form">
            <input type="text" placeholder="Email" />
            <button class="btn">Subscribe</button>
          </div>
        </div>

        <div class="footer">
          <h3>FOOTER</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* Layout Optimization */

.layout_container {
  width: 100%;
}

.burger {
  display: none;
}
.cart .cart_image {
  object-fit: cover;

  height: 100%;
  width: 100%;
}
.cart .decriptions {
  overflow: hidden;
}
.optimize_image {
  object-fit: cover;

  height: 100%;
}
.section_layout {
  width: 100%;
  height: 100%;
  padding: 10px;
  margin: auto;
  margin-bottom: 20px;
}
.layout {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, auto);
  grid-auto-rows: 200px;
  gap: 10px;
}
.header {
  grid-row: 1;
  grid-column: span 3;

  color: aliceblue;
  display: grid;
  grid-template-columns: auto 1fr auto;

  padding: 10px;
}
.header h2 {
  background-color: azure;
  color: black;
  padding: 10px;
}
.header .list {
  display: flex;
  justify-content: center;
  gap: 20px;

  margin: 10px 0;
}
.content_adaptive {
  grid-row: 2;
  grid-column: 1/3;

  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, auto));
  gap: 20px;
}

.sidebar {
  padding: 20px;
  color: azure;
}
.sidebar .form {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 10px;
}
.sidebar .btn {
  padding: 10px;
  background-color: aliceblue;
  color: black;
}
.sidebar input {
  background: azure;
}
.footer {
  grid-column: 1 /-1;
  color: azure;
  display: flex;
  justify-content: center;
  align-items: center;
}
.footer h3 {
  font-size: 3.5vh;
}

.cart {
  padding: 10px;
  background-color: beige;
  display: grid;
  grid-template-rows: 200px;
  gap: 10px;
}
.cart .title {
  font-weight: 800;
}
.cart .text {
  font-size: 1.2rem;
}

.header,
.content_adaptive,
.sidebar,
.footer {
  background-color: var(--color-darkBlue);
}

@media (max-width: 1200px) {
  .section_layout {
    max-width: 1000px;
  }
  .content_adaptive {
    grid-template-columns: 1fr;
  }
  .cart {
    grid-template-columns: 1fr 2fr;
    grid-auto-rows: auto;
  }
}

@media (max-width: 1000px) {
  .cart {
    grid-template-columns: 1fr;
    grid-template-rows: 40vw;
    grid-auto-rows: auto;
  }
  .cart .title {
    font-size: 3.5vh;
  }

  .sidebar {
    grid-column: span 3;
  }
  .content_adaptive {
    grid-column: 1 / -1;
  }
}
@media (max-width: 900px) {
  .header {
    top: 0;
    position: sticky;
    grid-template-columns: repeat(3, auto);
    justify-content: space-between;
  }
  .header .list {
    display: none;
  }
  .burger {
    display: block;
  }
}
</style>
