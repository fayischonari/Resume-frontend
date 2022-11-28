import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'
import accordionForm from '../views/Accordion.vue'
import EditResume from '../views/ResumeEdit.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path:'/form',
    name:'form',
    component:accordionForm
  },
  {
    path:'/edit/:id',
    name:'edit',
    component:EditResume
  },
 
  
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
