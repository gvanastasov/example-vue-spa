import { createPinia } from "pinia";

import useUserStore from "./user/user";

const piniaStore = createPinia();

export default {
  install: (app) => {
    app.use(piniaStore);

    useUserStore();
  },
};

export { useUserStore };
