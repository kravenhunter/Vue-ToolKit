import { createApp } from 'vue'
//import '@/style.css'
import 'animate.css';
import App from '@/App.vue';
import router from '@/plugins/router.js';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import { faHeart, faHand, faAddressBook, 
        faCreditCard, faLemon, faHourglass,
         faStar,faStarHalf,faStarHalfStroke,
         faStarHalfAlt, faThumbsUp,faThumbsDown,faShareSquare, faCommenting } 
                                      from '@fortawesome/free-regular-svg-icons';
 import { faKey,faUser, faLock, faQuestion,faUserPlus }  from '@fortawesome/free-solid-svg-icons';
/* add icons to the library */
library.add( faHeart, faHand, faAddressBook, 
  faCreditCard, faLemon, faHourglass,
   faStar,faStarHalf,faStarHalfStroke,
   faStarHalfAlt, faThumbsUp,faThumbsDown,faShareSquare,faCommenting, faKey,faUser, faLock, faQuestion,faUserPlus)

//Подключение компонентов (Кнопок,tool-баров, прогресс-баров и др. элементов)
import components from "@/components/UI/";
const app = createApp(App);
console.log(components);
// Регистрируем компоненты
components.forEach((component) => {
    app.component(component.name, component);
  });
// Регистрация шрифвтов и иконок
  app.component('font-awesome-icon', FontAwesomeIcon)
      .use(router)     
      .mount('#app');
