import { createApp } from 'vue';
import App from './App.vue';
import router from './router/routes'; // Importe o arquivo routes.js

createApp(App)
  .use(router) // Use o Vue Router
  .mount('#app');
