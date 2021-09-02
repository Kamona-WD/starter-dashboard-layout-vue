import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  setup(props, { slots }) {
    return () => (
      <>
        <RouterLink
          to={{ name: 'Home' }}
          class="inline-block mb-6 text-3xl font-bold tracking-wider text-gray-600 uppercase"
        >
          K-WD
        </RouterLink>

        <main>
          <div class="w-full max-w-sm px-4 py-6 space-y-6 bg-white border rounded-md">
            <h1 class="text-xl font-semibold text-center text-gray-600">{props.title}</h1>

            {slots.form && slots.form()}

            {slots.footer && slots.footer()}
          </div>
        </main>
      </>
    )
  },
})
