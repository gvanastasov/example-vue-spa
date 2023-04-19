<template>
  <div>
    <h1>404</h1>
    <p>Ops! Url {{ notFound }} does not exists...</p>
    <a @click="handleBackClicked">Back</a>
  </div>
</template>

<script>
/**
 * Represents the NotFoundPage component.
 */
export default {
  name: "NotFoundPage",

  computed: {
    /**
     * Gets the value of the 'notFound' query parameter from the current route.
     * @returns {string} The value of the 'notFound' query parameter.
     */
    notFound() {
      return this.$route.query.notFound;
    },
  },

  methods: {
    /**
     * Navigates back to the previous page.
     * @returns {void}
     */
    handleBackClicked() {
      this.$router.go(-1);
    },
  },
};
</script>
