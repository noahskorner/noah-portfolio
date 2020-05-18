import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../views/About.vue'
import Education from '../views/Education.vue'
import Experience from '../views/Experience.vue'
import Hobbies from '../views/Hobbies.vue'
import Skills from '../views/Skills.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'About',
    component: About
  },
  {
    path: '/Education',
    name: 'Education',
    component: Education
  },
  {
    path: '/Experience',
    name: 'Experience',
    component: Experience
  },
  {
    path: '/Hobbies',
    name: 'Hobbies',
    component: Hobbies
  },
  {
    path: '/Skills',
    name: 'Skills',
    component: Skills
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
