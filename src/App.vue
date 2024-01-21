<template>
  <header>
    <navbar></navbar>
  </header>

  <main>
    <router-view></router-view>
  </main>

  <footer></footer>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  components: {
    Navbar,
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
