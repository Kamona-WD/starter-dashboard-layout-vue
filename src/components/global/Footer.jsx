import { defineComponent } from 'vue'
import { scrollingDown, scrollingUp } from '../../states/globalStates'
import GithubIcon from '../icons/GithubIcon'

export default defineComponent({
  setup() {
    return () => (
      <footer
        class={[
          'sticky bottom-0 flex items-center justify-between flex-shrink-0 transition-transform duration-500 bg-white p-4 border-t max-h-14',
          { 'translate-y-full': scrollingDown.value, 'translate-y-0': scrollingUp.value },
        ]}
      >
        <div>K-WD &copy; 2020</div>
        <div class="text-sm">
          Made by &nbsp;
          <a
            class="text-blue-400 underline"
            href="https://github.com/Kamona-WD"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ahmed Kamel
          </a>
        </div>
        <div>
          <a
            href="https://github.com/Kamona-WD/starter-dashboard-layout-vue"
            target="_blank"
            class="flex items-center gap-x-1"
          >
            <GithubIcon aria-hidden="true" class="w-6 h-6 text-gray-400" />
            <span class="hidden text-sm md:block">View on Github</span>
          </a>
        </div>
      </footer>
    )
  },
})
