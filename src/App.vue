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

    <create-page @page-created="pageCreated"></create-page>
  </main>

  <footer></footer>
</template>

<script>
// Importing necessary components
import Navbar from "./components/Navbar.vue";
import PageViewer from "./components/PageViewer.vue";
import CreatePage from "./components/CreatePage.vue";

export default {
  // Registering the components
  components: {
    Navbar,
    PageViewer,
    CreatePage,
  },
  // Lifecycle hook that is called after the instance has been created
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
      pages: [],
    };
  },
  methods: {
    /**
     * Fetches the pages from the server and updates the state.
     * @async
     */
    async getPages() {
      let res = await fetch("pages.json");
      let data = await res.json();

      this.pages = data;
    },
    /**
     * Adds a new page to the list of pages.
     * @param {Object} pageObj - The new page object to be added.
     */
    pageCreated(pageObj) {
      this.pages.push(pageObj);
    },
  },
};
</script>
