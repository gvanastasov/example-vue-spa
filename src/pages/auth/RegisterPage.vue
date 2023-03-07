<template>
  <b-container>
    <l-page-dialog title="Register">
      <b-form @submit="onSubmit" @reset="onReset">
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
          label="First Name:"
          label-for="input-2"
          label-sr-only
        >
          <b-form-input
            id="input-2"
            v-model="form.firstName"
            placeholder="First Name"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-3"
          label="Last Name:"
          label-for="input-3"
          label-sr-only
        >
          <b-form-input
            id="input-3"
            v-model="form.lastName"
            placeholder="Last Name"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-4"
          label="Email:"
          label-for="input-4"
          label-sr-only
        >
          <b-form-input
            id="input-4"
            v-model="form.email"
            type="email"
            placeholder="Email"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-5"
          label="Password:"
          label-for="input-5"
          label-sr-only
        >
          <b-form-input
            id="input-5"
            v-model="form.password"
            type="password"
            placeholder="Password"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-6"
          label="Confirm Password:"
          label-for="input-6"
          label-sr-only
        >
          <b-form-input
            id="input-6"
            v-model="form.passwordConfirm"
            type="password"
            placeholder="Confirm Password"
            required
          ></b-form-input>
        </b-form-group>

        <b-button block type="submit" variant="primary" class="w-100"
          >Register</b-button
        >
      </b-form>
      <p class="mt-5 mb-0 text-center">Already have an existing account?</p>
      <b-button block variant="link" :to="{ name: 'login' }" class="w-100"
        >Login</b-button
      >
    </l-page-dialog>
  </b-container>
</template>

<script>
import LPageDialog from "@/components/layouts/LPageDialog.vue";

export default {
  name: "RegisterPage",

  components: {
    LPageDialog,
  },

  data() {
    return {
      form: {
        username: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passwordConfirm: "",
      },
    };
  },

  methods: {
    onSubmit() {},

    onReset() {},
  },
};
</script>
