import { createApp } from "vue";
// import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import store from "./stores";

const app = createApp(App);
// const pinia = createPinia();

app.use(router).use(store).mount("#root");
