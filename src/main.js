import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';

import './assets/scss/styles.scss';
// import "bootstrap";

import Home from './views/Home.vue';
import Category from './views/Category.vue';
import Product from './views/Product.vue';
import CheckOut from './views/CheckOut.vue';



const router = createRouter({
	scrollBehavior() {
		// always scroll to top
		return { top: 0 };
	},
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			redirect: { name: 'home' },
		},
		{
			path: '/audiophile/',
			name: 'home',
			component: Home,
			
		},
		{
			path: '/audiophile/:category',
			name: 'category',
			component: Category,
		},
		{
			path: '/audiophile/:category/:product',
			name: 'product',
			component: Product,
		},
		{
			path: '/audiophile/checkout',
			name: 'checkout',
			component: CheckOut,
		},
	],
});

// import "bootstrap/scss/bootstrap.scss";



createApp(App).use(router).mount('#app');
import "bootstrap/dist/js/bootstrap.js";
