import Vue from 'vue'
import App from './App.vue'
import './assets/css/app.css';
import '../node_modules/admin-lte/dist/js/adminlte'

// Vue Router
import router from './Routes/Index'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')