<template>
  <div :class="{ 'px-3': true, 'py-5': true, 'pb-0': spaced, 'pt-0': !spaced }">
    <hr class="my-4" />

    <component :is="`h${headerLevel}`" :class="`display-${headerAs}`"
      ><slot name="header"></slot
    ></component>
    <p class="lead"><slot name="lead"></slot></p>

    <slot></slot>
    <hr v-if="separatorBottom" class="my-4" />
  </div>
</template>

<script>
export default {
  name: "LSection",

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
  },

  data() {
    return {
      chained: false,
      index: -1,
    };
  },

  computed: {
    headerLevel() {
      return this.jumbo ? 1 : this.level;
    },
    headerAs() {
      return this.jumbo ? 3 : this.as;
    },
    separatorBottom() {
      return (
        !this.chained ||
        (this.$parent.sections.length >= 2 &&
          this.index === this.$parent.sections.length - 1)
      );
    },
    spaced() {
      return (
        this.chained &&
        this.$parent.sections.length >= 2 &&
        this.index < this.$parent.sections.length - 1
      );
    },
  },

  created() {
    this.tryChain();
  },

  methods: {
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
