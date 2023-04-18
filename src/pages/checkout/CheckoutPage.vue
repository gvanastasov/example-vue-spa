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
          :disabled="idx !== 0 && !steps[Math.max(0, idx - 1)].completed"
          :class="{
            'checkout-step--active': idx === stepCurrent,
            'checkout-step--completed': step.completed,
          }"
          class="checkout-step"
        >
          <template #accordion-trigger>
            <h3>{{ step.title }}</h3>
            <div v-if="step.completed" class="checkout-step_checkmark"></div>
          </template>
          <template #accordion-content>
            <component
              :is="step.route.component"
              @completed="handleCompleted(step)"
            ></component>
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
    const startIndex = 0;
    return {
      stepCurrent: startIndex,
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
    handleCompleted(step) {
      step.completed = true;
      this.stepCurrent++;
      const next = this.steps[this.stepCurrent].route.name;
      this.$router.push({ name: next });
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

  &--active,
  &--completed {
    opacity: 1;
  }

  &_checkmark {
    display: inline-block;
    transform: rotate(45deg);
    height: 16px;
    width: 9px;
    border-bottom: 4px solid #6f42c1;
    border-right: 4px solid #6f42c1;
    border-right-color: rgb(111, 66, 193);
    border-right-style: solid;
    border-right-width: 4px;
    position: relative;
    top: 10px;
    left: -15px;
  }
}
</style>
