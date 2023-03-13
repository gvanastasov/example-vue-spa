<template>
  <b-container>
    <l-section jumbo class="mt-5">
      <template #header>Shops</template>
      <template #lead> </template>
      <p>{{ sections.main.content }}</p>
    </l-section>
    <b-card-group :deck="deck" columns>
      <l-card v-for="(shop, idx) in shops.data" :key="idx">
        <b-card-text>{{ shop.address.city }}</b-card-text>
        <b-card-text>{{ shop.address.country }}</b-card-text>
        <b-card-text>{{ shop.address.streetAddress }}</b-card-text>
        <b-card-text
          >Open: {{ shop.openingHours.from }} -
          {{ shop.openingHours.to }}</b-card-text
        >
      </l-card>
    </b-card-group>
  </b-container>
</template>

<script>
import { mapActions } from "pinia";
import { useShopStore } from "@/stores";

import { LSection, LCard } from "@/components";
import { contentHelper } from "@/utils";

export default {
  name: "ShopsPage",

  components: {
    LSection,
    LCard,
  },

  data() {
    return {
      shops: {
        loading: true,
        data: [],
      },
      sections: {
        main: {
          content: contentHelper().generateSentences({ count: 1 }).build(),
        },
      },
    };
  },

  created() {
    // todo: error handling
    this.fetchShops().then(({ shops }) => {
      this.shops.data = shops;
      this.shops.loading = false;
    });
  },

  methods: {
    ...mapActions(useShopStore, {
      fetchShops: "fetchShops",
    }),
  },
};
</script>
