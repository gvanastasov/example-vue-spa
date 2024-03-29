<template>
  <b-navbar toggleable="lg" type="dark" variant="primary" dark="true">
    <b-navbar-brand :to="{ name: 'home' }">Example Company</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item :to="{ name: 'home' }">Home</b-nav-item>
        <b-nav-item :to="{ name: 'browse' }">Books</b-nav-item>
        <b-nav-item :to="{ name: 'shops' }">Shops</b-nav-item>
        <b-nav-item href="#">About</b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ms-auto">
        <!-- todo: add search functionality. -->
        <!-- <b-nav-form>
          <b-form-input
            size="sm"
            class="mr-sm-2"
            placeholder="Search"
          ></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit"
            >Search</b-button
          >
        </b-nav-form> -->

        <b-nav-item-dropdown :text="$i18n.locale" right>
          <b-dropdown-item
            v-for="locale in $i18n.availableLocales"
            :key="`locale-${locale}`"
            :value="locale"
            @click="changeLocale(locale)"
            >{{ locale }}</b-dropdown-item
          >
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>
          <template #button-content>{{ username }}</template>
          <template v-if="userAuthenticated">
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item @click="handleLogutClick">Logout</b-dropdown-item>
          </template>
          <template v-else>
            <b-dropdown-item :to="{ name: 'login' }">Login</b-dropdown-item>
            <b-dropdown-item :to="{ name: 'register' }"
              >Register</b-dropdown-item
            >
          </template>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import { mapState, mapGetters, mapActions } from "pinia";
import { useUserStore } from "@/stores";

/**
 * A navigation bar component with user information and language options
 */
export default {
  /**
   * Name of the component
   * @type {string}
   */
  name: "CNavbar",

  computed: {
    /**
     * Map the username state from the user store
     * @type {Object}
     */
    ...mapState(useUserStore, {
      username: "username",
    }),

    /**
     * Map the userAuthenticated getter from the user store
     * @type {Object}
     */
    ...mapGetters(useUserStore, {
      userAuthenticated: "isAuthenticated",
    }),
  },

  methods: {
    /**
     * Map the logout action from the user store
     * @type {Object}
     */
    ...mapActions(useUserStore, {
      userLogout: "logout",
    }),

    /**
     * Handle logout click event
     */
    handleLogutClick() {
      this.userLogout();
    },

    /**
     * Change the locale of the application
     * @param {string} locale - The new locale to set
     */
    changeLocale(locale) {
      this.$i18n.locale = locale;
    },
  },
};
</script>
