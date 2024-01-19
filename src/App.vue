<template>
  <header>
    <navbar
      :pages="pages"
      :active-page="activePage"
    ></navbar>
  </header>

  <main>
        <page-viewer
      v-if="pages.length > 0"
      :page="pages[activePage]"
    ></page-viewer>

    <create-page @page-created="pageCreated"></create-page>
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
    CreatePage,
  },
  created() {
    this.getPages();

    this.$bus.$on('navbarLinkActivated', (index) => {
      this.activePage = index;
    });
  },
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
