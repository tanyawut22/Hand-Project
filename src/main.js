// The Vue build version to load with the `import` command

// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import firebase from 'firebase/compat/app'
// import {firebaseConfig} from './config'
// import 'firebase/compat/database'
// import 'firebase/compat/firestore'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


import VueApexCharts from 'vue-apexcharts'
Vue.use(VueApexCharts)
Vue.component('apexchart', VueApexCharts)
// firebase.initializeApp(firebaseConfig);
// export const db = firebase.database();
// export const dbf = firebase.firestore();
// console.log(dbf);

// Vue.use(firebaseApp);

Vue.config.productionTip = false



Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
