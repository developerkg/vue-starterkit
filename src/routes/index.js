import Vue from 'vue';
import Router from 'vue-router';

import AdminRoutes from './admin';
import WebRoutes from './web';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    WebRoutes,
    AdminRoutes,
  ],
});
