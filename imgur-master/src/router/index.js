import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import ImageDetails from "../components/ImageDetails";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/image/:id',
    name: 'imageDetails',
    component: ImageDetails
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
