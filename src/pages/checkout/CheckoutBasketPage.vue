<template>
  <b-container fluid class="checkout-basket">
    <l-section jumbo class="mt-5">
      <template #header>Basket</template>
    </l-section>
    <l-section>
      <template v-if="networking">Loading...</template>
      <template v-else>
        <ul>
          <li
            v-for="(item, idx) in cart.items"
            :key="`${item.id}_${idx}`"
            class="checkout-basket-item"
          >
            <div class="checkout-basket-item_name">{{ item.displayName }}</div>
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
      </template>
    </l-section>
  </b-container>
</template>

<script>
import { LSection } from "@/components";

import { mapActions } from "pinia";
import { useCartStore } from "@/stores";

export default {
  name: "CheckoutBasketPage",

  components: {
    LSection,
  },

  data() {
    return {
      networking: true,
      cart: null,
    };
  },

  created() {
    this.cartFetch().then(({ cart }) => {
      this.networking = false;
      this.cart = cart;
    });
  },

  methods: {
    ...mapActions(useCartStore, {
      cartFetch: "cartFetch",
    }),

    handleRemoveItemClick(item) {
      console.log(`Remove item with name id ${item.id}`);
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
