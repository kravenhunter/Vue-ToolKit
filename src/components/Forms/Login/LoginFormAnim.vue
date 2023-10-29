<template>
  <div class="wrap">
    <div class="leaves">
      <div class="set">
        <div><img src="@/assets/img/leaf_01.png" /></div>
        <div><img src="@/assets/img/leaf_02.png" /></div>
        <div><img src="@/assets/img/leaf_03.png" /></div>
        <div><img src="@/assets/img/leaf_04.png" /></div>
        <div><img src="@/assets/img/leaf_01.png" /></div>
        <div><img src="@/assets/img/leaf_02.png" /></div>
        <div><img src="@/assets/img/leaf_03.png" /></div>
        <div><img src="@/assets/img/leaf_04.png" /></div>
      </div>
    </div>
    <img src="@/assets/img/bg.jpg" alt="bg" class="bg" />
    <img src="@/assets/img/girl.png" alt="girl" class="girl" />
    <img src="@/assets/img/trees.png" alt="trees" class="trees" />
    <div class="login">
      <h2>Sign In</h2>
      <div class="inputBox">
        <input type="text" placeholder="Username" />
      </div>
      <div class="inputBox">
        <input type="text" placeholder="Password" />
      </div>
      <div class="inputBox">
        <input type="submit" value="Login" id="btn" />
      </div>
      <div class="group">
        <a href="#">Forget Password </a>
        <a href="#">Signup </a>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.wrap {
  font-family: "Poppins", sans-serif;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
}
.wrap .bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
}
.wrap .trees {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 100;
  pointer-events: none;
}
.wrap .girl {
  position: absolute;

  height: 50%;
  animation: animateGirl 15s linear infinite;
}
@keyframes animateGirl {
  0% {
    transform: translateX(calc(100% + 100vw));
  }

  50% {
    transform: translateX(calc(-100% - 100vw));
  }

  50.01% {
    transform: translateX(calc(-100% - 100vw)) rotateY(180deg);
  }
  100% {
    transform: translateX(calc(100% + 100vw)) rotateY(180deg);
  }
}

.wrap .login {
  position: relative;
  padding: 60px;
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(15px);
  border: 1px solid #fff;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  border-right: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.1);
}
.wrap .login h2 {
  position: relative;
  width: 100%;
  text-align: center;
  font-size: 2.5em;
  font-weight: 600;
  color: #8f2c24;
  margin-bottom: 10px;
}
.wrap .login .inputBox {
  position: relative;
}

.wrap .login .inputBox input {
  position: relative;
  width: 100%;
  padding: 15px 20px;
  outline: none;
  font-size: 1.25em;
  color: #8f2c24;
  border-radius: 5px;
  border: none;
  margin-bottom: 20px;
}
.wrap .login .inputBox::placeholder {
  color: #8f2c24;
}
.wrap .login .inputBox #btn {
  position: relative;
  border: none;
  outline: none;
  background: #8f2c24;
  color: #fff;
  cursor: pointer;
  font-size: 1.5em;
  font-weight: 500;
  transition: 0.5s;
}
.wrap .login .inputBox #btn:hover {
  background: #d64c42;
}
.wrap .login .group {
  display: flex;
  justify-content: space-between;
}
.wrap .login .group a {
  font-size: 1.5em;
  font-weight: 500;
  color: #8f2c24;
  text-decoration: none;
}
.wrap .login .group a:nth-child(2) {
  text-decoration: underline;
}
.leaves {
  position: absolute;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  pointer-events: none;
}
.leaves .set {
  position: absolute;
  inset: 0;
  pointer-events: none;
}
.leaves .set div {
  position: absolute;
  display: block;
}
.leaves .set div:nth-child(1) {
  left: 20%;
  animation: animateLeaf 20s linear infinite;
}
.leaves .set div:nth-child(2) {
  left: 50%;
  animation: animateLeaf 14s linear infinite;
}
.leaves .set div:nth-child(3) {
  left: 70%;
  animation: animateLeaf 12s linear infinite;
}
.leaves .set div:nth-child(4) {
  left: 5%;
  animation: animateLeaf 15s linear infinite;
}
.leaves .set div:nth-child(5) {
  left: 85%;
  animation: animateLeaf 18s linear infinite;
}
.leaves .set div:nth-child(6) {
  left: 90%;
  animation: animateLeaf 12s linear infinite;
}
.leaves .set div:nth-child(7) {
  left: 15%;
  animation: animateLeaf 14s linear infinite;
}
.leaves .set div:nth-child(8) {
  left: 60%;
  animation: animateLeaf 15s linear infinite;
}
@keyframes animateLeaf {
  0% {
    opacity: 0;
    top: -10%;
    transform: translateX(20px) rotate(0deg);
  }

  10% {
    opacity: 1;
  }

  20% {
    transform: translateX(-20px) rotate(45deg);
  }
  40% {
    transform: translateX(-20px) rotate(90deg);
  }
  60% {
    transform: translateX(20px) rotate(180deg);
  }
  80% {
    transform: translateX(-20px) rotate(45deg);
  }
  100% {
    transform: translateX(225px) rotate(45deg);
    top: 110%;
  }
}
</style>
