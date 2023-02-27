import { createRouter, createWebHistory } from "vue-router";

import HomePage from "@/pages/home/HomePage.vue";
import AboutPage from "@/pages/about/AboutPage.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/about", component: AboutPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
