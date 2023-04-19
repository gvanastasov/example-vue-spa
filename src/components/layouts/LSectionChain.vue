<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
/**
 * A component used to chain LSection components together
 *
 * @name LSectionChain
 */
export default {
  name: "LSectionChain",

  /**
   * Data of the component
   *
   * @returns {Object} An object with the `sections` property which is an array containing the LSection components chained together
   */
  data() {
    return {
      sections: [],
    };
  },

  /**
   * Method that is called when an LSection component is chained to this component
   *
   * @param {Object} section - The LSection component that is being chained
   */
  methods: {
    chain(section) {
      this.sections.push(section);
    },
  },
};
</script>
