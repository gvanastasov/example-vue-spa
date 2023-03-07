<template>
  <b-container>
    <l-page-dialog title="Register">
      <b-form @submit="onSubmit" @reset="onReset">
        <b-form-group
          id="input-group-1"
          label="Username:"
          label-for="input-1"
          label-sr-only
          :invalid-feedback="v$.form.username.$errors[0]?.$message"
          :state="!v$.form.username.$error"
        >
          <b-form-input
            id="input-1"
            v-model="v$.form.username.$model"
            placeholder="Username"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-2"
          label="First Name:"
          label-for="input-2"
          label-sr-only
          :invalid-feedback="v$.form.firstName.$errors[0]?.$message"
          :state="!v$.form.firstName.$error"
        >
          <b-form-input
            id="input-2"
            v-model="v$.form.firstName.$model"
            placeholder="First Name"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-3"
          label="Last Name:"
          label-for="input-3"
          label-sr-only
          :invalid-feedback="v$.form.lastName.$errors[0]?.$message"
          :state="!v$.form.lastName.$error"
        >
          <b-form-input
            id="input-3"
            v-model="v$.form.lastName.$model"
            placeholder="Last Name"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-4"
          label="Email:"
          label-for="input-4"
          label-sr-only
          :invalid-feedback="v$.form.email.$errors[0]?.$message"
          :state="!v$.form.email.$error"
        >
          <b-form-input
            id="input-4"
            v-model="v$.form.email.$model"
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
          :invalid-feedback="v$.form.password.$errors[0]?.$message"
          :state="!v$.form.password.$error"
        >
          <b-form-input
            id="input-5"
            v-model="v$.form.password.$model"
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
          :invalid-feedback="v$.form.passwordConfirm.$errors[0]?.$message"
          :state="!v$.form.passwordConfirm.$error"
        >
          <b-form-input
            id="input-6"
            v-model="v$.form.passwordConfirm.$model"
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
import { useVuelidate } from "@vuelidate/core";
import { minLength, required, email } from "@/validators";

import LPageDialog from "@/components/layouts/LPageDialog.vue";

export default {
  name: "RegisterPage",

  components: {
    LPageDialog,
  },

  setup() {
    return { v$: useVuelidate() };
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

  validations() {
    return {
      form: {
        username: { minLength: minLength(4), required },
        firstName: { minLength: minLength(2), required },
        lastName: { minLength: minLength(2), required },
        email: { required, email },
        password: { minLength: minLength(6), required },
        passwordConfirm: { minLength: minLength(6), required },
      },
    };
  },

  methods: {
    onSubmit() {},

    onReset() {},
  },
};
</script>
