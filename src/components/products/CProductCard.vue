<template>
  <b-card
    title="Image Overlay"
    sub-title="Subtitle"
    no-body
    header-bg-variant="primary"
    header-text-variant="white"
    :class="[{ 'c-product-card': link }]"
    @click="handleCardClick"
  >
    <template #header>
      <h4 class="mb-0" style="min-height: 60px">
        <slot name="title">{{ title }}</slot>
      </h4>
    </template>

    <b-card-body style="min-height: 200px">
      <b-card-text
        ><slot name="description">{{ description }}</slot></b-card-text
      >
    </b-card-body>

    <b-list-group flush>
      <b-list-group-item
        ><slot name="date">{{ published }}</slot></b-list-group-item
      >
      <b-list-group-item
        ><slot name="genre">{{ genre }}</slot></b-list-group-item
      >
    </b-list-group>

    <template #footer>
      <small class="text-muted" style="min-height: 60px"
        ><slot name="author">by {{ author }}</slot></small
      >
    </template>
  </b-card>
</template>

<script>
export default {
  name: "CProductCard",

  props: {
    id: {
      type: String,
      default: undefined,
    },
    title: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    published: {
      type: String,
      default: "",
    },
    genre: {
      type: String,
      default: "",
    },
    author: {
      type: String,
      default: "",
    },
    link: {
      type: Boolean,
      default: true,
    },
  },

  methods: {
    handleCardClick() {
      if (this.id) {
        this.$router.push({
          name: "book-details",
          params: { bookId: this.id },
        });
      }
    },
  },
};
</script>

<style lang="scss">
.c-product-card {
  cursor: pointer;
}
</style>
