<template>
  <div>
    <h1>404</h1>
    <p>Ops! Url {{ notFound }} does not exists...</p>
    <a @click="handleBackClicked">Back</a>
  </div>
</template>

<script>
export default {
  name: "NotFoundPage",

  computed: {
    notFound() {
      return this.$route.query.notFound;
    },
  },

  methods: {
    handleBackClicked() {
      this.$router.go(-1);
    },
  },
};
</script>
