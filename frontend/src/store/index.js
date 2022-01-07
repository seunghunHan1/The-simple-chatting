import Vue from 'vue';
import Vuex from 'vuex';
import { loginUser } from '@/api/auth';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		userInfo: JSON.parse(sessionStorage.getItem('userInfo')),
	},
	mutations: {
		changeUser(state, user) {
			state.userInfo = user;
		},
		clearUserInfo(state) {
			state.userInfo = null;
		},
	},
	actions: {
		async LOGIN({ commit }, userInfo) {
			const { data } = await loginUser(userInfo);
			commit('changeUser', data.user);
			sessionStorage.setItem('userInfo', JSON.stringify(data.user));
		},
	},
});
