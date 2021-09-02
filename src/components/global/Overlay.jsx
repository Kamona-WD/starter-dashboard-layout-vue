import { defineComponent, Transition } from 'vue'

export default defineComponent({
  props: {
    show: {
      type: Boolean,
      required: true,
    },
  },
  emits: ['close'],
  setup(props, { emit }) {
    const close = () => {
      emit('close')
    }

    return () => (
      <Transition
        enterActiveClass="transition-opacity duration-300 ease-in-out"
        enterFromClass="opacity-0"
        enterToClass="opacity-100"
        leaveActiveClass="transition-opacity duration-300 ease-in-out"
        leaveFromClass="opacity-100"
        leaveToClass="opacity-0"
      >
        <div
          v-show={props.show}
          onClick={close}
          aria-hidden="true"
          class="fixed inset-0 z-50 bg-gray-900 bg-opacity-75 backdrop-blur-sm"
        ></div>
      </Transition>
    )
  },
})
