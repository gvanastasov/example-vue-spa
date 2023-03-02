import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import store from "./stores";
import { run as runMockServer } from "./server";

const app = createApp(App);

if (process.env.NODE_ENV === "development") {
  runMockServer();
}

app.use(router).use(store).mount("#root");
