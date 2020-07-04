require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';
import Vuetify from 'vuetify';

window.Vue.use(Vuetify);

import App from './App.vue';
Vue.use(VueAxios, axios);

import IndexComponent from './components/gurus/Index.vue';
import CreateComponent from './components/gurus/Create.vue';
import EditComponent from './components/gurus/Edit.vue';

import HomeIndex from './components/home/Index.vue'

const routes = [
    {
        name: 'home',
        path: '/',
        component: HomeIndex
    },
    {
        name: 'gurus',
        path: '/guru',
        component: IndexComponent
    },
    {
        name: 'create',
        path: '/create',
        component: CreateComponent
    },
    {
        name: 'edit',
        path: '/edit/:id',
        component: EditComponent
    }
];

const router = new VueRouter({
    mode: 'history',
    routes: routes
});

// const app = new Vue(Vue.util.extend({ router }, App)).$mount('#app');

/* const app = new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    router: new VueRouter(router)
}); */

const app = new Vue(Vue.util.extend({ router }, App), {
}).$mount('#app');