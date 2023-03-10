<template>
  <div>
    <c-navbar />
    <router-view></router-view>
    <c-footer />
  </div>
</template>

<script>
import { CNavbar, CFooter } from "@/components";

export default {
  name: "App",

  components: {
    CNavbar,
    CFooter,
  },
};
</script>

<style lang="scss" src="./app.scss"></style>
