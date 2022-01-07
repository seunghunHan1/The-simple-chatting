import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import store from '@/store/index';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
		meta: {
			auth: true,
		},
	},
	{
		path: '/about',
		name: 'About',
		component: () => import('../views/About.vue'),
	},
	{
		path: '/login',
		name: 'About',
		component: () => import('../views/LoginPage.vue'),
		meta: {
			layout: 'LoginLayout',
		},
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

router.beforeEach((to, from, next) => {
	if (to.meta.auth && store.state.userInfo == null) {
		alert('로그인 먼저 하세요');
		next('/login');
	}
	next();
});

export default router;
