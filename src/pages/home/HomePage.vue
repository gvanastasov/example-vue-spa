<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333"
    >
      <b-carousel-slide
        v-for="s in slides"
        :key="s.id"
        :caption="s.title"
        :img-alt="s.title"
        img-blank
      >
        <p>{{ s.text }}</p>
      </b-carousel-slide>
    </b-carousel>
    <b-container>
      <l-section-chain>
        <l-section jumbo>
          <template #header>Example Book Store</template>
          <template #lead>
            This is a simple bookstore website, used to showcase how to build
            single page applications (SPA) with vue.js (major version 3).
          </template>
          <p>{{ sections.main.content }}</p>
        </l-section>

        <c-product-grid></c-product-grid>
      </l-section-chain>
    </b-container>
  </div>
</template>

<script>
import LSection from "@/components/layouts/LSection.vue";
import LSectionChain from "@/components/layouts/LSectionChain.vue";
import { CProductGrid } from "@/components";
import contentBuilder from "@/utils/content.js";

export default {
  name: "HomePage",

  components: {
    LSectionChain,
    LSection,
    CProductGrid,
  },

  data() {
    return {
      slide: 0,
      slides: [...Array(10).keys()].map((x) => ({
        id: x,
        title: contentBuilder()
          .generateWords({ min: 1, max: 3 })
          .capitalizeFirstLetter()
          .build(),
        text: contentBuilder().generateSentences({ min: 1, max: 3 }).build(),
      })),
      sections: {
        main: {
          content: contentBuilder().generateSentences({ count: 2 }).build(),
        },
      },
    };
  },
};
</script>
