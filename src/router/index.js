import { createRouter, createWebHistory } from 'vue-router'
const Home = ()=>import('views/Tabbar/Home')
const About = () => import('views/Tabbar/About')
const Cart = () => import('views/Tabbar/Cart')
const Profile = () => import('views/Tabbar/Profile')
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
