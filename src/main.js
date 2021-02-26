import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import AppLayout from './components/layouts/AppLayout.vue'
import GuestLayout from './components/layouts/GuestLayout.vue'
import './assets/css/main.css'

const app = createApp(App)

app.use(router)
app.component('AppLayout', AppLayout)
app.component('GuestLayout', GuestLayout)
app.mount('#app')
