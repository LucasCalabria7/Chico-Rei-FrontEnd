import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Cart from '../views/Cart.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/cart',
        name: 'Cart',
        component: Cart
    },
    {
        path: '/camiseta',
        name: 'Camiseta',
        component: () => import('../views/Camiseta.vue')
    },
    {
        path: '/tenis',
        name: 'Tenis',
        component: () => import('../views/Tenis.vue')
    },
    {
        path: '/relogio',
        name: 'Relogio',
        component: () => import('../views/Relogio.vue')
    },
    {
        path: '/oculos',
        name: 'Oculos',
        component: () => import('../views/Oculos.vue')
    },
    {
        path: '/vestido',
        name: 'Vestido',
        component: () => import('../views/Vestido.vue')
    },
    {
        path: '/sapato',
        name: 'Sapato',
        component: () => import('../views/Sapato.vue')
    },
    {
        path: '/relogiofem',
        name: 'RelogioFem',
        component: () => import('../views/RelogioFem.vue')
    },
    {
        path: '/bolsa',
        name: 'Bolsa',
        component: () => import('../views/Bolsa.vue')
    },
    {
        path: '/joia',
        name: 'Joia',
        component: () => import('../views/Joia.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router