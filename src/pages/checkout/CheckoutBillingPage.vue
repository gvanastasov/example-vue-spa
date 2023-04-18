<template>
  <div>
    <p>provide billing details</p>

    <b-form-checkbox id="checkbox-1" v-model="sameAddress" name="checkbox-1">
      Same as shipping address.
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
  name: "CheckoutBillingPage",

  emits: ["completed"],

  data() {
    return {
      sameAddress: true,
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
  title: "Billing",
  route: {
    name: "checkout-billing",
    path: "billing",
    component,
  },
};

export default component;
export { step };
</script>
