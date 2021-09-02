import Home from '../views/Home'
import authRoutes from './auth'
import AppLayout from '../components/layouts/AppLayout'

export default [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { layout: AppLayout },
  },
  ...authRoutes,
]
