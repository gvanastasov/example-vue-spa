<template>
  <div class="l-page-dialog">
    <l-card>
      <h1 class="mb-5">{{ title }}</h1>
      <div>
        <slot></slot>
      </div>
    </l-card>
  </div>
</template>

<script>
import { LCard } from "@/components";

export default {
  name: "LPageDialog",

  components: {
    LCard,
  },

  props: {
    title: {
      type: String,
      default: "Title",
    },
  },
};
</script>

<style lang="scss">
.l-page-dialog {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 58px);
  flex-direction: column;
}
</style>
