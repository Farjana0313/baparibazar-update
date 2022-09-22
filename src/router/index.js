import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import Login from '../views/auth/Login.vue'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'Dashboard',
    component: () => import('../views/dashboard/Dashboard.vue')
  },
  {
    path: '/order',
    name: 'Order',
    component: () => import('../views/pages/Order.vue')
  },
  {
    path: '/product_overview',
    name: 'ProductOverview',
    component: () => import('../views/pages/ProductOverview')
  },
  {
    path: '/product_list',
    name: 'ProductList',
    component: () => import('../views/pages/ProductList')
  },
  {
    path: '/price_update_history',
    name: 'ProductPriceUpdateHistory',
    component: () => import('../views/pages/ProductPriceUpdateHistory')
  },
  {
    path: '/sales_analytics',
    name: 'SalesAnalytics',
    component: () => import('../views/pages/SalesAnalytics')
  },
  {
    path: '/sales_list',
    name: 'SalesList',
    component: () => import('../views/pages/SalesList')
  },
  {
    path: '/contact_list',
    name: 'ContactList',
    component: () => import('../views/pages/ContactList')
  },
  {
    path: '/product_manager',
    name: 'ProductManager',
    component: () => import('../views/pages/ProductManager')
  },
  {
    path: '/user_list',
    name: 'UserList',
    component: () => import('../views/pages/UserList')
  },
  {
    path: '/role',
    name: 'Role',
    component: () => import('../views/pages/Role')
  },
  {
    path: '/service_changes',
    name: 'ServiceCharges',
    component: () => import('../views/pages/ServiceCharges')
  },
  {
    path: '/discount',
    name: 'Discounts',
    component: () => import('../views/pages/Discounts')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
