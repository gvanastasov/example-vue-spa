<template>
  <div>
    <c-navbar />
    <router-view></router-view>
  </div>
</template>

<script>
import { CNavbar } from "@/components";

export default {
  name: "App",

  components: {
    CNavbar,
  },
};
</script>

<style lang="scss" src="./app.scss"></style>
