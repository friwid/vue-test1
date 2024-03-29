import { createApp, VueElement } from "vue";
import App from "./App.vue";
// import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import $bus from "./utils/events.js";
import router from "./routes.js";
import $pages from "./data.js";

const app = createApp(App);

app.use(router);

//app.config.globalProperties.$bus = $bus;
//app.config.globalProperties.$pages = $pages;

app.provide("$bus", $bus);
app.provide("$pages", $pages);

app.mount("#app");
