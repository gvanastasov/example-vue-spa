<template>
  <div>
    <c-navbar />
    <router-view></router-view>
  </div>
</template>

<script>
import CNavbar from "@/components/navbar/Navbar.vue";

export default {
  name: "App",

  components: {
    CNavbar,
  },
};
</script>

<style lang="scss" src="./app.scss"></style>
