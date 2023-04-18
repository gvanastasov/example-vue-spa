import { defineStore } from "pinia";

import { get, post, del } from "@/api";

// todo: add namespacing and export for easy access
const ID = "cart";

const useCartStore = defineStore(ID, {
  actions: {
    cartFetch() {
      return get("/api/cart");
    },
    cartAdd({ code }) {
      return post("/api/cart", { code });
    },
    cartRemove({ code }) {
      return del("/api/cart", { code });
    },
  },
});

export default useCartStore;
