<template>
  <div class="antialiased text-gray-900 bg-white">
    <div class="flex h-screen overflow-y-hidden bg-white">
      <!-- Sidebar -->
      <Sidebar />

      <div class="flex flex-col flex-1 h-full overflow-hidden">
        <!-- Navbar -->
        <header class="flex-shrink-0 border-b">
          <Navbar />
        </header>
        <!-- Main content -->
        <main class="flex-1 max-h-full p-5 overflow-hidden overflow-y-scroll">
          <slot></slot>
        </main>
        <!-- Main footer -->
        <footer class="flex items-center justify-between flex-shrink-0 p-4 border-t max-h-14">
          <div>K-WD &copy; 2020</div>
          <div class="text-sm">
            Made by
            <a
              class="text-blue-400 underline"
              href="https://github.com/Kamona-WD"
              target="_blank"
              rel="noopener noreferrer"
              >Ahmed Kamel</a
            >
          </div>
          <div>
            <!-- Github svg -->
            <a
              href="https://github.com/Kamona-WD/starter-dashboard-layout-vue"
              target="_blank"
              class="flex items-center space-x-1"
            >
              <svg class="w-6 h-6 text-gray-400" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                <path
                  fill-rule="evenodd"
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                ></path>
              </svg>
              <span class="hidden text-sm md:block">View on Github</span>
            </a>
          </div>
        </footer>
      </div>

      <!-- Setting panel button -->
      <div class="fixed right-0 transform rotate-90 translate-x-8 top-1/2">
        <Button @click="isSettingsPanelOpen = true" class="text-sm font-medium text-white uppercase bg-gray-600">
          Settings
        </Button>
      </div>

      <SettingsPanel :show="isSettingsPanelOpen" @close="isSettingsPanelOpen = false" />
      <SearchPanel left :show="isSearchPanelOpen" @close="isSearchPanelOpen = false" />
      <NotificationsPanel left :show="isNotificationsPanelOpen" @close="isNotificationsPanelOpen = false" />
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import useState from '../../hooks/useState'
import Sidebar from '../sidebar/Sidebar.vue'
import Navbar from '../navbar/Navbar.vue'
import SettingsPanel from '../panels/SettingsPanel.vue'
import SearchPanel from '../panels/SearchPanel.vue'
import NotificationsPanel from '../panels/NotificationsPanel.vue'
import Button from '../global/Button.vue'

const { isSidebarOpen, isSettingsPanelOpen, isSearchPanelOpen, isNotificationsPanelOpen } = useState()

const checkScreen = () => {
  if (window.innerWidth <= 1024) {
    isSidebarOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('resize', checkScreen)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkScreen)
})
</script>
