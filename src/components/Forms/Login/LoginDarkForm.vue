<template>
  <div class="login_container">
    <div class="form-signin w-100">
      <form>
        <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

        <div class="form-floating">
          <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
          <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
          <label for="floatingPassword">Password</label>
        </div>

        <div class="form-check text-start my-3">
          <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
          <label class="form-check-label" for="flexCheckDefault"> Remember me </label>
        </div>
        <!--   <button type="button" class="btn btn-primary w-100 py-2" @click="authState = !authState">Sign in</button> -->
        <div class="buttons">
          <button @click.prevent="login" type="button" class="btn btn-primary w-100 py-2">Sign in</button>

          <button @click.prevent="logout" type="button" class="btn btn-primary w-100 py-2">Log Out</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(["fomEmit"]);
const login = () => {
  emit("fomEmit", true);
};
const logout = () => {
  emit("fomEmit", true);
};
</script>

<style lang="scss" scoped>
.login_container {
  background-color: rgba(43, 48, 53);
  color: #dee2e6;
  display: grid;
  width: 50vw;
  height: 30vw;
  justify-content: center;
  align-content: center;
  grid-template-columns: 500px;
}
.buttons {
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
}
.form-signin {
  color: #fff;
}

.form-floating {
  & input {
    background-color: #212529;
    border: 1px solid #495057;
    color: #fff;

    & input[type="email"] {
      margin-bottom: -1px;
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
    }
    & input[type="password"] {
      margin-bottom: 10px;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }

    &::placeholder {
      background-color: transparent;
    }
  }
  & input::placeholder {
    background-color: #212529;
  }

  & label {
    background-color: transparent;
    color: #dee2e6;
    &::after {
      background-color: #212529;
    }
  }
}
.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}

.b-example-divider {
  width: 100%;
  height: 3rem;
  background-color: rgba(0, 0, 0, 0.1);
  border: solid rgba(0, 0, 0, 0.15);
  border-width: 1px 0;
  box-shadow: inset 0 0.5em 1.5em rgba(0, 0, 0, 0.1), inset 0 0.125em 0.5em rgba(0, 0, 0, 0.15);
}

.b-example-vr {
  flex-shrink: 0;
  width: 1.5rem;
  height: 100vh;
}

.bi {
  vertical-align: -0.125em;
  fill: currentColor;
}

.nav-scroller {
  position: relative;
  z-index: 2;
  height: 2.75rem;
  overflow-y: hidden;
}

.nav-scroller .nav {
  display: flex;
  flex-wrap: nowrap;
  padding-bottom: 1rem;
  margin-top: -1px;
  overflow-x: auto;
  text-align: center;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
}

.btn-bd-primary {
  --bd-violet-bg: #712cf9;
  --bd-violet-rgb: 112.520718, 44.062154, 249.437846;

  --bs-btn-font-weight: 600;
  --bs-btn-color: var(--bs-white);
  --bs-btn-bg: var(--bd-violet-bg);
  --bs-btn-border-color: var(--bd-violet-bg);
  --bs-btn-hover-color: var(--bs-white);
  --bs-btn-hover-bg: #6528e0;
  --bs-btn-hover-border-color: #6528e0;
  --bs-btn-focus-shadow-rgb: var(--bd-violet-rgb);
  --bs-btn-active-color: var(--bs-btn-hover-color);
  --bs-btn-active-bg: #5a23c8;
  --bs-btn-active-border-color: #5a23c8;
}
.bd-mode-toggle {
  z-index: 1500;
}
</style>
