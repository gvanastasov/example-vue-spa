<template>
  <b-card title="Image Overlay" sub-title="Subtitle" no-body>
    <template #header>
      <h4 class="mb-0">{{ title }}</h4>
    </template>

    <b-card-body>
      <b-card-text>{{ description }} </b-card-text>
    </b-card-body>

    <b-list-group flush>
      <b-list-group-item>{{ published }}</b-list-group-item>
      <b-list-group-item>{{ category }}</b-list-group-item>
      <b-list-group-item>{{ author }}</b-list-group-item>
    </b-list-group>
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
