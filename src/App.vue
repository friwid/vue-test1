<template>
  <header>
    <navbar 
      :pages="pages"
      :active-page="activePage"
      :nav-link-click="(index) => activePage = index"
    ></navbar>
  </header>

  <main>
    <page-viewer 
      :page="pages[activePage]"
    ></page-viewer>
  </main> 

  <footer>

  </footer>
</template>

<script>
import Navbar from './components/Navbar.vue';

import PageViewer from './components/PageViewer.vue';

export default {
    components: {
        Navbar,
        PageViewer
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
            pages: [
            {
                pageLink: {linkText: 'Home', linkUrl: 'index.html'},
                pageTitle: 'Welcome, Player!',
                pageContent: 'Conquer the world.'
            },
            {
                pageLink: {linkText: 'Register', linkUrl: 'register.html'},
                pageTitle: 'Create an account!',
                pageContent: '[Register form]'
            },
            {
                pageLink: {linkText: 'Login', linkUrl: 'login.html'},
                pageTitle: 'Login to start conquering!',
                pageContent: '[Login form]'
            }

            ]
        };
    }
    }
</script>