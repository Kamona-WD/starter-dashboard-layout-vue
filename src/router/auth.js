import Register from '../views/auth/Register.vue'
import Login from '../views/auth/Login.vue'

export default [
  {
    path: '/auth/register',
    name: 'Register',
    component: Register,
    meta: { layout: 'GuestLayout' },
  },
  {
    path: '/auth/login',
    name: 'Login',
    component: Login,
    meta: { layout: 'GuestLayout' },
  },
]
