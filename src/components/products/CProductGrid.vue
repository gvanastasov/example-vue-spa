<template>
  <l-section>
    <h3 class="text-center mb-5">Check our latest books</h3>
    <b-card-group deck>
      <c-product-card
        v-for="book in books"
        :key="book.id"
        v-bind="book"
        :published="book.publishedFormatted"
      ></c-product-card>
    </b-card-group>
  </l-section>
</template>

<script>
import { mapActions } from "pinia";
import { useBookStore } from "@/stores";

import { formattingHelper } from "@/utils";

import { LSection, CProductCard } from "@/components";

export default {
  name: "CProductGrid",

  components: {
    LSection,
    CProductCard,
  },

  props: {
    take: {
      type: Number,
      required: true,
    },

    order: {
      type: String,
      default: "asc",
    },
  },

  data() {
    return {
      books: [],
    };
  },

  created() {
    this.fetchBooks({ take: this.take, order: this.order }).then(
      ({ books }) => {
        this.books = books.map((x) => ({
          ...x,
          publishedFormatted: formattingHelper.formatDate(x.published),
        }));
      }
    );
  },

  methods: {
    ...mapActions(useBookStore, {
      fetchBooks: "fetchBooks",
    }),
  },
};
</script>
