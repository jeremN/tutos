import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import Vuelidate from 'vuelidate'

import router from './router'
import store from './store'

Vue.use(Vuelidate)

axios.defaults.baseURL = 'https://vuejs-http-3a9aa.firebaseio.com'
//axios.defaults.headers.common['Authorization'] = 'Test';
//axios.defaults.headers.get['Accepts'] = 'application/json'
/*
const reqInterceptor = axios.interceptors.request.use(config => {
	console.log('request interceptors', config)
	return config
})

const resInterceptor = axios.interceptors.response.use(res => {
	console.log('response interceptors', res)
	return res
})

axios.interceptors.request.eject(reqInterceptor)
axios.interceptors.request.eject(resInterceptor)
*/
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
