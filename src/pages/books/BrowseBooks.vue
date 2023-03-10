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
    <c-product-grid :page-items-count="9"></c-product-grid>
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
