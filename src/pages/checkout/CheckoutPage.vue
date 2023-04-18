<template>
  <b-container fluid>
    <l-section jumbo class="mt-5">
      <template #header>Checkout</template>
    </l-section>
    <l-section>
      <l-accordion :active="stepCurrent" @change="handleAccordionChange">
        <l-accordion-item
          v-for="(step, idx) in steps"
          :key="idx"
          class="checkout-step"
          :class="{ 'checkout-step--active': idx === stepCurrent }"
        >
          <template #accordion-trigger>
            <h3>{{ step.title }}</h3>
          </template>
          <template #accordion-content>
            <component :is="step.route.component"></component>
          </template>
        </l-accordion-item>
      </l-accordion>
      <b-button class="w-100" :disabled="!canOrder">Order</b-button>
    </l-section>
  </b-container>
</template>

<script>
import { shallowRef } from "vue";
import { LSection, LAccordion, LAccordionItem } from "@/components";

import { step as deliveryStep } from "./CheckoutDeliveryPage.vue";
import { step as receiptStep } from "./CheckoutReceiptPage.vue";

export default {
  name: "CheckoutPage",

  components: {
    LSection,
    LAccordion,
    LAccordionItem,
  },

  beforeRouteEnter(_to, _from, next) {
    next((vm) => {
      vm.$router.replace({ name: vm.steps[0].route.name });
    });
  },

  beforeRouteUpdate(_to, _from, next) {
    this.stepCurrent = this.steps.map((x) => x.route.name).indexOf(_to.name);
    return next();
  },

  data() {
    return {
      stepCurrent: 0,
      steps: [deliveryStep, receiptStep].map((x) => ({
        title: x.title,
        route: {
          name: x.route.name,
          path: x.route.path,
          component: shallowRef(x.route.component),
        },
        completed: false,
      })),
    };
  },

  computed: {
    canOrder() {
      return this.steps.every((x) => x.completed === true);
    },
  },

  methods: {
    handleAccordionChange(index) {
      if (index !== null) {
        this.stepCurrent = index;
        const next = this.steps[index].route.name;
        this.$router.push({ name: next });
      }
    },
  },
};
</script>

<style lang="scss">
.checkout-step {
  display: block;
  border: 1px solid #6f42c1;
  border-radius: 4px;
  margin-bottom: 20px;
  padding: 20px;
  opacity: 0.4;

  &--active {
    opacity: 1;
  }
}
</style>
