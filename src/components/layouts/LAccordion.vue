<template>
  <ul class="accordion">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: "LAccordion",

  provide() {
    return { Accordion: this.Accordion };
  },

  props: {
    active: {
      type: Number,
      default: null,
    },
  },

  emits: ["change"],

  data() {
    return {
      Accordion: {
        count: 0,
        active: this.active,
      },
    };
  },

  watch: {
    ["Accordion.active"](newValue) {
      this.$emit("change", newValue);
    },
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
