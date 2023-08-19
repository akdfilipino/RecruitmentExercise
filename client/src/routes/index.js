import { createRouter, createWebHistory} from 'vue-router'

const Home = () => import('../views/Home.vue')
const Login = () => import('../views/Login.vue')

const routes = [
    { 
        path: '/',
        name : 'home',
        component: Home,
        props: true,
    },
    { 
        path: '/account/login', 
        name : 'login',
        component: Login,
        props: true,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})
export default router