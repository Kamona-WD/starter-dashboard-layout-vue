import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    text: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'button',
    },
  },
  setup(props, { slots, attrs }) {
    return () => (
      <button
        type={props.type}
        {...attrs}
        class="flex items-center justify-center p-2 text-gray-400 transition-colors bg-gray-100 rounded-full focus:outline-none focus:ring hover:bg-gray-200 hover:text-gray-500"
      >
        <span class="sr-only">{props.text}</span>
        {slots.default()}
      </button>
    )
  },
})
