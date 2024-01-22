<template>
  <nav
    :class="[`navbar-${theme}`, `bg-${theme}`, 'navbar', 'navbar-expand-lg']"
  >
    <div class="container-fluid">
      <a class="navbar-brand" href="#">bgame</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        ria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <navbar-link
            v-for="(page, index) in publishedPages"
            class="nav-item"
            :key="index"
            :page="page"
            :index="index"
          ></navbar-link>

          <li>
            <router-link
              to="/pages"
              class="nav-link"
              active-class="active"
              aria-current="page"
              >Pages
            </router-link>
          </li>
        </ul>
        <div class="form-check form-switch">
          <input
            class="form-check-input"
            type="checkbox"
            role="switch"
            id="theme"
            @click="changeTheme()"
            :checked="theme == light"
          />
          <label :class="`text-${themeContrast}`" for="theme"
            >Go {{ themeContrast }}</label
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import NavbarLink from "./NavbarLink.vue";

export default {
  components: {
    NavbarLink,
  },
  inject: ["$pages"],
  /**
   * Retrieves the theme setting and fetches all pages.
   */
  created() {
    this.getThemeSetting();

    this.pages = this.$pages.getAllPages();
  },
  computed: {
    /**
     * Returns only the published pages.
     * @returns {Array} An array of published pages.
     */
    publishedPages() {
      return this.pages.filter((p) => p.published);
    },
  },
  data() {
    return {
      light: "light",
      dark: "dark",
      theme: this.light,
      themeContrast: this.dark,
      pages: [],
    };
  },
  methods: {
    /**
     * Switches the theme of the webpage between 'light' and 'dark'.
     * @returns {void} No return value
     */
    changeTheme() {
      let theme = this.light;
      let themeContrast = this.dark;

      if (this.theme == this.light) {
        theme = this.dark;
        themeContrast = this.light;
      }

      this.theme = theme;
      this.themeContrast = themeContrast;
      this.storeThemeSetting();
    },
    /**
     * Stores the current theme settings in the local storage.
     * @returns {void} No return value
     */
    storeThemeSetting() {
      localStorage.setItem("theme", this.theme);
      localStorage.setItem("themeContrast", this.themeContrast);
    },
    /**
     * Retrieves the theme settings from the local storage and applies them.
     * @returns {void} No return value
     */
    getThemeSetting() {
      let theme = localStorage.getItem("theme");
      let themeContrast = localStorage.getItem("themeContrast");

      if (theme && themeContrast) {
        this.theme = theme;
        this.themeContrast = themeContrast;
      }
    },
  },
};
</script>
