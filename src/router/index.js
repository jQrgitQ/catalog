import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Gallery from '@/views/Gallery.vue'
import About from '@/views/About.vue'
import Contact from '@/views/Contact.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/galeria', component: Gallery },
    { path: '/sobre-mi', component: About },
    { path: '/contacto', component: Contact }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router