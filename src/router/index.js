import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import InstalacionDual from'../views/InstalacionDual.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/instalaciondual',
    name: 'InstalacionDual',
    component: InstalacionDual
  },
  // Aquí puedes añadir más rutas según sea necesario
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
