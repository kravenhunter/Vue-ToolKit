import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    meta: {
      enterClass: "animate__animated animate__fadeInLeft",
      leaveClass: "animate__animated animate__fadeOutRight",
    },
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/about",
    name: "about",
    meta: {
      enterClass: "animate__animated animate__fadeInRight",
      leaveClass: "animate__animated animate__fadeOutLeft",
    },
    component: () => import("@/views/About.vue"),
  },
  {
    path: "/buttonconfig",
    name: "buttonconfig",
    meta: {
      enterClass: "animate__animated animate__fadeInRight",
      leaveClass: "animate__animated animate__fadeOutLeft",
    },
    component: () => import("@/views/ButtonConfig.vue"),
  },
  {
    path: "/adaptive",
    name: "adaptive",
    meta: {
      enterClass: "animate__animated animate__fadeInRight",
      leaveClass: "animate__animated animate__fadeOutLeft",
    },
    component: () => import("@/views/Adaptive.vue"),
  },
  {
    path: "/typography",
    name: "typography",
    meta: {
      enterClass: "animate__animated animate__fadeInRight",
      leaveClass: "animate__animated animate__fadeOutLeft",
    },
    component: () => import("@/views/Typography.vue"),
  },

  {
    path: "/checkbox",
    name: "checkbox",
    meta: {
      enterClass: "animate__animated animate__fadeInRight",
      leaveClass: "animate__animated animate__fadeOutLeft",
    },
    component: () => import("@/views/CheckBox.vue"),
  },
  {
    path: "/radiobutton",
    name: "radiobutton",
    meta: {
      enterClass: "animate__animated animate__fadeInRight",
      leaveClass: "animate__animated animate__fadeOutLeft",
    },
    component: () => import("@/views/RadioButton.vue"),
  },
  {
    path: "/progressbar",
    name: "progressbar",
    meta: {
      enterClass: "animate__animated animate__fadeInRight",
      leaveClass: "animate__animated animate__fadeOutLeft",
    },
    component: () => import("@/views/ProgressBar.vue"),
  },
  {
    path: "/forms",
    name: "forms",
    meta: {
      enterClass: "animate__animated animate__fadeInRight",
      leaveClass: "animate__animated animate__fadeOutLeft",
    },
    component: () => import("@/views/FormsView.vue"),
  },
  {
    path: "/tabs",
    name: "tabs",
    meta: {
      enterClass: "animate__animated animate__fadeInRight",
      leaveClass: "animate__animated animate__fadeOutLeft",
    },
    component: () => import("@/views/Tabs.vue"),
  },
  {
    path: "/table",
    name: "table",
    meta: {
      enterClass: "animate__animated animate__fadeInRight",
      leaveClass: "animate__animated animate__fadeOutLeft",
    },
    component: () => import("@/views/Table.vue"),
  },
  {
    path: "/grid",
    name: "grid",
    meta: {
      enterClass: "animate__animated animate__fadeInRight",
      leaveClass: "animate__animated animate__fadeOutLeft",
    },
    component: () => import("@/views/Grid.vue"),
  },
  {
    path: "/cards",
    name: "cards",
    meta: {
      enterClass: "animate__animated animate__fadeInRight",
      leaveClass: "animate__animated animate__fadeOutLeft",
    },
    component: () => import("@/views/CardView.vue"),
  },
  {
    path: "/comments",
    name: "comments",
    meta: {
      enterClass: "animate__animated animate__fadeInRight",
      leaveClass: "animate__animated animate__fadeOutLeft",
    },
    component: () => import("@/views/CommentsVuew.vue"),
  },
  {
    path: "/accordions",
    name: "accordions",
    meta: {
      enterClass: "animate__animated animate__fadeInRight",
      leaveClass: "animate__animated animate__fadeOutLeft",
    },
    component: () => import("@/views/AccrodionsView.vue"),
  },
  {
    path: "/animation",
    name: "animation",
    meta: {
      enterClass: "animate__animated animate__fadeInRight",
      leaveClass: "animate__animated animate__fadeOutLeft",
    },
    component: () => import("@/views/AnimationView.vue"),
  },
  {
    path: "/navbars",
    name: "navbars",
    meta: {
      enterClass: "animate__animated animate__fadeInRight",
      leaveClass: "animate__animated animate__fadeOutLeft",
    },
    component: () => import("@/views/NavbarsView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
