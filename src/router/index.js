import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/views/Home";
import {auth} from '@/firebase'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
    },
    {
        path: '/login/additional-info',
        name: 'additional-info',
        component: () => import(/* webpackChunkName: "login" */ '../views/AdditionalInfo.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/diet',
        name: 'diet',
        component: () => import(/* webpackChunkName: "diet" */ '../views/DietDashboard.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '*',
        name: 'error',
        component: () => import(/* webpackChunkName: "diet" */ '../views/404NotFound.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior (to) {
        console.log(to.hash)
        if (to.hash) {
            return {
                selector: to.hash,
                // y is height of header
                offset: { x: 0, y: 74},
                behavior: 'smooth',
            }
        }
    }
})

// navigation guard to check for logged in users
router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(x => x.meta.requiresAuth)

    if (requiresAuth && !auth.currentUser) {
        next({
            path: '/login',
            query: {redirect: to.fullPath}
        })
    } else {
        next()
    }
})

export default router