<template>
  <b-container>
    <l-section-chain>
      <l-section jumbo class="mt-5">
        <template #header>{{ title }}</template>
        <template #lead> </template>
        <slot name="jumbo"></slot>
      </l-section>
      <slot></slot>
    </l-section-chain>
  </b-container>
</template>

<script>
import { LSection, LSectionChain } from "@/components";

/**
 * The LPage component provides a layout for a page, with a title and sections.
 * @name LPage
 */
export default {
  name: "LPage",

  components: {
    LSection,
    LSectionChain,
  },

  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
