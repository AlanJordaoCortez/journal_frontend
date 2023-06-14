import { createRouter, createWebHistory } from 'vue-router'
import JournalEntriesList from '../components/JournalEntriesList.vue'
import HelloWorld from '../components/HelloWorld.vue'

const routes = [
    {
        path: '/',
        name: 'List', //similar to identifier for the route
        component: JournalEntriesList
    },  
    {
        path: '/hello',
        name: 'Hello',
        component: HelloWorld
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router