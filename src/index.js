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
import Goods from './../view/goods.vue';
import orderSubmit from './../view/order-submit.vue';
import addressList from './../view/address-list.vue';
import address from './../view/address.vue';
import orderList from './../view/orderlist.vue';
import orderDetail from './../view/order-detail.vue';
import List from './../view/list.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/cat', component: Cat },
    { path: '/cart', component: Cart },
    { path: '/user', component: User },
    { path: '/orderlist', component: orderList },
    { path: '/list', component: List },
    { path: '/order-list', component: orderSubmit },
    { path: '/goods', component: Goods },
    { path: '/order-submit', component: orderSubmit },
    { path: '/address-list', component: addressList },
    { path: '/address-edit', component: address },
    { path: '/address-add', component: address },
    {path: '/order-detail', component: orderDetail},
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
