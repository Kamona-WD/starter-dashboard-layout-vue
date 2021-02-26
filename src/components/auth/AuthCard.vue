<template>
  <router-link
    :to="{ name: 'Home' }"
    class="inline-block mb-6 text-3xl font-bold tracking-wider text-gray-600 uppercase"
  >
    K-WD
  </router-link>
  <main>
    <div class="w-full max-w-sm px-4 py-6 space-y-6 bg-white border rounded-md">
      <h1 class="text-xl font-semibold text-center text-gray-600">{{ title }}</h1>

      <slot name="form"></slot>

      <slot name="footer"></slot>
    </div>
  </main>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  title: {
    type: String,
    required: true,
  },
})
</script>
