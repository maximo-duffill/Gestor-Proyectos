// router.js
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('.//components/MainPage.vue'), // Update with your actual Home component
  },
  {
    path: '/login',
    component: () => import('.//components/loginPage/loginComponent'), // Create a Login component
  },
  {
    path: '/signin',
    component: () => import('.//components/loginPage/signinComponent'), // Create a Login component
  },
  {
    path: '/dashboard',
    component: () => import('.//components/DashBoard.vue'), // Create a Login component
  },
  {
    path: '/users',
    component: () => import('.//components/users/AdminUsers.vue'), // Create Admin component
  },
  {
    path: '/details',
    component: () => import('.//components/projectDetails/DetailsProject.vue'), // Create details component
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;