import { defineComponent } from 'vue'

export default defineComponent({
  setup(_, { slots }) {
    return () => (
      <div class="flex flex-col items-center justify-center min-h-screen p-4 space-y-4 antialiased text-gray-900 bg-white">
        {slots.default()}
      </div>
    )
  },
})
