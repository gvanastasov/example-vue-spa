<template>
  <b-card-group :deck="deck" columns>
    <c-product-card
      v-for="book in books"
      :key="book.id"
      v-bind="book"
      :published="book.publishedFormatted"
    ></c-product-card>
  </b-card-group>
</template>

<script>
import { mapActions } from "pinia";
import { useBookStore } from "@/stores";

import { formattingHelper } from "@/utils";

import { CProductCard } from "@/components";

export default {
  name: "CProductGrid",

  components: {
    CProductCard,
  },

  props: {
    take: {
      type: Number,
      default: undefined,
    },

    order: {
      type: String,
      default: undefined,
    },

    deck: {
      type: Boolean,
      default: false,
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
