import {createApp, VueElement} from 'vue';
import App from './App.vue';
// import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import $bus from './utils/events.js';

const app = createApp(App);

app.config.globalProperties.$bus = $bus;

app.mount('#app');