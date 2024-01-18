<template>
  <header>
    <navbar
      :pages="pages"
      :active-page="activePage"
      :nav-link-click="(index) => (activePage = index)"
    ></navbar>
  </header>

  <main>
<!--     <page-viewer
      v-if="pages.length > 0"
      :page="pages[activePage]"
    ></page-viewer> -->

  <create-page
    :page-created="pageCreated"
  ></create-page>

  </main>

  <footer></footer>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import PageViewer from "./components/PageViewer.vue";
import CreatePage from "./components/CreatePage.vue";

export default {
  components: {
    Navbar,
    PageViewer,
    CreatePage
  },
  created() {
    this.getPages();
  },
  /**
   * Initializes the data for the Vue instance.
   * @returns {Object} An object containing the initial data.
   * @property {number} activePage - The index of the active page.
   * @property {Array} pages - An array of page objects. Each page object contains a link (with text and URL), a page title, and content.
   */
  data() {
    return {
      activePage: 0,
      pages: []
    };
  },
  methods: {
    async getPages() {
      let res = await fetch("pages.json");
      let data = await res.json();

      this.pages = data;
    },
    pageCreated(pageObj) {
      console.log(pageObj);
    }
  },
};
</script>
