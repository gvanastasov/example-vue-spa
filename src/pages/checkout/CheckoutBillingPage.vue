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
/**
 * Represents the CheckoutBillingPage component.
 */
const component = {
  name: "CheckoutBillingPage",

  emits: ["completed"],

  data() {
    return {
      sameAddress: true,
    };
  },

  methods: {
    /**
     * Emits the 'completed' event to signal the completion of the billing step.
     * @returns {void}
     */
    handleNextButtonClick() {
      const payload = {};
      this.$emit("completed", payload);
    },
  },
};

/**
 * Represents the billing step of the checkout process.
 */
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
