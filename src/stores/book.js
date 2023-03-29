import { defineStore } from "pinia";

import { get, post } from "@/api";

// todo: add namespacing and export for easy access
const ID = "book";

const useUserStore = defineStore(ID, {
  actions: {
    fetchBooks({ take, order, page, pageItemsCount, facets } = {}) {
      return post("/api/books", { take, order, page, pageItemsCount, facets });
    },
    fetchBook({ id }) {
      return get(`/api/books/${id}`);
    },
  },
});

export default useUserStore;
