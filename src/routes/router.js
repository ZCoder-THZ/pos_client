import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Detail from '../components/Detail.vue'

import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import OrderList from '../components/OrderList.vue'
import OrderItemList from '../components/OrderItemList.vue'
import Cart from '../components/Cart.vue'
import Profile from '../components/Profile.vue'


const routes = [
  { path: '/', component: Home, name: 'Home' },
  { path: '/detail/:id', component: Detail, name: 'Detail' },
  { path: '/login', component: Login, name: 'Login' },
  { path: '/Profile', component: Profile, name: 'Profile' },
  { path: '/register', component: Register, name: 'register' },
  { path: '/cart', component: Cart, name: 'Cart' },
  { path: '/orderList', component: OrderList, name: 'Order' },
  { path: '/orderItem/:orderCode', component: OrderItemList, name: 'OrderItem' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
