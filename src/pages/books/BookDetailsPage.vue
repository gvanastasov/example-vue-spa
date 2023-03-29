<template>
  <b-container>
    <b-row>
      <b-col cols="12" md="6"><b-img blank blank-color="gray"></b-img></b-col>
      <b-col cols="12" md="6">details</b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "BookDetailsPage",

  props: {
    bookId: {
      type: String,
      required: true,
    },
  },
};
</script>
