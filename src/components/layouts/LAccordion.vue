<template>
  <ul class="accordion">
    <slot></slot>
  </ul>
</template>

<script>
/**
 * A collapsible accordion component
 */
export default {
  /**
   * Name of the component
   * @type {string}
   */
  name: "LAccordion",

  /**
   * Provide the Accordion object to child components
   * @returns {Object}
   */
  provide() {
    return { Accordion: this.Accordion };
  },

  props: {
    /**
     * The index of the active accordion item
     * @type {Number}
     * @default null
     */
    active: {
      type: Number,
      default: null,
    },
  },

  emits: ["change"],

  data() {
    return {
      /**
       * The Accordion object that stores the state of the component
       * @type {Object}
       */
      Accordion: {
        count: 0,
        active: this.active,
      },
    };
  },

  watch: {
    /**
     * Watch the active property of the Accordion object for changes and emit a change event
     * @param {Number} newValue - The new value of the active property
     */
    ["Accordion.active"](newValue) {
      this.$emit("change", newValue);
    },

    /**
     * Watch the active prop for changes and update the Accordion object
     * @param {Number} newValue - The new value of the active prop
     */
    active(newValue) {
      this.Accordion.active = newValue;
    },
  },
};
</script>

<style lang="scss" scoped>
.accordion {
  list-style: none;
  margin: 0;
  padding: 0;

  &__item:last-child {
    border-bottom: none;
  }
}
</style>
