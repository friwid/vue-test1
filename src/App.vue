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
                link: {text: 'Home', url: 'index.html'},
                pageTitle: 'Welcome, Player!',
                content: 'Conquer the world.'
            },
            {
              link: {text: 'Register', url: 'register.html'},
                pageTitle: 'Create an account!',
                content: '[Register form]'
            },
            {
              link: {text: 'Login', url: 'login.html'},
                pageTitle: 'Login to start conquering!',
                content: '[Login form]'
            }

            ]
        };
    }
    }
</script>