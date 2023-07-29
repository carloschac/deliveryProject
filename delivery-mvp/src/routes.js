import Home from './views/Home-Delivery.vue'; // Importe o componente para a rota Home
import About from './views/About-Delivery.vue'; // Importe o componente para a rota About

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  // Adicione mais rotas conforme necessário
];

export default routes;
