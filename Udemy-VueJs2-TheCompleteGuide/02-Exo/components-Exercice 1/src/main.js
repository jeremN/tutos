import Vue from 'vue'
import App from './App.vue'
import Header from './Header.vue'
import Footer from './Footer.vue'
import List from './List.vue'
import ServerDetails from './ServerDetails.vue'

Vue.component('app-header', Header);
Vue.component('app-footer', Footer);
Vue.component('app-list', List);
Vue.component('app-info', ServerDetails);

new Vue({
  el: '#app',
  render: h => h(App)
})
