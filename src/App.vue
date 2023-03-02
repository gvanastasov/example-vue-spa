<template>
  <div>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState } from "pinia";
import { useUserStore } from "@/stores";
import { get } from "@/api";

export default {
  name: "App",

  computed: {
    ...mapState(useUserStore, ["firstName"]),
  },

  created() {
    get("/api/users")
      .then((res) => res.json())
      .then((json) => {
        this.users = json.users;
      });
  },
};
</script>
