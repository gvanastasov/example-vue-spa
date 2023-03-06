import { defineStore } from "pinia";

import { post } from "@/api";

// todo: add namespacing and export for easy access
const ID = "user";

const useUserStore = defineStore(ID, {
  state: () => {
    return {
      id: -1,
      email: "",
      firstName: "Annonymous",
      lastName: "",
      username: "",
    };
  },

  actions: {
    login({ username, password }) {
      post("/api/users/login", { username, password }).then(({ user }) => {
        const { id, email, firstName, lastName, username } = user;
        this.$patch({ id, email, firstName, lastName, username });
      });
    },
  },

  getters: {
    fullName: (state) => {
      return (
        state.firstName + (state.lastName !== "" ? ` ${state.lastName}` : "")
      );
    },

    isAuthenticated: (state) => {
      return state.id !== -1;
    },
  },
});

export default useUserStore;
