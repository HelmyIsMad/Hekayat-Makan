import { createRouter, createWebHistory } from 'vue-router'
 
//  :الراوتات اللي أنا مسؤولة عنها فقط  ساندي
import PrivacyPolicy from '../views/PrivacyPolicy.vue'
import TermsOfUse from '../views/TermsOfUse.vue'
import Search from '../views/Search.vue'
import Explore from '../views/Explore.vue'
// الراوتات اللي أنا مسؤولة عنها : رحمه
import Cities from '../views/Cities.vue'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import CityDetail from '../views/CityDetail.vue'
import PlaceDetail from '../views/PlaceDetail.vue'

const routes = [
  
  
{
    
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    
    path: '/explore',
    name: 'explore',
    component: Explore,
  },
  {
    path: '/explore/:id',
    name: 'PlaceDetail',
    component: PlaceDetail,
    props: true,
  },
  {
    
    path: '/cities',
    name: 'cities',
    component: Cities,
  },
  {
  path: '/cities/:id',
  name: 'CityDetail',
  component: CityDetail,
  props: true,
},
  {
    
    path: '/about',
    name: 'about',
    component: About,
  },
  {

    path: '/privacy',
    name: 'privacy',
    component: PrivacyPolicy,
  },
  {
    path: '/terms',
    name: 'terms',
    component: TermsOfUse,
  },
  {
    path: '/search',
    name: 'search',
    component: Search,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0 }
  },
})

export default router
