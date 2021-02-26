<template>
  <!-- Backdrop -->
  <Backdrop :show="show" @close="close" />

  <!-- Panel -->
  <transition
    enter-active-class="transition duration-300 ease-in-out transform"
    :enter-from-class="left ? '-translate-x-full' : 'translate-x-full'"
    :enter-to-class="left ? '-translate-x-0' : 'translate-x-0'"
    leave-active-class="transition duration-300 ease-in-out transform"
    :leave-from-class="left ? '-translate-x-0' : 'translate-x-0'"
    :leave-to-class="left ? '-translate-x-full' : 'translate-x-full'"
  >
    <section
      v-if="show"
      :aria-labelledby="title"
      class="fixed inset-y-0 z-20 w-full max-w-xs bg-white sm:max-w-md"
      :class="{ 'right-0': !left, 'left-0': left }"
    >
      <div class="flex items-center justify-between flex-shrink-0 p-2">
        <h6 class="p-2 text-lg">{{ title }}</h6>
        <!-- Close button -->
        <button @click="close" class="p-2 rounded-md focus:outline-none focus:ring">
          <CloseIcon class="w-6 h-6 text-gray-600" />
        </button>
      </div>
      <!-- Panel content -->
      <slot></slot>
    </section>
  </transition>
</template>

<script setup>
import { defineProps, useContext, defineEmit } from 'vue'
import Backdrop from '../global/Backdrop.vue'
import CloseIcon from '../icons/CloseIcon.vue'

defineProps({
  show: {
    type: Boolean,
    required: true,
  },
  left: {
    type: Boolean,
    required: false,
    default: false,
  },
  title: {
    type: String,
    required: true,
  },
})

const { emit } = useContext()

defineEmit(['close'])

const close = () => {
  emit('close')
}
</script>
