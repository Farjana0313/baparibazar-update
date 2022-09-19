import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/auth/Login.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: ()=>import('../views/dashboard/Dashboard.vue')
  },
  {
    path:'/new-order',
    name:'New Order',
    component: () => import('../views/NewOrder.vue')
  },
  {
    path: '/contact-list',
    name: 'Contact List',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ContactList.vue')
  },
  {
    path:'/discount',
    name:'Discount',
    component:()=>import('../views/Discount.vue')
  },
  {
    path:'/order',
    name:'Order',
    component: () => import('../views/Order.vue')
  },
  {
    path:'/product-list',
    name:'Product List',
    component: () => import('../views/ProductList.vue')
  },
  {
    path:'/product-manager',
    name:'Product Manager',
    component: () => import('../views/ProductManager.vue')
  },
  {
    path:'/product-overview',
    name:'Product Overview',
    component: () => import('../views/ProductOverview.vue')
  },
  {
    path:'/product-price-update-history',
    name:'Product Price Update History',
    component: () => import('../views/ProductPriceUpdateHistory.vue')
  },
  {
    path:'/sales-analytics',
    name:'Sales Analytics',
    component: () => import('../views/SalesAnalytics.vue')
  },
  {
    path:'/sales-list',
    name:'Sales List',
    component: () => import('../views/SalesList.vue')
  },
  {
    path:'/service-charges',
    name:'Service Charges',
    component: () => import('../views/ServiceCharges.vue')
  },
  {
    path:'/user-list',
    name:'User List',
    component: () => import('../views/UserList.vue')
  },
  {
    path:'/role',
    name:'Role',
    component: () => import('../views/role/Role')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
