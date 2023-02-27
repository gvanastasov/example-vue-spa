<template>
  <div class="message">
    {{ greeting }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      greeting: "Hello, World!",
    };
  },
};
</script>

<style lang="scss">
.message {
  text-align: center;
  font-size: 30px;
}
</style>
