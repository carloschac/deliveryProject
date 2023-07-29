import { createApp } from 'vue'; // Importe apenas o createApp do Vue
import App from './App.vue';
import routes from './routes.js';
import { createRouter, createWebHistory } from 'vue-router'; // Importe o createRouter e createWebHistory do vue-router

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App)
  .use(router) // Use o router criado
  .mount('#app');
