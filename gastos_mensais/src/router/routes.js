import { createWebHistory, createRouter } from 'vue-router';
import GastosForm from '@/components/GastosForm.vue'; // Lembre-se de ajustar o caminho
import CadastroMes from '@/components/CadastrarMes.vue';
import ListarMes from '@/components/ListarMes.vue';
import ListarGastos from '@/components/ListarGastos.vue'

const routes = [
  { path: '/cadastroGastos', component: GastosForm }, // Página inicial aponta para o componente GastosForm
  { path: '/consultaGastos', component: ListarGastos },
  { path: '/cadastroMes', component: CadastroMes },
  { path: '/consultaMes', component: ListarMes },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
