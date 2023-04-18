<template>
  <div>Delivery</div>
</template>

<script>
const component = {
  name: "CheckoutDeliveryPage",
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
