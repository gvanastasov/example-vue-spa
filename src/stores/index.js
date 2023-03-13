import { createPinia } from "pinia";

import useUserStore from "./user/user";
import useBookStore from "./book/book";
import useShopStore from "./shop/shop";

const piniaStore = createPinia();

export default {
  install: (app) => {
    app.use(piniaStore);

    useUserStore();
    useBookStore();
    useShopStore();
  },
};

export { useUserStore, useBookStore, useShopStore };
