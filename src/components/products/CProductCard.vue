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
/**
 * Component representing a card displaying product information
 *
 * @component
 * @example
 * <CProductCard title="Example Book" author="John Doe" />
 */
export default {
  name: "CProductCard",

  props: {
    /**
     * The ID of the product
     *
     * @type {String}
     * @default undefined
     */
    id: {
      type: String,
      default: undefined,
    },

    /**
     * The title of the product
     *
     * @type {String}
     * @default ""
     */
    title: {
      type: String,
      default: "",
    },

    /**
     * The description of the product
     *
     * @type {String}
     * @default ""
     */
    description: {
      type: String,
      default: "",
    },

    /**
     * The published date of the product
     *
     * @type {String}
     * @default ""
     */
    published: {
      type: String,
      default: "",
    },

    /**
     * The genre of the product
     *
     * @type {String}
     * @default ""
     */
    genre: {
      type: String,
      default: "",
    },

    /**
     * The author of the product
     *
     * @type {String}
     * @default ""
     */
    author: {
      type: String,
      default: "",
    },

    /**
     * Whether to display a link to the product details page or not
     *
     * @type {Boolean}
     * @default true
     */
    link: {
      type: Boolean,
      default: true,
    },
  },

  methods: {
    /**
     * Handles the click event on the card and navigates to the product details page
     *
     * @emits click
     */
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
