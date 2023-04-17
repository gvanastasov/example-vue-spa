<template>
  <div>
    <template v-if="networking">Loading...</template>
    <template v-else> show cart items here... </template>
  </div>
</template>

<script>
import { mapActions } from "pinia";
import { useCartStore } from "@/stores";

export default {
  name: "CheckoutBasketPage",

  data() {
    return {
      networking: true,
    };
  },

  created() {
    this.cartFetch().then(() => {
      this.networking = false;
    });
  },

  methods: {
    ...mapActions(useCartStore, {
      cartFetch: "cartFetch",
    }),
  },
};
</script>
