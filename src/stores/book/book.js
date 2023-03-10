import { defineStore } from "pinia";

import { post } from "@/api";

// todo: add namespacing and export for easy access
const ID = "book";

const useUserStore = defineStore(ID, {
  actions: {
    fetchBooks() {
      return post("/api/books");
    },
  },
});

export default useUserStore;
