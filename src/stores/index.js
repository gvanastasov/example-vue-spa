import { createPinia } from "pinia";

import useUserStore from "./user";
import useBookStore from "./book";
import useShopStore from "./shop";

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
