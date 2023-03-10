<template>
  <l-section>
    <h3>Check our latest books</h3>
    <b-card-group deck>
      <c-product-card></c-product-card>
      <c-product-card></c-product-card>
      <c-product-card></c-product-card>
      <c-product-card></c-product-card>
    </b-card-group>
  </l-section>
</template>

<script>
import { mapActions } from "pinia";
import { useBookStore } from "@/stores";

export default {
  name: "CProductGrid",

  created() {
    this.fetchBooks();
  },

  methods: {
    ...mapActions(useBookStore, {
      fetchBooks: "fetchBooks",
    }),
  },
};
</script>
