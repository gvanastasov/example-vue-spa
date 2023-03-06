<template>
  <div class="l-page-dialog"><slot></slot></div>
</template>

<script>
export default {
  name: "LPageDialog",
};
</script>

<style lang="scss">
.l-page-dialog {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 56px);
}
</style>
