import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import Vant from 'vant';
import 'vant/lib/vant-css/index.css';

Vue.use(Vant);

import App from './../view/app.vue';
import Home from './../view/home.vue';
import Cat from './../view/cat.vue';
import Cart from './../view/cart.vue';
import User from './../view/user.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/cat', component: Cat },
    { path: '/cart', component: Cart },
    { path: '/user', component: User }
];

const router = new VueRouter({
    routes
});

new Vue({
    el:'#app',
    router,
    template: '<App/>',
    components: { App },
});
