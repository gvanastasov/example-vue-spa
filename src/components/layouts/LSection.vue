<template>
  <div :class="{ 'px-3': true, 'py-5': true, 'pb-0': spaced, 'pt-0': !spaced }">
    <hr v-if="separatorTop" class="my-4" />

    <component :is="`h${headerLevel}`" :class="`display-${headerAs}`"
      ><slot name="header"></slot
    ></component>
    <p class="lead"><slot name="lead"></slot></p>

    <slot></slot>
    <hr v-if="separatorBottom" class="my-4" />
  </div>
</template>

<script>
/**
 * Component for displaying a section of content on a page
 * @component
 */
export default {
  name: "LSection",

  /**
   * Props that can be passed to this component
   * @prop {Boolean} jumbo - Whether the section is a jumbo section or not
   * @prop {Number} level - The heading level for the section (default is 2)
   * @prop {Number} as - The HTML tag to use for the section (default is 6 for <h6>)
   * @prop {Boolean} separatorTop - Whether to show a separator line above the section or not
   */
  props: {
    jumbo: {
      type: Boolean,
      default: false,
    },
    level: {
      type: Number,
      default: 2,
    },
    as: {
      type: Number,
      default: 6,
    },
    separatorTop: {
      type: Boolean,
      default: false,
    },
  },

  /**
   * Data properties for the component
   * @returns {Object} - Object with properties "chained" and "index"
   */
  data() {
    return {
      chained: false,
      index: -1,
    };
  },

  computed: {
    /**
     * The heading level to use for the section title
     * @returns {Number} - The heading level for the section title
     */
    headerLevel() {
      return this.jumbo ? 1 : this.level;
    },

    /**
     * The HTML tag to use for the section title
     * @returns {Number} - The HTML tag for the section title
     */
    headerAs() {
      return this.jumbo ? 3 : this.as;
    },

    /**
     * Whether to show a separator line below the section or not
     * @returns {Boolean} - Whether to show a separator line below the section
     */
    separatorBottom() {
      return (
        !this.chained ||
        (this.$parent.sections.length >= 2 &&
          this.index === this.$parent.sections.length - 1)
      );
    },

    /**
     * Whether to add bottom margin to the section or not, depending on whether it's the last in the chain
     * @returns {Boolean} - Whether to add bottom margin to the section
     */
    spaced() {
      return (
        this.chained &&
        this.$parent.sections.length >= 2 &&
        this.index < this.$parent.sections.length - 1
      );
    },
  },

  /**
   * Called when the component is created
   * Attempts to chain the section to the parent chain, if applicable
   */
  created() {
    this.tryChain();
  },

  methods: {
    /**
     * Attempts to chain the section to the parent chain
     */
    tryChain() {
      this.chained = this.$parent.$options.name === "LSectionChain";
      if (this.chained) {
        this.$parent.chain(this);
        this.index = this.$parent.sections.length - 1;
      }
    },
  },
};
</script>
