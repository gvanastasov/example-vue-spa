<template>
  <b-container fluid>
    <b-row>
      <b-col cols="2">filters</b-col>
      <b-col cols="10">
        <l-section jumbo>
          <template #header>Browse</template>
          <template #lead> </template>
          <p>{{ sections.main.content }}</p>
        </l-section>
        <c-product-grid></c-product-grid>
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
