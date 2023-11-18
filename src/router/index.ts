import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Container from '../components/container/src/index.vue'
import ChooseIcon from '../views/chooseIcon/index.vue'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: Container,
        children: [
            {
                path: '/',
                component: Home
            },
            {
                path: 'chooseIcon',
                component: ChooseIcon
            }
        ]
    },
   
];

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router