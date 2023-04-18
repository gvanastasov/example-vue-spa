<template>
  <div>
    <p>Delivery</p>
    <b-button @click="handleNextButtonClick">Next</b-button>
  </div>
</template>

<script>
const component = {
  name: "CheckoutDeliveryPage",

  emits: ["completed"],

  methods: {
    handleNextButtonClick() {
      const payload = {};
      this.$emit("completed", payload);
    },
  },
};

const step = {
  title: "Delivery",
  route: {
    name: "checkout-delivery",
    path: "delivery",
    component,
  },
};

export default component;
export { step };
</script>
