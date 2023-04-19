<template>
  <b-card class="shadow p-3 mb-5 bg-white rounded">
    <div class="px-3 py-5">
      <slot></slot>
    </div>
  </b-card>
</template>

<script>
/**
 * A simple card component for displaying content.
 */
export default {
  name: "LCard",
};
</script>
