<template>
  <b-container>
    <l-page-dialog :title="$t('login.title')">
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

        <b-button block type="submit" variant="primary" class="w-100">{{
          $t("login.formSubmitButton")
        }}</b-button>
      </b-form>
      <p class="mt-5 mb-0 text-center">Don't have an account?</p>
      <b-button block variant="link" :to="{ name: 'register' }" class="w-100"
        >Register</b-button
      >
    </l-page-dialog>
  </b-container>
</template>

<script>
import { mapActions } from "pinia";
import { useUserStore } from "@/stores";

import { LPageDialog } from "@/components";

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
