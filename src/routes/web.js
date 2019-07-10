import Main from '../views/Main.vue';
import Home from '../views/Home.vue';

export default {
  path: '/',
  component: Main,
  children: [
    {
      path: '',
      name: 'home',
      component: Home,
    },
  ],
};
