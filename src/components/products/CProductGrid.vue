<template>
  <b-row>
    <b-col v-if="!hideFilters" cols="2">
      <b-list-group v-for="facet in facets" :key="`facet_${facet.name}`">
        <b-list-group-item variant="primary" active>{{
          facet.name
        }}</b-list-group-item>
        <b-list-group-item
          v-for="opt in facet.options"
          :key="`facet_option_${opt.value}`"
          :active="opt.active"
          :variant="opt.active ? 'secondary' : 'default'"
          button
          class="d-flex justify-content-between align-items-center"
          @click="handleFacetClick(facet, opt)"
          >{{ opt.value }}
          <b-badge variant="primary" pill>{{
            opt.count
          }}</b-badge></b-list-group-item
        >

        <!-- <b-list-group-item button>Button item</b-list-group-item>
        <b-list-group-item button active variant="secondary"
          >Active Button item</b-list-group-item
        > -->
      </b-list-group>
    </b-col>
    <b-col :cols="hideFilters ? 12 : 10">
      <b-card-group :deck="deck" columns>
        <b-skeleton-wrapper :loading="loading">
          <template #loading>
            <c-product-card
              v-for="i in skeletonCount"
              :key="`cardSkeleton_${i}`"
            >
              <template #title><b-skeleton width="50%"></b-skeleton></template>
              <template #description
                ><b-skeleton width="100%"></b-skeleton
              ></template>
              <template #date><b-skeleton width="25%"></b-skeleton></template>
              <template #category
                ><b-skeleton width="25%"></b-skeleton
              ></template>
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
      <div class="my-3">
        <b-pagination
          :model-value="pagination.current"
          :per-page="pageItemsCount"
          :total-rows="pagination.total"
          :align="'fill'"
          @update:model-value="(newValue) => handlePageChange(newValue)"
        ></b-pagination>
      </div>
    </b-col>
  </b-row>
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

    pageItemsCount: {
      type: Number,
      default: undefined,
    },

    hideFilters: {
      type: Boolean,
      default: false,
    },

    deck: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      pagination: {
        current: 1,
        total: undefined,
      },
      facets: [],
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
    this.fetchGridData(this.pagination.current - 1);
  },

  methods: {
    ...mapActions(useBookStore, {
      fetchBooks: "fetchBooks",
    }),

    handlePageChange(page) {
      this.pagination.current = page;
      this.fetchGridData(page - 1);
    },

    handleFacetClick(facet, opt) {
      opt.active = true;
      this.fetchGridData(0, [facet]);
    },

    fetchGridData(page, facets = []) {
      console.log("fetch ", page);
      this.fetchBooks({
        take: this.take,
        order: this.order,
        page,
        pageItemsCount: this.pageItemsCount,
        facets,
      }).then(({ data, total, facets }) => {
        this.books = data.map((x) => ({
          ...x,
          publishedFormatted: formattingHelper.formatDate(x.published),
        }));
        this.loading = false;
        this.pagination.total = total;
        this.facets = facets;
      });
    },
  },
};
</script>
