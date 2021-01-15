import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Enter from "../views/Enter.vue";
// import Enter from "../views/EnterRoom.vue";

const routes = [
   {
      path: "/",
      name: "Home",
      component: Home,
   },
   {
      path: "/Enter",
      name: "Enter",
      component: Enter,
   },
];

const router = createRouter({
   history: createWebHashHistory(),
   routes,
});

export default router;
