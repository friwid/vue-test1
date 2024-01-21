import { createRouter, createWebHashHistory } from "vue-router";
import PageViewer from "./views/PageViewer.vue";
import CreatePage from "./views/CreatePage.vue";
import Pages from "./views/Pages.vue";
import PagesList from "./views/PagesList.vue";


/**
 * Creates a new Vue Router instance.
 * @module router
 */
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    /**
     * Route for viewing a page.
     * The index parameter is optional.
     * If provided, it will be passed as a prop to the PageViewer component.
     */
    { path: "/:index?", component: PageViewer, props: true },
    { 
      path: "/pages", 
      component: Pages,
      children: [
        { path: "", component: PagesList },
        { path: "create", component: CreatePage }
      ] },
  ],
});

export default router;
