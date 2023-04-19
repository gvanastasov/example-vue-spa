<template>
  <b-row>
    <b-col v-if="!hideFilters" cols="2">
      <b-skeleton-wrapper :loading="loading">
        <template #loading>
          <b-list-group>
            <b-list-group-item variant="primary" active>
              <b-skeleton width="50%"></b-skeleton>
            </b-list-group-item>
            <b-list-group-item button>
              <b-skeleton width="75%"></b-skeleton>
            </b-list-group-item>
            <b-list-group-item button>
              <b-skeleton width="75%"></b-skeleton>
            </b-list-group-item>
          </b-list-group>
        </template>
      </b-skeleton-wrapper>
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
      <div v-if="!hidePagination" class="my-3">
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
    /**
     * The number of books to take from the API response.
     * @type {Number}
     * @default undefined
     */
    take: {
      type: Number,
      default: undefined,
    },

    /**
     * The order to sort the books in.
     * @type {String}
     * @default undefined
     */
    order: {
      type: String,
      default: undefined,
    },

    /**
     * The number of items to display per page.
     * @type {Number}
     * @default undefined
     */
    pageItemsCount: {
      type: Number,
      default: undefined,
    },

    /**
     * Whether to hide the filters section.
     * @type {Boolean}
     * @default false
     */
    hideFilters: {
      type: Boolean,
      default: false,
    },

    /**
     * Whether to hide the pagination section.
     * @type {Boolean}
     * @default false
     */
    hidePagination: {
      type: Boolean,
      default: false,
    },

    /**
     * Whether to use the deck layout for the grid.
     * @type {Boolean}
     * @default false
     */
    deck: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      /**
       * The pagination information.
       * @type {Object}
       * @property {Number} current - The current page number.
       * @property {Number} total - The total number of items.
       */
      pagination: {
        current: 1,
        total: undefined,
      },

      /**
       * The facets that are currently active.
       * @type {Array}
       */
      facets: [],

      /**
       * The list of books to display in the grid.
       * @type {Array}
       */
      books: [],

      /**
       * Whether the data is currently being loaded.
       * @type {Boolean}
       */
      loading: true,
    };
  },

  computed: {
    /**
     * The number of skeleton items to display.
     * @type {Number}
     */
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

    /**
     * Handles a change in the current page.
     * @param {Number} page - The new current page number.
     */
    handlePageChange(page) {
      this.pagination.current = page;
      this.fetchGridData(page - 1);
    },

    /**
     * Handles a click on a facet.
     * @param {Object} _facet - The facet object that was clicked.
     * @param {Object} opt - The option object that was clicked.
     */
    handleFacetClick(_facet, opt) {
      opt.active = !opt.active;
      this.fetchGridData(0, this.facets);
    },

    /**
     * Fetches grid data by calling the 'fetchBooks' action from the 'useBookStore' store.
     * @param {number} page - The current page number to fetch.
     * @param {array} facets - An optional array of facets to filter the data.
     * @returns {void}
     */
    fetchGridData(page, facets = []) {
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
