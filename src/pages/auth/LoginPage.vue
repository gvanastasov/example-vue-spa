<template>
  <b-container>
    <l-page-dialog title="Login">
      <b-form ref="form" @submit="onSubmit" @reset="onReset">
        <b-form-group
          id="input-group-1"
          label="Username:"
          label-for="input-1"
          label-sr-only
        >
          <b-form-input
            id="input-1"
            v-model="form.username"
            placeholder="Username"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-2"
          label="Password:"
          label-for="input-2"
          label-sr-only
        >
          <b-form-input
            id="input-2"
            v-model="form.password"
            placeholder="Password"
            type="password"
            required
          ></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary" class="w-100"
          >Sign In</b-button
        >
      </b-form>
    </l-page-dialog>
  </b-container>
</template>

<script>
import { mapActions } from "pinia";
import { useUserStore } from "@/stores";

import LPageDialog from "@/components/layouts/LPageDialog.vue";

export default {
  name: "LoginPage",

  components: {
    LPageDialog,
  },

  data() {
    return {
      form: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions(useUserStore, { userLogin: "login" }),

    onSubmit(event) {
      event.preventDefault();
      this.userLogin({
        username: this.form.username,
        password: this.form.password,
      }).then(() => {
        this.$refs.form.$el.reset();
      });
    },

    onReset(event) {
      event.preventDefault();
      this.form.username = "";
      this.form.password = "";
    },
  },
};
</script>
