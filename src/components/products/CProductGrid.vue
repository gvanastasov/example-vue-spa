<template>
  <b-card-group :deck="deck" columns>
    <b-skeleton-wrapper :loading="loading">
      <template #loading>
        <c-product-card v-for="i in skeletonCount" :key="`cardSkeleton_${i}`">
          <template #title><b-skeleton width="50%"></b-skeleton></template>
          <template #description
            ><b-skeleton width="100%"></b-skeleton
          ></template>
          <template #date><b-skeleton width="25%"></b-skeleton></template>
          <template #category><b-skeleton width="25%"></b-skeleton></template>
          <template #author><b-skeleton width="50%"></b-skeleton></template>
        </c-product-card>
      </template>

      <c-product-card
        v-for="book in books"
        :key="book.id"
        v-bind="book"
        :published="book.publishedFormatted"
      ></c-product-card>
    </b-skeleton-wrapper>
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
      loading: true,
    };
  },

  computed: {
    skeletonCount() {
      return Math.max(this.take || 10);
    },
  },

  created() {
    this.fetchBooks({ take: this.take, order: this.order }).then(
      ({ books }) => {
        this.books = books.map((x) => ({
          ...x,
          publishedFormatted: formattingHelper.formatDate(x.published),
        }));
        this.loading = false;
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
