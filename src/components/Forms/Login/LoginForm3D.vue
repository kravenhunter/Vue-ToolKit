<template>
  <div class="container-login">
    <div class="box">
      <div class="cover"></div>
      <div class="shadow"></div>
      <div class="content-login">
        <div class="form">
          <h3 class="logo">
            <font-awesome-icon icon="fa-solid fa-key" />
          </h3>
          <h2>Sign In</h2>
          <div class="inputBox">
            <input type="text" class="inputField" required />
            <font-awesome-icon icon="fa-solid fa-user" class="icon" />
            <span>Username</span>
          </div>
          <div class="inputBox">
            <input type="password" class="inputField" required />
            <font-awesome-icon icon="fa-solid fa-lock" class="icon" />
            <span>Password</span>
          </div>
          <div class="links">
            <a href="#">
              <font-awesome-icon icon="fa-solid fa-question" />
              Forgot Password</a
            >
            <a href="#">
              <font-awesome-icon icon="fa-solid fa-user-plus" />
              Sign Up</a
            >
          </div>
          <div class="inputBox">
            <input type="submit" class="inputField" value="Login" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container-login {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: consolas;

  min-height: 100vh;
  overflow: hidden;
  background: #cfd1e1;
}
.container-login .box {
  position: relative;
  width: 400px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container-login .box::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 25px;
  height: 100%;
  background: linear-gradient(#fff, #fff, #e3e3e3);
  filter: blur(1px);
  z-index: 1;
}
.container-login .box::after {
  content: "";
  position: absolute;
  top: 1;
  right: -1px;
  width: 25px;
  height: 100%;
  background: #9d9d9d;
  filter: blur(1px);
  z-index: 1;
}
.container-login .box .shadow {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #eee;
}
.container-login .box .shadow::before {
  content: "";
  position: absolute;
  top: 0;
  left: calc(100% + 117px);
  width: 125%;
  height: 247%;
  background: linear-gradient(rgba(0, 0, 0, 0.075), transparent);

  transform: skewX(45deg);
}
.container-login .box .shadow::after {
  content: "";
  position: absolute;
  bottom: -200%;
  left: calc(100% + 100px);
  width: 100%;
  height: 200%;
  background: linear-gradient(rgba(0, 0, 0, 0.075), transparent);

  transform: skewX(45deg);
}
.cover {
  position: absolute;
  top: 0;
  left: -100px;
  width: 100px;
  height: 100px;
  background: #cfd1e1;
  z-index: 10;
}
.content-login {
  position: relative;
  width: 100%;
  height: 100%;
  background: linear-gradient(#dbdae1, #a3aaba);
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1), 15px 15px 15px rgba(0, 0, 0, 0.1), 20px 10px 20px rgba(0, 0, 0, 0.1), 50px 50px 80px rgba(0, 0, 0, 0.25), inset 3px 3px 2px #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.content-login .form {
  position: relative;
  width: 260px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.logo {
  width: 70px;
  height: 70px;
  background: #444;
  font-size: 1.75em;
  color: #fff;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}
.content-login .form h2 {
  font-size: 2em;
  color: #444;
  margin-bottom: 20px;
}

.content-login .form .inputBox {
  position: relative;
  width: 100%;
  margin-top: 30px;
}
.content-login .form .inputBox .inputField {
  position: relative;
  width: 100%;
  padding: 10px 0 10px 25px;
  font-size: 1.25em;
  background: transparent;
  box-shadow: none;
  border: 0;
  border-bottom: 3px solid #444;
  outline: none;
  color: #444;
}
.content-login .form .inputBox .icon {
  position: absolute;
  left: 0;
  bottom: 15px;
  font-size: 1.25em;
  color: #444;
}
.content-login .form .inputBox span {
  position: absolute;
  left: 0;
  padding: 10px 0 10px 25px;
  font-size: 1.25em;
  pointer-events: none;

  color: #444;
  transition: 0.5s;
}
.content-login .form .inputBox .inputField:focus ~ span,
.content-login .form .inputBox .inputField:valid ~ span {
  transform: translateY(-20px);
  font-size: 0.9em;
  background: #444;
  color: #fff;
  padding: 2px 4px;
}
.content-login .form .links {
  width: 100%;
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
}
.content-login .form .links a {
  color: #444;
  text-decoration: none;
}
.content-login .form .inputBox .inputField[type="submit"] {
  background: #444;
  color: #fff;
  cursor: pointer;
  padding: 10px;
}
.content-login .form .inputBox .inputField[type="submit"]:hover {
  background: #333;
}
</style>
