<template>
  <b-container fluid>
    <b-row class="mt-5">
      <b-col cols="10" offset="2">
        <l-section jumbo>
          <template #header>Browse</template>
          <template #lead> </template>
          <p>{{ sections.main.content }}</p>
        </l-section>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="2">
        <b-list-group>
          <b-list-group-item variant="primary" active>Genre</b-list-group-item>
          <b-list-group-item button>Button item</b-list-group-item>
          <b-list-group-item button active variant="secondary"
            >Active Button item</b-list-group-item
          >
        </b-list-group>
      </b-col>
      <b-col cols="10">
        <c-product-grid :page-items-count="9"></c-product-grid>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { LSection, CProductGrid } from "@/components";
import { contentHelper } from "@/utils";

export default {
  name: "BrowseBooks",

  components: {
    LSection,
    CProductGrid,
  },

  data() {
    return {
      sections: {
        main: {
          content: contentHelper().generateSentences({ count: 1 }).build(),
        },
      },
    };
  },
};
</script>
