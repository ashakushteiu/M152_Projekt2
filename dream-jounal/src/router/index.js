import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Dreams from '../views/Dreams.vue';
import DreamDetails from '../views/DreamDetails.vue';
import AddDream from '../views/AddDream.vue';
import EditDream from '../views/EditDream.vue';

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
  {
    path: '/edit-dream/:id',
    name: 'EditDream',
    component: EditDream,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
