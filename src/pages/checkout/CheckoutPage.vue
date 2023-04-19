<template>
  <b-container fluid>
    <l-section jumbo class="mt-5">
      <template #header>Checkout</template>
    </l-section>
    <l-section>
      <router-view v-if="completed"></router-view>
      <template v-else>
        <l-accordion :active="stepCurrent" @change="handleAccordionChangeEvent">
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
                @completed="handleStepCompletedEvent(step)"
              ></component>
            </template>
          </l-accordion-item>
        </l-accordion>
        <b-button
          class="w-100"
          :disabled="!canOrder"
          @click="handleOrderButtonClick"
          >Order</b-button
        >
      </template>
    </l-section>
  </b-container>
</template>

<script>
/**
 * A component representing the checkout page
 * @typedef {Object} CheckoutPage
 */

import { shallowRef } from "vue";
import { mapActions } from "pinia";
import { useCartStore } from "@/stores";

import { LSection, LAccordion, LAccordionItem } from "@/components";

import { step as billingStep } from "./CheckoutBillingPage.vue";
import { step as customerStep } from "./CheckoutCustomerPage.vue";
import { step as shippingStep } from "./CheckoutShippingPage.vue";
import { step as previewStep } from "./CheckoutRreviewPage.vue";

/** @type {CheckoutPage} */
export default {
  name: "CheckoutPage",

  components: {
    LSection,
    LAccordion,
    LAccordionItem,
  },

  /**
   * Executes before the route enters
   * @param {Object} to - The route that is going to be navigated to
   * @param {Object} from - The route that is going to be navigated from
   * @param {Function} next - The callback function to move to the next step
   */
  beforeRouteEnter(_to, _from, next) {
    next((vm) => {
      vm.$router.replace({ name: vm.steps[0].route.name });
    });
  },

  /**
   * Executes before the route updates
   * @param {Object} to - The route that is going to be navigated to
   * @param {Object} from - The route that is going to be navigated from
   * @param {Function} next - The callback function to move to the next step
   */
  beforeRouteUpdate(_to, _from, next) {
    const nextStep = this.steps.map((x) => x.route.name).indexOf(_to.name);
    if (nextStep >= 0) {
      this.stepCurrent = nextStep;
    }
    return next();
  },

  data() {
    const startIndex = 0;
    return {
      stepCurrent: startIndex,
      steps: [customerStep, shippingStep, billingStep, previewStep].map(
        (x) => ({
          title: x.title,
          route: {
            name: x.route.name,
            path: x.route.path,
            component: shallowRef(x.route.component),
          },
          completed: false,
        })
      ),
      completed: false,
    };
  },

  computed: {
    canOrder() {
      return this.steps.every((x) => x.completed === true);
    },
  },

  methods: {
    ...mapActions(useCartStore, {
      cartOrder: "cartOrder",
    }),

    /**
     * Handles the event when the accordion changes
     * @param {number} index - The index of the current accordion
     */
    handleAccordionChangeEvent(index) {
      if (index !== null) {
        this.stepCurrent = index;
        const next = this.steps[index].route.name;
        this.$router.push({ name: next });
      }
    },

    /**
     * Handles the event when a step is completed
     * @param {Object} step - The completed step
     */
    handleStepCompletedEvent(step) {
      step.completed = true;

      if (this.steps.length > this.stepCurrent + 1) {
        this.stepCurrent++;
        const next = this.steps[this.stepCurrent].route.name;
        this.$router.push({ name: next });
      } else {
        this.stepCurrent = null;
      }
    },

    /**
     * Handles the order button click event
     */
    handleOrderButtonClick() {
      this.cartOrder().then(() => {
        this.$router.push({ name: "checkout-receipt" });
        this.completed = true;
      });
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
