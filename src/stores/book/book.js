import { defineStore } from "pinia";

import { post } from "@/api";

// todo: add namespacing and export for easy access
const ID = "book";

const useUserStore = defineStore(ID, {
  state: () => {
    return {
      books: [],
    };
  },

  actions: {
    fetchBooks() {
      return post("/api/books").then((data) => {
        console.log(data);
      });
    },
  },

  getters: {},
});

export default useUserStore;
