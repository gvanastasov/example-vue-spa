<template>
  <div>
    <b-form-checkbox
      id="checkbox-1"
      v-model="status"
      name="checkbox-1"
      value="accepted"
      unchecked-value="not_accepted"
    >
      I accept the terms and use
    </b-form-checkbox>
    <div style="text-align: right">
      <b-button style="width: 100px" @click="handleNextButtonClick"
        >Next</b-button
      >
    </div>
  </div>
</template>

<script>
const component = {
  name: "CheckoutPreviewPage",

  data() {
    return {
      status: "not_accepted",
    };
  },

  methods: {
    handleNextButtonClick() {
      const payload = {};
      this.$emit("completed", payload);
    },
  },
};

const step = {
  title: "Preview",
  route: {
    name: "checkout-preview",
    path: "preview",
    component,
  },
};

export default component;
export { step };
</script>
