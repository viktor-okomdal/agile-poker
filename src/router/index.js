import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import AddStory from "../views/AddStory.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/add/story",
    name: "Add User Story",
    component: AddStory,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
