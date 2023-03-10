<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "LSectionChain",

  data() {
    return {
      sections: [],
    };
  },

  methods: {
    chain(section) {
      this.sections.push(section);
    },
  },
};
</script>
