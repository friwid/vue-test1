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
          <li v-for="(page, index) in publishedPages" class="nav-item" :key="index">
            <navbar-link
              :page="page"
              :isActive="activePage == index"
              @click.prevent="navLinkClick(index)"
            ></navbar-link>
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
  created() {
    this.getThemeSetting();
  },
  computed: {
    publishedPages() {
      return this.pages.filter(p => p.published);
    }
  },
  props: ["pages", "activePage", "navLinkClick"],
  data() {
    return {
      light: "light",
      dark: "dark",
      theme: this.light,
      themeContrast: this.dark,
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
    storeThemeSetting() {
      localStorage.setItem("theme", this.theme);
      localStorage.setItem("themeContrast", this.themeContrast);
    },
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
