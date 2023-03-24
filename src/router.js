import { createRouter, createWebHistory } from "vue-router";

import HomePage from "@/pages/home/HomePage.vue";
import AboutPage from "@/pages/about/AboutPage.vue";
import LoginPage from "@/pages/auth/LoginPage.vue";
import NotFoundPage from "@/pages/404/NotFoundPage.vue";
import RegisterPage from "@/pages/auth/RegisterPage.vue";
import BookBrowsePage from "@/pages/books/BookBrowsePage.vue";
import ShopsPage from "@/pages/shops/ShopsPage.vue";

const routes = [
  { name: "home", path: "/", component: HomePage },
  { name: "about", path: "/about", component: AboutPage },
  { name: "login", path: "/login", component: LoginPage },
  { name: "register", path: "/register", component: RegisterPage },
  { name: "browse", path: "/browse", component: BookBrowsePage },
  { name: "shops", path: "/shops", component: ShopsPage },
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
