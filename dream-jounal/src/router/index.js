import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Dreams from '../views/Dreams.vue';
import DreamDetails from '../views/DreamDetails.vue';
import AddDream from '../views/AddDream.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/dreams',
    name: 'Dreams',
    component: Dreams,
  },
  {
    path: '/dreams/:id',
    name: 'DreamDetails',
    component: DreamDetails,
  },
  {
    path: '/add-dream',
    name: 'AddDream',
    component: AddDream,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
