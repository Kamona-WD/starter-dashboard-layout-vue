import Home from '../views/Home.vue'
import authRoutes from './auth'
export default [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { layout: 'AppLayout' },
  },
  ...authRoutes,
]
