import Vue from "vue";
import VueRouter from "vue-router";
// import store from "../store";
import Watch from "../views/Watch.vue";
import Posts from "../views/Posts.vue";
import Login from "../views/Login&other.vue";
import Register from "../views/Register.vue";

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "Home",
    component: () => {
      return import("../views/HomeAdmin.vue");
    },
  },
  {
    path: "/Watch/:list/:Id",
    name: "Watch",
    component: Watch,
    props: true,
  },
  {
    path: "/Blog",
    name: "Blog",

    component: () => {
      return import("../views/BlogAdmin.vue");
    },
  },
  {
    path: "/courses/",
    name: "courses",
    component: () => {
      return import("../views/All_coursesAdmin.vue");
    },
  },
  {
    path: "/courses/:id",
    name: "courses",
    component: () => {
      return import("../views/_coursesAdmin.vue");
    },
    props: true,
  },
  {
    path: "/Posts/:id",
    name: "Posts",
    component: Posts,
    props: true,
  },
  {
    path: "/Login/",
    name: "Login",
    component: Login,
  },
  {
    path: "/Register/",
    name: "Register",
    component: Register,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
