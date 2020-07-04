import Vue from 'vue';
import Router from 'vue-router';

// Views
import Welcome from './views/Welcome.vue';

Vue.use(Router);

const routes = [
    {
        path: '/',
        name: 'welcome',
        component: Welcome
    },
    {
        path: '/guru',
        name: 'guru',
        component: () => import('./views/Gurus.vue')
    }
]

const router = new Router({
    routes: routes,
    linkActiveClass: 'active'
});

export default router;