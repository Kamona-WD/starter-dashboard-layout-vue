import { defineComponent, onMounted, onUnmounted } from 'vue'
import Sidebar from '../sidebar/Sidebar'
import Navbar from '../navbar/Navbar'
import Footer from '../global/Footer'
import SearchPanel from '../panels/SearchPanel'
import SettingsPanel from '../panels/SettingsPanel'
import NotificationsPanel from '../panels/NotificationsPanel'
import { handleResize, handleScroll, isSidebarOpen } from '../../states/globalStates'

export default defineComponent({
  setup(_, { slots }) {
    onMounted(() => {
      window.addEventListener('resize', handleResize)
      window.addEventListener('scroll', handleScroll)
    })

    onUnmounted(() => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleScroll)
    })

    return () => (
      <div class="max-w-[100vw] flex min-h-screen antialiased text-gray-900 bg-white">
        <Sidebar />
        <div
          class={[
            'flex max-w-full flex-col flex-1',
            { 'lg:pl-64': isSidebarOpen.value, 'lg:pl-20': !isSidebarOpen.value },
          ]}
        >
          <Navbar />
          <div class="flex-1">
            {slots.default()}
            <Footer />
          </div>
        </div>

        <SearchPanel />
        <SettingsPanel />
        <NotificationsPanel />
      </div>
    )
  },
})
