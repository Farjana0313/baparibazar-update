import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/auth/LoginView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: LoginView
  },
  {
    path: '/contact-list',
    name: 'Contact List',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ContactListView.vue')
  },
  {
    path:'/discount',
    name:'Discount',
    component:()=>import('../views/DiscountView.vue')
  },
  {
    path:'/new-order',
    name:'New Order',
    component: () => import('../views/NewOrderView.vue')
  },
  {
    path:'/order',
    name:'Order',
    component: () => import('../views/OrderView.vue')
  },
  {
    path:'/product-list',
    name:'Product List',
    component: () => import('../views/ProductListView.vue')
  },
  {
    path:'/product-manager',
    name:'Product Manager',
    component: () => import('../views/ProductManagerView.vue')
  },
  {
    path:'/product-overview',
    name:'Product Overview',
    component: () => import('../views/ProductOverviewView.vue')
  },
  {
    path:'/product-price-update-history',
    name:'Product Price Update History',
    component: () => import('../views/ProductPriceUpdateHistoryView.vue')
  },
  {
    path:'/sales-analytics',
    name:'Sales Analytics',
    component: () => import('../views/SalesAnalyticsView.vue')
  },
  {
    path:'/sales-list',
    name:'Sales List',
    component: () => import('../views/SalesListView.vue')
  },
  {
    path:'/service-charges',
    name:'Service Charges',
    component: () => import('../views/ServiceChargesView.vue')
  },
  {
    path:'/user-list',
    name:'User List',
    component: () => import('../views/UserListView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
