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
/**
 * Component for a dialog page with a card.
 * @typedef {Object} LPageDialog
 */
import { LCard } from "@/components";

export default {
  /**
   * The name of the component.
   * @type {String}
   */
  name: "LPageDialog",

  /**
   * The components used by this page.
   * @type {Object}
   */
  components: {
    LCard,
  },

  /**
   * The props of this component.
   * @type {Object}
   * @property {String} title The title of the dialog page.
   */
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
