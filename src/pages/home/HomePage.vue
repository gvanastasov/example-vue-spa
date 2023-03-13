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
    <l-page title="Example Book Store">
      <template #jumbo>
        <p>
          This is a simple bookstore website, used to showcase how to build
          single page applications (SPA) with vue.js (major version 3).
        </p>
        <p>{{ sections.main.content }}</p>
      </template>

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
    </l-page>
  </div>
</template>

<script>
import { LPage, LSection, CProductGrid } from "@/components";
import { contentHelper } from "@/utils";

export default {
  name: "HomePage",

  components: {
    LPage,
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
