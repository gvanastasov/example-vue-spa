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
        <l-section jumbo separator-top>
          <template #header>Example Book Store</template>
          <template #lead>
            This is a simple bookstore website, used to showcase how to build
            single page applications (SPA) with vue.js (major version 3).
          </template>
          <p>{{ sections.main.content }}</p>
        </l-section>

        <l-section separator-top>
          <h3 class="text-center mb-5">Check our latest books</h3>
          <c-product-grid
            :take="4"
            order="desc"
            deck
            hide-filters
            hide-pagination
          ></c-product-grid>
        </l-section>
      </l-section-chain>
    </b-container>
  </div>
</template>

<script>
import { LSection, LSectionChain, CProductGrid } from "@/components";
import { contentHelper } from "@/utils";

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
        title: contentHelper()
          .generateWords({ min: 1, max: 3 })
          .capitalizeFirstLetter()
          .build(),
        text: contentHelper().generateSentences({ min: 1, max: 3 }).build(),
      })),
      sections: {
        main: {
          content: contentHelper().generateSentences({ count: 2 }).build(),
        },
      },
    };
  },
};
</script>
