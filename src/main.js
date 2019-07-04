import Vue from 'vue';


// import плагинов
import './plugins';
import App from './App.vue';
import router from './routes';
import store from './store';
import i18n from './i18n';

// // WebSocket Framework
// import sockConfig from './config/socket';
// import { socketClient } from './socket';
//
// if (process.env.NODE_ENV !== 'production') {
//   Vue.prototype.$socketClient = socketClient.connect(`http://${sockConfig.host}:${sockConfig.port}`);
// } else {
//   Vue.prototype.$socketClient = socketClient;
// }

Vue.config.productionTip = false;

new Vue({
  i18n,
  router,
  store,
  render: h => h(App),
}).$mount('#app');
