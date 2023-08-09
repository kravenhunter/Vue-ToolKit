<script setup>
// JS Example

const openModal = (modal, overlay) => {
  modal?.classList.add("active");
  overlay?.classList.add("active");
};
const closeModal = (modal, overlay) => {
  modal?.classList.remove("active");
  overlay?.classList.remove("active");
};
const closeModalHandler = (event) => {
  const button = event?.target;
  const modalWindow = button.closest(".modal_popup"); // закрываем ближайший родительский  элемент
  const overlay = document.querySelector("#overlay");

  console.log(button);
  console.log(modalWindow);
  const heiht = document.querySelector(".content");
  heiht.classList.remove("full_height");

  closeModal(modalWindow, overlay);
};
const showModalHandler = (event) => {
  const heiht = document.querySelector(".content");
  heiht.classList.add("full_height");
  console.log("event", event?.target);
  const button = event?.target;
  console.log(button?.dataset?.setTarget);

  const modalWindow = document.querySelector(String(button?.dataset?.setTarget));
  console.log(modalWindow);
  const overlay = document.querySelector("#overlay");
  console.log(overlay);
  overlay?.addEventListener("click", () => {
    closeModal(modalWindow, overlay);
  });

  openModal(modalWindow, overlay);

  const toggle = document.querySelector(".toggle_text");
  // у toggle аналогичное поведение  как add remove
  // если класс не существует, то добавляет его
  // если класс существует то удаляет его
  //Удобнее пользоваться
  toggle?.classList.toggle("active");
};
//TypeScript Example

// const openModal = (modal: Element | null, overlay: Element | null) => {
//   modal?.classList.add('active');
//   overlay?.classList.add('active');
// };
// const closeModal = (modal: Element | null, overlay: Element | null) => {
//   modal?.classList.remove('active');
//   overlay?.classList.remove('active');
// };
// const closeModalHandler = (event: Event) => {
//   const button = event?.target as HTMLButtonElement;
//   const modalWindow = button.closest('.modal_popup'); // закрываем ближайший родительский  элемент
//   const overlay = document.querySelector('#overlay');

//   console.log(button);
//   console.log(modalWindow);

//   closeModal(modalWindow, overlay);
// };
// const showModalHandler = (event: Event) => {
//   console.log(event.target);
//   const button = event?.target as HTMLButtonElement;
//   console.log(button.dataset.setTarget);

//   const modalWindow = document.querySelector(String(button.dataset.setTarget));
//   console.log(modalWindow);
//   const overlay = document.querySelector('#overlay');
//   console.log(overlay);
//   overlay?.addEventListener('click', () => {
//     closeModal(modalWindow, overlay);
//   });
//   // overlay?.classList.add('modal-open');
//   // const body = document.querySelector('body');
//   // body?.classList.add('modal-open');
//   openModal(modalWindow, overlay);

//   const toggle = document.querySelector('.toggle_text');
//   // у toggle аналогичное поведение  как add remove
//   // если класс не существует, то добавляет его
//   // если класс существует то удаляет его
//   //Удобнее пользоваться
//   toggle?.classList.toggle('active');
// };
</script>

<template>
  <div class="modal_container">
    <h3>Toggle Window</h3>
    <div class="toggle" style="display: flex; justify-content: center">
      <div class="toggle_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, tempora.</div>
    </div>

    <button class="button" data-set-target="#modal" @click="showModalHandler">Open Modal</button>

    <div class="modal_popup" id="modal">
      <div class="modal_header">
        <h3>Example Modal</h3>

        <button class="close_btn" data-close-button @click="closeModalHandler">&times;</button>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, quidem? Esse quo aliquam, odit officia quae dicta expedita ex eum, reprehenderit, corrupti molestias debitis tempore maiores velit aut. Eos, ex?
      </p>
    </div>
    <div id="overlay"></div>
  </div>
</template>

<style lang="scss" scoped>
.close_btn {
  color: black;
  background-color: transparent;
  font-size: 18px;
  font-weight: 500;
  padding: 0;
}
.button {
  font-size: 18px;
  padding: 0.3em 1.5em;
}

.modal-open {
  overflow: hidden;
  position: fixed;
}
.toggle_text {
  transition: 1s;
}
.toggle_text.active {
  transition: 1s;
  opacity: 0;
}
#overlay {
  position: fixed;
  transition: 0.2s ease-in-out;
  opacity: 0;
  top: 0 !important;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  pointer-events: none;
}
#overlay.active {
  opacity: 1;
  pointer-events: all;
}
.popup_btm {
  display: flex;
  justify-content: center;
}
.modal_popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  transition: 0.2s ease-in-out;
  border: 1px solid black;
  z-index: 10;
  background-color: white;
  width: 500px;
  max-width: 80%;
}
.modal_popup.active {
  transform: translate(-50%, -50%) scale(1);
}
.modal_popup .modal_header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;
}
</style>
