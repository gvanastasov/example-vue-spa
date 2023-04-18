<template>
  <div>
    <p>provide information regarding yourself</p>

    <b-input-group prepend="First Name" class="mb-3">
      <b-form-input></b-form-input>
    </b-input-group>

    <b-input-group prepend="Last Name" class="mb-3">
      <b-form-input></b-form-input>
    </b-input-group>

    <b-input-group prepend="Email" class="mb-3">
      <b-form-input></b-form-input>
    </b-input-group>

    <div style="text-align: right">
      <b-button style="width: 100px" @click="handleNextButtonClick"
        >Next</b-button
      >
    </div>
  </div>
</template>

<script>
const component = {
  name: "CheckoutCustomerPage",

  emits: ["completed"],

  methods: {
    handleNextButtonClick() {
      const payload = {};
      this.$emit("completed", payload);
    },
  },
};

const step = {
  title: "Customer",
  route: {
    name: "checkout-customer",
    path: "customer",
    component,
  },
};

export default component;
export { step };
</script>
