<template>
  <button
    :type="type"
    class="inline-flex items-center justify-center px-4 py-2 font-medium transition-colors rounded-md focus:outline-none focus:ring"
  >
    <slot></slot>
  </button>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  type: {
    type: String,
    default: 'button',
  },
})
</script>
