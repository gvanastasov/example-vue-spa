import { createRouter, createWebHistory } from "vue-router";

import HomePage from "@/pages/home/HomePage.vue";
import AboutPage from "@/pages/about/AboutPage.vue";
import NotFoundPage from "@/pages/404/NotFoundPage.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/about", component: AboutPage },
  {
    name: "NotFound",
    path: "/:path(.*)*",
    beforeEnter: (to) => {
      return {
        path: "/404",
        replace: true,
        query: { notFound: encodeURI(to.path) },
      };
    },
  },
  {
    path: "/404",
    component: NotFoundPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
