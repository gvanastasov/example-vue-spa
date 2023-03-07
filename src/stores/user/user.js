import { defineStore } from "pinia";

import { post } from "@/api";

// todo: add namespacing and export for easy access
const ID = "user";

const useUserStore = defineStore(ID, {
  state: () => {
    return {
      id: -1,
      email: "",
      firstName: "",
      lastName: "",
      username: "annonymous",
    };
  },

  actions: {
    login({ username, password }) {
      return post("/api/users/login", { username, password }).then(
        ({ user }) => {
          const { id, email, firstName, lastName, username } = user;
          this.$patch({ id, email, firstName, lastName, username });
        }
      );
    },

    logout() {
      return post("/api/users/logout").then(() => {
        this.$reset();
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
