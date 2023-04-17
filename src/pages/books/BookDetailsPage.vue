<template>
  <b-container>
    <b-row class="my-5">
      <template v-if="book">
        <b-col cols="12" md="6"><b-img v-bind="imageProps"></b-img></b-col>
        <b-col cols="12" md="6">
          <b-row v-for="prop in bookProperties" :key="`prop_${prop.name}`">
            <b-col>{{ prop.name }}</b-col>
            <b-col>{{ prop.value }}</b-col>
          </b-row>
          <b-button
            variant="primary"
            class="w-100 mt-3"
            @click="handleBuyButtonClick"
            >Buy</b-button
          >
        </b-col>
      </template>
    </b-row>
  </b-container>
</template>

<script>
import { mapActions } from "pinia";
import { useBookStore, useCartStore } from "@/stores";

export default {
  name: "BookDetailsPage",

  props: {
    bookId: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      book: null,
      imageProps: {
        center: true,
        fluidGrow: true,
        blank: true,
        blankColor: "#bbb",
        width: 600,
        height: 400,
      },
    };
  },

  computed: {
    bookProperties() {
      const { author, genre, published } = this.book;
      return [
        { name: "Author", value: author },
        { name: "Genre", value: genre },
        { name: "Published", value: published },
      ];
    },
  },

  created() {
    this.fetchBook({ id: this.bookId }).then(({ book }) => {
      this.book = book;
    });
  },

  methods: {
    ...mapActions(useBookStore, {
      fetchBook: "fetchBook",
    }),

    ...mapActions(useCartStore, {
      cartAdd: "cartAdd",
    }),

    handleBuyButtonClick() {
      this.cartAdd({ code: this.book.id }).then(() => {
        this.$router.push({ name: "checkout-basket" });
      });
    },
  },
};
</script>
