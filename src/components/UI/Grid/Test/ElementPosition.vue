<template>
  <div class="child-wrap">
    <div class="elements-wrap">
      <h4>H4- Lorem, ipsum dolor.</h4>
      <span>Span -lorem</span>
      <a href="№">LINK</a>
    </div>
    <br />
    <br />
    <div class="decription">
      <h4>Отцентрированные элементы div</h4>
      <span>
        .wrapper{ <br />

        display: grid;<br />
        grid-template-columns:1fr;<br />
        width: 100%;<br />
        max-height: 100%;<br />
        row-gap: 15px;<br />
        }<br />
        .wrapper-element h4{<br />
        justify-self: center;<br />
        align-self: start;<br />
        }<br />
        .wrapper-element span{<br />
        justify-self: center;<br />
        align-self: start;<br />

        }<br />
        .wrapper-element a{<br />
        justify-self: center;<br />
        align-self: start;<br />
        padding: 20px 55px;<br />
        border-radius: 50px;<br />
        }<br />
      </span>
    </div>
    <div class="elements-wrap2">
      <h4>H4- Lorem, ipsum dolor.</h4>
      <span>Span -lorem</span>
      <a href="№">LINK</a>
    </div>
    <div class="decription">
      <h4>Заличные позиции элементы div</h4>
      <span>
        .wrapper2{ <br />
        display: grid;<br />
        grid-template-columns:1fr;<br />
        grid-template-rows:repeat(3,100px); width: 100%;<br />
        max-height: 100%;<br />
        margin-top: 50px;<br />
        }<br />
        .wrapper-element2 h4{<br />

        justify-self: center;<br />
        align-self: start;<br />
        }<br />
        .wrapper-element2 span{<br />
        justify-self: end;<br />
        align-self: start;<br />

        }<br />
        .wrapper-element2 a{<br />
        justify-self: center;<br />
        align-self: start;<br />
        padding: 20px 55px;<br />
        border-radius: 50px;<br />
        }<br />
      </span>
    </div>

    <div class="title-wrapper">
      <a href="#" v-for="(el, i) in navigations" :key="i">{{ el }}</a>
    </div>

    <div class="button">
      <button @click="btnHandler">Button 1</button>
    </div>
  </div>
</template>

<script setup>
const navigations = ["NEWS", "SERVICES NEWS NEWS NEWS NEWSNEWS NEWSNEWSNEWS NEWS NEWS NEWS NEWSNEWSNEWS NEWS NEWS NEWS NEWS NEWS", "TOURIZM", "ABOUT"];

let compose = function (functions) {
  const counter = (el) => {
    let result = el;
    for (let index = functions.length - 1; index > -1; index--) {
      result = functions[index](result);
    }
    return result;
  };
  /* let resultFunc = functions.reduce( (acc, cur) => acc  ) */
  return function (x) {
    return counter(x);
  };
};

let compose2 = function (functions) {
  const counter = (el) => {
    //debugger;
    if (!functions.length) return el;

    functions.reverse();

    el = functions.reduce((acc, num) => (acc = num(acc)), el);
    return el;
  };
  /* let resultFunc = functions.reduce( (acc, cur) => acc  ) */
  return function (x) {
    return counter(x);
  };
};

let resArr = (num) => {
  let resultArr = [];
  let arr = [1, 2, 3, 4, 5];

  while (arr.length) {
    resultArr.push(arr.splice(index, num));
  }
  return resultArr;
};

const btnHandler = () => {
  const btnblock = document.querySelector(".button");
  const button1 = btnblock.querySelector("button");
  btnblock.removeChild(button1);
  const button2 = document.createElement("button");
  button2.innerText = "Button 2";
  const button3 = document.createElement("button");
  button3.innerText = "Button 3";

  btnblock.appendChild(button2);
  btnblock.appendChild(button3);

  // const fn = compose2([x => x + 1, x => 2 * x])
  const fn = compose2([]);
  console.log(fn(4)); // 9
  resArr(3);
};

//onMounted();
</script>

<style lang="scss" scoped>
.title-wrapper {
  display: grid;

  grid-template-columns: repeat(4, 1fr);
  column-gap: 35px;

  justify-content: space-between;
}
.title-wrapper a {
  padding: 20px 10px;
  background-color: #eebb85;
  color: #fcfcfc;
  text-align: center;
}

.decription h4,
span {
  background-color: #fcfcfc;
}

.child-wrap * {
  background-color: #fff4e6;
}
.elements-wrap {
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  max-height: 100%;
  row-gap: 15px;
}
.elements-wrap * {
  border: 2px solid #ffa94d;
}
.elements-wrap h4 {
  justify-self: center;
  align-self: start;
}
.elements-wrap span {
  justify-self: center;
  align-self: start;
}
.elements-wrap a {
  justify-self: center;
  align-self: start;
  padding: 20px 55px;

  border-radius: 50px;
}

.elements-wrap2 {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 100px);
  width: 100%;
  max-height: 100%;
  margin-top: 50px;
}
.elements-wrap2 * {
  border: 2px solid #ffa94d;
}
.elements-wrap2 h4 {
  justify-self: center;
  align-self: start;
}
.elements-wrap2 span {
  justify-self: end;
  align-self: start;
}
.elements-wrap2 a {
  justify-self: center;
  align-self: start;
  padding: 20px 55px;
  border-radius: 50px;
}
</style>
