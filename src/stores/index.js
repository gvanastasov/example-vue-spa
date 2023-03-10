import { createPinia } from "pinia";

import useUserStore from "./user/user";
import useBookStore from "./book/book";

const piniaStore = createPinia();

export default {
  install: (app) => {
    app.use(piniaStore);

    useUserStore();
    useBookStore();
  },
};

export { useUserStore, useBookStore };
