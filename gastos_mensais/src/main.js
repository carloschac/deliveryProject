import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import GastosForm from './components/GastosForm.vue';
/* import OutraRota from './components/OutraRota.vue'; */ // Se você tiver outras rotas/componentes

Vue.use(VueRouter);

const routes = [
  { path: '/gastos', component: GastosForm },
  /* { path: '/outra-rota', component: OutraRota }, */ // Se você tiver outras rotas/componentes
];

const router = new VueRouter({
  routes,
});

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app');
