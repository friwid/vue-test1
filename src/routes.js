import { createRouter, createWebHashHistory } from "vue-router";
import PageViewer from "./components/PageViewer.vue";
import CreatePage from "./components/CreatePage.vue";


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
    /**
     * Route for creating a new page.
     */
    { path: "/create", component: CreatePage },
  ],
});

export default router;
