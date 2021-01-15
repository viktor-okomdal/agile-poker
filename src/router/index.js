import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import AddStory from "../views/AddStory.vue";
import Enter from "../views/Enter.vue";

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
