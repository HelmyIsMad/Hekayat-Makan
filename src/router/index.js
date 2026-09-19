import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'home', component: () => import('../views/Home.vue') },
  { path: '/explore', name: 'explore', component: () => import('../views/Explore.vue') },
  { path: '/explore/:id', name: 'PlaceDetail', component: () => import('../views/PlaceDetail.vue'), props: true },
  { path: '/cities', name: 'cities', component: () => import('../views/Cities.vue') },
  { path: '/cities/:id', name: 'CityDetail', component: () => import('../views/CityDetail.vue'), props: true },
  // legacy redirect
  { path: '/place/:id', redirect: (to) => `/explore/${to.params.id}` },
  { path: '/about', name: 'about', component: () => import('../views/About.vue') },
  { path: '/privacy', name: 'privacy', component: () => import('../views/PrivacyPolicy.vue') },
  { path: '/terms', name: 'terms', component: () => import('../views/TermsOfUse.vue') },
  { path: '/search', name: 'search', component: () => import('../views/Search.vue') },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('../views/NotFound.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  },
})

export default router
