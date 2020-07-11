import Vue from 'vue';
import Router from 'vue-router';

// Views
import Welcome from './views/Welcome.vue';

Vue.use(Router);

const routes = [{
        path: '/',
        name: 'welcome',
        component: Welcome
    },
    {
        path: '/guru',
        name: 'guru',
        component: () => import('./views/Gurus.vue')
    },
    {
        path: '/siswa',
        name: 'siswa',
        component: () => import('./views/Siswas.vue')
    },
    {
        path: '/mapel',
        name: 'mapel',
        component: () => import('./views/Mapels.vue')
    },
    {
        path: '/kelas',
        name: 'kelas',
        component: () => import('./views/Kelass.vue')
    },
    {
        path: '/ekskul',
        name: 'ekskul',
        component: () => import('./views/Ekskuls.vue')
    },
    {
        path: '/setkelas',
        name: 'setkelas',
        component: () => import('./views/SetKelas.vue')
    },
    {
        path: '/setkelas/tambahsiswa',
        name: 'tambahsiswa',
        component: () => import('./views/AddSiswa.vue'),
        props: true
    }
]

const router = new Router({
    routes: routes,
    linkActiveClass: 'active'
});

export default router;
