import { createRouter, createWebHistory } from "vue-router";

 import dashboard from '../pages/master/dashboard.vue'

 import home from '../pages/home.vue'
 import login from '../pages/login.vue'
 import Regis from '../pages/registration.vue'
 import upload from '../pages/upload.vue'
    const routes = [
        {
            name: 'Dashboard',
            path: '/',
            component:dashboard 
        },
        {
            name: 'home',
            path: '/home',
            component:home
        },
        {
            name: 'login',
            path: '/login',
            component:login
        },
        {
            name: 'Regis',
            path: '/Regis',
            component:Regis
        },
        {
            name: 'upload',
            path: '/upload',
            component:upload
        }
    ];

    const router = Router();
    export default router;
    function Router() {
        const router = new createRouter({
            history: createWebHistory(),
            routes,
        });
        return router;
    }