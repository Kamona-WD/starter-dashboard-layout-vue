<template>
  <nav class="flex items-center justify-between p-2">
    <!-- Navbar left -->
    <div class="flex items-center space-x-3">
      <router-link :to="{ name: 'Home' }" class="p-2 text-xl font-semibold tracking-wider uppercase lg:hidden">
        K-WD
      </router-link>
      <!-- Toggle sidebar button -->
      <button @click="toggleSidebar" class="p-2 rounded-md focus:outline-none focus:ring">
        <span class="sr-only">Toggle sidebar</span>
        <ChevronDoubleRight
          aria-hidden="true"
          class="w-4 h-4 text-gray-600"
          :class="{ 'transform transition-transform -rotate-180': isSidebarOpen }"
        />
      </button>
    </div>

    <!-- Navbar right -->
    <nav aria-label="Secondary" class="flex items-center space-x-3">
      <!-- Search button -->
      <NavbarIconButton @click="isSearchPanelOpen = true" label="Open search panel">
        <SearchIcon aria-hidden="true" class="w-6 h-6" />
      </NavbarIconButton>

      <!-- Notification Button -->
      <NavbarIconButton @click="isNotificationsPanelOpen = true" label="Open notifications panel">
        <BellIcon aria-hidden="true" class="w-6 h-6" />
      </NavbarIconButton>

      <!-- User menu -->
      <Menu as="div" class="relative" v-slot="{ open }">
        <MenuButton
          aria-haspopup="true"
          :aria-expanded="open ? 'true' : 'false'"
          id="user-menu"
          class="relative flex items-center overflow-hidden rounded-full group focus:outline-none focus:ring"
        >
          <span class="sr-only">Open user menu</span>
          <img
            class="object-cover w-10 h-10 rounded-full group-hover:opacity-90"
            src="https://avatars0.githubusercontent.com/u/57622665?s=460&u=8f581f4c4acd4c18c33a87b3e6476112325e8b38&v=4"
            alt="Ahmed Kamel"
          />
          <!-- <div class="absolute right-0 p-1 bg-green-400 rounded-full top-1 animate-ping"></div>
          <div class="absolute right-0 p-1 bg-green-400 border border-white rounded-full top-1"></div> -->
        </MenuButton>
        <transition
          enter-active-class="transition duration-100 ease-out"
          enter-from-class="transform scale-95 opacity-0"
          enter-to-class="transform scale-100 opacity-100"
          leave-active-class="transition duration-75 ease-out"
          leave-from-class="transform scale-100 opacity-100"
          leave-to-class="transform scale-95 opacity-0"
        >
          <MenuItems
            class="absolute right-0 z-20 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="user-menu"
          >
            <MenuItem v-slot="{ active }">
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700"
                :class="{ 'bg-gray-100': active }"
                role="menuitem"
              >
                Your Profile
              </a>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700"
                :class="{ 'bg-gray-100': active }"
                role="menuitem"
              >
                Settings
              </a>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700"
                :class="{ 'bg-gray-100': active }"
                role="menuitem"
              >
                Sign out
              </a>
            </MenuItem>
          </MenuItems>
        </transition>
      </Menu>
    </nav>
  </nav>
</template>

<script setup>
import useState from '../../hooks/useState'
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import NavbarIconButton from './NavbarIconButton.vue'
import ChevronDoubleRight from '../icons/ChevronDoubleRight.vue'
import SearchIcon from '../icons/SearchIcon.vue'
import BellIcon from '../icons/BellIcon.vue'

const { isSidebarOpen, isSearchPanelOpen, toggleSidebar, isNotificationsPanelOpen } = useState()
</script>
