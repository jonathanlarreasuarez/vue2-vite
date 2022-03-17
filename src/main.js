import Vue from 'vue';
import App from './App.vue';

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import router from './router'
import store from "./store"


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.use(BootstrapVue)

Vue.use(IconsPlugin)

Vue.config.productionTip = false


new Vue({
    router: router,
    store,
  render: (h) => h(App),
}).$mount('#app');
