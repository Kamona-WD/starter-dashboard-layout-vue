import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'
import { Menu, MenuButton, MenuItems, MenuItem, TransitionRoot } from '@headlessui/vue'
import {
  isNotificationsPanelOpen,
  isSearchPanelOpen,
  isSettingsPanelOpen,
  isSidebarOpen,
  scrollingDown,
  scrollingUp,
  toggleSidebar,
} from '../../states/globalStates'
import IconButton from '../global/IconButton'

const UserMenu = defineComponent({
  setup() {
    const userMenuItems = [
      {
        label: 'Your Profile',
        link: '#',
      },
      {
        label: 'Sign out',
        link: '#',
      },
    ]

    return () => (
      <Menu as="div" class="relative flex-shrink-0">
        <MenuButton class="relative flex items-center overflow-hidden rounded-full group focus:outline-none focus:ring">
          <span class="sr-only">Open user menu</span>
          <img
            class="object-cover w-10 h-10 rounded-full group-hover:opacity-90"
            src="https://avatars0.githubusercontent.com/u/57622665?s=460&u=8f581f4c4acd4c18c33a87b3e6476112325e8b38&v=4"
            alt="Ahmed Kamel"
          />
        </MenuButton>
        <TransitionRoot
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-in"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <MenuItems class="absolute right-0 z-20 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg focus:outline-none">
            {userMenuItems.map((item) => (
              <MenuItem>
                {({ active }) => (
                  <a
                    href={item.link}
                    class={[
                      'block px-4 py-2 text-sm text-gray-700',
                      {
                        'bg-gray-100': active,
                      },
                    ]}
                  >
                    {item.label}
                  </a>
                )}
              </MenuItem>
            ))}
          </MenuItems>
        </TransitionRoot>
      </Menu>
    )
  },
})

export default defineComponent({
  setup() {
    return () => (
      <header
        class={[
          'sticky top-0 z-10 bg-white flex-shrink-0 border-b transition-transform duration-500',
          { '-translate-y-full': scrollingDown.value, '-translate-y-0': scrollingUp.value },
        ]}
      >
        <div class="flex items-center justify-between p-2">
          <div class="flex items-center space-x-3">
            <RouterLink to={{ name: 'Home' }} class="p-2 text-xl font-semibold tracking-wider uppercase lg:hidden">
              K-WD
            </RouterLink>

            <button onClick={toggleSidebar} class="inline-flex items-center p-2 rounded-md focus:outline-none focus:ring">
              <span class="sr-only">Toggle sidebar</span>
              <span
                class={['iconify tabler--chevrons-right w-6 h-6 text-gray-600', { 'transform transition-transform -rotate-180': isSidebarOpen.value }]}
              />
            </button>
          </div>
          <nav aria-label="Secondary" class="flex items-center space-x-3">
            <IconButton
              text="Open search panel"
              onClick={() => {
                isSearchPanelOpen.value = true
              }}
            >
              <span aria-hidden="true" class="iconify tabler--search w-6 h-6" />
            </IconButton>

            <IconButton
              text="Open notifications panel"
              onClick={() => {
                isNotificationsPanelOpen.value = true
              }}
            >
              <span aria-hidden="true" class="iconify tabler--bell w-6 h-6" />
            </IconButton>

            <IconButton
              text="Open settings panel"
              onClick={() => {
                isSettingsPanelOpen.value = true
              }}
            >
              <span aria-hidden="true" class="iconify tabler--settings w-6 h-6" />
            </IconButton>

            <UserMenu />
          </nav>
        </div>
      </header>
    )
  },
})
