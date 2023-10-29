<template>
  <div class="wrap-paralax" id="smooth-wrapper">
    <div class="content-wrapper" id="smooth-content">
      <header class="main-header">
        <div class="layers">
          <div class="layer_header">
            <div class="layers_caption">Welcome to Paralax</div>
            <div class="layers_title">Fairy Forest</div>
          </div>
          <div class="layer layers_base" style="background-image: url('src/assets/img/layer-base.png')"></div>
          <div class="layer layers_middle" style="background-image: url('src/assets/img/layer-middle.png')"></div>
          <div class="layer layers_front" style="background-image: url('src/assets/img/layer-front.png')"></div>
        </div>
      </header>
      <article class="main-article" style="background-image: url('src/assets/img/dungeon.jpg')">
        <div class="main-article_content">
          <h2 class="main-article_header">TO BE CONTINIED</h2>
          <p class="main-article_paragraph">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque possimus expedita iusto quos aut a! Officia, error quod sequi, corporis, quaerat consectetur ab aperiam voluptatum non at asperiores repellendus
            recusandae reiciendis nulla.
          </p>
        </div>
        <div class="copy">© WebDesign</div>
      </article>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

const wrapParalax = ref();
/* const scrolling = (e) => {
    const clientHeight = e.target.clientHeight
    const scrollHeight = e.target.scrollHeight
    const scrollTop = e.target.scrollTop
     
    if (scrollTop + clientHeight >= scrollHeight) {
      console.log('Yay!')
     
    } else {
        console.log('No!')
    }
  } */
onMounted(() => {
  wrapParalax.value = document.querySelector(".wrap-paralax");

  window.addEventListener("scroll", (e) => {
    //  console.log(e);
    // document.querySelector('.wrap-paralax').style.cssText += `--scrollTop: ${window.scrollY}px`;
    wrapParalax.value.style.cssText += `--scrollTop: ${window.scrollY}px`;
  });
});
</script>

<style lang="scss" scoped>

@font-face {
    font-family: raleway_f;
    src: url('@/assets/fonts/raleway-black.woff2');

}
@font-face {
    font-family: raleway_f;
    src: url('@/assets/fonts/raleway-regular.woff2');
    font-weight: 900;
}


.wrap-paralax{
    --transition: transform 0.75 cubic-bezier(0.075,0.500,0.000, 1.000);
   --scroll:var(--scrollTop);
    background-color: black;

    font-family: raleway_f sans-serif;
    line-height: 1.55;

}
.main-header{
    position: relative;

}
.main-header:after{
    content: '';
    position: absolute;
    z-index: 100;
    width: 100%;
    height: calc(var(--indexSize) / 0.175);
    background-image: url('src/assets/img/ground.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    bottom:calc(var(--indexSize) * -2.5);
}
.layers{
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    overflow: hidden;
    position: relative;
}
.layer{
    height: 100%;
    width: 100%;
    position: absolute;
    background-size: cover;
    background-position: center;
    will-change: transform;
   /*  данное свойство говорит браузеры  о том что этому классу */
  /*  уделить больше аппатных ресурсов, чтобы не было фризов, задержен и тд */
    z-index: 2;
    transition: var(--transition);
    /*  в данном случае применяется ко всем сло\ям  .layers_base layers_middle layers_front */
}

.layers_base{
transform: translate3d(0, calc(var(--scroll)/ 1.6), 0);

z-index: 0;
}
.layers_middle{
    transform: translate3d(0, calc(var(--scroll) / 2.5), 0);
}
.layers_front{
    transform: translate3d(0, calc(var(--scroll) / 5.7), 0);
}
.layer_header{
    z-index: 1;
    transform: translate3d(0, calc(var(--scroll) / 2), 0);
    transition: var(--transition);
    will-change: transform;
    text-transform: uppercase;
    font-weight: 900;
    color: #e7e7e0;
    text-shadow: 0 0 15px #9d822b;
}

.layers_title{
font-size: calc(var(--indexSize) * 2.5);
letter-spacing: calc(var(--indexSize) / 2.25);
}
.layers_caption{
    font-size: calc(var(--indexSize) / 1.175);
letter-spacing: calc(var(--indexSize) / 3.5);
margin-top:calc(var(--indexSize) * -1.75);
}

.main-article{
    --main-article-transform: transform: translate3d(0, calc(var(--scroll) / -7.5), 0);
    min-height: 100vh;
    color: #e7e7e0;
    ;
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    text-align: center;

}
.main-article_header{
    text-transform: uppercase;
    font-size:calc(var(--indexSize) * 1.8);
    letter-spacing: calc(var(--indexSize) / 7.5);
    transform: var(--main-article-transform);
    transition: var(--transition);
  will-change: transform;
}
.main-article_paragraph{
    max-width:calc(var(--indexSize) * 28);
    font-size:calc(var(--indexSize) * .9);
    margin-top: calc(var(--indexSize) / 1.25);
    transform: var(--main-article-transform);
    transition: var(--transition);
    will-change: transform;
}
.copy{
    position: absolute;
    bottom:calc(var(--indexSize) * 2.5);
    opacity: 1.45;
    font-size:calc(var(--indexSize) * 1.8);
    letter-spacing: calc(var(--indexSize) / 37.5);
}
.content-wrapper{
    will-change: transform;
}
</style>
