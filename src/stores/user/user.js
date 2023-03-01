import { defineStore } from "pinia";

// todo: add namespacing and export for easy access
const ID = "user";

const useUserStore = defineStore(ID, {
  state: () => {
    return {
      firstName: "Annonymous",
      lastName: "",
    };
  },

  getters: {
    fullName: (state) => {
      return (
        state.firstName + (state.lastName !== "" ? ` ${state.lastName}` : "")
      );
    },
  },
});

export default useUserStore;
