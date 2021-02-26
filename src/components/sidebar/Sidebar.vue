<template>
  <Backdrop :show="isSidebarOpen" @close="isSidebarOpen = false" class="lg:hidden" />
  <aside
    class="fixed inset-y-0 z-10 flex flex-col flex-shrink-0 w-64 max-h-screen transition-all transform bg-white border-r shadow-lg lg:z-auto lg:static lg:shadow-none"
    :class="{ '-translate-x-full lg:translate-x-0 lg:w-20': !isSidebarOpen }"
  >
    <!-- sidebar header -->
    <SidebarHeader />
    <!-- Sidebar links -->
    <nav aria-label="Main" class="flex-1 overflow-hidden hover:overflow-y-auto">
      <!-- Sidebar Links... -->
      <ul class="p-2">
        <li>
          <router-link
            :to="{ name: 'Home' }"
            class="flex items-center p-2 overflow-hidden rounded-md hover:bg-gray-100"
            :class="{ 'justify-center': !isSidebarOpen }"
          >
            <HomeIcon aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-400" />
            <span class="ml-2" :class="{ 'lg:hidden': !isSidebarOpen }">Home</span>
          </router-link>
        </li>
        <li>
          <router-link
            :to="{ name: 'Register' }"
            class="flex items-center p-2 overflow-hidden rounded-md hover:bg-gray-100"
            :class="{ 'justify-center': !isSidebarOpen }"
          >
            <UserAddIcon aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-400" />
            <span class="ml-2" :class="{ 'lg:hidden': !isSidebarOpen }">Register</span>
          </router-link>
        </li>
        <li>
          <router-link
            :to="{ name: 'Login' }"
            class="flex items-center p-2 overflow-hidden rounded-md hover:bg-gray-100"
            :class="{ 'justify-center': !isSidebarOpen }"
          >
            <LoginIcon aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-400" />
            <span class="ml-2" :class="{ 'lg:hidden': !isSidebarOpen }">Login</span>
          </router-link>
        </li>
      </ul>
    </nav>
    <!-- Sidebar footer -->
    <SidebarFooter />
  </aside>
</template>

<script setup>
import { ref } from 'vue'
import useState from '../../hooks/useState'
import SidebarHeader from './SidebarHeader.vue'
import SidebarFooter from './SidebarFooter.vue'
import Backdrop from '../global/Backdrop.vue'
import HomeIcon from '../icons/HomeIcon.vue'
import UserAddIcon from '../icons/UserAddIcon.vue'
import LoginIcon from '../icons/LoginIcon.vue'

const { isSidebarOpen } = useState()
</script>
