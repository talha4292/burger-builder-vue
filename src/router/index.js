import { createRouter, createWebHistory } from 'vue-router'
import BurgerHome from '../components/BurgerHome.vue'
import BurgerAuth from '../components/BurgerAuth.vue'
import BurgerOrder from '../components/BurgerOrder.vue'
import OrderList from '../components/OrderList.vue'

const routes = [
  {
    path: '/',
    name: 'BurgerHome',
    component: BurgerHome
  },
  {
    path: '/auth',
    name: 'BurgerAuth',
    component: BurgerAuth
  },
  {
    path: '/order',
    name: 'BurgerOrder',
    component: BurgerOrder
  },
  {
    path: '/orders',
    name: 'OrderList',
    component: OrderList
  },
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router