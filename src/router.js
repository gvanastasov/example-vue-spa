import { createRouter, createWebHistory } from "vue-router";

import HomePage from "@/pages/home/HomePage.vue";
import AboutPage from "@/pages/about/AboutPage.vue";
import LoginPage from "@/pages/auth/LoginPage.vue";
import NotFoundPage from "@/pages/404/NotFoundPage.vue";
import RegisterPage from "@/pages/auth/RegisterPage.vue";
import BookBrowsePage from "@/pages/books/BookBrowsePage.vue";
import BookDetailsPage from "@/pages/books/BookDetailsPage.vue";
import ShopsPage from "@/pages/shops/ShopsPage.vue";
import CheckoutBasketPage from "@/pages/checkout/CheckoutBasketPage.vue";
import CheckoutPage from "@/pages/checkout/CheckoutPage.vue";
import CheckoutReceiptPage from "@/pages/checkout/CheckoutReceiptPage.vue";
import { step as checkoutCustomerStep } from "@/pages/checkout/CheckoutCustomerPage.vue";
import { step as checkoutShippingStep } from "@/pages/checkout/CheckoutShippingPage.vue";
import { step as checkoutBillingStep } from "@/pages/checkout/CheckoutBillingPage.vue";
import { step as checkoutPreviewPapge } from "@/pages/checkout/CheckoutRreviewPage.vue";

const routes = [
  { name: "home", path: "/", component: HomePage },
  { name: "about", path: "/about", component: AboutPage },
  { name: "login", path: "/login", component: LoginPage },
  { name: "register", path: "/register", component: RegisterPage },
  { name: "browse", path: "/browse", component: BookBrowsePage },
  {
    name: "shop",
    path: "/shop",
    children: [
      {
        name: "checkout-basket",
        path: "basket",
        component: CheckoutBasketPage,
      },
      {
        name: "checkout",
        path: "checkout",
        component: CheckoutPage,
        children: [
          ...[
            checkoutCustomerStep,
            checkoutShippingStep,
            checkoutBillingStep,
            checkoutPreviewPapge,
          ].map((x) => x.route),
          {
            name: "checkout-receipt",
            path: "receipt",
            component: CheckoutReceiptPage,
          },
        ],
      },
      {
        name: "book-details",
        path: ":bookId",
        component: BookDetailsPage,
        props: true,
      },
    ],
  },
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
