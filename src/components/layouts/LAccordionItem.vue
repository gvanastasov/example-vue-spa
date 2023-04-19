<template>
  <li class="accordion__item">
    <div
      class="accordion__trigger"
      :class="{ accordion__trigger_active: visible }"
      @click="open"
    >
      <slot name="accordion-trigger"></slot>
    </div>

    <transition
      name="accordion"
      @enter="start"
      @after-enter="end"
      @before-leave="start"
      @after-leave="end"
    >
      <div v-show="visible" class="accordion__content">
        <slot name="accordion-content"></slot>
      </div>
    </transition>
  </li>
</template>

<script>
/**
 * A Vue.js component that represents an accordion.
 * @typedef {Object} LAccordion
 * @property {string} name - The name of the component.
 * @property {Object} inject - The data injected by the parent component.
 * @property {Object} Accordion - The Accordion object.
 * @property {Object} props - The properties passed down to the component.
 * @property {Boolean} disabled - The flag that indicates if the accordion is disabled.
 * @property {Object} data - The local data of the component.
 * @property {Number} index - The index of the accordion.
 * @property {Object} computed - The computed properties of the component.
 * @property {Boolean} visible - The flag that indicates if the accordion is visible.
 * @property {Object} created - The lifecycle method called when the component is created.
 * @property {Object} methods - The methods of the component.
 * @property {Function} open - The method that opens the accordion.
 * @property {Function} start - The method that sets the starting height of the accordion.
 * @property {Function} end - The method that sets the ending height of the accordion.
 */
export default {
  name: "LAccordion",

  inject: ["Accordion"],

  props: {
    /**
     * The flag that indicates if the accordion is disabled.
     * @type {Boolean}
     * @default false
     */
    disabled: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      /**
       * The index of the accordion.
       * @type {Number}
       * @default null
       */
      index: null,
    };
  },

  computed: {
    /**
     * The flag that indicates if the accordion is visible.
     * @type {Boolean}
     */
    visible() {
      return this.index == this.Accordion.active;
    },
  },

  created() {
    this.index = this.Accordion.count++;
  },

  methods: {
    /**
     * The method that opens the accordion.
     * @function
     */
    open() {
      if (this.disabled) {
        return;
      }
      if (this.visible) {
        this.Accordion.active = null;
      } else {
        this.Accordion.active = this.index;
      }
    },

    /**
     * The method that sets the starting height of the accordion.
     * @function
     * @param {Object} el - The HTML element that represents the accordion.
     */
    start(el) {
      el.style.height = el.scrollHeight + "px";
    },

    /**
     * The method that sets the ending height of the accordion.
     * @function
     * @param {Object} el - The HTML element that represents the accordion.
     */
    end(el) {
      el.style.height = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.accordion__item {
  cursor: pointer;
  position: relative;
}

.accordion__trigger {
  display: flex;
  justify-content: space-between;
}

.accordion-enter-active,
.accordion-leave-active {
  will-change: height, opacity;
  transition: height 0.3s ease, opacity 0.3s ease;
  overflow: hidden;
}

.accordion-enter,
.accordion-leave-to {
  height: 0 !important;
  opacity: 0;
}
</style>
