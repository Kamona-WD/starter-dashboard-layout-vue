import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'
import { isSidebarOpen } from '../../states/globalStates'
import Overlay from '../global/Overlay'

const sidebarLinks = [
  {
    label: 'Home',
    component: 'Home',
    icon: 'tabler--home',
  },
  {
    label: 'Register',
    component: 'Register',
    icon: 'tabler--user-plus',
  },
  {
    label: 'Login',
    component: 'Login',
    icon: 'tabler--login',
  },
]

const SidebarHeader = defineComponent({
  setup() {
    return () => (
      <div
        class={[
          'flex items-center justify-between flex-shrink-0 p-2',
          {
            'lg:justify-center': !isSidebarOpen.value,
          },
        ]}
      >
        <RouterLink
          to={{ name: 'Home' }}
          class="p-2 text-xl font-semibold leading-8 tracking-wider uppercase whitespace-nowrap"
        >
          K<span class={{ 'lg:hidden': !isSidebarOpen.value }}>-WD</span>
        </RouterLink>
      </div>
    )
  },
})

const SidebarFooter = defineComponent({
  setup() {
    return () => (
      <div class="flex-shrink-0 p-2 border-t max-h-14">
        <button class="inline-flex items-center justify-center px-4 py-2 font-medium transition-colors rounded-md focus:outline-none focus:ring w-full text-gray-700 bg-gray-200 hover:bg-gray-300">
          <span aria-hidden="true" class="iconify tabler--logout w-6 h-6" />
          <span class={['ml-2', { 'lg:hidden': !isSidebarOpen.value }]}>Logout</span>
        </button>
      </div>
    )
  },
})

export default defineComponent({
  setup() {
    return () => (
      <>
        <Overlay
          show={isSidebarOpen.value}
          onClose={() => {
            isSidebarOpen.value = false
          }}
          class="lg:hidden"
        />
        <aside
          class={[
            'fixed inset-y-0 z-50 flex flex-col flex-shrink-0 w-64 transition-all bg-white border-r shadow-lg lg:shadow-none',
            { '-translate-x-full lg:translate-x-0 lg:w-20': !isSidebarOpen.value },
          ]}
        >
          <SidebarHeader />

          <nav aria-label="Main" class="flex-1 overflow-hidden hover:overflow-y-auto">
            <ul class="p-2 space-y-1">
              {sidebarLinks.map((link) => (
                <li>
                  <RouterLink
                    to={{ name: link.component }}
                    class={[
                      'flex items-center p-2 overflow-hidden rounded-md hover:bg-gray-100',
                      { 'justify-center': !isSidebarOpen.value },
                    ]}
                  >
                    <span aria-hidden="true" class={['iconify flex-shrink-0 w-6 h-6 text-gray-400', link.icon]}></span>
                    <span class={['ml-2', { 'lg:hidden': !isSidebarOpen.value }]}>{link.label}</span>
                  </RouterLink>
                </li>
              ))}
            </ul>
          </nav>

          <SidebarFooter />
        </aside>
      </>
    )
  },
})
