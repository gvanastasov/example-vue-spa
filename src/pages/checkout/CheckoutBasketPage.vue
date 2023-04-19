<template>
  <b-container fluid class="checkout-basket">
    <l-section jumbo class="mt-5">
      <template #header>Basket</template>
    </l-section>
    <l-section>
      <template v-if="networking">Loading...</template>
      <template v-else>
        <template v-if="hasItems">
          <ul>
            <li
              v-for="(item, idx) in cart.items"
              :key="`${item.id}_${idx}`"
              class="checkout-basket-item"
            >
              <div class="checkout-basket-item_name">
                {{ item.displayName }}
              </div>
              <div>
                <span class="checkout-basket-item_price"
                  >{{ item.price.unit }}{{ item.price.value }}</span
                >
                <b-button
                  variant="link"
                  class="checkout-basket-item_remove"
                  @click="handleRemoveItemClick(item)"
                  >x</b-button
                >
              </div>
            </li>
          </ul>
          <p class="text-center">
            Total:
            <strong
              >{{ cart.priceTotal.unit }}{{ cart.priceTotal.value }}</strong
            >
            <br />
            <b-button :to="{ name: 'checkout' }" class="mt-3"
              >Checkout</b-button
            >
          </p>
        </template>
        <p v-else class="text-center">
          Cart is empty...
          <br />
          Checkout our webshop and find a book for youself.
          <br />
          <b-button
            :to="{ name: 'browse' }"
            variant="outline-primary"
            class="mt-3"
            >Browse</b-button
          >
        </p>
      </template>
    </l-section>
  </b-container>
</template>

<script>
/**
 * Checkout basket page Vue.js component
 * @typedef {import('vue').ComponentOptions} ComponentOptions
 * @typedef {import('@/stores').CartStore} CartStore
 * @typedef {import('@/stores').Cart} Cart
 */

// Import necessary modules and components
import { LSection } from "@/components";

import { mapActions } from "pinia";
import { useCartStore } from "@/stores";

/**
 * Checkout basket page component definition
 * @type {ComponentOptions}
 */
export default {
  /**
   * Name of the component
   * @type {string}
   */
  name: "CheckoutBasketPage",

  /**
   * Child components of the component
   * @type {Object}
   */
  components: {
    LSection,
  },

  /**
   * Data properties of the component
   * @returns {Object}
   */
  data() {
    return {
      /**
       * Flag indicating whether the component is currently fetching data from the server
       * @type {boolean}
       */
      networking: true,
      /**
       * User's shopping cart
       * @type {?Cart}
       */
      cart: null,
    };
  },

  /**
   * Computed properties of the component
   * @type {Object}
   */
  computed: {
    /**
     * Whether the user's cart has items or not
     * @returns {boolean}
     */
    hasItems() {
      return Boolean(this.cart?.items.length);
    },
  },

  /**
   * Lifecycle hook that is called when the component is created
   * @type {Function}
   */
  created() {
    this.cartFetch().then(({ cart }) => {
      this.networking = false;
      this.cart = cart;
    });
  },

  /**
   * Methods of the component
   * @type {Object}
   */
  methods: {
    /**
     * Map actions from the CartStore to the component's methods
     * @type {Object}
     */
    ...mapActions(useCartStore, {
      /**
       * Action that fetches the user's cart data from the server
       * @type {Function}
       */
      cartFetch: "cartFetch",
      /**
       * Action that removes an item from the user's cart
       * @type {Function}
       */
      cartRemove: "cartRemove",
    }),

    /**
     * Handle click event when removing an item from the user's cart
     * @param {Object} item - The item to be removed from the cart
     * @type {Function}
     */
    handleRemoveItemClick(item) {
      this.cartRemove({ code: item.id }).then(({ cart }) => {
        this.cart = cart;
      });
    },
  },
};
</script>
<style lang="scss">
.checkout-basket {
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  &-item {
    display: flex;
    justify-content: space-between;
    border: 1px solid #6f42c1;
    border-radius: 4px;
    margin-bottom: 20px;

    &_name {
      padding: 20px;
    }

    &_price {
      padding: 20px;
      display: inline-block;
    }

    &_remove {
      padding: 0;
      height: 100%;
      width: 60px;
      display: inline-block;
      margin: 0;
      vertical-align: inherit;
      background-color: #d27eff;
      border-radius: 2px;
      border-top-left-radius: 2px;
      border-bottom-left-radius: 2px;
      border-top-left-radius: 0px;
      border-bottom-left-radius: 0px;
    }
  }
}
</style>
