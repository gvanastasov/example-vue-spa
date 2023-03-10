<template>
  <l-section>
    <h3 class="text-center mb-5">Check our latest books</h3>
    <b-card-group deck>
      <c-product-card
        v-for="book in books"
        :key="book.id"
        v-bind="book"
      ></c-product-card>
    </b-card-group>
  </l-section>
</template>

<script>
import { mapActions } from "pinia";
import { useBookStore } from "@/stores";

import { LSection, CProductCard } from "@/components";

export default {
  name: "CProductGrid",

  components: {
    LSection,
    CProductCard,
  },

  data() {
    return {
      books: [],
    };
  },

  created() {
    this.fetchBooks().then(({ books }) => {
      this.books = books.slice(0, 4);
    });
  },

  methods: {
    ...mapActions(useBookStore, {
      fetchBooks: "fetchBooks",
    }),
  },
};
</script>
