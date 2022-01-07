import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './vuetify';

import io from 'socket.io-client';
const socket = io('http://localhost:3001');

Vue.prototype.$socket = socket;

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	vuetify,
	render: h => h(App),
}).$mount('#app');
