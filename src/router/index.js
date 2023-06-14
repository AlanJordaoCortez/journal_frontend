import { createRouter, createWebHistory } from 'vue-router'
import JournalEntriesList from '../components/JournalEntriesList.vue'
import EntryView from '../components/EntryView.vue'
import NewEntryView from '../components/NewEntryView.vue'

const routes = [
    {
        path: '/',
        name: 'List', //similar to identifier for the route
        component: JournalEntriesList
    },  
    {
        path: '/entry/:title',
        name: 'Entry',
        component: EntryView,
        props: true
    }, 
    {
        path:'/entry/new',
        name: 'New',
        component: NewEntryView,
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router