import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Services from '../pages/Services.vue'
import Equipe from '../pages/Equipe.vue'
import RendezVous from '../pages/RendezVous.vue'
import Contact from '../pages/Contact.vue'

const routes = [
  { path: '/', component: Home, meta: { title: 'Accueil — Toilettage Sarrazin' } },
  { path: '/services', component: Services, meta: { title: 'Services — Toilettage Sarrazin' } },
  { path: '/equipe', component: Equipe, meta: { title: 'Notre équipe — Toilettage Sarrazin' } },
  { path: '/rendez-vous', component: RendezVous, meta: { title: 'Prendre rendez-vous — Toilettage Sarrazin' } },
  { path: '/contact', component: Contact, meta: { title: 'Contact — Toilettage Sarrazin' } },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

router.afterEach((to) => {
  document.title = to.meta.title || 'Toilettage Sarrazin'
})

export default router
