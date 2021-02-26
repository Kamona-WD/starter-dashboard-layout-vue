<template>
  <button
    type="button"
    class="flex items-center justify-center p-2 text-gray-400 transition-colors bg-gray-100 rounded-full focus:outline-none focus:ring hover:bg-gray-200 hover:text-gray-500"
  >
    <span class="sr-only">{{ label }}</span>
    <slot></slot>
  </button>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  label: {
    type: String,
    required: true,
  },
})
</script>
