import Register from '../views/auth/Register'
import Login from '../views/auth/Login'
import GuestLayout from '../components/layouts/GuestLayout'

export default [
  {
    path: '/auth/register',
    name: 'Register',
    component: Register,
    meta: { layout: GuestLayout },
  },
  {
    path: '/auth/login',
    name: 'Login',
    component: Login,
    meta: { layout: GuestLayout },
  },
]
