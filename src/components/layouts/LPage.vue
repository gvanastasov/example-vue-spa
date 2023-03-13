<template>
  <b-container>
    <l-section jumbo class="mt-5">
      <template #header>{{ title }}</template>
      <template #lead> </template>
      <slot name="jumbo"></slot>
    </l-section>
    <slot></slot>
  </b-container>
</template>

<script>
import { LSection } from "@/components";

export default {
  name: "LPage",

  components: {
    LSection,
  },

  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
