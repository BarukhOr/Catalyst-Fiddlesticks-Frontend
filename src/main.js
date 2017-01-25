// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import vue from 'vue';
import vueResource from 'vue-resource';
import vueRouter from 'vue-router';

import app from './App';
import { routes } from './routes.js';

vue.use(vueRouter);
// vue.use(vueResource);

const router = new vueRouter({
    mode: 'history', // 'hash' || 'abstract',
    routes: routes
})

/* eslint-disable no-new */
new vue({
    el: '#app',
    router: router,
    template: '<app/>',
    components: { app }
})
