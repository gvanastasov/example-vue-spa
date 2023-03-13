import { defineStore } from "pinia";

import { get } from "@/api";

// todo: add namespacing and export for easy access
const ID = "shop";

const useShopStore = defineStore(ID, {
  actions: {
    fetchShops() {
      return get("/api/shops");
    },
  },
});

export default useShopStore;
