import Vue from 'vue'
import App from './App.vue'

//register filter globally
Vue.filter('to-lowercase', function(value) {
	return value.toLowerCase();
});

//global mixin
Vue.mixin({
	created() {
		console.log('Global mixin');
	}
});

new Vue({
  el: '#app',
  render: h => h(App)
})
