<template>
  <b-card
    title="Image Overlay"
    sub-title="Subtitle"
    no-body
    header-bg-variant="primary"
    header-text-variant="white"
  >
    <template #header>
      <h4 class="mb-0" style="min-height: 60px">{{ title }}</h4>
    </template>

    <b-card-body style="min-height: 200px">
      <b-card-text>{{ description }} </b-card-text>
    </b-card-body>

    <b-list-group flush>
      <b-list-group-item>{{ published }}</b-list-group-item>
      <b-list-group-item>{{ category }}</b-list-group-item>
    </b-list-group>

    <template #footer>
      <small class="text-muted" style="min-height: 60px">by {{ author }}</small>
    </template>
  </b-card>
</template>

<script>
export default {
  name: "CProductCard",

  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    published: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
  },
};
</script>
