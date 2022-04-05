import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
import Watch from "../views/Watch.vue";

// import _courses from "../views/All_courses.vue";
// import _coursesAdmin from "../views/All_coursesAdmin.vue";
import Posts from "../views/Posts.vue";
import Login from "../views/Login&other.vue";
import Register from "../views/Register.vue";

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "Home",
    component: () => {
      // eslint-disable-next-line no-undef
      switch (store.state.Islogin) {
        case true:
          switch (store.state.The_State) {
            case "User":
              return import("../views/Home.vue");
            case "Admin":
              return import("../views/HomeAdmin.vue");
          }
          break;
        case false:
          return import("../views/Home.vue");
      }
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
      // eslint-disable-next-line no-undef
      return import("../views/BlogAdmin.vue");
    },
  },
  {
    path: "/courses/",
    name: "courses",
    component: () => {
      // eslint-disable-next-line no-undef
      return import("../views/All_coursesAdmin.vue");
    },
  },
  // _coursesAdmin
  {
    path: "/courses/:id",
    name: "courses",
    component: () => {
      // eslint-disable-next-line no-undef
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
