<template>
  <header>
    <navbar></navbar>
  </header>

  <main>
    <router-view></router-view>

    <!--     <page-viewer
      v-if="pages.length > 0"
      :page="pages[activePage]"
    ></page-viewer>

    <create-page @page-created="pageCreated"></create-page> -->
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
  methods: {
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
