import { createPinia } from "pinia";

import useUserStore from "./user";
import useBookStore from "./book";
import useShopStore from "./shop";
import useCartStore from "./cart";

const piniaStore = createPinia();

export default {
  install: (app) => {
    app.use(piniaStore);

    useUserStore();
    useBookStore();
    useShopStore();
    useCartStore();
  },
};

export { useUserStore, useBookStore, useShopStore, useCartStore };
