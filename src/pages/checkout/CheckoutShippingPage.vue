<template>
  <div>
    <p>choose where you want your package shipped to.</p>

    <b-form-group
      v-slot="{ ariaDescribedby }"
      label="Individual radios"
      label-sr-only
    >
      <b-form-radio
        v-model="selected"
        :aria-describedby="ariaDescribedby"
        name="some-radios"
        value="A"
        >Address</b-form-radio
      >
      <b-form-radio
        v-model="selected"
        :aria-describedby="ariaDescribedby"
        name="some-radios"
        value="B"
        >Service drop point</b-form-radio
      >
    </b-form-group>

    <div style="text-align: right">
      <b-button style="width: 100px" @click="handleNextButtonClick"
        >Next</b-button
      >
    </div>
  </div>
</template>

<script>
const component = {
  name: "CheckoutShippingPage",

  emits: ["completed"],

  data() {
    return {
      selected: "",
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
  title: "Shipping",
  route: {
    name: "checkout-shipping",
    path: "shipping",
    component,
  },
};

export default component;
export { step };
</script>
