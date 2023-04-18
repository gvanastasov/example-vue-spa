<template>
  <div>Receipt</div>
</template>

<script>
const component = {
  name: "CheckoutReceiptPage",
};

const step = {
  title: "Receipt",
  route: {
    name: "checkout-receipt",
    path: "receipt",
    component,
  },
};

export default component;
export { step };
</script>
