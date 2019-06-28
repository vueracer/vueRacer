import Vue from 'vue'
import App from './App.vue'
import store from './store'
// import Swal from 'sweetalert2'
import router from './router'

Vue.config.productionTip = false
// Vue.use(Swal)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
