import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
    {
        path: '*',
        redirect: '/read'
    },
    {
        name: 'user',
        component: () => import('./view/user'),
        meta: {
            title: '我'
        }
    },
    {
        name: 'subscribe',
        component: () => import('./view/subscribe'),
        meta: {
            title: '订阅'
        }
    },
    {
        name: 'search',
        component: () => import('./view/search'),
        meta: {
            title: '搜索'
        }
    },
    {
        name: 'read',
        component: () => import('./view/read'),
        meta: {
            title: '阅读'
        }
    }
];

// add route path
routes.forEach(route => {
    route.path = route.path || '/' + (route.name || '');
});

const router = new Router({ routes });

router.beforeEach((to, from, next) => {
    const title = to.meta && to.meta.title;
    if (title) {
        document.title = title;
    }
    next();
});

export {
    router
};