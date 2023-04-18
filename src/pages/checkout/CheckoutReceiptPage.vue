<template>
  <l-section>
    <p class="text-center">
      Congratulations!
      <br />
      your order <strong>{{ po }}</strong> was succefully placed.
      <br />
      <b-button :to="{ name: 'browse' }" class="mt-3">Return</b-button>
    </p>
  </l-section>
</template>

<script>
export default {
  name: "CheckoutReceiptPage",

  data() {
    return {
      po: "PO123456789",
    };
  },
};
</script>
