<template>
  <b-container fluid>
    <b-row>
      <b-col cols="2">filters</b-col>
      <b-col cols="10">
        <c-product-grid></c-product-grid>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { CProductGrid } from "@/components";

export default {
  name: "BrowseBooks",

  components: {
    CProductGrid,
  },
};
</script>
