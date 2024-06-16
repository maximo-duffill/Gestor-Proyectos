// main.js
import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/theme-chalk/index.css';
import App from './App.vue';

import axios from 'axios';
import router from './router';
import store from './store';

axios.defaults.baseURL = 'http://localhost:3000';


const app = createApp(App);
app.use(ElementPlus);
app.use(router);
app.use(store);
app.mount('#app');