import { createApp } from "vue";
import BootstrapVueNext from "bootstrap-vue-next";

import App from "./App.vue";
import router from "./router";
import store from "./stores";
import { i18n } from "./locale";
import { run as runMockServer } from "./server";

const app = createApp(App);

if (process.env.NODE_ENV === "development") {
  runMockServer();
}

app.use(router).use(store).use(BootstrapVueNext).use(i18n).mount("#root");
